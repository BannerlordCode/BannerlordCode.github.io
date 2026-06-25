---
title: "MBAnimation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAnimation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAnimation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBAnimation`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBAnimation.cs`

## Overview

`MBAnimation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(MBAnimation a)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetAnimationIndexWithName
`public static int GetAnimationIndexWithName(string animationName)`

**Purpose:** Gets the current value of `animation index with name`.

### GetActionType
`public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)`

**Purpose:** Gets the current value of `action type`.

### PrefetchAnimationClip
`public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**Purpose:** Handles logic related to `prefetch animation clip`.

### GetAnimationDuration
`public static float GetAnimationDuration(string animationName)`

**Purpose:** Gets the current value of `animation duration`.

### GetAnimationDuration
`public static float GetAnimationDuration(int animationIndex)`

**Purpose:** Gets the current value of `animation duration`.

### GetAnimationParameter1
`public static float GetAnimationParameter1(string animationName)`

**Purpose:** Gets the current value of `animation parameter1`.

### GetAnimationParameter1
`public static float GetAnimationParameter1(int animationIndex)`

**Purpose:** Gets the current value of `animation parameter1`.

### GetAnimationParameter2
`public static float GetAnimationParameter2(string animationName)`

**Purpose:** Gets the current value of `animation parameter2`.

### GetAnimationParameter2
`public static float GetAnimationParameter2(int animationIndex)`

**Purpose:** Gets the current value of `animation parameter2`.

### GetAnimationParameter3
`public static float GetAnimationParameter3(string animationName)`

**Purpose:** Gets the current value of `animation parameter3`.

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(string animationName)`

**Purpose:** Gets the current value of `animation blend in period`.

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(int animationIndex)`

**Purpose:** Gets the current value of `animation blend in period`.

### GetAnimationBlendsWithActionIndex
`public static int GetAnimationBlendsWithActionIndex(string animationName)`

**Purpose:** Gets the current value of `animation blends with action index`.

### GetAnimationBlendsWithActionIndex
`public static float GetAnimationBlendsWithActionIndex(int animationIndex)`

**Purpose:** Gets the current value of `animation blends with action index`.

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)`

**Purpose:** Gets the current value of `animation displacement at progress`.

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)`

**Purpose:** Gets the current value of `animation displacement at progress`.

### GetActionCodeWithName
`public static int GetActionCodeWithName(string name)`

**Purpose:** Gets the current value of `action code with name`.

### GetNumActionCodes
`public static int GetNumActionCodes()`

**Purpose:** Gets the current value of `num action codes`.

### GetNumAnimations
`public static int GetNumAnimations()`

**Purpose:** Gets the current value of `num animations`.

### IsAnyAnimationLoadingFromDisk
`public static bool IsAnyAnimationLoadingFromDisk()`

**Purpose:** Handles logic related to `is any animation loading from disk`.

## Usage Example

```csharp
var value = new MBAnimation();
value.Equals(a);
```

## See Also

- [Complete Class Catalog](../catalog)