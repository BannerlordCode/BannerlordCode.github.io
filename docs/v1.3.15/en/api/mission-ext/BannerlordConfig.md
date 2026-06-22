<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordConfig`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BannerlordConfig` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static void Initialize()
```

### Save

```csharp
public static SaveResult Save()
```

### GetDamageToPlayerMultiplier

```csharp
public static float GetDamageToPlayerMultiplier()
```

### GetRealBattleSize

```csharp
public static int GetRealBattleSize()
```

### GetRealBattleSizeForSiege

```csharp
public static int GetRealBattleSizeForSiege()
```

### GetRealBattleSizeForNaval

```csharp
public static int GetRealBattleSizeForNaval()
```

### GetReinforcementWaveCount

```csharp
public static int GetReinforcementWaveCount()
```

### GetRealBattleSizeForSallyOut

```csharp
public static int GetRealBattleSizeForSallyOut()
```

### IsValidValue

```csharp
public bool IsValidValue(int value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)