/*
 * Add the lists of Simutrans events, subdivided by 'subgroups'
 * The order is important!
 */
const add_standard_timeline_data = (events) => {
	add_non_simutrans(events);
	add_standardmilestones(events);
	add_standard_releases(events);
	add_standard_contributors(events);
	add_standard_eras(events);
    add_standard_paksets(events)
}

// List of milestone events
const add_standardmilestones = (events) => {
  const short_events = [
    {start: '1997-06', content: 'Hansjörg Malthaner "Hajo" starts working on Simutrans', source_name: "Hajo's simutrans.de (Wayback Machine)", source_url: "http://web.archive.org/web/20010513102245/http://www.simutrans.de/english/simu/history/index.html"},
    {start: '2001-05-20', content: "Hajo's simutrans.com", source_name: 'Wayback Machine', source_url: 'https://web.archive.org/web/20010606142955/http://www.s-line.de/homepages/simutrans/simutrans/'},
    {start: '2002-11-02', content: "Simutrans Websites Ring", source_name: 'Wayback Machine', source_url: 'https://web.archive.org/web/20020627013453/http://o.webring.com/hub?ring=simutransring'},
    {start: '2003-04-02', content: "Simugraph forum", source_name: 'Wayback Machine', source_url: 'https://web.archive.org/web/20030411182703/http://www.simugraph.com/forum/'},
    {start: '2003-05-14', content: "Simutrans Manual", source_name: 'Wayback Machine', source_url: 'https://web.archive.org/web/20030514014441/http://www.simugraph.com/simutrans/manual/en/'},
    {start: '2004-02', content: 'Dirk starts the</br>German Simutrans Forum', source_name: 'Deutsches Simutransforum', source_url: 'https://www.simutrans-forum.de'},
    {start: '2004-03-12', content: "Isaac's simutrans.com", source_name: 'Wayback Machine', source_url: 'https://web.archive.org/web/20040403095155/http://simutrans.com/'},
    {start: '2005-03-20', content: '86.0 with seasons, pre-signals, trams'},
    {start: '2005-07-23', content: 'The Simutrans Forum', source_name: 'The Simutrans Forum', source_url: 'https://web.archive.org/web/20051210120640/http://forum.simutrans.com/index.php/board,31.0.html'},
    {start: '2005-11-22', content: '88.0 with airplanes'},
    {start: '2006-06-08', content: '89.0 with path based signals'},
    {start: '2006-06', content: "Frank's Simutrans Wiki", source_name: 'The Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php/topic,15643.0.html'},
    {start: '2006-10-06', content: '99.0 with climates'},
    {start: '2007-05', content: 'Simutrans becomes<br> open source', img_url: "http://assets.stickpng.com/images/58481842cef1014c0b5e49a2.png", source_name: 'r829, contributors', source_url:'https://github.com/simutrans/simutrans/commit/58f5f09567d326563c161cde9787812e3e837920'},
    {start: '2008-02-29', content: 'Debian<br>packages<br>Simutrans', img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/375px-Openlogo-debianV2.svg.png", source_name: 'Debian repositories', source_url: 'https://salsa.debian.org/games-team/simutrans/-/commit/de73630d17ee8b30c26bfbaf6fa4d8d848b92dfd'},
    {start: '2008-11-14', content: 'Modern logo', img_url: "https://graphics.simutrans.com/albums/userpics/10003/simutrans-logo.png", source_name: 'graphics.simutrans.com', source_url: 'https://graphics.simutrans.com/displayimage.php?album=20&pid=110#top_display_media'},
    {start: '2009-11-23', content: 'Simutrans Blog', source_name: 'Simutrans Blog', source_url: 'https://blog.simutrans.com/?p=1'},
    {start: '2009-12-21', content: 'Review at Amiga Future', img_url: "https://www.amigafuture.de/app.php/gallery/image/14785/medium?sid=ef610ea04c22caee2427edbf64359782", source_name: 'amigafuture.de', source_url: 'https://www.amigafuture.de/app.php/gallery/image/14785'},
    {start: '2010-03-08', content: 'Wikis unification', source_name: 'Simutrans International Forum', source_url: 'https://forum.simutrans.com/index.php/topic,4646.0.html'},
    {start: '2012-04', content: '+100k downloads/month', img_url: "https://seeklogo.com/images/S/sourceforge-logo-0372412E49-seeklogo.com.png", source_name: 'SourceForge Download Statistics', source_url: "https://sourceforge.net/projects/simutrans/files/stats/timeline?dates=2012-02-01%20to%202012-05-01&period=monthly"},
    {start: '2012-10-22', content: '112.0 with squirrel script support'},
    {start: '2015-04', content: 'Project of<br>the Month', img_url: "https://seeklogo.com/images/S/sourceforge-logo-0372412E49-seeklogo.com.png", source_name: 'Sourceforge', source_url: "https://sourceforge.net/blog/april-2015-community-choice-project-of-the-month-simutrans/"},
    {start: '2016-01-13', content: "Modern simutrans.com", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php/topic,15161.0.html"},
    {start: '2016-05-24', content: 'Steam<br>Release', img_url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg", source_name: 'Steam', source_url: "https://store.steampowered.com/app/434520/Simutrans/"},
    {start: '2022-01-14', content: 'Scenario tutorials included<br>in pak64 and pak128', source_name: 'GitHub', source_url: 'https://github.com/simutrans/pak128/commit/a0f3da116308ad4597bc54291f1b674c642b40d0'},
    {start: '2022-06-04', content: 'Play Store<br>Release', img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/512px-Google_Play_Arrow_logo.svg.png", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?msg=200481"},
    //{start: '2022-06', content: 'Simutrans has been in development for 25 years!'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'milestone', className: 'milestone'}]));
}

// List of contributors events
const add_standard_contributors = (events) => {
  const short_events = [
    {start: '2001-05', content: "prissi discovers simutrans", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?msg=198007"},
    {start: '2003-11-12', content: "Hsiegeln joins"},
    {start: '2004-11-27', content: "prissi joins", source_name: 'Simutrans history.txt', source_url: "https://github.com/simutrans/simutrans/blob/master/simutrans/history.txt"},
    {start: '2006-09-02', content: "kierongreen joins"},
    {start: '2009-09-29', content: "Ters joins", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?action=profile;u=5141"},
    {start: '2010-02-04', content: "TurfIt joins", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?action=profile;u=5633"},
    {start: '2010-08-12', content: "And_dz joins", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?action=profile;u=6532", img_url: "https://forum.simutrans.com/custom_avatar/avatar_6532_1524256025.png"},
    {start: '2010-12-17', content: 'Dirk pass out', img_url: "http://blog.simutrans.com/wp-content/uploads/dirk_nr-150x150.jpg", source_name: 'Simutrans Blog', source_url: 'https://blog.simutrans.com/?p=1182'},
    {start: '2011-09-23', content: "YonaTYT joins", img_url: "https://www.mediafire.com/convkey/807c/aec9av4dc5uicnd6g.jpg", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?action=profile;u=8727"},
    {start: '2013-03-25', content: "Flemmbrav joins", img_url: "https://forum.simutrans.com/custom_avatar/avatar_10123_1543441188.png", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?msg=198007"},
    {start: '2015-12-08', content: "HaydenRead joins", source_name: 'Simutrans International Forum', source_url: "https://forum.simutrans.com/index.php?action=profile;u=11150"},
    {start: '2019-06-15', content: "128na starts working on<br>the Simutrans Addon Portal", img_url: "https://avatars.githubusercontent.com/u/15730241?s=40&v=4", source_name: 'GitHub', source_url: "https://github.com/128na/simutrans-portal/commit/01a9ceabeb4de49ff9548f132545205806f1c5ea"},
    {start: '2020-10-09', content: "Roboron takes over<br> Simutrans on Steam", img_url: "https://forum.simutrans.com/custom_avatar/avatar_11603_1533905631.png", source_name: 'International Simutrans Forum', source_url: "https://forum.simutrans.com/index.php/topic,20384.0.html"},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'contributor', className:'contributor'}]));
}

// List of non-Simutrans events to help position Simutrans in the history of trasnportation simulation games
const add_non_simutrans = (events) => {
    const short_events = [
    {start: '1994-11-15', content: 'Transport Tycoon is released'},
    {start: '2004-03-01', content: 'Initial OpenTTD release'},
    {start: '2004-09-01', content: 'Locomotion is released'},
    {start: '2018-01-01', content: 'Initial OpenLoco release'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'point', group: 'standard', subgroup: 'other', className:'other'}]));
}

// List of paksets events
const add_standard_paksets = (events) => {
  const short_events = [
    {start: '2003-12-10', content: 'pak128 start', img_url: "https://simutrans-germany.com/wiki/wiki/article_image.php?image_type=topic&id=3&reload=1"},
    {start: '2004-11-25', content: 'pak64.Japan start'},
    {start: '2006-06-23', content: 'pak128.Japan start'},
    {start: '2007-04-10', content: 'pak128.Britain start', img_url: "https://simutrans-germany.com/wiki/wiki/article_image.php?image_type=topic&id=12&reload=1"},
    {start: '2008-01-12', content: 'pak96.comic start', source_name: 'Deutsches Simutransforum', source_url: 'https://www.simutrans-forum.de/mybb/showthread.php?tid=2747', img_url: "https://simutrans-germany.com/wiki/wiki/article_image.php?image_type=topic&id=10&reload=1"},
    {start: '2009-02-14', content: 'Pak192.Comic start', source_name: 'International Simutrans Forum', source_url: 'https://forum.simutrans.com/index.php/topic,18775.0.html', img_url: "https://simutrans-germany.com/wiki/wiki/article_image.php?image_type=topic&id=20&reload=1"},
    {start: '2018-12-28', content: 'PAK128.German 1.0'},
    {start: '2020-10-21', content: 'PAK128.German 2.0'},
  ]
  short_events.forEach((event) => events.add([{...event,  group: 'standard', subgroup: 'pakset', className: 'pakset'}]));
}

// List of 'Eras'
const add_standard_eras = (events) => {
  const short_events = [
    {start: '1997-06', end: '2005-01', content: 'Hansjörg Malthaner "Hajo" lead', className: 'hajo'},
    {start: '2005-01', end: '2022-07', content: 'Markus Pristovsek "Prissi" lead', className: 'prissi'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'standard'}]));
}

// List of releases
const add_standard_releases = (events) => {
  const short_events = [
    {start: '1999-03-06', content: 'First public release'},
    {start: '2001-04-08', content: '0.78'},
    {start: '2001-09-26', content: '0.79'},
    {start: '2002-01-02', content: '0.80'},
    {start: '2002-10-06', content: '0.81'},
    {start: '2003-06-17', content: '0.82'},
    {start: '2003-12-22', content: '0.83'},
    {start: '2004-02-02', content: '0.84'},
    {start: '2005-02-19', content: '0.85'},
    {start: '2005-03-20', content: '86'},
    {start: '2005-10-27', content: '87'},
    {start: '2005-11-22', content: '88'},
    {start: '2006-06-01', content: '89'},
    {start: '2006-09-02', content: '90'},
    {start: '2006-09-10', content: '99'},
    {start: '2008-06-28', content: '100'},
    {start: '2009-01-03', content: '101'},
    {start: '2009-03-05', content: '102'},
    {start: '2009-10-18', content: '102.2'},
    {start: '2009-12-09', content: '102.2.1'},
    {start: '2010-03-08', content: '102.2.2'},
    {start: '2011-02-14', content: '110'},
    {start: '2011-03-12', content: '110.0.1'},
    {start: '2011-11-01', content: '111'},
    {start: '2012-01-23', content: '111.1'},
    {start: '2012-02-28', content: '111.2.1'},
    {start: '2012-03-20', content: '111.2.2'},
    {start: '2012-06-10', content: '111.3'},
    {start: '2012-10-22', content: '112'},
    {start: '2012-12-23', content: '112.1'},
    {start: '2013-03-17', content: '112.2'},
    {start: '2013-05-17', content: '112.3'},
    {start: '2014-04-28', content: '120'},
    {start: '2014-11-15', content: '120.0.1'},
    {start: '2015-10-31', content: '120.1'},
    {start: '2015-11-04', content: '120.1.1'},
    {start: '2016-01-07', content: '120.1.2'},
    {start: '2016-02-02', content: '120.1.3'},
    {start: '2016-02-12', content: '120.2'},
    {start: '2017-02-26', content: '120.2.1'},
    {start: '2017-03-31', content: '120.2.1'},
    {start: '2018-06-15', content: '120.3'},
    {start: '2018-09-09', content: '120.4'},
    {start: '2018-09-23', content: '120.4.1'},
    {start: '2019-12-01', content: '121'},
    {start: '2020-10-10', content: '122'},
    {start: '2021-12-30', content: '123'},
    {start: '2022-01-29', content: '123.1'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'release', className: 'release', source_name: 'Simutrans history.txt', source_url: "https://github.com/simutrans/simutrans/blob/master/simutrans/history.txt"}]));
}
