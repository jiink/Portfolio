import React from 'react';

function Esp32DeskLedBoard() {
  return (
    <div>
      <h1>ESP32 Desk LED Board</h1>
      <h2>Why?</h2>
      <p>Some years ago, I tore apart my nightstand clock to</p>
      - tore apart nightstand clock to control the RGB backlight inside
      - too hard, threw it away
      - instead of getting a new clock, i wanted to make my own
      - also wanted a cool decoration that's interesting to watch like a lava lamp
      <h2>What it's made of</h2>
      <p>it's a HUB75 panel</p>
      - esp32 

      the journey
      - first, with a hub75 panel, I tried driving it with an arduino mega 2560. in fact, that's why this project is called "Mega Malachite" - "Mega" referred to the devboard it uses and Malachite referred to the copper-blue color of the Mega's PCB.
      - putting graphics on the panel worked fine
      - one goal was to make this not look like some makeshift, delicate device with exposed wires and pieces hanging around
      - attached the arduino to the back of the panel by screwing it into a piece of cardboard
      - designed a way for the led board to prop itself up -- by using 3d printed feet that go on the magnetic pegs and hold the board up at a nice angle (tilted up a bit)
      - chose to use knobs as inputs since they seemed more fun and interesting than buttons. 
        - they're not potentiometers, they're rotary encoder knobs, which click as they spin round and around.
      - my brother programmed a scrolling cityscape program
      - it ran really slowly, only a few frames per second
      - tried making a particle life simulation -- it could only handle a handful of particles before it would just crash.
      - super dissapointed, wasn't sure what to do
      - looked at my other options. I have a raspberry pi zero W that had been sitting unused for years. turns out there was a library for driving that hub75 panel, too
      - making python programs on a raspberry pi is popular, but since this is a pi zero, and I wanted good performance, I tried programming in C++ on it 
      - it was working, and I ported the scrolling cityscape program on to it and ran it, and behold, rather than a few frames per second, it zoomed by at hundreds of FPS 
        - I was amazed that the panel could show that high of a framerate, really cool
      - replaced the arduino on the back with the pi zero
      - found a challenge to develop on the pi zero glued to the back of a panel.
        - it's not like the arduino where I write the program on my PC and then flash it
        - it seemed I had to write the C++ program on the same device controlling the display, compile it there, and run it
        - pi zero is a lot slower than a normal Pi. 
          - thought it would help if I set it up so the OS had no desktop environment, making it start up faster too
          - learned to SSH into the pi, then I could use a terminal text editor to write my program.
          - wanted to use something better than nano since writing the C++ code for this was more than just a few quick edits
          - tried an interesting terminal code editor, but even over SSH, it was too slow, scrolling the code was delayed.
          - thought of an idea to use VSCode and have it access the file system of the Pi over wifi. that way my code editing would be great and fast, and the only slow part would be saving
            - but after a lot of frustration and trying different things, it didn't really stick
          - additionally, compiling the C++ program took a lot longer than I thought; I had to wait a minute or two for every little change I made.
          - also was not too happy with the pi because its boot time meant every time I turn on the led board, I'd have to wait a couple mintues for it to boot
            - the arduinon on the other hands starts up right away which is nice
      - soon I learned about ESP32 and tried one of those
      - when I wired it up to my LED board and tried a program, I was really impressed
        - Despite not being an arduino-brand dev board, it's programmed precisely the same way as my arduino mega 2560
        - it ran the scrolling city-scape program extremely fast, hundreds of frames per second, just like the rasperry pi! 
          - while being as easy to use as the arduino, having vastly more memory, and was a lot cheaper at $6, and being physcially smaller
          - in addition to having wifi, so that made getting the time easy from the internet, and opened the door to a lot of cool possibilities
        - so I was elated about the ESP32, it's like an arduino on steriods -- that's how I usually describe it 
        - so my arduino and pi zero returned to the drawers they came from 
          - (the arduino later got used for my little timer project)
      - one disadvantage of my ESP32 compared to the other boards I tried was that this had no mounting holes. I didn't know how I would attach it to the back of the board
        - I tried 3d printing half of an ESP32 devboard case, gluing the case to the back of the board, and snapping the devboard into the case
          - this was okay, but the jumper wires stuck out so far that it limited the angle at which I could have the LED board tilted
        - looking at the hub75 connector, I realized that breadboard pin headers fit into it. 
        - I soldered headers onto a prototyping board and it fit. then I soldered more headers, and connections between the wires, which was miserably tedious and difficult. 
        - but this made it so I simply plug my esp32 dev board into my prototype board, then plug my prototype board into the hub75 panel. and it worked! And this looked so much neater than having all those wires everywhere
        - at this time I also wanted to try designing a custom PCB. Since my prototype worked, I learned a bit of kicad, made the schematic, designed the PCB, and got it shipped.
        - making a schematic is very useful, and I think I should make these more often even when a PCB is not involved.
        - making the PCB from the schematic was easier than I thought. However I was expecting that the computer would be able to draw all the traces for me; I was surprised I had to draw each one manually. In KiCad I had to draw a path between every pair of pads it showed me, and the paths could not cross unless they were on separate layers, where they showed as separate colors. 
          - I thought this was eerily similar to certain puzzle games you'd find on smartphones. 
          - Eventually, the puzzle became too hard for me and seemed impossible. That's when I learned about vias, which lets any path continue on another layer. This made things a lot easier.
        - after getting the PCB, I soldered the pin headers, fit everything together, and it was great. It was nice to not have a lot of delicate wires hanging around.
          - If i cared for compactness, I would have designed a PCB with the ESP32 soldered on to it, rather than having plus for the devboard to be inserted into. However, that would have taken a lot more time, money, and effort just to save a centimeter or two of height. 
          - I thought the silkscreen was cool. It's nice to write labels, like "Knob 0" and "Knob 1" over their respective pads
          - I also liked that I was able to order my PCB in different colors, I thought it would only be green. I picked red!
        - At this point the LED board worked great, but I wasn't satisfied with it. It didn't look like something that would look good on a nightstand or a desk - the back was exposed, there was both a USB cable and a power cable coming out, and the knobs were just hanging around freely.
        - Earlier I had 3d printed a diffuser so that the harsh, bright pixels could form squares that make for a more coherent image. A flat piece of material would have blurred all the pixels together, but by including a grid on a 1-layer thick sheet of white filament, the diffusing effect works while keeping the shape of the image. It makes a huge difference visually, and when I see other LED board projects online I think they could benefit from the same thing. If you put a picture of something, a sprite with any detail, it's really hard to tell what it is. But with the diffuser, it's not a problem. It makes as huge difference.
        - But I needed a back cover, and something to hold the knobs and hide their wires. 
        - I thought this would be easy to design, as it could just be a box. But I didn't want my LED board to sit at a right angle, I wanted it tilted up a bit since the viewer's head will usually be above it. 
        - I sketched some ideas and started modelling the housing in the CAD software OnShape. This would be the biggest 3D printed design I've done. 
        - one thing I had in mind was that it should not look boring. I wanted to take advantage of a 3D printer's capabilities. Rather than printing boxes and plates, I wanted to make it cool.
        - My first design was, well, a box that holds the LED board, and has holes in it for plugs and a switch. It also had tabs with holes in it so a diffuser could be screwed on to it.
          - There were also square holes for the legs to be inserted into to hold the board up. The square holes were tilted at an angle so that the whole thing would be tilted up when sitting on its legs
          - The legs would house the knobs. The knobs' wires would go through the leg and into the hole that attaches them to the board.
        - This was difficult for me and took a long time. Making a 3d printed toy is one thing, but making a design that fits with electronics and other 3D printed parts is not easy.
        - For keeping the LED board in the box, I made these weird little pieces that would extend the magnetic bolts that the HUB75 panel comes with so that it would sit in the box.
        - After 3D printing this, it all worked. It took a long time to assemble, taking at least 40 minutes to screw and wire it together. Multiple times I realized I didn't have the assembly process in mind when designing this, as there were lots of tight spaces. I also tried welded halves of parts together using my soldering iron, and it worked well -- I thought that was better than glue.
          - Just be careful not to weld something that's already has superglue on it. I heard that if you burn superglue, it makes toxic fumes.
          - I also learned that I could power both the HUB75 panel and the ESP32 with the same wire. The ESP32 can be powered through one of its pins rather than being plugged in through USB.
        - One huge frustration with my design was that it was a box with wires between the lid and the body. Once everything's in place, you can't see it. When you open it up, wires are stretched across.
        - But it did work. I think I lost any photos I had of it. It was cool to finish a 3D design of that size, and it did perform the goal of holding the board at an angle and hiding all exposed electronics. 
          - However, it was ugly! I think I lost any photos I had of it. It was kind of dissapointing. Given my frustration with the wiring and how hard it was to check on it, I didn't feel safe keeping this powered on my nightstand. 
          - Also, the USB cable had to hang out, or else I couldn't program it. I heard it's also bad to power the ESP32 through its pin and USB plug simulatenously.
        - As soon as I had to open it up to adjust something, I gave up on that housing, as I didn't want to spend another hour or two just to open it up and close it again.
        - I decided to do a redesign. It would require the following:
          - Less parts
          - Let the user access the wiring on the back of the HUB75 panel easily
          - Be prettier
        - It took a long time to think of a better design. My brother helped with some ideas. 
        - Eventually I started a new model.
        - Instead of the HUB75 housing floating off the ground, held up by two legs, it would look like this: [picture]
        - There was one essential new tool I had that made this design possible: heat set inserts! Because of that, I wouldn't need to access both sides of a hole for the nut and the bolt. Instead I could just screw a bolt in and out from one side. 
          - this let me make the assembly so much easier. I know that trapped nuts are a thing, but I couldn't do that much on my previous design because of the angles certain parts were printed at. Also, supergluing nuts into place is frustrating.
        - Printing this was a bit nerve wracking because less parts means each part is bigger, and a failure means another re-print. 
        - But it worked. I put all the heat set inserts in with a soldering iron, and screwed everything together. 
          - This was so much better than the previous design, it took only a few minutes to assemble, like a consumer product.
        - I was able to solve the USB programming cable dilemma, too. I was able to set it up so my ESP32 could be programmed over WiFi! I thought that was really cool and made it a lot more convinient. But if I did need a USB cable, it was no problem to open up the back and plug one in (Well, I did have to maul a cable and crease it at an angle to fit it in there)
        - I made the back panels clear PETG so you could see inside. It wasn't as transparent as I was hoping, but it's cool to see a couple wires and an LED shine through.
        - So there it was, my cool LED board in a good-looking housing. Now I could finally clear the workbench and move on.
        - There was just one problem: the software wasn't good. 
          - This had become more of a mechanical project than anything; the software had been pretty neglected.
          - I added a simple clock applet so it could serve a purpose on the nightstand - the particle life would be too distracting at night.
          - When I look at other LED board projects online, I think the visuals are usually kind of lame. I wanted mine to be impressive looking and have tasteful graphics and motion.

      the software
      I want the software of this board to stand out over other LED board projects online. Unfortunatley, there hasn't been much effort beyond the bare-minimum placed here due to the electronic and mechanical challenges, and the fact that I've been working on other projects instead. However, there are a few things I'm happy with.
      - There isn't just one thing the board can do. There are multiple programs - I call them "applets" - that can be switched easily.
      - rather than picking an applet in a menu, one of the knobs lets you switch between them sequentially. It's like tuning between TV channels - I even added a brief TV noise effect between them.
        - I think this is a lot more fun than a normal menu system, but it might need some adjustments once there are even more applets. 
        - clicking that knob ought to switch it to app mode where its rotation would then control the applet, since some applets would benefit from two knobs, like a multplayer game. But that's not implemented right now.
      - Development-wise, this was programmed not in the Arduino IDE, but using PlatformIO in Visual Studio Code. Just like how I discovered that ESP32 was 'like Arduino but way better', I found that PlatformIO was also 'like Arduino but way better'. It lets me make Arduino (or native) programs in the comforts of VSCode. Go check it out if you haven't heard of it!
        - I'm happy with how the applet code is organized. [picture]
        - An applet is just a cpp and h file with a setup and loop function defined. It can include "system.h" to consume inputs like knobs rotations and presses, and draw to the screen using the LED "matrix" class instance.
        - Then, it's #included and added to a list in main.cpp and given a name. [picture]
        - Finally, the knob indexes into that list to run whatever setup and loop function is there.
        - Now that I look at it again, I might want to pass the matrix class, inputs, and delta time as an argument through the loop function so it looks more 'functional' and to make it more clear what's supposed to be done in that function.
      - A few quips:
        - The TV noise effect doesn't use a random number generator. I was inspired by (Metroid Prime's static texture effect)[https://www.thegamer.com/metroid-prime-dev-reveals-static-is-game-code/]! In my case it's completely unecessary, but I just wanted to try it out for fun.
          ```cpp
            char* programMemoryStart = (char*)esp_get_idf_version();
            char* noiseSource = (char*)programMemoryStart;
            ...
            matrix->drawPixel(x, y, matrix->color333(*noiseSource, *noiseSource, *noiseSource));
            noiseSource++;
          ```
        - To control the display and draw to it, I'm using the ["HUB75 RGB LED matrix panel library utilizing ESP32 DMA" by mrcodetastic](https://github.com/mrcodetastic/ESP32-HUB75-MatrixPanel-DMA).
          - this is the most helpful and brilliant library powering this project. the readme has a lot of info that I couldn't get anywhere without.
        - The rotary knobs are really frustrating to make work reliably. I thought it'd be easy. I tried my own solution and multiple libraries, and they all work fine enough, none of them work great - it's often missing clicks and stuff. 
        - I'm thinking of moving this away from Arduino code and using Espressif's IDF SDK instead, to see what it's like and to have more control over stuff such as interrupts for the knobs.
      - The applets:
        - particle life
          - I gave this one my full effort.
          - I wanted my project to be something you could watch indefinitley, like a lava lamp. I was inspired ["How Particle Life emerges from simplicity" by Tom Mohr](https://www.youtube.com/watch?v=p4YirERTVF0)
          - All these particles move around. Every so often it randomizes their behaviors and colors.
            - Sometimes 'creatures' form and move around, chasing and attacking other creatures!
            - Sometimes 'worms' appear and snake through
            - Sometimes a merry-go-round forms
            - Sometimes each group forms a 'black hole' and fight against each other, striking the other and destroying their form!
            - Sometimes they do nothing and just arrange themselves into an interesting still image.
            - All this variety is formed kind of particle is attracted or repelled from another kind.
            - I followed along with the video, copying each concept into code.
          - You can rotate the knob to adjust how many 'teams' are present.
          - When the board is in this applet, it still serves as a clock, showing the date and time.
            - I had some fun with making a neat design that shows only the hour as a number, with a progress bar for the hour's progress, a bar for the minute's progress, and a bar for the second's progress.
          - some notes:
            - I developed a good deal of this on the PC using a 'simulator' I made using Raylib. [picture]
            - It was hard to make things wrap around seamlessly. Since this is such a small screen, wrapping around the edges was important. I wanted a 'creature' to be able to wrap around the border of the screen without falling apart. And now it does. Now just the pixel-drawing code doesn't wrap around seamlessly.
            - Optimization was a challenge. Without doing anything special, each particle calculates forces from every other particle. That scales terribly. 
              - To help, I split the field into a grid of 4x2 cells. Each cell knows which particles are in it. A particle in a given cell will only consider particles from neighboring cells that are in its circle of influence.
                - It's a bit odd since once particle may be affected by another twice - once for its real positon, and again for its wrapped-around position.
              - This optimzation is more effective than I expected. It stops working when all the particles clump together and the framerate drops, but that's okay.
                - I thought about taking advantage of the ESP32's dual-core feature, but eh, that would be opening a can of worms here.
            - It's crucial to draw a particle properly. 
              - I started with rounding its position and plotting a pixel there. It looks terrible in motion - it suddenly jumps from pixel-to-pixel.
              - I made it smooth by considering a particle as a pixel-sized square somewhere between actual pixels, and lighting up each pixel it covers in proportion to the area of that particle's square in each pixel.
                - It's so much better! now when the particles move, they look very smooth. It makes my 64x32 pixel screen feel a lot bigger.
                  - because it's simple to implement and makes a big difference. when I see other electronics projects, sometimes that bugs me now. Like (this Pendant)[https://www.youtube.com/watch?v=jis1MC5Tm8k]
                - it's not perfect - when a particle moves, it appears overall a bit darker when it's between pixels. Maybe some sort of brightness correction would help.
                - I had to make it so when drawing a particle, its colors are added to the pixels already there, rather than averaged or replaced. This made it so when mutliple particles come together and overlap, the spot gets brighter. It's a cool effect!
            - I want to add some way to save, retrieve, and edit the attraction tables. That way, I could summon a cool worm without just waiting for it to happen randomly.
            - all together, I acheived my goal with this applet well - it's cool to watch. sometimes from the corner of my eye I see something crazy going on in it. 
            - there's one big problem that I just can't figure out. Over time, it degrades, corrupts itself, and eventually crashes the whole system! 
              [video]
              - As it's running, after maybe half an hour, I notice that there's a couple particles that are the wrong color - ones that don't belong! 
              - These ones begin zipping around randomly.
              - Some particles begin to clump into the four corners. 
              - As time continues, more and more of these particles become bizarre like this, and it can't be fixed without a reset. I could turn the knob to set them all to one color, and I'd see many start flashing different colors on their own and zipping around.
              - It's so weird and pretty funny. But it kinda ruins it. I'd like to fix it so I can have it running continually.
              - I'd think it's a memory leak, but everything is statically initialized! No mallocs or class instantiations happen in that code at all. 
              - Particles are likely somehow getting their position, velocity, and color from somewhere in junk memory. I'm just not sure how! 
              - This is frustrating to debug because the problem might only crop up after an hour of running. 
              - Let me know if you have any ideas.
        - weather channel
          - this one is only half-complete
          - The idea is, when you go here, it uses some cool animations to show you the dominant weather condition of the day and the high temperature
          - The design is based off the Egg TV from the "Weather Globe" boss from Sonic Mania. [video]
          - The spinning sign is supposed to serve as a loading animation, and once the forecast is retrieved from the internet, it's supposed to stop spinning, reveal the weather icon, show the top temperature, and play a fitting animation like in the Sonic game. 
          - Currently, it does show real weather data. there's only an icon for sunny weather though, and the graphics are misaligned, and it doesn't have all the animations I wanted implemented.
          - Getting the real weather data was a challenge. I was looking hard for an easy way to do it without any API keys. After a while, I found one! 
            - It's called Open Meteo.
            - On their site you can design a query and get a long URL to use. Here's the one I generated:
            https://api.open-meteo.com/v1/forecast?latitude=33.88&longitude=-117.89&hourly=weather_code&daily=temperature_2m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America/Los_Angeles&forecast_days=1
            - Here's what that returns as of today:
              ```
              {"latitude":33.877834,"longitude":-117.885056,"generationtime_ms":0.05829334259033203,"utc_offset_seconds":-25200,"timezone":"America/Los_Angeles","timezone_abbreviation":"GMT-7","elevation":74.0,"hourly_units":{"time":"iso8601","weather_code":"wmo code"},"hourly":{"time":["2025-04-02T00:00","2025-04-02T01:00","2025-04-02T02:00","2025-04-02T03:00","2025-04-02T04:00","2025-04-02T05:00","2025-04-02T06:00","2025-04-02T07:00","2025-04-02T08:00","2025-04-02T09:00","2025-04-02T10:00","2025-04-02T11:00","2025-04-02T12:00","2025-04-02T13:00","2025-04-02T14:00","2025-04-02T15:00","2025-04-02T16:00","2025-04-02T17:00","2025-04-02T18:00","2025-04-02T19:00","2025-04-02T20:00","2025-04-02T21:00","2025-04-02T22:00","2025-04-02T23:00"],"weather_code":[0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,3,0,0,0,0,0,0,0]},"daily_units":{"time":"iso8601","temperature_2m_max":"°F"},"daily":{"time":["2025-04-02"],"temperature_2m_max":[67.1]}}
              ```
            - from there, I extract the max temperature using ArduinoJson.
            - See the weather_code list? Those are the weather codes for every hour. I learned that weather codes are numbers that indicate if it will be cloudy, sunny, rainy, and like 50 others. For instance, 0 means it's a clear sky. Looking at (a table of them)[https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM], I was surprised how specific and descriptive each code was. 
              - To represent the entire day with one weather icon, I could simply find the number that appears the most frequently in the daylight hours and then convert it to a simpler weather condition that I have an icon/animation for. I'm sure there's a better way, but this is fine enough.
            - I want to be careful to not poll that free online service too frequently with my microcontroller code. Right now it only polls it once every 24 hours.
        - settings channel
          - without a normal menu system, I wasn't sure how I would handle settings. then I realized that it can just be one of the applets.
          - this is where I can change the brightness of the display.
          - soon, instead of hard-coding my wifi credentials into the source code, I want to be able to set them here.
          - I do want to put some effort into making this look neat, but right now it's just some sloppy text.
        - cityscape
          - this one is just a few bitmaps layered on top of each other, making a parallax effect. The speed of the scrolling can be adjusted by twisting the knob.
          - I kind of want to make a 3d version of this using raymarching. I wonder how it would perform.
          - I noticed that if the LED board has been on for a while, the scrolling gets choppy. I wondered how the performance got worse, then I realized it didn't. It's just that the scrolling is a function of time in seconds, as a floating point number. As days' worth of seconds had passed, floating point became imprecise. This is like how going far away in video games causes all the graphics to get choppy.

      - problems:
        - the display shows this weird artifacting. it's bizarre and I don't know the cause of it.
          - usually it just affects the upper left quadrant, fringing its pixels and/or offsetting them and/or ruining their colors.
          - in some cases it can show up in other parts of the display
          - the effect is most prominent at the highest brightness setting. and is nearly gone at the lowest brightness setting.
          - the effect changes when I touch any wires or metal connected to the ESP32 with my hands, even the insulated parts. 
          - the effect has some cases where it doesn't show up at all - like when the display just shows some sparse lit pixels (like in particle like or the basic clock applet)
          - the effect depends on what pixels are lit up at the borders (I can see this in my timer applet)
          - it's kind of dissapointing, but not a dealbreaker, I can work around it I suppose
      
        

    </div>
  );
}

export default Esp32DeskLedBoard;