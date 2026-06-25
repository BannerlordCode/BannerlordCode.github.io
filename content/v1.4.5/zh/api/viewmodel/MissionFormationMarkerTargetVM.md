---
title: "MissionFormationMarkerTargetVM"
description: "MissionFormationMarkerTargetVM 的自动生成类参考。"
---
# MissionFormationMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionFormationMarkerTargetVM.cs`

## 概述

`MissionFormationMarkerTargetVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `FormationType` | `public string FormationType { get; set; }` |
| `TeamType` | `public int TeamType { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |

## 主要方法

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionFormationMarkerTargetVM 实例
MissionFormationMarkerTargetVM missionFormationMarkerTargetVM = ...;
missionFormationMarkerTargetVM.Refresh();
```

### SetTargetedState
`public void SetTargetedState(bool isFocused, bool isTargetingAFormation)`

**用途 / Purpose:** 为 targeted state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionFormationMarkerTargetVM 实例
MissionFormationMarkerTargetVM missionFormationMarkerTargetVM = ...;
missionFormationMarkerTargetVM.SetTargetedState(false, false);
```

### GetFormationType
`public static string GetFormationType(FormationClass formationType)`

**用途 / Purpose:** 读取并返回当前对象中 formation type 的结果。

```csharp
// 静态调用，不需要实例
MissionFormationMarkerTargetVM.GetFormationType(formationType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionFormationMarkerTargetVM missionFormationMarkerTargetVM = ...;
missionFormationMarkerTargetVM.Refresh();
```

## 参见

- [本区域目录](../)