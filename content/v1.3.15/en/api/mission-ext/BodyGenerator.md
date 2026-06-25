---
title: "BodyGenerator"
description: "Auto-generated class reference for BodyGenerator."
---
# BodyGenerator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGenerator`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BodyGenerator.cs`

## Overview

`BodyGenerator` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |

## Key Methods

### InitBodyGenerator
`public FaceGenerationParams InitBodyGenerator(bool isDressed)`

**Purpose:** Prepares the resources, state, or bindings required by `body generator`.

```csharp
// Obtain an instance of BodyGenerator from the subsystem API first
BodyGenerator bodyGenerator = ...;
var result = bodyGenerator.InitBodyGenerator(false);
```

### RefreshFace
`public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)`

**Purpose:** Keeps the display or cache of `face` in sync with the underlying state.

```csharp
// Obtain an instance of BodyGenerator from the subsystem API first
BodyGenerator bodyGenerator = ...;
bodyGenerator.RefreshFace(faceGenerationParams, false);
```

### SaveCurrentCharacter
`public void SaveCurrentCharacter()`

**Purpose:** Writes `current character` to persistent storage or a stream.

```csharp
// Obtain an instance of BodyGenerator from the subsystem API first
BodyGenerator bodyGenerator = ...;
bodyGenerator.SaveCurrentCharacter();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BodyGenerator bodyGenerator = ...;
bodyGenerator.InitBodyGenerator(false);
```

## See Also

- [Area Index](../)