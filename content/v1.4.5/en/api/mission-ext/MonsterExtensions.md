---
title: "MonsterExtensions"
description: "Auto-generated class reference for MonsterExtensions."
---
# MonsterExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MonsterExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MonsterExtensions.cs`

## Overview

`MonsterExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, float stepSize, bool hasClippingPlane, bool isFemale)`

**Purpose:** Executes the FillAnimationSystemData logic.

```csharp
// Static call; no instance required
MonsterExtensions.FillAnimationSystemData(monster, 0, false, false);
```

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, MBActionSet actionSet, float stepSize, bool hasClippingPlane)`

**Purpose:** Executes the FillAnimationSystemData logic.

```csharp
// Static call; no instance required
MonsterExtensions.FillAnimationSystemData(monster, actionSet, 0, false);
```

### FillCapsuleData
`public static AgentCapsuleData FillCapsuleData(this Monster monster)`

**Purpose:** Executes the FillCapsuleData logic.

```csharp
// Static call; no instance required
MonsterExtensions.FillCapsuleData(monster);
```

### FillSpawnData
`public static AgentSpawnData FillSpawnData(this Monster monster, ItemObject mountItem)`

**Purpose:** Executes the FillSpawnData logic.

```csharp
// Static call; no instance required
MonsterExtensions.FillSpawnData(monster, mountItem);
```

## Usage Example

```csharp
MonsterExtensions.FillAnimationSystemData(monster, 0, false, false);
```

## See Also

- [Area Index](../)