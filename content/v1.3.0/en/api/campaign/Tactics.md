---
title: "Tactics"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Tactics`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Tactics

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Tactics`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Tactics` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TightFormations` | `public static PerkObject TightFormations { get; }` |
| `LooseFormations` | `public static PerkObject LooseFormations { get; }` |
| `ExtendedSkirmish` | `public static PerkObject ExtendedSkirmish { get; }` |
| `DecisiveBattle` | `public static PerkObject DecisiveBattle { get; }` |
| `SmallUnitTactics` | `public static PerkObject SmallUnitTactics { get; }` |
| `HordeLeader` | `public static PerkObject HordeLeader { get; }` |
| `LawKeeper` | `public static PerkObject LawKeeper { get; }` |
| `Coaching` | `public static PerkObject Coaching { get; }` |
| `SwiftRegroup` | `public static PerkObject SwiftRegroup { get; }` |
| `Improviser` | `public static PerkObject Improviser { get; }` |
| `OnTheMarch` | `public static PerkObject OnTheMarch { get; }` |
| `CallToArms` | `public static PerkObject CallToArms { get; }` |
| `PickThemOfTheWalls` | `public static PerkObject PickThemOfTheWalls { get; }` |
| `MakeThemPay` | `public static PerkObject MakeThemPay { get; }` |
| `EliteReserves` | `public static PerkObject EliteReserves { get; }` |
| `Encirclement` | `public static PerkObject Encirclement { get; }` |
| `PreBattleManeuvers` | `public static PerkObject PreBattleManeuvers { get; }` |
| `Besieged` | `public static PerkObject Besieged { get; }` |
| `Counteroffensive` | `public static PerkObject Counteroffensive { get; }` |
| `Gensdarmes` | `public static PerkObject Gensdarmes { get; }` |
| `TacticalMastery` | `public static PerkObject TacticalMastery { get; }` |

## Usage Example

```csharp
var example = new Tactics();
```

## See Also

- [Complete Class Catalog](../catalog)