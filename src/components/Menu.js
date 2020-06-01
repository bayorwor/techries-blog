import React from "react";
const Menu = () => {
  return (
    <div className=" row">
      <div className="m-auto p-3 bg-light">
        <div className="bg-dark toast-body text-center text-white">
          <h3>COMPANY PROFILE</h3>
        </div>
        <p className=" p-3">
          As a first time fund manager, you would usually have a small fund
          ($5m-$25m). Conventional wisdom suggests that you invest smaller
          tickets in more seed stage startups (20–50 pre-seed/seed companies).
          This way you can diversify more, reduce your risk, and increase your
          chances of some return on the long run, while slowly developing your
          VC firm and your investment thesis. It sounds like a good evolutionary
          process where you learn by doing. It’s also much easier to access such
          deals as founders are more desperate to get started and there is less
          competition on those early stage deals. Every new VC fund manager I
          meet wants to lead or be the only investor who writes the first check
          in pre-seed startups! They want to prove that they can spot good
          companies as early as possible. They also go crazy about building the
          brand through social media, blogging, and speaking at conferences to
          connect with founders.
        </p>
        <p className=" p-3">
          But, there are a few issues with this suggestion. First, you don’t
          have the luxury of time! You’re fund is small, the fees won’t last you
          many years to prove that your selection criteria is good enough, and
          when time comes to raise your second fund, your portfolio won’t be in
          a position to impress LPs yet, even if you’ve selected the best seed
          companies out there. Second, by focusing on seed stage startups,
          you’re inherently accepting higher levels of risk knowing that most of
          new startups don’t make it to the next stage. There are team risks,
          technology risks, market risks, competition risks, funding risks,
          economic risks, and legal and regulatory risks. Third, if you think
          about it from an LP point of view, you would add even more risks
          related to the team running the fund. Fourth, being out there and
          meeting lots of founders might actually harm your brand as you might
          look like you’re overpromising.
        </p>
      </div>
    </div>
  );
};

export default Menu;
