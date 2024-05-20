
//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import { useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar" 
//import Olympic_soeun from "./Olympic_soeun"

//


export default function Olympic_consult(){
    return (
      
        <div className="card card2" id="box-1">
          <SecondNavBar/>
          <div id="content-consult" className="center">
            <div className="card text-center" style={{width:"900px"}}>
              <div className="card-header">
                <img src="./img/pin.png" style={{width: "25px"}}></img>
              </div>

              <div className="card-body">
                <h5 className="card-title">상담 매뉴얼</h5>
                <p className="card-text">계명대학교 학생들은 Edward 시스템에서 일괄적으로 상담신청이 가능합니다.</p>
                <br></br>

                <div className="accordion" id="accordionExample">

                  {/*1. 상담신청 버튼*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        상담신청하는법
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong><mark>(1) edward 시스템 접속 - 학사행정 - 상담 - 상담신청 - 통합상담신청</mark></strong><br></br>
                        교직원상담을 누른 후 오른쪽의 상담입력 버튼으로 상담신청 버튼 추가<br></br><br></br>
                        <img src="./img/edward3.png" style={{width: "800px;"}}></img><br></br><br></br><hr></hr>
                        <strong><mark>(2) 상담신청상세</mark></strong><br></br>
                          상담교직원, 상담요청일자, 상담요청시각, 상담영역 입력 및 개인정보열람 동의 후 상담저장<br></br>
                          <small>상담교직원 선택 후 출력되는 교수시간표를 참고하여 상담요청시각을 선택하세요!</small>
                        <img src="./img/edward4.png" style={{width: "800px"}}></img><br></br><br></br><hr></hr>
                      </div>
                    </div>
                  </div>

                  {/*2. 자주하는 질문 버튼*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        자주하는 질문
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>Q 상담하러 가는데 음료수라도 사가야 하나요?</strong> 
                        <p>A 빈손으로 가셔도 됩니다.</p>
                        <strong>Q 에드워드로 상담 신청을 했는데 신청 날짜에 그냥 가면 되나요?</strong>
                        <p>별도의 연락이 없으면 신청하신 날에 맞춰서 가시면 됩니다.</p>
                        <strong>Q 상담신청했는데 어디로 가면 되나요?</strong>
                        <p>A 에드워드에 기재되어 있는 교수님 연구실로 가시면 됩니다.</p>
                      </div>
                    </div>
                  </div>

                  {/*3. 상담후기 버튼 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        상담후기
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{textAlign : "left"} } data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="comment">
                          {/*댓글테이블*/}
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col" className="col-no">No.</th>
                                <th scope="col" className="col-name">이름</th>
                                <th scope="col" className="col=date">날짜</th>
                                <th scope="col">내용</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>김철수</td>
                                <td>21.05.31</td>
                                <td>
                                  <a href="#" className="btn btn-outline-secondary name">주홍택</a>&nbsp;
                                  대학원 관심 있어서 갔는데 연구실에서 뭐하는지 자세하게 알려주셔서 좋았어요 &nbsp;
                                  <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                  <i className="bi bi-trash3-fill on-red"></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>이훈이</td>
                                <td>24.01.15</td>
                                <td>
                                  <a href="#" className="btn btn-outline-secondary name">고병철</a>&nbsp;
                                  대진설 과제 때문에 갔는데 15분 정도했고 준비는 딱히 안해가도 됨.&nbsp;
                                  <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                  <i className="bi bi-trash3-fill on-red"></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>맹구</td>
                                <td>24.5.14</td>
                                <td>
                                  <a href="#" className="btn btn-outline-secondary name">남재열</a>&nbsp;
                                  상담신청 따로 안하고 아무때나 가도 친절하게 맞아주세요&nbsp;
                                  <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                  <i className="bi bi-trash3-fill on-red"></i></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>
        </div>
   
    
    )
}