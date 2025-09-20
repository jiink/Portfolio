import React from 'react';

import LEDBoardLasersIntersectionGenuaryArduino from '../assets/ledboard/LED board lasers intersection genuary arduino.mp4';
import blueScreenBoard from '../assets/ledboard/blue screen board.jpg';
import piOnBackOfLedBoard from '../assets/ledboard/pi on back of led board.jpg';
import pcbs from '../assets/ledboard/pcbs.jpg';
import programsProtoype from '../assets/ledboard/programs protoype.mp4';
import coveronvsoffsun from '../assets/ledboard/coveronvsoffsun.jpg';
import oldHousingFront from '../assets/ledboard/old housing front.jpg';
import board1 from '../assets/ledboard/board1.jpg';
import coveroff from '../assets/ledboard/coveroff.jpg';
import board2 from '../assets/ledboard/board2.jpg';
import switchplugknob from '../assets/ledboard/switchplugknob.jpg';
import arduniowifi from '../assets/ledboard/arduniowifi.png';
import clearpanel1 from '../assets/ledboard/clearpanel1.jpg';
import clearpanel2 from '../assets/ledboard/clearpanel2.jpg';
import clearpanel3 from '../assets/ledboard/clearpanel3.jpg';
import herooff from '../assets/ledboard/herooff.jpg';
import knobsdemobest from '../assets/ledboard/knobsdemobest.mp4';
import longlifedemo from '../assets/ledboard/longlifedemo.mp4';
import lifedemohalfcover from '../assets/ledboard/lifedemohalfcover.mp4';
import videogoeshere from '../assets/ledboard/videogoeshere.mp4';
import weathersoncimania from '../assets/ledboard/weathersoncimania.mp4';
import settingschannelcrud from '../assets/ledboard/settingschannelcrud.jpg';
import scrollangle from '../assets/ledboard/scrollangle.mp4';
import uperrleftartifacting from '../assets/ledboard/uperrleftartifacting.jpg';
import weatherDemo from '../assets/ledboard/weatherdemo.mp4';
import newswdemo1 from '../assets/ledboard/newswdemo1.mp4';
import newswdemo2 from '../assets/ledboard/newswdemo2.mp4';

const code1 = `void initializeApplets()
{
    addApplet("Simple Clock", &simpleClockSetup, &simpleClockLoop);
    addApplet("Moving Pixel", &movingPixelSetup, &movingPixelLoop);
    addApplet("Phases", &phasesSetup, &phasesLoop);
    addApplet("City", &citySetup, &cityLoop);
    addApplet("Life", &lifeSetup, &lifeLoop);
    addApplet("Weather Channel", &weatherChannelSetup, &weatherChannelLoop);
    addApplet("Timer", &timerSetup, &timerLoop);
    addApplet("Settings", &settingsChannelSetup, &settingsChannelLoop);
  // ... Add more applets here
}
`;

const code2 = `void loop()
{
  handleOtaPeriodic();
  state = handleSystemControls(state);
  switch (state)
  {
    case APPLET:
        applets[appletSelectedIndex].appletLoop();
        break;
    case NOISE:
        state = tvStaticLoop();
        break;
  }
}
`;

const code3 = `      char* programMemoryStart = (char*)esp_get_idf_version();
char* noiseSource = (char*)programMemoryStart;
...
matrix->drawPixel(x, y, matrix->color333(*noiseSource, *noiseSource, *noiseSource));
noiseSource++;
`;

const code4 = `
{
  "latitude": 33.877834,
  "longitude": -117.885056,
  "generationtime_ms": 0.05829334259033203,
  "utc_offset_seconds": -25200,
  "timezone": "America/Los_Angeles",
  "timezone_abbreviation": "GMT-7",
  "elevation": 74,
  "hourly_units": {
    "time": "iso8601",
    "weather_code": "wmo code"
  },
  "hourly": {
    "time": [
      "2025-04-02T00:00",
      "2025-04-02T01:00",
      "2025-04-02T02:00",
      "2025-04-02T03:00",
      "2025-04-02T04:00",
      "2025-04-02T05:00",
      "2025-04-02T06:00",
      "2025-04-02T07:00",
      "2025-04-02T08:00",
      "2025-04-02T09:00",
      "2025-04-02T10:00",
      "2025-04-02T11:00",
      "2025-04-02T12:00",
      "2025-04-02T13:00",
      "2025-04-02T14:00",
      "2025-04-02T15:00",
      "2025-04-02T16:00",
      "2025-04-02T17:00",
      "2025-04-02T18:00",
      "2025-04-02T19:00",
      "2025-04-02T20:00",
      "2025-04-02T21:00",
      "2025-04-02T22:00",
      "2025-04-02T23:00"
    ],
    "weather_code": [
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      3,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  "daily_units": {
    "time": "iso8601",
    "temperature_2m_max": "°F"
  },
  "daily": {
    "time": [
      "2025-04-02"
    ],
    "temperature_2m_max": [
      67.1
    ]
  }
}
`;

