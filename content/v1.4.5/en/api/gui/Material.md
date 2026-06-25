---
title: "Material"
description: "Auto-generated class reference for Material."
---
# Material

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class Material`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Material.cs`

## Overview

`Material` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Blending` | `public bool Blending { get; }` |
| `RenderOrder` | `public int RenderOrder { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Material instance = ...;
```

## See Also

- [Area Index](../)