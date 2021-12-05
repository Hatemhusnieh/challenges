'use strict';

class Animal {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = null;
    this.cats = null;
  }

  enqueue(anim, pref) {
    if (pref !== 'cats' && pref !== 'dogs') return 'can not accept animals other than dogs and cats';
    if (!this[pref]) {
      this[pref] = new Animal(anim);
    } else {
      let pointer = this[pref];
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new Animal(anim);
    }
  }

  dequeue(pref) {
    if (pref !== 'cats' && pref !== 'dogs') return null;
    if (!this[pref]) return `no more ${pref} to adopt`;
    let adoption = this[pref].value;
    this[pref] = this[pref].next;
    return adoption;
  }
}

describe('AnimalShelter', () => {

  describe('instantiate', () => {
    it('can instantiate empty animal List', () => {
      const list = new AnimalShelter();
      expect(list).toBeDefined();
      expect(list.dogs).toBeDefined();
      expect(list.cats).toBeDefined();
    });
  });

  describe('Enqueue', () => {
    it('adds a cats or a dogs', () => {
      const list = new AnimalShelter();
      list.enqueue('momo', 'cats');
      list.enqueue('fofo', 'dogs');
      expect(list.cats.value).toBeDefined();
      expect(list.dogs.value).toBeDefined();
    });

    it('adds multiple cats or dogs', () => {
      const list = new AnimalShelter();
      list.enqueue('1', 'cats');
      list.enqueue('2', 'cats');
      list.enqueue('3', 'cats');
      list.enqueue('1', 'dogs');
      list.enqueue('2', 'dogs');
      list.enqueue('3', 'dogs');
      expect(list.cats.value).toEqual('1');
      expect(list.cats.next.value).toEqual('2');
      expect(list.cats.next.next.value).toEqual('3');
      expect(list.dogs.value).toEqual('1');
      expect(list.dogs.next.value).toEqual('2');
      expect(list.dogs.next.next.value).toEqual('3');
    });

    it('can not add animals other than cats or a dogs', () => {
      const list = new AnimalShelter();
      expect(list.enqueue('zozo', 'bird')).toBe('can not accept animals other than dogs and cats');
    });
  });

  describe('Dequeue', () => {
    it('removes dogs or cats', () => {
      const list = new AnimalShelter();
      list.enqueue('1', 'cats');
      list.enqueue('2', 'cats');
      list.enqueue('1', 'dogs');
      list.enqueue('2', 'dogs');
      expect(list.dequeue('cats')).toEqual('1');
      expect(list.cats.value).toEqual('2');
      expect(list.dequeue('dogs')).toEqual('1');
      expect(list.dogs.value).toEqual('2');
    });

    it('can not return with wrong preference', () => {
      const list = new AnimalShelter();
      expect(list.dequeue('lion')).toBeNull();
      expect(list.dequeue('cats')).toEqual('no more cats to adopt');
      expect(list.dequeue('dogs')).toEqual('no more dogs to adopt');
      list.enqueue('1', 'cats');
      expect(list.dequeue()).toBeNull();
    });
  });
});

