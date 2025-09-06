import React from 'react';
import { Link } from 'react-router-dom';
import incrediplotter1 from '../assets/incrediplotter/incrediplotter-1.jpg';
import incrediplotter2 from '../assets/incrediplotter/incrediplotter-2.jpg';
import incrediplotter3 from '../assets/incrediplotter/incrediplotter-3.jpg';
import incrediplotter4 from '../assets/incrediplotter/incrediplotter-4.jpg';
import incrediplotter5 from '../assets/incrediplotter/incrediplotter-5.jpg';
import incrediplotter6 from '../assets/incrediplotter/incrediplotter-6.jpg';
import incrediplotter7 from '../assets/incrediplotter/incrediplotter-7.jpg';
import incrediplotter8 from '../assets/incrediplotter/incrediplotter-8.jpg';
import incrediplotter9 from '../assets/incrediplotter/incrediplotter-9.jpg';
import incrediplotter10 from '../assets/incrediplotter/incrediplotter-10.jpg';
import incrediplotter11 from '../assets/incrediplotter/incrediplotter-11.jpg';
import incrediplotter12 from '../assets/incrediplotter/incrediplotter-12.jpg';
import incrediplotter13 from '../assets/incrediplotter/incrediplotter-13.jpg';
import incrediplotter14 from '../assets/incrediplotter/incrediplotter-14.jpg';
import incrediplotter15 from '../assets/incrediplotter/incrediplotter-15.jpg';
import incrediplotter16 from '../assets/incrediplotter/incrediplotter-16.jpg';
import incrediplotter17 from '../assets/incrediplotter/incrediplotter-17.jpg';
import incrediplotter18 from '../assets/incrediplotter/incrediplotter-18.jpg';
import incrediplotter19 from '../assets/incrediplotter/incrediplotter-19.jpg';
import incrediplotter20 from '../assets/incrediplotter/incrediplotter-20.jpg';
import incrediplotter21 from '../assets/incrediplotter/incrediplotter-21.jpg';
import incrediplotter22 from '../assets/incrediplotter/incrediplotter-22.jpg';
import incrediplotter23 from '../assets/incrediplotter/incrediplotter-23.jpg';
import incrediplotter24 from '../assets/incrediplotter/incrediplotter-24.jpg';
import incrediplotter25 from '../assets/incrediplotter/incrediplotter-25.jpg';
import incrediplotter26 from '../assets/incrediplotter/incrediplotter-26.jpg';
import incrediplotter27 from '../assets/incrediplotter/incrediplotter-27.jpg';
import incrediplotter28 from '../assets/incrediplotter/incrediplotter-28.jpg';
import incrediplotter29 from '../assets/incrediplotter/incrediplotter-29.jpg';
import incrediplotter30 from '../assets/incrediplotter/incrediplotter-30.jpg';
import incrediplotter31 from '../assets/incrediplotter/incrediplotter-31.jpg';
import incrediplotter32 from '../assets/incrediplotter/incrediplotter-32.jpg';
import incrediplotter33 from '../assets/incrediplotter/incrediplotter-33.jpg';
import incrediplotter29_hires from '../assets/incrediplotter/incrediplotter-29-hires.jpg';
import incrediplotter30_hires from '../assets/incrediplotter/incrediplotter-30-hires.jpg';
import incrediplotter31_hires from '../assets/incrediplotter/incrediplotter-31-hires.jpg';
import incrediplotter32_hires from '../assets/incrediplotter/incrediplotter-32-hires.jpg';
import incrediplotter33_hires from '../assets/incrediplotter/incrediplotter-33-hires.jpg';

const code1 = `[stepper_x]
step_pin: PA1
dir_pin: !PA2 # ! is for not
endstop_pin: ^PB8 # ^ is for pull-up, cool
`;

const code2 = `[gcode_macro PEN_DOWN]
gcode:
    SET_SERVO SERVO=my_pen ANGLE=45
    G4 P250

[gcode_macro PEN_UP]
gcode:
    SET_SERVO SERVO=my_pen ANGLE=117
    G4 P250
`;

