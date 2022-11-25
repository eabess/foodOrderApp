import classes from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>East delivered to you</h2>
      <p>
      A variety of dishes of Uzbek cuisine with delivery to your home or office. This is a great opportunity to satisfy your hunger in the best oriental traditions. At the same time, you do not break away from your business to visit the tea house.
      </p> {/* Разнообразные блюда узбекской кухни с доставкой к Вам на дом или в офис. Это отличная возможность утолить голод в лучших восточных традициях. При этом Вы не отрываетесь от своих дел, чтобы посетить чайхану. */}
      <p>
      The taste of traditional Uzbek cuisine, all the flavor of the East, velvet pillows, soft armchairs, comfortable sofas and enchanting music await you behind the hospitable doors of the "Legend" tea house. Here, the hands of professionals create a festive mood and delicious dishes. Here you can try real oriental cuisine in the original version, where centuries-old folk traditions are preserved to the maximum using aromatic herbs, natural meat, spicy sauces, fresh vegetables...
      </p> {/* Вкус традиционной узбекской кухни, весь колорит востока, бархатные подушки, мягкие кресла, комфортные диваны и чарующая музыка ждут Вас за гостеприимными дверями чайханы «Легенда». Здесь руками профессионалов создается праздничное настроение и вкусные блюда. У нас Вы можете попробовать настоящую восточную кухню в оригинальном исполнении, где максимально сохранены многовековые народные традиции с использованием ароматных трав, натурального мяса, пикантных соусов, свежих овощей... */}
    </section>
  );
}

export default MealsSummary;