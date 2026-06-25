---
title: "HandMorphTest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandMorphTest`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HandMorphTest

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/HandMorphTest.cs`

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

**Purpose:** Handles logic related to `spawn character`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode)`

**Purpose:** Initializes the state, resources, or bindings for `with character`.

## Usage Example

```csharp
var value = new HandMorphTest();
value.SpawnCharacter();
```

## See Also

- [Complete Class Catalog](../catalog)