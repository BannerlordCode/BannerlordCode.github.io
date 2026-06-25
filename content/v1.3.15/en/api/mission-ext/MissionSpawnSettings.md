---
title: "MissionSpawnSettings"
description: "Auto-generated class reference for MissionSpawnSettings."
---
# MissionSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionSpawnSettings`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionSpawnSettings.cs`

## Overview

`MissionSpawnSettings` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GlobalReinforcementInterval` | `public float GlobalReinforcementInterval { get; set; }` |
| `DefenderAdvantageFactor` | `public float DefenderAdvantageFactor { get; set; }` |
| `MaximumBattleSideRatio` | `public float MaximumBattleSideRatio { get; set; }` |
| `InitialTroopsSpawnMethod` | `public MissionSpawnSettings.InitialSpawnMethod InitialTroopsSpawnMethod { get; }` |
| `ReinforcementTroopsTimingMethod` | `public MissionSpawnSettings.ReinforcementTimingMethod ReinforcementTroopsTimingMethod { get; }` |
| `ReinforcementTroopsSpawnMethod` | `public MissionSpawnSettings.ReinforcementSpawnMethod ReinforcementTroopsSpawnMethod { get; }` |
| `ReinforcementBatchPercentage` | `public float ReinforcementBatchPercentage { get; set; }` |
| `DesiredReinforcementPercentage` | `public float DesiredReinforcementPercentage { get; set; }` |
| `ReinforcementWavePercentage` | `public float ReinforcementWavePercentage { get; set; }` |
| `MaximumReinforcementWaveCount` | `public int MaximumReinforcementWaveCount { get; set; }` |
| `DefenderReinforcementBatchPercentage` | `public float DefenderReinforcementBatchPercentage { get; set; }` |
| `AttackerReinforcementBatchPercentage` | `public float AttackerReinforcementBatchPercentage { get; set; }` |

## Key Methods

### CreateDefaultSpawnSettings
`public static MissionSpawnSettings CreateDefaultSpawnSettings()`

**Purpose:** **Purpose:** Constructs a new default spawn settings entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionSpawnSettings.CreateDefaultSpawnSettings();
```

## Usage Example

```csharp
MissionSpawnSettings.CreateDefaultSpawnSettings();
```

## See Also

- [Area Index](../)