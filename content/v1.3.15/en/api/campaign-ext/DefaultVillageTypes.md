---
title: "DefaultVillageTypes"
description: "Auto-generated class reference for DefaultVillageTypes."
---
# DefaultVillageTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTypes`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/DefaultVillageTypes.cs`

## Overview

`DefaultVillageTypes` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConsumableRawItems` | `public IList<ItemObject> ConsumableRawItems { get; }` |
| `EuropeHorseRanch` | `public static VillageType EuropeHorseRanch { get; }` |
| `BattanianHorseRanch` | `public static VillageType BattanianHorseRanch { get; }` |
| `SturgianHorseRanch` | `public static VillageType SturgianHorseRanch { get; }` |
| `VlandianHorseRanch` | `public static VillageType VlandianHorseRanch { get; }` |
| `SteppeHorseRanch` | `public static VillageType SteppeHorseRanch { get; }` |
| `DesertHorseRanch` | `public static VillageType DesertHorseRanch { get; }` |
| `WheatFarm` | `public static VillageType WheatFarm { get; }` |
| `Lumberjack` | `public static VillageType Lumberjack { get; }` |
| `ClayMine` | `public static VillageType ClayMine { get; }` |
| `SaltMine` | `public static VillageType SaltMine { get; }` |
| `IronMine` | `public static VillageType IronMine { get; }` |
| `Fisherman` | `public static VillageType Fisherman { get; }` |
| `CattleRange` | `public static VillageType CattleRange { get; }` |
| `SheepFarm` | `public static VillageType SheepFarm { get; }` |
| `HogFarm` | `public static VillageType HogFarm { get; }` |
| `VineYard` | `public static VillageType VineYard { get; }` |
| `FlaxPlant` | `public static VillageType FlaxPlant { get; }` |
| `DateFarm` | `public static VillageType DateFarm { get; }` |
| `OliveTrees` | `public static VillageType OliveTrees { get; }` |
| `SilkPlant` | `public static VillageType SilkPlant { get; }` |
| `SilverMine` | `public static VillageType SilverMine { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultVillageTypes instance = ...;
```

## See Also

- [Area Index](../)