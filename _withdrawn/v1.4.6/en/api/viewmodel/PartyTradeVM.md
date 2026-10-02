---
title: "PartyTradeVM"
description: "PartyTradeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting ViewModel; 22 exposed members (8 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTradeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyTradeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartyTradeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyTradeVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 8 methods, 12 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTradeVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain PartyTradeVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/22, methods 8/22), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RemoveZeroCounts;` | `public static event Action RemoveZeroCounts;` | event |
| `PartyTradeVM` | `public PartyTradeVM(PartyScreenLogic partyScreenLogic, TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool isTransfarable, bool isPrisoner, Action<int, bool>onApplyTransaction)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateTroopData` | `public void UpdateTroopData(TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool forceUpdate = true)` | method |
| `FindTroopFromSide` | `public TroopRosterElement? FindTroopFromSide(CharacterObject character, PartyScreenLogic.PartyRosterSide side, bool isPrisoner)` | method |
| `ExecuteIncreasePlayerStock` | `public void ExecuteIncreasePlayerStock()` | method |
| `ExecuteIncreaseOtherStock` | `public void ExecuteIncreaseOtherStock()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteApplyTransaction` | `public void ExecuteApplyTransaction()` | method |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | method |
| `IsTransfarable` | `public bool IsTransfarable` | property |
| `ThisStockLbl` | `public string ThisStockLbl` | property |
| `TotalStockLbl` | `public string TotalStockLbl` | property |
| `ThisStock` | `public int ThisStock` | property |
| `InitialThisStock` | `public int InitialThisStock` | property |
| `OtherStock` | `public int OtherStock` | property |
| `InitialOtherStock` | `public int InitialOtherStock` | property |
| `TotalStock` | `public int TotalStock` | property |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable` | property |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable` | property |
| `TakeHint` | `public HintViewModel TakeHint` | property |
| `GiveHint` | `public HintViewModel GiveHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyCharacterVM](../PartyCharacterVM/)
- [same namespace PartyCompositionVM](../PartyCompositionVM/)
- [same namespace PartySortControllerVM](../PartySortControllerVM/)
- [same namespace PartyVM](../PartyVM/)
