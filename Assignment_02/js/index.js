/*Add the JavaScript code needed to enable auto-complete on this form. Whenever the checkbox is checked, the code should automatically copy the values from Shipping Name and Shipping Zip into the Billing Name and Billing Zip. If the checkbox is unchecked, the Billing Name and Billing Zip should go blank. */

 function billingFunction(){
    if (document.getElementById('same').checked){
      document.getElementById('billingName').value = document.getElementById('shippingName').value;
      document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
    }else{
      document.getElementById('billingName').value = '';
      document.getElementById('billingZip').value =  '';
    }
  }