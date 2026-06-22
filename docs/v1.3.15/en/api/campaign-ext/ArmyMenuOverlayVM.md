<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyMenuOverlayVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ArmyMenuOverlayVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `CanManageArmy` | `public bool CanManageArmy { get; set; }` |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader { get; set; }` |
| `ManCountText` | `public string ManCountText { get; set; }` |
| `Food` | `public int Food { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint { get; set; }` |
| `FoodHint` | `public BasicTooltipViewModel FoodHint { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFrameTick

```csharp
public override void OnFrameTick(float dt)
```

### Refresh

```csharp
public sealed override void Refresh()
```

### ExecuteOpenArmyManagement

```csharp
public void ExecuteOpenArmyManagement()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)