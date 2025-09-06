# "Mega Malachite" — an ESP32 Desk LED Board

## 1. Why?

Some years ago, I tore apart my old nightstand clock to control the RGB backlight inside with an Arduino. It was too hard, and a bit too scary with mains voltage in there. I couldn't put it back together, so I threw it away! But instead of getting a new clock, I wanted to make my own.

I wanted to make a super cool clock. I also wanted it to be a decorative object that's interesting to watch, in the same manner as a lava lamp, aquarium, or ant farm. 

This project is about how I turned that idea into a real thing.

## 2. Current setup

### The screen

The screen is a **HUB75** LED panel. They're designed to be chained together to make huge displays, but you can just buy one! I got my 64x32 one for between $20 and $30 off Amazon, and it came with a cable I could use to plug it into GPIO pins.

### The computer

The brains of this project is an **ESP32** microcontroller dev board. They're really powerful for their price compared to my normal Arduinos. It has Wi-Fi and Bluetooth too!

### The inputs

I control this board using 2 rotary encoder knobs called **KY-040**. They're little clicky knobs that you can turn and press.

These are inexpensive and they're more fun than having normal buttons.

They're not potentiometers, and [they can be finnicky to program for](https://www.reddit.com/r/esp32/comments/o5acfb/flaky_rotary_ky040_encoders/).

## 3. Picking the computing platform

This project went through a few different versions.

### 3.1. The Arduino Mega era

When I first got my HUB75 panel, I tried driving it with an Arduino Mega 2560. In fact, that's why this project is called "Mega Malachite" - "Mega" referred to the devboard it uses and Malachite referred to the copper-blue color of the Mega's PCB.

With careful wiring and a small example program (I forgot what library I used), I got graphics to show up on the display.

I also 3D printed little legs to prop up the LED board for viewing. They attach to the magnetic pegs that come with the panel.

My brother programmed a scrolling cityscape program, but it ran dissapointingly slowly: only a few frames per second. 

I also tried making a particle life simulation, but the Arduino could only handle a handful of particles before it would just crash.

I was dissapointed, and looked at my other options.

### 3.2. Raspberry Pi Zero W

I remembered I had a Raspberry Pi Zero W that had been sitting unused for years. It runs Linux, but it's smaller than my Arduino. It turns someone made a library for driving that HUB75 panel with this Zero.

People usually write Python on the Pi Zero, but since it's already so weak, I chose to write my program in C++, hoping it would perform well driving the LED board.

The results impressed me, and I got to see the scrolling cityscape program zoom by at hundreds of frames per second! I didn't know the panel could even show that many FPS!

However, the Pi Zero had to go. Here's why:

Developing on the Pi Zero glued to the back of the panel was hard. I had to write the C++ program directly on the Pi itself. Despite how quick it could drive the LED panel, it's gruelingly slow to use as a PC. I SSH'd into the Pi to do all my coding from my desktop PC, but when I tried to move to a nicer terminal code editor, even scrolling was too slow and delayed to be comfortable.

That's when I got an idea to connect my VSCode to the Pi's file system over WiFi so I could edit my code comfortably. But after a lot of time spent trying to set it up, I didn't find a solution that worked as well as I wanted. 

The fact that the Pi Zero's C++ compilation speed was so slow also made me want to find a different solution. I could get into cross-compilation and all that, but I wanted to spend time on making cool LED programs, not making a crazy build system!

I was also was not too happy with the PI's boot time. Every time I power on the LED board, I'd have to wait a couple mintues for it to start.

### 3.3. ESP32 saves the day

Soon after, I discovered the ESP32.

When I wired it up to my LED board and ran the same city-scape program I used on my Arduino, I was really impressed -- it ran at hundreds of FPS, just like the Pi Zero! Even though it's not Arduino branded, it's can still run Arduino programs just as easily.

I was blown away that this dev board was:
    - as easy to use as the arduino
    - way faster than arduino (like, 100x it felt like?)
    - way more memory as the arduino (like, 50x?)
    - 32-bit (instead of 8-bit)
    - smaller
    - had WiFi and Bluetooth (this opened up a lot of new possibilities)

