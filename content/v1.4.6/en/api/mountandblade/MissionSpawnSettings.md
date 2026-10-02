---
title: "MissionSpawnSettings"
description: "MissionSpawnSettings: a public struct in TaleWorlds.MountAndBlade; 27 exposed members (1 methods, 15 properties, 7 fields). Source: TaleWorlds.MountAndBlade/MissionSpawnSettings.cs."
---
# MissionSpawnSettings

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionSpawnSettings`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnSettings.cs`

## Overview

MissionSpawnSettings lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionSpawnSettings.cs. It is a public struct; the inheritance chain is MissionSpawnSettings. It exposes 27 public/protected members: 1 methods, 15 properties, 7 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSpawnSettings is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionSpawnSettings. The surface is property-led (properties 15/27, methods 1/27), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionSpawnSettings.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GlobalReinforcementInterval` | `public float GlobalReinforcementInterval` | property |
| `DefenderAdvantageFactor` | `public float DefenderAdvantageFactor` | property |
| `MaximumBattleSideRatio` | `public float MaximumBattleSideRatio` | property |
| `InitialTroopsSpawnMethod` | `public MissionSpawnSettings.InitialSpawnMethod InitialTroopsSpawnMethod` | property |
| `ReinforcementTroopsTimingMethod` | `public MissionSpawnSettings.ReinforcementTimingMethod ReinforcementTroopsTimingMethod` | property |
| `ReinforcementTroopsSpawnMethod` | `public MissionSpawnSettings.ReinforcementSpawnMethod ReinforcementTroopsSpawnMethod` | property |
| `ReinforcementBatchPercentage` | `public float ReinforcementBatchPercentage` | property |
| `DesiredReinforcementPercentage` | `public float DesiredReinforcementPercentage` | property |
| `ReinforcementWavePercentage` | `public float ReinforcementWavePercentage` | property |
| `MaximumReinforcementWaveCount` | `public int MaximumReinforcementWaveCount` | property |
| `DefenderReinforcementBatchPercentage` | `public float DefenderReinforcementBatchPercentage` | property |
| `AttackerReinforcementBatchPercentage` | `public float AttackerReinforcementBatchPercentage` | property |
| `MissionSpawnSettings` | `public MissionSpawnSettings(MissionSpawnSettings.InitialSpawnMethod initialTroopsSpawnMethod, MissionSpawnSettings.ReinforcementTimingMethod reinforcementTimingMethod, MissionSpawnSettings.ReinforcementSpawnMethod reinforcementTroopsSpawnMethod, float globalReinforcementInterval = 0f, float reinforcementBatchPercentage = 0f, float desiredReinforcementPercentage = 0f, float reinforcementWavePercentage = 0f, int maximumReinforcementWaveCount = 0, float defenderReinforcementBatchPercentage = 0f, float attackerReinforcementBatchPercentage = 0f, float defenderAdvantageFactor = 1f, float maximumBattleSizeRatio = 0.75f)` | constructor |
| `CreateDefaultSpawnSettings` | `public static MissionSpawnSettings CreateDefaultSpawnSettings()` | method |
| `MinimumReinforcementInterval` | `public const float MinimumReinforcementInterval` | field |
| `MinimumDefenderAdvantageFactor` | `public const float MinimumDefenderAdvantageFactor` | field |
| `MaximumDefenderAdvantageFactor` | `public const float MaximumDefenderAdvantageFactor` | field |
| `MinimumBattleSizeRatioLimit` | `public const float MinimumBattleSizeRatioLimit` | field |
| `MaximumBattleSizeRatioLimit` | `public const float MaximumBattleSizeRatioLimit` | field |
| `DefaultMaximumBattleSizeRatio` | `public const float DefaultMaximumBattleSizeRatio` | field |
| `DefaultDefenderAdvantageFactor` | `public const float DefaultDefenderAdvantageFactor` | field |
| `ReinforcementSpawnMethod` | `public enum ReinforcementSpawnMethod` | property |
| `ReinforcementTimingMethod` | `public enum ReinforcementTimingMethod` | property |
| `InitialSpawnMethod` | `public enum InitialSpawnMethod` | property |
| `ReinforcementSpawnMethod` | `public enum ReinforcementSpawnMethod` | nested type |
| `ReinforcementTimingMethod` | `public enum ReinforcementTimingMethod` | nested type |
| `InitialSpawnMethod` | `public enum InitialSpawnMethod` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
