---
title: "BarterVM"
description: "BarterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Barter, inheriting ViewModel; 57 exposed members (20 methods, 36 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BarterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

BarterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BarterVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 57 public/protected members: 20 methods, 36 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`, inheritance chain BarterVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 36/57, methods 20/57), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BarterVM` | `public BarterVM(BarterData args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnInitialized` | `public void OnInitialized()` | method |
| `ExecuteTransferAllLeftFief` | `public void ExecuteTransferAllLeftFief()` | method |
| `ExecuteAutoBalance` | `public void ExecuteAutoBalance()` | method |
| `ExecuteTransferAllLeftItem` | `public void ExecuteTransferAllLeftItem()` | method |
| `ExecuteTransferAllLeftPrisoner` | `public void ExecuteTransferAllLeftPrisoner()` | method |
| `ExecuteTransferAllLeftOther` | `public void ExecuteTransferAllLeftOther()` | method |
| `ExecuteTransferAllRightFief` | `public void ExecuteTransferAllRightFief()` | method |
| `ExecuteTransferAllRightItem` | `public void ExecuteTransferAllRightItem()` | method |
| `ExecuteTransferAllRightPrisoner` | `public void ExecuteTransferAllRightPrisoner()` | method |
| `ExecuteTransferAllRightOther` | `public void ExecuteTransferAllRightOther()` | method |
| `ExecuteOffer` | `public void ExecuteOffer()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `OnTransferItem` | `public void OnTransferItem(Barterable barter, bool isTransferrable)` | method |
| `FiefLbl` | `public string FiefLbl` | property |
| `PrisonerLbl` | `public string PrisonerLbl` | property |
| `ItemLbl` | `public string ItemLbl` | property |
| `OtherLbl` | `public string OtherLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `ResetLbl` | `public string ResetLbl` | property |
| `OfferLbl` | `public string OfferLbl` | property |
| `DiplomaticLbl` | `public string DiplomaticLbl` | property |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint` | property |
| `LeftHero` | `public HeroVM LeftHero` | property |
| `RightHero` | `public HeroVM RightHero` | property |
| `IsOfferDisabled` | `public bool IsOfferDisabled` | property |
| `LeftMaxGold` | `public int LeftMaxGold` | property |
| `RightMaxGold` | `public int RightMaxGold` | property |
| `LeftNameLbl` | `public string LeftNameLbl` | property |
| `RightNameLbl` | `public string RightNameLbl` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftFiefList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightFiefList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftPrisonerList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightPrisonerList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftItemList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightItemList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftOtherList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightOtherList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftDiplomaticList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightDiplomaticList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftOfferList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightOfferList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>RightGoldList` | property |
| `MBBindingList` | `public MBBindingList<BarterItemVM>LeftGoldList` | property |
| `InitializationIsOver` | `public bool InitializationIsOver` | property |
| `ResultBarOtherPercentage` | `public int ResultBarOtherPercentage` | property |
| `ResultBarOffererPercentage` | `public int ResultBarOffererPercentage` | property |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `InitializeStaticContent` | `public void InitializeStaticContent()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BarterItemVM](../BarterItemVM/)
