---
title: "MultiplayerClassLoadoutVM"
description: "MultiplayerClassLoadoutVM 的自动生成类参考。"
---
# MultiplayerClassLoadoutVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MultiplayerClassLoadoutVM.cs`

## 概述

`MultiplayerClassLoadoutVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Culture` | `public string Culture { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `IsSpawnTimerVisible` | `public bool IsSpawnTimerVisible { get; set; }` |
| `SpawnLabelText` | `public string SpawnLabelText { get; set; }` |
| `IsSpawnLabelVisible` | `public bool IsSpawnLabelVisible { get; set; }` |
| `ShowAttackerOrDefenderIcons` | `public bool ShowAttackerOrDefenderIcons { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `SpawnForfeitLabelText` | `public string SpawnForfeitLabelText { get; set; }` |
| `IsSpawnForfeitLabelVisible` | `public bool IsSpawnForfeitLabelVisible { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `Teammates` | `public MBBindingList<MPPlayerVM> Teammates { get; set; }` |
| `Enemies` | `public MBBindingList<MPPlayerVM> Enemies { get; set; }` |
| `HeroInformation` | `public HeroInformationVM HeroInformation { get; set; }` |
| `CurrentSelectedClass` | `public HeroClassVM CurrentSelectedClass { get; set; }` |
| `RemainingTimeText` | `public string RemainingTimeText { get; set; }` |
| `WarnRemainingTime` | `public bool WarnRemainingTime { get; set; }` |
| `Classes` | `public MBBindingList<HeroClassGroupVM> Classes { get; set; }` |
| `IsGoldEnabled` | `public bool IsGoldEnabled { get; set; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; set; }` |
| `WarmupInfoText` | `public string WarmupInfoText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnFinalize();
```

### RefreshPeerDivision
`public void RefreshPeerDivision(MissionPeer peer, int divisionType)`

**用途 / Purpose:** **用途 / Purpose:** 使 peer division 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshPeerDivision(peer, 0);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.Tick(0);
```

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 在 peer equipment refreshed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnPeerEquipmentRefreshed(peer);
```

### OnGoldUpdated
`public void OnGoldUpdated()`

**用途 / Purpose:** **用途 / Purpose:** 在 gold updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.OnGoldUpdated();
```

### RefreshRemainingTime
`public void RefreshRemainingTime()`

**用途 / Purpose:** **用途 / Purpose:** 使 remaining time 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassLoadoutVM 实例
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshRemainingTime();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerClassLoadoutVM multiplayerClassLoadoutVM = ...;
multiplayerClassLoadoutVM.RefreshValues();
```

## 参见

- [本区域目录](../)