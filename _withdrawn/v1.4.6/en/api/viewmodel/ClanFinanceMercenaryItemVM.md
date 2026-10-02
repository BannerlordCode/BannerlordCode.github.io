---
title: "ClanFinanceMercenaryItemVM"
description: "ClanFinanceMercenaryItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance, inheriting ClanFinanceIncomeItemBaseVM; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceMercenaryItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceMercenaryItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFinanceMercenaryItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceMercenaryItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceMercenaryItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`, inheritance chain ClanFinanceMercenaryItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceMercenaryItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Clan` | `public Clan Clan` | property |
| `ClanFinanceMercenaryItemVM` | `public ClanFinanceMercenaryItemVM(Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | constructor |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |
| `PopulateActionList` | `protected override void PopulateActionList()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM/)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM/)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM/)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM/)
