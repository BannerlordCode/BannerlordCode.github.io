<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadNavigationScope`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadNavigationScope

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GamepadNavigationScope` is a class in the `TaleWorlds.GauntletUI.GamepadNavigation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ScopeID` | `public string ScopeID { get; }` |
| `IsActiveScope` | `public bool IsActiveScope { get; }` |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren { get; set; }` |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements { get; set; }` |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements { get; set; }` |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize { get; set; }` |
| `HasCircularMovement` | `public bool HasCircularMovement { get; set; }` |
| `NavigatableWidgets` | `public ReadOnlyCollection<Widget> NavigatableWidgets { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `LatestNavigationElementIndex` | `public int LatestNavigationElementIndex { get; set; }` |
| `DoNotAutoGainNavigationOnInit` | `public bool DoNotAutoGainNavigationOnInit { get; set; }` |
| `ForceGainNavigationBasedOnDirection` | `public bool ForceGainNavigationBasedOnDirection { get; set; }` |
| `ForceGainNavigationOnClosestChild` | `public bool ForceGainNavigationOnClosestChild { get; set; }` |
| `ForceGainNavigationOnFirstChild` | `public bool ForceGainNavigationOnFirstChild { get; set; }` |
| `NavigateFromScopeEdges` | `public bool NavigateFromScopeEdges { get; set; }` |
| `UseDiscoveryAreaAsScopeEdges` | `public bool UseDiscoveryAreaAsScopeEdges { get; set; }` |
| `DoNotAutoNavigateAfterSort` | `public bool DoNotAutoNavigateAfterSort { get; set; }` |
| `FollowMobileTargets` | `public bool FollowMobileTargets { get; set; }` |
| `DoNotAutoCollectChildScopes` | `public bool DoNotAutoCollectChildScopes { get; set; }` |
| `IsDefaultNavigationScope` | `public bool IsDefaultNavigationScope { get; set; }` |


## Key Methods

### AddWidgetAtIndex

```csharp
public void AddWidgetAtIndex(Widget widget, int index)
```

### AddWidget

```csharp
public void AddWidget(Widget widget)
```

### RemoveWidget

```csharp
public void RemoveWidget(Widget widget)
```

### SetParentScope

```csharp
public void SetParentScope(GamepadNavigationScope scope)
```

### ClearNavigatableWidgets

```csharp
public void ClearNavigatableWidgets()
```

### Compare

```csharp
public int Compare(Widget x, Widget y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)