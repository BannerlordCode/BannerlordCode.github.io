---
title: "SpriteGeneric"
description: "Auto-generated class reference for SpriteGeneric."
---
# SpriteGeneric

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteGeneric : Sprite`
**Base:** `Sprite`
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteGeneric.cs`

## Overview

`SpriteGeneric` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpritePart` | `public SpritePart SpritePart { get; }` |

## Key Methods

### GetMinUvs
`public override Vec2 GetMinUvs()`

**Purpose:** Reads and returns the `min uvs` value held by the current object.

```csharp
// Obtain an instance of SpriteGeneric from the subsystem API first
SpriteGeneric spriteGeneric = ...;
var result = spriteGeneric.GetMinUvs();
```

### GetMaxUvs
`public override Vec2 GetMaxUvs()`

**Purpose:** Reads and returns the `max uvs` value held by the current object.

```csharp
// Obtain an instance of SpriteGeneric from the subsystem API first
SpriteGeneric spriteGeneric = ...;
var result = spriteGeneric.GetMaxUvs();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpriteGeneric spriteGeneric = ...;
spriteGeneric.GetMinUvs();
```

## See Also

- [Area Index](../)