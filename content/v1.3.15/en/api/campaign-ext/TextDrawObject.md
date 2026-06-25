---
title: "TextDrawObject"
description: "Auto-generated class reference for TextDrawObject."
---
# TextDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct TextDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `TaleWorlds.TwoDimension/TextDrawObject.cs`

## Overview

`TextDrawObject` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static TextDrawObject Invalid { get; }` |

## Key Methods

### Create
`public static TextDrawObject Create(float vertices, float uvs, uint indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

### ConvertToHashInPlace
`public void ConvertToHashInPlace()`

**Purpose:** Converts to hash in place into another representation or type.

```csharp
// Obtain an instance of TextDrawObject from the subsystem API first
TextDrawObject textDrawObject = ...;
textDrawObject.ConvertToHashInPlace();
```

## Usage Example

```csharp
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

## See Also

- [Area Index](../)