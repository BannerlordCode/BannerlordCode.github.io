<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaContentPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaContentPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaContentPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `PreviousButtonLabel` | `public string PreviousButtonLabel { get; set; }` |
| `NextButtonLabel` | `public string NextButtonLabel { get; set; }` |
| `PreviousButtonHint` | `public HintViewModel PreviousButtonHint { get; set; }` |
| `NextButtonHint` | `public HintViewModel NextButtonHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### InitializeQuickNavigation

```csharp
public void InitializeQuickNavigation(EncyclopediaListVM list)
```

### ExecuteGoToNextItem

```csharp
public void ExecuteGoToNextItem()
```

### ExecuteGoToPreviousItem

```csharp
public void ExecuteGoToPreviousItem()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)