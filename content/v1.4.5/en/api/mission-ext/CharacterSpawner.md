---
title: "CharacterSpawner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterSpawner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterSpawner

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/CharacterSpawner.cs`

## Overview

`CharacterSpawner` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClothColor1` | `public uint ClothColor1 { get; }` |
| `ClothColor2` | `public uint ClothColor2 { get; }` |

## Key Methods

### SetCreateFaceImmediately
`public void SetCreateFaceImmediately(bool value)`

**Purpose:** Sets the value or state of `create face immediately`.

### SetClothColors
`public void SetClothColors(uint color1, uint color2)`

**Purpose:** Sets the value or state of `cloth colors`.

### SpawnCharacter
`public void SpawnCharacter()`

**Purpose:** Handles logic related to `spawn character`.

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode, bool useBodyProperties = false)`

**Purpose:** Initializes the state, resources, or bindings for `with character`.

## Usage Example

```csharp
var value = new CharacterSpawner();
value.SetCreateFaceImmediately(false);
```

## See Also

- [Complete Class Catalog](../catalog)