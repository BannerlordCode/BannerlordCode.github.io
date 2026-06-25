---
title: "AnimationSystemData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimationSystemData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimationSystemData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AnimationSystemData.cs`

## Overview

`AnimationSystemData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AnimationSystemData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHardcodedAnimationSystemDataForHumanSkeleton
`public static AnimationSystemData GetHardcodedAnimationSystemDataForHumanSkeleton()`

**Purpose:** Gets the current value of `hardcoded animation system data for human skeleton`.

## Usage Example

```csharp
var value = new AnimationSystemData();
```

## See Also

- [Complete Class Catalog](../catalog)