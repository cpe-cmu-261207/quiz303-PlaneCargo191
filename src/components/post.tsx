import Comment from './comment'

const Post = () => {
    return (
        <div className="p-2">
            {/* post container */}
            <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

                {/* ส่วนของเจ้าของ post */}
                <div className="space-y-2">

                    {/* image and name */}
                    <div className="flex space-x-2 items-center">
                    <img className="w-12 h-12 rounded-full" src="/profileImages/DSC_0008.jpg"></img>
                    <span className='font-semibold text-lg'>Thanakorn Chaininphun 620610790</span>
                    </div>

                    {/* status message */}
                    <p>
                    Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม Code มีแต่เส้นขีดข้างใต้สีแดง 555<br/>
                    JSX element implicitly has type 'any' because no interface 'JSX.InstrinsicElements' exist. #261207
                    </p>

                    {/* like section */}
                    <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>48 คน</p>
                    </div>

                </div>

                {/* comments section */}
                <Comment/>
            </div>
        </div>
    )
}

export default Post