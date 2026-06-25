---
title: "MBActionSet"
description: "Auto-generated class reference for MBActionSet."
---
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBActionSet.cs`

## Overview

`MBActionSet` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(MBActionSet a)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.Equals(a);
```

### Equals
`public bool Equals(int index)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.Equals(0);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetHashCode();
```

### GetName
`public string GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetName();
```

### GetSkeletonName
`public string GetSkeletonName()`

**Purpose:** **Purpose:** Reads and returns the skeleton name value held by the this instance.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetSkeletonName();
```

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode)`

**Purpose:** **Purpose:** Reads and returns the animation name value held by the this instance.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetAnimationName(actionCode);
```

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)`

**Purpose:** **Purpose:** Executes the AreActionsAlternatives logic.

```csharp
// Obtain an instance of MBActionSet from the subsystem API first
MBActionSet mBActionSet = ...;
var result = mBActionSet.AreActionsAlternatives(actionCode1, actionCode2);
```

### GetNumberOfActionSets
`public static int GetNumberOfActionSets()`

**Purpose:** **Purpose:** Reads and returns the number of action sets value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetNumberOfActionSets();
```

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets()`

**Purpose:** **Purpose:** Reads and returns the number of monster usage sets value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetNumberOfMonsterUsageSets();
```

### GetActionSet
`public static MBActionSet GetActionSet(string objectID)`

**Purpose:** **Purpose:** Reads and returns the action set value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionSet("example");
```

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the action set with index value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionSetWithIndex(0);
```

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)`

**Purpose:** **Purpose:** Reads and returns the bone index with id value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetBoneIndexWithId("example", "example");
```

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone has parent bone value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetBoneHasParentBone("example", 0);
```

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action displacement vector value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionDisplacementVector(actionSet, actionIndexCache);
```

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action animation flags value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionAnimationFlags(actionSet, actionIndexCache);
```

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Verifies whether action animation clip exists holds true for the this instance.

```csharp
// Static call; no instance required
MBActionSet.CheckActionAnimationClipExists(actionSet, actionIndexCache);
```

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the animation index of action value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetAnimationIndexOfAction(actionSet, actionIndexCache);
```

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action animation name value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionAnimationName(actionSet, actionIndexCache);
```

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action animation duration value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionAnimationDuration(actionSet, actionIndexCache);
```

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action animation continue to action value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionAnimationContinueToAction(actionSet, actionIndexCache);
```

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the total animation duration with continue to action value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetTotalAnimationDurationWithContinueToAction(actionSet, actionIndexCache);
```

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** **Purpose:** Reads and returns the action blend out start progress value held by the this instance.

```csharp
// Static call; no instance required
MBActionSet.GetActionBlendOutStartProgress(actionSet, actionIndexCache);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBActionSet mBActionSet = ...;
mBActionSet.Equals(a);
```

## See Also

- [Area Index](../)