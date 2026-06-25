---
title: "HandMorphTest"
description: "Auto-generated class reference for HandMorphTest."
---
# HandMorphTest

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/HandMorphTest.cs`

## Overview

`HandMorphTest` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClothColor1` | `public uint ClothColor1 { get; }` |
| `ClothColor2` | `public uint ClothColor2 { get; }` |

## Key Methods

### SpawnCharacter
`public void SpawnCharacter()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HandMorphTest from the subsystem API first
HandMorphTest handMorphTest = ...;
handMorphTest.SpawnCharacter();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of HandMorphTest from the subsystem API first
HandMorphTest handMorphTest = ...;
handMorphTest.Reset();
```

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode)`

**Purpose:** Prepares the resources, state, or bindings required by `with character`.

```csharp
// Obtain an instance of HandMorphTest from the subsystem API first
HandMorphTest handMorphTest = ...;
handMorphTest.InitWithCharacter(characterCode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HandMorphTest handMorphTest = ...;
handMorphTest.SpawnCharacter();
```

## See Also

- [Area Index](../)