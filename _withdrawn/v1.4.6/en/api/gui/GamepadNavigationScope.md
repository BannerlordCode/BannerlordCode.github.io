---
title: "GamepadNavigationScope"
description: "GamepadNavigationScope: a public class in TaleWorlds.GauntletUI.GamepadNavigation; 46 exposed members (5 methods, 40 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadNavigationScope

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GamepadNavigationScope`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GamepadNavigationScope lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs. It is a public class; the inheritance chain is GamepadNavigationScope. It exposes 46 public/protected members: 5 methods, 40 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadNavigationScope lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.GamepadNavigation`, inheritance chain GamepadNavigationScope. The surface is property-led (properties 40/46, methods 5/46), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScopeID` | `public string ScopeID` | property |
| `IsActiveScope` | `public bool IsActiveScope` | property |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren` | property |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements` | property |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements` | property |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize` | property |
| `HasCircularMovement` | `public bool HasCircularMovement` | property |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Widget>NavigatableWidgets` | property |
| `ParentWidget` | `public Widget ParentWidget` | property |
| `LatestNavigationElementIndex` | `public int LatestNavigationElementIndex` | property |
| `DoNotAutoGainNavigationOnInit` | `public bool DoNotAutoGainNavigationOnInit` | property |
| `ForceGainNavigationBasedOnDirection` | `public bool ForceGainNavigationBasedOnDirection` | property |
| `ForceGainNavigationOnClosestChild` | `public bool ForceGainNavigationOnClosestChild` | property |
| `ForceGainNavigationOnFirstChild` | `public bool ForceGainNavigationOnFirstChild` | property |
| `NavigateFromScopeEdges` | `public bool NavigateFromScopeEdges` | property |
| `UseDiscoveryAreaAsScopeEdges` | `public bool UseDiscoveryAreaAsScopeEdges` | property |
| `DoNotAutoNavigateAfterSort` | `public bool DoNotAutoNavigateAfterSort` | property |
| `FollowMobileTargets` | `public bool FollowMobileTargets` | property |
| `DoNotAutoCollectChildScopes` | `public bool DoNotAutoCollectChildScopes` | property |
| `IsDefaultNavigationScope` | `public bool IsDefaultNavigationScope` | property |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight` | property |
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop` | property |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom` | property |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft` | property |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft` | property |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight` | property |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop` | property |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom` | property |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX` | property |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `UpNavigationScopeID` | `public string UpNavigationScopeID` | property |
| `RightNavigationScopeID` | `public string RightNavigationScopeID` | property |
| `DownNavigationScopeID` | `public string DownNavigationScopeID` | property |
| `LeftNavigationScopeID` | `public string LeftNavigationScopeID` | property |
| `UpNavigationScope` | `public GamepadNavigationScope UpNavigationScope` | property |
| `RightNavigationScope` | `public GamepadNavigationScope RightNavigationScope` | property |
| `DownNavigationScope` | `public GamepadNavigationScope DownNavigationScope` | property |
| `LeftNavigationScope` | `public GamepadNavigationScope LeftNavigationScope` | property |
| `GamepadNavigationScope` | `public GamepadNavigationScope()` | constructor |
| `AddWidgetAtIndex` | `public void AddWidgetAtIndex(Widget widget, int index)` | method |
| `AddWidget` | `public void AddWidget(Widget widget)` | method |
| `RemoveWidget` | `public void RemoveWidget(Widget widget)` | method |
| `SetParentScope` | `public void SetParentScope(GamepadNavigationScope scope)` | method |
| `ClearNavigatableWidgets` | `public void ClearNavigatableWidgets()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/)
- [same namespace GamepadNavigationTypes](../GamepadNavigationTypes/)
- [same namespace GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager/)
