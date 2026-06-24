<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MusicParameters`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MusicParameters

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MusicParameters`
**Area:** mission-ext

## Overview

`MusicParameters` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SmallBattleTreshold` | `public static int SmallBattleTreshold { get; }` |
| `MediumBattleTreshold` | `public static int MediumBattleTreshold { get; }` |
| `LargeBattleTreshold` | `public static int LargeBattleTreshold { get; }` |
| `SmallBattleDistanceTreshold` | `public static float SmallBattleDistanceTreshold { get; }` |
| `MediumBattleDistanceTreshold` | `public static float MediumBattleDistanceTreshold { get; }` |
| `LargeBattleDistanceTreshold` | `public static float LargeBattleDistanceTreshold { get; }` |
| `MaxBattleDistanceTreshold` | `public static float MaxBattleDistanceTreshold { get; }` |
| `MinIntensity` | `public static float MinIntensity { get; }` |
| `DefaultStartIntensity` | `public static float DefaultStartIntensity { get; }` |
| `PlayerChargeEffectMultiplierOnIntensity` | `public static float PlayerChargeEffectMultiplierOnIntensity { get; }` |
| `BattleSizeEffectOnStartIntensity` | `public static float BattleSizeEffectOnStartIntensity { get; }` |
| `RandomEffectMultiplierOnStartIntensity` | `public static float RandomEffectMultiplierOnStartIntensity { get; }` |
| `FriendlyTroopDeadEffectOnIntensity` | `public static float FriendlyTroopDeadEffectOnIntensity { get; }` |
| `EnemyTroopDeadEffectOnIntensity` | `public static float EnemyTroopDeadEffectOnIntensity { get; }` |
| `PlayerTroopDeadEffectMultiplierOnIntensity` | `public static float PlayerTroopDeadEffectMultiplierOnIntensity { get; }` |
| `BattleRatioTresholdOnIntensity` | `public static float BattleRatioTresholdOnIntensity { get; }` |
| `BattleTurnsOneSideCooldown` | `public static float BattleTurnsOneSideCooldown { get; }` |
| `CampaignDarkModeThreshold` | `public static float CampaignDarkModeThreshold { get; }` |

## Key Methods

### LoadFromXml
`public static void LoadFromXml()`

**Purpose:** Loads `from xml` data.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MusicParameters.LoadFromXml();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
