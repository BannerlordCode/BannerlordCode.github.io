---
title: "SpriteFromTexture"
description: "Auto-generated class reference for SpriteFromTexture."
---
# SpriteFromTexture

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class SpriteFromTexture : Sprite`
**Base:** `Sprite`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SpriteFromTexture.cs`

## Overview

`SpriteFromTexture` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public override Texture Texture { get; }` |

## Key Methods

### GetMinUvs
`public override Vec2 GetMinUvs()`

**Purpose:** Reads and returns the min uvs value held by the this instance.

```csharp
// Obtain an instance of SpriteFromTexture from the subsystem API first
SpriteFromTexture spriteFromTexture = ...;
var result = spriteFromTexture.GetMinUvs();
```

### GetMaxUvs
`public override Vec2 GetMaxUvs()`

**Purpose:** Reads and returns the max uvs value held by the this instance.

```csharp
// Obtain an instance of SpriteFromTexture from the subsystem API first
SpriteFromTexture spriteFromTexture = ...;
var result = spriteFromTexture.GetMaxUvs();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpriteFromTexture spriteFromTexture = ...;
spriteFromTexture.GetMinUvs();
```

## See Also

- [Area Index](../)