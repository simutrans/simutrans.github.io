/*
 * Initializes the timeline
 */
// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

// Groups are the Simutrans forks
// The order is important!
const visibility = { milestone: true, release: true, contributor: true, pakset: true };
const groups = new vis.DataSet([
  {subgroupVisibility: {...visibility}, id: 'otrp', content:'Simutrans OTRP<br>Simutrans Iron Bite'},
  {subgroupVisibility: {...visibility}, id: 'extended', content:'Simutrans Extended'},
  {subgroupVisibility: {...visibility}, id: 'standard', content:'Simutrans <br><img src="https://www.simutrans.com/images/resources/simutrans-no-background-and-typography.svg" width=150 />'},
]);

// Now add the events
const events = new vis.DataSet([]);
add_standard_timeline_data(events);
add_extended_timeline_data(events);
add_otrp_timeline_data(events);
add_ironbite_timeline_data(events);

// Configuration for the Timeline
const options = {
  editable: false,
  stack: true,
  verticalScroll: true,
  height: '80vh',
  maxHeight: '80vh',
};

// Create a Timeline
const timeline = new vis.Timeline(container, events, groups, options); 

/*
 * Button functions
 */
const toggleStacking = () => {
  options.stack = !options.stack;
  timeline.setOptions(options);
}

const toggleSubgroupVisibility = (subgroup) => {
  groups.get('standard').subgroupVisibility[subgroup] = !groups.get('standard').subgroupVisibility[subgroup];
  groups.get('extended').subgroupVisibility[subgroup] = !groups.get('extended').subgroupVisibility[subgroup];
  groups.get('otrp').subgroupVisibility[subgroup] = !groups.get('otrp').subgroupVisibility[subgroup];
  timeline.setGroups(groups);
}

/*
 * Showing source information
 */
timeline.on('select', function (properties) {
  const previous_details = document.getElementById('details');
  if( previous_details ) previous_details.remove();
  selected_event = events.get(properties.items[0]);
  if ( selected_event.content !== undefined) {
    const details = document.createElement('div');
    details.id = 'details';
    details.innerHTML = '<center><h3>Event Details</h3></center>';
    details.innerHTML += 'Content: ' + selected_event.content.replace(/<img[^>]*>/g,"").replace(/<br[^>]*>/g, ' ') + '</br>';
    details.innerHTML += 'Date: ' + selected_event.start + '</br>';

    if ( selected_event.source_name && selected_event.source_url ) {
      details.innerHTML += 'Source: <a href= "' + selected_event.source_url + '">' + selected_event.source_name + '</a>';
    } else if ( selected_event.source_url ) {
      details.innerHTML += 'Source: <a href= "' + selected_event.source_url + '">' + selected_event.source_url + '</a>';
    } else if ( selected_event.name_url ){
      details.innerHTML += 'Source: ' + selected_event.source_name; 
    }

    document.getElementById('timeline').appendChild(details)
  }
});
