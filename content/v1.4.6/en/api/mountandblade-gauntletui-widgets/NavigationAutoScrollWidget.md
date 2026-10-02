---
title: "NavigationAutoScrollWidget"
description: "NavigationAutoScrollWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 10 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationAutoScrollWidget.cs."
---
# NavigationAutoScrollWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigationAutoScrollWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationAutoScrollWidget.cs`

## Overview

NavigationAutoScrollWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationAutoScrollWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is NavigationAutoScrollWidget → Widget. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationAutoScrollWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain NavigationAutoScrollWidget → Widget. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationAutoScrollWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParentPanel` | `public ScrollablePanel ParentPanel` | property |
| `NavigationAutoScrollWidget` | `public NavigationAutoScrollWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset` | property |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset` | property |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset` | property |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset` | property |
| `IncludeChildren` | `public bool IncludeChildren` | property |
| `TrackedWidget` | `public Widget TrackedWidget` | property |
| `ScrollTarget` | `public Widget ScrollTarget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
