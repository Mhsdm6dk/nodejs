import React from 'react'
import styles from './styles.module.css';
import my1 from '../../image/my1.png';
import my2 from '../../image/my2.png';
import my3 from '../../image/my3.png';
import graph_background from '../../image/graph_background.png';
import graph1 from '../../image/graph1.png';
import graph2 from '../../image/graph2.png';
import graph_number from '../../image/graph_number.png';
function MyRecord() {
    return (
        <div className={styles.MyRecordBox}>
            <div className={styles.listRecordBoxWrapper}>
                <div className={styles.listRecordBox}>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>
                                <div className={styles.recordButtonBox}>
                                    <div className={styles.recordButtonContent}>
                                        BODY RECORD
                                    </div>
                                    <div className={styles.recordButton}>
                                        自分のカラダの記録
                                    </div>
                                </div>
                                <img src={my1} className={styles.recordImage} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>
                                <div className={styles.recordButtonBox}>
                                    <div className={styles.recordButtonContent}>
                                        MY EXERCISE
                                    </div>
                                    <div className={styles.recordButton}>
                                        自分の運動の記録
                                    </div>
                                </div>
                                <img src={my2} className={styles.recordImage} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.recordBoxB}>
                        <div className={styles.recordBox}>
                            <div className={styles.record}>
                                <div className={styles.recordButtonBox}>
                                    <div className={styles.recordButtonContent}>
                                        MY DIARY
                                    </div>
                                    <div className={styles.recordButton}>
                                        自分の日記
                                    </div>
                                </div>
                                <img src={my3} className={styles.recordImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.graphBoxWrapper}>
                <div className={styles.graphBox}>
                    <div className={styles.grapHeader}>
                        <div className={styles.grapHeaderName}>
                            BODY RECORD
                        </div>
                        <div className={styles.grapHeaderDate}>
                            2021.05.21
                        </div>
                    </div>
                    <div className={styles.graphBodyWrapper}>
                        <div className={styles.graphBody}>
                            <img className={styles.graph_background} src={graph_background} />
                            <img className={styles.graph_image} src={graph2} />
                            <img className={styles.graph_image} src={graph1} />
                            <img className={styles.graph_number} src={graph_number} />
                        </div>

                    </div>
                    <div className={styles.graphBodyFooter}>
                        <div className={styles.listGraphButton}>
                            <div className={styles.graphButtonBox}>
                                <div className={styles.graphButton}>
                                    日
                                </div>
                            </div>
                            <div className={styles.graphButtonBox}>
                                <div className={styles.graphButton}>
                                    日
                                </div>
                            </div>
                            <div className={styles.graphButtonBox}>
                                <div className={styles.graphButton}>
                                    日
                                </div>
                            </div>
                            <div className={styles.graphButtonBox + " " + styles.choose}>
                                <div className={styles.graphButton}>
                                    日
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.graphBoxWrapper}>
                <div className={styles.graphBox}>
                    <div className={styles.grapHeader}>
                        <div className={styles.grapHeaderName}>
                            MY EXERCISE
                        </div>
                        <div className={styles.grapHeaderDate}>
                            2021.05.21
                        </div>
                    </div>
                    <div className={styles.exerciseBody}>
                        <div className={styles.listContentBox}>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>
                            <div className={styles.contentBoxWrapper}>
                                <div className={styles.contentBox}>
                                    <div className={styles.contentLeft}>
                                        <li className={styles.contentLeftName}>

                                            家事全般（立位・軽い）

                                            <div className={styles.contentLeft_number}>
                                                26kcal
                                            </div>
                                        </li>
                                    </div>
                                    <div className={styles.contentRight}>
                                        10 min
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.myDiary}>
                <div className={styles.myDiaryHeadding}>MY DIARY</div>
                <div className={styles.diaryListBox}>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                    <div className={styles.diaryBox}>
                        <div className={styles.diary}>
                            <div className={styles.diaryTime}>
                                2021.05.21
                                <br />
                                23:25
                            </div>
                            <div className={styles.diaryContent}>
                                私の日記の記録が一部表示されます。
                                <br />
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body_buttonBox}>
                <div className={styles.body_button}>自分の日記をもっと見る</div>
            </div>
        </div>
    )
}

export default MyRecord
