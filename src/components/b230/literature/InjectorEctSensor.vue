<script setup lang="ts">
import Sources from '@/components/Sources.vue'
</script>

<template>
  <div>
    <h2>Engine Injection Coolant Temperature Sensor testing</h2>
    <p>
      The coolant temperature signal to the control unit has a great influence on the computed
      injection period... For example, when the engine is being started and is cold, the amount of
      injected fuel must be relatively large. [Editor:] Too rich a mixture because of a failing ECT
      may lead to idle surges, high idle, poor warm running, or other symptoms of too much fuel. See
    </p>
    <p>
      If the control unit receives a signal higher than 302F (150C) or lower than -40F (-40C), it
      will interpret the signal as a fault...the control unit will assume a substitute value
      corresponding to 32F (0C) on starting and 68F (20C) when the engine has started.
    </p>
    <p>
      With the control unit connected, connect a voltmeter across LH ECU terminals 13 and 5 (ground)
      for Bosch LH 2.4 systems or terminals 2 and 5 (ground) for LH 2.2 systems. This unit is in the
      passenger side footwell, under the plastic cover. Remove the cover of the large electrical
      connector to access the backs of the pins for the test. Turn the ignition switch ON.
    </p>
    <ul>
      <li>At 68F (20C) the voltage should be 2.0 +/-.5v volts.</li>

      <li>At 104F(40C) the voltage should be 1.2 +/- .3volts</li>

      <li>At 176F (80C) the voltage should be .5 +/- .2volts.</li>
    </ul>
    <p>
      The resistance values between ECU pins 13 and 5, or between each of the pins on the sensor and
      ground, are (by eye from the chart):
    </p>
    <ul>
      <li>32F (0C)-- about 6000 ohms within a range of +/- 10%</li>

      <li>68F(20C) -- about 2300 ohms</li>

      <li>104F(40C) -- about 1300 ohms</li>

      <li>140F(60C) -- about 600 ohms</li>

      <li>176F(80C) -- about 300 ohms</li>

      <li>212F -- about 190 ohms</li>
    </ul>
    <p>
      [Response: Steve Ringlee] ECT resistance cold for LH2.4 systems should be around 6k ohms at 32
      degrees F (0 deg C), 2300-2700 ohms at 68 degrees F (20 C), and 200 at 212 F (100 C). However,
      try checking your ECT wiring: Between pins 13 and 5 at the LH ECU (with sensor DISconnected)
      resistance should be infinite. Voltage with the ignition ON and sensor connected, measured
      between pins 13 and 5, should be:
    </p>
    <ul>
      <li>0 C=around 3 volts +/-.5v</li>

      <li>20C=around 2 volts +/- .5v</li>

      <li>100C=around .3 volt +/- .1v</li>
    </ul>
    <p>
      If these aren't correct, check the connections in the ECT wiring harness. Check engine ground
      connections at the intake manifold. If the voltage is zero, your ECU is at fault.
    </p>
    <Sources
      :sources="[
        {
          name: 'volvoclub.org.uk',
          url: 'https://www.volvoclub.org.uk/faq/EngineSensors.html#EngineTemperatureSensors'
        }
      ]"
    />
  </div>
</template>

<style scoped></style>