All that, and it's only $6? I felt like a sucker for not using that earlier.

And so I was elated about the ESP32, it's like an Arduino on steriods -- that's how I usually describe it.

So then, my Arduino and Pi Zero returned to the drawers from whence they came!

## 4. The mechanical journey

## 4.1. Mountable electronics

One disadvantage of my ESP32 dev board compared to the others was that it had no mounting holes. I didn't know how I would attach it to the back of the panel. First I tried 3D printing half of an ESP32 devboard case, snapping the devboard into it, and hot-gluing the whole things to the back of the LED panel. This was okay, but the jumper wires stuck out so far that it limited the angle at which I could have the LED panel tilted.
  
Looking at the HUB75 connector, I realized that breadboard pin headers fit into it perfectly. I soldered female pin headers onto a prototyping board and it interfaced with the HUB75 connector well. then I soldered more of those headers to interface with the ESP32 devboard, and then I soldered connections between all these headers, which was miserably tedious and difficult. But this made for a nice adapter: I could simply plug my esp32 devboard into my prototype board, then plug my prototype board into the hub75 panel. It worked! This looked so much neater than having all those wires everywhere.
  
At this time, I also wanted to try designing a custom PCB. Since my prototype worked, I learned a bit of KiCad, made the schematic, designed the PCB, and got it shipped. Making a schematic is very useful, and I learned that I should make schematics for any circuit I design, even if I never plan on making a real PCB out of it.

Designing the physical PCB design based off the schematic was easier than I thought, however I was surprised that I had to draw each trace manually. I thought the computer would be able to route the board all by itself easily. So in KiCad I had to draw a path between every pair of pads it showed me, and the paths could not cross unless they were on separate layers, where they showed as separate colors. I thought this was eerily similar to certain puzzle games I've played on my phone. Eventually, this "puzzle" became too hard for me and seemed impossible. That's when I learned about vias, which lets any path cross over to another layer. This made things a lot easier!

I also thought the silkscreen was cool. It's nice to write labels, like "Knob 0" and "Knob 1" over their respective pads.
I also liked that I was able to order my PCB in different colors, I thought it would only be green. I picked red!

After getting the finished PCB in the mail, I soldered the pin headers, fit everything together, and it worked great. It was nice to not have a lot of delicate, wires hanging around with questional solder joints.

If I cared for compactness, I would have designed a PCB with the ESP32 chip soldered directly to it, rather than having a socket for the whole devboard to be inserted into. However, that would have taken a lot more time, money, and effort just to save a centimeter or two of height. 

## 4.2. Making an enclosure

At this point the LED board worked great, but I wasn't satisfied... it didn't look like something that would look good on a nightstand or a desk -- the back was exposed, there was both a USB cable and a power cable coming out, and the knobs were just hanging around freely.

Earlier, I had 3D printed a diffuser for the front. A flat piece of material would have blurred all the pixels together, but by including a grid on a 1-layer thick sheet of white filament, the diffusing effect works while keeping the shape of the image. It makes a huge difference visually; when I see other LED projects online, they could often benefit from the same thing. Without it, a sprite with any detail is really hard to make out, but with the diffuser, it's not a problem.

Then I needed a back cover to cover the exposed circuitry/wires and hold the knobs in place. I thought this would be easy to design; it could just be a box. But since I wanted the LED board to tilt up at an angle for better viewing, it would need to be a little more complex.

I sketched some ideas and started modelling the housing in the CAD software OnShape. This would be the biggest 3D printed design I've done. One goal I had was was to make it not look boring. I wanted to take advantage of a 3D printer's capabilities; printing a simple box would be lame. I wanted to make it cool.

