<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNavigationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapNavigationItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasAlert` | `public bool HasAlert { get; set; }` |
| `ItemId` | `public string ItemId { get; set; }` |
| `AlertText` | `public string AlertText { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `AlertTooltip` | `public BasicTooltipViewModel AlertTooltip { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshStates

```csharp
public void RefreshStates(bool forceRefresh = false)
```

### ExecuteOpen

```csharp
public void ExecuteOpen()
```

### ExecuteGoToLink

```csharp
public void ExecuteGoToLink()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)