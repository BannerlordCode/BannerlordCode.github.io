---
title: "NavigatableListPanel"
description: "NavigatableListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 18 exposed members (7 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NavigatableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigatableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

NavigatableListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is NavigatableListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 18 public/protected members: 7 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigatableListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain NavigatableListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 10/18, methods 7/18), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