const code5 = `https://api.open-meteo.com/v1/forecast?
latitude=33.88&
longitude=-117.89&
hourly=weather_code&
daily=temperature_2m_max&
temperature_unit=fahrenheit&
wind_speed_unit=mph&
precipitation_unit=inch&
timezone=America/Los_Angeles&
forecast_days=1`;

function Esp32DeskLedBoard() {
  return (
    <div >
    <h1 id="-mega-malachite-an-esp32-desk-led-board">&quot;Mega Malachite&quot; — an ESP32 Desk LED Board</h1>
<img src={board1}/>
<h2 id="1-why-">1. Why?</h2>
<p>Some years ago, I tore apart my old nightstand clock to control the RGB backlight inside with an Arduino. It was too hard, and a bit too scary with mains voltage in there. I couldn&#39;t put it back together, so I threw it away! But instead of getting a new clock, I wanted to make my own.</p>
<p>I wanted to make a super cool clock. I also wanted it to be a decorative object that&#39;s interesting to watch, in the same manner as a lava lamp, aquarium, or ant farm. </p>
<p>This project is about how I turned that idea into a real thing.</p>
<h2 id="2-current-setup">2. Current setup</h2>
<h3 id="the-screen">The screen</h3>
<p>The screen is a <strong>HUB75</strong> LED panel. They&#39;re designed to be chained together to make huge displays, but you can just buy one! I got my 64x32 one for between $20 and $30 off Amazon, and it came with a cable I could use to plug it into GPIO pins.</p>
<h3 id="the-computer">The computer</h3>
<p>The brains of this project is an <strong>ESP32</strong> microcontroller dev board. They&#39;re really powerful for their price compared to my normal Arduinos. It has Wi-Fi and Bluetooth too!</p>
<h3 id="the-inputs">The inputs</h3>
<p>I control this board using 2 rotary encoder knobs called <strong>KY-040</strong>. They&#39;re little clicky knobs that you can turn and press.</p>
<p>These are inexpensive and they&#39;re more fun than having normal buttons.</p>
<p>They&#39;re not potentiometers, and <a href="https://www.reddit.com/r/esp32/comments/o5acfb/flaky_rotary_ky040_encoders/">they can be finnicky to program for</a>.</p>
<h2 id="3-picking-the-computing-platform">3. Picking the computing platform</h2>
<p>This project went through a few different versions.</p>
<h3 id="3-1-the-arduino-mega-era">3.1. The Arduino Mega era</h3>
<p>When I first got my HUB75 panel, I tried driving it with an Arduino Mega 2560. In fact, that&#39;s why this project is called &quot;Mega Malachite&quot; - &quot;Mega&quot; referred to the devboard it uses and Malachite referred to the copper-blue color of the Mega&#39;s PCB.</p>
<p>With careful wiring and a small example program (I forgot what library I used), I got graphics to show up on the display.</p>

<video controls src={LEDBoardLasersIntersectionGenuaryArduino}/>

<p>I also 3D printed little legs to prop up the LED board for viewing. They attach to the magnetic pegs that come with the panel.</p>

<img src={blueScreenBoard}/>

<p>My brother programmed a scrolling cityscape program, but it ran dissapointingly slowly: only a few frames per second. </p>
<p>I also tried making a particle life simulation, but the Arduino could only handle a handful of particles before it would just crash.</p>
<p>I was dissapointed, and looked at my other options.</p>
<h3 id="3-2-raspberry-pi-zero-w">3.2. Raspberry Pi Zero W</h3>
<p>I remembered I had a Raspberry Pi Zero W that had been sitting unused for years. It runs Linux, but it&#39;s smaller than my Arduino. It turns someone made a library for driving that HUB75 panel with this Zero.</p>

<img src={piOnBackOfLedBoard}/>

<p>People usually write Python on the Pi Zero, but since it&#39;s already so weak, I chose to write my program in C++, hoping it would perform well driving the LED board.</p>
<p>The results impressed me, and I got to see the scrolling cityscape program zoom by at hundreds of frames per second! I didn&#39;t know the panel could even show that many FPS!</p>
<p>However, the Pi Zero had to go. Here&#39;s why:</p>
<p>Developing on the Pi Zero glued to the back of the panel was hard. I had to write the C++ program directly on the Pi itself. Despite how quick it could drive the LED panel, it&#39;s gruelingly slow to use as a PC. I SSH&#39;d into the Pi to do all my coding from my desktop PC, but when I tried to move to a nicer terminal code editor, even scrolling was too slow and delayed to be comfortable.</p>
<p>That&#39;s when I got an idea to connect my VSCode to the Pi&#39;s file system over WiFi so I could edit my code comfortably. But after a lot of time spent trying to set it up, I didn&#39;t find a solution that worked as well as I wanted. </p>
<p>The fact that the Pi Zero&#39;s C++ compilation speed was so slow also made me want to find a different solution. I could get into cross-compilation and all that, but I wanted to spend time on making cool LED programs, not making a crazy build system!</p>
<p>I was also was not too happy with the PI&#39;s boot time. Every time I power on the LED board, I&#39;d have to wait a couple mintues for it to start.</p>
<h3 id="3-3-esp32-saves-the-day">3.3. ESP32 saves the day</h3>
<p>Soon after, I discovered the ESP32.</p>
<p>When I wired it up to my LED board and ran the same city-scape program I used on my Arduino, I was really impressed -- it ran at hundreds of FPS, just like the Pi Zero! Even though it&#39;s not Arduino branded, it&#39;s can still run Arduino programs just as easily.</p>
<p>I was blown away that this dev board was:</p>
<ul>
<li>as easy to use as the arduino</li>
<li>way faster than arduino (like, 100x it felt like?)</li>
<li>way more memory as the arduino (like, 50x?)</li>
<li>32-bit (instead of 8-bit)</li>
<li>smaller</li>
<li>had WiFi and Bluetooth (this opened up a lot of new possibilities)</li>
</ul>
<p>All that, and it&#39;s only $6? I felt like a sucker for not using that earlier.</p>
<p>And so I was elated about the ESP32, it&#39;s like an Arduino on steriods -- that&#39;s how I usually describe it.</p>
<p>So then, my Arduino and Pi Zero returned to the drawers from whence they came!</p>
<h2 id="4-the-mechanical-journey">4. The mechanical journey</h2>
<h3 id="4-1-mountable-electronics">4.1. Mountable electronics</h3>
<p>One disadvantage of my ESP32 dev board compared to the others was that it had no mounting holes. I didn&#39;t know how I would attach it to the back of the panel. First I tried 3D printing half of an ESP32 devboard case, snapping the devboard into it, and hot-gluing the whole things to the back of the LED panel. This was okay, but the jumper wires stuck out so far that it limited the angle at which I could have the LED panel tilted.</p>
<p>Looking at the HUB75 connector, I realized that breadboard pin headers fit into it perfectly. I soldered female pin headers onto a prototyping board and it interfaced with the HUB75 connector well. then I soldered more of those headers to interface with the ESP32 devboard, and then I soldered connections between all these headers, which was miserably tedious and difficult. But this made for a nice adapter: I could simply plug my esp32 devboard into my prototype board, then plug my prototype board into the hub75 panel. It worked! This looked so much neater than having all those wires everywhere.</p>
<p>At this time, I also wanted to try designing a custom PCB. Since my prototype worked, I learned a bit of KiCad, made the schematic, designed the PCB, and got it shipped. Making a schematic is very useful, and I learned that I should make schematics for any circuit I design, even if I never plan on making a real PCB out of it.</p>
<p>Designing the physical PCB design based off the schematic was easier than I thought, however I was surprised that I had to draw each trace manually. I thought the computer would be able to route the board all by itself easily. So in KiCad I had to draw a path between every pair of pads it showed me, and the paths could not cross unless they were on separate layers, where they showed as separate colors. I thought this was eerily similar to certain puzzle games I&#39;ve played on my phone. Eventually, this &quot;puzzle&quot; became too hard for me and seemed impossible. That&#39;s when I learned about vias, which lets any path cross over to another layer. This made things a lot easier!</p>
<p>I also thought the silkscreen was cool. It&#39;s nice to write labels, like &quot;Knob 0&quot; and &quot;Knob 1&quot; over their respective pads.
I also liked that I was able to order my PCB in different colors, I thought it would only be green. I picked red!</p>
<p>After getting the finished PCB in the mail, I soldered the pin headers, fit everything together, and it worked great. It was nice to not have a lot of delicate, wires hanging around with questional solder joints.</p>

<img src={pcbs}/>

<p>If I cared for compactness, I would have designed a PCB with the ESP32 chip soldered directly to it, rather than having a socket for the whole devboard to be inserted into. However, that would have taken a lot more time, money, and effort just to save a centimeter or two of height. </p>
<h3 id="4-2-making-an-enclosure">4.2. Making an enclosure</h3>
<p>At this point the LED board worked great, but I wasn&#39;t satisfied... it didn&#39;t look like something that would look good on a nightstand or a desk -- the back was exposed, there was both a USB cable and a power cable coming out, and the knobs were just hanging around freely.</p>

<video controls src={programsProtoype}/>

<p>Earlier, I had 3D printed a diffuser for the front. A flat piece of material would have blurred all the pixels together, but by including a grid on a 1-layer thick sheet of white filament, the diffusing effect works while keeping the shape of the image. It makes a huge difference visually; when I see other LED projects online, they could often benefit from the same thing. Without it, a sprite with any detail is really hard to make out, but with the diffuser, it&#39;s not a problem.</p>

<img src={coveronvsoffsun}/>

<p>Then I needed a back cover to cover the exposed circuitry/wires and hold the knobs in place. I thought this would be easy to design; it could just be a box. But since I wanted the LED board to tilt up at an angle for better viewing, it would need to be a little more complex.</p>
<p>I sketched some ideas and started modelling the housing in the CAD software OnShape. This would be the biggest 3D printed design I&#39;ve done. One goal I had was was to make it not look boring. I wanted to take advantage of a 3D printer&#39;s capabilities; printing a simple box would be lame. I wanted to make it cool.</p>
<p>My first design was, well, a box that holds the LED board with holes in it for plugs and a switch. It also had tabs with holes in it so a diffuser could be screwed on to it. There were also square holes for the legs to be inserted into to hold the board up. The square holes were tilted at an angle so that the whole thing would be tilted up when sitting on its legs. These legs would also house the knobs. The knobs&#39; wires would go through the leg and into the hole that attaches the leg to the main box. This was difficult for me to design and took a long time. Making a 3d printed toy is one thing, but making a design that fits with existing electronics and other 3D printed parts is not easy.</p>
<p>To keep the LED panel secured in the box, I made these weird little pieces that would extend the HUB75 panel&#39;s included magnetic bolts so it could sit in the box.</p>
<p>After 3D printing this, it all worked. It took a long time to assemble, taking at least 40 minutes to screw and wire it together. Multiple times I regretted not considering the assembly process when designing this, as there were lots of extremely tight spaces. I also tried to weld halves of parts together using my soldering iron, and it worked well -- I thought that was better than glue. Just be careful not to weld something that&#39;s already has superglue on it. I heard toxic fumes can come from burning superglue like that.</p>
<p>I also learned that I could power both the HUB75 panel and the ESP32 with the same 5V wire, which meant that I could ditch the USB cable that was otherwise used to power the ESP32.</p>
<p>One huge frustration with my design was that lots of wires stretched between the lid and the body. Once everything&#39;s in place, you can&#39;t see it. When I tried to open it up, the wires prevented me from separating the lid from the box as much as I wanted to.</p>
<p>I was glad it all worked. It was cool to finish a 3D design of that size, and it did perform the goal of holding the board at an angle and hiding all exposed electronics. </p>

<img src={oldHousingFront}/>

<p>However, it was ugly! Since I felt the wiring and assembly was sketchy, I didn&#39;t feel safe keeping this sketchy thing powered on my nightstand. As soon as I had re-adjust something inside, and realized it would take an hour to do so, I lost my patience with this design. I decided to do a redesign.</p>
<h3 id="4-3-the-redesign">4.3. The redesign</h3>
<p>These were my requirements for the redesign:</p>
<ol>
<li>Have Less parts</li>
<li>Let the user access the wiring on the back of the HUB75 panel easily</li>
<li>Be less ugly</li>
</ol>
<p>It took a long time to think of a better design. My brother helped with some ideas. </p>
<p>Eventually I started a new model in OnShape. Instead of having two legs lift the LED panel housing up off the ground, it would look like this:</p>

<img src={board1}/>

<p>There was one essential new tool I had that made this design possible: heat set inserts! Because of them, I wouldn&#39;t need to access both sides of a hole for the nut and the bolt. Instead I could just screw a bolt in and out from one side. This let me make the assembly so much easier. I already knew that trapped nuts are a thing, but I didn&#39;t do that in my previous design because of how difficult that makes the 3D-printing overhang situation. </p>

<img src={coveroff}/>

<p>Printing this was a bit nerve wracking because since it has less parts means, each part is bigger, and re-printing enormous parts takes a lot more time and plastic. </p>
<p>But it worked. I inserted the heat set inserts in with a soldering iron and screwed everything together. This was so much better than the previous design, it took only a few minutes to assemble, it felt like a consumer product (aside from all these wires hanging around)</p>

<img src={board2}/>
<br/>

<img src={switchplugknob}/>

<p>Since it was so easy to open up, sticking a usb cable in there to reprogram the ESP32 was easier. (Well, I did have to maul a cable and crease it at an angle to fit it in there.) Moreover, I was able to set it up so my ESP32 could be programmed over WiFi! Even more convenient! </p>

<img src={arduniowifi}/>

<p>I made the back panels clear PETG so you could see inside. It wasn&#39;t as transparent as I was hoping, but it&#39;s cool to see a couple wires and an LED shine through.</p>

<img src={clearpanel1}/>
<br/>

<img src={clearpanel2}/>
<br/>

<img src={clearpanel3}/>

<p>So there it was, my cool LED board in a good-looking enclosure. Now I could finally clear the workbench and move on to another project.</p>

<img src={herooff}/>

<p>There was just one problem: the software wasn&#39;t good. I got caught up with mechanical design; the software had been pretty neglected.</p>
<p>I added a simple clock applet so it could serve a purpose on the nightstand. But I wanted to do something more impressive; when I look at other LED board projects online, the visuals shown are often kind of lame.</p>
<h2 id="5-the-software">5. The software</h2>
<p>I want the software of this board to stand out compared to other LED board projects. Unfortunatley, I haven&#39;t actually followed through with this much due to the fact that I&#39;ve been working on other projects instead. </p>
<p>However, there are a few things I&#39;m happy with.
This board&#39;s program isn&#39;t limited to doing just one thing. There are multiple sub-programs -- I call them &quot;applets&quot; -- that you can easily switch between.</p>
<p>Rather than picking an applet in a menu, one of the knobs lets you switch between them sequentially. It&#39;s like tuning between TV channels - I even added a brief TV noise effect between them. I think this is a lot more fun than a normal menu system, but it might need some adjustments once there are even more applets. </p>

<video controls src={knobsdemobest}/>

<p>Clicking that TV-tuning knob ought to switch it to a different mode where its rotation would then control the applet itself, since some applets would benefit from two knobs, e.g. a multplayer game. But that&#39;s not implemented right now.</p>
<p>Development-wise, this was an Arduino program, but made using <a href="https://platformio.org/">PlatformIO</a> in Visual Studio Code instead of Arduino IDE. Just like how I discovered that ESP32 was &#39;like Arduino but way better&#39;, I found that PlatformIO was also &#39;like Arduino but way better&#39;. It lets me make Arduino (or native) programs from the comforts of VSCode. Go check it out if you haven&#39;t heard of it!</p>
<p>I&#39;m decently okay with how the applet code is organized: An applet is just a cpp and h file with a setup and loop function defined. It can include &quot;system.h&quot; to consume inputs like knobs rotations and presses, and draw to the screen using the LED &quot;matrix&quot; class instance. Then, it&#39;s #included and added to a list in main.cpp and given a name:</p>

<pre><code>
  {code1}
</code></pre>

<p>Finally, the knob indexes into that list to run whatever setup and loop function is there.
But now that I look at it again, I might want to pass the matrix class, inputs, and delta time as an argument through the loop function so it looks more &#39;functional&#39; and to make it more clear what&#39;s supposed to be done in that function.</p>

<pre><code>
  {code2}
</code></pre>

<p>A few notes:</p>
<ul>
<li>The TV noise effect doesn&#39;t use a random number generator. I was inspired by <a href="https://www.thegamer.com/metroid-prime-dev-reveals-static-is-game-code/">Metroid Prime&#39;s static texture effect</a>! In my case it&#39;s completely unecessary, but I just wanted to try it out for fun.
<pre><code>
  {code3}
</code></pre>
</li>
<li>To control the display and draw to it, I&#39;m using the <a href="https://github.com/mrcodetastic/ESP32-HUB75-MatrixPanel-DMA">&quot;HUB75 RGB LED matrix panel library utilizing ESP32 DMA&quot; by mrcodetastic</a>.<ul>
<li>This is the most helpful and brilliant library powering this project. The readme has a lot of info that I couldn&#39;t get anywhere without.</li>
</ul>
</li>
<li>The rotary knobs are really frustrating to make work reliably. I thought it&#39;d be easy. I tried my own solution and multiple libraries, and they all work fine enough, none of them work great - it&#39;s often missing clicks and stuff. I wish I just used potentiometers or something.</li>
<li>I&#39;ve begun moving this away from Arduino code and using Espressif&#39;s IDF SDK instead, to have more control over stuff such as interrupts for the knobs.</li>
</ul>
<h3 id="5-1-the-applets">5.1. The applets</h3>
<h4 id="5-1-1-particle-life">5.1.1. Particle life</h4>
<p>This is the one applet so far that I gave my full effort towards.</p>
<p>I wanted my project to be something you could watch indefinitley, like a lava lamp. I was inspired by <a href="https://www.youtube.com/watch?v=p4YirERTVF0">&quot;How Particle Life emerges from simplicity&quot; by Tom Mohr</a></p>
<p>All these particles move around. Every so often it randomizes their behaviors and colors.</p>

<video controls src={longlifedemo}/>
<br/>

<video controls src={lifedemohalfcover}/>

<p>Sometimes &#39;creatures&#39; form and move around, chasing and attacking other creatures!</p>
<p>Sometimes &#39;worms&#39; appear and snake through</p>
<p>Sometimes a merry-go-round forms</p>
<p>Sometimes each group forms a &#39;black hole&#39; and fight against each other, striking the other and destroying their form!</p>
<p>Sometimes they do nothing and just arrange themselves into an interesting still image.</p>
<p>All this variety is formed depedning on how one kind of particle is attracted or repelled from another kind. I followed along with the video linked above, copying each concept into code. You can also rotate the knob to adjust how many distinct kinds of particles are present.</p>
<p>When the board is in this applet, it still serves as a clock, showing the date and time. I had some fun with making a neat design that shows only the hour as a number, with a progress bar for the hour&#39;s progress, a bar for the minute&#39;s progress, and a bar for the second&#39;s progress.</p>
<p>Some notes:</p>
<ul>
<li>I developed a good deal of this on the PC using a &#39;simulator&#39; I made using Raylib.</li>
<li>It was hard to make things wrap around seamlessly. Since this is such a small screen, wrapping around the edges was important. I wanted a &#39;creature&#39; to be able to wrap around the border of the screen without falling apart. And now it does. Now just the pixel-drawing code doesn&#39;t wrap around seamlessly.</li>
<li>Optimization was a challenge. Without doing anything special, each particle calculates forces from every other particle. That scales terribly. To help, I split the field into a grid of 4x2 cells. Each cell knows which particles are in it. A particle in a given cell will only consider particles from neighboring cells that are in its circle of influence. This optimzation is more effective than I expected. It stops working when all the particles clump together and the framerate drops, but that&#39;s okay. I considered taking advantage of the ESP32&#39;s dual-core feature, but eh, that would be opening a can of worms here.<ul>
<li>It&#39;s a bit odd since once particle may be affected by another twice - once for its real positon, and again for its wrapped-around position.</li>
</ul>
</li>
</ul>
<p>It&#39;s crucial to draw a particle properly. I started with rounding its position and plotting a pixel there, but it looks terrible in motion -- it suddenly jumps from pixel to pixel.</p>
<p>I made it smooth by considering a particle as a pixel-sized square somewhere between actual pixels, and lighting up each pixel it covers in proportion to the area of that particle&#39;s square in each pixel. It&#39;s so much better! Now when the particles move, they look very smooth. It makes my 64x32 pixel screen feel a lot bigger. Because it&#39;s simple to implement and makes a big difference, when I see other electronics projects, sometimes that bugs me now. For instance, I think <a href="https://www.youtube.com/watch?v=jis1MC5Tm8k">this Pendant</a> would look better if it used a similar technique.</p>
<p>My point-drawing algorithm isn&#39;t perfect though: A particle appears a bit darker overall when it&#39;s between pixels. This causes a slight shimmer as a particle moves, especially diagonally. Maybe some sort of brightness correction would help. It would also be more technically correct to consider the point as a little circle rather than a little square.</p>
<p>I had to make it so when drawing a particle, its colors are added to the pixels already there, rather than averaged or replaced. This made it so when mutliple particles come together and overlap, the spot gets brighter. It&#39;s a cool effect!</p>

<p>In the future I want to add some way to save, retrieve, and edit the attraction tables that define how different particle types attract/repel from each other. That way, I could summon a cool worm without just waiting for it to happen randomly.</p>
<p>all together, I acheived my goal with this particular applet -- it&#39;s cool to watch! Sometimes there is something really interesting happening on it.</p>
<p>But there&#39;s one big problem that I just can&#39;t figure out:</p>
<p>Over time, it degrades, corrupts itself, and eventually crashes the whole system! </p>

{/* <video controls src={videogoeshere}/> */}

<p>As it&#39;s running, after maybe half an hour, I notice that there&#39;s a couple particles that are the wrong color - ones that don&#39;t belong! These eventually begin zipping around randomly. Some particles also begin to clump into the four corners. As time continues, more and more of these particles become bizarre like this, and it can&#39;t be fixed without a reset. I could turn the knob to set them all to one color, and I&#39;d see many start flashing different colors on their own and zipping around.</p>
<p>It&#39;s so weird and kinda funny. (And now that I try to get it on film, the crash happens without any of this stuff happening 😐) But it also kinda ruins it. I&#39;d like to fix it so I can have it running continually. I&#39;d think it&#39;s a memory leak, but everything is statically initialized! No mallocs or class instantiations happen in that code.</p>
<p>Particles are likely somehow getting their position, velocity, and color from somewhere in junk memory. I&#39;m just not sure how! This is frustrating to debug because the problem might only crop up after an hour of running. </p>
<p>If someone out there know what&#39;s up with that, let me know!</p>
<h4 id="5-1-2-weather-channel">5.1.2. Weather channel</h4>
<p>This one is only half-complete.</p>

<video controls src={weatherDemo}/>

<p>The idea is, when you go here, it uses some cool animations to show you the dominant weather condition of the day and the high temperature.</p>
<p>The design is based off the Egg TV from the &quot;Weather Globe&quot; boss that appears in Sonic Mania.</p>

<video controls src={weathersoncimania}/>

<p>The spinning sign is supposed to serve as a loading animation, and once the forecast is retrieved from the internet, it&#39;s supposed to stop spinning, reveal the weather icon, show the top temperature, and play a fitting animation like in the Sonic game. </p>
<p>Currently, it does show real weather data. there&#39;s only an icon for sunny weather though, and the graphics are misaligned, and it doesn&#39;t have all the animations I wanted implemented.</p>
<p>Getting the real weather data was a challenge. I was looking hard for an easy way to do it without any API keys. After a while, I found one! It&#39;s called Open Meteo. On their site you can design a query and get a long URL to use. Here&#39;s the one I generated:</p>
<pre><code>
  {code5}
</code></pre>
<p>Here&#39;s what that returns as of today:</p>

<details>
  <summary>Show/Hide weather JSON response</summary>
<pre><code>
  {code4}
</code></pre>
</details>
<p>From there, I extract the max temperature using ArduinoJson.</p>
<p>See the `weather_code` list? Those are the weather codes for every hour. I learned that weather codes are numbers that indicate if it will be cloudy, sunny, rainy, and like 50 other conditions. For instance, `0` means it&#39;s a clear sky. Looking at <a href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM">a table of them</a>, I was surprised how specific and descriptive each code was. </p>
<p>To represent the entire day with one weather icon, I could simply find the number that appears the most frequently in the daylight hours and then convert it to a simpler weather condition that I have an icon/animation for. I&#39;m sure there&#39;s a better way, but this is fine enough.</p>
<p>I want to be careful to not poll that free online service too frequently with my microcontroller code. Right now it only polls at a maximum of once every 24 hours.</p>
<h4 id="5-1-3-settings-channel">5.1.3. Settings channel</h4>
<p>Forfeiting a normal menu system, I wasn&#39;t sure how I would give myself a way to change system settings (e.g. the brightness of the display). Then I realized that it can just be one of the applets. Soon, instead of hard-coding my wifi credentials into the source code, I want to be able to set them here too.</p>
<p>Eventually I do want to put some effort into making this look neat; right now it&#39;s just some sloppy text.</p>

<img src={settingschannelcrud}/>

<h4 id="5-1-4-cityscape">5.1.4. Cityscape</h4>

<video controls src={scrollangle}/>

<p>This one is just a few bitmaps layered on top of each other, making a parallax effect. The speed of the scrolling can be adjusted by twisting a knob. I kind of want to make a 3d version of this using raymarching. I wonder how it would perform.</p>
<p>I noticed that if the LED board has been on for a while, the scrolling gets choppy. I discovered the framerate isn&#39;t getting worse, it&#39;s just that the scrolling is a function of time in seconds, as a float. As days&#39; worth of seconds had passed, floating point became imprecise.</p>
<h2 id="6-problems-that-got-me-stumped">6. Problems that got me stumped</h2>
<p>I have no idea how to solve the following problems with this thing.</p>
<h3 id="6-1-display-artifacting">6.1. Display artifacting</h3>
<p>The display shows this weird artifacting. Usually it just affects the upper left quadrant, fringing its pixels and/or offsetting them and/or ruining their colors.</p>

<img src={uperrleftartifacting}/>

<p>In some cases it can show up in other parts of the display. The effect is most prominent at the highest brightness setting, and is nearly gone at the lowest brightness setting. The effect changes when I touch any wires or metal connected to the ESP32 with my hands, even the insulated parts. </p>
<p>The effect has some cases where it doesn&#39;t show up at all -- like when the display just shows some sparse lit pixels (in Particle Life or the basic clock applet)</p>
<p>In my timer applet I can see how lighting pixels on the border causes this problem to appear. </p>
<p>It&#39;s kind of dissapointing, but not a dealbreaker, I can work around it I suppose.</p>
<p>Now I am wondering if it&#39;s due to the ESP&#39;s IO voltage being 3.3 V while the LEDs are powered by 5 V.</p>
<h3 id="6-2-knob-reliability">6.2. Knob reliability</h3>
<p>Turning the right knob is no problem. Turning the left knob causes the system to think the right knob turned half the time. This makes using the device very frustrating.</p>
<p>Clicking either of the knobs seems to make the microcontroller reset. Why! It didn&#39;t always do that! This also ruins a lot of possibilities.</p>
<h2 id="7-wip-new-software">7. WIP New software</h2>
<p>I have been making new software that uses ESP-IDF. My code is using FreeRTOS, more C++ features, and my very own <a href="https://github.com/jiink/JaDraw">drawing library I call JaDraw</a>! With this new stuff, I have been able to write and test applets on my PC that use. Deploying them to my LED board is as simple as copy-pasting a C++ class file, even for applets that use inputs, wall-clock time, and more; I&#39;m pretty happy with that.</p>

<video controls src={newswdemo1}/>
<br/>
<video controls src={newswdemo2}/>

<p>With this I will make cooler applets and show more when that&#39;s ready.</p>

    </div>
  );
}

export default Esp32DeskLedBoard;