---
title: "PartyCompositionVM"
description: "PartyCompositionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting ViewModel; 12 exposed members (3 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyCompositionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyCompositionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartyCompositionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyCompositionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 3 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyCompositionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain PartyCompositionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/12, methods 3/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyCompositionVM` | `public PartyCompositionVM()` | constructor |
| `OnTroopRemoved` | `public void OnTroopRemoved(FormationClass formationClass, int count)` | method |
| `OnTroopAdded` | `public void OnTroopAdded(FormationClass formationClass, int count)` | method |
| `RefreshCounts` | `public void RefreshCounts(MBBindingList<PartyCharacterVM>list)` | method |
| `InfantryCount` | `public int InfantryCount` | property |
| `RangedCount` | `public int RangedCount` | property |
| `CavalryCount` | `public int CavalryCount` | property |
| `HorseArcherCount` | `public int HorseArcherCount` | property |
| `InfantryHint` | `public HintViewModel InfantryHint` | property |
| `RangedHint` | `public HintViewModel RangedHint` | property |
| `CavalryHint` | `public HintViewModel CavalryHint` | property |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyCharacterVM](../PartyCharacterVM/)
- [same namespace PartySortControllerVM](../PartySortControllerVM/)
- [same namespace PartyTradeVM](../PartyTradeVM/)
- [same namespace PartyVM](../PartyVM/)
