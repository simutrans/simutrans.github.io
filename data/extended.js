 /*
  * Add the lists of Extended events, subdivided by 'subgroups'.
  * The order is important!
  */
const add_extended_timeline_data = (events) => {
	add_extendedmilestones(events);
	add_extended_releases(events);
	add_extended_contributors(events);
	add_extended_eras(events);
    add_extended_paksets(events);
}

// List of milestone events
const add_extendedmilestones = (events) => {
  const short_events = [
    {start: '2009-01-21', content: 'Simutrans Experimental is born', source_name: 'Simutrans International Forum', source_url: 'https://forum.simutrans.com/index.php?msg=12596'},
    {start: '2011-09-17', content: 'Simutrans Experimental board', source_name: 'Simutrans Blog', source_url: 'https://blog.simutrans.com/?p=1678'},
    {start: '2017-01', content: 'Simutrans Experimental is<br>renamed to Simutrans Extended'},
    {start: '2022-04-03', content: 'Elevated way supports', source_name: 'Simutrans International Forum', source_url: 'https://forum.simutrans.com/index.php/topic,21519.0.html'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'milestone', className: 'milestone'}]));
}

// List of contributors events
const add_extended_contributors = (events) => {
  const short_events = [
    {start: '2008-12-04', content: 'Jamespetts starts contributing', img_url: "https://forum.simutrans.com/custom_avatar/avatar_53_1470856190.jpg", source_name: 'International Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php/topic,932.msg8447.html#msg8447'},
	{start: '2017-07-01', content: 'Phystam joins', source_name: 'International Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php?action=profile;u=11672'},
	{start: '2018-04-28', content: 'Ranran joins', img_url: "https://forum.simutrans.com/custom_avatar/avatar_11892_1648587872.png", source_name: 'International Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php?action=profile;u=11892'},
	{start: '2021-04-30', content: 'PJMack joins', source_name: 'International Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php?action=profile;u=12502'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'contributor', className:'contributor'}]));
}

// List of 'Eras'
const add_extended_eras = (events) => {
  const short_events = [
    {start: '2009-01-21', end: '2022-07', content: 'Jamespetts lead', className: 'jamespetts'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'extended'}]));
}

// List of paksets events
const add_extended_paksets = (events) => {
  const short_events = [
    {start: '2018-09-06', content: 'Pak256-Ex 1.0.0'},
    {start: '2019-09-08', content: 'Pak256-Ex 2.0.0'},
  ]
  short_events.forEach((event) => events.add([{...event,  group: 'extended', subgroup: 'pakset', className: 'pakset'}]));
}

// List of releases
const add_extended_releases = (events) => {
  const short_events = [
    {start: '2013-06-10', content: '11.00'},
    {start: '2011-09-18', content: '10.00', source_name: "International Simutrans Forum", source_url: "https://forum.simutrans.com/index.php?topic=8056.msg76436"},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'release', className: 'release'}]));
}
