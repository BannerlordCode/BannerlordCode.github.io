<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Scouting`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Scouting

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Scouting`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Scouting` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DayTraveler` | `public static PerkObject DayTraveler { get; }` |
| `Pathfinder` | `public static PerkObject Pathfinder { get; }` |
| `NightRunner` | `public static PerkObject NightRunner { get; }` |
| `WaterDiviner` | `public static PerkObject WaterDiviner { get; }` |
| `ForestKin` | `public static PerkObject ForestKin { get; }` |
| `DesertBorn` | `public static PerkObject DesertBorn { get; }` |
| `ForcedMarch` | `public static PerkObject ForcedMarch { get; }` |
| `Unburdened` | `public static PerkObject Unburdened { get; }` |
| `Tracker` | `public static PerkObject Tracker { get; }` |
| `Ranger` | `public static PerkObject Ranger { get; }` |
| `MountedScouts` | `public static PerkObject MountedScouts { get; }` |
| `Patrols` | `public static PerkObject Patrols { get; }` |
| `Foragers` | `public static PerkObject Foragers { get; }` |
| `BeastWhisperer` | `public static PerkObject BeastWhisperer { get; }` |
| `VillageNetwork` | `public static PerkObject VillageNetwork { get; }` |
| `RumourNetwork` | `public static PerkObject RumourNetwork { get; }` |
| `VantagePoint` | `public static PerkObject VantagePoint { get; }` |
| `KeenSight` | `public static PerkObject KeenSight { get; }` |
| `Vanguard` | `public static PerkObject Vanguard { get; }` |
| `Rearguard` | `public static PerkObject Rearguard { get; }` |
| `UncannyInsight` | `public static PerkObject UncannyInsight { get; }` |

## Usage Example

```csharp
var example = new Scouting();
```

## See Also

- [Complete Class Catalog](../catalog)