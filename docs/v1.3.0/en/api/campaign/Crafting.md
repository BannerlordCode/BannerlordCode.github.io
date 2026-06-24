<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Crafting`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Crafting

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Crafting`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Crafting` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IronMaker` | `public static PerkObject IronMaker { get; }` |
| `CharcoalMaker` | `public static PerkObject CharcoalMaker { get; }` |
| `SteelMaker` | `public static PerkObject SteelMaker { get; }` |
| `SteelMaker2` | `public static PerkObject SteelMaker2 { get; }` |
| `SteelMaker3` | `public static PerkObject SteelMaker3 { get; }` |
| `CuriousSmelter` | `public static PerkObject CuriousSmelter { get; }` |
| `CuriousSmith` | `public static PerkObject CuriousSmith { get; }` |
| `PracticalRefiner` | `public static PerkObject PracticalRefiner { get; }` |
| `PracticalSmelter` | `public static PerkObject PracticalSmelter { get; }` |
| `PracticalSmith` | `public static PerkObject PracticalSmith { get; }` |
| `ArtisanSmith` | `public static PerkObject ArtisanSmith { get; }` |
| `ExperiencedSmith` | `public static PerkObject ExperiencedSmith { get; }` |
| `MasterSmith` | `public static PerkObject MasterSmith { get; }` |
| `LegendarySmith` | `public static PerkObject LegendarySmith { get; }` |
| `VigorousSmith` | `public static PerkObject VigorousSmith { get; }` |
| `StrongSmith` | `public static PerkObject StrongSmith { get; }` |
| `EnduringSmith` | `public static PerkObject EnduringSmith { get; }` |
| `WeaponMasterSmith` | `public static PerkObject WeaponMasterSmith { get; }` |
| `SharpenedEdge` | `public static PerkObject SharpenedEdge { get; }` |
| `SharpenedTip` | `public static PerkObject SharpenedTip { get; }` |

## Usage Example

```csharp
var example = new Crafting();
```

## See Also

- [Complete Class Catalog](../catalog)