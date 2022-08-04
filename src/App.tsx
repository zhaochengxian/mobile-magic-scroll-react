import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Demo = React.lazy(() => import("./pages/demo"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/demo"
            element={
              <React.Suspense fallback={<>...</>}>
                <Demo />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>
        超级移动端魔法magic滚动插件，支持react17,react18,hooks，兼容ios13.4回弹问题，兼容ios新版本长列表大数据性能问题
      </h1>

      <p>
        具体详细的其他更高级的属性配置，请参考
        <a href="https://github.com/zhaochengxian/mobile-magic-scroll-react">
          github说明
        </a>
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/">说明</Link>
          </li>
          <li>
            <Link to="/demo">示例</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
