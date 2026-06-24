<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenerationParams`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FaceGenerationParams`
**Area:** mission-ext

## Overview

`FaceGenerationParams` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
FaceGenerationParams.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
