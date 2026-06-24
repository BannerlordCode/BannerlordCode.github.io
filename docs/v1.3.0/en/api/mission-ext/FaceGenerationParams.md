<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenerationParams`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `create` instance or object.

### SetRaceGenderAndAdjustParams
`public void SetRaceGenderAndAdjustParams(int race, int gender, int curAge)`

**Purpose:** Sets the value or state of `race gender and adjust params`.

### SetRandomParamsExceptKeys
`public void SetRandomParamsExceptKeys(int race, int gender, int minAge, out float scale)`

**Purpose:** Sets the value or state of `random params except keys`.

## Usage Example

```csharp
FaceGenerationParams.Create();
```

## See Also

- [Complete Class Catalog](../catalog)