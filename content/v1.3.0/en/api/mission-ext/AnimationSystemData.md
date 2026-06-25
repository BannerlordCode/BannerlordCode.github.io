---
title: "AnimationSystemData"
description: "Auto-generated class reference for AnimationSystemData."
---
# AnimationSystemData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AnimationSystemData.cs`

## Overview

`AnimationSystemData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AnimationSystemData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHardcodedAnimationSystemDataForHumanSkeleton
`public static AnimationSystemData GetHardcodedAnimationSystemDataForHumanSkeleton()`

**Purpose:** **Purpose:** Reads and returns the hardcoded animation system data for human skeleton value held by the this instance.

```csharp
// Static call; no instance required
AnimationSystemData.GetHardcodedAnimationSystemDataForHumanSkeleton();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AnimationSystemData entry = ...;
```

## See Also

- [Area Index](../)