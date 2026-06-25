---
title: "MusicParameters"
description: "Auto-generated class reference for MusicParameters."
---
# MusicParameters

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MusicParameters`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MusicParameters.cs`

## Overview

`MusicParameters` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Reads `from xml` from persistent storage or a stream.

```csharp
// Static call; no instance required
MusicParameters.LoadFromXml();
```

## Usage Example

```csharp
MusicParameters.LoadFromXml();
```

## See Also

- [Area Index](../)