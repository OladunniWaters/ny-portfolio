import './Footer.scss'

function Footer() {

  return (
    <div className="Footer">
       <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1">FIGMA LAND</h5>
                    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">OladunniWaters</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class=" mb-3">Quick links</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">Home</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">About</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">Get started</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">Home</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">About</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">Get started</a></li>
                        <li><a href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" id="button-addon2" type="button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer