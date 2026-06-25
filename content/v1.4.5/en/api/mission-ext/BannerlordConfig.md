---
title: "BannerlordConfig"
description: "Auto-generated class reference for BannerlordConfig."
---
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordConfig.cs`

## Overview

`BannerlordConfig` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### IsValidValue
`public bool IsValidValue(int value)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid value state or condition.

```csharp
// Obtain an instance of BannerlordConfig from the subsystem API first
BannerlordConfig bannerlordConfig = ...;
var result = bannerlordConfig.IsValidValue(0);
```

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
BannerlordConfig.Initialize();
```

### Save
`public static SaveResult Save()`

**Purpose:** **Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Static call; no instance required
BannerlordConfig.Save();
```

### GetDamageToPlayerMultiplier
`public static float GetDamageToPlayerMultiplier()`

**Purpose:** **Purpose:** Reads and returns the damage to player multiplier value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetDamageToPlayerMultiplier();
```

### GetRealBattleSize
`public static int GetRealBattleSize()`

**Purpose:** **Purpose:** Reads and returns the real battle size value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetRealBattleSize();
```

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**Purpose:** **Purpose:** Reads and returns the real battle size for siege value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetRealBattleSizeForSiege();
```

### GetRealBattleSizeForNaval
`public static int GetRealBattleSizeForNaval()`

**Purpose:** **Purpose:** Reads and returns the real battle size for naval value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetRealBattleSizeForNaval();
```

### GetReinforcementWaveCount
`public static int GetReinforcementWaveCount()`

**Purpose:** **Purpose:** Reads and returns the reinforcement wave count value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetReinforcementWaveCount();
```

### GetRealBattleSizeForSallyOut
`public static int GetRealBattleSizeForSallyOut()`

**Purpose:** **Purpose:** Reads and returns the real battle size for sally out value held by the this instance.

```csharp
// Static call; no instance required
BannerlordConfig.GetRealBattleSizeForSallyOut();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerlordConfig bannerlordConfig = ...;
bannerlordConfig.IsValidValue(0);
```

## See Also

- [Area Index](../)