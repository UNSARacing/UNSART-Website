import './Impressum.css';

const Impressum = () => {
  return (
    <div className="impressum-container">
      <h1>Impressum</h1>
      
      <section className="impressum-section">
        <p className="organization-name">Udruženje studenata Univerziteta u Sarajevu "UNSA RT"</p>
        <p>Skraćeni naziv: "UNSA RT"</p>
        <p>Pravna forma: Udruženje studenata / neprofitna organizacija</p>
      </section>

      <section className="impressum-section">
        <h2>Sjedište</h2>
        <p>Vilsonovo šetalište 9</p>
        <p>71000 Sarajevo</p>
        <p>Bosna i Hercegovina</p>
      </section>

      <section className="impressum-section">
        <h2>Kontakt</h2>
        <p>E-mail: <a href="mailto:info@unsaracing.com">info@unsaracing.com</a></p>
      </section>

      <section className="impressum-section">
        <h2>Odgovorne osobe</h2>
        <p>Mateo Bušić, Predsjednik Udruženja</p>
        <p>Harun Omerbegovič, Potpredsjednik Udruženja</p>
      </section>
    </div>
  );
};

export default Impressum;
