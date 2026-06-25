---
title: "MBAnimation"
description: "Auto-generated class reference for MBAnimation."
---
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

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBAnimation from the subsystem API first
MBAnimation mBAnimation = ...;
var result = mBAnimation.Equals(a);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBAnimation from the subsystem API first
MBAnimation mBAnimation = ...;
var result = mBAnimation.GetHashCode();
```

### GetAnimationIndexWithName
`public static int GetAnimationIndexWithName(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation index with name value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationIndexWithName("example");
```

### GetActionType
`public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)`

**Purpose:** **Purpose:** Reads and returns the action type value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetActionType(actionIndex);
```

### PrefetchAnimationClip
`public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Executes the PrefetchAnimationClip logic.

```csharp
// Static call; no instance required
MBAnimation.PrefetchAnimationClip(actionSet, actionIndexCache);
```

### GetAnimationDuration
`public static float GetAnimationDuration(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation duration value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationDuration("example");
```

### GetAnimationDuration
`public static float GetAnimationDuration(int animationIndex)`

**Purpose:** **Purpose:** Reads and returns the animation duration value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationDuration(0);
```

### GetAnimationParameter1
`public static float GetAnimationParameter1(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation parameter1 value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationParameter1("example");
```

### GetAnimationParameter1
`public static float GetAnimationParameter1(int animationIndex)`

**Purpose:** **Purpose:** Reads and returns the animation parameter1 value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationParameter1(0);
```

### GetAnimationParameter2
`public static float GetAnimationParameter2(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation parameter2 value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationParameter2("example");
```

### GetAnimationParameter2
`public static float GetAnimationParameter2(int animationIndex)`

**Purpose:** **Purpose:** Reads and returns the animation parameter2 value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationParameter2(0);
```

### GetAnimationParameter3
`public static float GetAnimationParameter3(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation parameter3 value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationParameter3("example");
```

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation blend in period value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationBlendInPeriod("example");
```

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(int animationIndex)`

**Purpose:** **Purpose:** Reads and returns the animation blend in period value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationBlendInPeriod(0);
```

### GetAnimationBlendsWithActionIndex
`public static int GetAnimationBlendsWithActionIndex(string animationName)`

**Purpose:** **Purpose:** Reads and returns the animation blends with action index value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationBlendsWithActionIndex("example");
```

### GetAnimationBlendsWithActionIndex
`public static float GetAnimationBlendsWithActionIndex(int animationIndex)`

**Purpose:** **Purpose:** Reads and returns the animation blends with action index value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationBlendsWithActionIndex(0);
```

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)`

**Purpose:** **Purpose:** Reads and returns the animation displacement at progress value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationDisplacementAtProgress("example", 0);
```

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)`

**Purpose:** **Purpose:** Reads and returns the animation displacement at progress value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetAnimationDisplacementAtProgress(0, 0);
```

### GetActionCodeWithName
`public static int GetActionCodeWithName(string name)`

**Purpose:** **Purpose:** Reads and returns the action code with name value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetActionCodeWithName("example");
```

### GetNumActionCodes
`public static int GetNumActionCodes()`

**Purpose:** **Purpose:** Reads and returns the num action codes value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetNumActionCodes();
```

### GetNumAnimations
`public static int GetNumAnimations()`

**Purpose:** **Purpose:** Reads and returns the num animations value held by the this instance.

```csharp
// Static call; no instance required
MBAnimation.GetNumAnimations();
```

### IsAnyAnimationLoadingFromDisk
`public static bool IsAnyAnimationLoadingFromDisk()`

**Purpose:** **Purpose:** Determines whether the this instance is in the any animation loading from disk state or condition.

```csharp
// Static call; no instance required
MBAnimation.IsAnyAnimationLoadingFromDisk();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBAnimation mBAnimation = ...;
mBAnimation.Equals(a);
```

## See Also

- [Area Index](../)