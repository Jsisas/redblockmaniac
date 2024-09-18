<script setup lang="ts">
import Sources from '@/components/Sources.vue'
</script>

<template>
  <h2>Oxygen Sensor Testing</h2>

  <h3><b>General info on lambda</b></h3>
  <p>
    The difference in oxygen levels between the outside air and the exhaust within the sensor is
    what causes voltage to flow through the ceramic bulb. The greater the difference, the higher the
    voltage reading. Typically, an oxygen sensor will generate up to about 0.9 volts when the fuel
    mixture is rich and there is little unburned oxygen in the exhaust. When the mixture is lean,
    the sensor's output voltage will drop down to about 0.1 volts. When the air/fuel mixture is
    balanced or at the equilibrium point of about 14.7 to 1, the sensor will read around .45 volts.
    When the computer receives a rich signal (high voltage) from the O2 sensor, it leans the fuel
    mixture to reduce the sensor's reading. When the O2 sensor reading goes lean (low voltage), the
    computer reverses again, making the fuel mixture go rich. This constant flip-flopping back and
    forth of the fuel mixture occurs at different speeds depending on the fuel system. Engines with
    multiport injection do this five to seven times per second at 2,500 rpm.The O2 sensor must react
    quickly to these changing fuel conditions in order for the computer to maintain the best average
    air/fuel ratio. As sensors age, they become sluggish and respond more slowly to changes in the
    air/fuel ratio. This may cause emissions and fuel consumption to rise.
  </p>

  <p>
    Before it will start to generate a voltage signal, the oxygen sensor must be hot - usually from
    about 450d F to 600d F or even higher. The sensor incorporates an internal electric heating
    element to bring the O2 sensor up to operating temperature quickly (under 35 seconds). Internal
    heating elements usually operate continuously while the engine is running to maintain an
    operating temperature of approximately 1292 degrees Fahrenheit to 1472 degrees Fahrenheit.
    Heated O2 sensors operate at a more consistent temperature and allow greater flexibility of
    placement locations in the exhaust system. Three and four wire sensors have this heater
    installed: two wires for the heating element, one signal wire and possibly a ground wire. Oxygen
    sensors that are not equipped with a ground wire must have a well-grounded exhaust system to
    complete the sensing circuit. Basic electrical wiring circuit checks should be made to determine
    if the vehicle's wiring harness has good continuity and is free from short circuits.
  </p>

  <p>
    The ECU will set an O2 sensor diagnostic code if the sensor does not produce a voltage signal,
    stays rich too long, stays lean too long, does not switch rich/lean (center too long), or does
    not switch rich/lean fast enough. If the sensor dies altogether, the result can be a fixed rich
    fuel mixture. The rich mixture therefore can cause the converter to overheat, resulting in
    severe damage and higher repair costs for the driver. As one aftermarket manufacturer points
    out, sensor checks come down to paying a little now or a lot later. One way technicians can test
    oxygen sensors is to see if the sensor's output voltage changes when the fuel mixture changes.
    When the mixture is lean, the sensor's output voltage should be low (down around 0.1 volts), and
    when the mixture is rich the sensor's output should be high (up around 0.9 volts). A steady low
    voltage reading or no voltage reading would indicate a bad sensor.
  </p>

  <p>
    Making the fuel mixture artificially rich by adding propane into the intake manifold should
    cause the sensor to respond almost immediately (within 100 milliseconds) and go to maximum
    (0.9v) output. On the other hand, creating a lean mixture by opening a vacuum line should cause
    the sensor's output to drop to its minimum (0.1v) value.
  </p>

  <p>
    Although a technician can read the O2 sensor's output with a scan tool or digital voltmeter, the
    transitions are hard to see because the numbers jump around so much. An analog voltmeter is
    better for viewing transitions, but may not respond quickly enough on systems with higher
    transition rates. So the recommended instrument for observing the O2 sensor's voltage output is
    a digital storage oscilloscope (DSO). A scope will display the sensor's voltage output as a wavy
    line that shows its amplitude (minimum and maximum voltage) as well as its frequency (transition
    rate from rich to lean).
  </p>

  <p>
    A good O2 sensor should produce an oscillating waveform at idle that makes voltage transitions
    from near minimum to near maximum. If the sensor doesn't flip-flop back and forth quickly
    enough, it may indicate a need for replacement. If the O2 sensor circuit opens, shorts or goes
    out of range, it may set a fault code and illuminate the Check Engine or Malfunction Indicator
    Lamp. If additional diagnosis reveals the sensor is defective, replacement is required.
  </p>

  <h3><b>Bosch</b></h3>
  <p>Test for a rich mixture as follows:</p>
  <ol>
    <li>Disconnect the sensor lead to the control unit.</li>
    <li>Run the engine at 2500 rpm</li>
    <li>
      Artificially enrich the fuel mixture on electronic fuel injected engines by removing and
      plugging the vacuum line to the fuel pressure regulator.
    </li>
    <li>
      If the voltmeter rapidly reads .9 volts, then the oxygen sensor is correctly sensing a rich
      mixture. But, if the voltmeter responds sluggishly, or if it stays below .9 volts, try running
      it at 3,000 rpm for a few minutes, then check again. No improvement means you buy a new
      sensor.
    </li>
  </ol>

  <p>Test for a lean mixture as follows:</p>
  <ol>
    <li>Induce a small vacuum leak</li>
    <li>
      If the voltmeter rapidly drops to .2 volts or below in less than a second, then the oxygen
      sensor is correctly measuring the lean mixture. But if the voltmeter responds sluggishly, of
      if it stays above .2 volts, give it the 3,000 rpm treatment and try again.
    </li>
    <li>If no improvement, then the sensor should be replaced.</li>
  </ol>

  <p>Test dynamic performance as follows:</p>
  <ol>
    <li>Reconnect the sensor lead and tap your meter into the signal wire</li>
    <li>Set the mixture to specification.</li>
    <li>Run the engine at 1500 rpm.</li>
    <li>
      You should see rapidly changing readings that average somewhere around .5 volt as the computer
      keeps adjusting the blend. The sensor output should fluctuate around .5 volts. If it doesn't,
      replace the sensor. Deciding whether or not response is slow enough to justify replacement
      requires some judgment. A common rule of thumb for minimum activity is eight trips across the
      rich/lean line in ten seconds, and sometimes you can find specs for cross-counts.
    </li>
  </ol>

  <p>Another way to test bosch lambda</p>
  <p>
    Start the engine, let it warm up a few minutes. once it goes into lambda cycle, you should see a
    DC voltage that swings from around 0.6-0.9 volts to around 0.1-0.4 volts and back. the exact
    value isn't important, it just needs to be swinging back and forth between a lower and higher
    voltage... at idle those swings should take maybe 4-5 seconds, but no longer than about 10
    seconds. if you raise the RPM they should happen faster. if the voltage stays pegged at the
    higher or lower value, then the engine is not running in lambda balance. if the swings are too
    slow, the o2 sensor is old and tired.
  </p>

  <h3><b>Regina</b></h3>
  <ol>
    <li>
      The white and red wires in one connector are the heater circuit; the black wire in second
      connector is the signal.
    </li>
    <li>Red is +12V; white is ground</li>
    <li>Black (connected w/engine running) should cycle rapidly between 0.1V and 1.2V</li>
    <li>Black (disconnected w/engine running) should after a while rise to 1.2V</li>
    <li>Replacement is NGK 25002, not a "generic" sensor.</li>
  </ol>

  <Sources
    :sources="[
      {
        name: 'volvoforums.com',
        url: 'https://volvoforums.com/forum/volvo-240-740-940-12/where-oxygen-sensor-1990-240dl-100479/'
      },
      {
        name: 'volvoclub.org.uk',
        url: 'https://www.volvoclub.org.uk/faq/EngineSensors.html#OxygenSensorLifeandDiagnostics'
      }
    ]"
  />
</template>

<style scoped></style>
