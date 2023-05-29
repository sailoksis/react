import React from "react";
import styles from './Home.module.css'

function Home() {
  return (

<div className={styles.item}> 
    <h1>Cars catalog</h1>
    <div>
<div>
    <h2>Car 1</h2>
    <p>$100</p>
    <button>Read more</button>
</div>
    </div>
    </div>
  );
}

export default Home;
