
export default function Footer({ completedTaskCount = 1, activeTaskCount = 1}) {
    return (
        <>
            {completedTaskCount + activeTaskCount > 0 && (
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">

                        {completedTaskCount > 0
                            ? `Mày đã hoàn thành ${completedTaskCount} việc`
                            : `Còn ${activeTaskCount} chưa làm đó con chó`}

                    </p>
                </div>
            )}

        </>
    )
}
