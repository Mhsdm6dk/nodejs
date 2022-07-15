import React from 'react'
import styles from './styles.module.css';
function MyRecord() {
    return (
        <div className={styles.MyRecordBox}>
            <div className={styles.listRecordBoxWrapper}>
                <div className={styles.listRecordBox}>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>
                                <div >
                                    <div className=''>
                                        BODY RECORD
                                    </div>
                                    <div className=''>
                                        自分のカラダの記録
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRecord
