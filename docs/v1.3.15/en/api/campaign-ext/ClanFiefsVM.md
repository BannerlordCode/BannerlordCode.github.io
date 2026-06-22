<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFiefsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFiefsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanFiefsVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GovernorActionText` | `public string GovernorActionText { get; set; }` |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief { get; set; }` |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint { get; set; }` |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TaxText` | `public string TaxText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |
| `TownsText` | `public string TownsText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `NoFiefsText` | `public string NoFiefsText { get; set; }` |
| `NoGovernorText` | `public string NoGovernorText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Settlements` | `public MBBindingList<ClanSettlementItemVM> Settlements { get; set; }` |
| `Castles` | `public MBBindingList<ClanSettlementItemVM> Castles { get; set; }` |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief { get; set; }` |
| `SortController` | `public ClanFiefsSortControllerVM SortController { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshAllLists

```csharp
public void RefreshAllLists()
```

### SelectFief

```csharp
public void SelectFief(Settlement settlement)
```

### ExecuteAssignGovernor

```csharp
public void ExecuteAssignGovernor()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)