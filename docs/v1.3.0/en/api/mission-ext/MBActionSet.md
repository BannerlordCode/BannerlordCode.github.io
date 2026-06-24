<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBActionSet`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBActionSet.cs`

## Overview

`MBActionSet` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### Equals
`public bool Equals(MBActionSet a)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(int index)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### GetSkeletonName
`public string GetSkeletonName()`

**Purpose:** Gets the current value of `skeleton name`.

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode)`

**Purpose:** Gets the current value of `animation name`.

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)`

**Purpose:** Handles logic related to `are actions alternatives`.

### GetNumberOfActionSets
`public static int GetNumberOfActionSets()`

**Purpose:** Gets the current value of `number of action sets`.

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets()`

**Purpose:** Gets the current value of `number of monster usage sets`.

### GetActionSet
`public static MBActionSet GetActionSet(string objectID)`

**Purpose:** Gets the current value of `action set`.

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index)`

**Purpose:** Gets the current value of `action set with index`.

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)`

**Purpose:** Gets the current value of `bone index with id`.

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)`

**Purpose:** Gets the current value of `bone has parent bone`.

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action displacement vector`.

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action animation flags`.

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Handles logic related to `check action animation clip exists`.

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `animation index of action`.

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action animation name`.

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action animation duration`.

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action animation continue to action`.

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `total animation duration with continue to action`.

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**Purpose:** Gets the current value of `action blend out start progress`.

## Usage Example

```csharp
var value = new MBActionSet();
value.Equals(a);
```

## See Also

- [Complete Class Catalog](../catalog)