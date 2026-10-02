---
title: "MBActionSet"
description: "Auto-generated class reference for MBActionSet."
---
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBActionSet.cs

## Overview

Auto-generated stub for `MBActionSet`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Equals
`public bool Equals(MBActionSet a)`

### GetHashCode
`public override int GetHashCode()`

### GetName
`public string GetName()`

### GetSkeletonName
`public string GetSkeletonName()`

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode)`

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1,in ActionIndexCache actionCode2)`

### GetNumberOfActionSets
`public static int GetNumberOfActionSets()`

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets()`

### GetActionSet
`public static MBActionSet GetActionSet(string objectID)`

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index)`

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId,string boneId)`

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId,sbyte boneIndex)`

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet,ActionIndexCache actionIndexCache)`

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet,in ActionIndexCache actionIndexCache)`

## See Also

- [Section index](../)
