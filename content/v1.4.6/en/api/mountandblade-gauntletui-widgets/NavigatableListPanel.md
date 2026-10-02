---
title: "NavigatableListPanel"
description: "NavigatableListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 18 exposed members (7 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs."
---
# NavigatableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigatableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs`

## Overview

NavigatableListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is NavigatableListPanel → ListPanel. It exposes 18 public/protected members: 7 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigatableListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain NavigatableListPanel → ListPanel. The surface is property-led (properties 10/18, methods 7/18), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParentPanel` | `public ScrollablePanel ParentPanel` | property |
| `NavigatableListPanel` | `public NavigatableListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `OnGamepadNavigationIndexUpdated` | `protected override void OnGamepadNavigationIndexUpdated(int newIndex)` | method |
| `RefreshChildNavigationIndices` | `protected void RefreshChildNavigationIndices()` | method |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset` | property |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset` | property |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset` | property |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset` | property |
| `MinIndex` | `public int MinIndex` | property |
| `MaxIndex` | `public int MaxIndex` | property |
| `StepSize` | `public int StepSize` | property |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum` | property |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
