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

      the process
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
        - after getting the PCB, I soldered the pin headers, fit everything together, and it was great. It was nice to not have a lot of delicate wires hanging around.
      - 
    </div>
  );
}

export default Esp32DeskLedBoard;