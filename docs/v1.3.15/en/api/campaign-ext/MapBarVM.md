<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapBarVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MapInfo` | `public MapInfoVM MapInfo { get; set; }` |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl { get; set; }` |
| `MapNavigation` | `public MapNavigationVM MapNavigation { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |
| `IsInInfoMode` | `public bool IsInInfoMode { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanGatherArmy` | `public bool CanGatherArmy { get; set; }` |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint { get; set; }` |
| `IsCameraCentered` | `public bool IsCameraCentered { get; set; }` |
| `CurrentScreen` | `public string CurrentScreen { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnRefresh

```csharp
public void OnRefresh()
```

### Tick

```csharp
public void Tick(float dt)
```

### ExecuteArmyManagement

```csharp
public void ExecuteArmyManagement()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)