---
title: "ClanFinanceTownItemVM"
description: "ClanFinanceTownItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance, inheriting ClanFinanceIncomeItemBaseVM; 10 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceTownItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceTownItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFinanceTownItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceTownItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceTownItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`, inheritance chain ClanFinanceTownItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceTownItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM/)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM/)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM/)
- [same namespace ClanFinanceWorkshopItemVM](../ClanFinanceWorkshopItemVM/)
