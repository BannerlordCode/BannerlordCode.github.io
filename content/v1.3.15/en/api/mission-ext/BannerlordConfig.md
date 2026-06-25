---
title: "BannerlordConfig"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordConfig`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Area:** mission-ext

## Overview

`BannerlordConfig` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
| `CivilianAgentCount` | `public static float CivilianAgentCount { get; set; }` |
| `FirstPersonFov` | `public static float FirstPersonFov { get; set; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Save
`public static SaveResult Save()`

**Purpose:** Saves `save` data.

### GetDamageToPlayerMultiplier
`public static float GetDamageToPlayerMultiplier()`

**Purpose:** Gets the current value of `damage to player multiplier`.

### GetRealBattleSize
`public static int GetRealBattleSize()`

**Purpose:** Gets the current value of `real battle size`.

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**Purpose:** Gets the current value of `real battle size for siege`.

### GetRealBattleSizeForNaval
`public static int GetRealBattleSizeForNaval()`

**Purpose:** Gets the current value of `real battle size for naval`.

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
// Prepare the required context, then call the static entry point directly
BannerlordConfig.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
