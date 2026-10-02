---
title: "ClanFinanceCommonAreaItemVM"
description: "ClanFinanceCommonAreaItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance, inheriting ClanFinanceIncomeItemBaseVM; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceCommonAreaItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceCommonAreaItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFinanceCommonAreaItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceCommonAreaItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`, inheritance chain ClanFinanceCommonAreaItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceCommonAreaItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanFinanceCommonAreaItemVM` | `public ClanFinanceCommonAreaItemVM(Alley alley, Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh) : base(onSelection, onRefresh)` | constructor |
| `PopulateActionList` | `protected override void PopulateActionList()` | method |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM/)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM/)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM/)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM/)
