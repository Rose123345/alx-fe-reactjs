import { useQuery } from '@tanstack/react-query';

function PostsComponent() {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data && data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsComponent;
