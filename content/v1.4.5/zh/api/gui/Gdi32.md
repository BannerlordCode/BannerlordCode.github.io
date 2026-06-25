---
title: "Gdi32"
description: "Gdi32 的自动生成类参考。"
---
# Gdi32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Gdi32`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/Gdi32.cs`

## 概述

`Gdi32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ChoosePixelFormat
`public static extern int ChoosePixelFormat(IntPtr hdc, ref PixelFormatDescriptor ppfd)`

**用途 / Purpose:** 调用 ChoosePixelFormat 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.ChoosePixelFormat(hdc, ppfd);
```

### SetPixelFormat
`public static extern bool SetPixelFormat(IntPtr hdc, int iPixelFormat, ref PixelFormatDescriptor ppfd)`

**用途 / Purpose:** 为 pixel format 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Gdi32.SetPixelFormat(hdc, 0, ppfd);
```

### SwapBuffers
`public static extern bool SwapBuffers(IntPtr hdc)`

**用途 / Purpose:** 调用 SwapBuffers 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.SwapBuffers(hdc);
```

### CreateRectRgn
`public static extern IntPtr CreateRectRgn(int x1, int y1, int x2, int y2)`

**用途 / Purpose:** 构建一个新的 rect rgn 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Gdi32.CreateRectRgn(0, 0, 0, 0);
```

### CreateSolidBrush
`public static extern IntPtr CreateSolidBrush(IntPtr colorRef)`

**用途 / Purpose:** 构建一个新的 solid brush 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Gdi32.CreateSolidBrush(colorRef);
```

### CreateCompatibleDC
`public static extern IntPtr CreateCompatibleDC(IntPtr hdc)`

**用途 / Purpose:** 构建一个新的 compatible d c 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Gdi32.CreateCompatibleDC(hdc);
```

### SelectObject
`public static extern IntPtr SelectObject(IntPtr hdc, IntPtr h)`

**用途 / Purpose:** 调用 SelectObject 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.SelectObject(hdc, h);
```

### DeleteObject
`public static extern bool DeleteObject(IntPtr ho)`

**用途 / Purpose:** 调用 DeleteObject 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.DeleteObject(ho);
```

### DeleteDC
`public static extern bool DeleteDC(IntPtr hdc)`

**用途 / Purpose:** 调用 DeleteDC 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.DeleteDC(hdc);
```

### CreateCompatibleBitmap
`public static extern IntPtr CreateCompatibleBitmap(IntPtr hdc, int cx, int cy)`

**用途 / Purpose:** 构建一个新的 compatible bitmap 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Gdi32.CreateCompatibleBitmap(hdc, 0, 0);
```

### StretchDIBits
`public static extern int StretchDIBits(IntPtr hdc, int xDest, int yDest, int DestWidth, int DestHeight, int xSrc, int ySrc, int SrcWidth, int SrcHeight, byte lpBits, ref BitmapInfo lpbmi, uint iUsage, int rop)`

**用途 / Purpose:** 调用 StretchDIBits 对应的操作。

```csharp
// 静态调用，不需要实例
Gdi32.StretchDIBits(hdc, 0, 0, 0, 0, 0, 0, 0, 0, 0, lpbmi, 0, 0);
```

## 使用示例

```csharp
Gdi32.ChoosePixelFormat(hdc, ppfd);
```

## 参见

- [本区域目录](../)