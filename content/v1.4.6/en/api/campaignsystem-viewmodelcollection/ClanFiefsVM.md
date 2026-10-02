---
title: "ClanFiefsVM"
description: "ClanFiefsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (6 methods, 17 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs."
---
# ClanFiefsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFiefsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`

## Overview

ClanFiefsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanFiefsVM → ViewModel. It exposes 24 public/protected members: 6 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFiefsVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanFiefsVM → ViewModel. The surface is property-led (properties 17/24, methods 6/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFiefsVM` | `public ClanFiefsVM(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | constructor |
| `CreateSettlementItem` | `protected virtual ClanSettlementItemVM CreateSettlementItem(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshAllLists` | `public void RefreshAllLists()` | method |
| `SelectFief` | `public void SelectFief(Settlement settlement)` | method |
| `ExecuteAssignGovernor` | `public void ExecuteAssignGovernor()` | method |
| `GovernorActionText` | `public string GovernorActionText` | property |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief` | property |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint` | property |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected` | property |
| `NameText` | `public string NameText` | property |
| `TaxText` | `public string TaxText` | property |
| `GovernorText` | `public string GovernorText` | property |
| `ProfitText` | `public string ProfitText` | property |
| `TownsText` | `public string TownsText` | property |
| `CastlesText` | `public string CastlesText` | property |
| `NoFiefsText` | `public string NoFiefsText` | property |
| `NoGovernorText` | `public string NoGovernorText` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>Settlements` | property |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>Castles` | property |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief` | property |
| `SortController` | `public ClanFiefsSortControllerVM SortController` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanIncomeVM](../ClanIncomeVM)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM)
