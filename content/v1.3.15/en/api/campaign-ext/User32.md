---
title: "User32"
description: "Auto-generated class reference for User32."
---
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class User32`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`

## Overview

`User32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAsyncKeyState
`public static extern short GetAsyncKeyState(int vkey)`

**Purpose:** Reads and returns the async key state value held by the this instance.

```csharp
// Static call; no instance required
User32.GetAsyncKeyState(0);
```

### DestroyWindow
`public static extern bool DestroyWindow(IntPtr hWnd)`

**Purpose:** Executes the DestroyWindow logic.

```csharp
// Static call; no instance required
User32.DestroyWindow(hWnd);
```

### GetDC
`public static extern IntPtr GetDC(IntPtr hWnd)`

**Purpose:** Reads and returns the d c value held by the this instance.

```csharp
// Static call; no instance required
User32.GetDC(hWnd);
```

### SetParent
`public static extern IntPtr SetParent(IntPtr child, IntPtr newParent)`

**Purpose:** Assigns a new value to parent and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetParent(child, newParent);
```

### ReleaseDC
`public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC)`

**Purpose:** Executes the ReleaseDC logic.

```csharp
// Static call; no instance required
User32.ReleaseDC(hWnd, hDC);
```

### ScreenToClient
`public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint)`

**Purpose:** Executes the ScreenToClient logic.

```csharp
// Static call; no instance required
User32.ScreenToClient(hWnd, lpPoint);
```

### GetCursorPos
`public static extern bool GetCursorPos(out Point lpPoint)`

**Purpose:** Reads and returns the cursor pos value held by the this instance.

```csharp
// Static call; no instance required
User32.GetCursorPos(lpPoint);
```

### ReleaseCapture
`public static extern bool ReleaseCapture()`

**Purpose:** Executes the ReleaseCapture logic.

```csharp
// Static call; no instance required
User32.ReleaseCapture();
```

### SetCapture
`public static extern IntPtr SetCapture(IntPtr hWnd)`

**Purpose:** Assigns a new value to capture and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetCapture(hWnd);
```

### SetActiveWindow
`public static extern IntPtr SetActiveWindow(IntPtr hWnd)`

**Purpose:** Assigns a new value to active window and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetActiveWindow(hWnd);
```

### SetForegroundWindow
`public static extern bool SetForegroundWindow(IntPtr hWnd)`

**Purpose:** Assigns a new value to foreground window and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetForegroundWindow(hWnd);
```

### CreateWindowEx
`public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam)`

**Purpose:** Constructs a new window ex entity and returns it to the caller.

```csharp
// Static call; no instance required
User32.CreateWindowEx(0, "example", "example", dwStyle, 0, 0, 0, 0, hWndParent, hMenu, hInstance, lpParam);
```

### ShowWindow
`public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow)`

**Purpose:** Displays the UI or element associated with window.

```csharp
// Static call; no instance required
User32.ShowWindow(hWnd, nCmdShow);
```

### CloseWindow
`public static extern bool CloseWindow(IntPtr hWnd)`

**Purpose:** Closes the resource or UI associated with window.

```csharp
// Static call; no instance required
User32.CloseWindow(hWnd);
```

### PeekMessage
`public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg)`

**Purpose:** Executes the PeekMessage logic.

```csharp
// Static call; no instance required
User32.PeekMessage(lpMsg, hWnd, 0, 0, 0);
```

### TranslateMessage
`public static extern bool TranslateMessage( ref NativeMessage lpMsg)`

**Purpose:** Executes the TranslateMessage logic.

```csharp
// Static call; no instance required
User32.TranslateMessage(lpMsg);
```

### DispatchMessage
`public static extern IntPtr DispatchMessage( ref NativeMessage lpMsg)`

**Purpose:** Executes the DispatchMessage logic.

```csharp
// Static call; no instance required
User32.DispatchMessage(lpMsg);
```

### RegisterClass
`public static extern ushort RegisterClass( ref WindowClass lpWndClass)`

**Purpose:** Registers class with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
User32.RegisterClass(lpWndClass);
```

### UnregisterClass
`public static extern bool UnregisterClass( string lpClassName, IntPtr hInstance)`

**Purpose:** Unregisters class from the current system.

```csharp
// Static call; no instance required
User32.UnregisterClass("example", hInstance);
```

### DefWindowProc
`public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam)`

**Purpose:** Executes the DefWindowProc logic.