My first design was, well, a box that holds the LED board with holes in it for plugs and a switch. It also had tabs with holes in it so a diffuser could be screwed on to it. There were also square holes for the legs to be inserted into to hold the board up. The square holes were tilted at an angle so that the whole thing would be tilted up when sitting on its legs. These legs would also house the knobs. The knobs' wires would go through the leg and into the hole that attaches the leg to the main box. This was difficult for me to design and took a long time. Making a 3d printed toy is one thing, but making a design that fits with existing electronics and other 3D printed parts is not easy.

To keep the LED panel secured in the box, I made these weird little pieces that would extend the HUB75 panel's included magnetic bolts so it could sit in the box.

After 3D printing this, it all worked. It took a long time to assemble, taking at least 40 minutes to screw and wire it together. Multiple times I regretted not considering the assembly process when designing this, as there were lots of extremely tight spaces. I also tried to weld halves of parts together using my soldering iron, and it worked well -- I thought that was better than glue. Just be careful not to weld something that's already has superglue on it. I heard toxic fumes can come from burning superglue like that.

I also learned that I could power both the HUB75 panel and the ESP32 with the same 5V wire, which meant that I could ditch the USB cable that was otherwise used to power the ESP32.

One huge frustration with my design was that lots of wires stretched between the lid and the body. Once everything's in place, you can't see it. When I tried to open it up, the wires prevented me from separating the lid from the box as much as I wanted to.

I was glad it all worked. It was cool to finish a 3D design of that size, and it did perform the goal of holding the board at an angle and hiding all exposed electronics. 

However, it was ugly! Given my lack of confidence on the wiring and assembly, I didn't feel safe keeping this sketchy thing powered on my nightstand. As soon as I had re-adjust something inside, and realized it would take an hour to do so, I lost my patience with this design. I decided to do a redesign.

## 4.3. The redesign

These were my requirements for the redesign:

1. Have Less parts
1. Let the user access the wiring on the back of the HUB75 panel easily
1. Be less ugly

It took a long time to think of a better design. My brother helped with some ideas. 

Eventually I started a new model in OnShape. Instead of having two legs lift the LED panel housing up off the ground, it would look like this: [picture]

There was one essential new tool I had that made this design possible: heat set inserts! Because of them, I wouldn't need to access both sides of a hole for the nut and the bolt. Instead I could just screw a bolt in and out from one side. This let me make the assembly so much easier. I already knew that trapped nuts are a thing, but I didn't do that in my previous design because of how difficult that makes the 3D-printing overhang situation. 

Printing this was a bit nerve wracking because since it has less parts means, each part is bigger, and re-printing enormous parts takes a lot more time and plastic. 

But it worked. I inserted the heat set inserts in with a soldering iron and screwed everything together. This was so much better than the previous design, it took only a few minutes to assemble, it felt like a consumer product.

Since it was so easy to open up, sticking a usb cable in there to reprogram the ESP32 was easier. (Well, I did have to maul a cable and crease it at an angle to fit it in there.) Moreover, I was able to set it up so my ESP32 could be programmed over WiFi! Even more convenient! 

I made the back panels clear PETG so you could see inside. It wasn't as transparent as I was hoping, but it's cool to see a couple wires and an LED shine through.

So there it was, my cool LED board in a good-looking enclosure. Now I could finally clear the workbench and move on.

There was just one problem: the software wasn't good. I got caught up with mechanical design; the software had been pretty neglected.

I added a simple clock applet so it could serve a purpose on the nightstand. But I wanted to do something more impressive; when I look at other LED board projects online, the visuals shown are often kind of lame.

## 5. The software

I want the software of this board to stand out compared to other LED board projects. Unfortunatley, I haven't actually followed through with this much due to the fact that I've been working on other projects instead. 

However, there are a few things I'm happy with.
This board's program isn't limited to doing just one thing. There are multiple uh, sub-programs -- I call them "applets" -- that you can easily switch between.

Rather than picking an applet in a menu, one of the knobs lets you switch between them sequentially. It's like tuning between TV channels - I even added a brief TV noise effect between them. I think this is a lot more fun than a normal menu system, but it might need some adjustments once there are even more applets. 

