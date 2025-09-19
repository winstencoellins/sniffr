export default function Transactions() {
    return (
        <>
            <h1 className="text-2xl">Transactions History</h1>

            <div className="my-5">
                <div className="bg-black/75 py-5 px-3 flex justify-between rounded-xl">
                    {/* Image */}
                    <div>
                        <h3>Bill description</h3>
                        <p className="text-xs mt-1">04 Aug, 2025</p>
                    </div>

                    <div className="text-right">
                        <p>Rp. 100,000</p>
                        <p className="text-xs mt-1">Sender name</p>
                    </div>
                </div>
            </div>
        </>
    )
}