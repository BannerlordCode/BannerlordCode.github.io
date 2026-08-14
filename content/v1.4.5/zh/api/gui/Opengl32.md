---
title: "Opengl32"
description: "Opengl32 的自动生成类参考。"
---
# Opengl32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Opengl32`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/Native/OpenGL/Opengl32.cs`

## 概述

`Opengl32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DrawArrays
`public static extern void DrawArrays(BeginMode mode, int first, int count)`

**用途 / Purpose:** 调用 DrawArrays 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.DrawArrays(mode, 0, 0);
```

### GetInteger
`public static extern void GetInteger(Target target, int parameters)`

**用途 / Purpose:** 读取并返回当前对象中 integer 的结果。

```csharp
// 静态调用，不需要实例
Opengl32.GetInteger(target, 0);
```

### Scissor
`public static extern void Scissor(int x, int y, int width, int height)`

**用途 / Purpose:** 调用 Scissor 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Scissor(0, 0, 0, 0);
```

### GetString
`public static string GetString(uint name)`

**用途 / Purpose:** 读取并返回当前对象中 string 的结果。

```csharp
// 静态调用，不需要实例
Opengl32.GetString(0);
```

### PixelStore
`public static extern void PixelStore(Target pname, int param)`

**用途 / Purpose:** 调用 PixelStore 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.PixelStore(pname, 0);
```

### PixelZoom
`public static extern void PixelZoom(float xfactor, float yfactor)`

**用途 / Purpose:** 调用 PixelZoom 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.PixelZoom(0, 0);
```

### ReadPixels
`public static extern void ReadPixels(int x, int y, int width, int height, PixelFormat format, DataType type, byte pixels)`

**用途 / Purpose:** 从当前实例读取pixels相关数据。

```csharp
// 静态调用，不需要实例
Opengl32.ReadPixels(0, 0, 0, 0, format, type, 0);
```

### CopyPixels
`public static extern void CopyPixels(int x, int y, int width, int height, PixelFormat type)`

**用途 / Purpose:** 把当前对象的pixels状态复制到目标对象。

```csharp
// 静态调用，不需要实例
Opengl32.CopyPixels(0, 0, 0, 0, type);
```

### DeleteTextures
`public static extern void DeleteTextures(int n, int textures)`

**用途 / Purpose:** 调用 DeleteTextures 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.DeleteTextures(0, 0);
```

### BlendFunc
`public static extern void BlendFunc(BlendingSourceFactor sfactor, BlendingDestinationFactor dfactor)`

**用途 / Purpose:** 调用 BlendFunc 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.BlendFunc(sfactor, dfactor);
```

### Viewport
`public static extern void Viewport(int x, int y, int width, int height)`

**用途 / Purpose:** 调用 Viewport 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Viewport(0, 0, 0, 0);
```

### MultMatrix
`public static extern void MultMatrix(float matrix)`

**用途 / Purpose:** 调用 MultMatrix 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.MultMatrix(0);
```

### LoadMatrix
`public static extern void LoadMatrix(float matrix)`

**用途 / Purpose:** 从持久化存储或流中读取 matrix。

```csharp
// 静态调用，不需要实例
Opengl32.LoadMatrix(0);
```

### LoadMatrix
`public static extern void LoadMatrix(ref Matrix4x4 matrix)`

**用途 / Purpose:** 从持久化存储或流中读取 matrix。

```csharp
// 静态调用，不需要实例
Opengl32.LoadMatrix(matrix);
```

### ColorMaterial
`public static extern void ColorMaterial(uint face, uint mode)`

**用途 / Purpose:** 调用 ColorMaterial 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.ColorMaterial(0, 0);
```

### TexCoordPointer
`public static extern void TexCoordPointer(int size, DataType type, int stride, float vertexData)`

**用途 / Purpose:** 调用 TexCoordPointer 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.TexCoordPointer(0, type, 0, 0);
```

### VertexPointer
`public static extern void VertexPointer(int size, DataType type, int stride, float vertexData)`

**用途 / Purpose:** 调用 VertexPointer 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.VertexPointer(0, type, 0, 0);
```

### NormalPointer
`public static extern void NormalPointer(DataType type, int stride, float normalData)`

**用途 / Purpose:** 调用 NormalPointer 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.NormalPointer(type, 0, 0);
```

### DrawElements
`public static extern void DrawElements(BeginMode mode, int count, DataType type, uint indices)`

**用途 / Purpose:** 调用 DrawElements 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.DrawElements(mode, 0, type, 0);
```

### DisableClientState
`public static extern void DisableClientState(uint array)`

**用途 / Purpose:** 调用 DisableClientState 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.DisableClientState(0);
```

### EnableClientState
`public static extern void EnableClientState(uint array)`

**用途 / Purpose:** 调用 EnableClientState 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.EnableClientState(0);
```

### Translate
`public static extern void Translate(float x, float y, float z)`

**用途 / Purpose:** 调用 Translate 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Translate(0, 0, 0);
```

### Lightfv
`public static extern void Lightfv(uint light, uint pname, float parameters)`

**用途 / Purpose:** 调用 Lightfv 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Lightfv(0, 0, 0);
```

### Hint
`public static extern void Hint(uint target, uint mode)`

**用途 / Purpose:** 调用 Hint 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Hint(0, 0);
```

### MatrixMode
`public static extern void MatrixMode(MatrixMode mode)`

**用途 / Purpose:** 调用 MatrixMode 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.MatrixMode(mode);
```

### DepthFunc
`public static extern void DepthFunc(uint mode)`

**用途 / Purpose:** 调用 DepthFunc 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.DepthFunc(0);
```

### ShadeModel
`public static extern void ShadeModel(ShadingModel func)`

**用途 / Purpose:** 调用 ShadeModel 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.ShadeModel(func);
```

