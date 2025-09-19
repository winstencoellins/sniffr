export default function TransactionDetail() {
    return (
        <>
            <h1 className="text-2xl">Transaction Details</h1>

            <form className="my-5">
                <div className="bg-black/50 px-3 py-5 rounded-xl">
                    <div>
                        <h5 className="text-sm">Transaction ID:</h5>
                        <p className="font-semibold">asdfghjkl</p>
                    </div>

                    <hr className="border-dotted my-5" />

                    <div>
                        <h5 className="text-sm">From:</h5>
                        <p className="font-semibold">Winsten Coellins</p>
                    </div>

                    <hr className="border-dotted my-5" />

                    <div>
                        <h5 className="text-sm">To:</h5>
                        <p className="font-semibold">Xhelinskii Chanaka</p>
                    </div>

                    <hr className="border-dotted my-5" />

                    <div>
                        <h5 className="text-sm">Requested On:</h5>
                        <p className="font-semibold">Date Time</p>
                    </div>

                    <hr className="border-dotted my-3" />

                    <div>
                        <h5 className="text-sm">Description:</h5>
                        <p className="font-semibold">ASDFGHJKL</p>
                    </div>
                </div>

                <div>
                    {/* <button className="bg-red-500 text-white rounded-xl w-full py-3 mt-10">Cancel Transaction</button> */}
                    <div className="flex justify-between items-center">
                        <button className="bg-black text-white rounded-xl w-full py-3 mt-10 mr-5">Complete Transaction</button>
                        <button className="bg-red-500 text-white rounded-xl w-full py-3 mt-10">Reject Transaction</button>
                    </div>
                </div>

            </form>
        </>
    )
}