module.exports = {
  title: 'Cindy Lerner for Miami-Dade County Commission',
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meet Cindy', link: '/about/' },
      // TODO Modify DropdownLink.vue in theme so that /priorities/ is a clickable link,
      // But also make it so that clicking it once on mobile opens it, then clicking it another time navigates to it
      { text: 'Priorities', link: '/priorities/', items: [
        { text: 'Endless Traffic Gridlock', link: '/endless-traffic-gridlock/' },
        { text: 'Flooding and Rising Seas', link: '/flooding-and-rising-seas/' },
        { text: 'Water Contamination', link: '/water-contamination/' },
        { text: 'Community Leadership', link: '/community-leadership/' }
      ] },
      { text: 'Campaign Updates', link: '/campaign-updates/' },
      { text: 'Endorsements', link: '/endorsements/' },
      { text: 'Facebook', link: 'http://www.facebook.com/Cindyfordistrict7' },
      { text: 'Twitter', link: 'http://www.twitter.com/CindyforDst7' }
    ]
  }
}