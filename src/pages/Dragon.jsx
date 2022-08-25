import StatCounter from "../components/StatCounter";

function Dragon() {
  return (
    <>
      <section className="section-animate bg-dragon"></section>
      <div className="section-inner-center">
        <h3>Dragon</h3>
        <p>Sending humans and cargo into space.</p>
      </div>
      <StatCounter />
    </>
  );
}

export default Dragon;
