---
title: "Sprite"
description: "Auto-generated class reference for Sprite."
---
# Sprite

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class Sprite`
**Base:** none
**File:** `TaleWorlds.TwoDimension/Sprite.cs`

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

**Purpose:** **Purpose:** Reads and returns the min uvs value held by the this instance.

```csharp
// Obtain an instance of Sprite from the subsystem API first
Sprite sprite = ...;
var result = sprite.GetMinUvs();
```

### GetMaxUvs
`public abstract Vec2 GetMaxUvs()`

**Purpose:** **Purpose:** Reads and returns the max uvs value held by the this instance.

```csharp
// Obtain an instance of Sprite from the subsystem API first
Sprite sprite = ...;
var result = sprite.GetMaxUvs();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Sprite from the subsystem API first
Sprite sprite = ...;
var result = sprite.ToString();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Sprite instance = ...;
```

## See Also

- [Area Index](../)