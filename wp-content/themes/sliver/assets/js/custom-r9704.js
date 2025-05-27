jQuery(document).ready(function($) {
    $('.filter-toggle').on('click', function() {
        $('.product-filter').slideToggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() { 
      if (jQuery('#feedbackModal').length) {
            var modal = document.getElementById("feedbackModal");
            var modalImage = document.getElementById("modal-image");
            var modalName = document.getElementById("modal-name");
            var modalDesignation = document.getElementById("modal-designation");
            var modalInfo = document.getElementById("modal-info");
            var closeModal = document.getElementsByClassName("close")[0];
        
            document.querySelectorAll('.read-more-popup').forEach(function(button) {
                button.addEventListener('click', function() {
                    var image = this.getAttribute('data-image');
                    var name = this.getAttribute('data-name');
                    var designation = this.getAttribute('data-designation');
                    var info = this.getAttribute('data-info');
        
                    modalImage.src = image;
                    modalName.textContent = name;
                    modalDesignation.textContent = designation;
                    modalInfo.innerHTML = info;
        
                    modal.style.display = "block";
                });
            });
        
            closeModal.onclick = function() {
                modal.style.display = "none";
            }
        
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
          
      }
});



