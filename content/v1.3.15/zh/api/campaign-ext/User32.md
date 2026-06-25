---
title: "User32"
description: "User32 的自动生成类参考。"
---
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class User32`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`

## 概述

`User32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAsyncKeyState
`public static extern short GetAsyncKeyState(int vkey)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 async key state 的结果。

```csharp
// 静态调用，不需要实例
User32.GetAsyncKeyState(0);
```

### DestroyWindow
`public static extern bool DestroyWindow(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DestroyWindow 对应的操作。

```csharp
// 静态调用，不需要实例
User32.DestroyWindow(hWnd);
```

### GetDC
`public static extern IntPtr GetDC(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 d c 的结果。

```csharp
// 静态调用，不需要实例
User32.GetDC(hWnd);
```

### SetParent
`public static extern IntPtr SetParent(IntPtr child, IntPtr newParent)`

**用途 / Purpose:** **用途 / Purpose:** 为 parent 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetParent(child, newParent);
```

### ReleaseDC
`public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseDC 对应的操作。

```csharp
// 静态调用，不需要实例
User32.ReleaseDC(hWnd, hDC);
```

### ScreenToClient
`public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ScreenToClient 对应的操作。

```csharp
// 静态调用，不需要实例
User32.ScreenToClient(hWnd, lpPoint);
```

### GetCursorPos
`public static extern bool GetCursorPos(out Point lpPoint)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cursor pos 的结果。

```csharp
// 静态调用，不需要实例
User32.GetCursorPos(lpPoint);
```

### ReleaseCapture
`public static extern bool ReleaseCapture()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseCapture 对应的操作。

```csharp
// 静态调用，不需要实例
User32.ReleaseCapture();
```

### SetCapture
`public static extern IntPtr SetCapture(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 为 capture 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetCapture(hWnd);
```

### SetActiveWindow
`public static extern IntPtr SetActiveWindow(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 为 active window 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetActiveWindow(hWnd);
```

### SetForegroundWindow
`public static extern bool SetForegroundWindow(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 为 foreground window 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetForegroundWindow(hWnd);
```

### CreateWindowEx
`public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 window ex 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
User32.CreateWindowEx(0, "example", "example", dwStyle, 0, 0, 0, 0, hWndParent, hMenu, hInstance, lpParam);
```

### ShowWindow
`public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow)`

**用途 / Purpose:** **用途 / Purpose:** 显示window对应的界面或元素。

```csharp
// 静态调用，不需要实例
User32.ShowWindow(hWnd, nCmdShow);
```

### CloseWindow
`public static extern bool CloseWindow(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 关闭window对应的资源或界面。

```csharp
// 静态调用，不需要实例
User32.CloseWindow(hWnd);
```

### PeekMessage
`public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PeekMessage 对应的操作。

```csharp
// 静态调用，不需要实例
User32.PeekMessage(lpMsg, hWnd, 0, 0, 0);
```

### TranslateMessage
`public static extern bool TranslateMessage( ref NativeMessage lpMsg)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TranslateMessage 对应的操作。

```csharp
// 静态调用，不需要实例
User32.TranslateMessage(lpMsg);
```

### DispatchMessage
`public static extern IntPtr DispatchMessage( ref NativeMessage lpMsg)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DispatchMessage 对应的操作。

```csharp
// 静态调用，不需要实例
User32.DispatchMessage(lpMsg);
```

### RegisterClass
`public static extern ushort RegisterClass( ref WindowClass lpWndClass)`

**用途 / Purpose:** **用途 / Purpose:** 将class注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
User32.RegisterClass(lpWndClass);
```

### UnregisterClass
`public static extern bool UnregisterClass( string lpClassName, IntPtr hInstance)`

**用途 / Purpose:** **用途 / Purpose:** 从当前系统中注销class。

```csharp
// 静态调用，不需要实例
User32.UnregisterClass("example", hInstance);
```

### DefWindowProc
`public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DefWindowProc 对应的操作。

```csharp
// 静态调用，不需要实例
User32.DefWindowProc(hWnd, 0, wParam, lParam);
```

### LoadCursorFromFile
`public static extern IntPtr LoadCursorFromFile(string lpFileName)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 cursor from file。

```csharp
// 静态调用，不需要实例
User32.LoadCursorFromFile("example");
```

### GetDesktopWindow
`public static extern IntPtr GetDesktopWindow()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 desktop window 的结果。

```csharp
// 静态调用，不需要实例
User32.GetDesktopWindow();
```

### GetClientRect
`public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 client rect 的结果。

```csharp
// 静态调用，不需要实例
User32.GetClientRect(hWnd, lpRect);
```

### GetWindowRect
`public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 window rect 的结果。

```csharp
// 静态调用，不需要实例
User32.GetWindowRect(hWnd, lpRect);
```

### SetWindowPos
`public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags)`

**用途 / Purpose:** **用途 / Purpose:** 为 window pos 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetWindowPos(hWnd, hWndInsertAfter, 0, 0, 0, 0, 0);
```

### MoveWindow
`public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)`

**用途 / Purpose:** **用途 / Purpose:** 移动window到新的位置或状态。

```csharp
// 静态调用，不需要实例
User32.MoveWindow(hWnd, 0, 0, 0, 0, false);
```

### UpdateWindow
`public static extern bool UpdateWindow(IntPtr hWnd)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 window 的最新表示。

```csharp
// 静态调用，不需要实例
User32.UpdateWindow(hWnd);
```

### SetWindowLong
`public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong)`

**用途 / Purpose:** **用途 / Purpose:** 为 window long 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
User32.SetWindowLong(hWnd, 0, 0);
```

### UpdateLayeredWindow
`public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref Point pptDst, ref Size psize, IntPtr hdcSrc, ref Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 layered window 的最新表示。

```csharp
// 静态调用，不需要实例
User32.UpdateLayeredWindow(hWnd, hdcDst, pptDst, psize, hdcSrc, pprSrc, 0, pblend, 0);
```

### GetMessage
`public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 message 的结果。

```csharp
// 静态调用，不需要实例
User32.GetMessage(lpMsg, hWnd, 0, 0);
```

### SendMessage
`public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessage 对应的操作。

```csharp
// 静态调用，不需要实例
User32.SendMessage(hWnd, 0, wParam, lParam);
```

### MessageBox
`public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MessageBox 对应的操作。

```csharp
// 静态调用，不需要实例
User32.MessageBox(hWnd, "example", "example", 0);
```

### EnumDisplayMonitors
`public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, User32.MonitorEnumDelegate lpfnEnum, IntPtr dwData)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnumDisplayMonitors 对应的操作。

```csharp
// 静态调用，不需要实例
User32.EnumDisplayMonitors(hdc, lprcClip, lpfnEnum, dwData);
```

### GetMonitorInfo
`public static extern bool GetMonitorInfo(IntPtr hMonitor, ref User32.MONITORINFOEX lpmi)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 monitor info 的结果。

```csharp
// 静态调用，不需要实例
User32.GetMonitorInfo(hMonitor, lpmi);
```

### MonitorEnumDelegate
`public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MonitorEnumDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 User32 实例
User32 user32 = ...;
var result = user32.MonitorEnumDelegate(hMonitor, hdcMonitor, lprcMonitor, lParam);
```

## 使用示例

```csharp
User32.GetAsyncKeyState(0);
```

## 参见

- [本区域目录](../)