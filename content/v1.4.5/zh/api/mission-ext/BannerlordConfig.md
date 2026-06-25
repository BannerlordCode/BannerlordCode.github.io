---
title: "BannerlordConfig"
description: "BannerlordConfig 的自动生成类参考。"
---
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordConfig.cs`

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

**用途 / Purpose:** 判断当前对象是否处于 「valid value」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BannerlordConfig 实例
BannerlordConfig bannerlordConfig = ...;
var result = bannerlordConfig.IsValidValue(0);
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BannerlordConfig.Initialize();
```

### Save
`public static SaveResult Save()`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
BannerlordConfig.Save();
```

### GetDamageToPlayerMultiplier
`public static float GetDamageToPlayerMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「damage to player multiplier」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetDamageToPlayerMultiplier();
```

### GetRealBattleSize
`public static int GetRealBattleSize()`

**用途 / Purpose:** 读取并返回当前对象中 「real battle size」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetRealBattleSize();
```

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**用途 / Purpose:** 读取并返回当前对象中 「real battle size for siege」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetRealBattleSizeForSiege();
```

### GetRealBattleSizeForNaval
`public static int GetRealBattleSizeForNaval()`

**用途 / Purpose:** 读取并返回当前对象中 「real battle size for naval」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetRealBattleSizeForNaval();
```

### GetReinforcementWaveCount
`public static int GetReinforcementWaveCount()`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement wave count」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetReinforcementWaveCount();
```

### GetRealBattleSizeForSallyOut
`public static int GetRealBattleSizeForSallyOut()`

**用途 / Purpose:** 读取并返回当前对象中 「real battle size for sally out」 的结果。

```csharp
// 静态调用，不需要实例
BannerlordConfig.GetRealBattleSizeForSallyOut();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerlordConfig bannerlordConfig = ...;
bannerlordConfig.IsValidValue(0);
```

## 参见

- [本区域目录](../)