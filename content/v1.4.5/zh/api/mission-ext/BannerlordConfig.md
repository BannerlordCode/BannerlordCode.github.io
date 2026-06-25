---
title: "BannerlordConfig"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordConfig`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordConfig.cs`

## 概述

`BannerlordConfig` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Language` | `public static string Language { get; set; }` |
| `VoiceLanguage` | `public static string VoiceLanguage { get; set; }` |
| `MapDoubleClickBehavior` | `public static int MapDoubleClickBehavior { get; set; }` |
| `PlayerReceivedDamageDifficulty` | `public static int PlayerReceivedDamageDifficulty { get; set; }` |
| `GyroOverrideForAttackDefend` | `public static bool GyroOverrideForAttackDefend { get; set; }` |
| `AttackDirectionControl` | `public static int AttackDirectionControl { get; set; }` |
| `DefendDirectionControl` | `public static int DefendDirectionControl { get; set; }` |
| `NumberOfCorpses` | `public static int NumberOfCorpses { get; set; }` |
| `ShowBlood` | `public static bool ShowBlood { get; set; }` |
| `DisplayAttackDirection` | `public static bool DisplayAttackDirection { get; set; }` |
| `DisplayTargetingReticule` | `public static bool DisplayTargetingReticule { get; set; }` |
| `ForceVSyncInMenus` | `public static bool ForceVSyncInMenus { get; set; }` |
| `BattleSize` | `public static int BattleSize { get; set; }` |
| `ReinforcementWaveCount` | `public static int ReinforcementWaveCount { get; set; }` |
| `FirstPersonFov` | `public static float FirstPersonFov { get; set; }` |
| `UIScale` | `public static float UIScale { get; set; }` |
| `CombatCameraDistance` | `public static float CombatCameraDistance { get; set; }` |
| `TurnCameraWithHorseInFirstPerson` | `public static int TurnCameraWithHorseInFirstPerson { get; set; }` |
| `ReportDamage` | `public static bool ReportDamage { get; set; }` |
| `ReportBark` | `public static bool ReportBark { get; set; }` |
| `LockTarget` | `public static bool LockTarget { get; set; }` |
| `EnableTutorialHints` | `public static bool EnableTutorialHints { get; set; }` |
| `AutoSaveInterval` | `public static int AutoSaveInterval { get; set; }` |
| `FriendlyTroopsBannerOpacity` | `public static float FriendlyTroopsBannerOpacity { get; set; }` |
| `AlwaysShowFriendlyTroopBannersType` | `public static int AlwaysShowFriendlyTroopBannersType { get; set; }` |
| `KillFeedVisualType` | `public static int KillFeedVisualType { get; set; }` |
| `ShowFormationDistances` | `public static bool ShowFormationDistances { get; set; }` |
| `AutoTrackAttackedSettlements` | `public static int AutoTrackAttackedSettlements { get; set; }` |
| `ReportPersonalDamage` | `public static bool ReportPersonalDamage { get; set; }` |
| `SlowDownOnOrder` | `public static bool SlowDownOnOrder { get; set; }` |
| `StopGameOnFocusLost` | `public static bool StopGameOnFocusLost { get; set; }` |
| `ReportExperience` | `public static bool ReportExperience { get; set; }` |
| `EnableDamageTakenVisuals` | `public static bool EnableDamageTakenVisuals { get; set; }` |
| `EnableVerticalAimCorrection` | `public static bool EnableVerticalAimCorrection { get; set; }` |
| `ZoomSensitivityModifier` | `public static float ZoomSensitivityModifier { get; set; }` |
| `CrosshairType` | `public static int CrosshairType { get; set; }` |
| `EnableGenericAvatars` | `public static bool EnableGenericAvatars { get; set; }` |
| `EnableGenericNames` | `public static bool EnableGenericNames { get; set; }` |
| `HideFullServers` | `public static bool HideFullServers { get; set; }` |
| `HideEmptyServers` | `public static bool HideEmptyServers { get; set; }` |
| `HidePasswordProtectedServers` | `public static bool HidePasswordProtectedServers { get; set; }` |
| `HideUnofficialServers` | `public static bool HideUnofficialServers { get; set; }` |
| `HideModuleIncompatibleServers` | `public static bool HideModuleIncompatibleServers { get; set; }` |
| `ShowOnlyFavoriteServers` | `public static bool ShowOnlyFavoriteServers { get; set; }` |
| `OrderType` | `public static int OrderType { get; set; }` |
| `OrderLayoutType` | `public static int OrderLayoutType { get; set; }` |
| `EnableVoiceChat` | `public static bool EnableVoiceChat { get; set; }` |
| `EnableDeathIcon` | `public static bool EnableDeathIcon { get; set; }` |
| `EnableNetworkAlertIcons` | `public static bool EnableNetworkAlertIcons { get; set; }` |
| `EnableSingleplayerChatBox` | `public static bool EnableSingleplayerChatBox { get; set; }` |
| `EnableMultiplayerChatBox` | `public static bool EnableMultiplayerChatBox { get; set; }` |
| `ChatBoxSizeX` | `public static float ChatBoxSizeX { get; set; }` |
| `ChatBoxSizeY` | `public static float ChatBoxSizeY { get; set; }` |
| `LatestSaveGameName` | `public static string LatestSaveGameName { get; set; }` |
| `HideBattleUI` | `public static bool HideBattleUI { get; set; }` |
| `UnitSpawnPrioritization` | `public static int UnitSpawnPrioritization { get; set; }` |
| `IAPNoticeConfirmed` | `public static bool IAPNoticeConfirmed { get; set; }` |

## 主要方法

### IsValidValue
`public bool IsValidValue(int value)`

**用途 / Purpose:** 处理 `is valid value` 相关逻辑。

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Save
`public static SaveResult Save()`

**用途 / Purpose:** 保存 `save` 数据。

### GetDamageToPlayerMultiplier
`public static float GetDamageToPlayerMultiplier()`

**用途 / Purpose:** 获取 `damage to player multiplier` 的当前值。

### GetRealBattleSize
`public static int GetRealBattleSize()`

**用途 / Purpose:** 获取 `real battle size` 的当前值。

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**用途 / Purpose:** 获取 `real battle size for siege` 的当前值。

### GetRealBattleSizeForNaval
`public static int GetRealBattleSizeForNaval()`

**用途 / Purpose:** 获取 `real battle size for naval` 的当前值。

### GetReinforcementWaveCount
`public static int GetReinforcementWaveCount()`

**用途 / Purpose:** 获取 `reinforcement wave count` 的当前值。

### GetRealBattleSizeForSallyOut
`public static int GetRealBattleSizeForSallyOut()`

**用途 / Purpose:** 获取 `real battle size for sally out` 的当前值。

## 使用示例

```csharp
var value = new BannerlordConfig();
value.IsValidValue(0);
```

## 参见

- [完整类目录](../catalog)