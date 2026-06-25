---
title: "MultiplayerClassLoadoutVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MultiplayerClassLoadoutVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshPeerDivision
`public void RefreshPeerDivision(MissionPeer peer, int divisionType)`

**用途 / Purpose:** 刷新 `peer division` 的显示或缓存。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**用途 / Purpose:** 当 `peer equipment refreshed` 事件触发时调用此方法。

### OnGoldUpdated
`public void OnGoldUpdated()`

**用途 / Purpose:** 当 `gold updated` 事件触发时调用此方法。

### RefreshRemainingTime
`public void RefreshRemainingTime()`

**用途 / Purpose:** 刷新 `remaining time` 的显示或缓存。

## 使用示例

```csharp
var value = new MultiplayerClassLoadoutVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)