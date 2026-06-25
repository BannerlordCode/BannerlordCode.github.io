---
title: "TutorialArea"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialArea`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArea : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TutorialArea.cs`

## 概述

`TutorialArea` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TrainingIconsReadOnly` | `public MBReadOnlyList<TrainingIcon> TrainingIconsReadOnly { get; }` |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### MarkTrainingIcons
`public void MarkTrainingIcons(bool mark)`

**用途 / Purpose:** 处理 `mark training icons` 相关逻辑。

### GetActiveTrainingIcon
`public TrainingIcon GetActiveTrainingIcon()`

**用途 / Purpose:** 获取 `active training icon` 的当前值。

### GetIndexFromTag
`public int GetIndexFromTag(string tag)`

**用途 / Purpose:** 获取 `index from tag` 的当前值。

### GetSubTrainingTags
`public List<string> GetSubTrainingTags()`

**用途 / Purpose:** 获取 `sub training tags` 的当前值。

### ActivateTaggedWeapons
`public void ActivateTaggedWeapons(int index)`

**用途 / Purpose:** 处理 `activate tagged weapons` 相关逻辑。

### EquipWeaponsToPlayer
`public void EquipWeaponsToPlayer(int index)`

**用途 / Purpose:** 处理 `equip weapons to player` 相关逻辑。

### DeactivateAllWeapons
`public void DeactivateAllWeapons(bool resetDestructibles)`

**用途 / Purpose:** 处理 `deactivate all weapons` 相关逻辑。

### ActivateBoundaries
`public void ActivateBoundaries()`

**用途 / Purpose:** 处理 `activate boundaries` 相关逻辑。

### HideBoundaries
`public void HideBoundaries()`

**用途 / Purpose:** 处理 `hide boundaries` 相关逻辑。

### GetBreakablesCount
`public int GetBreakablesCount(int index)`

**用途 / Purpose:** 获取 `breakables count` 的当前值。

### MakeDestructible
`public void MakeDestructible(int index)`

**用途 / Purpose:** 处理 `make destructible` 相关逻辑。

### MarkAllTargets
`public void MarkAllTargets(int index, bool mark)`

**用途 / Purpose:** 处理 `mark all targets` 相关逻辑。

### ResetMarkingTargetTimers
`public void ResetMarkingTargetTimers(int index)`

**用途 / Purpose:** 将 `marking target timers` 重置为初始状态。

### MakeInDestructible
`public void MakeInDestructible(int index)`

**用途 / Purpose:** 处理 `make in destructible` 相关逻辑。

### AllBreakablesAreBroken
`public bool AllBreakablesAreBroken(int index)`

**用途 / Purpose:** 处理 `all breakables are broken` 相关逻辑。

### GetBrokenBreakableCount
`public int GetBrokenBreakableCount(int index)`

**用途 / Purpose:** 获取 `broken breakable count` 的当前值。

### GetUnbrokenBreakableCount
`public int GetUnbrokenBreakableCount(int index)`

**用途 / Purpose:** 获取 `unbroken breakable count` 的当前值。

### ResetBreakables
`public void ResetBreakables(int index, bool makeIndestructible = true)`

**用途 / Purpose:** 将 `breakables` 重置为初始状态。

### HasMainAgentPickedAll
`public bool HasMainAgentPickedAll(int index)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `main agent picked all`。

### CheckMainAgentEquipment
`public void CheckMainAgentEquipment(int index)`

**用途 / Purpose:** 处理 `check main agent equipment` 相关逻辑。

### CheckWeapons
`public void CheckWeapons(int index)`

**用途 / Purpose:** 处理 `check weapons` 相关逻辑。

### IsPositionInsideTutorialArea
`public bool IsPositionInsideTutorialArea(Vec3 position, out string volumeBoxTags)`

**用途 / Purpose:** 处理 `is position inside tutorial area` 相关逻辑。

## 使用示例

```csharp
var value = new TutorialArea();
value.AfterMissionStart();
```

## 参见

- [完整类目录](../catalog)