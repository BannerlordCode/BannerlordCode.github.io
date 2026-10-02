---
title: "BannerlordConfig"
description: "BannerlordConfig: a public class in TaleWorlds.MountAndBlade; 128 exposed members (8 methods, 63 properties, 57 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BannerlordConfig.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerlordConfig

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class BannerlordConfig`
**File:** `TaleWorlds.MountAndBlade/BannerlordConfig.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerlordConfig lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerlordConfig.cs. It is a public class; the inheritance chain is BannerlordConfig. It exposes 128 public/protected members: 8 methods, 63 properties, 57 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerlordConfig lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BannerlordConfig. The surface is property-led (properties 63/128, methods 8/128), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerlordConfig.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinBattleSize` | `public static int MinBattleSize` | property |
| `MaxBattleSize` | `public static int MaxBattleSize` | property |
| `MinReinforcementWaveCount` | `public static int MinReinforcementWaveCount` | property |
| `MaxReinforcementWaveCount` | `public static int MaxReinforcementWaveCount` | property |
| `Initialize` | `public static void Initialize()` | method |
| `Save` | `public static SaveResult Save()` | method |
| `GetDamageToPlayerMultiplier` | `public static float GetDamageToPlayerMultiplier()` | method |
| `DefaultLanguage` | `public static string DefaultLanguage` | property |
| `GetRealBattleSize` | `public static int GetRealBattleSize()` | method |
| `GetRealBattleSizeForSiege` | `public static int GetRealBattleSizeForSiege()` | method |
| `GetRealBattleSizeForNaval` | `public static int GetRealBattleSizeForNaval()` | method |
| `GetReinforcementWaveCount` | `public static int GetReinforcementWaveCount()` | method |
| `GetRealBattleSizeForSallyOut` | `public static int GetRealBattleSizeForSallyOut()` | method |
| `Language` | `public static string Language` | property |
| `VoiceLanguage` | `public static string VoiceLanguage` | property |
| `MapDoubleClickBehavior` | `public static int MapDoubleClickBehavior` | property |
| `PlayerReceivedDamageDifficulty` | `public static int PlayerReceivedDamageDifficulty` | property |
| `GyroOverrideForAttackDefend` | `public static bool GyroOverrideForAttackDefend` | property |
| `AttackDirectionControl` | `public static int AttackDirectionControl` | property |
| `DefendDirectionControl` | `public static int DefendDirectionControl` | property |
| `NumberOfCorpses` | `public static int NumberOfCorpses` | property |
| `ShowBlood` | `public static bool ShowBlood` | property |
| `DisplayAttackDirection` | `public static bool DisplayAttackDirection` | property |
| `DisplayTargetingReticule` | `public static bool DisplayTargetingReticule` | property |
| `ForceVSyncInMenus` | `public static bool ForceVSyncInMenus` | property |
| `BattleSize` | `public static int BattleSize` | property |
| `ReinforcementWaveCount` | `public static int ReinforcementWaveCount` | property |
| `CivilianAgentCount` | `public static float CivilianAgentCount` | property |
| `FirstPersonFov` | `public static float FirstPersonFov` | property |
| `UIScale` | `public static float UIScale` | property |
| `CombatCameraDistance` | `public static float CombatCameraDistance` | property |
| `TurnCameraWithHorseInFirstPerson` | `public static int TurnCameraWithHorseInFirstPerson` | property |
| `ReportDamage` | `public static bool ReportDamage` | property |
| `ReportBark` | `public static bool ReportBark` | property |
| `LockTarget` | `public static bool LockTarget` | property |
| `EnableTutorialHints` | `public static bool EnableTutorialHints` | property |
| `AutoSaveInterval` | `public static int AutoSaveInterval` | property |
| `FriendlyTroopsBannerOpacity` | `public static float FriendlyTroopsBannerOpacity` | property |
| `AlwaysShowFriendlyTroopBannersType` | `public static int AlwaysShowFriendlyTroopBannersType` | property |
| `KillFeedVisualType` | `public static int KillFeedVisualType` | property |
| `ShowFormationDistances` | `public static bool ShowFormationDistances` | property |
| `AutoTrackAttackedSettlements` | `public static int AutoTrackAttackedSettlements` | property |
| `ReportPersonalDamage` | `public static bool ReportPersonalDamage` | property |
| `SlowDownOnOrder` | `public static bool SlowDownOnOrder` | property |
| `StopGameOnFocusLost` | `public static bool StopGameOnFocusLost` | property |
| `ReportExperience` | `public static bool ReportExperience` | property |
| `EnableDamageTakenVisuals` | `public static bool EnableDamageTakenVisuals` | property |
| `EnableVerticalAimCorrection` | `public static bool EnableVerticalAimCorrection` | property |
| `ZoomSensitivityModifier` | `public static float ZoomSensitivityModifier` | property |
| `CrosshairType` | `public static int CrosshairType` | property |
| `EnableGenericAvatars` | `public static bool EnableGenericAvatars` | property |
| `EnableGenericNames` | `public static bool EnableGenericNames` | property |
| `HideFullServers` | `public static bool HideFullServers` | property |
| `HideEmptyServers` | `public static bool HideEmptyServers` | property |
| `HidePasswordProtectedServers` | `public static bool HidePasswordProtectedServers` | property |
| `HideUnofficialServers` | `public static bool HideUnofficialServers` | property |
| `HideModuleIncompatibleServers` | `public static bool HideModuleIncompatibleServers` | property |
| `ShowOnlyFavoriteServers` | `public static bool ShowOnlyFavoriteServers` | property |
| `OrderType` | `public static int OrderType` | property |
| `OrderLayoutType` | `public static int OrderLayoutType` | property |
| `EnableVoiceChat` | `public static bool EnableVoiceChat` | property |
| `EnableDeathIcon` | `public static bool EnableDeathIcon` | property |
| `EnableNetworkAlertIcons` | `public static bool EnableNetworkAlertIcons` | property |
| `EnableSingleplayerChatBox` | `public static bool EnableSingleplayerChatBox` | property |
| `EnableMultiplayerChatBox` | `public static bool EnableMultiplayerChatBox` | property |
| `ChatBoxSizeX` | `public static float ChatBoxSizeX` | property |
| `ChatBoxSizeY` | `public static float ChatBoxSizeY` | property |
| `LatestSaveGameName` | `public static string LatestSaveGameName` | property |
| `HideBattleUI` | `public static bool HideBattleUI` | property |
| `UnitSpawnPrioritization` | `public static int UnitSpawnPrioritization` | property |
| `IAPNoticeConfirmed` | `public static bool IAPNoticeConfirmed` | property |
| `MaxCorpseCount` | `public const int MaxCorpseCount` | field |
| `SiegeBattleSizeMultiplier` | `public static double SiegeBattleSizeMultiplier` | field |
| `DefaultMapDoubleClickBehavior` | `public const int DefaultMapDoubleClickBehavior` | field |
| `DefaultPlayerReceviedDamageDifficulty` | `public const int DefaultPlayerReceviedDamageDifficulty` | field |
| `DefaultGyroOverrideForAttackDefend` | `public const bool DefaultGyroOverrideForAttackDefend` | field |
| `DefaultAttackDirectionControl` | `public const int DefaultAttackDirectionControl` | field |
| `DefaultDefendDirectionControl` | `public const int DefaultDefendDirectionControl` | field |
| `DefaultNumberOfCorpses` | `public const int DefaultNumberOfCorpses` | field |
| `DefaultShowBlood` | `public const bool DefaultShowBlood` | field |
| `DefaultDisplayAttackDirection` | `public const bool DefaultDisplayAttackDirection` | field |
| `DefaultDisplayTargetingReticule` | `public const bool DefaultDisplayTargetingReticule` | field |
| `DefaultForceVSyncInMenus` | `public const bool DefaultForceVSyncInMenus` | field |
| `DefaultBattleSize` | `public const int DefaultBattleSize` | field |
| `DefaultReinforcementWaveCount` | `public const int DefaultReinforcementWaveCount` | field |
| `DefaultBattleSizeMultiplier` | `public const float DefaultBattleSizeMultiplier` | field |
| `DefaultFirstPersonFov` | `public const float DefaultFirstPersonFov` | field |
| `DefaultUIScale` | `public const float DefaultUIScale` | field |
| `DefaultCombatCameraDistance` | `public const float DefaultCombatCameraDistance` | field |
| `DefaultCombatAI` | `public const int DefaultCombatAI` | field |
| `DefaultTurnCameraWithHorseInFirstPerson` | `public const int DefaultTurnCameraWithHorseInFirstPerson` | field |
| `DefaultAutoSaveInterval` | `public const int DefaultAutoSaveInterval` | field |
| `DefaultFriendlyTroopsBannerOpacity` | `public const float DefaultFriendlyTroopsBannerOpacity` | field |
| `DefaultAlwaysShowFriendlyTroopBannersType` | `public const int DefaultAlwaysShowFriendlyTroopBannersType` | field |
| `DefaultShowFormationDistances` | `public const bool DefaultShowFormationDistances` | field |
| `DefaultReportDamage` | `public const bool DefaultReportDamage` | field |
| `DefaultReportBark` | `public const bool DefaultReportBark` | field |
| `DefaultEnableTutorialHints` | `public const bool DefaultEnableTutorialHints` | field |
| `DefaultKillFeedVisualType` | `public const int DefaultKillFeedVisualType` | field |
| `DefaultAutoTrackAttackedSettlements` | `public const int DefaultAutoTrackAttackedSettlements` | field |
| `DefaultReportPersonalDamage` | `public const bool DefaultReportPersonalDamage` | field |
| `DefaultStopGameOnFocusLost` | `public const bool DefaultStopGameOnFocusLost` | field |
| `DefaultSlowDownOnOrder` | `public const bool DefaultSlowDownOnOrder` | field |
| `DefaultReportExperience` | `public const bool DefaultReportExperience` | field |
| `DefaultEnableDamageTakenVisuals` | `public const bool DefaultEnableDamageTakenVisuals` | field |
| `DefaultEnableVoiceChat` | `public const bool DefaultEnableVoiceChat` | field |
| `DefaultEnableDeathIcon` | `public const bool DefaultEnableDeathIcon` | field |
| `DefaultEnableNetworkAlertIcons` | `public const bool DefaultEnableNetworkAlertIcons` | field |
| `DefaultEnableVerticalAimCorrection` | `public const bool DefaultEnableVerticalAimCorrection` | field |
| `DefaultZoomSensitivityModifier` | `public const float DefaultZoomSensitivityModifier` | field |
| `DefaultSingleplayerEnableChatBox` | `public const bool DefaultSingleplayerEnableChatBox` | field |
| `DefaultMultiplayerEnableChatBox` | `public const bool DefaultMultiplayerEnableChatBox` | field |
| `DefaultChatBoxSizeX` | `public const float DefaultChatBoxSizeX` | field |
| `DefaultChatBoxSizeY` | `public const float DefaultChatBoxSizeY` | field |
| `DefaultCrosshairType` | `public const int DefaultCrosshairType` | field |
| `DefaultEnableGenericAvatars` | `public const bool DefaultEnableGenericAvatars` | field |
| `DefaultEnableGenericNames` | `public const bool DefaultEnableGenericNames` | field |
| `DefaultHideFullServers` | `public const bool DefaultHideFullServers` | field |
| `DefaultHideEmptyServers` | `public const bool DefaultHideEmptyServers` | field |
| `DefaultHidePasswordProtectedServers` | `public const bool DefaultHidePasswordProtectedServers` | field |
| `DefaultHideUnofficialServers` | `public const bool DefaultHideUnofficialServers` | field |
| `DefaultHideModuleIncompatibleServers` | `public const bool DefaultHideModuleIncompatibleServers` | field |
| `DefaultShowOnlyFavoriteServers` | `public const bool DefaultShowOnlyFavoriteServers` | field |
| `DefaultOrderLayoutType` | `public const int DefaultOrderLayoutType` | field |
| `DefaultHideBattleUI` | `public const bool DefaultHideBattleUI` | field |
| `DefaultUnitSpawnPrioritization` | `public const int DefaultUnitSpawnPrioritization` | field |
| `DefaultOrderType` | `public const int DefaultOrderType` | field |
| `DefaultLockTarget` | `public const bool DefaultLockTarget` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
