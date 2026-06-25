---
title: "MissionFlagMarkerTargetVM"
description: "MissionFlagMarkerTargetVM 的自动生成类参考。"
---
# MissionFlagMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFlagMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionFlagMarkerTargetVM.cs`

## 概述

`MissionFlagMarkerTargetVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetFlag` | `public FlagCapturePoint TargetFlag { get; }` |
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |

## 主要方法

### UpdateScreenPosition
`public override void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 screen position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionFlagMarkerTargetVM 实例
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

### OnOwnerChanged
`public void OnOwnerChanged(Team team)`

**用途 / Purpose:** 在 owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFlagMarkerTargetVM 实例
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.OnOwnerChanged(team);
```

### OnRemainingMoraleChanged
`public void OnRemainingMoraleChanged(int remainingMorale)`

**用途 / Purpose:** 在 remaining morale changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFlagMarkerTargetVM 实例
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.OnRemainingMoraleChanged(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## 参见

- [本区域目录](../)