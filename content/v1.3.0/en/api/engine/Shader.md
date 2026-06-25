---
title: "Shader"
description: "Auto-generated class reference for Shader."
---
# Shader

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Shader : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Shader.cs`

## Overview

`Shader` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### GetFromResource
`public static Shader GetFromResource(string shaderName)`

**Purpose:** **Purpose:** Reads and returns the from resource value held by the this instance.

```csharp
// Static call; no instance required
Shader.GetFromResource("example");
```

### GetMaterialShaderFlagMask
`public ulong GetMaterialShaderFlagMask(string flagName, bool showErrors = true)`

**Purpose:** **Purpose:** Reads and returns the material shader flag mask value held by the this instance.

```csharp
// Obtain an instance of Shader from the subsystem API first
Shader shader = ...;
var result = shader.GetMaterialShaderFlagMask("example", false);
```

## Usage Example

```csharp
Shader.GetFromResource("example");
```

## See Also

- [Area Index](../)