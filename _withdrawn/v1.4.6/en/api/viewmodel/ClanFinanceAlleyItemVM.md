---
title: "ClanFinanceAlleyItemVM"
description: "ClanFinanceAlleyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance, inheriting ClanFinanceIncomeItemBaseVM; 10 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceAlleyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceAlleyItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFinanceAlleyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceAlleyItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceAlleyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`, inheritance chain ClanFinanceAlleyItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanFinanceAlleyItemVM` | `public ClanFinanceAlleyItemVM(Alley alley, Action<ClanCardSelectionInfo>openCardSelectionPopup, Action<ClanFinanceAlleyItemVM>onSelection, Action onRefresh) : base(null, onRefresh)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |
| `ExecuteManageAlley` | `public void ExecuteManageAlley()` | method |
| `ExecuteBeginHeroHint` | `public void ExecuteBeginHeroHint()` | method |
| `ExecuteEndHeroHint` | `public void ExecuteEndHeroHint()` | method |
| `ManageAlleyHint` | `public HintViewModel ManageAlleyHint` | property |
| `OwnerVisual` | `public CharacterImageIdentifierVM OwnerVisual` | property |
| `IncomeText` | `public string IncomeText` | property |
| `IncomeTextWithVisual` | `public string IncomeTextWithVisual` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM/)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM/)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM/)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM/)
