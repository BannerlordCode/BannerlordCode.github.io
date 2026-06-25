---
title: "Opengl32"
description: "Auto-generated class reference for Opengl32."
---
# Opengl32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Opengl32`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.OpenGL/Opengl32.cs`

## Overview

`Opengl32` lives in `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DrawArrays
`public static extern void DrawArrays(BeginMode mode, int first, int count)`

**Purpose:** Executes the DrawArrays logic.

```csharp
// Static call; no instance required
Opengl32.DrawArrays(mode, 0, 0);
```

### GetInteger
`public static extern void GetInteger(Target target, int parameters)`

**Purpose:** Reads and returns the integer value held by the this instance.

```csharp
// Static call; no instance required
Opengl32.GetInteger(target, 0);
```

### Scissor
`public static extern void Scissor(int x, int y, int width, int height)`

**Purpose:** Executes the Scissor logic.

```csharp
// Static call; no instance required
Opengl32.Scissor(0, 0, 0, 0);
```

### GetString
`public static string GetString(uint name)`

**Purpose:** Reads and returns the string value held by the this instance.

```csharp
// Static call; no instance required
Opengl32.GetString(0);
```

### PixelStore
`public static extern void PixelStore(Target pname, int param)`

**Purpose:** Executes the PixelStore logic.

```csharp
// Static call; no instance required
Opengl32.PixelStore(pname, 0);
```

### PixelZoom
`public static extern void PixelZoom(float xfactor, float yfactor)`

**Purpose:** Executes the PixelZoom logic.

```csharp
// Static call; no instance required
Opengl32.PixelZoom(0, 0);
```

### ReadPixels
`public static extern void ReadPixels(int x, int y, int width, int height, PixelFormat format, DataType type, byte pixels)`

**Purpose:** Reads the data or state of pixels.

```csharp
// Static call; no instance required
Opengl32.ReadPixels(0, 0, 0, 0, format, type, 0);
```

### CopyPixels
`public static extern void CopyPixels(int x, int y, int width, int height, PixelFormat type)`

**Purpose:** Copies the pixels state of the this instance to a target.

```csharp
// Static call; no instance required
Opengl32.CopyPixels(0, 0, 0, 0, type);
```

### DeleteTextures
`public static extern void DeleteTextures(int n, int textures)`

**Purpose:** Executes the DeleteTextures logic.

```csharp
// Static call; no instance required
Opengl32.DeleteTextures(0, 0);
```

### BlendFunc
`public static extern void BlendFunc(BlendingSourceFactor sfactor, BlendingDestinationFactor dfactor)`

**Purpose:** Executes the BlendFunc logic.

```csharp
// Static call; no instance required
Opengl32.BlendFunc(sfactor, dfactor);
```

### Viewport
`public static extern void Viewport(int x, int y, int width, int height)`

**Purpose:** Executes the Viewport logic.

```csharp
// Static call; no instance required
Opengl32.Viewport(0, 0, 0, 0);
```

### MultMatrix
`public static extern void MultMatrix(float matrix)`

**Purpose:** Executes the MultMatrix logic.

```csharp
// Static call; no instance required
Opengl32.MultMatrix(0);
```

### LoadMatrix
`public static extern void LoadMatrix(float matrix)`

**Purpose:** Reads matrix from persistent storage or a stream.

```csharp
// Static call; no instance required
Opengl32.LoadMatrix(0);
```

### LoadMatrix
`public static extern void LoadMatrix(ref Matrix4x4 matrix)`

**Purpose:** Reads matrix from persistent storage or a stream.

```csharp
// Static call; no instance required
Opengl32.LoadMatrix(matrix);
```

### ColorMaterial
`public static extern void ColorMaterial(uint face, uint mode)`

**Purpose:** Executes the ColorMaterial logic.

```csharp
// Static call; no instance required
Opengl32.ColorMaterial(0, 0);
```

### TexCoordPointer
`public static extern void TexCoordPointer(int size, DataType type, int stride, float vertexData)`

**Purpose:** Executes the TexCoordPointer logic.

```csharp
// Static call; no instance required
Opengl32.TexCoordPointer(0, type, 0, 0);
```

### VertexPointer
`public static extern void VertexPointer(int size, DataType type, int stride, float vertexData)`

**Purpose:** Executes the VertexPointer logic.

```csharp
// Static call; no instance required
Opengl32.VertexPointer(0, type, 0, 0);
```

### NormalPointer
`public static extern void NormalPointer(DataType type, int stride, float normalData)`

**Purpose:** Executes the NormalPointer logic.

```csharp
// Static call; no instance required
Opengl32.NormalPointer(type, 0, 0);
```

### DrawElements
`public static extern void DrawElements(BeginMode mode, int count, DataType type, uint indices)`

**Purpose:** Executes the DrawElements logic.

```csharp
// Static call; no instance required
Opengl32.DrawElements(mode, 0, type, 0);
```

### DisableClientState
`public static extern void DisableClientState(uint array)`

**Purpose:** Executes the DisableClientState logic.

```csharp
// Static call; no instance required
Opengl32.DisableClientState(0);
```

### EnableClientState
`public static extern void EnableClientState(uint array)`

**Purpose:** Executes the EnableClientState logic.

```csharp
// Static call; no instance required
Opengl32.EnableClientState(0);
```

### Translate
`public static extern void Translate(float x, float y, float z)`

**Purpose:** Executes the Translate logic.

```csharp
// Static call; no instance required
Opengl32.Translate(0, 0, 0);
```

### Lightfv
`public static extern void Lightfv(uint light, uint pname, float parameters)`

**Purpose:** Executes the Lightfv logic.

```csharp
// Static call; no instance required
Opengl32.Lightfv(0, 0, 0);
```

### Hint
`public static extern void Hint(uint target, uint mode)`

**Purpose:** Executes the Hint logic.

```csharp
// Static call; no instance required
Opengl32.Hint(0, 0);
```

### MatrixMode
`public static extern void MatrixMode(MatrixMode mode)`

**Purpose:** Executes the MatrixMode logic.

```csharp
// Static call; no instance required
Opengl32.MatrixMode(mode);
```

### DepthFunc
`public static extern void DepthFunc(uint mode)`

**Purpose:** Executes the DepthFunc logic.

```csharp
// Static call; no instance required
Opengl32.DepthFunc(0);
```

### ShadeModel
`public static extern void ShadeModel(ShadingModel func)`

**Purpose:** Executes the ShadeModel logic.

```csharp
// Static call; no instance required
Opengl32.ShadeModel(func);
```

### ClearDepth
`public static extern void ClearDepth(double depth)`

**Purpose:** Removes all depth from the this instance.

```csharp
// Static call; no instance required
Opengl32.ClearDepth(0);
```

### PopMatrix
`public static extern void PopMatrix()`

**Purpose:** Executes the PopMatrix logic.

```csharp
// Static call; no instance required
Opengl32.PopMatrix();
```

### PushMatrix
`public static extern void PushMatrix()`

**Purpose:** Executes the PushMatrix logic.

```csharp
// Static call; no instance required
Opengl32.PushMatrix();
```

### Rotate
`public static extern void Rotate(double angle, double x, double y, double z)`

**Purpose:** Executes the Rotate logic.

```csharp
// Static call; no instance required
Opengl32.Rotate(0, 0, 0, 0);
```

### Rotate
`public static extern void Rotate(float angle, float x, float y, float z)`

**Purpose:** Executes the Rotate logic.

```csharp
// Static call; no instance required
Opengl32.Rotate(0, 0, 0, 0);
```

### Scale
`public static extern void Scale(double x, double y, double z)`

**Purpose:** Executes the Scale logic.

```csharp
// Static call; no instance required
Opengl32.Scale(0, 0, 0);
```

### Scale
`public static extern void Scale(float x, float y, float z)`

**Purpose:** Executes the Scale logic.

```csharp
// Static call; no instance required
Opengl32.Scale(0, 0, 0);
```

### LoadIdentity
`public static extern void LoadIdentity()`

**Purpose:** Reads identity from persistent storage or a stream.

```csharp
// Static call; no instance required
Opengl32.LoadIdentity();
```

### Clear
`public static extern void Clear(AttribueMask mask)`

**Purpose:** Removes all content from the this instance.

```csharp
// Static call; no instance required
Opengl32.Clear(mask);
```

### Begin
`public static extern void Begin(BeginMode mode)`

**Purpose:** Executes the Begin logic.

```csharp
// Static call; no instance required
Opengl32.Begin(mode);
```

### End
`public static extern void End()`

**Purpose:** Executes the End logic.

```csharp
// Static call; no instance required
Opengl32.End();
```

### Vertex
`public static extern void Vertex(int x, int y)`

**Purpose:** Executes the Vertex logic.

```csharp
// Static call; no instance required
Opengl32.Vertex(0, 0);
```

### Vertex
`public static extern void Vertex(float x, float y, float z)`

**Purpose:** Executes the Vertex logic.

```csharp
// Static call; no instance required
Opengl32.Vertex(0, 0, 0);
```

### Color
`public static extern void Color(float red, float green, float blue)`

**Purpose:** Executes the Color logic.

```csharp
// Static call; no instance required
Opengl32.Color(0, 0, 0);
```

### Color
`public static extern void Color(float red, float green, float blue, float alpha)`

**Purpose:** Executes the Color logic.

```csharp
// Static call; no instance required
Opengl32.Color(0, 0, 0, 0);
```

### ClearColor
`public static extern void ClearColor(float red, float green, float blue, float alpha)`

**Purpose:** Removes all color from the this instance.

```csharp
// Static call; no instance required
Opengl32.ClearColor(0, 0, 0, 0);
```

### TexImage2D
`public static extern void TexImage2D(Target target, int level, uint internalformat, int width, int height, int border, PixelFormat format, DataType type, IntPtr pixels)`

**Purpose:** Executes the TexImage2D logic.

```csharp
// Static call; no instance required
Opengl32.TexImage2D(target, 0, 0, 0, 0, 0, format, type, pixels);
```

### TexImage2D
`public static extern void TexImage2D(Target target, int level, uint internalformat, int width, int height, int border, PixelFormat format, DataType type, byte pixels)`

**Purpose:** Executes the TexImage2D logic.

```csharp
// Static call; no instance required
Opengl32.TexImage2D(target, 0, 0, 0, 0, 0, format, type, 0);
```

### GenTextures
`public static extern void GenTextures(int size, ref int textures)`

**Purpose:** Executes the GenTextures logic.

```csharp
// Static call; no instance required
Opengl32.GenTextures(0, textures);
```

### BindTexture
`public static extern void BindTexture(Target target, int texture)`

**Purpose:** Executes the BindTexture logic.

```csharp
// Static call; no instance required
Opengl32.BindTexture(target, 0);
```

### Enable
`public static extern void Enable(Target cap)`

**Purpose:** Executes the Enable logic.

```csharp
// Static call; no instance required
Opengl32.Enable(cap);
```

### Disable
`public static extern void Disable(Target cap)`

**Purpose:** Executes the Disable logic.

```csharp
// Static call; no instance required
Opengl32.Disable(cap);
```

### TexCoord
`public static extern void TexCoord(float s, float t)`

**Purpose:** Executes the TexCoord logic.

```csharp
// Static call; no instance required
Opengl32.TexCoord(0, 0);
```

### TexParameteri
`public static extern void TexParameteri(Target target, TextureParameterName pname, int param)`

**Purpose:** Executes the TexParameteri logic.

```csharp
// Static call; no instance required
Opengl32.TexParameteri(target, pname, 0);
```

### GetError
`public static extern uint GetError()`

**Purpose:** Reads and returns the error value held by the this instance.

```csharp
// Static call; no instance required
Opengl32.GetError();
```

### Flush
`public static extern void Flush()`

**Purpose:** Executes the Flush logic.

```csharp
// Static call; no instance required
Opengl32.Flush();
```

### Finish
`public static extern void Finish()`

**Purpose:** Concludes the this instance's flow and performs any cleanup.

```csharp
// Static call; no instance required
Opengl32.Finish();
```

### wglCreateContext
`public static extern IntPtr wglCreateContext(IntPtr hdc)`

**Purpose:** Executes the wglCreateContext logic.

```csharp
// Static call; no instance required
Opengl32.wglCreateContext(hdc);
```

### wglMakeCurrent
`public static extern bool wglMakeCurrent(IntPtr hdc, IntPtr hglrc)`

**Purpose:** Executes the wglMakeCurrent logic.

```csharp
// Static call; no instance required
Opengl32.wglMakeCurrent(hdc, hglrc);
```

### wglGetProcAddress
`public static extern IntPtr wglGetProcAddress(string name)`

**Purpose:** Executes the wglGetProcAddress logic.

```csharp
// Static call; no instance required
Opengl32.wglGetProcAddress("example");
```

### wglDeleteContext
`public static extern bool wglDeleteContext(IntPtr hglrc)`

**Purpose:** Executes the wglDeleteContext logic.

```csharp
// Static call; no instance required
Opengl32.wglDeleteContext(hglrc);
```

### wglGetCurrentContext
`public static extern IntPtr wglGetCurrentContext()`

**Purpose:** Executes the wglGetCurrentContext logic.

```csharp
// Static call; no instance required
Opengl32.wglGetCurrentContext();
```

## Usage Example

```csharp
Opengl32.DrawArrays(mode, 0, 0);
```

## See Also

- [Area Index](../)