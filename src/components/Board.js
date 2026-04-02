// TreeBoard.js (답글 기능 추가)
import React, { useState } from 'react';
import { Button, Table, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TreeBoard = () => {
    const navigate = useNavigate(); // <- 여기서 정의
    const [boardList, setBoardList] = useState([
        { no: "1", title: '트리는 어떻게 배송이 되나요?', description: '직접 설치해야 하는건지 궁금해요', viewCount: 1, replies: [] ,password: '1234'},
        { no: "2", title: '오너먼트 개별추가 주문하고싶어요', description: '세트보다 더 화려하게 꾸미고 싶어요', viewCount: 2, replies: [] ,password: '1234' },
        { no: "3", title: '오너먼트 색상이 화면에서 보던거랑 달라요', description: '화면에서 보던 색상과 다릅니다', viewCount: 1, replies: [] ,password: '1234' },
        { no: "4", title: '트리 받침대 이상', description: '교환 또는 환불 문의', viewCount: 1, replies: []  }
    ]);

    const [listOk, setListOk] = useState(true);
    const [readOk, setReadOk] = useState(false);
    const [writeOk, setWriteOk] = useState(false);
    const [editOk, setEditOk] = useState(false);
    const [boardInfo, setBoardInfo] = useState({});
    const [password, setPassword] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [editNo, setEditNo] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // **답글 상태**
    const [replyText, setReplyText] = useState('');

    const boardListView = () => {
        setListOk(true);
        setReadOk(false);
        setWriteOk(false);
        setEditOk(false);
    };

    const boardRead = (no) => {
        const selectedBoard = boardList.find(b => b.no === no);
        if (!selectedBoard) return;

        setBoardInfo(selectedBoard);
        setListOk(false);
        setReadOk(true);
        setWriteOk(false);
        setEditOk(false);

        // 조회수 증가
        setBoardList(boardList.map(b =>
        b.no === no ? { ...b, viewCount: b.viewCount + 1 } : b
        ));
    };

    const boardWrite = () => {
        setListOk(false);
        setWriteOk(true);
    };

    const boardSave = () => {
        if (!title.trim() || !description.trim()) {
        setErrorMessage('제목과 내용을 모두 입력해주세요!');
        return;
        }

        const newBoard = {
        no: (boardList.length + 1).toString(),
        title,
        description,
        viewCount: 0,
        replies: []
        };

        setBoardList([...boardList, newBoard]);
        setTitle('');
        setDescription('');
        setErrorMessage('');
        boardListView();
    };

    const boardDelete = (no) => {
        setBoardList(boardList.filter(b => b.no !== no));
        boardListView();
    };

    const boardEdit = (no) => {
        const b = boardList.find(b => b.no === no);
        if (!b) return;

        setEditNo(b.no);
        setEditTitle(b.title);
        setEditDescription(b.description);
        setEditOk(true);
        setListOk(false);
        setReadOk(false);
        setWriteOk(false);
    };

    const updateBoard = () => {
        setBoardList(boardList.map(b =>
        b.no === editNo ? { ...b, title: editTitle, description: editDescription } : b
        ));
        boardListView();
    };

    // **답글 저장**
    const addReply = () => {
        if (!replyText.trim()) return;
        const updatedList = boardList.map(b => {
        if (b.no === boardInfo.no) {
            return { ...b, replies: [...b.replies, replyText] };
        }
        return b;
        });
        setBoardList(updatedList);
        setBoardInfo({ ...boardInfo, replies: [...boardInfo.replies, replyText] });
        setReplyText('');
    };

    return (
        <div className="container mt-5">
            <h3>📋 트리농장 게시판</h3>
        
        {/* 목록 */}
        {listOk && (
            <div className="mt-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>조회수</th>
                </tr>
                </thead>
                
                <tbody>
                {boardList.slice().reverse().map(b => (
                    <tr key={b.no}>
                    <td>{b.no}</td>
                    <td style={{ cursor: 'pointer' }} onClick={() => boardRead(b.no)}>{b.title}</td>
                    <td style={{ cursor: 'pointer' }} onClick={() => boardRead(b.no)}>{b.description}</td>
                    <td>{b.viewCount}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
                <div>
                <Button variant="success"  onClick={() => navigate(-1)}
                    style={{ marginRight: "10px" }} // 버튼 사이 간격
                >이전 페이지</Button>
                <Button variant="secondary" onClick={boardWrite}>
                    글쓰기</Button>
                </div>
            
            </div>
        )}

        {/* 읽기 */}
        {readOk && (
  <div className="mt-3">
    <h5>{boardInfo.title}</h5>
    <hr />
    <p>{boardInfo.description}</p>

    {/* 답글과 실선 사이 공간 */}
    <div style={{ height: "20px" }}></div> {/* 답글과 실선 사이 공간 */}

    {/* 실선 추가 */}
    <hr style={{ border: "none", height: "1px", backgroundcolor: "#6c757d" , marginBottom: "50px" }} />

    {/* 목록으로 가기와 삭제하기 버튼 */}
    <div className="mt-2" style={{ marginBottom: "50px" }}>
        <Button className="me-2" variant="light" onClick={boardListView} style={{ marginBottom: "10px" }}>목록으로 가기</Button>
        <Button 
            variant="danger" 
            onClick={() => {
            const inputPw = window.prompt("삭제하려면 비밀번호를 입력해주세요:");
            if (inputPw === null) return; // 취소 클릭 시 종료
            if (inputPw === boardInfo.password) {
                if (window.confirm("정말 삭제하시겠습니까?")) {
                boardDelete(boardInfo.no);
                boardListView();
                }
            } else {
                alert("비밀번호가 일치하지 않습니다!");
            }
            }}
            style={{ marginBottom: "10px" }} // 삭제 버튼 아래 간격 추가
        >
            삭제하기
        </Button>
        </div>

        {/* 답글 목록 */}
        <div className="mt-3">
        <Form.Group style={{ textAlign: "left" }}>
            <Form.Label style={{ textAlign: "left", fontWeight: "bold", color: "darkgray" }}>
            답글
            </Form.Label>
            {boardInfo.replies && boardInfo.replies.length > 0 ? (
            <ul>
                {boardInfo.replies.map((r, idx) => (
                <li key={idx}>{r}</li>
                ))}
            </ul>
            ) : (
            <p>답글이 없습니다.</p>
            )}
        </Form.Group>
        </div>

        {/* 답글 작성 */}
        <Form.Group className="mt-2">
        <Form.Control
            type="text"
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            style={{ textAlign: "left" }}
            placeholder="답글 작성..."
        />
        <div className="mt-2">
            <Button className="me-2" variant="secondary" onClick={addReply}>답글 등록</Button>
        </div>
        </Form.Group>
    </div>
)}


        {/* 작성 */}
        {writeOk && (
            <div className="mt-3">
            <h5>새 글 작성</h5>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form.Group>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="제목" />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} placeholder="내용" />
            </Form.Group>
            <div className="text-end mt-2">
                <Button variant="primary" onClick={boardSave} className="me-2">저장</Button>
                <Button variant="secondary" onClick={boardListView}>목록으로</Button>
            </div>
            </div>
        )}
            
        {/* 수정 */}
        {editOk && (
            <div className="mt-3">
            <h5>게시글 수정</h5>
            <Form.Group>
                <Form.Control type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control as="textarea" rows={3} value={editDescription} onChange={e => setEditDescription(e.target.value)} />
            </Form.Group>
            </div>
        )}
    </div>
  );
};

export default TreeBoard;
