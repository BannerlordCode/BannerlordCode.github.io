---
title: "NavigationForcedScopeCollectionTargeter"
description: "NavigationForcedScopeCollectionTargeter: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs."
---
# NavigationForcedScopeCollectionTargeter

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigationForcedScopeCollectionTargeter : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs`

## Overview

NavigationForcedScopeCollectionTargeter lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is NavigationForcedScopeCollectionTargeter → Widget. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationForcedScopeCollectionTargeter is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain NavigationForcedScopeCollectionTargeter → Widget. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UseRootAsTarget` | `public bool UseRootAsTarget` | property |
| `NavigationForcedScopeCollectionTargeter` | `public NavigationForcedScopeCollectionTargeter(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `IsCollectionEnabled` | `public bool IsCollectionEnabled` | property |
| `IsCollectionDisabled` | `public bool IsCollectionDisabled` | property |
| `CollectionID` | `public string CollectionID` | property |
| `CollectionOrder` | `public int CollectionOrder` | property |
| `CollectionParent` | `public Widget CollectionParent` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
