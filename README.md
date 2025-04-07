<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Haven Vehicles</title>
    
    <link rel="stylesheet" href="starhavenstyle.css">
    <link rel="stylesheet" href="star.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="validation2.js"></script>
</head>
<body>

<nav class="navbar">
        <section class="nav-left">
        </section>
        <section class="nav-middle">
            <input type="text" placeholder="Search...">
            <button class="search-btn">🔍</button>
        </section>
        <section class="nav-right">
			<a href="index.html">HOME</a>
			<a href="inv.html">INVENTORY</a>
			<a href="contact.html">CONTACT</a>
			<a href="aboutpage.html">ABOUT US</a>
		</section>
    </nav>


    <section class="main-content">
        <section class="logo">
            <a href="main.html"></a>
        </section> 
        <section class="section2">
            <section class="main-img-display">
                <h1>TOYOTA CARS</h1>
                <section class="m"> 
                    <section class="Toyota">
                        <img src="productimages/Cars information for website/Toyota/Cars/Corolla 2025, Red.webp" height="100px" width="100px">
                        <h3> Corolla </h3>
                        <p><strong>Year:</strong> 2025</p>
                        <p><strong>Class:</strong> Compact Sedan</p>
                        <p><strong>Color:</strong> Red</p>
                        <p><strong>Price:</strong> $24,000 (JMD 3,672,000)</p>
                        <p> A stylish and fuel-efficient compact sedan known for its affordability and reliability.</p>
                    </section>
                </section>
            </section>
        </section>
    </section> 
    
    <hr>


<form method="post" onsubmit="return validateform()">   
 <section class="c"> 
        <section class="section2">
            <section class="main-img-display">
                <h1 class="text-center">Customer Information</h1>
                <section>
                    <label for="name" class="form-label">Full Name:</label> 
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Name"> 
		    <label id="nameerror" style="color:red"></label>  
                </section>
                <section>
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email">
		    <label id="emailerror" style="color:red"></label>   
                </section>
                <section>
                    <label for="phone" class="form-label">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" class="form-control" placeholder="Enter your phone number">
		    <label id="phoneerror" style="color:red"></label>
                </section>
                <label for="address" class="form-label mt-3">Address:</label>
                <textarea id="address" name="address" class="form-control" placeholder="Enter your address" rows="3"></textarea>
		<label id="addresserror" style="color:red"></label>
            </section>
        </section>

        <hr>

        <section class="payment-options">
            <h1 class="text-center">Payment</h1>
            <section>
                <label for="payment-method" class="form-label">Payment Method:</label>
                <select id="payment-method" name="payment-method" class="form-select">
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                </select>
                <section class="credit-card-details">
                    <label for="card-number" class="form-label">Card Number:</label>
                    <input type="text" id="card-number" name="card-number" class="form-control" placeholder="1234 5678 9012 3456">
		    <label id="cardnumbererror" style="color:red"></label>
		    <br>
                    
                    <label for="expiry-date" class="form-label">Expiry Date:</label>
                    <input type="text" id="expiry-date" name="expiry-date" class="form-control" placeholder="MM/YY">
		    <label id="dateerror" style="color:red"></label>
		    <br>
                    
                    <label for="cvv" class="form-label">CVV:</label>
                    <input type="text" id="cvv" name="cvv" class="form-control" placeholder="123">
		    <label id="cvverror" style="color:red"></label>
                </section>
            </section>
        </section>
        <br>
        <button type="submit" class="submit-btn2" formaction="thankyou.html">Submit</button>

    </section>
</form>
	<footer class = "footer-container">
        <section class = "footer-content">
            <section class = "footer-column">
                <h3>INVENTORY</h3>
                <p>
                <a href="toyotapage.html">Toyota</a>
                </p>
                <p>
                    <a href="nissanpage.html">Nissan</a>
                </p>
                <p><a href="bmwpage.html">BMW</a></p>
                
            
            </section>
            <section class = "footer-column">
                <h3>CONTACT US</h3>
                <p>26 Halfway Tree</p>
                <p>Kingston Jamaica</p>
                <p>1-876-234-9708</p>
                <p>starhaven@gmail.com</p>
            </section>
            <section class = "footer-column">
                <h3>SEND US A MESSAGE</h3>
                <p><a href="contact.html">Contact</a></p>
                <p><a href="form.html">Register</a></p>
            </section>
        </section>
        <section class="footer-h3">
            <p>STAR HAVEN</p>
        </section>
			<script>
				$(document).ready(function(){
					$(".nav-right").hide();
					$(".nav-right").fadeIn(500) ;
					$(".company-name").hide();
					$(".company-name").fadeIn(500) ;
					$("footer").animate({left : '200px'}, ) ;
					$("main").slideDown(8000);
	
				} );

	
			</script>
	</footer>

</body>
</html>