function Incrediplotter() {
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
      <h1>The Incrediplotter</h1>
      <p>Last edit: September 2025</p>
      <h2>YouTube video</h2>
      <iframe width="100%" height="400" allow="fullscreen;"
      src="https://www.youtube.com/embed/jlRw-0B5N8U">
      </iframe>

      <h3>The following is pretty much a transcription of the above YouTube video with a few screenshots thrown in.</h3>
      <br></br>
      <img src={incrediplotter1}/>
      <h2>The quick rundown</h2>
      
      <p>This is the Incrediplotter. It can draw anything* you tell it to. The machine is made of reused parts from an old Ender 3 3D printer. 3D-printed plastic pieces are used to hold things together, and they were designed in Onshape. The flair pen is held in with a set screw. A servo motor lifts it up, but it's pushed down on the paper just by gravity.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter2}/>
      <br/><br/>
      <p>All of that mechanical stuff was done by <a target="_blank" rel="noopener noreferrer" href="https://toxicpoison.github.io/portfolio/index.html">my brother</a>. I did the electronics and software. Here, a microcontroller is running a popular 3D printer firmware called Klipper. And my computer is running the Klipper app. The computer is also running Moonraker and Mainsail, which lets me control the Klipper stuff from my browser and from code.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter3}/>
      <br/><br/>
      <p>That prompt is then sent to Google Gemini through an API. It generates an image and sends it back. My program takes that image, does some filtering, and turns it into an SVG vector line drawing, using a program called AutoTrace, specifically with something called Centerline Tracing, and not just normal tracing. That line drawing SVG is then converted to G-code, using a program called vpype-gcode. And finally, we have G-code that Klipper can accept. My script sends this to Klipper using the Moonraker API and then tells it to start printing.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter4}/>
      <br/><br/>

      <h2>The journey</h2>

      <p>My brother and I started with a broken Ender 3 which we took apart. We saw that the materials were worth keeping to use for projects. A bunch of aluminum bars, motors, wheels, belts, and more. </p>
      <br></br>
      <br></br>
      <br></br>
      <img src={incrediplotter5}/>
      <br></br>
      <p>So we thought a pen plotter would be fun to make. But figuring out where to even start with the mechanism was difficult. But with enough time, you can figure it out. You can do a lot of things with just using a motor shaft to move a belt that pulls a carriage that rolls along a rail with wheels. And while this is how the X and Y axes of the Ender 3 work anyway, adding a second axis was really hard and there are lots of ways to do it. The one we went with isn't ideal for speed or weight, but it was the easiest to construct and pretty easy to understand. We used 3D printed parts to hold the motors and align them with everything else. And at first, we thought PETG would be better since it's tough, but it was too flexible, so PLA worked out better.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter6}/>
      <br/><br/>
      <p>So as soon as you have something where you can just use your hands to twist a couple of knobs to position the pen anywhere over the paper, that's when you can start driving the motors to do it automatically. So to drive it, I had to learn how stepper motors work. All I knew was that there are four wires coming out and that a 3D printer knows where the motors turn to. So I figured, well, they must be ground, motor voltage (e.g. 12 V), logic voltage (5 V), and data. But that's not how it works at all. Really, these are all power wires in a way. They just need to be turned on in the right order in a certain manner so that it completes one "step" at a time. When I saw this clip on YouTube, it all made sense:</p>
      <br/><br/>
      <iframe width="100%" height="400"
      src="https://www.youtube.com/embed/kAyDmovM18E">
      </iframe>

      <br/><br/>
      <p>Since these "steps" need to be done with relatively high-current/high-voltage connections, I can't just hook it up to a microcontroller directly. This is what a stepper motor driver is for. It takes in a relatively high voltage and uses that to control the stepper motor directly, while the other side of the board exposes step and direction pins, which are a really easy interface for a microcontroller to handle. What's cool is that there are really no sensors involved. All the microcontroller code has to do is send step signals and just count them and keep track. Using that, it can just guess where the motors turned to and it's completely accurate.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter7}/>
      <br/><br/>
      <p>The stepper motor driver I used is a TMC2208. These are like twice as expensive as the ones in the Ender 3, but I chose them because they make the motors way more silent, which I think is surprising that just with the electronics a loud motor can become quiet. On this thing there's a lot of pins, but I could just ignore half of them if I don't care about Microplyer and StealthChop2, and SpreadCycle. What I did need was to screw the potentiometer on it to the right amount so it would limit the current, basically limiting the strength of the motor and limiting how much power it can draw from my supply. I saw a YouTube video that explained how to do this:</p>
      <br/><br/>
      <iframe width="100%" height="400"
      src="https://www.youtube.com/embed/d-u_mzvw_eY?t=140">
      </iframe>

      <br/><br/>
      <p>So with this, I started off by putting one of these motor drivers on a breadboard and using it with an Arduino to spin one motor around.</p>
      
      <br></br>
      <br></br>
      <img src={incrediplotter8}/>
      
      <p>After that was working, I started designing a perfboard circuit that would control both axes. This way it would be a lot more compact and sturdy than using breadboards. I planned it out in an image editing software where I decided to use an STM32 Blue Pill, because I got a bunch of them for cheap, and I wanted to try out the brand. </p>
      
      <br></br>
      <img src={incrediplotter9}/>
      <br></br>
      
      <p>Picking which pins on the microcontroller to use was challenging. I wanted to pick pins that supported the timer peripherals just in case I needed them. I also needed to account for the limit switches and the servo, which definitely needed a pin that was compatible with the timer. And once the circuit was all planned out, I could start soldering everything together while looking at my picture for reference. Instead of soldering the stepper motor driver boards and microcontroller board directly to the perfboard, I used female pin headers. This is so if one of the components fails, I can just pull it out and replace it. It was also important to make sure everything had a common electrical ground, which I almost forgot. And after a lot of painful soldering later, it was finally ready.</p>

      <br></br>
      <br></br>
      <img src={incrediplotter10}/>

      <br></br>
      <img src={incrediplotter11}/>
      <br/><br/>
      <p>So then I looked into what software this microcontroller should run. Soon I found out that I should have done this way earlier. But the key to finding existing software I could use was the realization that my pen plotter was basically just a CNC machine, but with a pen instead of a spindle. So I discovered the GRBL software, which is what people use when they make an Arduino-powered CNC machine. Or GrblHAL, which is an upgraded version of it. There's also FluidNC for ESP32 microcontrollers. I saw that there were <a target="_blank" rel="noopener noreferrer" href="http://wiki.fluidnc.com/en/hardware/existing_hardware">already so many board designs</a> just like what I did. I felt kind of bad. I ran into compatibility issues with all this existing software. The closest I got was this GrblHAL port that supported my chip, but it required the motors and limit switches to be wired up to particular pins that I didn't have them on. I really didn't want to re-solder anything, so I decided I might as well try writing my own software for it.</p>
      <br></br>
      <img src={incrediplotter12}/>
      <br/><br/>
      <p>To start with, I was disappointed to find that I had to buy an ST-Link programmer instead of just programming this thing over the USB port like all my other boards. For how popular these STM32 chips are, it took me a long time to get going with just blinking an LED and accepting input through the serial port. Even just setting up the clocks took way more research and time than I thought. The Eclipse IDE sucks, and the code generation is weird. So for a while, I was really not liking it. I was wishing I just used an ESP32 with FluidNC, but I had to keep moving.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter13}/>
      <br/><br/>
      <p>To get both stepper motors moving to a target, I set up one of the microcontroller timers so I could have a function that runs like a thousand times per second. I called this my periodic function. In the code, I made two X/Y position variables: the current position and the target position. In the periodic function, each axis's position would be compared to its target. And if they were not equal, it would generate a step signal very briefly in the correct direction. Later, I made it so I could send a couple numbers from my computer and the machine would set that as its target position. That way I could control where it goes from my computer. I had a cool idea to use an LLM to generate a JavaScript web page UI to do it using Web Serial. That worked great.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter14}/>
      <br/><br/>
      <p>Then, after making the pen-lifting servo motor work, I made the microcontroller accept another serial command that was for lifting and lowering the pen. And finally, this is the point where the machine could actually draw something. So I came up with a simple drawing that I could try entering commands manually with and see what happens:</p>
      <br></br>
      <br></br>
      <img src={incrediplotter15}/>
      <br/><br/>
      <p>Here's how it came out:</p>
      <br></br>
      <br></br>
      <img src={incrediplotter16}/>
      <br/><br/>
      <p>The code I'd written got the pen from one position to the next, but it doesn't do diagonal lines very well. The algorithm needed to be more complex than I wanted. Oh well. I was having a really hard time finding any resources on how to write such a thing. So I decided to make a Python script where I would just practice this very easily.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter17}/>
      <br></br>
      <p>This made the trial and error process a lot quicker. So once I had it down, I did the C-code port on the microcontroller and it worked great and the test drawing looked much better.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter18}/>
      <br/><br/>
      <p>Then I came up with a plan to have the microcontroller draw automatically. Instead of me entering all the numbers in manually, I would send them all up front and then have the microcontroller go run with it stored. Since G-code looks really inefficient and the microcontroller needed to store these drawings, I came up with a little instruction system that would keep the commands really small in memory. After trying out this command storage system out manually, I figured I wanted a better way to generate these lists of bytes for the drawing. That's when I found out about this website called LaserWeb4 which lets me drop in any picture and convert it to G-code. Then I told AI to make a script that would turn the G-code into my own format, which I could then enter into the web UI and have it sent to my microcontroller:</p>
      <br></br>
      <br></br>
      <img src={incrediplotter19}/>
      <br></br>
      <p>And it worked great. It was really cool to see it draw something from its internal memory by itself. But the drawings looked really bumpy and weird:</p>
      <br></br>
      <br></br>
      <img src={incrediplotter20}/>
      <br></br>
      <p>I guess before I thought the millimeter precision was enough, but it wasn't. So instead of taking each coordinate as one byte, each coordinate takes two now (one for whole mm, the other for fractional mm). After doing this, it was way smoother:</p>
      <br></br>
      <br></br>
      <img src={incrediplotter21}/>
      <br/><br/>
      <p>So at this point, I thought of what the next steps were. For one, I wanted it to do more complex drawings, but that would use more storage space than what could fit with all the other stuff in the 20 kilobytes of RAM this thing has. I had an idea to take it one part of a drawing at a time from the computer and then store it in flash memory, which would serve as a kind of hard drive. Also, I wasn't liking the machine's movement. It was jerky and slow. I could make it faster by making the periodic function run more frequently, but then it would be even more jerky. I should make it accelerate and decelerate when drawing a line. But drawings are made of many tiny lines, so that wouldn't work well. I came up with a good algorithm for this in my head, but actually implementing all this was going to take way too much work. And then before I knew it, this fun project would turn into months of grueling work.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter22}/>
      <br/><br/>
      <p>Then all of a sudden, I found a great shortcut. I was reading on Hacker News about someone's custom 3D printer firmware. One commenter had me looking at Klipper and I learned how that works: The computer sends rudimentary step and direction commands, and all the microcontroller does is very simple control of the motors. This way, Klipper on the computer would do all that complex drawing, storage, and motion stuff that I wanted to see. This sounded like it would be easy to give a try. So I set up Klipper on my computer using WSL, using <a target="_blank" rel="noopener noreferrer" href="https://github.com/dw-0/kiauh">a very nice install script I found (KIAUH)</a>. The setup went very smoothly.</p>
      <br></br>
      <img src={incrediplotter23}/>
      <br/><br/>
      <p>I thought I would have to write my own Klipper command parser for the STM32, but luckily my exact model of microcontroller was already included, and it was really easy to install. So then with Klipper and its web UI installed, I could just open up my browser to localhost and see it. Part of what makes this so easy is that in order to define what pins my motors and switches are on, all I have to do is write what they are in this printer configuration file and save it. This makes it really easy to change without reprogramming the microcontroller every time. </p>
      <pre><code>
        {code1}
      </code></pre>
      <p>In order to actually see and control the microcontroller stuff in Klipper, I had to use usbipd and PowerShell. And finally, I set up some custom G-code macros for lifting the pen up and down.</p>
      <pre><code>
      {code2}
      </code></pre>
      <p>I also glued down some limit switches so Klipper could home the machine.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter24}/>
      <br></br>
      <p>I crashed the machine a few more times trying to get the conversion factor right, but I got it. So with all that set up, now in LaserWeb4 I could generate G-code for a drawing and then I could drag and drop it right into Klipper and hit start, and it would start printing. This was brilliant and let me see the machine use its full potential. It was very cool. I wish I would have found this Klipper stuff earlier, but it was also cool to learn the basics of motor control on my own. It's neat that thanks to Klipper, people can just build 3D printers all by themselves and not have to code anything. I also found this software called <a target="_blank" rel="noopener noreferrer" href="http://drawingbotv3.com/">DrawingBotV3</a> which lets me drop in any photo and turn it into a G-code of a stylized, scribbly looking thing.</p>
      <br></br>
      <img src={incrediplotter25}/>
      <br/><br/>
      <p>So as happy as I was with all that Klipper stuff, it still just wasn't very fun to use. I had to spend a lot of time finding the right picture and doing the right method of converting it to a vector and G-code and all that. On top of that, when I dropped stuff into LaserWeb4, it would just cause the pen to lift up and down between every little line segment, which was awful. Then I got an idea. What if I made something where I just tell it what to draw and it would just draw magically? At first, this sounded unrealistic; it was just a joke. But, as I thought about it more, it seemed pretty easy to do. I would just have AI generate a picture.</p>
      <br/><br/>
      <p>At first I tried just having it run on my own computer. It was quick enough, but it just wasn't reliable at giving me things that a pen plotter could actually draw well. There were too many details and big filled-in areas. So I looked into alternatives, one of which was Google Gemini, which followed my prompts much better. I found out I could do this in code using their API for free. I can't believe this is free, and it's just as fast as my own computer, and the images are a lot higher quality. This is why I feel like this idea has only really become feasible in the past year or two.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter26}/>
      <br/><br/>
      <p>So from then on, I did all that stuff I mentioned in my quick rundown. The hardest part of all this was finding something that could turn a picture into a vector line drawing. I had to look through GitHub issues, comments, and pull requests to find a specific old version of AutoTrace that worked on my computer. One thing I tried to do in my Python code was to have the computer make some remark about your request while it's waiting for the picture to be generated. This would fill in the dead space between your request and the start of the drawing.</p>
      <br/><br/>
      <i>"Draw a Screaming jelly bean."</i>
      <i>"Screaming Jelly Bean sounds like my dentist's dream and my sugar-addled nightmare. Buckle up. We're in for a vibrant, possibly gelatinous ride."</i>
      <br/><br/>
      It did fill that purpose very well, but it got kind of annoying so I turned it off.
      <br/><br/>
      <p>As for the interface, I wanted to make it so you could just say "Computer, draw blah, blah, blah, blah," and it would do it -- no button presses involved. I got the wake word part working for that, so you could say "computer" and it would start listening, but the next obstacle would have been to make the computer stop listening automatically. But that would have been a whole other ordeal, so I just stuck with a button press since that was easier.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter27}/>
      <br/><br/>
      <p>Additionally, only around this point did I realize that for the electronics I could have just used the control board that came with the Ender 3. That would have saved some time.</p>
      <br></br>
      <br></br>
      <img src={incrediplotter28}/>
      <br/><br/>
      <p>But in the end, I am pretty happy with how this turned out. It's a weird feeling to put together a machine that can draw anything you tell it to and get... the problem is I just don't know what to tell it to draw. I don't really have any good ideas. But I did learn a lot of cool stuff making this, so I think it was well worth it.</p>
      <br></br>
      <br></br>
      <h2>More pictures</h2>
      <p>The images below can be clicked to view a full-res version.</p>
      <br></br>
      <a href={incrediplotter29_hires} target="_blank">
        <img src={incrediplotter29} alt="Description of incrediplotter29"/>
      </a>
      <br/>
      <a href={incrediplotter30_hires} target="_blank">
        <img src={incrediplotter30} alt="Description of incrediplotter30"/>
      </a>
      <br/>
      <a href={incrediplotter31_hires} target="_blank">
        <img src={incrediplotter31} alt="Description of incrediplotter31"/>
      </a>
      <br/>
      <a href={incrediplotter32_hires} target="_blank">
        <img src={incrediplotter32} alt="Description of incrediplotter32"/>
      </a>
      <br/>
      <a href={incrediplotter33_hires} target="_blank">
        <img src={incrediplotter33} alt="Description of incrediplotter33"/>
      </a>
      <br></br>
      <p>Again, credits to <a target="_blank" rel="noopener noreferrer" href="https://toxicpoison.github.io/portfolio/index.html">my brother</a> for the mechanical design of everything.</p>
      <br></br>
      <br></br>
      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default Incrediplotter;