import React from 'react';
import { Link } from 'react-router-dom';
import crankentimerhero1 from '../assets/crankentimer/crankentimer-hero-1.jpg';
import crankentimer1 from '../assets/crankentimer/crankentimer-1.jpg';
import crankentimer2 from '../assets/crankentimer/crankentimer-2.jpg';
import crankentimer3 from '../assets/crankentimer/crankentimer-3.jpg';
import crankentimer4 from '../assets/crankentimer/crankentimer-4.jpg';
import crankentimer5 from '../assets/crankentimer/crankentimer-5.jpg';
import crankentimer6 from '../assets/crankentimer/crankentimer-6.jpg';
import crankentimer7 from '../assets/crankentimer/crankentimer-7.jpg';
import crankentimer8 from '../assets/crankentimer/crankentimer-8.jpg';
import crankentimer9 from '../assets/crankentimer/crankentimer-9.jpg';
import crankentimer10 from '../assets/crankentimer/crankentimer-10.jpg';
import crankentimer11 from '../assets/crankentimer/crankentimer-11.jpg';
import crankentimer12 from '../assets/crankentimer/crankentimer-12.jpg';
import crankentimer13 from '../assets/crankentimer/crankentimer-13.jpg';
import crankentimer14 from '../assets/crankentimer/crankentimer-14.jpg';
import crankentimer15 from '../assets/crankentimer/crankentimer-15.jpg';
import crankentimer16 from '../assets/crankentimer/crankentimer-16.jpg';
import crankentimer17 from '../assets/crankentimer/crankentimer-17.jpg';
import crankentimer18 from '../assets/crankentimer/crankentimer-18.jpg';
import crankentimer19 from '../assets/crankentimer/crankentimer-19.jpg';
import crankentimer20 from '../assets/crankentimer/crankentimer-20.jpg';
import crankentimer21 from '../assets/crankentimer/crankentimer-21.jpg';
import crankentimer22 from '../assets/crankentimer/crankentimer-22.jpg';
import crankentimer23 from '../assets/crankentimer/crankentimer-23.jpg';
import crankentimer24 from '../assets/crankentimer/crankentimer-24.jpg';
import crankentimer25 from '../assets/crankentimer/crankentimer-25.jpg';
import crankentimer26 from '../assets/crankentimer/crankentimer-26.jpg';
import crankentimer27 from '../assets/crankentimer/crankentimer-27.jpg';
import crankentimer28 from '../assets/crankentimer/crankentimer-28.jpg';
import crankentimer29 from '../assets/crankentimer/crankentimer-29.jpg';
import crankentimer30 from '../assets/crankentimer/crankentimer-30.jpg';
import twinbell from '../assets/crankentimer/twin-bell.jpg';
import ppktimerrun from '../assets/crankentimer/ppk-timer-run.png';
import ppkcrankrun1 from '../assets/crankentimer/ppk-crank-run-1.png';
import ppkcrankrun2 from '../assets/crankentimer/ppk-crank-run-2.png';
import crankentimer_alarm_clip from '../assets/crankentimer/crankentimer-alarm-clip.mp4';
import crankentimer_oscillate_clip from '../assets/crankentimer/crankentimer-oscillate-2-clip.mp4';
import schematic from '../assets/crankentimer/schematic.png';
import layout from '../assets/crankentimer/layout.png';

function Crankentimer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <h1>Crankentimer came close</h1>
      <img src={crankentimerhero1}/>
      <p>Last edit: April 2026</p>
