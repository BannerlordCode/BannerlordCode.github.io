---
title: "KingdomDiplomacyItemVM"
description: "Auto-generated class reference for KingdomDiplomacyItemVM."
---
# KingdomDiplomacyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDiplomacyItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs`

## Overview

`KingdomDiplomacyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction1OwnedClans` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction1OwnedClans { get; set; }` |
| `Faction2OwnedClans` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OwnedClans { get; set; }` |
| `Faction2OtherWars` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OtherWars { get; set; }` |
| `Faction2OtherTradeAgreements` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OtherTradeAgreements { get; set; }` |
| `Faction2OtherAlliances` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OtherAlliances { get; set; }` |
| `Stats` | `public MBBindingList<KingdomWarComparableStatVM> Stats { get; set; }` |
| `Faction1Visual` | `public BannerImageIdentifierVM Faction1Visual { get; set; }` |
| `Faction2Visual` | `public BannerImageIdentifierVM Faction2Visual { get; set; }` |
| `Faction1Name` | `public string Faction1Name { get; set; }` |
| `Faction2Name` | `public string Faction2Name { get; set; }` |
| `Faction1TributeText` | `public string Faction1TributeText { get; set; }` |
| `Faction2TributeText` | `public string Faction2TributeText { get; set; }` |
| `Faction1TributeHint` | `public HintViewModel Faction1TributeHint { get; set; }` |
| `Faction2TributeHint` | `public HintViewModel Faction2TributeHint { get; set; }` |
| `IsFaction2OtherWarsVisible` | `public bool IsFaction2OtherWarsVisible { get; set; }` |
| `IsFaction2OtherTradeAgreementsVisible` | `public bool IsFaction2OtherTradeAgreementsVisible { get; set; }` |
| `IsFaction2OtherAlliancesVisible` | `public bool IsFaction2OtherAlliancesVisible { get; set; }` |
| `Faction1Leader` | `public HeroVM Faction1Leader { get; set; }` |
| `Faction2Leader` | `public HeroVM Faction2Leader { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KingdomDiplomacyItemVM instance = ...;
```

## See Also

- [Area Index](../)