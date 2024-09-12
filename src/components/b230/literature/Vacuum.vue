<script setup lang="ts">

</script>

<template>
  <h1>B230F Manifold Vacuum</h1>
  <a href="https://turbobricks.com/index.php?threads/b230f-engine-manifold-vacuum-reference-data-point.301745">
    https://turbobricks.com/index.php?threads/b230f-engine-manifold-vacuum-reference-data-point.301745
  </a>

  <div>
    <h2>Engine cold (startup), ambient 7degC (46 degF)</h2>
    <table>
      <tbody>
      <tr>
        <td>Engine speed (Rev/Min)</td>
        <td>900 (fast idle)</td>
      </tr>
      <tr>
        <td>Manifold Vacuum (inHg)</td>
        <td>13.5 to 19 from T=0min to T=2min</td>
      </tr>
      </tbody>
    </table>

    <h2>Engine warming (temp between bottom and mid-gauge)</h2>
    <table>
      <tbody>
      <tr>
        <td>Engine speed (Rev/Min)</td>
        <td>775-800 (idle)</td>
        <td>1500</td>
        <td>2000</td>
      </tr>
      <tr>
        <td>Manifold Vacuum (inHg)</td>
        <td>20</td>
        <td>22 ¼</td>
        <td>22</td>
      </tr>
      </tbody>
    </table>

    <h2>Engine warm (not hot, approaching mid-gauge)</h2>
    <table >
      <tbody>
      <tr>
        <td>Engine speed (Rev/Min)</td>
        <td>750-800 (idle)</td>
        <td>1600</td>
        <td>2000</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>Manifold Vacuum (inHg)</td>
        <td>21</td>
        <td>22 ¾</td>
        <td>22 ¾</td>
        <td>22 ¼</td>
      </tr>
      </tbody>
    </table>

    <h2>Engine warm, overrun (throttle abruptly closed)</h2>
    <table >
      <tbody>
      <tr>
        <td>Engine speed (Rev/Min)</td>
        <td>1600</td>
        <td>2000</td>
        <td>3000</td>
        <td>3000+</td>
      </tr>
      <tr>
        <td>Manifold Vacuum (inHg)</td>
        <td>23 ¾</td>
        <td>24 ¼</td>
        <td>25</td>
        <td>25</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>