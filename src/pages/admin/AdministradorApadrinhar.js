import React, { Component } from 'react';
import './NavbarAdm.js'
import './SlidebarAdm.js'
import NavbarAdm from "./NavbarAdm";
import SlidebarAdm from './SlidebarAdm';




class AdministradorApadrinhar extends Component {
  render() {
    return (

      <div>

        <NavbarAdm />

        <SlidebarAdm />

        <section class="dashboard-section-indicadores">
          {/* <!--for demo wrap--> */}
          <h1>Indicadores</h1>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>Comunidade</th>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Categoria</th>
                  <th>E-mail</th>
                  <th>Texto</th>
                  <th> <img class="logo-check" src="img/logo.png" alt="" /> </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates, sed commodi enim facere labore, quos mollitia fuga minus distinctio a! Ipsa necessitatibus eveniet suscipit, culpa nihil quasi accusamus quam!</td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>lorem</td>
                  <td>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae vel enim quod voluptatum molestiae possimus sed? Nisi facilis tempora corrupti sapiente maiores laboriosam, voluptatibus, necessitatibus fugit adipisci officiis illo!
                          </td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>+2.01</td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>+2.01</td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>+2.01</td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>+2.01</td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae ducimus laborum recusandae temporibus provident nobis amet earum doloremque consectetur minima, rerum placeat sed, magnam eveniet illum impedit, molestiae harum?
                          </td>
                  <td>
                    <button class="btnApadrinhar" >
                      apadrinhar
                    </button>
                    <button class="btnEmail" >
                      e-mail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


      </div>
    );
  }
}

export default AdministradorApadrinhar;