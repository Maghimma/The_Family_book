var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Maghimma.jpg", "Meghna.jpg" , "Isvarya.jpg", "Ommsharravana.jpg", "Sendamaarai.jpg"];
var names = ["Family Book","S.O.Maghimma", "Meghna.S.O", "Isvarya Lakshmi", "S.Ommsharravana", "N.Sendamaarai"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName =  names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
