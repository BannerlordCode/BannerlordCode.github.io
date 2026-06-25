---
title: "MONITORINFOEX"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MONITORINFOEX`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MONITORINFOEX

**命名空间:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**模块:** TaleWorlds.TwoDimension
**类型:** `public struct MONITORINFOEX`
**领域:** campaign-ext

## 概述

`MONITORINFOEX` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MONITORINFOEX.GetAsyncKeyState(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
