---
title: User32
description: User32 - Windows user32.dll P/Invoke 封装
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `User32`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# User32
**命名空间:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**模块:** TaleWorlds.TwoDimension.Standalone
**类型:** static class

## 概述
`User32

` ?Standalone 模式（编辑器、离线渲染等非游戏主进程）下?Windows 

`user32.dll

` ?P/Invoke 封装。它把窗口创建、消息循环、输入查询、显示设备枚举等 Win32 API 以静态外部方法的形式暴露?.NET 代码，使 2D 引擎能在原生窗口上渲染并与系统交互?
该类不包含任何托管逻辑，只是签名转译。每个方法都?

`[DllImport("user32.dll")]

` 标注，参数与 Win32 SDK 一一对应，结构体（如 

`RECT

`、`MONITORINFOEX

`）也?Win32 内存布局对齐?
## 心智模型
把这个类视作"窗口系统的薄?：上层代码创建窗口、收发消息、读取鼠标键盘状态时调用这里的方法，所有真实工作都?Windows 完成。`MonitorEnumDelegate

` 委托配合 

`EnumDisplayMonitors

` 用于遍历多显示器配置；`NativeMessage

` 结构体贯?

`PeekMessage

` / 

`GetMessage

` / 

`TranslateMessage

` / 

`DispatchMessage

` 这条标准消息泵管线?
## 主要属?本类无属性?
## 主要方法（按用途分组）

### 窗口创建与销?

`

`

`csharp
public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName,
    WindowStyle dwStyle, int x, int y, int nWidth, int nHeight,
    IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam);
public static extern bool DestroyWindow(IntPtr hWnd);
public static extern bool CloseWindow(IntPtr hWnd);
public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow);
public static extern ushort RegisterClass(ref WindowClass lpWndClass);
public static extern bool UnregisterClass(string lpClassName, IntPtr hInstance);
`

`

`
`CreateWindowEx

` 创建窗口，`RegisterClass

`/

`UnregisterClass

` 注册/反注册窗口类。`ShowWindow

` 控制最小化/最大化/隐藏等显示状态?
### 窗口层级与焦?

`

`

`csharp
public static extern IntPtr SetParent(IntPtr child, IntPtr newParent);
public static extern IntPtr SetActiveWindow(IntPtr hWnd);
public static extern bool SetForegroundWindow(IntPtr hWnd);
public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
public static extern bool UpdateWindow(IntPtr hWnd);
public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong);
public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref Point pptDst,
    ref Size psize, IntPtr hdcSrc, ref Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags);
`

`

`
分层窗口（`UpdateLayeredWindow

`）用于实现半透明/异形 UI 渲染?
### 几何查询
`

`

`csharp
public static extern IntPtr GetDesktopWindow();
public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect);
public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect);
`

`

`

### 输入查询
`

`

`csharp
public static extern short GetAsyncKeyState(int vkey);
public static extern bool GetCursorPos(out Point lpPoint);
public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint);
public static extern bool ReleaseCapture();
public static extern IntPtr SetCapture(IntPtr hWnd);
`

`

`
`GetAsyncKeyState

` 用于非阻塞按键查询；

`GetCursorPos

` 配合 

`ScreenToClient

` 把屏幕坐标换算为客户区坐标?
### 消息循环
`

`

`csharp
public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg);
public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax);
public static extern bool TranslateMessage(ref NativeMessage lpMsg);
public static extern IntPtr DispatchMessage(ref NativeMessage lpMsg);
public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam);
public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);
public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);
`

`

`
标准 Win32 消息泵五元组：`PeekMessage

`/

`GetMessage

` 取消息，

`TranslateMessage

` 翻译字符，`DispatchMessage

` 派发到窗口过程，

`DefWindowProc

` 处理默认行为?
### 绘图资源
`

`

`csharp
public static extern IntPtr GetDC(IntPtr hWnd);
public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC);
public static extern IntPtr LoadCursorFromFile(string lpFileName);
`

`

`

### 多显示器枚举
`

`

`csharp
public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, MonitorEnumDelegate lpfnEnum, IntPtr dwData);
public static extern bool GetMonitorInfo(IntPtr hMonitor, ref MONITORINFOEX lpmi);
`

`

`
通过 

`MonitorEnumDelegate

` 回调逐个访问显示器，再用 

`GetMonitorInfo

` 取每个显示器的矩形与设备名?
### 嵌套类型
\| 类型 \| 说明 \|
\|------\|------\|
\| 

`RECT

` \| Win32 矩形结构（left/top/right/bottom?\|
\| 

`MONITORINFOEX

` \| 显示器信息结构，?

`rcMonitor

`/

`rcWork

`/

`szDevice

` \|
\| 

`MonitorEnumDelegate

` \| 

`EnumDisplayMonitors

` 的回调委托签?\|

## 使用示例
### 示例: 创建一个原生窗口并跑消息循?**场景**: Standalone 模式下需要自己开窗口承载 2D 渲染?

`

`

`csharp
var wc = new WindowClass { lpfnWndProc = WndProc, lpszClassName = "MyWindow" };
User32.RegisterClass(ref wc);
IntPtr hwnd = User32.CreateWindowEx(0, "MyWindow", "Demo",
    WindowStyle.WS_OVERLAPPEDWINDOW, 0, 0, 800, 600,
    IntPtr.Zero, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero);
User32.ShowWindow(hwnd, WindowShowStyle.SW_SHOW);

NativeMessage msg;
while (User32.GetMessage(out msg, IntPtr.Zero, 0, 0))
{
    User32.TranslateMessage(ref msg);
    User32.DispatchMessage(ref msg);
}
`

`

`
**要点**: 必须?

`RegisterClass

` ?

`CreateWindowEx

`；`GetMessage

` 阻塞等待消息，适合主循环；需要非阻塞时改?

`PeekMessage

`?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
