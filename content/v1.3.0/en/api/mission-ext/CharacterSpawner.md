---
title: "CharacterSpawner"
description: "Auto-generated class reference for CharacterSpawner."
---
# CharacterSpawner

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterSpawner.cs`

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

**Purpose:** **Purpose:** Assigns a new value to create face immediately and updates the object's internal state.

```csharp
// Obtain an instance of CharacterSpawner from the subsystem API first
CharacterSpawner characterSpawner = ...;
characterSpawner.SetCreateFaceImmediately(false);
```

### SetClothColors
`public void SetClothColors(uint color1, uint color2)`

**Purpose:** **Purpose:** Assigns a new value to cloth colors and updates the object's internal state.

```csharp
// Obtain an instance of CharacterSpawner from the subsystem API first
CharacterSpawner characterSpawner = ...;
characterSpawner.SetClothColors(0, 0);
```

### SpawnCharacter
`public void SpawnCharacter()`

**Purpose:** **Purpose:** Executes the SpawnCharacter logic.

```csharp
// Obtain an instance of CharacterSpawner from the subsystem API first
CharacterSpawner characterSpawner = ...;
characterSpawner.SpawnCharacter();
```

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode, bool useBodyProperties = false)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by with character.

```csharp
// Obtain an instance of CharacterSpawner from the subsystem API first
CharacterSpawner characterSpawner = ...;
characterSpawner.InitWithCharacter(characterCode, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterSpawner characterSpawner = ...;
characterSpawner.SetCreateFaceImmediately(false);
```

## See Also

- [Area Index](../)