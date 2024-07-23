
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        &copy; Next JS is Great!
    </div>
  )
}
// about-us 페이지만 있는 레이아웃! 하위항목에 있는 페이지들에서도 보임!!
