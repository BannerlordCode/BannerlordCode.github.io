---
title: "Shader"
description: "Auto-generated class reference for Shader."
---
# Shader

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Shader`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/Shader.cs`

## Overview

`Shader` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateShader
`public static Shader CreateShader(GraphicsContext graphicsContext, string vertexShaderCode, string fragmentShaderCode)`

**Purpose:** **Purpose:** Constructs a new shader entity and returns it to the caller.

```csharp
// Static call; no instance required
Shader.CreateShader(graphicsContext, "example", "example");
```

### CompileShaders
`public static int CompileShaders(string vertexShaderCode, string fragmentShaderCode)`

**Purpose:** **Purpose:** Executes the CompileShaders logic.

```csharp
// Static call; no instance required
Shader.CompileShaders("example", "example");
```

### SetTexture
`public void SetTexture(string name, OpenGLTexture texture)`

**Purpose:** **Purpose:** Assigns a new value to texture and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetTexture("example", texture);
```

### SetColor
`public void SetColor(string name, Color color)`

**Purpose:** **Purpose:** Assigns a new value to color and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetColor("example", color);
```

### Use
`public void Use()`

**Purpose:** **Purpose:** Executes the Use logic.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.Use();
```

### StopUsing
`public void StopUsing()`

**Purpose:** **Purpose:** Stops the using flow or state machine.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.StopUsing();
```

### SetMatrix
`public void SetMatrix(string name, in Matrix4x4 matrix)`

**Purpose:** **Purpose:** Assigns a new value to matrix and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetMatrix("example", matrix);
```

### SetBoolean
`public void SetBoolean(string name, bool value)`

**Purpose:** **Purpose:** Assigns a new value to boolean and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetBoolean("example", false);
```

### SetFloat
`public void SetFloat(string name, float value)`

**Purpose:** **Purpose:** Assigns a new value to float and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetFloat("example", 0);
```

### SetVector2
`public void SetVector2(string name, Vector2 value)`

**Purpose:** **Purpose:** Assigns a new value to vector2 and updates the object's internal state.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
shader.SetVector2("example", value);
```

## Usage Example

```csharp
Shader.CreateShader(graphicsContext, "example", "example");
```

## See Also

- [Area Index](../)