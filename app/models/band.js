import Ember from 'ember'
import DS from 'ember-data';

// export default Ember.Object.extend({
//   name: '',
//   description: '',

//   setupSongs: Ember.on('init', function() {
//     if (!this.get('songs')) {
//       this.set('songs', []);
//     }
//   }),

//   slug: Ember.computed('name', function() {
//     return this.get('name').dasherize();
//   })
// });


export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr(),
  songs: DS.hasMany('song'),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
});
