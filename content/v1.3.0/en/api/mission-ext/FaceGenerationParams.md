---
title: "FaceGenerationParams"
description: "Auto-generated class reference for FaceGenerationParams."
---
# FaceGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FaceGenerationParams`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FaceGenerationParams.cs`

## Overview

`FaceGenerationParams` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static FaceGenerationParams Create()`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
FaceGenerationParams.Create();
```

### SetRaceGenderAndAdjustParams
`public void SetRaceGenderAndAdjustParams(int race, int gender, int curAge)`

**Purpose:** Assigns a new value to `race gender and adjust params` and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenerationParams from the subsystem API first
FaceGenerationParams faceGenerationParams = ...;
faceGenerationParams.SetRaceGenderAndAdjustParams(0, 0, 0);
```

### SetRandomParamsExceptKeys
`public void SetRandomParamsExceptKeys(int race, int gender, int minAge, out float scale)`

**Purpose:** Assigns a new value to `random params except keys` and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenerationParams from the subsystem API first
FaceGenerationParams faceGenerationParams = ...;
faceGenerationParams.SetRandomParamsExceptKeys(0, 0, 0, scale);
```

## Usage Example

```csharp
FaceGenerationParams.Create();
```

## See Also

- [Area Index](../)