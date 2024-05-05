document.addEventListener('DOMContentLoaded', () => {
    const fallingSpeed = 'slower';
    const spinningSpeed = 'slower';
    const minFontSize = 15;
    const maxFontSize = 25;

    let snowflakesCount = 0;

    function createSnowflake() {
        if (snowflakesCount < 10) {
            const snowflake = document.createElement('div');
            snowflake.innerHTML = '🍓';
            snowflake.classList.add('snowflake');
            snowflake.style.position = 'fixed';
            snowflake.style.top = '-10px';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.color = '#fff';
            snowflake.style.fontSize = `${Math.random() * (maxFontSize - minFontSize) + minFontSize}px`;
            snowflake.style.zIndex = '9999';
            snowflake.style.pointerEvents = 'none';
            document.body.appendChild(snowflake);

            const fallDuration = fallingSpeed === 'slower' ? Math.random() * 10000 + 5000 : Math.random() * 5000 + 3000;
            const rotationSpeed = spinningSpeed === 'slower' ? Math.random() * 5 + 5 : Math.random() * 15 + 10;

            snowflake.animate(
                [
                    { transform: `translateY(-10px) rotateZ(${Math.random() * 360}deg)` },
                    { transform: `translateY(100vh) rotateZ(${Math.random() * 720}deg)` }
                ],
                {
                    duration: fallDuration,
                    iterations: Infinity
                }
            );

            snowflake.addEventListener('animationiteration', () => {
                snowflake.style.left = `${Math.random() * 100}vw`;
            });

            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
                snowflakesCount--;
            });

            snowflakesCount++;
        }
    }

    setInterval(createSnowflake, 500);
});
