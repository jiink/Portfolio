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
      - first, with a hub75 panel, I tried driving it with an arduino mega 2560
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
      
    </div>
  );
}

export default Esp32DeskLedBoard;