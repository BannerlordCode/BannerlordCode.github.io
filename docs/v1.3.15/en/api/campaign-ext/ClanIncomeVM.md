<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanIncomeVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanIncomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanIncomeVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CurrentSelectedAlley` | `public ClanFinanceAlleyItemVM CurrentSelectedAlley { get; set; }` |
| `CurrentSelectedIncome` | `public ClanFinanceWorkshopItemVM CurrentSelectedIncome { get; set; }` |
| `CurrentSelectedSupporterGroup` | `public ClanSupporterGroupVM CurrentSelectedSupporterGroup { get; set; }` |
| `IsAnyValidAlleySelected` | `public bool IsAnyValidAlleySelected { get; set; }` |
| `IsAnyValidIncomeSelected` | `public bool IsAnyValidIncomeSelected { get; set; }` |
| `IsAnyValidSupporterSelected` | `public bool IsAnyValidSupporterSelected { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `WorkshopText` | `public string WorkshopText { get; set; }` |
| `SupportersText` | `public string SupportersText { get; set; }` |
| `AlleysText` | `public string AlleysText { get; set; }` |
| `NoAdditionalIncomesText` | `public string NoAdditionalIncomesText { get; set; }` |
| `Incomes` | `public MBBindingList<ClanFinanceWorkshopItemVM> Incomes { get; set; }` |
| `SupporterGroups` | `public MBBindingList<ClanSupporterGroupVM> SupporterGroups { get; set; }` |
| `Alleys` | `public MBBindingList<ClanFinanceAlleyItemVM> Alleys { get; set; }` |
| `SortController` | `public ClanIncomeSortControllerVM SortController { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshList

```csharp
public void RefreshList()
```

### SelectWorkshop

```csharp
public void SelectWorkshop(Workshop workshop)
```

### SelectAlley

```csharp
public void SelectAlley(Alley alley)
```

### RefreshTotalIncome

```csharp
public void RefreshTotalIncome()
```

### OnRefresh

```csharp
public void OnRefresh()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)