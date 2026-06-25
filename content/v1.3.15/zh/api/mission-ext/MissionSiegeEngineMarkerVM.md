---
title: "MissionSiegeEngineMarkerVM"
description: "MissionSiegeEngineMarkerVM 的自动生成类参考。"
---
# MissionSiegeEngineMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`

## 概述

`MissionSiegeEngineMarkerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> Targets { get; set; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(List<SiegeWeapon> siegeEngines)`

**用途 / Purpose:** 为 「with」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineMarkerVM 实例
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.InitializeWith(siegeEngines);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineMarkerVM 实例
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineMarkerVM 实例
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.OnFinalize();
```

### Compare
`public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineMarkerVM 实例
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
var result = missionSiegeEngineMarkerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.InitializeWith(siegeEngines);
```

## 参见

- [本区域目录](../)