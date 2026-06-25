---
title: "Gdi32"
description: "Auto-generated class reference for Gdi32."
---
# Gdi32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Gdi32`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/Gdi32.cs`

## Overview

`Gdi32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ChoosePixelFormat
`public static extern int ChoosePixelFormat(IntPtr hdc, ref PixelFormatDescriptor ppfd)`

**Purpose:** Executes the ChoosePixelFormat logic.

```csharp
// Static call; no instance required
Gdi32.ChoosePixelFormat(hdc, ppfd);
```

### SetPixelFormat
`public static extern bool SetPixelFormat(IntPtr hdc, int iPixelFormat, ref PixelFormatDescriptor ppfd)`

**Purpose:** Assigns a new value to pixel format and updates the object's internal state.

```csharp
// Static call; no instance required
Gdi32.SetPixelFormat(hdc, 0, ppfd);
```

### SwapBuffers
`public static extern bool SwapBuffers(IntPtr hdc)`

**Purpose:** Executes the SwapBuffers logic.

```csharp
// Static call; no instance required
Gdi32.SwapBuffers(hdc);
```

### CreateRectRgn
`public static extern IntPtr CreateRectRgn(int x1, int y1, int x2, int y2)`

**Purpose:** Constructs a new rect rgn entity and returns it to the caller.

```csharp
// Static call; no instance required
Gdi32.CreateRectRgn(0, 0, 0, 0);
```

### CreateSolidBrush
`public static extern IntPtr CreateSolidBrush(IntPtr colorRef)`

**Purpose:** Constructs a new solid brush entity and returns it to the caller.

```csharp
// Static call; no instance required
Gdi32.CreateSolidBrush(colorRef);
```

### CreateCompatibleDC
`public static extern IntPtr CreateCompatibleDC(IntPtr hdc)`

**Purpose:** Constructs a new compatible d c entity and returns it to the caller.

```csharp
// Static call; no instance required
Gdi32.CreateCompatibleDC(hdc);
```

### SelectObject
`public static extern IntPtr SelectObject(IntPtr hdc, IntPtr h)`

**Purpose:** Executes the SelectObject logic.

```csharp
// Static call; no instance required
Gdi32.SelectObject(hdc, h);
```

### DeleteObject
`public static extern bool DeleteObject(IntPtr ho)`

**Purpose:** Executes the DeleteObject logic.

```csharp
// Static call; no instance required
Gdi32.DeleteObject(ho);
```

### DeleteDC
`public static extern bool DeleteDC(IntPtr hdc)`

**Purpose:** Executes the DeleteDC logic.

```csharp
// Static call; no instance required
Gdi32.DeleteDC(hdc);
```

### CreateCompatibleBitmap
`public static extern IntPtr CreateCompatibleBitmap(IntPtr hdc, int cx, int cy)`

**Purpose:** Constructs a new compatible bitmap entity and returns it to the caller.

```csharp
// Static call; no instance required
Gdi32.CreateCompatibleBitmap(hdc, 0, 0);
```

### StretchDIBits
`public static extern int StretchDIBits(IntPtr hdc, int xDest, int yDest, int DestWidth, int DestHeight, int xSrc, int ySrc, int SrcWidth, int SrcHeight, byte lpBits, ref BitmapInfo lpbmi, uint iUsage, int rop)`

**Purpose:** Executes the StretchDIBits logic.

```csharp
// Static call; no instance required
Gdi32.StretchDIBits(hdc, 0, 0, 0, 0, 0, 0, 0, 0, 0, lpbmi, 0, 0);
```

## Usage Example

```csharp
Gdi32.ChoosePixelFormat(hdc, ppfd);
```

## See Also

- [Area Index](../)