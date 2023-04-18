function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("#keyboard_canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./image_sequence/10000.webp
       ./image_sequence/10001.webp
       ./image_sequence/10002.webp
       ./image_sequence/10003.webp
       ./image_sequence/10004.webp
       ./image_sequence/10005.webp
       ./image_sequence/10006.webp
       ./image_sequence/10007.webp
       ./image_sequence/10008.webp
       ./image_sequence/10009.webp
       ./image_sequence/10010.webp
       ./image_sequence/10011.webp
       ./image_sequence/10012.webp
       ./image_sequence/10013.webp
       ./image_sequence/10014.webp
       ./image_sequence/10015.webp
       ./image_sequence/10016.webp
       ./image_sequence/10017.webp
       ./image_sequence/10018.webp
       ./image_sequence/10019.webp
       ./image_sequence/10020.webp
       ./image_sequence/10021.webp
       ./image_sequence/10022.webp
       ./image_sequence/10023.webp
       ./image_sequence/10024.webp
       ./image_sequence/10025.webp
       ./image_sequence/10026.webp
       ./image_sequence/10027.webp
       ./image_sequence/10028.webp
       ./image_sequence/10029.webp
       ./image_sequence/10030.webp
       ./image_sequence/10031.webp
       ./image_sequence/10032.webp
       ./image_sequence/10033.webp
       ./image_sequence/10034.webp
       ./image_sequence/10035.webp
       ./image_sequence/10036.webp
       ./image_sequence/10037.webp
       ./image_sequence/10038.webp
       ./image_sequence/10039.webp
       ./image_sequence/10040.webp
       ./image_sequence/10041.webp
       ./image_sequence/10042.webp
       ./image_sequence/10043.webp
       ./image_sequence/10044.webp
       ./image_sequence/10045.webp
       ./image_sequence/10046.webp
       ./image_sequence/10047.webp
       ./image_sequence/10048.webp
       ./image_sequence/10049.webp
       ./image_sequence/10050.webp
       ./image_sequence/10051.webp
       ./image_sequence/10052.webp
       ./image_sequence/10053.webp
       ./image_sequence/10054.webp
       ./image_sequence/10055.webp
       ./image_sequence/10056.webp
       ./image_sequence/10057.webp
       ./image_sequence/10058.webp
       ./image_sequence/10059.webp
       ./image_sequence/10060.webp
       ./image_sequence/10061.webp
       ./image_sequence/10062.webp
       ./image_sequence/10063.webp
       ./image_sequence/10064.webp
       ./image_sequence/10065.webp
       ./image_sequence/10066.webp
       ./image_sequence/10067.webp
       ./image_sequence/10068.webp
       ./image_sequence/10069.webp
       ./image_sequence/10070.webp
       ./image_sequence/10071.webp
       ./image_sequence/10072.webp
       ./image_sequence/10073.webp
       ./image_sequence/10074.webp
       ./image_sequence/10075.webp
       ./image_sequence/10076.webp
       ./image_sequence/10078.webp
       ./image_sequence/10079.webp
       ./image_sequence/10080.webp
       ./image_sequence/10081.webp
       ./image_sequence/10082.webp
       ./image_sequence/10083.webp
       ./image_sequence/10084.webp
       ./image_sequence/10085.webp
       ./image_sequence/10086.webp
       ./image_sequence/10087.webp
       ./image_sequence/10088.webp
       ./image_sequence/10089.webp
       ./image_sequence/10090.webp
       ./image_sequence/10091.webp
       ./image_sequence/10092.webp
       ./image_sequence/10093.webp
       ./image_sequence/10094.webp
       ./image_sequence/10095.webp
       ./image_sequence/10096.webp
       ./image_sequence/10097.webp
       ./image_sequence/10098.webp
       ./image_sequence/10099.webp
       ./image_sequence/10100.webp
       ./image_sequence/10101.webp
       ./image_sequence/10102.webp
       ./image_sequence/10103.webp
       ./image_sequence/10104.webp
       ./image_sequence/10105.webp
       ./image_sequence/10106.webp
       ./image_sequence/10107.webp
       ./image_sequence/10108.webp
       ./image_sequence/10109.webp
       ./image_sequence/10110.webp
       ./image_sequence/10111.webp
       ./image_sequence/10112.webp
       ./image_sequence/10113.webp
       ./image_sequence/10114.webp
       ./image_sequence/10115.webp
       ./image_sequence/10116.webp
       ./image_sequence/10117.webp
       ./image_sequence/10118.webp
       ./image_sequence/10119.webp
       ./image_sequence/10120.webp
       ./image_sequence/10121.webp
       ./image_sequence/10122.webp
       ./image_sequence/10123.webp
       ./image_sequence/10124.webp
       ./image_sequence/10125.webp
       ./image_sequence/10126.webp
       ./image_sequence/10127.webp
       ./image_sequence/10128.webp
       ./image_sequence/10129.webp
       ./image_sequence/10130.webp
       ./image_sequence/10131.webp
       ./image_sequence/10132.webp
       ./image_sequence/10133.webp
       ./image_sequence/10134.webp
       ./image_sequence/10135.webp
       ./image_sequence/10136.webp
       ./image_sequence/10137.webp
       ./image_sequence/10138.webp
       ./image_sequence/10139.webp
       ./image_sequence/10140.webp
       ./image_sequence/10141.webp
       ./image_sequence/10142.webp
       ./image_sequence/10143.webp
       ./image_sequence/10144.webp
       ./image_sequence/10145.webp
       ./image_sequence/10146.webp
       ./image_sequence/10147.webp
       ./image_sequence/10148.webp
       ./image_sequence/10149.webp
       ./image_sequence/10150.webp
       ./image_sequence/10151.webp
       ./image_sequence/10152.webp
       ./image_sequence/10153.webp
       ./image_sequence/10154.webp
       ./image_sequence/10155.webp
       ./image_sequence/10156.webp
       ./image_sequence/10157.webp
       ./image_sequence/10158.webp
       ./image_sequence/10159.webp
       ./image_sequence/10160.webp
       ./image_sequence/10161.webp
       ./image_sequence/10162.webp
       ./image_sequence/10163.webp
       ./image_sequence/10164.webp
       ./image_sequence/10165.webp
       ./image_sequence/10166.webp
       ./image_sequence/10167.webp
       ./image_sequence/10168.webp
       ./image_sequence/10169.webp
       ./image_sequence/10170.webp
       ./image_sequence/10171.webp
       ./image_sequence/10172.webp
       ./image_sequence/10173.webp
       ./image_sequence/10174.webp
       ./image_sequence/10175.webp
       ./image_sequence/10176.webp
       ./image_sequence/10178.webp
       ./image_sequence/10179.webp
       ./image_sequence/10180.webp
       ./image_sequence/10181.webp
       ./image_sequence/10182.webp
       ./image_sequence/10183.webp
       ./image_sequence/10184.webp
       ./image_sequence/10185.webp
       ./image_sequence/10186.webp
       ./image_sequence/10187.webp
       ./image_sequence/10188.webp
       ./image_sequence/10189.webp
       ./image_sequence/10190.webp
       ./image_sequence/10191.webp
       ./image_sequence/10192.webp
       ./image_sequence/10193.webp
       ./image_sequence/10194.webp
       ./image_sequence/10195.webp
       ./image_sequence/10196.webp
       ./image_sequence/10197.webp
       ./image_sequence/10198.webp
       ./image_sequence/10199.webp
       ./image_sequence/10200.webp
       ./image_sequence/10201.webp
       ./image_sequence/10202.webp
       ./image_sequence/10203.webp
       ./image_sequence/10204.webp
       ./image_sequence/10205.webp
       ./image_sequence/10206.webp
       ./image_sequence/10207.webp
       ./image_sequence/10208.webp
       ./image_sequence/10209.webp
       ./image_sequence/10210.webp
       ./image_sequence/10211.webp
       ./image_sequence/10212.webp
       ./image_sequence/10213.webp
       ./image_sequence/10214.webp
       ./image_sequence/10215.webp
       ./image_sequence/10216.webp
       ./image_sequence/10217.webp
       ./image_sequence/10218.webp
       ./image_sequence/10219.webp
       ./image_sequence/10220.webp
       ./image_sequence/10221.webp
       ./image_sequence/10222.webp
       ./image_sequence/10223.webp
       ./image_sequence/10224.webp
       ./image_sequence/10225.webp
       ./image_sequence/10226.webp
       ./image_sequence/10227.webp
       ./image_sequence/10228.webp
       ./image_sequence/10229.webp
       ./image_sequence/10230.webp
       ./image_sequence/10231.webp
       ./image_sequence/10232.webp
       ./image_sequence/10233.webp
       ./image_sequence/10234.webp
       ./image_sequence/10235.webp
       ./image_sequence/10236.webp
       ./image_sequence/10237.webp
       ./image_sequence/10238.webp
       ./image_sequence/10239.webp
       ./image_sequence/10240.webp
       ./image_sequence/10241.webp
       ./image_sequence/10242.webp
       ./image_sequence/10243.webp
       ./image_sequence/10244.webp
       ./image_sequence/10245.webp
       ./image_sequence/10246.webp
       ./image_sequence/10247.webp
       ./image_sequence/10248.webp
       ./image_sequence/10249.webp
       ./image_sequence/10250.webp
       ./image_sequence/10251.webp
       ./image_sequence/10252.webp
       ./image_sequence/10253.webp
       ./image_sequence/10254.webp
       ./image_sequence/10255.webp
       ./image_sequence/10256.webp
       ./image_sequence/10257.webp
       ./image_sequence/10258.webp
       ./image_sequence/10259.webp
       ./image_sequence/10260.webp
       ./image_sequence/10261.webp
       ./image_sequence/10262.webp
       ./image_sequence/10263.webp
       ./image_sequence/10264.webp
       ./image_sequence/10265.webp
       ./image_sequence/10266.webp
       ./image_sequence/10267.webp
       ./image_sequence/10268.webp
       ./image_sequence/10269.webp
       ./image_sequence/10270.webp
       ./image_sequence/10271.webp
       ./image_sequence/10272.webp
       ./image_sequence/10273.webp
       ./image_sequence/10274.webp
       ./image_sequence/10275.webp
       ./image_sequence/10276.webp
       ./image_sequence/10278.webp
       ./image_sequence/10279.webp
       ./image_sequence/10280.webp
       ./image_sequence/10281.webp
       ./image_sequence/10282.webp
       ./image_sequence/10283.webp
       ./image_sequence/10284.webp
       ./image_sequence/10285.webp
       ./image_sequence/10286.webp
       ./image_sequence/10287.webp
       ./image_sequence/10288.webp
       ./image_sequence/10289.webp
       ./image_sequence/10290.webp
       ./image_sequence/10291.webp
       ./image_sequence/10292.webp
       ./image_sequence/10293.webp
       ./image_sequence/10294.webp
       ./image_sequence/10295.webp
       ./image_sequence/10296.webp
       ./image_sequence/10297.webp
       ./image_sequence/10298.webp
       ./image_sequence/10299.webp
       ./image_sequence/10300.webp
       ./image_sequence/10301.webp
       ./image_sequence/10302.webp
       ./image_sequence/10303.webp
       ./image_sequence/10304.webp
       ./image_sequence/10305.webp
       ./image_sequence/10306.webp
       ./image_sequence/10307.webp
       ./image_sequence/10308.webp
       ./image_sequence/10309.webp
       ./image_sequence/10310.webp
       ./image_sequence/10311.webp
       ./image_sequence/10312.webp
       ./image_sequence/10313.webp
       ./image_sequence/10314.webp
       ./image_sequence/10315.webp
       ./image_sequence/10316.webp
       ./image_sequence/10317.webp
       ./image_sequence/10318.webp
       ./image_sequence/10319.webp
       ./image_sequence/10320.webp
       ./image_sequence/10321.webp
       ./image_sequence/10322.webp
       ./image_sequence/10323.webp
       ./image_sequence/10324.webp
       ./image_sequence/10325.webp
       ./image_sequence/10326.webp
       ./image_sequence/10327.webp
       ./image_sequence/10328.webp
       ./image_sequence/10329.webp
       ./image_sequence/10330.webp
       ./image_sequence/10331.webp
       ./image_sequence/10332.webp
       ./image_sequence/10333.webp
       ./image_sequence/10334.webp
       ./image_sequence/10335.webp
       ./image_sequence/10336.webp
       ./image_sequence/10337.webp
       ./image_sequence/10338.webp
       ./image_sequence/10339.webp
       ./image_sequence/10340.webp
       ./image_sequence/10341.webp
       ./image_sequence/10342.webp
       ./image_sequence/10343.webp
       ./image_sequence/10344.webp
       ./image_sequence/10345.webp
       ./image_sequence/10346.webp
       ./image_sequence/10347.webp
       ./image_sequence/10348.webp
       ./image_sequence/10349.webp
       ./image_sequence/10350.webp
       ./image_sequence/10351.webp
       ./image_sequence/10352.webp
       ./image_sequence/10353.webp
       ./image_sequence/10354.webp
       ./image_sequence/10355.webp
       ./image_sequence/10356.webp
       ./image_sequence/10357.webp
       ./image_sequence/10358.webp
       ./image_sequence/10359.webp
       ./image_sequence/10360.webp
       ./image_sequence/10361.webp
       ./image_sequence/10362.webp
       ./image_sequence/10363.webp
       ./image_sequence/10364.webp
       ./image_sequence/10365.webp
       ./image_sequence/10366.webp
       ./image_sequence/10367.webp
       ./image_sequence/10368.webp
       ./image_sequence/10369.webp
       ./image_sequence/10370.webp
       ./image_sequence/10371.webp
       ./image_sequence/10372.webp
       ./image_sequence/10373.webp
       ./image_sequence/10374.webp
       ./image_sequence/10375.webp
       ./image_sequence/10376.webp
       ./image_sequence/10378.webp
       ./image_sequence/10379.webp
       ./image_sequence/10380.webp
       ./image_sequence/10381.webp
       ./image_sequence/10382.webp
       ./image_sequence/10383.webp
       ./image_sequence/10384.webp
       ./image_sequence/10385.webp
       ./image_sequence/10386.webp
       ./image_sequence/10387.webp
       ./image_sequence/10388.webp
       ./image_sequence/10389.webp
       ./image_sequence/10390.webp
       ./image_sequence/10391.webp
       ./image_sequence/10392.webp
       ./image_sequence/10393.webp
       ./image_sequence/10394.webp
       ./image_sequence/10395.webp
       ./image_sequence/10396.webp
       ./image_sequence/10397.webp
       ./image_sequence/10398.webp
       ./image_sequence/10399.webp
       ./image_sequence/10400.webp
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 400;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
})
