---
title: "Steward"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Steward`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Steward

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Steward`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Steward` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarriorsDiet` | `public static PerkObject WarriorsDiet { get; }` |
| `Frugal` | `public static PerkObject Frugal { get; }` |
| `SevenVeterans` | `public static PerkObject SevenVeterans { get; }` |
| `DrillSergant` | `public static PerkObject DrillSergant { get; }` |
| `Sweatshops` | `public static PerkObject Sweatshops { get; }` |
| `StiffUpperLip` | `public static PerkObject StiffUpperLip { get; }` |
| `PaidInPromise` | `public static PerkObject PaidInPromise { get; }` |
| `EfficientCampaigner` | `public static PerkObject EfficientCampaigner { get; }` |
| `GivingHands` | `public static PerkObject GivingHands { get; }` |
| `Logistician` | `public static PerkObject Logistician { get; }` |
| `Relocation` | `public static PerkObject Relocation { get; }` |
| `AidCorps` | `public static PerkObject AidCorps { get; }` |
| `Gourmet` | `public static PerkObject Gourmet { get; }` |
| `SoundReserves` | `public static PerkObject SoundReserves { get; }` |
| `ForcedLabor` | `public static PerkObject ForcedLabor { get; }` |
| `Contractors` | `public static PerkObject Contractors { get; }` |
| `ArenicosMules` | `public static PerkObject ArenicosMules { get; }` |
| `ArenicosHorses` | `public static PerkObject ArenicosHorses { get; }` |
| `MasterOfPlanning` | `public static PerkObject MasterOfPlanning { get; }` |
| `MasterOfWarcraft` | `public static PerkObject MasterOfWarcraft { get; }` |
| `PriceOfLoyalty` | `public static PerkObject PriceOfLoyalty { get; }` |

## Usage Example

```csharp
var example = new Steward();
```

## See Also

- [Complete Class Catalog](../catalog)