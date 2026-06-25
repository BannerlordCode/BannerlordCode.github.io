---
title: "Opengl32ARB"
description: "Opengl32ARB 的自动生成类参考。"
---
# Opengl32ARB

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Opengl32ARB`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/Native/OpenGL/Opengl32ARB.cs`

## 概述

`Opengl32ARB` 位于 `TaleWorlds.TwoDimension.Standalone.Native.OpenGL`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadContextExtension
`public static void LoadContextExtension(IntPtr hdc)`

**用途 / Purpose:** 从持久化存储或流中读取 「context extension」。

```csharp
// 静态调用，不需要实例
Opengl32ARB.LoadContextExtension(hdc);
```

### LoadExtensions
`public static void LoadExtensions(IntPtr hdc)`

**用途 / Purpose:** 从持久化存储或流中读取 「extensions」。

```csharp
// 静态调用，不需要实例
Opengl32ARB.LoadExtensions(hdc);
```

### ShaderSource
`public static void ShaderSource(int shader, string shaderSource)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Opengl32ARB.ShaderSource(0, "example");
```

### GetUniformLocation
`public static int GetUniformLocation(int program, string parameter)`

**用途 / Purpose:** 读取并返回当前对象中 「uniform location」 的结果。

```csharp
// 静态调用，不需要实例
Opengl32ARB.GetUniformLocation(0, "example");
```

### UniformMatrix4fv
`public static void UniformMatrix4fv(int location, int count, bool isTranspose, Matrix4x4 matrix)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Opengl32ARB.UniformMatrix4fv(0, 0, false, matrix);
```

### BlendFuncSeparateDelegate
`public delegate void BlendFuncSeparateDelegate(BlendingSourceFactor srcRGB, BlendingDestinationFactor dstRGB, BlendingSourceFactor srcAlpha, BlendingDestinationFactor dstAlpha)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BlendFuncSeparateDelegate(srcRGB, dstRGB, srcAlpha, dstAlpha);
```

### ActiveTextureDelegate
`public delegate void ActiveTextureDelegate(TextureUnit textureUnit)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.ActiveTextureDelegate(textureUnit);
```

### BindVertexArrayDelegate
`public delegate void BindVertexArrayDelegate(uint buffer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BindVertexArrayDelegate(0);
```

### GenVertexArraysDelegate
`public delegate void GenVertexArraysDelegate(int size, uint buffers)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GenVertexArraysDelegate(0, 0);
```

### VertexAttribPointerDelegate
`public delegate void VertexAttribPointerDelegate(uint index, int size, DataType type, byte normalized, int stride, IntPtr pointer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.VertexAttribPointerDelegate(0, 0, type, 0, 0, pointer);
```

### EnableVertexAttribArrayDelegate
`public delegate void EnableVertexAttribArrayDelegate(uint index)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.EnableVertexAttribArrayDelegate(0);
```

### DisableVertexAttribArrayDelegate
`public delegate void DisableVertexAttribArrayDelegate(int index)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DisableVertexAttribArrayDelegate(0);
```

### GenBuffersDelegate
`public delegate void GenBuffersDelegate(int size, uint buffers)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GenBuffersDelegate(0, 0);
```

### BindBufferDelegate
`public delegate void BindBufferDelegate(BufferBindingTarget target, uint buffer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BindBufferDelegate(target, 0);
```

### BufferDataDelegate
`public delegate void BufferDataDelegate(BufferBindingTarget target, int size, IntPtr data, int usage)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BufferDataDelegate(target, 0, data, 0);
```

### BufferSubDataDelegate
`public delegate void BufferSubDataDelegate(BufferBindingTarget target, int offset, int size, IntPtr data)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BufferSubDataDelegate(target, 0, 0, data);
```

### DetachShaderDelegate
`public delegate void DetachShaderDelegate(int program, int shader)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DetachShaderDelegate(0, 0);
```

### DeleteShaderDelegate
`public delegate int DeleteShaderDelegate(int shader)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.DeleteShaderDelegate(0);
```

### GetProgramInfoLogDelegate
`public delegate void GetProgramInfoLogDelegate(int shader, int maxLength, out int length, byte output)`

**用途 / Purpose:** 读取并返回当前对象中 「program info log delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetProgramInfoLogDelegate(0, 0, length, 0);
```

### GetShaderInfoLogDelegate
`public delegate void GetShaderInfoLogDelegate(int shader, int maxLength, out int length, byte output)`

**用途 / Purpose:** 读取并返回当前对象中 「shader info log delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetShaderInfoLogDelegate(0, 0, length, 0);
```

### GetProgramivDelegate
`public delegate void GetProgramivDelegate(int program, int paremeterName, out int returnValue)`

**用途 / Purpose:** 读取并返回当前对象中 「programiv delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetProgramivDelegate(0, 0, returnValue);
```

### GetShaderivDelegate
`public delegate void GetShaderivDelegate(int shader, int paremeterName, out int returnValue)`

**用途 / Purpose:** 读取并返回当前对象中 「shaderiv delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetShaderivDelegate(0, 0, returnValue);
```

### Uniform4fDelegate
`public delegate void Uniform4fDelegate(int location, float f1, float f2, float f3, float f4)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform4fDelegate(0, 0, 0, 0, 0);
```

### Uniform1iDelegate
`public delegate void Uniform1iDelegate(int location, int i)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform1iDelegate(0, 0);
```

### Uniform1fDelegate
`public delegate void Uniform1fDelegate(int location, float f)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform1fDelegate(0, 0);
```

### Uniform2fDelegate
`public delegate void Uniform2fDelegate(int location, float f1, float f2)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform2fDelegate(0, 0, 0);
```

### UseProgramDelegate
`public delegate void UseProgramDelegate(int program)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.UseProgramDelegate(0);
```

### DeleteProgramDelegate
`public delegate void DeleteProgramDelegate(int program)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DeleteProgramDelegate(0);
```

### LinkProgramDelegate
`public delegate void LinkProgramDelegate(int program)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.LinkProgramDelegate(0);
```

### AttachShaderDelegate
`public delegate void AttachShaderDelegate(int program, int shader)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
opengl32ARB.AttachShaderDelegate(0, 0);
```

### CompileShaderDelegate
`public delegate int CompileShaderDelegate(int shader)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CompileShaderDelegate(0);
```

### CreateProgramObjectDelegate
`public delegate int CreateProgramObjectDelegate()`

**用途 / Purpose:** 构建一个新的 「program object delegate」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CreateProgramObjectDelegate();
```

### CreateShaderObjectDelegate
`public delegate int CreateShaderObjectDelegate(ShaderType shaderType)`

**用途 / Purpose:** 构建一个新的 「shader object delegate」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CreateShaderObjectDelegate(shaderType);
```

### wglCreateContextAttribsDelegate
`public delegate IntPtr wglCreateContextAttribsDelegate(IntPtr hDC, IntPtr hShareContext, int attribList)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Opengl32ARB 实例
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.wglCreateContextAttribsDelegate(hDC, hShareContext, 0);
```

## 使用示例

```csharp
Opengl32ARB.LoadContextExtension(hdc);
```

## 参见

- [本区域目录](../)