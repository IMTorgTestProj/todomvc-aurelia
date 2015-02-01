'use strict';

var system = require('../../jspm_packages/system.js');
             require('../../config.js');

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Todos', function(){
  var sut;

  beforeEach(function(done) {
    system.import('src/todos').then(function(module) {
      sut = new module.Todos();
      done();
    });
  });

  describe('when creating a new instance', function() {
    it('should not have a filter set', function() {
      expect(sut.filter).to.be.undefined();
    });

    it('should init empty list of todo items', function() {
      sut.items.should.be.empty();
    });

    it('should init new todo field with empty value', function() {
      expect(sut.newTodoTitle).to.be.null();
    });

    it('should not have any item left to be done', function() {
      sut.countTodosLeft.should.be.equal(0);
    });

    it('should not filter any item', function() {
      sut.filteredItems.should.be.equal(sut.items);
    });
  });

  describe('when activating the todo view model', function() {
    it('should set the filter', function() {
      sut.activate({ filter: 'active' });
      expect(sut.filter).to.be.equal('active');
    });

    it('should reset the filter if non is passed in', function() {
      sut.activate({});
      expect(sut.filter).to.be.undefined();
    });
  });

  describe('when adding a new todo', function() {
    it('should add it to the list of todo items', function() {
      sut.addNewTodo("foo");
      sut.items[0].title.should.equal("foo");
    });

    it('should add current newTodo value if nothing passed into function', function() {
      sut.newTodoTitle = "foo";
      sut.addNewTodo();
      sut.items[0].title.should.equal("foo");
    });

    it('should reset new todo field back to empty', function() {
      sut.newTodoTitle = "foo";
      sut.addNewTodo("foo");
      expect(sut.newTodoTitle).to.be.null();
    });

    it('should increase count of items left', function() {
      sut.newTodoTitle = "foo";
      sut.addNewTodo("foo");
      sut.countTodosLeft.should.be.equal(1);
    });
  });

  describe('when deleting a todo', function() {
    var fakeTodo = new Object();

    beforeEach(function() {
      sut.items.push(fakeTodo);
    });

    it('should remove it from the list of todo items', function() {
      sut.deleteTodo(fakeTodo);
      sut.items.should.be.empty();
    });

    it('should be fail safe when trying to remove not existing item from the list of todo items', function() {
      sut.deleteTodo(new Object());
      sut.items.should.contain(fakeTodo);
    });

    it('should decrease count of items left', function() {
      sut.deleteTodo(fakeTodo);
      sut.countTodosLeft.should.be.equal(0);
    });
  });

  describe('with two items given', function() {
    beforeEach(function() {
      sut.addNewTodo("foo");
      sut.addNewTodo("bar");
      sut.items[1].isChecked = true;
    });

    describe('when counting incompleted todos', function() {
      it('should calculate the total of items left for doing', function() {
        sut.countTodosLeft.should.be.equal(1);
      });

      it('should restore count of items left for doing when unchecking', function() {
        sut.items[1].isChecked = false;
        sut.countTodosLeft.should.be.equal(2);
      });
    });

    describe('when filtering the list of todo items', function() {
      it('should hide completed todo items from the list', function() {
        sut.filter = "active";

        sut.filteredItems.should.have.length(1);
        sut.filteredItems[0].title.should.equal("foo")
      });

      it('should hide active todo items from the list', function() {
        sut.filter = "completed";

        sut.filteredItems.should.have.length(1);
        sut.filteredItems[0].title.should.equal("bar")
      });

      it('should not hide any todo item if filter is invalid', function() {
        sut.filter = "not-supported";

        sut.filteredItems.should.have.length(2);
      });
    });

    describe('when clearing the list of completed todo items', function() {
      it('should delete the completed todo items only', function() {
        sut.clearCompletedTodos();

        sut.items.should.have.length(1);
        sut.items[0].title.should.equal("foo")
      });
    });
  });

});