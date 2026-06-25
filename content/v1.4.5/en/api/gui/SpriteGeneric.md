---
title: "SpriteGeneric"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteGeneric`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpriteGeneric

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteGeneric : Sprite`
**Base:** `Sprite`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteGeneric.cs`

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