Clicking that TV-tuning knob ought to switch it to a different mode where its rotation would then control the applet itself, since some applets would benefit from two knobs, e.g. a multplayer game. But that's not implemented right now.

Development-wise, this was an Arduino program, but made using PlatformIO in Visual Studio Code instead of Arduino IDE. Just like how I discovered that ESP32 was 'like Arduino but way better', I found that PlatformIO was also 'like Arduino but way better'. It lets me make Arduino (or native) programs from the comforts of VSCode. Go check it out if you haven't heard of it!

I'm happy with how the applet code is organized:

[picture]

An applet is just a cpp and h file with a setup and loop function defined. It can include "system.h" to consume inputs like knobs rotations and presses, and draw to the screen using the LED "matrix" class instance. Then, it's #included and added to a list in main.cpp and given a name:

 [picture]

Finally, the knob indexes into that list to run whatever setup and loop function is there.
But now that I look at it again, I might want to pass the matrix class, inputs, and delta time as an argument through the loop function so it looks more 'functional' and to make it more clear what's supposed to be done in that function.

A few notes:
  - The TV noise effect doesn't use a random number generator. I was inspired by [Metroid Prime's static texture effect](https://www.thegamer.com/metroid-prime-dev-reveals-static-is-game-code/)! In my case it's completely unecessary, but I just wanted to try it out for fun.
    ```cpp
      char* programMemoryStart = (char*)esp_get_idf_version();
      char* noiseSource = (char*)programMemoryStart;
      ...
      matrix->drawPixel(x, y, matrix->color333(*noiseSource, *noiseSource, *noiseSource));
      noiseSource++;
    ```
  - To control the display and draw to it, I'm using the ["HUB75 RGB LED matrix panel library utilizing ESP32 DMA" by mrcodetastic](https://github.com/mrcodetastic/ESP32-HUB75-MatrixPanel-DMA).
    - this is the most helpful and brilliant library powering this project. the readme has a lot of info that I couldn't get anywhere without.
  - The rotary knobs are really frustrating to make work reliably. I thought it'd be easy. I tried my own solution and multiple libraries, and they all work fine enough, none of them work great - it's often missing clicks and stuff. I wish I just used potentiometers or something.
  - I've begun moving this away from Arduino code and using Espressif's IDF SDK instead, to have more control over stuff such as interrupts for the knobs.

## 5.1. The applets

### 5.1.1. Particle life

This is the one applet so far that I gave my full effort towards.

I wanted my project to be something you could watch indefinitley, like a lava lamp. I was inspired by ["How Particle Life emerges from simplicity" by Tom Mohr](https://www.youtube.com/watch?v=p4YirERTVF0)

All these particles move around. Every so often it randomizes their behaviors and colors.

Sometimes 'creatures' form and move around, chasing and attacking other creatures!

Sometimes 'worms' appear and snake through

Sometimes a merry-go-round forms

Sometimes each group forms a 'black hole' and fight against each other, striking the other and destroying their form!

Sometimes they do nothing and just arrange themselves into an interesting still image.

All this variety is formed depedning on how one kind of particle is attracted or repelled from another kind. I followed along with the video linked above, copying each concept into code. You can also rotate the knob to adjust how many distinct kinds of particles are present.

When the board is in this applet, it still serves as a clock, showing the date and time. I had some fun with making a neat design that shows only the hour as a number, with a progress bar for the hour's progress, a bar for the minute's progress, and a bar for the second's progress.

Some notes:
  - I developed a good deal of this on the PC using a 'simulator' I made using Raylib. [picture]
  - It was hard to make things wrap around seamlessly. Since this is such a small screen, wrapping around the edges was important. I wanted a 'creature' to be able to wrap around the border of the screen without falling apart. And now it does. Now just the pixel-drawing code doesn't wrap around seamlessly.
  - Optimization was a challenge. Without doing anything special, each particle calculates forces from every other particle. That scales terribly. To help, I split the field into a grid of 4x2 cells. Each cell knows which particles are in it. A particle in a given cell will only consider particles from neighboring cells that are in its circle of influence. This optimzation is more effective than I expected. It stops working when all the particles clump together and the framerate drops, but that's okay. I considered taking advantage of the ESP32's dual-core feature, but eh, that would be opening a can of worms here.
    - It's a bit odd since once particle may be affected by another twice - once for its real positon, and again for its wrapped-around position.

It's crucial to draw a particle properly. I started with rounding its position and plotting a pixel there, but it looks terrible in motion -- it suddenly jumps from pixel to pixel.

I made it smooth by considering a particle as a pixel-sized square somewhere between actual pixels, and lighting up each pixel it covers in proportion to the area of that particle's square in each pixel. It's so much better! Now when the particles move, they look very smooth. It makes my 64x32 pixel screen feel a lot bigger. Because it's simple to implement and makes a big difference, when I see other electronics projects, sometimes that bugs me now. For instance, I think (this Pendant)[https://www.youtube.com/watch?v=jis1MC5Tm8k] would look better if it used a similar technique.

My point-drawing algorithm isn't perfect though: A particle appears a bit darker overall when it's between pixels. This causes a slight shimmer as a particle moves, especially diagonally. Maybe some sort of brightness correction would help. It would also be more technically correct to consider the point as a little circle rather than a little square.

I had to make it so when drawing a particle, its colors are added to the pixels already there, rather than averaged or replaced. This made it so when mutliple particles come together and overlap, the spot gets brighter. It's a cool effect!

In the future I want to add some way to save, retrieve, and edit the attraction tables that define how different particle types attract/repel from each other. That way, I could summon a cool worm without just waiting for it to happen randomly.

all together, I acheived my goal with this particular applet -- it's cool to watch! Sometimes there is something really interesting happening on it.

But there's one big problem that I just can't figure out:

Over time, it degrades, corrupts itself, and eventually crashes the whole system! 

[video]

As it's running, after maybe half an hour, I notice that there's a couple particles that are the wrong color - ones that don't belong! These eventually begin zipping around randomly. Some particles also begin to clump into the four corners. As time continues, more and more of these particles become bizarre like this, and it can't be fixed without a reset. I could turn the knob to set them all to one color, and I'd see many start flashing different colors on their own and zipping around.

It's so weird and kinda funny. But it also kinda ruins it. I'd like to fix it so I can have it running continually. I'd think it's a memory leak, but everything is statically initialized! No mallocs or class instantiations happen in that code.

Particles are likely somehow getting their position, velocity, and color from somewhere in junk memory. I'm just not sure how! This is frustrating to debug because the problem might only crop up after an hour of running. 

If someone out there know what's up with that, let me know!

### 5.1.2. Weather channel

This one is only half-complete.

The idea is, when you go here, it uses some cool animations to show you the dominant weather condition of the day and the high temperature.

The design is based off the Egg TV from the "Weather Globe" boss that appears in Sonic Mania. [video]

The spinning sign is supposed to serve as a loading animation, and once the forecast is retrieved from the internet, it's supposed to stop spinning, reveal the weather icon, show the top temperature, and play a fitting animation like in the Sonic game. 

Currently, it does show real weather data. there's only an icon for sunny weather though, and the graphics are misaligned, and it doesn't have all the animations I wanted implemented.

Getting the real weather data was a challenge. I was looking hard for an easy way to do it without any API keys. After a while, I found one! It's called Open Meteo. On their site you can design a query and get a long URL to use. Here's the one I generated:

https://api.open-meteo.com/v1/forecast?latitude=33.88&longitude=-117.89&hourly=weather_code&daily=temperature_2m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America/Los_Angeles&forecast_days=1

Here's what that returns as of today:

```
{"latitude":33.877834,"longitude":-117.885056,"generationtime_ms":0.05829334259033203,"utc_offset_seconds":-25200,"timezone":"America/Los_Angeles","timezone_abbreviation":"GMT-7","elevation":74.0,"hourly_units":{"time":"iso8601","weather_code":"wmo code"},"hourly":{"time":["2025-04-02T00:00","2025-04-02T01:00","2025-04-02T02:00","2025-04-02T03:00","2025-04-02T04:00","2025-04-02T05:00","2025-04-02T06:00","2025-04-02T07:00","2025-04-02T08:00","2025-04-02T09:00","2025-04-02T10:00","2025-04-02T11:00","2025-04-02T12:00","2025-04-02T13:00","2025-04-02T14:00","2025-04-02T15:00","2025-04-02T16:00","2025-04-02T17:00","2025-04-02T18:00","2025-04-02T19:00","2025-04-02T20:00","2025-04-02T21:00","2025-04-02T22:00","2025-04-02T23:00"],"weather_code":[0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,3,0,0,0,0,0,0,0]},"daily_units":{"time":"iso8601","temperature_2m_max":"°F"},"daily":{"time":["2025-04-02"],"temperature_2m_max":[67.1]}}
```

From there, I extract the max temperature using ArduinoJson.

See the `weather_code` list? Those are the weather codes for every hour. I learned that weather codes are numbers that indicate if it will be cloudy, sunny, rainy, and like 50 other conditions. For instance, `0` means it's a clear sky. Looking at [a table of them](https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM), I was surprised how specific and descriptive each code was. 

To represent the entire day with one weather icon, I could simply find the number that appears the most frequently in the daylight hours and then convert it to a simpler weather condition that I have an icon/animation for. I'm sure there's a better way, but this is fine enough.

I want to be careful to not poll that free online service too frequently with my microcontroller code. Right now it only polls at a maximum of once every 24 hours.

### 5.1.3. Settings channel

Forfeiting a normal menu system, I wasn't sure how I would give myself a way to change system settings (e.g. the brightness of the display). Then I realized that it can just be one of the applets. Soon, instead of hard-coding my wifi credentials into the source code, I want to be able to set them here too.

Eventually I do want to put some effort into making this look neat; right now it's just some sloppy text.

### 5.1.4. Cityscape

This one is just a few bitmaps layered on top of each other, making a parallax effect. The speed of the scrolling can be adjusted by twisting a knob. I kind of want to make a 3d version of this using raymarching. I wonder how it would perform.

I noticed that if the LED board has been on for a while, the scrolling gets choppy. I discovered the framerate isn't getting worse, it's just that the scrolling is a function of time in seconds, as a float. As days' worth of seconds had passed, floating point became imprecise.

## 6. Problems that got me stumped

I have no idea how to solve the following problems with this thing.

### 6.1. Display artifacting

The display shows this weird artifacting. Usually it just affects the upper left quadrant, fringing its pixels and/or offsetting them and/or ruining their colors.

In some cases it can show up in other parts of the display. The effect is most prominent at the highest brightness setting, and is nearly gone at the lowest brightness setting. The effect changes when I touch any wires or metal connected to the ESP32 with my hands, even the insulated parts. 

The effect has some cases where it doesn't show up at all -- like when the display just shows some sparse lit pixels (in Particle Life or the basic clock applet)

In my timer applet I can see how lighting pixels on the border causes this problem to appear. 

It's kind of dissapointing, but not a dealbreaker, I can work around it I suppose.

Now I am wondering if it's due to the ESP's IO voltage being 3.3 V while the LEDs are powered by 5 V.

### 6.2. Knob reliability

Turning the right knob is no problem. Turning the left knob causes the system to think the right knob turned half the time. This makes using the device very frustrating.

Clicking either of the knobs seems to make the microcontroller reset. Why! It didn't always do that! This also ruins a lot of possibilities.

## 7. WIP New software

I have been making new software that uses ESP-IDF. My code is using FreeRTOS, more C++ features, and my very own [drawing library I call JaDraw](https://github.com/jiink/JaDraw)! With this new stuff, I have been able to write and test applets on my PC that use. Deploying them to my LED board is as simple as copy-pasting a C++ class file, even for applets that use inputs, wall-clock time, and more; I'm pretty happy with that.

With this I will make cooler software and show more when that's ready.
