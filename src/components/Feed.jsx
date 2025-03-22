import VideoCard from "./VideoCard"

function Feed() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
    </section>
  )
}

export default Feed