---
title: "TutorialArea"
description: "TutorialArea 的自动生成类参考。"
---
# TutorialArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArea : MissionObject`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TutorialArea.cs`

## 概述

`TutorialArea` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeOfTraining` | `public TrainingType TypeOfTraining { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 调用 AfterMissionStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.AfterMissionStart();
```

### MarkTrainingIcons
`public void MarkTrainingIcons(bool mark)`

**用途 / Purpose:** 调用 MarkTrainingIcons 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.MarkTrainingIcons(false);
```

### GetActiveTrainingIcon
`public TrainingIcon GetActiveTrainingIcon()`

**用途 / Purpose:** 读取并返回当前对象中 active training icon 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetActiveTrainingIcon();
```

### GetIndexFromTag
`public int GetIndexFromTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 index from tag 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetIndexFromTag("example");
```

### GetSubTrainingTags
`public List<string> GetSubTrainingTags()`

**用途 / Purpose:** 读取并返回当前对象中 sub training tags 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetSubTrainingTags();
```

### ActivateTaggedWeapons
`public void ActivateTaggedWeapons(int index)`

**用途 / Purpose:** 激活tagged weapons对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.ActivateTaggedWeapons(0);
```

### EquipWeaponsToPlayer
`public void EquipWeaponsToPlayer(int index)`

**用途 / Purpose:** 调用 EquipWeaponsToPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.EquipWeaponsToPlayer(0);
```

### DeactivateAllWeapons
`public void DeactivateAllWeapons(bool resetDestructibles)`

**用途 / Purpose:** 停用all weapons对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.DeactivateAllWeapons(false);
```

### ActivateBoundaries
`public void ActivateBoundaries()`

**用途 / Purpose:** 激活boundaries对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.ActivateBoundaries();
```

### HideBoundaries
`public void HideBoundaries()`

**用途 / Purpose:** 隐藏boundaries对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.HideBoundaries();
```

### GetBreakablesCount
`public int GetBreakablesCount(int index)`

**用途 / Purpose:** 读取并返回当前对象中 breakables count 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetBreakablesCount(0);
```

### MakeDestructible
`public void MakeDestructible(int index)`

**用途 / Purpose:** 调用 MakeDestructible 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.MakeDestructible(0);
```

### MarkAllTargets
`public void MarkAllTargets(int index, bool mark)`

**用途 / Purpose:** 调用 MarkAllTargets 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.MarkAllTargets(0, false);
```

### ResetMarkingTargetTimers
`public void ResetMarkingTargetTimers(int index)`

**用途 / Purpose:** 将 marking target timers 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.ResetMarkingTargetTimers(0);
```

### MakeInDestructible
`public void MakeInDestructible(int index)`

**用途 / Purpose:** 调用 MakeInDestructible 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.MakeInDestructible(0);
```

### AllBreakablesAreBroken
`public bool AllBreakablesAreBroken(int index)`

**用途 / Purpose:** 调用 AllBreakablesAreBroken 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.AllBreakablesAreBroken(0);
```

### GetBrokenBreakableCount
`public int GetBrokenBreakableCount(int index)`

**用途 / Purpose:** 读取并返回当前对象中 broken breakable count 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetBrokenBreakableCount(0);
```

### GetUnbrokenBreakableCount
`public int GetUnbrokenBreakableCount(int index)`

**用途 / Purpose:** 读取并返回当前对象中 unbroken breakable count 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetUnbrokenBreakableCount(0);
```

### ResetBreakables
`public void ResetBreakables(int index, bool makeIndestructible = true)`

**用途 / Purpose:** 将 breakables 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.ResetBreakables(0, false);
```

### HasMainAgentPickedAll
`public bool HasMainAgentPickedAll(int index)`

**用途 / Purpose:** 判断当前对象是否已经持有 main agent picked all。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.HasMainAgentPickedAll(0);
```

### CheckMainAgentEquipment
`public void CheckMainAgentEquipment(int index)`

**用途 / Purpose:** 检查main agent equipment在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.CheckMainAgentEquipment(0);
```

### CheckWeapons
`public void CheckWeapons(int index)`

**用途 / Purpose:** 检查weapons在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
tutorialArea.CheckWeapons(0);
```

### IsPositionInsideTutorialArea
`public bool IsPositionInsideTutorialArea(Vec3 position, out string volumeBoxTags)`

**用途 / Purpose:** 判断当前对象是否处于 position inside tutorial area 状态或条件。

```csharp
// 先通过子系统 API 拿到 TutorialArea 实例
TutorialArea tutorialArea = ...;
var result = tutorialArea.IsPositionInsideTutorialArea(position, volumeBoxTags);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TutorialArea tutorialArea = ...;
tutorialArea.AfterMissionStart();
```

## 参见

- [本区域目录](../)