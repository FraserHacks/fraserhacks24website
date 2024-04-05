import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero-content">

        <Image
          id="hero-logo"
          src="/hero-logo.png"
          alt="FraserHacks Logo: Blue circular logo"
          width={500} // Replace with actual width of your image
          height={500} // Replace with actual height of your image
        />
        <h2>May 4, 2019</h2>
        <h3 style={{ marginBottom: '20px' }}> John Fraser Secondary School, Mississauga
</h3>
        <div id="mc_embed_signup">
          <form
            action="https://FraserHacks.us19.list-manage.com/subscribe/post?u=a50dd0c50b611bd5e179d9b85&amp;id=36ad7a17fc"
            method="get"
            className="mailinglist validate"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate // Corrected novalidate to noValidate
          >
            
            <label>

  <div className="mt-4"> {/* This adds a margin-top of 1rem (16px); adjust the number as needed */}
    <button id="register" className="mt-8"> {/* This adds a margin-top of 2rem (32px); adjust the number as needed */}
      Register
    </button>
  </div>
</label>
            {/* Hidden input for bot protection */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_a50dd0c50b611bd5e179d9b85_36ad7a17fc"  value="" />
            </div>
            <div className="info"></div>
          </form>
          <div className="scroll-down"></div>
        </div>
      </div>
    </main>
  );
}
