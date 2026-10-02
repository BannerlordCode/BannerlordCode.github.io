---
title: "ClanFinanceTownItemVM"
description: "ClanFinanceTownItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ClanFinanceIncomeItemBaseVM; 10 exposed members (2 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs."
---
# ClanFinanceTownItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceTownItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs`

## Overview

ClanFinanceTownItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceTownItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceTownItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance) the module directory; inheritance chain ClanFinanceTownItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | property |
| `ClanFinanceTownItemVM` | `public ClanFinanceTownItemVM(Settlement settlement, TaxType taxType, Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | constructor |
| `PopulateActionList` | `protected override void PopulateActionList()` | method |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |
| `IsUnderSiege` | `public bool IsUnderSiege` | property |
| `IsUnderRebellion` | `public bool IsUnderRebellion` | property |
| `IsUnderSiegeHint` | `public HintViewModel IsUnderSiegeHint` | property |
| `IsUnderRebellionHint` | `public HintViewModel IsUnderRebellionHint` | property |
| `HasGovernor` | `public bool HasGovernor` | property |
| `GovernorHint` | `public HintViewModel GovernorHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM)