```csharp
// Static call; no instance required
User32.DefWindowProc(hWnd, 0, wParam, lParam);
```

### LoadCursorFromFile
`public static extern IntPtr LoadCursorFromFile(string lpFileName)`

**Purpose:** Reads cursor from file from persistent storage or a stream.

```csharp
// Static call; no instance required
User32.LoadCursorFromFile("example");
```

### GetDesktopWindow
`public static extern IntPtr GetDesktopWindow()`

**Purpose:** Reads and returns the desktop window value held by the this instance.

```csharp
// Static call; no instance required
User32.GetDesktopWindow();
```

### GetClientRect
`public static extern bool GetClientRect(IntPtr hWnd, out Rectangle lpRect)`

**Purpose:** Reads and returns the client rect value held by the this instance.

```csharp
// Static call; no instance required
User32.GetClientRect(hWnd, lpRect);
```

### GetWindowRect
`public static extern bool GetWindowRect(IntPtr hWnd, out Rectangle lpRect)`

**Purpose:** Reads and returns the window rect value held by the this instance.

```csharp
// Static call; no instance required
User32.GetWindowRect(hWnd, lpRect);
```

### SetWindowPos
`public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags)`

**Purpose:** Assigns a new value to window pos and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetWindowPos(hWnd, hWndInsertAfter, 0, 0, 0, 0, 0);
```

### MoveWindow
`public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint)`

**Purpose:** Moves window to a new position or state.

```csharp
// Static call; no instance required
User32.MoveWindow(hWnd, 0, 0, 0, 0, false);
```

### UpdateWindow
`public static extern bool UpdateWindow(IntPtr hWnd)`

**Purpose:** Recalculates and stores the latest representation of window.

```csharp
// Static call; no instance required
User32.UpdateWindow(hWnd);
```

### SetWindowLong
`public static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong)`

**Purpose:** Assigns a new value to window long and updates the object's internal state.

```csharp
// Static call; no instance required
User32.SetWindowLong(hWnd, 0, 0);
```

### UpdateLayeredWindow
`public static extern bool UpdateLayeredWindow(IntPtr hWnd, IntPtr hdcDst, ref Point pptDst, ref Size psize, IntPtr hdcSrc, ref Point pprSrc, int crKey, ref BlendFunction pblend, int dwFlags)`

**Purpose:** Recalculates and stores the latest representation of layered window.

```csharp
// Static call; no instance required
User32.UpdateLayeredWindow(hWnd, hdcDst, pptDst, psize, hdcSrc, pprSrc, 0, pblend, 0);
```

### GetMessage
`public static extern bool GetMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax)`

**Purpose:** Reads and returns the message value held by the this instance.

```csharp
// Static call; no instance required
User32.GetMessage(lpMsg, hWnd, 0, 0);
```

### SendMessage
`public static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam)`

**Purpose:** Executes the SendMessage logic.

```csharp
// Static call; no instance required
User32.SendMessage(hWnd, 0, wParam, lParam);
```

### MessageBox
`public static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type)`

**Purpose:** Executes the MessageBox logic.

```csharp
// Static call; no instance required
User32.MessageBox(hWnd, "example", "example", 0);
```

### EnumDisplayMonitors
`public static extern bool EnumDisplayMonitors(IntPtr hdc, IntPtr lprcClip, User32.MonitorEnumDelegate lpfnEnum, IntPtr dwData)`

**Purpose:** Executes the EnumDisplayMonitors logic.

```csharp
// Static call; no instance required
User32.EnumDisplayMonitors(hdc, lprcClip, lpfnEnum, dwData);
```

### GetMonitorInfo
`public static extern bool GetMonitorInfo(IntPtr hMonitor, ref User32.MONITORINFOEX lpmi)`

**Purpose:** Reads and returns the monitor info value held by the this instance.

```csharp
// Static call; no instance required
User32.GetMonitorInfo(hMonitor, lpmi);
```

### MonitorEnumDelegate
`public delegate bool MonitorEnumDelegate(IntPtr hMonitor, IntPtr hdcMonitor, ref User32.RECT lprcMonitor, IntPtr lParam)`

**Purpose:** Executes the MonitorEnumDelegate logic.

```csharp
// Obtain an instance of User32 from the subsystem API first
User32 user32 = ...;
var result = user32.MonitorEnumDelegate(hMonitor, hdcMonitor, lprcMonitor, lParam);
```

## Usage Example

```csharp
User32.GetAsyncKeyState(0);
```

## See Also

- [Area Index](../)