'use strict';
import {TodoItem} from 'src/todo-item';

describe('TodoItem', () => {
  var sut;

  beforeEach(() => {
    sut = new TodoItem("foo");
  });

  describe('when creating a new instance', () => {
    it('should not mark the item as done', () => {
      sut.isCompleted.should.be.false();
    });

    it('should set given title', () => {
      sut.title.should.equal("foo");
    });

    it('should trim given title', () => {
      sut = new TodoItem("   foo   ");
      sut.title.should.equal("foo");
    });

    it('should not activate the edit mode', () => {
      sut.isEditing.should.be.false();
    });
  });

  describe('when double clicking an item', () => {
    it('should not set the edit mode when clicked only once', () => {
      sut.labelClicked();
      sut.isEditing.should.be.false();
    });

    // uuuh, not the best way to test time related stuff?
    it('should activate the edit mode when double clicked within e.g. 50ms', (done) => {
      sut.labelClicked();
      setTimeout(() => {
        sut.labelClicked();
        sut.isEditing.should.be.true();
        done();
      }, 10);
    });

    it('should not activate the edit mode when double clicked two slow > 350ms', (done) => {
      sut.labelClicked();
      setTimeout(() => {
        sut.labelClicked();
        sut.isEditing.should.be.false();
        done();
      }, 360);
    });
  });

  describe('when finishing edit mode', () => {
    it('should deactivate edit mode', () => {
      sut.isEditing = true;
      sut.finishEditing();
      sut.isEditing.should.be.false();
    });

    it('should trim modified title', () => {
      sut.isEditing = true;
      sut.title = "   foo   ";

      sut.finishEditing();

      sut.title.should.be.equal("foo");
    });
  });

});
