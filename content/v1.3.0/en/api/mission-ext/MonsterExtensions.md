---
title: "MonsterExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MonsterExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MonsterExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MonsterExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MonsterExtensions.cs`

## Overview

`MonsterExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, float stepSize, bool hasClippingPlane, bool isFemale)`

**Purpose:** Handles logic related to `fill animation system data`.

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, MBActionSet actionSet, float stepSize, bool hasClippingPlane)`

**Purpose:** Handles logic related to `fill animation system data`.

### FillCapsuleData
`public static AgentCapsuleData FillCapsuleData(this Monster monster)`

**Purpose:** Handles logic related to `fill capsule data`.

### FillSpawnData
`public static AgentSpawnData FillSpawnData(this Monster monster, ItemObject mountItem)`

**Purpose:** Handles logic related to `fill spawn data`.

## Usage Example

```csharp
MonsterExtensions.FillAnimationSystemData(monster, 0, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)