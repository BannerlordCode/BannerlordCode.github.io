---
title: "Shader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Shader`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Shader

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Shader`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/Shader.cs`

## Overview

`Shader` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateShader
`public static Shader CreateShader(GraphicsContext graphicsContext, string vertexShaderCode, string fragmentShaderCode)`

**Purpose:** Creates a new `shader` instance or object.

### CompileShaders
`public static int CompileShaders(string vertexShaderCode, string fragmentShaderCode)`

**Purpose:** Handles logic related to `compile shaders`.

### SetTexture
`public void SetTexture(string name, OpenGLTexture texture)`

**Purpose:** Sets the value or state of `texture`.

### SetColor
`public void SetColor(string name, Color color)`

**Purpose:** Sets the value or state of `color`.

### Use
`public void Use()`

**Purpose:** Handles logic related to `use`.

### StopUsing
`public void StopUsing()`

**Purpose:** Handles logic related to `stop using`.

### SetMatrix
`public void SetMatrix(string name, in Matrix4x4 matrix)`

**Purpose:** Sets the value or state of `matrix`.

### SetBoolean
`public void SetBoolean(string name, bool value)`

**Purpose:** Sets the value or state of `boolean`.

### SetFloat
`public void SetFloat(string name, float value)`

**Purpose:** Sets the value or state of `float`.

### SetVector2
`public void SetVector2(string name, Vector2 value)`

**Purpose:** Sets the value or state of `vector2`.

## Usage Example

```csharp
Shader.CreateShader(graphicsContext, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)