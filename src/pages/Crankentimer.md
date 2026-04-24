# Crankentimer came close

When I learned of [Hackaday and Digikey's Green-Powered Challenge](https://hackaday.com/2026/03/03/get-your-green-power-on/), I got an idea: I wanted to make a hand-powered electronic timer. 

## TL;DR

My timer device works at a very low power, but I couldn't figure out the power source, although I felt I was close to making it work out:
- I could charge my LiPo battery, but it died. The fact that this project by nature requires the battery to be stored at "0%" energy and go through shallow charge cycles made my LiPo battery die after just a week or two.
- I couldn't get my NiMH battery to accept a significant amount of current by hand-powered means.

## The full story

The idea originally stemmed from the fact that I saw a Beethoven-themed kitchen timer that played a short clip of music when the time was up. I didn't like how it required a battery - shouldn't the winding-up of the timer provide enough energy for the music at the end?

A year or two ago I already tried this idea, but didn't get very far. I used a character LCD with an Arduino, but couldn't get the power usage to be low enough, not even close.

But now I have a different approach:
- I have an e-ink display, which can display an image without requiring constant power.
- I have a larger variety of microcontroller dev boards; surely one of them can be low power enough.
- I can make a crank generator out of a stepper motor and diodes.
- I have an Adafruit PowerBoost 500C, which should let me charge a battery.

With those resources, I thought it wouldn't be too hard.

- need to see if I could get a microcontroller devboard running in a very deep sleep at near-0 current draw.
- I went for my Pi Pico 2, have been really enjoying the RP2350 / RP2040. 
- Already at normal CPU idle, it draws a surprisingly huge amount of current, 60 mA. 
- Spent several hours trying to get it to deep sleep. learned that there's not really a deep sleep function in the SDK. It's in an sdk "extras" repo. 
- lots of trouble trying to make the example work. discussion online was not reassuring. 
- eventually I got it to enter deep sleep but could not get it to exit. discussion online agrees, some people worked around it by just having it reboot to wake back up. my timer can't do that
- a good sleep mode seems really important especially when the baseline idle draw is 60 mA. I'm really dissapointed this is so difficult, my expectations were higher
- I will need to figure out deep sleep for the calculator project im working on. will probably have to do register poking, i expected that would take too much time for this project though. sleep modes can get really complicated for me.
- i still had esp32 and stm32 to look at so i went on.

- I tried my STM32 Blue Pill - well, my "WeAct Studio BluePill Plus" actually. It takes me so much time to deal with stm32cubeIDE and st-link, so I looked into trying to set it up as an Arduino. 
- took me a surprising amount of time to set it up. more bootloader options than I expected. also lots of varying online instructions. 
- eventually got it to work. I measured the baseline idle current and it was reasonale, already much better than the Pi Pico 2. now I just had to look for a deep sleep library
- found a great one. It's called [STM32LowPower by stm32duino](https://github.com/stm32duino/STM32LowPower). The API is very very simple and I'm so glad I didn't have to consider all the clocks and peripherals enabling/disabling and how to get it to wake back up from sleep.
- I also had to desolder the tiny SMD power LED. It was really hard. After several minutes I ended up accidentally smashing it beyond recognition with my iron, which appearantly did the trick. 
- At this point when I put it on my DC lab bench top supply, the supply's readout said "0.000 A" between my LED blinks. yes!
- This is when I knew my idea was possible.

- next I attached my e-ink display from waveshare. It has been waiting for a purpose for a long time
- I displayed a stopwatch/timer on it that updated every 5 seconds. I just remembered that I can have the e-ink display do a "partial refresh" which is much faster and less visually jarring than a full refresh. the only cost is that the display looks a little noisy for the first few partial-refreshes. no big deal.
- I thought I'd never use Arduino IDE again, but so far this was making things move along quickly, I am beginning to appreciate it again.

- as for the user interface, I imagined that as you crank the timer, the timer on the display would increase, and once you stop cranking, the timer would begin counting down. 
- but I figured there should be a knob in case you want to adjust the time after setting it.
- so I added a knob. a KY040, which makes me wish I had a potentiometer instead. No amount of software debouncing and state machines could get me out of its crazy behavior on any microcontroller I try this with. This time, I put a couple of capacitors and it helped a lot. Now instead of a 50% chance of clicking the correct way and a 20% chance of it registering the correct number of detentations, it's more like 90%. 

- now that I had some low power device to drive, I could focus on the power generation part of this.
- I thought of using a stepper motor as a generator because on my old 3D printer when I moved the bed back and forth, the printhead's fan started spinning. I've also seen a video clip of someone briefly booting up their 3D printer (LCD and all) by moving a part back and forth. 
- I needed to see how much power I could get out of backdriving my stepper motor.
- As a fun little experiment, I hooked up each wire to another stepper motor, and it amazed me: If I twisted the shaft of one stepper motor with my fingers, the other stepper motor would spin the same amount! 
- So I knew a stepper motor surely could give enough power to supply my circuit and charge a battery. Now I just needed a way to sustain the rotation of the motor. Also, after measuring the AC voltage though one of the coils, I realized I also needed a gear ratio to make the motor spin faster.
- I designed this assembly myself. The hardest part was figuring out how to mount something to the motor. I have all the motors of an Ender 3, but none of them had an obvious way to mount something to it - I could pop off the pulleys, but then I'm left with a smooth circular shaft. I used the motor that held the lead screw; I printed something that could get squeezed in there.
- It was difficult to get the tolerances so the parts would fit into holes and shafts tight enough to hold under torque. using some electrical tape let me skip a few re-prints. This clear PETG is so ugly, I can't wait to finish using it. 
- Now I could sping the motor around and round. Now I needed to get DC voltage from it.
- Since a stepper motor has 2 coils, I needed to make two full bridge rectifiers and connect them in series to get a higher voltage that I could step-down.
- it was tricky to find a compact way to make a full bridge rectifier on a breadboard, but I figured it out.
- I was then able to get a nice 15 volts DC by cranking my motor (or 20 V if I try really hard). But that's with no load. I shorted the DC output and cranked while measuring how much current it produced. I forgot how much exactly, but it was a little disappointing, I think it was 150 mA. and certainly the voltage was much lower as I could not crank as fast I could with no load. 
- I needed to know exactly how much power I needed to charge a battery. My Adafruit PowerBoost 500C needs 500 mA. 
- this was not looking good. I tried using a resistor on the 5V end of my new DC-DC buck converter modules instead of a short circuit to simulate a more reasonable load. I forgot what the results were. I approached this problem from both sides simultaneously:

1. Lower my target power to something easier. 
2. Generate more power.

To lower my target power, I found the resistor on the PowerBoost board that "tells" the LiPo charger IC what current to charge at. I swapped it to a different value to charge at 250 mA. I never put my soldering iron on surface mount stuff before, so it was a little nerve wracking, but I did it. I'm glad that I could use nice equipment at work like a microscope, kapton tape, liquid flux, and hot tweezers; that helped a lot. Kapton tape prevented my clumsy movements from causing my soldering iron to mess up neighboring components or cause solder bridges. I did not like soldering a through-hole resistor onto SMD pads. At least they were decently big pads, thanks Adafruit. 
I also removed all the on-board LEDs: the power output indicator, the charging indicator, the low battery indicator, and the charging-complete indicator. They are eye searingly bright. They were also kindly placed by Adafruit as close as possible to the edges of the PCB, so, easy!

Now for increasing my output power: Adding another set of gears to my crank design seemed daunting, it would be way too time consuming, and it would be physically huge. I could increase the gear ratio while keeping it to just 2 gears, but I doubted it would help enough. I could use my beefier motor that was used for pushing filament, but it looked way too difficult to mount my little gear to its shaft.

- I got an idea: Surely I could just look up existing designs for a small gearbox for the motors I have. that way I could increase the gear ratio, decrease the physical size, and not have to design anything. Sure enough, there was a lot to pick from on MakerWorld.
- lots of designs required extra hardware like bearings and rods. I found one that only requires 4 M3 screws to mount it to the motor. Looking at the design I was skeptical that the plastic rods would survive, but all the commenters seemed to like it. It used a planetary gear design.
- The big challenge here would be mounting the sun gear to my motor. First off, I'd have to remove the brass thing off my motor. I couldn't just increase the sun gear diameter. Turns out this is something a lot of others have also figured out. I found a little video clip of someone just using two hammers to remove the brass in under a minute. I used a hammer and a wrench and spent a lot of time smacking them together, it wasn't doing anything. So I used a torch to heat up the brass and try again. It took a lot of heat and a lot of time but eventually it started coming off little by little. I was amazed I didn't get the shaft all bent up or misaligned. 
- Now the problem was that the sun gear had a D-shaped hole but my shaft was O-shaped. A D shaft would make tolerances so much easier, but I brought the source files into Onshape and made the sun gear's hole into an O and printed a few out to hammer in. 
- My first attempt got the sun gear on, but it cracked. I adjusted the tolerance and it helped.
- It was really hard to get all the planet gears in. Once assembly was done, I was afraid it wouldnt forward-drive at all, let alone backdrive. 
- I had to print a handle to even see if it would rotate. So I made a stick with a hole in it. It did rotate, which was a relief. Things were looking good.
- I now needed a better handle with a knob so I could rotate it continually. My brother Kyle designed it. It worked. But then the 3D printed shaft broke. So we re-designed the part to be bigger and made a corresponding update to the handle.
- I ran the same tests as before with no-load voltage and loaded current. It was looking... okay, but still dissapointing: I could do 15 V at no load; 16 crank revolutions in 10 seconds. On a short circuit I measured 150 mA at 5 cranks in 10 seconds, which works out to probably 4 V
- At this point my LiPo battery had already arrived and I played with it a bit. I was too scared to trust cheap ones from Amazon so I got it from Adafruit. I got a much bigger capacity than I needed to I can re-use this for a future project I have in mind.
- One big problem with my battery setup was that there was no clean shut-off point when the battery drained. My circuit would just start turning on and off a few times per second. I guess that makes sense: The battery goes below the 3.0 V cutoff point, the load goes away, the voltage increases above the shutoff threshold slightly, it gets loaded, the voltage decreases below the theshold again, etc.
- I considered what circuitry I'd need to make this better. It'd be more work than I was prepared for, so I decided later I'd just put a rocker switch to disconnect the battery to stop the oscillation manually. 
- I realised it was a mistake to remove charging indicator LED. I soldered a through-hole one onto the pads. Waste of time. Anyways cranking my new machine was actually causing the charging indicator to light up! It was flickering, so I cranked faster. The crank was getting rough and after a minute or so, I started to hear cracking and suddenly the cranking became very easy. The plastic rods broke. If I replaced it, this would just happen again, so I didn't. I felt bad for my brother and his now-useless highly-engineered handle that he so kindly custom designed for me. 
- I wanted to give up.
- I plugged my original gear ratio design in to the battery charger and that also lit up the charging status LED. Maybe my original design was fine actually? To find out, I had to discharge my battery completely again and see if I could add enough juice to it with my crank. 
- So I watched it deplete and begin oscillating. The oscillation stopped. I cranked my crank. The charging indicator came on. But my circuit did not power. That's weird. I plugged the charger into a normal USB port. Still no power was getting through. The battery measured about 0 volts when disconnected and 1.7 volts when charging. It's dead.
- This was the worst time for the battery to die. Now I really wanted to give up.
- The gimmick of this project isn't worth the effort for me. Even if this worked perfectly, I'd use it only to show it off, then take it all back apart. If you want a hand-powered timer, just get a normal kitchen timer, or a twin bell alarm clock if you want it to last all night. They do everything my project is trying to do, all without using ANY electronics. That sounds a LOT more like "green power" than lithium ion hazards and e-waste; I regret even starting this. 
- If I bought a replacement LiPo, this would just happen again. I doubt LiPo is viable because the nature of my project is such that it sits at "0%" for a long time and occassionally gets charged to "%5"-ish, which is even worse for LiPos than I thought, appearantly.

- In parallel to the above generator effort, I was working on a better circuit board for my breadboard setup. I decided now was a good time to try making a 3D-printed PCB, like I learned about on Hackaday!
- In my EDA of choice, I made a schematic. I picked out real pin header parts and real through-hole passives from the parts library, which felt unecessary, but I wasn't sure what my other option was besides making a bunch of custom symbols and footprints, which sounds like a lot of work? Then I laid them out on the PCB view. I carefully routed them with wide traces; I knew I would have to cut around all of them with a knife.
- Later I learned that you can lay out a PCB without making a schematic first. I really don't know if that would have been a better idea, I think I like having a schematic anyways.
- I was following along with this YouTube video. I was using EasyEDA and Onshape, but it doesn't really matter; I like how software-agnostic this workflow is. 
- I exported the STEP file, extruded the traces in CAD, and got it ready to print. I made a sidecar looking thing to mount my battery and e-ink to. 
- In my first print, none of my components fit: the holes printed out smaller than I thought. So I printed a new one.
- I put the copper tape on my finished print. My circuit was wider than the tape, so i had to have some overlapping spots. This is important because it turns out the sticky side of my copper tape is not conductive, meaning I had to make solder bridges over the borders.
- I cut it out with an exacto knife. It was not easy, but it was a little less exhausting than perfboard work. I constantly slipped my knife into cutting up nearby traces - but not enough to have to repair them. 
- I was realizing there's no real "easy" way for me to make a PCB. A perfboard takes me hours, and so does this. It's just a tradeoff. If I'm not willing to pay to have a real PCB manufactured then I wonder if I should really be willing to DIY it. It always takes way more time and effort than I think, even though I have done several perfboards before. 
- I was really not looking forward to soldering my components in. I thought that once I push the pins through, it will lift off the tape, and then my solder will refuse to stick to this copper tape that has been collecting dust for years. 
- But it turned out that soldering was probably the easiest part of this whole process. Some of the tape traces lifted up but I was able to solder them anyways. The solder stuck right on. The plastic didn't melt or soften from the iron's heat. I was also glad I just bought a circuit board holder and liquid flux for myself; this helped make it go quicker. 
- One 'gotcha' I learned is that my devboards were just barely being held in with a few thin strips of tape since I only route a minority of the pins out. I guess I had just enough to keep it seated.
- My board passed the smoke test and everything worked. I also designed in a resistor divider from the USB-5V input to a MCU pin so it could keep track of how long it gets charged for and use that info to decide how much time to start the timer on. 
- I'm glad I tried out the 3D printed PCB thing. It's not as easy as I thought, but I wasn't missing drawing out my perfboard plan in Paint, measuring and cutting and stripping and bending lots of wires, making lots of solder bridges, clearing up unintended solder bridges, overlapping many wires, etc. 

- Next I turned to something else I had bought earlier for this project: A hand-crank powered flashlight off Amazon. It has a small internal battery that gets charged when you crank the handle. All the gearing and charging circuitry is already done for me! 
- I desoldered the LEDs to insert my timer circuit in there instead - as my Adafruit PowerBoost 500C doesn't HAVE to charge anything, I can easily just use the "boost" part of it. The battery was kindly labeled with its nominal voltage of 3.6 V, which was enough for the boost converter which had a minimum of 1.5 V or something. 
- I had a hard time figuring out where to put the postiive and negative terminals. A 1-layer board like this should be easy to reverse-engineer into a schematic, but that takes time. When I saw how the LEDs got powered by a 6-pin IC -- presumably an LED driver -- I decided to just splice my circuit into the positive and negative terminals of the battery.
- I had also bodged on headers so I can disconnect the battery to prevent mistakes, and also to plug my circuit into. Looks fragile.
- With everything connected, I cranked and watched my timer start counting. I stopped cranking and yes! It kept going! After about 30 seconds it stopped.
- I wasn't that surprised. Before taking the flashlight apart, but after letting its battery deplete, I noticed that while I cranked it, the light was very bright, but when I stopped, it quickly dimmed. If I cranked more, the time it took to dim was only slightly slower.
- I tried charging the battery for my circuit again, cranking for longer. Same result: about 30 seconds, then dead. 
- Then, I cranked for 5 long minutes. My hands were about to cramp; this was not easy to hold after taking most of it apart. I expected my circuit to live for 24 hours, but it lasted only 30 seconds again. Really disappointing.
- I measured the voltage to see what was going on. I cranked - the battery went up to like 4 volts. I stopped cranking and it dropped to 3.7 V or so. Every time my timer updated its display (happens every 5 seconds), the voltage dropped a little for a moment and then mostly recovered. After several times of this, the drops get more severe until it crashes below my boost converter's lower threshold and stays there. 
- It seemed the crank was not really charging the battery. I also noticed it was NiMH, which must be more resilient to storage at low charge than LiPo. I did some research on NiMH and found I can charge it with a DC power supply. That's cool that you can do that.
- To charge the NiMH without babysitting it, you must do so slowly - see Wikipedia. I set my supply to 4.3 V at a 25 mA limit. It took basically all day to charge, and when the current went down to 5 mA I figured it was done.
- I ran my timer on the battery and it lasted about 4 hours and 20 minutes. That's great! If I make the display update every minute instead of every 5 seconds, this would last over 2 days. 
- So truly, the problem was that the crank wasn't getting enough power into it. I was having trouble using my multimeter to measure how much current was getting into the battery while cranking, so I used a Nordic Power Profiler Kit II (AKA PPK2).
- The PPK2 lets me get a live chart on my computer showing me how much current is going through it. I verified that my timer was low-power. It was on average ___ mA. And I found that the only around 50 MICROAMPS were flowing from the flashlight's crank to the battery. It depends on the speed of my crank, but it went no higher than 500 uA! No wonder it felt like it wasn't charging! 
- I was really confused. All I was doing was measuring the circuit I bought on Amazon. It's a real battery indeed and the crank was capable of powering the LEDs and USB port just fine, so I'm not sure where the problem could be.
- I let the battery charge off my own stepper motor crank design and the current was about the same: well under 1 milliamp. The voltage was fine: it was the 4.1 V I set my DC-DC converter to. So... why's the battery hardly drawing anything?
- This is where I have reached the limit of my understanding, competition time, and budget. 

## What I WOULD do next

I've lost my interest. I don't want to buy even more things for this stupid project. But if I did continue, this is what I would do:

- I would have liked to use supercapacitors instead of batteries. I thought they wouldn't possibly hold enough energy, but recently I learned from the supercap-plane guy's new YouTube video that you can get 2.7 V capacitors of 5F, 10F, 50F, and even 100F - truly insane. They are not even that big, nor very expensive. I'm guessing it would be easier and much quicker to take them through charging and discharging cycles for testing. I would just need a boost converter that works efficiently at very light loads and support very low input voltages. I found such an IC from TI. But I think I would need to design a real PCB for it; its devboard is too expensive. 
