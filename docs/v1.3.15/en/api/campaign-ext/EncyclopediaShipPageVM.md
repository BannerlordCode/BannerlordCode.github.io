<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaShipPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaShipPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaShipPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `AvailableUpgradesText` | `public string AvailableUpgradesText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `PrefabId` | `public string PrefabId { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `SailType` | `public string SailType { get; set; }` |
| `SailTypeStat` | `public EncyclopediaShipStatVM SailTypeStat { get; set; }` |
| `StatList` | `public MBBindingList<EncyclopediaShipStatVM> StatList { get; set; }` |
| `AllShipSlots` | `public MBBindingList<EncyclopediaShipSlotVM> AllShipSlots { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)