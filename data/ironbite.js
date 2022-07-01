/*
 * Add the lists of Iron Bite events, subdivided by 'subgroups'.
 * The order is important!
 */
const add_ironbite_timeline_data = (events) => {
	add_ironbitemilestones(events);
	add_ironbite_eras(events);
}

// List of milestone events
const add_ironbitemilestones = (events) => {
  const short_events = [
    {start: '2012-02-03', content: 'Hajo announces<br>Simutrans Iron Bite', img_url: "https://a.fsdn.com/allura/p/ironsimu/icon?1385411551?&w=90", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?msg=85637"},
    {start: '2014-07-29', content: 'Last contribution to<br>Simutrans Iron Bite', source_name: 'SourceForge', source_url: 'https://sourceforge.net/p/ironsimu/code/HEAD/tree/ironbite/trunk/'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'otrp', subgroup: 'milestone', className: 'milestone'}]));
}
 
// List of 'Eras'
const add_ironbite_eras = (events) => {
  const short_events = [
    {start: '2012-02-03', end: '2014-07-29', content: 'Simutrans Ironbite', className: 'hajo'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'otrp'}]));
}