### ClearDepth
`public static extern void ClearDepth(double depth)`

**用途 / Purpose:** 清空当前对象中的depth。

```csharp
// 静态调用，不需要实例
Opengl32.ClearDepth(0);
```

### PopMatrix
`public static extern void PopMatrix()`

**用途 / Purpose:** 调用 PopMatrix 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.PopMatrix();
```

### PushMatrix
`public static extern void PushMatrix()`

**用途 / Purpose:** 调用 PushMatrix 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.PushMatrix();
```

### Rotate
`public static extern void Rotate(double angle, double x, double y, double z)`

**用途 / Purpose:** 调用 Rotate 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Rotate(0, 0, 0, 0);
```

### Rotate
`public static extern void Rotate(float angle, float x, float y, float z)`

**用途 / Purpose:** 调用 Rotate 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Rotate(0, 0, 0, 0);
```

### Scale
`public static extern void Scale(double x, double y, double z)`

**用途 / Purpose:** 调用 Scale 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Scale(0, 0, 0);
```

### Scale
`public static extern void Scale(float x, float y, float z)`

**用途 / Purpose:** 调用 Scale 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Scale(0, 0, 0);
```

### LoadIdentity
`public static extern void LoadIdentity()`

**用途 / Purpose:** 从持久化存储或流中读取 identity。

```csharp
// 静态调用，不需要实例
Opengl32.LoadIdentity();
```

### Clear
`public static extern void Clear(AttribueMask mask)`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
Opengl32.Clear(mask);
```

### Begin
`public static extern void Begin(BeginMode mode)`

**用途 / Purpose:** 调用 Begin 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Begin(mode);
```

### End
`public static extern void End()`

**用途 / Purpose:** 调用 End 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.End();
```

### Vertex
`public static extern void Vertex(int x, int y)`

**用途 / Purpose:** 调用 Vertex 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Vertex(0, 0);
```

### Vertex
`public static extern void Vertex(float x, float y, float z)`

**用途 / Purpose:** 调用 Vertex 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Vertex(0, 0, 0);
```

### Color
`public static extern void Color(float red, float green, float blue)`

**用途 / Purpose:** 调用 Color 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Color(0, 0, 0);
```

### Color
`public static extern void Color(float red, float green, float blue, float alpha)`

**用途 / Purpose:** 调用 Color 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Color(0, 0, 0, 0);
```

### ClearColor
`public static extern void ClearColor(float red, float green, float blue, float alpha)`

**用途 / Purpose:** 清空当前对象中的color。

```csharp
// 静态调用，不需要实例
Opengl32.ClearColor(0, 0, 0, 0);
```

### TexImage2D
`public static extern void TexImage2D(Target target, int level, uint internalformat, int width, int height, int border, PixelFormat format, DataType type, IntPtr pixels)`

**用途 / Purpose:** 调用 TexImage2D 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.TexImage2D(target, 0, 0, 0, 0, 0, format, type, pixels);
```

### TexImage2D
`public static extern void TexImage2D(Target target, int level, uint internalformat, int width, int height, int border, PixelFormat format, DataType type, byte pixels)`

**用途 / Purpose:** 调用 TexImage2D 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.TexImage2D(target, 0, 0, 0, 0, 0, format, type, 0);
```

### GenTextures
`public static extern void GenTextures(int size, ref int textures)`

**用途 / Purpose:** 调用 GenTextures 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.GenTextures(0, textures);
```

### BindTexture
`public static extern void BindTexture(Target target, int texture)`

**用途 / Purpose:** 调用 BindTexture 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.BindTexture(target, 0);
```

### Enable
`public static extern void Enable(Target cap)`

**用途 / Purpose:** 调用 Enable 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Enable(cap);
```

### Disable
`public static extern void Disable(Target cap)`

**用途 / Purpose:** 调用 Disable 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Disable(cap);
```

### TexCoord
`public static extern void TexCoord(float s, float t)`

**用途 / Purpose:** 调用 TexCoord 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.TexCoord(0, 0);
```

### TexParameteri
`public static extern void TexParameteri(Target target, TextureParameterName pname, int param)`

**用途 / Purpose:** 调用 TexParameteri 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.TexParameteri(target, pname, 0);
```

### GetError
`public static extern uint GetError()`

**用途 / Purpose:** 读取并返回当前对象中 error 的结果。

```csharp
// 静态调用，不需要实例
Opengl32.GetError();
```

### Flush
`public static extern void Flush()`

**用途 / Purpose:** 调用 Flush 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.Flush();
```

### Finish
`public static extern void Finish()`

**用途 / Purpose:** 结束当前对象的流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
Opengl32.Finish();
```

### wglCreateContext
`public static extern IntPtr wglCreateContext(IntPtr hdc)`

**用途 / Purpose:** 调用 wglCreateContext 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.wglCreateContext(hdc);
```

### wglMakeCurrent
`public static extern bool wglMakeCurrent(IntPtr hdc, IntPtr hglrc)`

**用途 / Purpose:** 调用 wglMakeCurrent 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.wglMakeCurrent(hdc, hglrc);
```

### wglGetProcAddress
`public static extern IntPtr wglGetProcAddress(string name)`

**用途 / Purpose:** 调用 wglGetProcAddress 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.wglGetProcAddress("example");
```

### wglDeleteContext
`public static extern bool wglDeleteContext(IntPtr hglrc)`

**用途 / Purpose:** 调用 wglDeleteContext 对应的操作。

```csharp
// 静态调用，不需要实例
Opengl32.wglDeleteContext(hglrc);
```

## 使用示例

```csharp
Opengl32.DrawArrays(mode, 0, 0);
```

## 参见

- [本区域目录](../)