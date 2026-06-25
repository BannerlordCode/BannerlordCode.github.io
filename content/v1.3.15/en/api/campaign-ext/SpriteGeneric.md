---
title: "SpriteGeneric"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteGeneric`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteGeneric

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteGeneric : Sprite`
**Base:** `Sprite`
**File:** `TaleWorlds.TwoDimension/SpriteGeneric.cs`

## Overview

`SpriteGeneric` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public override Texture Texture { get; }` |
| `SpritePart` | `public SpritePart SpritePart { get; }` |

## Key Methods

### GetMinUvs
`public override Vec2 GetMinUvs()`

**Purpose:** Gets the current value of `min uvs`.

### GetMaxUvs
`public override Vec2 GetMaxUvs()`

**Purpose:** Gets the current value of `max uvs`.

## Usage Example

```csharp
var value = new SpriteGeneric();
value.GetMinUvs();
```

## See Also

- [Complete Class Catalog](../catalog)