---
title: "GamepadNavigationScope"
description: "Auto-generated class reference for GamepadNavigationScope."
---
# GamepadNavigationScope

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationScope`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GamepadNavigation/GamepadNavigationScope.cs`

## Overview

`GamepadNavigationScope` lives in `TaleWorlds.GauntletUI.GamepadNavigation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GamepadNavigation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight { get; set; }` |
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop { get; set; }` |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom { get; set; }` |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight { get; set; }` |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop { get; set; }` |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom { get; set; }` |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX { get; set; }` |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `UpNavigationScopeID` | `public string UpNavigationScopeID { get; set; }` |
| `RightNavigationScopeID` | `public string RightNavigationScopeID { get; set; }` |
| `DownNavigationScopeID` | `public string DownNavigationScopeID { get; set; }` |
| `LeftNavigationScopeID` | `public string LeftNavigationScopeID { get; set; }` |
| `UpNavigationScope` | `public GamepadNavigationScope UpNavigationScope { get; set; }` |
| `RightNavigationScope` | `public GamepadNavigationScope RightNavigationScope { get; set; }` |
| `DownNavigationScope` | `public GamepadNavigationScope DownNavigationScope { get; set; }` |
| `LeftNavigationScope` | `public GamepadNavigationScope LeftNavigationScope { get; set; }` |

## Key Methods

### Compare
`public int Compare(Widget x, Widget y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
var result = gamepadNavigationScope.Compare(x, y);
```

### AddWidgetAtIndex
`public void AddWidgetAtIndex(Widget widget, int index)`

**Purpose:** **Purpose:** Adds widget at index to the current collection or state.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.AddWidgetAtIndex(widget, 0);
```

### AddWidget
`public void AddWidget(Widget widget)`

**Purpose:** **Purpose:** Adds widget to the current collection or state.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.AddWidget(widget);
```

### RemoveWidget
`public void RemoveWidget(Widget widget)`

**Purpose:** **Purpose:** Removes widget from the current collection or state.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.RemoveWidget(widget);
```

### SetParentScope
`public void SetParentScope(GamepadNavigationScope scope)`

**Purpose:** **Purpose:** Assigns a new value to parent scope and updates the object's internal state.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.SetParentScope(scope);
```

### ClearNavigatableWidgets
`public void ClearNavigatableWidgets()`

**Purpose:** **Purpose:** Removes all navigatable widgets from the this instance.

```csharp
// Obtain an instance of GamepadNavigationScope from the subsystem API first
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.ClearNavigatableWidgets();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.Compare(x, y);
```

## See Also

- [Area Index](../)