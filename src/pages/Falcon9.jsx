import StatCounter from "../components/StatCounter";

function Falcon9() {
  return (
    <>
      <section className="section-animate bg-falcon-9"></section>
      <div className="section-inner-center">
        <h3>Falcon 9</h3>
        <p>First orbital class rocket capable of reflight</p>
      </div>
      <StatCounter />
    </>
  );
}

export default Falcon9;
