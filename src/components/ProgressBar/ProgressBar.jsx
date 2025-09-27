import v1 from '../../assets/vector1.png'
import vf1 from '../../assets/vector1_flipped.png'
import v2 from '../../assets/vector2.png'
const ProgressBar = ({inProgress, resolved}) => {

    return(
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row m-20 gap-7 text-white mb-10">
            <div className="w-full bg-no-repeat bg-contain mx-3 md:mx-0 p-4 h-[200px] rounded-lg text-xl flex flex-col justify-center items-center"
            style={{
            backgroundImage: `linear-gradient(to right, #632EE3, #9F62F2), url(${vf1}), url(${v1})`,
            backgroundBlendMode: `screen`,
            backgroundPosition: `left, right`
            }}>
            In progress <p  className='text-5xl font-semibold'>{inProgress.length}</p>
            </div>
            <div className='mx-3 md:mx-0 w-full bg-no-repeat bg-contain rounded-lg p-4 h-[200px] text-xl flex flex-col justify-center items-center' style={{
            backgroundImage: `linear-gradient(to right, #54CF68, #00827A), url(${vf1}), url(${v1})`,
            backgroundBlendMode: `screen`,
            backgroundPosition: `left, right`
            }}>
                Resolved <p  className='text-5xl font-semibold'>{resolved.length}</p>
            </div>
        </div>
    )
}

export default ProgressBar