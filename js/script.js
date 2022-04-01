

var btn_side = document.getElementById("btn_side");
var btn_modal = document.getElementById("btn_modal");
var sidebar = document.getElementById("sidebar");
var modal = document.getElementById("modal");

function ShowSidebar()
{
   var compstyles = window.getComputedStyle(sidebar);

   if(compstyles.getPropertyValue('left') == '-226.5px')
   {
        sidebar.style.animationName = 'showsidebar';
        sidebar.style.left = '0px';

   }else
   {
    sidebar.style.animationName = 'hidesidebar';
    sidebar.style.left = '-226.5px';
   }
   
}

btn_side.addEventListener("click", ShowSidebar);

function ShowModal()
{
   var compstyles = window.getComputedStyle(modal);
   
   if(compstyles.getPropertyValue('top') == '-896px')
   {
        modal.style.animationName = 'showmodal';
        modal.style.top = '-512px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
        
   }else
   {
    modal.style.animationName = 'hidemodal';
    modal.style.top = '-896px';
    document.body.style.backgroundColor = '';
   }
   
}

btn_modal.addEventListener("click", ShowModal);
