---
title: "MissionObjectiveMarkerVM"
description: "MissionObjectiveMarkerVM 的自动生成类参考。"
---
# MissionObjectiveMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs`

## 概述

`MissionObjectiveMarkerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ObjectiveTypeId` | `public string ObjectiveTypeId { get; set; }` |
| `ObjectiveName` | `public string ObjectiveName { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveMarkerVM 实例
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.RefreshValues();
```

### UpdateActiveState
`public void UpdateActiveState()`

**用途 / Purpose:** 重新计算并更新 「active state」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveMarkerVM 实例
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.UpdateActiveState();
```

### UpdatePosition
`public void UpdatePosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 「position」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveMarkerVM 实例
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.UpdatePosition(missionCamera);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.RefreshValues();
```

## 参见

- [本区域目录](../)