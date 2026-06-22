<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartiesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanPartiesVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TotalExpense` | `public int TotalExpense { get; }` |
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint { get; set; }` |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CaravansText` | `public string CaravansText { get; set; }` |
| `GarrisonsText` | `public string GarrisonsText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CreateNewPartyText` | `public string CreateNewPartyText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanCreateNewParty` | `public bool CanCreateNewParty { get; set; }` |
| `Parties` | `public MBBindingList<ClanPartyItemVM> Parties { get; set; }` |
| `Caravans` | `public MBBindingList<ClanPartyItemVM> Caravans { get; set; }` |
| `Garrisons` | `public MBBindingList<ClanPartyItemVM> Garrisons { get; set; }` |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty { get; set; }` |
| `SortController` | `public ClanPartiesSortControllerVM SortController { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshTotalExpense

```csharp
public void RefreshTotalExpense()
```

### RefreshPartiesList

```csharp
public void RefreshPartiesList()
```

### ExecuteCreateNewParty

```csharp
public void ExecuteCreateNewParty()
```

### SelectParty

```csharp
public void SelectParty(PartyBase party)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnShowNewPartyPopup

```csharp
public void OnShowNewPartyPopup()
```

### OnShowChangeLeaderPopup

```csharp
public void OnShowChangeLeaderPopup()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)