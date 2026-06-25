---
title: "MissionDuelMarkersVM"
description: "MissionDuelMarkersVM 的自动生成类参考。"
---
# MissionDuelMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelMarkersVM.cs`

## 概述

`MissionDuelMarkersVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionDuelPeerMarkerVM> Targets { get; set; }` |
| `Landmarks` | `public MBBindingList<MissionDuelLandmarkMarkerVM> Landmarks { get; set; }` |

## 主要方法

### Compare
`public int Compare(MissionDuelPeerMarkerVM x, MissionDuelPeerMarkerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
var result = missionDuelMarkersVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RefreshValues();
```

### UpdateScreenCenter
`public void UpdateScreenCenter()`

**用途 / Purpose:** 重新计算并更新 「screen center」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.UpdateScreenCenter();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.Tick(0);
```

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RegisterEvents();
```

### UnregisterEvents
`public void UnregisterEvents()`

**用途 / Purpose:** 从当前系统中注销「events」。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.UnregisterEvents();
```

### RefreshPeerEquipments
`public void RefreshPeerEquipments()`

**用途 / Purpose:** 使 「peer equipments」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RefreshPeerEquipments();
```

### OnAgentSpawnedWithoutDuel
`public void OnAgentSpawnedWithoutDuel()`

**用途 / Purpose:** 在 「agent spawned without duel」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnAgentSpawnedWithoutDuel();
```

### OnAgentBuiltForTheFirstTime
`public void OnAgentBuiltForTheFirstTime()`

**用途 / Purpose:** 在 「agent built for the first time」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnAgentBuiltForTheFirstTime();
```

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer)`

**用途 / Purpose:** 在 「duel started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnDuelStarted(firstPeer, secondPeer);
```

### SetMarkerOfPeerEnabled
`public void SetMarkerOfPeerEnabled(MissionPeer peer, bool isEnabled)`

**用途 / Purpose:** 为 「marker of peer enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.SetMarkerOfPeerEnabled(peer, false);
```

### OnPlayerPreferredZoneChanged
`public void OnPlayerPreferredZoneChanged(int playerPrefferedArenaType)`

**用途 / Purpose:** 在 「player preferred zone changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnPlayerPreferredZoneChanged(0);
```

### OnFocusGained
`public void OnFocusGained()`

**用途 / Purpose:** 在 「focus gained」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnFocusGained();
```

### OnFocusLost
`public void OnFocusLost()`

**用途 / Purpose:** 在 「focus lost」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnFocusLost();
```

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**用途 / Purpose:** 在 「peer equipment refreshed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelMarkersVM 实例
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnPeerEquipmentRefreshed(peer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.Compare(x, y);
```

## 参见

- [本区域目录](../)