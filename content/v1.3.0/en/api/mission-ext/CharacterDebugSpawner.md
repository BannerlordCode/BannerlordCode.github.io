---
title: "CharacterDebugSpawner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDebugSpawner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDebugSpawner

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDebugSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs`

## Overview

`CharacterDebugSpawner` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClothColor1` | `public uint ClothColor1 { get; }` |
| `ClothColor2` | `public uint ClothColor2 { get; }` |

## Key Methods

### SetClothColors
`public void SetClothColors(uint color1, uint color2)`

**Purpose:** Sets the value or state of `cloth colors`.

### SpawnCharacter
`public void SpawnCharacter()`

**Purpose:** Handles logic related to `spawn character`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode)`

**Purpose:** Initializes the state, resources, or bindings for `with character`.

### WieldWeapon
`public void WieldWeapon(CharacterCode characterCode)`

**Purpose:** Handles logic related to `wield weapon`.

## Usage Example

```csharp
var value = new CharacterDebugSpawner();
value.SetClothColors(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)