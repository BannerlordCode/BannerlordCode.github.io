---
title: "BannerlordConfig"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordConfig`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BannerlordConfig.cs`

## Overview

`BannerlordConfig` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinBattleSize` | `public static int MinBattleSize { get; }` |
| `MaxBattleSize` | `public static int MaxBattleSize { get; }` |
| `MinReinforcementWaveCount` | `public static int MinReinforcementWaveCount { get; }` |
| `MaxReinforcementWaveCount` | `public static int MaxReinforcementWaveCount { get; }` |
| `DefaultLanguage` | `public static string DefaultLanguage { get; }` |
| `Language` | `public static string Language { get; set; }` |
| `VoiceLanguage` | `public static string VoiceLanguage { get; set; }` |
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
| `CivilianAgentCount` | `public static float CivilianAgentCount { get; set; }` |
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
| `AlwaysShowFriendlyTroopBanners` | `public static bool AlwaysShowFriendlyTroopBanners { get; set; }` |
| `ReportCasualtiesType` | `public static int ReportCasualtiesType { get; set; }` |
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

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Save
`public static SaveResult Save()`

**Purpose:** Saves `save` data.

### GetRealBattleSize
`public static int GetRealBattleSize()`

**Purpose:** Gets the current value of `real battle size`.

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**Purpose:** Gets the current value of `real battle size for siege`.

### GetReinforcementWaveCount
`public static int GetReinforcementWaveCount()`

**Purpose:** Gets the current value of `reinforcement wave count`.

### GetRealBattleSizeForSallyOut
`public static int GetRealBattleSizeForSallyOut()`

**Purpose:** Gets the current value of `real battle size for sally out`.

### IsValidValue
`public bool IsValidValue(int value)`

**Purpose:** Handles logic related to `is valid value`.

## Usage Example

```csharp
BannerlordConfig.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)