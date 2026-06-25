---
title: "MissionNameMarkerTargetBaseVM"
description: "MissionNameMarkerTargetBaseVM 的自动生成类参考。"
---
# MissionNameMarkerTargetBaseVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs`

## 概述

`MissionNameMarkerTargetBaseVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `NameType` | `public string NameType { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsQuestMainStory` | `public bool IsQuestMainStory { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsFriendly` | `public bool IsFriendly { get; set; }` |
| `IsPersistent` | `public bool IsPersistent { get; set; }` |

## 主要方法

### UpdatePosition
`public abstract void UpdatePosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerTargetBaseVM 实例
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.UpdatePosition(missionCamera);
```

### Equals
`public abstract bool Equals(MissionNameMarkerTargetBaseVM other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerTargetBaseVM 实例
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
var result = missionNameMarkerTargetBaseVM.Equals(other);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerTargetBaseVM 实例
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.RefreshValues();
```

### SetEnabledState
`public void SetEnabledState(bool enabled)`

**用途 / Purpose:** 为 enabled state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerTargetBaseVM 实例
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.SetEnabledState(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionNameMarkerTargetBaseVM instance = ...;
```

## 参见

- [本区域目录](../)