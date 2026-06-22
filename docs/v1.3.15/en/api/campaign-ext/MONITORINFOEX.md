<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MONITORINFOEX`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MONITORINFOEX

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MONITORINFOEX` is a struct in the `TaleWorlds.TwoDimension.Standalone.Native.Windows` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetAsyncKeyState

```csharp
public static extern short GetAsyncKeyState(int vkey)
```

### DestroyWindow

```csharp
public static extern bool DestroyWindow(IntPtr hWnd)
```

### GetDC

```csharp
public static extern IntPtr GetDC(IntPtr hWnd)
```

### SetParent

```csharp
public static extern IntPtr SetParent(IntPtr child, IntPtr newParent)
```

### ReleaseDC

```csharp
public static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC)
```

### ScreenToClient

```csharp
public static extern bool ScreenToClient(IntPtr hWnd, ref Point lpPoint)
```

### GetCursorPos

```csharp
public static extern bool GetCursorPos(out Point lpPoint)
```

### ReleaseCapture

```csharp
public static extern bool ReleaseCapture()
```

### SetCapture

```csharp
public static extern IntPtr SetCapture(IntPtr hWnd)
```

### SetActiveWindow

```csharp
public static extern IntPtr SetActiveWindow(IntPtr hWnd)
```

### SetForegroundWindow

```csharp
public static extern bool SetForegroundWindow(IntPtr hWnd)
```

### CreateWindowEx

```csharp
public static extern IntPtr CreateWindowEx(int dwExStyle, string lpClassName, string lpWindowName, WindowStyle dwStyle, int x, int y, int nWidth, int nHeight, IntPtr hWndParent, IntPtr hMenu, IntPtr hInstance, IntPtr lpParam)
```

### ShowWindow

```csharp
public static extern bool ShowWindow(IntPtr hWnd, WindowShowStyle nCmdShow)
```

### CloseWindow

```csharp
public static extern bool CloseWindow(IntPtr hWnd)
```

### PeekMessage

```csharp
public static extern bool PeekMessage(out NativeMessage lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax, uint wRemoveMsg)
```

### TranslateMessage

```csharp
public static extern bool TranslateMessage( ref NativeMessage lpMsg)
```

### DispatchMessage

```csharp
public static extern IntPtr DispatchMessage( ref NativeMessage lpMsg)
```

### RegisterClass

```csharp
public static extern ushort RegisterClass( ref WindowClass lpWndClass)
```

### UnregisterClass

```csharp
public static extern bool UnregisterClass( string lpClassName, IntPtr hInstance)
```

### DefWindowProc

```csharp
public static extern IntPtr DefWindowProc(IntPtr hWnd, uint uMsg, IntPtr wParam, IntPtr lParam)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)