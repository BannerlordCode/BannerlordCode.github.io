---
title: "MapEntityVisual"
description: "Auto-generated class reference for MapEntityVisual."
---
# MapEntityVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public abstract class MapEntityVisual<T> : MapEntityVisual`
**Base:** `MapEntityVisual`
**File:** `SandBox.View/Map/Visuals/MapEntityVisual.2.cs`

## Overview

`MapEntityVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEntity` | `public T MapEntity { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapEntityVisual instance = ...;
```

## See Also

- [Area Index](../)