# Adding new events

You can add new events to the Simutrans Timeline by editing the *.js files located in this repository. You can do this directly within GitHub's web interface, by opening the file and then clicking "Edit this file" button (pencil icon).
- Simutrans (Standard) events are in [standard.js](./standard.js).
- Simutrans Extended events are in [extended.js](./extended.js).
- Simutrans OTRP events are in [otrp.js](./otrp.js).
- Simutrans Iron Bite events are in [ironbite.js](./ironbite.js).

There are four types of events:
- "milestones" for important events (or big features)
- "contributors" for contributor-related events (someone joining, for exmaple)
- "paksets" for paksets releases or other pakset-related events
- "releases" for program releases

## Example
Adding events is easy. Let's see it with an example. Suppose You are a 'standard' contributor that wants to add the date you joined.
1. Open [standard.js](./standard.js)
2. Go to the ``List of contributors events`` section (you can do CTRL+F to find it). You will see a code with a list like this:
```
// List of contributors events
const add_standard_contributors = (events) => {
  const short_events = [
    {start: '2009-07-29', content: "Ters joins"},
    {start: '2010-02-04', content: "TurfIt joins"},
    //etc...
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'contributor', className:'contributor'}]));
}
```
3. Simply add an item to the short_events list with the date (YYY-MM-DD) and content field of the event, following the format you see. Please try to keep the list ordered by date.
```
  const short_events = [
    {start: '2009-07-29', content: "Ters joins"},
    {start: '2010-01-30', content: "I JOINED HERE"},
    {start: '2010-02-04', content: "TurfIt joins"},
  ]
```
4. Add optional information. You can add:
- HTML tags inside the "content" field, to include, for example, images.
- The optional field "source_name" to indicate the source of such information.
- The optional field "source_url" to indicate the url source of such information (if any).
```
  const short_events = [
    {start: '2009-07-29', content: "Ters joins"},
    {start: '2010-01-30', content: "<img src='my_avatar_url' /><br>I JOINED HERE", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com"},
    {start: '2010-02-04', content: "TurfIt joins"},
  ]
```
5. Send your changes and we will approve it as soon as possible. After that, you will see them online.
