<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationScopeTargeter`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationScopeTargeter

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationScopeTargeter : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs`

## Overview

`NavigationScopeTargeter` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationScope` | `public GamepadNavigationScope NavigationScope { get; }` |
| `ScopeID` | `public string ScopeID { get; set; }` |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements { get; set; }` |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements { get; set; }` |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize { get; set; }` |
| `HasCircularMovement` | `public bool HasCircularMovement { get; set; }` |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren { get; set; }` |
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
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop { get; set; }` |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight { get; set; }` |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom { get; set; }` |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight { get; set; }` |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop { get; set; }` |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom { get; set; }` |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX { get; set; }` |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY { get; set; }` |
| `IsScopeEnabled` | `public bool IsScopeEnabled { get; set; }` |
| `IsScopeDisabled` | `public bool IsScopeDisabled { get; set; }` |
| `UpNavigationScope` | `public string UpNavigationScope { get; set; }` |
| `RightNavigationScope` | `public string RightNavigationScope { get; set; }` |
| `DownNavigationScope` | `public string DownNavigationScope { get; set; }` |
| `LeftNavigationScope` | `public string LeftNavigationScope { get; set; }` |
| `UpNavigationScopeTargeter` | `public NavigationScopeTargeter UpNavigationScopeTargeter { get; set; }` |
| `RightNavigationScopeTargeter` | `public NavigationScopeTargeter RightNavigationScopeTargeter { get; set; }` |
| `DownNavigationScopeTargeter` | `public NavigationScopeTargeter DownNavigationScopeTargeter { get; set; }` |
| `LeftNavigationScopeTargeter` | `public NavigationScopeTargeter LeftNavigationScopeTargeter { get; set; }` |
| `ScopeParent` | `public Widget ScopeParent { get; set; }` |

## Usage Example

```csharp
var example = new NavigationScopeTargeter();
```

## See Also

- [Complete Class Catalog](../catalog)