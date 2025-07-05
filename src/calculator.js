function add(num)
{
    let ans=0; 
    if(num=="" || num==" ")
    {
        return ans;
    }
    let negativeNum=[];let delimiters=[];
    if(num.startsWith("//"))
    {
        const parts=num.split("\n");
        num=parts.slice(1).join("\n");
        //console.log(num);
        temp=parts[0].substring(2);
        let g="";
        for(t in temp)
        {
            if(temp[t]=="[")
            {
                g="";
            }
            else if(temp[t]=="]")
            {
                delimiters.push(g);
                g="";
            }
            else
            {
                g=g+temp[t];
            }
        }
    }
    delimiters.push("\n");
    //console.log(delimiters);
    if(delimiters.some(delim=>num.includes(delim)))
    {
        for(let t of delimiters)
        {

            num=num.replaceAll(t,',');
            //console.log("ans"+num);
        }
    }

    temp=num.split(",");

    for(t in temp)
    {
        if(isNaN(temp[t]))
        {
            throw new Error("Non-numeric number present");
        }
        number=parseInt(temp[t]);
        if(number>=1000)
        {
            continue;
        }
        //console.log(number);
        if(number<0)
        {
            negativeNum.push(number);
        }
        else
        {
            ans+=number;
        }
    }
    //console.log(ans);
        
    if(negativeNum.length>0)
    {
        throw new Error("negative numbers not allowed "+negativeNum.join(","));
    }
    return ans;
}

let testCases=["1,2\n3,4",
    "",
    "1,2,3,4",
    "1000,2\n3",
    "//[,][;]\n1;2\n3,4",
    "//[***]\n1***2***3",
    "//[*][%]\n1*2%3",
    "//[**][%%]\n1**2%%3",
    "-1,2,-3,4",
    "//[$]\n745$6",
    "//[$]\n74&4",
    " "];

for(ele of testCases)
{
    try{
        console.log(add(ele));
    }
    catch(err)
    {
        console.error(err);
    }
}

module.exports=add;