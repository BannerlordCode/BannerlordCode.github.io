---
title: "User32"
description: "User32：TaleWorlds.TwoDimension.Standalone.Native.Windows 的 public 类；公开成员 41 个（方法 36、属性 2、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# User32

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class User32`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

User32 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs。它是一个 public 类，继承链为 User32。public/protected 成员共 41 个：36 方法、2 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：User32 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，继承链 User32。成员构成以方法为主（方法 36/41，属性 2/41），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAsyncKeyState` | `public static extern short GetAsyncKeyState(int vkey);` | 方法 |
| `DestroyWindow` | `public static extern bool DestroyWindow(IntPtr hWnd);` | 方法 |
| `GetDC` | `public static extern IntPtr GetDC(IntPtr hWnd);` | 方法 |
| `SetParent` | `public static extern IntPtr SetParent(IntPtr child, IntPtr newParent);` | 方法 |
| `ReleaseDC` | `public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC);` | 方法 |
| `ScreenToClient` | `public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint);` | 方法 |
| `GetCursorPos` | `public static extern bool GetCursorPos(out Point lpPoint);` | 方法 |
| `ReleaseCapture` | `public static extern bool ReleaseCapture();` | 方法 |
| `SetCapture` | `public static extern IntPtr SetCapture(IntPtr hWnd);` | 方法 |
| `SetActiveWindow` | `public static extern IntPtr SetActiveWindow(IntPtr hWnd);` | 方法 |
| `SetForegroundWindow` | `public static extern bool SetForegroundWindow(IntPtr hWnd);` | 方法 |
| `CreateWindowEx` | `public static extern IntPtr CreateWindowEx(int dwExStyle, [MarshalAs(UnmanagedType.LPTStr)]string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam);` | 方法 |
| `ShowWindow` | `public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow);` | 方法 |
| `IsIconic` | `public static extern bool IsIconic(IntPtr hWnd);` | 方法 |
| `CloseWindow` | `public static extern bool CloseWindow(IntPtr hWnd);` | 方法 |
| `PeekMessage` | `public static extern bool PeekMessage(out NativeMessage lpMsg, [In]IntPtr hWnd, [In]uint wMsgFilterMin, [In]uint wMsgFilterMax, [In]uint wRemoveMsg);` | 方法 |
| `TranslateMessage` | `public static extern bool TranslateMessage([In]ref NativeMessage lpMsg);` | 方法 |
| `DispatchMessage` | `public static extern IntPtr DispatchMessage([In]ref NativeMessage lpMsg);` | 方法 |
| `RegisterClass` | `public static extern ushort RegisterClass([In]ref WindowClass lpWndClass);` | 方法 |
| `UnregisterClass` | `public static extern bool UnregisterClass([MarshalAs(UnmanagedType.LPTStr)]string lpClassName, IntPtr hInstance);` | 方法 |
| `DefWindowProc` | `public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam);` | 方法 |
| `LoadCursorFromFile` | `public static extern IntPtr LoadCursorFromFile(string lpFileName);` | 方法 |
| `GetDesktopWindow` | `public static extern IntPtr GetDesktopWindow();` | 方法 |
| `GetClientRect` | `public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect);` | 方法 |
| `GetWindowRect` | `public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect);` | 方法 |
| `SetWindowPos` | `public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);` | 方法 |
| `MoveWindow` | `public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);` | 方法 |
| `UpdateWindow` | `public static extern bool UpdateWindow(IntPtr hWnd);` | 方法 |
| `SetWindowLong` | `public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong);` | 方法 |
| `UpdateLayeredWindow` | `public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref Point pptDst, ref Size psize, IntPtr hdcSrc, ref Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags);` | 方法 |
| `GetMessage` | `public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax);` | 方法 |
| `SendMessage` | `public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);` | 方法 |
| `MessageBox` | `public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);` | 方法 |
| `EnumDisplayMonitors` | `public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, User32.MonitorEnumDelegate lpfnEnum, IntPtr dwData);` | 方法 |
| `GetMonitorInfo` | `public static extern bool GetMonitorInfo(IntPtr hMonitor, ref User32.MONITORINFOEX lpmi);` | 方法 |
| `RECT` | `public struct RECT` | 属性 |
| `MonitorEnumDelegate` | `public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam);` | 方法 |
| `MONITORINFOEX` | `public struct MONITORINFOEX` | 属性 |
| `RECT` | `public struct RECT` | 嵌套类型 |
| `MonitorEnumDelegate` | `public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam)` | 嵌套类型 |
| `MONITORINFOEX` | `public struct MONITORINFOEX` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlphaFormatFlags](../AlphaFormatFlags/)
- [同命名空间 BitmapInfo](../BitmapInfo/)
- [同命名空间 BitmapInfoHeader](../BitmapInfoHeader/)
- [同命名空间 BlendFunction](../BlendFunction/)
