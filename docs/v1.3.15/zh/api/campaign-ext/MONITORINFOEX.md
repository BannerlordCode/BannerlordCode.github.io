<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MONITORINFOEX`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MONITORINFOEX

**命名空间:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**模块:** TaleWorlds.TwoDimension
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MONITORINFOEX` 是 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)