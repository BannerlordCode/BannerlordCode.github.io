<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTimeControlVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTimeControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapTimeControlVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsInBattleSimulation` | `public bool IsInBattleSimulation { get; set; }` |
| `IsInRecruitment` | `public bool IsInRecruitment { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; set; }` |
| `IsInTownManagement` | `public bool IsInTownManagement { get; set; }` |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage { get; set; }` |
| `IsInMap` | `public bool IsInMap { get; set; }` |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions { get; set; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; set; }` |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive { get; set; }` |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive { get; set; }` |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive { get; set; }` |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive { get; set; }` |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled { get; set; }` |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint { get; set; }` |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap { get; set; }` |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled { get; set; }` |
| `Time` | `public double Time { get; set; }` |
| `PausedText` | `public string PausedText { get; set; }` |
| `Date` | `public string Date { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Tick

```csharp
public void Tick()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteTimeControlChange

```csharp
public void ExecuteTimeControlChange(int selectedTimeSpeed)
```

### ExecuteResetCamera

```csharp
public void ExecuteResetCamera()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)