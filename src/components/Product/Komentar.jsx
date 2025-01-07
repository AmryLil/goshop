export const Komentar = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Komentar</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Tulis komentar..."
          className="w-full p-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kirim Komentar
        </button>
      </form>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 border rounded bg-gray-100">
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-600">Belum ada komentar.</p>
        )}
      </div>
    </div>
  );
};
