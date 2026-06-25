---
title: "User32"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `User32`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class User32`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/User32.cs`

## 概述

`User32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MonitorEnumDelegate
`public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref RECT lprcMonitor, IntPtr lParam)`

**用途 / Purpose:** 处理 `monitor enum delegate` 相关逻辑。

### GetAsyncKeyState
`public static extern short GetAsyncKeyState(int vkey)`

**用途 / Purpose:** 获取 `async key state` 的当前值。

### DestroyWindow
`public static extern bool DestroyWindow(IntPtr hWnd)`

**用途 / Purpose:** 处理 `destroy window` 相关逻辑。

### GetDC
`public static extern IntPtr GetDC(IntPtr hWnd)`

**用途 / Purpose:** 获取 `d c` 的当前值。

### SetParent
`public static extern IntPtr SetParent(IntPtr child, IntPtr newParent)`

**用途 / Purpose:** 设置 `parent` 的值或状态。

### ReleaseDC
`public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC)`

**用途 / Purpose:** 处理 `release d c` 相关逻辑。

### ScreenToClient
`public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint)`

**用途 / Purpose:** 处理 `screen to client` 相关逻辑。

### GetCursorPos
`public static extern bool GetCursorPos(out Point lpPoint)`

**用途 / Purpose:** 获取 `cursor pos` 的当前值。

### ReleaseCapture
`public static extern bool ReleaseCapture()`

**用途 / Purpose:** 处理 `release capture` 相关逻辑。

### SetCapture
`public static extern IntPtr SetCapture(IntPtr hWnd)`

**用途 / Purpose:** 设置 `capture` 的值或状态。

### SetActiveWindow
`public static extern IntPtr SetActiveWindow(IntPtr hWnd)`

**用途 / Purpose:** 设置 `active window` 的值或状态。

### SetForegroundWindow
`public static extern bool SetForegroundWindow(IntPtr hWnd)`

**用途 / Purpose:** 设置 `foreground window` 的值或状态。

### CreateWindowEx
`public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam)`

**用途 / Purpose:** 创建一个 `window ex` 实例或对象。

### ShowWindow
`public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow)`

**用途 / Purpose:** 处理 `show window` 相关逻辑。

### IsIconic
`public static extern bool IsIconic(IntPtr hWnd)`

**用途 / Purpose:** 处理 `is iconic` 相关逻辑。

### CloseWindow
`public static extern bool CloseWindow(IntPtr hWnd)`

**用途 / Purpose:** 处理 `close window` 相关逻辑。

### PeekMessage
`public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg)`

**用途 / Purpose:** 处理 `peek message` 相关逻辑。

### TranslateMessage
`public static extern bool TranslateMessage( ref NativeMessage lpMsg)`

**用途 / Purpose:** 处理 `translate message` 相关逻辑。

### DispatchMessage
`public static extern IntPtr DispatchMessage( ref NativeMessage lpMsg)`

**用途 / Purpose:** 处理 `dispatch message` 相关逻辑。

### RegisterClass
`public static extern ushort RegisterClass( ref WindowClass lpWndClass)`

**用途 / Purpose:** 处理 `register class` 相关逻辑。

### UnregisterClass
`public static extern bool UnregisterClass( string lpClassName, IntPtr hInstance)`

**用途 / Purpose:** 处理 `unregister class` 相关逻辑。

### DefWindowProc
`public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam)`

**用途 / Purpose:** 处理 `def window proc` 相关逻辑。

### LoadCursorFromFile
`public static extern IntPtr LoadCursorFromFile(string lpFileName)`

**用途 / Purpose:** 加载 `cursor from file` 数据。

### GetDesktopWindow
`public static extern IntPtr GetDesktopWindow()`

**用途 / Purpose:** 获取 `desktop window` 的当前值。

### GetClientRect
`public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect)`

**用途 / Purpose:** 获取 `client rect` 的当前值。

### GetWindowRect
`public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect)`

**用途 / Purpose:** 获取 `window rect` 的当前值。

### SetWindowPos
`public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags)`

**用途 / Purpose:** 设置 `window pos` 的值或状态。

### MoveWindow
`public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)`

**用途 / Purpose:** 处理 `move window` 相关逻辑。

### UpdateWindow
`public static extern bool UpdateWindow(IntPtr hWnd)`

**用途 / Purpose:** 更新 `window` 的状态或数据。

### SetWindowLong
`public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong)`

**用途 / Purpose:** 设置 `window long` 的值或状态。

### UpdateLayeredWindow
`public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref System.Drawing.Point pptDst, ref Size psize, IntPtr hdcSrc, ref System.Drawing.Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags)`

**用途 / Purpose:** 更新 `layered window` 的状态或数据。

### GetMessage
`public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax)`

**用途 / Purpose:** 获取 `message` 的当前值。

### SendMessage
`public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam)`

**用途 / Purpose:** 处理 `send message` 相关逻辑。

### MessageBox
`public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type)`

**用途 / Purpose:** 处理 `message box` 相关逻辑。

### EnumDisplayMonitors
`public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, MonitorEnumDelegate lpfnEnum, IntPtr dwData)`

**用途 / Purpose:** 处理 `enum display monitors` 相关逻辑。

### GetMonitorInfo
`public static extern bool GetMonitorInfo(IntPtr hMonitor, ref MONITORINFOEX lpmi)`

**用途 / Purpose:** 获取 `monitor info` 的当前值。

## 使用示例

```csharp
var value = new User32();
value.MonitorEnumDelegate(hMonitor, hdcMonitor, lprcMonitor, lParam);
```

## 参见

- [完整类目录](../catalog)