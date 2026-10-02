---
title: "ClanFinanceCommonAreaItemVM"
description: "ClanFinanceCommonAreaItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ClanFinanceIncomeItemBaseVM; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs."
---
# ClanFinanceCommonAreaItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceCommonAreaItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs`

## Overview

ClanFinanceCommonAreaItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceCommonAreaItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance) the module directory; inheritance chain ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinanceCommonAreaItemVM` | `public ClanFinanceCommonAreaItemVM(Alley alley, Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | constructor |
| `PopulateActionList` | `protected override void PopulateActionList()` | method |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM)
