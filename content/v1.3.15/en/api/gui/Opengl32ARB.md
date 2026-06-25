---
title: "Opengl32ARB"
description: "Auto-generated class reference for Opengl32ARB."
---
# Opengl32ARB

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Opengl32ARB`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/OpenGL/Opengl32ARB.cs`

## Overview

`Opengl32ARB` lives in `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadContextExtension
`public static void LoadContextExtension(IntPtr hdc)`

**Purpose:** Reads `context extension` from persistent storage or a stream.

```csharp
// Static call; no instance required
Opengl32ARB.LoadContextExtension(hdc);
```

### LoadExtensions
`public static void LoadExtensions(IntPtr hdc)`

**Purpose:** Reads `extensions` from persistent storage or a stream.

```csharp
// Static call; no instance required
Opengl32ARB.LoadExtensions(hdc);
```

### ShaderSource
`public static void ShaderSource(int shader, string shaderSource)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Opengl32ARB.ShaderSource(0, "example");
```

### GetUniformLocation
`public static int GetUniformLocation(int program, string parameter)`

**Purpose:** Reads and returns the `uniform location` value held by the current object.

```csharp
// Static call; no instance required
Opengl32ARB.GetUniformLocation(0, "example");
```

### UniformMatrix4fv
`public static void UniformMatrix4fv(int location, int count, bool isTranspose, Matrix4x4 matrix)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Opengl32ARB.UniformMatrix4fv(0, 0, false, matrix);
```

### BlendFuncSeparateDelegate
`public delegate void BlendFuncSeparateDelegate(BlendingSourceFactor srcRGB, BlendingDestinationFactor dstRGB, BlendingSourceFactor srcAlpha, BlendingDestinationFactor dstAlpha)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BlendFuncSeparateDelegate(srcRGB, dstRGB, srcAlpha, dstAlpha);
```

### ActiveTextureDelegate
`public delegate void ActiveTextureDelegate(TextureUnit textureUnit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.ActiveTextureDelegate(textureUnit);
```

### BindVertexArrayDelegate
`public delegate void BindVertexArrayDelegate(uint buffer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BindVertexArrayDelegate(0);
```

### GenVertexArraysDelegate
`public delegate void GenVertexArraysDelegate(int size, uint buffers)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GenVertexArraysDelegate(0, 0);
```

### VertexAttribPointerDelegate
`public delegate void VertexAttribPointerDelegate(uint index, int size, DataType type, byte normalized, int stride, IntPtr pointer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.VertexAttribPointerDelegate(0, 0, type, 0, 0, pointer);
```

### EnableVertexAttribArrayDelegate
`public delegate void EnableVertexAttribArrayDelegate(uint index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.EnableVertexAttribArrayDelegate(0);
```

### DisableVertexAttribArrayDelegate
`public delegate void DisableVertexAttribArrayDelegate(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DisableVertexAttribArrayDelegate(0);
```

### GenBuffersDelegate
`public delegate void GenBuffersDelegate(int size, uint buffers)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GenBuffersDelegate(0, 0);
```

### BindBufferDelegate
`public delegate void BindBufferDelegate(BufferBindingTarget target, uint buffer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BindBufferDelegate(target, 0);
```

### BufferDataDelegate
`public delegate void BufferDataDelegate(BufferBindingTarget target, int size, IntPtr data, int usage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BufferDataDelegate(target, 0, data, 0);
```

### BufferSubDataDelegate
`public delegate void BufferSubDataDelegate(BufferBindingTarget target, int offset, int size, IntPtr data)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.BufferSubDataDelegate(target, 0, 0, data);
```

### DetachShaderDelegate
`public delegate void DetachShaderDelegate(int program, int shader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DetachShaderDelegate(0, 0);
```

### DeleteShaderDelegate
`public delegate int DeleteShaderDelegate(int shader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.DeleteShaderDelegate(0);
```

### GetProgramInfoLogDelegate
`public delegate void GetProgramInfoLogDelegate(int shader, int maxLength, out int length, byte output)`

**Purpose:** Reads and returns the `program info log delegate` value held by the current object.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetProgramInfoLogDelegate(0, 0, length, 0);
```

### GetShaderInfoLogDelegate
`public delegate void GetShaderInfoLogDelegate(int shader, int maxLength, out int length, byte output)`

**Purpose:** Reads and returns the `shader info log delegate` value held by the current object.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetShaderInfoLogDelegate(0, 0, length, 0);
```

### GetProgramivDelegate
`public delegate void GetProgramivDelegate(int program, int paremeterName, out int returnValue)`

**Purpose:** Reads and returns the `programiv delegate` value held by the current object.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetProgramivDelegate(0, 0, returnValue);
```

### GetShaderivDelegate
`public delegate void GetShaderivDelegate(int shader, int paremeterName, out int returnValue)`

**Purpose:** Reads and returns the `shaderiv delegate` value held by the current object.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.GetShaderivDelegate(0, 0, returnValue);
```

### Uniform4fDelegate
`public delegate void Uniform4fDelegate(int location, float f1, float f2, float f3, float f4)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform4fDelegate(0, 0, 0, 0, 0);
```

### Uniform1iDelegate
`public delegate void Uniform1iDelegate(int location, int i)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform1iDelegate(0, 0);
```

### Uniform1fDelegate
`public delegate void Uniform1fDelegate(int location, float f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform1fDelegate(0, 0);
```

### Uniform2fDelegate
`public delegate void Uniform2fDelegate(int location, float f1, float f2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.Uniform2fDelegate(0, 0, 0);
```

### UseProgramDelegate
`public delegate void UseProgramDelegate(int program)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.UseProgramDelegate(0);
```

### DeleteProgramDelegate
`public delegate void DeleteProgramDelegate(int program)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.DeleteProgramDelegate(0);
```

### LinkProgramDelegate
`public delegate void LinkProgramDelegate(int program)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.LinkProgramDelegate(0);
```

### AttachShaderDelegate
`public delegate void AttachShaderDelegate(int program, int shader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
opengl32ARB.AttachShaderDelegate(0, 0);
```

### CompileShaderDelegate
`public delegate int CompileShaderDelegate(int shader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CompileShaderDelegate(0);
```

### CreateProgramObjectDelegate
`public delegate int CreateProgramObjectDelegate()`

**Purpose:** Constructs a new `program object delegate` entity and returns it to the caller.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CreateProgramObjectDelegate();
```

### CreateShaderObjectDelegate
`public delegate int CreateShaderObjectDelegate(ShaderType shaderType)`

**Purpose:** Constructs a new `shader object delegate` entity and returns it to the caller.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.CreateShaderObjectDelegate(shaderType);
```

### wglCreateContextAttribsDelegate
`public delegate IntPtr wglCreateContextAttribsDelegate(IntPtr hDC, IntPtr hShareContext, int attribList)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Opengl32ARB from the subsystem API first
Opengl32ARB opengl32ARB = ...;
var result = opengl32ARB.wglCreateContextAttribsDelegate(hDC, hShareContext, 0);
```

## Usage Example

```csharp
Opengl32ARB.LoadContextExtension(hdc);
```

## See Also

- [Area Index](../)