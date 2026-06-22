<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanSettlementItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanSettlementItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Governor` | `public HeroVM Governor { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `ProfitItemProperties` | `public MBBindingList<ProfitItemPropertyVM> ProfitItemProperties { get; set; }` |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit { get; set; }` |
| `FileName` | `public string FileName { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `NotablesText` | `public string NotablesText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `HasNotables` | `public bool HasNotables { get; set; }` |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `VillagesOwned` | `public MBBindingList<ClanSettlementItemVM> VillagesOwned { get; set; }` |
| `Notables` | `public MBBindingList<HeroVM> Notables { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `SendMembersHint` | `public HintViewModel SendMembersHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnSettlementSelection

```csharp
public void OnSettlementSelection()
```

### ExecuteLink

```csharp
public void ExecuteLink()
```

### ExecuteCloseTooltip

```csharp
public void ExecuteCloseTooltip()
```

### ExecuteOpenTooltip

```csharp
public void ExecuteOpenTooltip()
```

### ExecuteSendMembers

```csharp
public void ExecuteSendMembers()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)