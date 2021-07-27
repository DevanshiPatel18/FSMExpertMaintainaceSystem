import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{paddingTop:'2em'}} >
         <footer class="footer" style={{     textAlign: "right"}} >
                  <div class="container-fluid">
                    
                    <p class="copyright pull-right">
                 
                        <script>
                          document.write(new Date().getFullYear());
                        </script>
                      Developed By <a href="http://iafsm.in/">IITD-AIA Foundation for
                      Smart Manufacturing</a>
                    </p>
                  </div>
                </footer>
      </div>
    )
  }
}
