<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Riding`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Riding

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Riding`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Riding` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FullSpeed` | `public static PerkObject FullSpeed { get; }` |
| `NimbleSteed` | `public static PerkObject NimbleSteed { get; }` |
| `WellStraped` | `public static PerkObject WellStraped { get; }` |
| `Veterinary` | `public static PerkObject Veterinary { get; }` |
| `NomadicTraditions` | `public static PerkObject NomadicTraditions { get; }` |
| `DeeperSacks` | `public static PerkObject DeeperSacks { get; }` |
| `Sagittarius` | `public static PerkObject Sagittarius { get; }` |
| `SweepingWind` | `public static PerkObject SweepingWind { get; }` |
| `ReliefForce` | `public static PerkObject ReliefForce { get; }` |
| `MountedWarrior` | `public static PerkObject MountedWarrior { get; }` |
| `HorseArcher` | `public static PerkObject HorseArcher { get; }` |
| `Shepherd` | `public static PerkObject Shepherd { get; }` |
| `Breeder` | `public static PerkObject Breeder { get; }` |
| `ThunderousCharge` | `public static PerkObject ThunderousCharge { get; }` |
| `AnnoyingBuzz` | `public static PerkObject AnnoyingBuzz { get; }` |
| `MountedPatrols` | `public static PerkObject MountedPatrols { get; }` |
| `CavalryTactics` | `public static PerkObject CavalryTactics { get; }` |
| `DauntlessSteed` | `public static PerkObject DauntlessSteed { get; }` |
| `ToughSteed` | `public static PerkObject ToughSteed { get; }` |
| `TheWayOfTheSaddle` | `public static PerkObject TheWayOfTheSaddle { get; }` |

## Usage Example

```csharp
var example = new Riding();
```

## See Also

- [Complete Class Catalog](../catalog)