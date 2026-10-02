---
title: "ClanFiefsVM"
description: "ClanFiefsVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 24 exposed members (6 methods, 17 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFiefsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFiefsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFiefsVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanFiefsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 24 public/protected members: 6 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFiefsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanFiefsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 17/24, methods 6/24), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [same namespace ClanIncomeVM](../ClanIncomeVM/)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
