---
title: "RandomOwnerExtensions"
description: "Auto-generated class reference for RandomOwnerExtensions."
---
# RandomOwnerExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class RandomOwnerExtensions`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/RandomOwnerExtensions.cs`

## Overview

`RandomOwnerExtensions` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed)`

**Purpose:** **Purpose:** Executes the RandomIntWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int max)`

**Purpose:** **Purpose:** Executes the RandomIntWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomIntWithSeed(obj, 0, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int min, int max)`

**Purpose:** **Purpose:** Executes the RandomIntWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomIntWithSeed(obj, 0, 0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed)`

**Purpose:** **Purpose:** Executes the RandomFloatWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float max)`

**Purpose:** **Purpose:** Executes the RandomFloatWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float min, float max)`

**Purpose:** **Purpose:** Executes the RandomFloatWithSeed logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0, 0, 0);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj)`

**Purpose:** **Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomInt(obj);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int max)`

**Purpose:** **Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomInt(obj, 0);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int min, int max)`

**Purpose:** **Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomInt(obj, 0, 0);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj)`

**Purpose:** **Purpose:** Executes the RandomFloat logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloat(obj);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float max)`

**Purpose:** **Purpose:** Executes the RandomFloat logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloat(obj, 0);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float min, float max)`

**Purpose:** **Purpose:** Executes the RandomFloat logic.

```csharp
// Static call; no instance required
RandomOwnerExtensions.RandomFloat(obj, 0, 0);
```

## Usage Example

```csharp
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

## See Also

- [Area Index](../)