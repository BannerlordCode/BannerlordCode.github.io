---
title: "NavigationScopeTargeter"
description: "NavigationScopeTargeter: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 39 exposed members (0 methods, 38 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs."
---
# NavigationScopeTargeter

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigationScopeTargeter : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs`

## Overview

NavigationScopeTargeter lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is NavigationScopeTargeter → Widget. It exposes 39 public/protected members: 38 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationScopeTargeter is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain NavigationScopeTargeter → Widget. The surface is property-led (properties 38/39, methods 0/39), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NavigationScope` | `public GamepadNavigationScope NavigationScope` | property |
| `NavigationScopeTargeter` | `public NavigationScopeTargeter(UIContext context) : base(context)` | constructor |
| `ScopeID` | `public string ScopeID` | property |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements` | property |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements` | property |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize` | property |
| `HasCircularMovement` | `public bool HasCircularMovement` | property |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren` | property |
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
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop` | property |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight` | property |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom` | property |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft` | property |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft` | property |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight` | property |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop` | property |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom` | property |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX` | property |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY` | property |
| `IsScopeEnabled` | `public bool IsScopeEnabled` | property |
| `IsScopeDisabled` | `public bool IsScopeDisabled` | property |
| `UpNavigationScope` | `public string UpNavigationScope` | property |
| `RightNavigationScope` | `public string RightNavigationScope` | property |
| `DownNavigationScope` | `public string DownNavigationScope` | property |
| `LeftNavigationScope` | `public string LeftNavigationScope` | property |
| `UpNavigationScopeTargeter` | `public NavigationScopeTargeter UpNavigationScopeTargeter` | property |
| `RightNavigationScopeTargeter` | `public NavigationScopeTargeter RightNavigationScopeTargeter` | property |
| `DownNavigationScopeTargeter` | `public NavigationScopeTargeter DownNavigationScopeTargeter` | property |
| `LeftNavigationScopeTargeter` | `public NavigationScopeTargeter LeftNavigationScopeTargeter` | property |
| `ScopeParent` | `public Widget ScopeParent` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
