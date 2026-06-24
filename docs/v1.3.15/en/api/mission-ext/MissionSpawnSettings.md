<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSpawnSettings`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionSpawnSettings`
**Area:** mission-ext

## Overview

`MissionSpawnSettings` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Creates a new `default spawn settings` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionSpawnSettings.CreateDefaultSpawnSettings();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
