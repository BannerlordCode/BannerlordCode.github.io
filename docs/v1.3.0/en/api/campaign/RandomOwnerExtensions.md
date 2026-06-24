<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RandomOwnerExtensions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RandomOwnerExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class RandomOwnerExtensions`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/RandomOwnerExtensions.cs`

## Overview

`RandomOwnerExtensions` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed)`

**Purpose:** Handles logic related to `random int with seed`.

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int max)`

**Purpose:** Handles logic related to `random int with seed`.

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int min, int max)`

**Purpose:** Handles logic related to `random int with seed`.

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed)`

**Purpose:** Handles logic related to `random float with seed`.

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float max)`

**Purpose:** Handles logic related to `random float with seed`.

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float min, float max)`

**Purpose:** Handles logic related to `random float with seed`.

### RandomInt
`public static int RandomInt(this IRandomOwner obj)`

**Purpose:** Handles logic related to `random int`.

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int max)`

**Purpose:** Handles logic related to `random int`.

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int min, int max)`

**Purpose:** Handles logic related to `random int`.

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj)`

**Purpose:** Handles logic related to `random float`.

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float max)`

**Purpose:** Handles logic related to `random float`.

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float min, float max)`

**Purpose:** Handles logic related to `random float`.

## Usage Example

```csharp
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

## See Also

- [Complete Class Catalog](../catalog)