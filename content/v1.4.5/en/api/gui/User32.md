---
title: "User32"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `User32`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class User32`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/User32.cs`

## Overview

`User32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MonitorEnumDelegate
`public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref RECT lprcMonitor, IntPtr lParam)`

**Purpose:** Handles logic related to `monitor enum delegate`.

### GetAsyncKeyState
`public static extern short GetAsyncKeyState(int vkey)`

**Purpose:** Gets the current value of `async key state`.

### DestroyWindow
`public static extern bool DestroyWindow(IntPtr hWnd)`

**Purpose:** Handles logic related to `destroy window`.

### GetDC
`public static extern IntPtr GetDC(IntPtr hWnd)`

**Purpose:** Gets the current value of `d c`.

### SetParent
`public static extern IntPtr SetParent(IntPtr child, IntPtr newParent)`

**Purpose:** Sets the value or state of `parent`.

### ReleaseDC
`public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC)`

**Purpose:** Handles logic related to `release d c`.

### ScreenToClient
`public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint)`

**Purpose:** Handles logic related to `screen to client`.

### GetCursorPos
`public static extern bool GetCursorPos(out Point lpPoint)`

**Purpose:** Gets the current value of `cursor pos`.

### ReleaseCapture
`public static extern bool ReleaseCapture()`

**Purpose:** Handles logic related to `release capture`.

### SetCapture
`public static extern IntPtr SetCapture(IntPtr hWnd)`

**Purpose:** Sets the value or state of `capture`.

### SetActiveWindow
`public static extern IntPtr SetActiveWindow(IntPtr hWnd)`

**Purpose:** Sets the value or state of `active window`.

### SetForegroundWindow
`public static extern bool SetForegroundWindow(IntPtr hWnd)`

**Purpose:** Sets the value or state of `foreground window`.

### CreateWindowEx
`public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam)`

**Purpose:** Creates a new `window ex` instance or object.

### ShowWindow
`public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow)`

**Purpose:** Handles logic related to `show window`.

### IsIconic
`public static extern bool IsIconic(IntPtr hWnd)`

**Purpose:** Handles logic related to `is iconic`.

### CloseWindow
`public static extern bool CloseWindow(IntPtr hWnd)`

**Purpose:** Handles logic related to `close window`.

### PeekMessage
`public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg)`

**Purpose:** Handles logic related to `peek message`.

### TranslateMessage
`public static extern bool TranslateMessage( ref NativeMessage lpMsg)`

**Purpose:** Handles logic related to `translate message`.

### DispatchMessage
`public static extern IntPtr DispatchMessage( ref NativeMessage lpMsg)`

**Purpose:** Handles logic related to `dispatch message`.

### RegisterClass
`public static extern ushort RegisterClass( ref WindowClass lpWndClass)`

**Purpose:** Handles logic related to `register class`.

### UnregisterClass
`public static extern bool UnregisterClass( string lpClassName, IntPtr hInstance)`

**Purpose:** Handles logic related to `unregister class`.

### DefWindowProc
`public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam)`

**Purpose:** Handles logic related to `def window proc`.

### LoadCursorFromFile
`public static extern IntPtr LoadCursorFromFile(string lpFileName)`

**Purpose:** Loads `cursor from file` data.

### GetDesktopWindow
`public static extern IntPtr GetDesktopWindow()`

**Purpose:** Gets the current value of `desktop window`.

### GetClientRect
`public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect)`

**Purpose:** Gets the current value of `client rect`.

### GetWindowRect
`public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect)`

**Purpose:** Gets the current value of `window rect`.

### SetWindowPos
`public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags)`

**Purpose:** Sets the value or state of `window pos`.

### MoveWindow
`public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)`

**Purpose:** Handles logic related to `move window`.

### UpdateWindow
`public static extern bool UpdateWindow(IntPtr hWnd)`

**Purpose:** Updates the state or data of `window`.

### SetWindowLong
`public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong)`

**Purpose:** Sets the value or state of `window long`.

### UpdateLayeredWindow
`public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref System.Drawing.Point pptDst, ref Size psize, IntPtr hdcSrc, ref System.Drawing.Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags)`

**Purpose:** Updates the state or data of `layered window`.

### GetMessage
`public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax)`

**Purpose:** Gets the current value of `message`.

### SendMessage
`public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam)`

**Purpose:** Handles logic related to `send message`.

### MessageBox
`public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type)`

**Purpose:** Handles logic related to `message box`.

### EnumDisplayMonitors
`public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, MonitorEnumDelegate lpfnEnum, IntPtr dwData)`

**Purpose:** Handles logic related to `enum display monitors`.

### GetMonitorInfo
`public static extern bool GetMonitorInfo(IntPtr hMonitor, ref MONITORINFOEX lpmi)`

**Purpose:** Gets the current value of `monitor info`.

## Usage Example

```csharp
var value = new User32();
value.MonitorEnumDelegate(hMonitor, hdcMonitor, lprcMonitor, lParam);
```

## See Also

- [Complete Class Catalog](../catalog)