function PersonalInfo() {
  return (
    <>
      <div className="container">
        <div id="dad-info" className="d-flex">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              fontSize: 20,
              fontFamily: "Times New Roman",
              paddingRight: 50,
            }}
          >
            Elon Reeve Musk (EE-lon; born June 28, 1971) is a businessman and
            investor. Musk is the founder, chairman, CEO and chief technology
            officer of SpaceX; angel investor, CEO, product architect and former
            chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder
            of the Boring Company and xAI; co-founder of Neuralink and OpenAI;
            and president of the Musk Foundation. He is the wealthiest person in
            the world, with an estimated net worth of US$219 billion as of
            November 2023, according to the Bloomberg Billionaires Index, and
            $241 billion according to Forbes, primarily from his ownership
            stakes in Tesla and SpaceX.[5][6]
          </div>

          <div>
            <img
              src={
                "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBdBj0QvfR.E/v1/-1x-1.jpg"
              }
              height={250}
              style={{ borderRadius: 5 }}
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div id="uncle-info" className="d-flex">
          <div>
            <img
              src={
                "https://static.themoscowtimes.com/image/1920/e1/8647c7c484f44b68af6e62907e2053fe.jpeg"
              }
              height={250}
              style={{ borderRadius: 5 }}
            />
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              fontSize: 20,
              fontFamily: "Times New Roman",
              paddingLeft: 50,
            }}
          >
            Vladimir Vladimirovich Putin[c] (born 7 October 1952) is a Russian
            politician and former intelligence officer who has been President of
            Russia since 2012. Putin has held continuous positions as president
            or prime minister since 1999:[d] as prime minister from 1999 to 2000
            and from 2008 to 2012, and as president from 2000 to 2008 and since
            2012.[e][7]
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
