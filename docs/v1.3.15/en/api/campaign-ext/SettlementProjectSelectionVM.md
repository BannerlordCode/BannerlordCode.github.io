<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProjectSelectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProjectSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SettlementProjectSelectionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LocalDevelopmentList` | `public List<Building> LocalDevelopmentList { get; }` |
| `ProjectsText` | `public string ProjectsText { get; set; }` |
| `QueueText` | `public string QueueText { get; set; }` |
| `DailyDefaultsText` | `public string DailyDefaultsText { get; set; }` |
| `DailyDefaultsExplanationText` | `public string DailyDefaultsExplanationText { get; set; }` |
| `CurrentSelectedProject` | `public SettlementProjectVM CurrentSelectedProject { get; set; }` |
| `CurrentDailyDefault` | `public SettlementDailyProjectVM CurrentDailyDefault { get; set; }` |
| `AvailableProjects` | `public MBBindingList<SettlementBuildingProjectVM> AvailableProjects { get; set; }` |
| `CurrentDevelopmentQueue` | `public MBBindingList<SettlementBuildingProjectVM> CurrentDevelopmentQueue { get; set; }` |
| `DailyDefaultList` | `public MBBindingList<SettlementDailyProjectVM> DailyDefaultList { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteChangeQueueOrder

```csharp
public void ExecuteChangeQueueOrder(SettlementBuildingProjectVM project, int index, string targetTag)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)