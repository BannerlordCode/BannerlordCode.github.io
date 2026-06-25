---
title: "MBActionSet"
description: "MBActionSet 的自动生成类参考。"
---
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBActionSet.cs`

## 概述

`MBActionSet` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Equals
`public bool Equals(MBActionSet a)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.Equals(a);
```

### Equals
`public bool Equals(int index)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.Equals(0);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetHashCode();
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetName();
```

### GetSkeletonName
`public string GetSkeletonName()`

**用途 / Purpose:** 读取并返回当前对象中 skeleton name 的结果。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetSkeletonName();
```

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode)`

**用途 / Purpose:** 读取并返回当前对象中 animation name 的结果。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.GetAnimationName(actionCode);
```

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)`

**用途 / Purpose:** 调用 AreActionsAlternatives 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBActionSet 实例
MBActionSet mBActionSet = ...;
var result = mBActionSet.AreActionsAlternatives(actionCode1, actionCode2);
```

### GetNumberOfActionSets
`public static int GetNumberOfActionSets()`

**用途 / Purpose:** 读取并返回当前对象中 number of action sets 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetNumberOfActionSets();
```

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets()`

**用途 / Purpose:** 读取并返回当前对象中 number of monster usage sets 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetNumberOfMonsterUsageSets();
```

### GetActionSet
`public static MBActionSet GetActionSet(string objectID)`

**用途 / Purpose:** 读取并返回当前对象中 action set 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionSet("example");
```

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 action set with index 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionSetWithIndex(0);
```

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)`

**用途 / Purpose:** 读取并返回当前对象中 bone index with id 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetBoneIndexWithId("example", "example");
```

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone has parent bone 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetBoneHasParentBone("example", 0);
```

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action displacement vector 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionDisplacementVector(actionSet, actionIndexCache);
```

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action animation flags 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionAnimationFlags(actionSet, actionIndexCache);
```

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 检查action animation clip exists在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MBActionSet.CheckActionAnimationClipExists(actionSet, actionIndexCache);
```

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 animation index of action 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetAnimationIndexOfAction(actionSet, actionIndexCache);
```

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action animation name 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionAnimationName(actionSet, actionIndexCache);
```

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action animation duration 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionAnimationDuration(actionSet, actionIndexCache);
```

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action animation continue to action 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionAnimationContinueToAction(actionSet, actionIndexCache);
```

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 total animation duration with continue to action 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetTotalAnimationDurationWithContinueToAction(actionSet, actionIndexCache);
```

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 读取并返回当前对象中 action blend out start progress 的结果。

```csharp
// 静态调用，不需要实例
MBActionSet.GetActionBlendOutStartProgress(actionSet, actionIndexCache);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBActionSet mBActionSet = ...;
mBActionSet.Equals(a);
```

## 参见

- [本区域目录](../)