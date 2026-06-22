<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanSupporterGroupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSupporterGroupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanSupporterGroupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus { get; }` |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Supporters` | `public MBBindingList<ClanSupporterItemVM> Supporters { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddSupporter

```csharp
public void AddSupporter(Hero hero)
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)