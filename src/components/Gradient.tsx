export default function Gradient() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 opacity-50 absolute left-0 top-0">
      <div
        style={{ 
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundSize: '57px 57px',
          backgroundImage: 'linear-gradient(hsla(239, 84%, 67%, 0.09) .1em, transparent 0), linear-gradient(90deg, hsla(239, 84%, 67%, 0.09) .1em, transparent 0)'
        }}
      />
    </div>
  )
}