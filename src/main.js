import { Component } from './component';

export class Main extends Component {
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <div class="container">
   
    <main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          <ul class="series-list">
           
              <ul class="score">
               
               
               
            
               
              </ul>
             
             
              
               
               
              
              </ul>
            
            
             
               
              </ul>
           
           
              <ul class="score">
              
               
              </ul>
           
          </ul>
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched 4 series</p>
          <!--<p class="info">You already have not watched any serie</p>-->
          <ul class="series-list series-list--watched">
          
              <ul class="score">
              
              
              
              </ul>
            
              <ul class="score">
              
               
              </ul>
            
              <ul class="score">
            
              </ul>
           
              <ul class="score">
              
                
              </ul>
             
          </ul>
        </section>
      </section>
    </main>
  </div>
    `;
  }
}
