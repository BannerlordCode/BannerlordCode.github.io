---
title: "MissionDuelPeerMarkerVM"
description: "MissionDuelPeerMarkerVM 的自动生成类参考。"
---
# MissionDuelPeerMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelPeerMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelPeerMarkerVM.cs`

## 概述

`MissionDuelPeerMarkerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `Distance` | `public float Distance { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `ShouldShowInformation` | `public bool ShouldShowInformation { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `HasDuelRequestForPlayer` | `public bool HasDuelRequestForPlayer { get; set; }` |
| `HasSentDuelRequest` | `public bool HasSentDuelRequest { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |
| `Bounty` | `public int Bounty { get; set; }` |
| `PreferredArenaType` | `public int PreferredArenaType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `SelectedPerks` | `public MBBindingList<MPPerkVM> SelectedPerks { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnTick(0);
```

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 screen position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateScreenPosition(missionCamera);
```

### UpdateBounty
`public void UpdateBounty()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 bounty 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateBounty();
```

### OnDuelStarted
`public void OnDuelStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 duel started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnDuelStarted();
```

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 duel ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnDuelEnded();
```

### UpdateCurentDuelStatus
`public void UpdateCurentDuelStatus(bool isInDuel)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 curent duel status 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateCurentDuelStatus(false);
```

### RefreshPerkSelection
`public void RefreshPerkSelection()`

**用途 / Purpose:** **用途 / Purpose:** 使 perk selection 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionDuelPeerMarkerVM 实例
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshPerkSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshValues();
```

## 参见

- [本区域目录](../)