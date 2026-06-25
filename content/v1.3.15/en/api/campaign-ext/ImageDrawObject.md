---
title: "ImageDrawObject"
description: "Auto-generated class reference for ImageDrawObject."
---
# ImageDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ImageDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `TaleWorlds.TwoDimension/ImageDrawObject.cs`

## Overview

`ImageDrawObject` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static ImageDrawObject Invalid { get; }` |

## Key Methods

### Create
`public static ImageDrawObject Create(in Rectangle2D rectangle, in Vec2 uvMin, in Vec2 uvMax)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## Usage Example

```csharp
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## See Also

- [Area Index](../)