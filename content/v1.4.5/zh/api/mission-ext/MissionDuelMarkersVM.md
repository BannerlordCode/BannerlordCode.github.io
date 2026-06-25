---
title: "MissionDuelMarkersVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionDuelMarkersVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDuelMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelMarkersVM.cs`

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

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateScreenCenter
`public void UpdateScreenCenter()`

**用途 / Purpose:** 更新 `screen center` 的状态或数据。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### UnregisterEvents
`public void UnregisterEvents()`

**用途 / Purpose:** 处理 `unregister events` 相关逻辑。

### RefreshPeerEquipments
`public void RefreshPeerEquipments()`

**用途 / Purpose:** 刷新 `peer equipments` 的显示或缓存。

### OnAgentSpawnedWithoutDuel
`public void OnAgentSpawnedWithoutDuel()`

**用途 / Purpose:** 当 `agent spawned without duel` 事件触发时调用此方法。

### OnAgentBuiltForTheFirstTime
`public void OnAgentBuiltForTheFirstTime()`

**用途 / Purpose:** 当 `agent built for the first time` 事件触发时调用此方法。

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer)`

**用途 / Purpose:** 当 `duel started` 事件触发时调用此方法。

### SetMarkerOfPeerEnabled
`public void SetMarkerOfPeerEnabled(MissionPeer peer, bool isEnabled)`

**用途 / Purpose:** 设置 `marker of peer enabled` 的值或状态。

### OnPlayerPreferredZoneChanged
`public void OnPlayerPreferredZoneChanged(int playerPrefferedArenaType)`

**用途 / Purpose:** 当 `player preferred zone changed` 事件触发时调用此方法。

### OnFocusGained
`public void OnFocusGained()`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnFocusLost
`public void OnFocusLost()`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**用途 / Purpose:** 当 `peer equipment refreshed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionDuelMarkersVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)