<p>When I learned of <a href="https://hackaday.com/2026/03/03/get-your-green-power-on/">Hackaday and Digikey&#39;s Green-Powered Challenge</a>, I got an idea: I wanted to make a hand-powered electronic timer. </p>
<h2 id="tl-dr">TL;DR</h2>
<p>My timer device works at a very low power, but I couldn&#39;t figure out the power source, although I felt I was close to making it work out:</p>
<ul>
<li>I could charge my LiPo battery, but it died. The fact that this project by nature requires the battery to be stored at &quot;0%&quot; energy and go through shallow charge cycles made my LiPo battery die after just a week or two.</li>
<li>I couldn&#39;t get my NiMH battery to accept a significant amount of current by hand-powered means. I could crank out hundreds of mA, but the battery wouldn&#39;t draw any more than 0.5 mA.</li>
</ul>
<h2 id="the-full-story">The full story</h2>
<p>The idea originally stemmed from the fact that I saw a Beethoven-themed kitchen timer that played a short clip of music when the time was up. I didn&#39;t like how it required a battery - shouldn&#39;t the winding-up of the timer provide enough energy for the music at the end?</p>
<p>A year or two ago I already tried this idea, but didn&#39;t get very far. I used a character LCD with an Arduino, but couldn&#39;t get the power usage to be low enough, not even close.</p>
<h3 id="but-now-i-have-a-different-approach-">But now I have a different approach:</h3>
<ul>
<li>I have an e-ink display, which can display an image without requiring constant power.</li>
<li>I have a larger variety of microcontroller dev boards; surely one of them can be low power enough.</li>
<li>I can make a crank generator out of a stepper motor and diodes.</li>
<li>I have an Adafruit PowerBoost 500C, which should let me charge a battery.</li>
</ul>
<p>With those resources, I thought it wouldn&#39;t be too hard.</p>
<h3 id="before-working-on-the-power-source-i-needed-a-low-power-circuit-to-drive">Before working on the power source, I needed a low power circuit to drive</h3>
<p>This starts with getting a microcontroller devboard to run in a very deep sleep at near-0 current draw.</p>
<p>I went for my Pi Pico 2, since I have been really enjoying the RP2350 / RP2040. The baseline idle current is awful: 60 mA. I spent several hours trying to get it to deep sleep. I learned that there&#39;s not really a deep sleep function in the SDK. It&#39;s in an <a href="https://github.com/raspberrypi/pico-extras">sdk &quot;extras&quot; repo</a>. I had lots of trouble trying to make the example work. Discussion online was not reassuring either. Eventually I got it to enter deep sleep but could not get it to exit. Discussion online agrees, some people worked around it by just having it reboot to wake back up. My timer can&#39;t do that.</p>
<p>A good sleep mode seems really important especially when the baseline idle draw is 60 mA. I&#39;m really disappointed this is so difficult, my expectations were higher. I will need to figure out deep sleep for the calculator project I'm working on. I will probably have to do register poking, but I expected that would take too much time for this project. Sleep modes can get really complicated for me.</p>
<h3 id="i-still-had-an-stm32-and-esp32-to-look-at-so-i-moved-on-">I still had an STM32 and ESP32 to look at, so I moved on.</h3>
<p>I tried my STM32 Blue Pill - well, my &quot;<a href="https://github.com/WeActStudio/BluePill-Plus">WeAct Studio BluePill Plus</a>&quot; actually. It takes me so much time to deal with STM32CubeIDE and ST-Link, so I looked into trying to set it up as an Arduino. That took me a surprising amount of time to set up. There were more bootloader options than I expected, and lots of varying online instructions. </p>
<p>Eventually got the Arduino bootloader to work. I measured the baseline idle current of this devboard and it was reasonable, already much better than the Pi Pico 2.</p>
<p>Now I just had to look for a deep sleep library. I found a great one: It&#39;s called <a href="https://github.com/stm32duino/STM32LowPower">STM32LowPower by stm32duino</a>. The API is very very simple and I&#39;m so glad I didn&#39;t have to consider all the clocks and peripherals enabling/disabling and how to get it to wake back up from sleep.</p>
<p>I also had to desolder the little SMD power LED. It was really hard. After several minutes I ended up accidentally smashing it beyond recognition with my iron, which apparently did the trick. </p>
<p>At this point when I put it on my DC lab bench top supply, the supply&#39;s readout said &quot;0.000 A&quot; between my LED blinks. Yes! </p>
<h3 id="this-is-when-i-knew-my-idea-was-possible-with-the-materials-i-already-had-">This is when I knew my idea was possible with the materials I already had.</h3>
<p>Next I attached my <a href="https://www.waveshare.com/2.13inch-e-paper-hat.htm">e-ink display from waveshare</a>. It has been waiting for a purpose for a long time.</p>
<p>I displayed a stopwatch/timer on it that updated every 5 seconds. I remembered that I can have the e-ink display do a &quot;partial refresh&quot; which is much faster, lower-power, and less visually jarring than a full refresh. The only cost is that the display looks a little noisy for the first few partial-refreshes. No big deal. </p>
<img src={crankentimer6}/>
<p>I thought I&#39;d never use Arduino IDE again, but so far this was making things move along quickly, I am beginning to appreciate it again.</p>
<p>As for the user interface, I imagined that as you crank the timer, the time on the display would increase, and once you stop cranking, the timer would begin counting down. But I figured there should be a knob in case you want to adjust the time after setting it, so I added one. It&#39;s a KY040, which always makes me wish I had a potentiometer instead. No amount of software debouncing and state machines could get me out of its crazy behavior on any microcontroller I try this with. This time, I put a couple of capacitors and it helped a lot. Now instead of a 50% chance of clicking the correct way and a 20% chance of it registering the correct number of indentations, it&#39;s more like a 90% correctness rate. </p>
<p>I also added a speaker on a GPIO with a couple series resistors. I found a site where I can convert any MIDI file I found into an array of notes and delays for my MCU to play a tune when the time is up.</p>
<img src={crankentimer7}/>
<video controls src={crankentimer_alarm_clip}/>
<h3 id="now-that-i-had-some-low-power-device-to-drive-i-could-focus-on-the-power-generation-part-of-this-">Now that I had some low power device to drive, I could focus on the power generation part of this.</h3>
<p>I thought of using a stepper motor as a generator because when I moved the bed back and forth on my old 3D printer, the printhead&#39;s fan started spinning. I&#39;ve also seen a video clip of someone briefly booting up their 3D printer (LCD and all) by moving a part back and forth.</p>
<p>I needed to see how much power I could get out of backdriving my stepper motor.</p>
<p>As a fun little experiment, I hooked up each wire of one stepper motor to another, and it amazed me: If I twisted the shaft of one stepper motor with my fingers, the other stepper motor would spin the same amount! This told me that surely a backdriven stepper motor could give enough power to supply my circuit and charge a battery.</p>
<h3 id="now-i-just-needed-a-way-to-sustain-the-rotation-of-the-motor-">Now I just needed a way to sustain the rotation of the motor.</h3>
<p>Also, after measuring the AC voltage through one of the coils, I realized I also needed a gear ratio to make the motor spin faster.</p>
<img src={crankentimer5}/>
<p>I designed this assembly myself. The hardest part was figuring out how to mount something to the motor shaft. I have all the motors of an Ender 3, but none of them had an obvious way to mount to the shaft - I could pop off the pulleys, but then I&#39;m left with a smooth circular shaft. I used the motor that held the lead screw; I designed something that could get squeezed in there.</p>
<p>It was difficult to get the tolerances so the parts would fit into holes and shafts tight enough to hold under torque. using some electrical tape let me skip a few re-prints. This clear PETG is so ugly, I can&#39;t wait to finish using it. </p>
<p>Now I could spin the motor around and round. </p>
<h3 id="now-i-needed-to-get-dc-voltage-from-the-four-wires-coming-out-">Now I needed to get DC voltage from the four wires coming out.</h3>
<p>Since a stepper motor has 2 coils, I needed to make two full bridge rectifiers and connect them in series to get a higher voltage that I could step-down. It was tricky to find a compact way to make a full bridge rectifier on a breadboard, but I figured it out.</p>
<img src={crankentimer10}/>
<p>I was then able to get a nice 15 volts DC by cranking my motor (or 20 V if I try really hard). But that&#39;s with no load. I shorted the DC output and cranked while measuring how much current it produced. I forgot how much exactly, but it was a little disappointing, I think it was 150 mA. And certainly the voltage was much lower as I could not crank as fast as I did with no load. </p>
<p>I needed to know exactly how much power I needed to charge a battery. My Adafruit PowerBoost 500C needs 500 mA. This was not looking good. I tried using a resistor on the 5V end of my new DC-DC buck converter modules instead of a short circuit to simulate a more reasonable load. I forgot what the results were. I approached this problem from both sides simultaneously:</p>
<ol>
<li>Lower my target power to something easier. </li>
<li>Generate more power.</li>
</ol>
<h3 id="so-i-lowered-my-target-power-">So I lowered my target power.</h3>
<p>To lower my target power, I found the resistor on the PowerBoost board that &quot;tells&quot; the LiPo charger IC what current to charge at. I swapped it to a different value to charge at 250 mA. I never put my soldering iron on surface mount stuff before, so it was a little nerve wracking, but I did it. I&#39;m glad that I could use nice equipment at work like a microscope, kapton tape, liquid flux, and hot tweezers; that helped a lot. Kapton tape prevented my clumsy movements from causing my soldering iron to mess up neighboring components or cause solder bridges. I did not like soldering a through-hole resistor onto SMD pads. At least they were decently big pads, thanks Adafruit. </p>
<img src={crankentimer3}/>
<img src={crankentimer1}/>
<img src={crankentimer2}/>
<p>I also removed all the on-board LEDs: the power output indicator, the charging indicator, the low battery indicator, and the charging-complete indicator. They are eye searingly bright. They were also kindly placed by Adafruit as close as possible to the edges of the PCB, so: easy!</p>
<h3 id="now-for-increasing-my-output-power-">Now for increasing my output power.</h3>
<p>Adding another set of gears to my crank design seemed daunting, it would be way too time consuming to design, and it would be physically huge. Alternatively, I could increase the gear ratio while keeping it to just 2 gears, but I doubted it would help enough. I could also use my beefier motor that was used for pushing filament, but it looked way too difficult to mount my little gear to its shaft.</p>
<p>I got an idea: Surely I could just look up existing designs for a small gearbox for the motors I have. That would increase the gear ratio, decrease the physical size, and I would not have to design anything. Sure enough, there was a lot to pick from on MakerWorld.</p>
<p>Many designs required extra hardware like bearings and rods. I <a href="https://makerworld.com/en/models/774955-slim-planetary-gearbox-for-nema-17#profileId-711386">found one that only requires 4 M3 screws</a> to mount it to the motor housing. Looking at the design, I was skeptical that the plastic rods would survive, but all the commenters seemed to like it. It used a planetary gear design.</p>
<p>The big challenge here would be mounting the sun gear to my motor. First off, I&#39;d have to remove the brass thing off my motor. I couldn&#39;t just increase the sun gear diameter. Turns out this is something a lot of others have also figured out. I found a little video clip of someone just using two hammers to remove the brass in under a minute. I used a hammer and a wrench and spent a lot of time smacking them together, it wasn&#39;t doing anything. So I used a torch to heat up the brass and try again. It took a lot of heat and time but eventually it started coming off little by little. I was amazed I didn&#39;t get the shaft all bent up or misaligned. </p>
<p>Now the problem was that the sun gear had a D-shaped hole but my shaft was O-shaped. A D shaft would make tolerances so much easier, but filing the shaft down accurately sounded too risky so I brought the sun gear into Onshape and made its hole into an O and printed a few out to hammer in. My first attempt got the sun gear on, but it cracked. I adjusted the tolerance and it helped. It was really hard to get all the planet gears in.</p>
<img src={crankentimer30}/>
<p>Once assembly was done, I was afraid it wouldn't forward-drive at all, let alone backdrive. I had to print a handle to even see if it would rotate. So I made a stick with a hole in it. It did rotate, which was a relief. Things were looking good.</p>
<p>I now needed a better handle with a knob so I could rotate it continually. My brother Kyle designed it. It worked. But then the 3D printed shaft broke. So he re-designed the part to be bigger and made a corresponding update to the handle.</p>

