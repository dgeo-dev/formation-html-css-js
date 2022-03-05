const PORTFOLIO_1 = `
  <div class="modal" id="modal-1">
    <button class="modal__close">&times;</button>

    <div class="modal__content">

      <div class="container">
        <div class="grid">
          <div class="grid__item">
            <img src="https://picsum.photos/600/400?random=2" class="card__image"
              alt="Projet site de la ville de lyon" />
            <img src="https://picsum.photos/600/400?random=22" class="card__image"
              alt="Projet site de la ville de lyon" />
          </div>
          <div class="grid__item">
            <h4 class="modal__title h2">Titre de la modal 1</h4>
            <p>
              <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="far"
                data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z">
                </path>
              </svg>
              <i>Année : 2019</i>
            </p>
            <p class="category">
              <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag"
                class="svg-inline--fa fa-tag fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z">
                </path>
              </svg>
              Refonte graphique
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat accusantium laborum aliquam enim. Vero
              voluptate, animi, sint vel mollitia ut odio, eius quis
              expedita quo at! Dignissimos ipsum odit dolores!
            </p>

            <h5 class="h3">Informations</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat accusantium laborum aliquam enim. Vero
              voluptate, animi, sint vel mollitia ut odio, eius quis
              expedita quo at! Dignissimos ipsum odit dolores!
            </p>

            <h5 class="h3">Technologies</h5>

            <ul>
              <li>HTML, CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

/*function createPortfolioDetails(id) {
  const modal1 = document.getElementById('modal-container-1');
  modal1.innerHTML = PORTFOLIO_1;
}

createPortfolioDetails();*/

function generateDatas(id) {
  return `
  <div class="modal" id="modal-${id}">
    <button class="modal__close">&times;</button>

    <div class="modal__content">

      <div class="container">
        <div class="grid">
          <div class="grid__item">
            <img src="https://picsum.photos/600/400?random=2" class="card__image"
              alt="Projet site de la ville de lyon" />
            <img src="https://picsum.photos/600/400?random=22" class="card__image"
              alt="Projet site de la ville de lyon" />
          </div>
          <div class="grid__item">
            <h4 class="modal__title h2">Titre de la modal ${id}</h4>
            <p>
              <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="far"
                data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z">
                </path>
              </svg>
              <i>Année : 2019</i>
            </p>
            <p class="category">
              <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag"
                class="svg-inline--fa fa-tag fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z">
                </path>
              </svg>
              Refonte graphique
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat accusantium laborum aliquam enim. Vero
              voluptate, animi, sint vel mollitia ut odio, eius quis
              expedita quo at! Dignissimos ipsum odit dolores!
            </p>

            <h5 class="h3">Informations</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat accusantium laborum aliquam enim. Vero
              voluptate, animi, sint vel mollitia ut odio, eius quis
              expedita quo at! Dignissimos ipsum odit dolores!
            </p>

            <h5 class="h3">Technologies</h5>

            <ul>
              <li>HTML, CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

function createPortfolioDetails(id) {
  const modal = document.getElementById(`modal-container-${id}`);
  modal.innerHTML = generateDatas(id);
}

for (let index = 1; index < 7; index++) {
  createPortfolioDetails(index);
}



