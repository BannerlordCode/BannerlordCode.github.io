<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Sprite`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Sprite

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class Sprite`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Sprite.cs`

## Overview

`Sprite` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public abstract Texture Texture { get; }` |
| `Name` | `public string Name { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters { get; }` |

## Key Methods

### GetMinUvs
`public abstract Vec2 GetMinUvs()`

**Purpose:** Gets the current value of `min uvs`.

### GetMaxUvs
`public abstract Vec2 GetMaxUvs()`

**Purpose:** Gets the current value of `max uvs`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var implementation = new CustomSprite();
```

## See Also

- [Complete Class Catalog](../catalog)