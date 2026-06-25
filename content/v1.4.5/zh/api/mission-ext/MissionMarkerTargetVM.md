---
title: "MissionMarkerTargetVM"
description: "MissionMarkerTargetVM 的自动生成类参考。"
---
# MissionMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionMarkerTargetVM.cs`

## 概述

`MissionMarkerTargetVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WorldPosition` | `public abstract Vec3 WorldPosition { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `MarkerType` | `public int MarkerType { get; set; }` |
| `VisualState` | `public string VisualState { get; set; }` |

## 主要方法

### UpdateScreenPosition
`public virtual void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 screen position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionMarkerTargetVM 实例
MissionMarkerTargetVM missionMarkerTargetVM = ...;
missionMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionMarkerTargetVM instance = ...;
```

## 参见

- [本区域目录](../)