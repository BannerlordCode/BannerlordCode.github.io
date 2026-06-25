---
title: "MBActionSet"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBActionSet`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBActionSet.cs`

## 概述

`MBActionSet` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### Equals
`public bool Equals(MBActionSet a)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public bool Equals(int index)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetSkeletonName
`public string GetSkeletonName()`

**用途 / Purpose:** 获取 `skeleton name` 的当前值。

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode)`

**用途 / Purpose:** 获取 `animation name` 的当前值。

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)`

**用途 / Purpose:** 处理 `are actions alternatives` 相关逻辑。

### GetNumberOfActionSets
`public static int GetNumberOfActionSets()`

**用途 / Purpose:** 获取 `number of action sets` 的当前值。

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets()`

**用途 / Purpose:** 获取 `number of monster usage sets` 的当前值。

### GetActionSet
`public static MBActionSet GetActionSet(string objectID)`

**用途 / Purpose:** 获取 `action set` 的当前值。

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index)`

**用途 / Purpose:** 获取 `action set with index` 的当前值。

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)`

**用途 / Purpose:** 获取 `bone index with id` 的当前值。

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone has parent bone` 的当前值。

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action displacement vector` 的当前值。

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action animation flags` 的当前值。

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 处理 `check action animation clip exists` 相关逻辑。

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `animation index of action` 的当前值。

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action animation name` 的当前值。

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action animation duration` 的当前值。

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action animation continue to action` 的当前值。

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `total animation duration with continue to action` 的当前值。

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 获取 `action blend out start progress` 的当前值。

## 使用示例

```csharp
var value = new MBActionSet();
value.Equals(a);
```

## 参见

- [完整类目录](../catalog)