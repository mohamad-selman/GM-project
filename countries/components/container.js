export default function Container({ children }) {
  return (
    <div className="sm:flex sm:flex-wrap gap-x-6">
      {children}
    </div>
  )
}
