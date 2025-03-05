const Leftbtn = document.getElementById('left_button')
const Rightbtn = document.getElementById('right_button')
const Imagelink = document.getElementById('image_link')
const authorName = document.getElementById('author')
const Desig = document.getElementById('designation')
const Para = document.getElementById('info')
Datafth = async()=>
{
    try
    {
        const response = await fetch('./reviews.json');
        const Data = await response.json();
        console.log(Data)
        return Data;

    }  
    catch(error)
    {
        console.log(  'error occured ',error);
    }
}

Datafth().then((Data) =>
{

    let i=0;
    
    if(Data)
    {
        Rightbtn.addEventListener('click',()=>
            {

                if(i<Data.length-1)
                {
                    console.log(Data[i].name)
                    Imagelink.src = Data[i].img;
                    authorName.innerText = Data[i].name
                    Desig.innerText = Data[i].job
                    Para.innerText = Data[i].text
                    i+=1;

                }
                else
                {
                    console.log("last review")
                }
            })
            

        Leftbtn.addEventListener('click', ()=>
        {

            if(i>0)
            {

            console.log(Data[i].name)
            Imagelink.src = Data[i].img;
            authorName.innerText = Data[i].name
            Desig.innerText = Data[i].job
            Para.innerText = Data[i].text
            i-=1;

            }
            
        })
       
    }
}
);





