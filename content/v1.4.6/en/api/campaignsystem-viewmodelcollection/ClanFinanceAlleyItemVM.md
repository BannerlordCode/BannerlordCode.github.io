---
title: "ClanFinanceAlleyItemVM"
description: "ClanFinanceAlleyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ClanFinanceIncomeItemBaseVM; 10 exposed members (5 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs."
---
# ClanFinanceAlleyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceAlleyItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs`

## Overview

ClanFinanceAlleyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceAlleyItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceAlleyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance) the module directory; inheritance chain ClanFinanceAlleyItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM)
