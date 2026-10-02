---
title: "BannerlordConfig"
description: "BannerlordConfig：TaleWorlds.MountAndBlade 的 public 类；公开成员 128 个（方法 8、属性 63、字段 57）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BannerlordConfig.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerlordConfig

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class BannerlordConfig`
**File:** `TaleWorlds.MountAndBlade/BannerlordConfig.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BannerlordConfig 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BannerlordConfig.cs。它是一个 public 类，继承链为 BannerlordConfig。public/protected 成员共 128 个：8 方法、63 属性、57 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerlordConfig 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BannerlordConfig。成员构成以属性为主（属性 63/128，方法 8/128），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BannerlordConfig.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinBattleSize` | `public static int MinBattleSize` | 属性 |
| `MaxBattleSize` | `public static int MaxBattleSize` | 属性 |
| `MinReinforcementWaveCount` | `public static int MinReinforcementWaveCount` | 属性 |
| `MaxReinforcementWaveCount` | `public static int MaxReinforcementWaveCount` | 属性 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `Save` | `public static SaveResult Save()` | 方法 |
| `GetDamageToPlayerMultiplier` | `public static float GetDamageToPlayerMultiplier()` | 方法 |
| `DefaultLanguage` | `public static string DefaultLanguage` | 属性 |
| `GetRealBattleSize` | `public static int GetRealBattleSize()` | 方法 |
| `GetRealBattleSizeForSiege` | `public static int GetRealBattleSizeForSiege()` | 方法 |
| `GetRealBattleSizeForNaval` | `public static int GetRealBattleSizeForNaval()` | 方法 |
| `GetReinforcementWaveCount` | `public static int GetReinforcementWaveCount()` | 方法 |
| `GetRealBattleSizeForSallyOut` | `public static int GetRealBattleSizeForSallyOut()` | 方法 |
| `Language` | `public static string Language` | 属性 |
| `VoiceLanguage` | `public static string VoiceLanguage` | 属性 |
| `MapDoubleClickBehavior` | `public static int MapDoubleClickBehavior` | 属性 |
| `PlayerReceivedDamageDifficulty` | `public static int PlayerReceivedDamageDifficulty` | 属性 |
| `GyroOverrideForAttackDefend` | `public static bool GyroOverrideForAttackDefend` | 属性 |
| `AttackDirectionControl` | `public static int AttackDirectionControl` | 属性 |
| `DefendDirectionControl` | `public static int DefendDirectionControl` | 属性 |
| `NumberOfCorpses` | `public static int NumberOfCorpses` | 属性 |
| `ShowBlood` | `public static bool ShowBlood` | 属性 |
| `DisplayAttackDirection` | `public static bool DisplayAttackDirection` | 属性 |
| `DisplayTargetingReticule` | `public static bool DisplayTargetingReticule` | 属性 |
| `ForceVSyncInMenus` | `public static bool ForceVSyncInMenus` | 属性 |
| `BattleSize` | `public static int BattleSize` | 属性 |
| `ReinforcementWaveCount` | `public static int ReinforcementWaveCount` | 属性 |
| `CivilianAgentCount` | `public static float CivilianAgentCount` | 属性 |
| `FirstPersonFov` | `public static float FirstPersonFov` | 属性 |
| `UIScale` | `public static float UIScale` | 属性 |
| `CombatCameraDistance` | `public static float CombatCameraDistance` | 属性 |
| `TurnCameraWithHorseInFirstPerson` | `public static int TurnCameraWithHorseInFirstPerson` | 属性 |
| `ReportDamage` | `public static bool ReportDamage` | 属性 |
| `ReportBark` | `public static bool ReportBark` | 属性 |
| `LockTarget` | `public static bool LockTarget` | 属性 |
| `EnableTutorialHints` | `public static bool EnableTutorialHints` | 属性 |
| `AutoSaveInterval` | `public static int AutoSaveInterval` | 属性 |
| `FriendlyTroopsBannerOpacity` | `public static float FriendlyTroopsBannerOpacity` | 属性 |
| `AlwaysShowFriendlyTroopBannersType` | `public static int AlwaysShowFriendlyTroopBannersType` | 属性 |
| `KillFeedVisualType` | `public static int KillFeedVisualType` | 属性 |
| `ShowFormationDistances` | `public static bool ShowFormationDistances` | 属性 |
| `AutoTrackAttackedSettlements` | `public static int AutoTrackAttackedSettlements` | 属性 |
| `ReportPersonalDamage` | `public static bool ReportPersonalDamage` | 属性 |
| `SlowDownOnOrder` | `public static bool SlowDownOnOrder` | 属性 |
| `StopGameOnFocusLost` | `public static bool StopGameOnFocusLost` | 属性 |
| `ReportExperience` | `public static bool ReportExperience` | 属性 |
| `EnableDamageTakenVisuals` | `public static bool EnableDamageTakenVisuals` | 属性 |
| `EnableVerticalAimCorrection` | `public static bool EnableVerticalAimCorrection` | 属性 |
| `ZoomSensitivityModifier` | `public static float ZoomSensitivityModifier` | 属性 |
| `CrosshairType` | `public static int CrosshairType` | 属性 |
| `EnableGenericAvatars` | `public static bool EnableGenericAvatars` | 属性 |
| `EnableGenericNames` | `public static bool EnableGenericNames` | 属性 |
| `HideFullServers` | `public static bool HideFullServers` | 属性 |
| `HideEmptyServers` | `public static bool HideEmptyServers` | 属性 |
| `HidePasswordProtectedServers` | `public static bool HidePasswordProtectedServers` | 属性 |
| `HideUnofficialServers` | `public static bool HideUnofficialServers` | 属性 |
| `HideModuleIncompatibleServers` | `public static bool HideModuleIncompatibleServers` | 属性 |
| `ShowOnlyFavoriteServers` | `public static bool ShowOnlyFavoriteServers` | 属性 |
| `OrderType` | `public static int OrderType` | 属性 |
| `OrderLayoutType` | `public static int OrderLayoutType` | 属性 |
| `EnableVoiceChat` | `public static bool EnableVoiceChat` | 属性 |
| `EnableDeathIcon` | `public static bool EnableDeathIcon` | 属性 |
| `EnableNetworkAlertIcons` | `public static bool EnableNetworkAlertIcons` | 属性 |
| `EnableSingleplayerChatBox` | `public static bool EnableSingleplayerChatBox` | 属性 |
| `EnableMultiplayerChatBox` | `public static bool EnableMultiplayerChatBox` | 属性 |
| `ChatBoxSizeX` | `public static float ChatBoxSizeX` | 属性 |
| `ChatBoxSizeY` | `public static float ChatBoxSizeY` | 属性 |
| `LatestSaveGameName` | `public static string LatestSaveGameName` | 属性 |
| `HideBattleUI` | `public static bool HideBattleUI` | 属性 |
| `UnitSpawnPrioritization` | `public static int UnitSpawnPrioritization` | 属性 |
| `IAPNoticeConfirmed` | `public static bool IAPNoticeConfirmed` | 属性 |
| `MaxCorpseCount` | `public const int MaxCorpseCount` | 字段 |
| `SiegeBattleSizeMultiplier` | `public static double SiegeBattleSizeMultiplier` | 字段 |
| `DefaultMapDoubleClickBehavior` | `public const int DefaultMapDoubleClickBehavior` | 字段 |
| `DefaultPlayerReceviedDamageDifficulty` | `public const int DefaultPlayerReceviedDamageDifficulty` | 字段 |
| `DefaultGyroOverrideForAttackDefend` | `public const bool DefaultGyroOverrideForAttackDefend` | 字段 |
| `DefaultAttackDirectionControl` | `public const int DefaultAttackDirectionControl` | 字段 |
| `DefaultDefendDirectionControl` | `public const int DefaultDefendDirectionControl` | 字段 |
| `DefaultNumberOfCorpses` | `public const int DefaultNumberOfCorpses` | 字段 |
| `DefaultShowBlood` | `public const bool DefaultShowBlood` | 字段 |
| `DefaultDisplayAttackDirection` | `public const bool DefaultDisplayAttackDirection` | 字段 |
| `DefaultDisplayTargetingReticule` | `public const bool DefaultDisplayTargetingReticule` | 字段 |
| `DefaultForceVSyncInMenus` | `public const bool DefaultForceVSyncInMenus` | 字段 |
| `DefaultBattleSize` | `public const int DefaultBattleSize` | 字段 |
| `DefaultReinforcementWaveCount` | `public const int DefaultReinforcementWaveCount` | 字段 |
| `DefaultBattleSizeMultiplier` | `public const float DefaultBattleSizeMultiplier` | 字段 |
| `DefaultFirstPersonFov` | `public const float DefaultFirstPersonFov` | 字段 |
| `DefaultUIScale` | `public const float DefaultUIScale` | 字段 |
| `DefaultCombatCameraDistance` | `public const float DefaultCombatCameraDistance` | 字段 |
| `DefaultCombatAI` | `public const int DefaultCombatAI` | 字段 |
| `DefaultTurnCameraWithHorseInFirstPerson` | `public const int DefaultTurnCameraWithHorseInFirstPerson` | 字段 |
| `DefaultAutoSaveInterval` | `public const int DefaultAutoSaveInterval` | 字段 |
| `DefaultFriendlyTroopsBannerOpacity` | `public const float DefaultFriendlyTroopsBannerOpacity` | 字段 |
| `DefaultAlwaysShowFriendlyTroopBannersType` | `public const int DefaultAlwaysShowFriendlyTroopBannersType` | 字段 |
| `DefaultShowFormationDistances` | `public const bool DefaultShowFormationDistances` | 字段 |
| `DefaultReportDamage` | `public const bool DefaultReportDamage` | 字段 |
| `DefaultReportBark` | `public const bool DefaultReportBark` | 字段 |
| `DefaultEnableTutorialHints` | `public const bool DefaultEnableTutorialHints` | 字段 |
| `DefaultKillFeedVisualType` | `public const int DefaultKillFeedVisualType` | 字段 |
| `DefaultAutoTrackAttackedSettlements` | `public const int DefaultAutoTrackAttackedSettlements` | 字段 |
| `DefaultReportPersonalDamage` | `public const bool DefaultReportPersonalDamage` | 字段 |
| `DefaultStopGameOnFocusLost` | `public const bool DefaultStopGameOnFocusLost` | 字段 |
| `DefaultSlowDownOnOrder` | `public const bool DefaultSlowDownOnOrder` | 字段 |
| `DefaultReportExperience` | `public const bool DefaultReportExperience` | 字段 |
| `DefaultEnableDamageTakenVisuals` | `public const bool DefaultEnableDamageTakenVisuals` | 字段 |
| `DefaultEnableVoiceChat` | `public const bool DefaultEnableVoiceChat` | 字段 |
| `DefaultEnableDeathIcon` | `public const bool DefaultEnableDeathIcon` | 字段 |
| `DefaultEnableNetworkAlertIcons` | `public const bool DefaultEnableNetworkAlertIcons` | 字段 |
| `DefaultEnableVerticalAimCorrection` | `public const bool DefaultEnableVerticalAimCorrection` | 字段 |
| `DefaultZoomSensitivityModifier` | `public const float DefaultZoomSensitivityModifier` | 字段 |
| `DefaultSingleplayerEnableChatBox` | `public const bool DefaultSingleplayerEnableChatBox` | 字段 |
| `DefaultMultiplayerEnableChatBox` | `public const bool DefaultMultiplayerEnableChatBox` | 字段 |
| `DefaultChatBoxSizeX` | `public const float DefaultChatBoxSizeX` | 字段 |
| `DefaultChatBoxSizeY` | `public const float DefaultChatBoxSizeY` | 字段 |
| `DefaultCrosshairType` | `public const int DefaultCrosshairType` | 字段 |
| `DefaultEnableGenericAvatars` | `public const bool DefaultEnableGenericAvatars` | 字段 |
| `DefaultEnableGenericNames` | `public const bool DefaultEnableGenericNames` | 字段 |
| `DefaultHideFullServers` | `public const bool DefaultHideFullServers` | 字段 |
| `DefaultHideEmptyServers` | `public const bool DefaultHideEmptyServers` | 字段 |
| `DefaultHidePasswordProtectedServers` | `public const bool DefaultHidePasswordProtectedServers` | 字段 |
| `DefaultHideUnofficialServers` | `public const bool DefaultHideUnofficialServers` | 字段 |
| `DefaultHideModuleIncompatibleServers` | `public const bool DefaultHideModuleIncompatibleServers` | 字段 |
| `DefaultShowOnlyFavoriteServers` | `public const bool DefaultShowOnlyFavoriteServers` | 字段 |
| `DefaultOrderLayoutType` | `public const int DefaultOrderLayoutType` | 字段 |
| `DefaultHideBattleUI` | `public const bool DefaultHideBattleUI` | 字段 |
| `DefaultUnitSpawnPrioritization` | `public const int DefaultUnitSpawnPrioritization` | 字段 |
| `DefaultOrderType` | `public const int DefaultOrderType` | 字段 |
| `DefaultLockTarget` | `public const bool DefaultLockTarget` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
