let score = 0;
let level = 1;
function main()
{
    setScore();

    change_images();
    document.getElementById("bar").style.width = score+"%";
    document.getElementById("bar").innerText = score+"%";
}

function setScore()
{

    switch (level)
    {
        case 1:
            score = score+20;
        break;
        case 2:
            score = score+10;
            break;
        case 3:
            score = score+5;
            break;
        case 4:
            score = score+2.5;
            break;
        case 5:
            score = score+1;
            break;
        case 6:
            score = score+0.5;
            break;
        case 7:
            score = score+0.2;
            break;
        case 8:
            score = score+0.1;
            break;

    }

   // level(score);
    for (let i=1;i<=8;i++)
    {
        if (score > 100 && level===i)
        {
            score = 0;
            level++;
        }
    }


}

function change_images()
{
    switch (level)
    {
        case 2:
            document.getElementById("charging_battery_photo").src = "clicker_photo/2.png";

            break;
        case 3:
            document.getElementById("charging_battery_photo").src = "clicker_photo/3.png";

            break;
        case 4:
            document.getElementById("charging_battery_photo").src = "clicker_photo/4.png";

            break;
        case 5:
            document.getElementById("charging_battery_photo").src = "clicker_photo/5.png";

            break;
        case 6:
            document.getElementById("charging_battery_photo").src = "clicker_photo/6.png";

            break;
        case 7:
            document.getElementById("charging_battery_photo").src = "clicker_photo/7.png";

            break;
        case 8:
            document.getElementById("charging_battery_photo").src = "clicker_photo/8.png";

            break;
    }
}

