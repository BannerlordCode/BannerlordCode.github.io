---
title: "User32"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `User32`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class User32`
**Area:** campaign-ext

## Overview

`User32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
User32.GetAsyncKeyState(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
