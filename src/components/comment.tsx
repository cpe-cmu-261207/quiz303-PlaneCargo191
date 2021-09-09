import Reply from "./reply"

const Comment = () => {
    return (
        <div className="">
            {/* normal comment */}
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">Lisa</p>
                    <p>ตัวอย่าง Template จ้า</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>999 คน</p>
                    </div>
                </div>
            </div>

                    {/* replies */}
                    {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
                    <Reply/>
                </div>
    )
}

export default Comment