<img src={crankentimer9}/>
<img src={crankentimer11}/>

<h3 id="i-ran-the-same-power-tests-as-before-with-no-load-voltage-and-loaded-current-and-it-was-dissapointing-again-">I ran the same power tests as before with no-load voltage and loaded current, and it was disappointing again:</h3>
<p>I could do 15 V at no load; 16 crank revolutions in 10 seconds. On a short circuit I measured 200 mA at 5 cranks in 10 seconds, which works out to around 4 V.</p>
<p>At this point my LiPo battery had already arrived and I played with it a bit. I was too scared to trust cheap ones from Amazon so I got it from Adafruit. I got a much bigger capacity than I needed so I can re-use this for a future project I have in mind.</p>
<img src={crankentimer12}/>
<p>One big problem with my battery setup was that there was no clean shut-off point when the battery drained. My circuit would just start turning on and off a few times per second. I guess that makes sense: The battery goes below the 3.0 V cutoff point, the load goes away, the voltage increases above the shutoff threshold slightly, it gets loaded, the voltage decreases below the threshold again, etc.</p>
<video controls src={crankentimer_oscillate_clip}/>
<p>I considered what circuitry I&#39;d need to make this better. It&#39;d be more work than I was prepared for, so I decided I&#39;d just put a rocker switch later to disconnect the battery to stop the oscillation manually. </p>
<p>I realised it was a mistake to remove the charging indicator LED. I soldered a through-hole one onto the pads. Waste of time. Anyways, cranking my new machine was causing the charging indicator to light up! It was flickering, so I cranked faster. The crank was getting rough and after a minute or so, I started to hear cracking and suddenly the cranking became very easy. The plastic rods broke. If I replaced it, this would just happen again, so I didn&#39;t. I felt bad for my brother and his now-useless highly-engineered handle that he so kindly custom designed for me. </p>
<h3 id="i-wanted-to-give-up-">I wanted to give up.</h3>
<p>I plugged my original gear ratio design into the battery charger and that also lit up the charging status LED. Maybe my original design was fine actually? To find out, I had to discharge my battery completely again and see if I could add enough juice to it with my crank. </p>
<img src={crankentimer21}/>
<p>So I watched it deplete and begin oscillating. The oscillation stopped. I cranked my crank. The charging indicator came on. But my circuit did not power. That&#39;s weird. I plugged the charger into a normal USB port. Still no power was getting through. The battery measured about 0 volts when disconnected and 1.7 volts when charging.</p>
<h3 id="the-battery-is-dead-dead-">The battery is dead-dead.</h3>
<p>This was the worst time for the battery to die. Now I really wanted to give up.</p>
<p>The gimmick of this project isn&#39;t worth the effort for me. Even if this worked perfectly, I&#39;d use it only to show it off, then take it all back apart. If you want a hand-powered timer, just get a normal kitchen timer, or a twin bell alarm clock if you want it to last all night. They do everything my project is trying to do, all without using ANY electronics. That sounds a LOT more like &quot;green power&quot; than batteries and e-waste; I regret even starting this. </p>
<img src={twinbell}/>
<p>If I bought a replacement LiPo, this would just happen again. I doubt LiPo is viable because the nature of my project is such that it sits at &quot;0%&quot; for a long time and occasionally gets charged to &quot;%5&quot;-ish, which is even worse for LiPos than I thought, apparently.</p>
<h3 id="in-parallel-to-the-above-generator-effort-i-was-working-on-a-better-circuit-board-for-my-breadboard-setup-">In parallel to the above generator effort, I was working on a better circuit board for my breadboard setup.</h3>
<p>I decided now was a good time to try making a 3D-printed PCB, like I learned about on Hackaday!</p>
<p>In my EDA of choice, I made a schematic. I picked out real pin header parts and real through-hole passives from the parts library, which felt unnecessary, but I wasn&#39;t sure what my other option was besides making a bunch of custom symbols and footprints, which sounds like a lot of work. Then I laid them out on the PCB view. I carefully routed them with wide traces; I knew I would have to cut around all of them with a knife.</p>
<p>Later I learned that you can lay out a PCB without making a schematic first. I really don&#39;t know if that would have been a better idea, I think I like having a schematic anyways.</p>
<img src={schematic}/>
<img src={layout} width={250}/>
<p>I was following along with <a href="https://www.youtube.com/watch?v=PLliKgzKKUI">this YouTube video</a>. I was using EasyEDA and Onshape, but it doesn&#39;t really matter; I like how software-agnostic this workflow is. </p>
<p>I exported the STEP file, extruded the traces in CAD, and got it ready to print. I made a sidecar looking thing to mount my battery and e-ink to. </p>
<p>In my first print, none of my components fit: the holes printed out smaller than I expected. So I printed a new one.</p>
<p>I put the copper tape on my finished print. My circuit was wider than the tape, so I had to have some overlapping spots. This is important because it turns out the sticky side of my copper tape is not conductive, meaning I had to make solder bridges over the borders.</p>
<img src={crankentimer13}/>
<p>I cut it out with an exacto knife. It was not easy, but it was a little less exhausting than perfboard work. I repeatedly slipped my knife into cutting up nearby traces - but not enough to need to repair them. </p>
<img src={crankentimer14}/>
<p>I was realizing there&#39;s no real &quot;easy&quot; way for me to make a PCB. A perfboard takes me hours, and so does this. It&#39;s just a tradeoff. If I&#39;m not willing to pay to have a real PCB manufactured then I wonder if I should really be willing to DIY it. It always takes way more time and effort than I think, even though I have done several perfboards before. </p>
<p> I was really not looking forward to soldering my components in. I thought that once I push the pins through, it will lift off the tape, and then my solder will refuse to stick to this copper tape that has been collecting dust for years. But it turned out that soldering was probably the easiest part of this whole process. Some of the tape traces lifted up but I was able to solder them anyways. The solder stuck right on. The plastic didn&#39;t melt or soften from the iron&#39;s heat. I was also glad I just bought a circuit board holder and liquid flux for myself; this helped make it go quicker. </p>
<img src={crankentimer16}/>
<img src={crankentimer17}/>
<p>One &#39;gotcha&#39; I learned is that my devboards were just barely being held in with a few thin strips of tape since I only route a minority of the pins out. I guess I had just enough to keep it seated.</p>
<img src={crankentimer18}/>
<p>My board passed the smoke test and everything worked. I also designed in a resistor divider from the USB-5V input to a MCU pin so it could keep track of how long it gets charged for and use that info to decide how much time to start the timer on. </p>
<img src={crankentimer19}/>
<p>I&#39;m glad I tried out the 3D printed PCB thing. It&#39;s not as easy as I thought, but I wasn&#39;t missing drawing out my perfboard plan in Paint, measuring and cutting and stripping and bending lots of wires, making lots of solder bridges, clearing up unintended solder bridges, overlapping many wires, etc. </p>
<p>Next I turned to something else I had bought earlier for this project:</p>
<h3 id="a-hand-crank-powered-flashlight-off-amazon-">A hand-crank powered flashlight off Amazon.</h3>
<img src={crankentimer4}/>
<p>It has a small internal battery that gets charged when you crank the handle. All the gearing and charging circuitry is already done for me! </p>
<img src={crankentimer23}/>
<p>I desoldered the LEDs to insert my timer&#39;s Adafruit PowerBoost 500C in there instead; it doesn&#39;t HAVE to charge anything, I can easily just use the &quot;boost&quot; part of it. The green battery was kindly labeled with its nominal voltage of 3.6 V, which was enough for the boost converter&#39;s minimum of 1.5 V or something. </p>
<img src={crankentimer22} width={100}/>
<p>I had a hard time figuring out where to put the positive and negative terminals. A 1-layer board like this should be easy to reverse-engineer into a schematic, but that still takes time. When I saw how the LEDs got powered by a 6-pin IC -- presumably an LED driver -- I decided to just splice my circuit into the positive and negative terminals of the battery. </p>
<img src={crankentimer26}/>
<p>I had bodged on headers so I can disconnect the battery to prevent mistakes, and also to plug my circuit into. Looks fragile.</p>
<img src={crankentimer25}/>
<img src={crankentimer24}/>
<img src={crankentimer26}/>
<h3 id="with-everything-connected-i-cranked-and-watched-my-timer-start-counting-">With everything connected, I cranked and watched my timer start counting.</h3>
<p>I stopped cranking and: yes! It kept going! After about 30 seconds it stopped.</p>
<p>I wasn&#39;t that surprised. Before taking the flashlight apart, but after letting its battery deplete, I noticed that while I cranked it, the light was very bright, but when I stopped, it quickly dimmed. If I cranked more, the time it took to dim was only slightly higher.</p>
<p>I tried charging the battery for my circuit again, cranking for longer. Same result: about 30 seconds, then dead. </p>
<p>Then, I cranked for 5 long minutes. My hands were about to cramp; this was not easy to hold after taking most of it apart. I expected my circuit to live for 24 hours, but it lasted only 30 seconds again. Really disappointing.</p>
<p>I measured the voltage to see what was going on. I cranked and the battery went up to like 4 volts. I stopped cranking and it dropped to 3.7 V or so. Every time my timer updated its display (every 5 seconds), the voltage dropped a little for a moment and then mostly recovered. After several times of this, the drops got more severe until it crashed below my boost converter&#39;s lower threshold and stayed there. </p>
<p>It seemed the crank was not really charging the battery. I also noticed it was NiMH, which must be more resilient to storage at low charge than LiPo. I did some research on NiMH and found I can charge it with a DC power supply. That&#39;s cool that you can do that.</p>
<p>But to charge the NiMH without babysitting it, you must do so slowly - see <a href="https://en.wikipedia.org/wiki/Nickel%E2%80%93metal_hydride_battery#Charge">Wikipedia</a>. I set my supply to 4.3 V at a 25 mA limit. It took basically all day to charge, and when the current went down to 5 mA I figured it was done.</p>
<p>I ran my timer on the battery and it lasted about 4 hours and 20 minutes. That&#39;s great! If I make the display update every minute instead of every 5 seconds, this would last over 2 days.</p>
<img src={crankentimer29}/>
<h3 id="now-i-knew-the-problem-was-that-the-battery-wasn-t-charging-off-the-included-crank-quickly-enough-">Now I knew the problem was that the battery wasn&#39;t charging off the included crank quickly enough.</h3>
<p>I was having trouble using my multimeter to measure how much current was getting into the battery while cranking, so I used a <a href="https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2">Nordic Power Profiler Kit II</a> (AKA PPK2). The PPK2 lets me get a live chart on my computer showing me how much current is going through it. I verified that my timer was low-power. The sleep portion was under 0.5 mA.</p>
<img src={ppktimerrun}/>
<h3 id="and-i-found-that-the-flashlight-s-crank-was-only-charging-its-battery-with-50-microamps">And I found that the flashlight&#39;s crank was only charging its battery with 50 MICRO-amps:</h3>
<img src={ppkcrankrun1}/>
<p>It slightly depended on the speed of my crank, but it went no higher than 500 uA! No wonder it felt like it wasn&#39;t charging!</p>
<p>I was really confused. All I was doing was measuring the circuit I bought on Amazon. It&#39;s a real battery indeed and the crank was capable of powering the LEDs and USB port just fine, so I&#39;m not sure where the problem could be.</p>
<img src={crankentimer27}/>
<h3 id="the-battery-also-pulled-well-under-1-ma-from-my-own-crank-design-">The battery also pulled under 20 uA from my own crank design:</h3>
<img src={ppkcrankrun2}/>
<p>But the voltage was fine: it was the 4.1 V I set my DC-DC converter to. So... why&#39;s the battery hardly drawing anything? This is where I have reached the limit of my understanding, competition time, and budget. </p>
<img src={crankentimer28}/>
<h2 id="what-i-would-do-next">What I WOULD do next</h2>
<p>I&#39;ve lost my interest. I don&#39;t want to buy even more things for this stupid project. But if I did continue, this is what I would do:</p>
<p>I would have liked to use supercapacitors instead of batteries. I thought they wouldn&#39;t possibly hold enough energy, but recently I learned from <a href="https://www.youtube.com/watch?v=-4X6KYlQ7YQ">the supercap-plane guy&#39;s new YouTube video</a> that you can get 2.7 V capacitors of 5F, 10F, 50F, and even 100F - truly insane. They are not even that big, nor very expensive. I&#39;m guessing it would be easier and much quicker to take them through charging and discharging cycles for testing. I would just need a boost converter that works efficiently at very light loads and supports very low input voltages. I found such an <a href="https://www.ti.com/product/TPS610981">IC from TI</a>. But I think I would need to design a real PCB for it; its devboard is too expensive. </p>
      
      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default Crankentimer;