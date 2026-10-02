---
title: "User32"
description: "User32: a public class in TaleWorlds.TwoDimension.Standalone.Native.Windows; 41 exposed members (36 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# User32

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class User32`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

User32 lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs. It is a public class; the inheritance chain is User32. It exposes 41 public/protected members: 36 methods, 2 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: User32 lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows`, inheritance chain User32. The surface is method-led (methods 36/41, properties 2/41), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetAsyncKeyState` | `public static extern short GetAsyncKeyState(int vkey);` | method |
| `DestroyWindow` | `public static extern bool DestroyWindow(IntPtr hWnd);` | method |
| `GetDC` | `public static extern IntPtr GetDC(IntPtr hWnd);` | method |
| `SetParent` | `public static extern IntPtr SetParent(IntPtr child, IntPtr newParent);` | method |
| `ReleaseDC` | `public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC);` | method |
| `ScreenToClient` | `public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint);` | method |
| `GetCursorPos` | `public static extern bool GetCursorPos(out Point lpPoint);` | method |
| `ReleaseCapture` | `public static extern bool ReleaseCapture();` | method |
| `SetCapture` | `public static extern IntPtr SetCapture(IntPtr hWnd);` | method |
| `SetActiveWindow` | `public static extern IntPtr SetActiveWindow(IntPtr hWnd);` | method |
| `SetForegroundWindow` | `public static extern bool SetForegroundWindow(IntPtr hWnd);` | method |
| `CreateWindowEx` | `public static extern IntPtr CreateWindowEx(int dwExStyle, [MarshalAs(UnmanagedType.LPTStr)]string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam);` | method |
| `ShowWindow` | `public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow);` | method |
| `IsIconic` | `public static extern bool IsIconic(IntPtr hWnd);` | method |
| `CloseWindow` | `public static extern bool CloseWindow(IntPtr hWnd);` | method |
| `PeekMessage` | `public static extern bool PeekMessage(out NativeMessage lpMsg, [In]IntPtr hWnd, [In]uint wMsgFilterMin, [In]uint wMsgFilterMax, [In]uint wRemoveMsg);` | method |
| `TranslateMessage` | `public static extern bool TranslateMessage([In]ref NativeMessage lpMsg);` | method |
| `DispatchMessage` | `public static extern IntPtr DispatchMessage([In]ref NativeMessage lpMsg);` | method |
| `RegisterClass` | `public static extern ushort RegisterClass([In]ref WindowClass lpWndClass);` | method |
| `UnregisterClass` | `public static extern bool UnregisterClass([MarshalAs(UnmanagedType.LPTStr)]string lpClassName, IntPtr hInstance);` | method |
| `DefWindowProc` | `public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam);` | method |
| `LoadCursorFromFile` | `public static extern IntPtr LoadCursorFromFile(string lpFileName);` | method |
| `GetDesktopWindow` | `public static extern IntPtr GetDesktopWindow();` | method |
| `GetClientRect` | `public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect);` | method |
| `GetWindowRect` | `public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect);` | method |
| `SetWindowPos` | `public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);` | method |
| `MoveWindow` | `public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);` | method |
| `UpdateWindow` | `public static extern bool UpdateWindow(IntPtr hWnd);` | method |
| `SetWindowLong` | `public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong);` | method |
| `UpdateLayeredWindow` | `public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref Point pptDst, ref Size psize, IntPtr hdcSrc, ref Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags);` | method |
| `GetMessage` | `public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax);` | method |
| `SendMessage` | `public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);` | method |
| `MessageBox` | `public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);` | method |
| `EnumDisplayMonitors` | `public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, User32.MonitorEnumDelegate lpfnEnum, IntPtr dwData);` | method |
| `GetMonitorInfo` | `public static extern bool GetMonitorInfo(IntPtr hMonitor, ref User32.MONITORINFOEX lpmi);` | method |
| `RECT` | `public struct RECT` | property |
| `MonitorEnumDelegate` | `public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam);` | method |
| `MONITORINFOEX` | `public struct MONITORINFOEX` | property |
| `RECT` | `public struct RECT` | nested type |
| `MonitorEnumDelegate` | `public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam)` | nested type |
| `MONITORINFOEX` | `public struct MONITORINFOEX` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlphaFormatFlags](../AlphaFormatFlags/)
- [same namespace BitmapInfo](../BitmapInfo/)
- [same namespace BitmapInfoHeader](../BitmapInfoHeader/)
- [same namespace BlendFunction](../BlendFunction/)
