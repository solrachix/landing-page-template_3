import Logo from '@/assets/images/logo.svg'
import AttentionIcon from '@/assets/icons/attention.svg'
import Higher from '@/assets/icons/higher.svg'
import Warning from '@/assets/icons/warning.svg'
import Check from '@/assets/icons/check.svg'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'

import TestimoniesSlide from '@/components/TestimoniesSlide'

import Data from '@/data'

const App = () => {
  return (
    <Container>
      <SEO
        title="Ignite | Acelere sua carreira"
        description="Currículo alinhado com o mercado e as atitudes que vão te ajudar a acelerar na direção dos seus objetivos como dev."
      />

      <section className="capture">
        <div className="container">
          <div className="captureContent">
            <h1 className="title">
              Acelere
              <br />
              sua carreira<b>.</b>
            </h1>
            <h2 className="subtitle">
              Currículo alinhado com o mercado e as atitudes que vão te ajudar a
              acelerar na direção dos seus objetivos como dev.
            </h2>

            <button type="button" className="css-96i0w">
              Scroll down
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
          <div className="captureAction">
            <div className="bgt">
              <AttentionIcon className="icon-attention" />
              <h3>
                As matrículas serão <br /> abertas em breve.
              </h3>
              <div className="logo">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="methodologyPolygon">
            <div className="methodologyPolygonGrid">
              <div className="ItemMethodology">
                <strong>Currículo</strong>
                <span>
                  Profissional, atualizado,
                  <br /> pragmático
                </span>
              </div>
              <div className="ItemAttitude">
                <strong>Metodologia</strong>
                <span>Foco, prática, grupo</span>
              </div>
              <div className="ItemResume">
                <strong>Atitude</strong>
                <span>
                  Clareza, disciplina, <br /> paixão
                </span>
              </div>
            </div>
          </div>
          <div className="methodologyContent">
            <h2 className="titleSection">Como você vai aprender</h2>
            <h3 className="subTitleSection">
              O objetivo do Ignite é desenvolver habilidades que vão acelerar a
              sua carreira.
            </h3>
          </div>
        </div>
      </section>

      <section className="whyIgnite">
        <div className="container">
          <div className="whyIgniteTop">
            <h2 className="titleSection">Por que escolher o Ignite</h2>
          </div>
          <ul className="whyIgniteDown">
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 58.6666C46.7276 58.6666 58.6667 46.7275 58.6667 31.9999C58.6667 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33333 17.2723 5.33333 31.9999C5.33333 46.7275 17.2724 58.6666 32 58.6666Z"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M21.3333 37.3334C21.3333 37.3334 25.3333 42.6667 32 42.6667C38.6667 42.6667 42.6667 37.3334 42.6667 37.3334"
                  stroke="#E1E1E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M24 24H24.0251"
                  stroke="#E1E1E6"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M40 24H40.0251"
                  stroke="#E1E1E6"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>
                <h3 className="subTitleSection">Boas práticas</h3>
                <p className="paragraph">
                  Chega de aprender por aprender, conhecimento precisa estar
                  alinhado com as necessidades do mercado.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8934 37.04L18.6667 61.3333L32 53.3333L45.3334 61.3333L42.1067 37.0133"
                  stroke="#E1E1E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M32 40C42.3093 40 50.6667 31.6426 50.6667 21.3333C50.6667 11.024 42.3093 2.66663 32 2.66663C21.6907 2.66663 13.3333 11.024 13.3333 21.3333C13.3333 31.6426 21.6907 40 32 40Z"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>
                <h3 className="subTitleSection">Certificado</h3>
                <p className="paragraph">
                  Receba a certificação de desempenho da Rocketseat reconhecida
                  por grandes empresas.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 45.2391H10.6666C9.25216 45.2391 7.8956 44.6803 6.89541 43.6855C5.89522 42.6906 5.33331 41.3414 5.33331 39.9345V13.4113C5.33331 12.0044 5.89522 10.6552 6.89541 9.66038C7.8956 8.66557 9.25216 8.10669 10.6666 8.10669H53.3333C54.7478 8.10669 56.1044 8.66557 57.1045 9.66038C58.1047 10.6552 58.6666 12.0044 58.6666 13.4113V39.9345C58.6666 41.3414 58.1047 42.6906 57.1045 43.6855C56.1044 44.6803 54.7478 45.2391 53.3333 45.2391H50.6666"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M32 39.9346L45.3334 55.8485H18.6667L32 39.9346Z"
                  stroke="#E1E1E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>
                <h3 className="subTitleSection">Conteúdo prático</h3>
                <p className="paragraph">
                  Aulas gravadas em vídeo pra você ir a fundo e dominar na
                  prática a tecnologia que você escolheu.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 45.3333L26.6667 29.3333L10.6667 13.3333"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M32 50.6667H53.3333"
                  stroke="#E1E1E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>
                <h3 className="subTitleSection">Conteúdo de soft skills</h3>
                <p className="paragraph">
                  Desenvolva as habilidades não técnicas que vão ser essenciais
                  pra você se destacar como profissional.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 5.33325L40.24 22.0266L58.6667 24.7199L45.3333 37.7066L48.48 56.0533L32 47.3866L15.52 56.0533L18.6667 37.7066L5.33331 24.7199L23.76 22.0266L32 5.33325Z"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>

                <path
                  d="M32 5.3335L40.24 22.0268L58.6667 24.7202L45.3333 37.7068L48.48 56.0535L32 47.3868"
                  stroke="#E1E1E6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>
                <h3 className="subTitleSection">Seja desafiado</h3>
                <p className="paragraph">
                  A cada módulo você terá que pôr à prova seus estudos através
                  de atividades e desafios.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 40C56 41.4145 55.4381 42.771 54.4379 43.7712C53.4377 44.7714 52.0812 45.3333 50.6667 45.3333H18.6667L8 56V13.3333C8 11.9188 8.5619 10.5623 9.5621 9.5621C10.5623 8.5619 11.9188 8 13.3333 8H50.6667C52.0812 8 53.4377 8.5619 54.4379 9.5621C55.4381 10.5623 56 11.9188 56 13.3333V40Z"
                  stroke="#04D361"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <rect
                  x="17"
                  y="18"
                  width="30"
                  height="4"
                  rx="1"
                  fill="#E1E1E6"
                ></rect>
                <rect
                  x="17"
                  y="26"
                  width="18"
                  height="4"
                  rx="1"
                  fill="#E1E1E6"
                ></rect>
              </svg>
              <div>
                <h3 className="subTitleSection">Fórum</h3>
                <p className="paragraph">
                  Um fórum exclusivo para você tirar todas as suas dúvidas
                  técnicas com o nosso suporte e outros alunos.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="trails">
        <div className="container">
          <div className="trailsTop">
            <h2 className="titleSection">Confira as tecnologias</h2>
          </div>
          <ul className="trailsDown">
            {Data.trails.map((trail, index) => (
              <li key={index}>
                <div className="trail">
                  {trail.Icon({})}
                  <h3
                    className="subTitleSection"
                    dangerouslySetInnerHTML={{
                      __html: trail.title
                        .replace('*', '<strong>')
                        .replace('*', '</strong>')
                    }}
                  ></h3>
                  <span>Front End</span>
                  <p className="paragraph">{trail.descriptions}</p>

                  <div className="teacher">
                    <span>Educador:</span>
                    <div>
                      <img
                        src="/images/diego-fernandes.jpg"
                        alt="Diego Fernandes"
                      />
                      <h3 className="subTitleSection">{trail.teacher}</h3>
                    </div>
                    <p className="paragraph">{trail.teacherDescription}</p>
                  </div>
                  <button type="button">
                    abrir módulos{' '}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      size={24}
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>

                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="advance">
        <div className="container">
          <div className="advanceLeft">
            <h2 className="titleSection">
              Programação vai muito além do código
            </h2>
            <p className="paragraph">
              Durante o Ignite desenvolvemos habilidades e atitudes que vão além
              do código, para te ajudar a se destacar como profissional.
            </p>
            <p className="paragraph">
              Conteúdos de soft skills são disponibilizados semanalmente,
              trazendo desafios práticos para o desenvolvimento da aluna ou
              aluno em conseguir evoluir nas habilidades de comunicação,
              organização, criatividade, foco e produtividade.
            </p>
            <div className="higher"></div>
            <div className="mobile">
              <img src="/images/HigherMobile.png" alt="Higher" />
            </div>
          </div>
          <div className="advanceRight">
            <Higher />
          </div>
        </div>
      </section>

      <section className="testimony">
        <div className="container">
          <div className="testimonyLeft">
            <h2 className="titleSection">
              Nosso compromisso é com seu resultado
            </h2>
            <p className="paragraph">
              <strong>Os depoimentos a seguir são de alunos do GoStack.</strong>
            </p>
          </div>
          <div className="testimonyRight">
            <TestimoniesSlide testimonies={Data.testimonies} />
          </div>
        </div>
      </section>

      <section className="testimonyVideo">
        <div className="container">
          <ul className="testimonyVideoContent">
            {Data.testimonyVideos.map((props, index) => (
              <li key={index}>
                <div className="video">
                  <iframe
                    src={props.videoUrl}
                    frameBorder="0"
                    title={`${props.testimonyName} - Depoimento GoStack`}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <h3 className="subTitleSection">{props.testimonyName}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="warning">
        <div className="container">
          <Warning />
          <div className="warningBackground">
            <h2>Esse não é um programa para iniciantes.</h2>
            <p className="paragraph">
              Se você ainda não domina os fundamentos do desenvolvimento web,
              comece de graça pelo Discover
            </p>
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="container">
          <div className="summaryLeft">
            <h2 className="titleSection">Benefícios do Ignite</h2>
          </div>
          <ul className="summaryRight">
            <li>
              <Check />
              <div>Conteúdo super atualizado</div>
            </li>
            <li>
              <Check />
              <div>Certificado reconhecido</div>
            </li>
            <li>
              <div>
                Conteúdo de
                <br /> soft skills
              </div>
            </li>
            <li>
              <Check />
              <div>Currículo alinhado com o mercado</div>
            </li>
            <li>
              <Check />
              <div>Grupo exclusivo</div>
            </li>
            <li>
              <Check />
              <div>Conteúdo prático</div>
            </li>
            <li>
              <Check />
              <div>Direto ao ponto e do jeito certo</div>
            </li>
            <li>
              <Check />
              <div>Suporte exclusivo no fórum</div>
            </li>
            <li>
              <Check />
              <div>Desafios práticos</div>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  )
}
export default App
