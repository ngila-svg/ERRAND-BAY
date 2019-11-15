function Quotation(services, errand, firstName, secondName, email, phone){
    this.services = services
    this.errand = errand
    this.firstName = firstName
    this.secondName = secondName
    this.email = email
    this.phone = phone
}
Quotation.prototype.listItems = function(){
    return this.services + "," + this.errand+ "" +this.firstName+ "" +this.secondName+ "" + this.email+ "" +this.phone
}
$(function(){
    
    $("#button_1").click(function(e){
        e.preventDefault()
        var servicesInput = $("#select1 option:selected").value
        
        var errandInput = $("#select2 option:selected").value
        
        var firstNameInput = $("#first-name").value
        
        var secondNameInput = $("#second-name").value
        
        var emailInput = $("#email").value
        
        var phoneInput = $("#phone").value
    
        var quotationTwo = new Quotation(servicesInput, errandInput, firstNameInput, secondNameInput, emailInput, phoneInput)
        quotationTwo.listItems()
        $("#displayService").show()
        $("#displayErrand").show(quotationTwo.errandInput)
        $("#displayFirstName").show(quotationTwo.firstNameInput)
        $("#displaySecondName").show(quotationTwo.secondName)
        $("#displayEmail").show(quotationTwo.emailInput)
        $("#displayPhone").show(quotationTwo.phoneInput)          
 
    })

//user interface logic
 $(document).ready(function(){

      $("form#myForm").submit(function(event) {
        var email= $("#email").val();
        alert("Thank you "+email+" for subscribing to Errand bay newsletter.Check your inbox for exclusive offers");
        event.preventDefault();
      });
      
      //our team
    $("#image1").mouseenter(function(){
      $("#text1").show();
    }).mouseleave(function(){
      $("#text1").hide();
    })

    $("#image2").mouseenter(function(){
        $("#text2").show();
      }).mouseleave(function(){
        $("#text2").hide();
      })

      $("#image3").mouseenter(function(){
        $("#text3").show();
      }).mouseleave(function(){
        $("#text3").hide();
      })

      $("#image4").mouseenter(function(){
        $("#text4").show();
      }).mouseleave(function(){
        $("#text4").hide();
      })

})