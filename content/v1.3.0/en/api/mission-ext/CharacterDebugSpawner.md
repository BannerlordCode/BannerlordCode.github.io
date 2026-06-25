---
title: "CharacterDebugSpawner"
description: "Auto-generated class reference for CharacterDebugSpawner."
---
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

**Purpose:** Assigns a new value to `cloth colors` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDebugSpawner from the subsystem API first
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.SetClothColors(0, 0);
```

### SpawnCharacter
`public void SpawnCharacter()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterDebugSpawner from the subsystem API first
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.SpawnCharacter();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of CharacterDebugSpawner from the subsystem API first
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.Reset();
```

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode)`

**Purpose:** Prepares the resources, state, or bindings required by `with character`.

```csharp
// Obtain an instance of CharacterDebugSpawner from the subsystem API first
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.InitWithCharacter(characterCode);
```

### WieldWeapon
`public void WieldWeapon(CharacterCode characterCode)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterDebugSpawner from the subsystem API first
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.WieldWeapon(characterCode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterDebugSpawner characterDebugSpawner = ...;
characterDebugSpawner.SetClothColors(0, 0);
```

## See Also

- [Area Index](../)