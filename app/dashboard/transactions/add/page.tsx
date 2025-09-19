export default function AddTransactions() {
    return (
        <>
            <h1 className="text-2xl">Request Money</h1>

            <form className="my-5">
                <div>
                    <label>Request From</label>
                    <input placeholder="Enter friend's name" className="bg-black/50 px-3 py-2 w-full rounded-xl mt-2"/>

                    <div>
                        <div className="flex my-5 items-center bg-black/75 py-5 px-3 rounded-xl justify-between">
                            <p>Xhelinskii Sandaugh Chanaka</p>

                            <button>Select</button>
                        </div>
                    </div>
                </div>

                <div>
                    <label>Amount</label>
                    <input type="number" className="bg-black/50 px-3 py-2 w-full rounded-xl mt-2" placeholder="20000" />
                </div>

                <button className="bg-white text-black rounded-xl w-full py-3 mt-10">Send Request</button>
            </form>
        </>
    )
}