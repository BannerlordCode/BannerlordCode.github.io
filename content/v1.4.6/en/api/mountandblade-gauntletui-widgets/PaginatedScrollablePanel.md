---
title: "PaginatedScrollablePanel"
description: "PaginatedScrollablePanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ScrollablePanel; 12 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs."
---
# PaginatedScrollablePanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PaginatedScrollablePanel : ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs`

## Overview

PaginatedScrollablePanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs. It is a public class, implementing/inheriting ScrollablePanel; the inheritance chain is PaginatedScrollablePanel → ScrollablePanel. It exposes 12 public/protected members: 1 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PaginatedScrollablePanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain PaginatedScrollablePanel → ScrollablePanel. The surface is property-led (properties 9/12, methods 1/12), so it mostly exposes state for reading. ScrollablePanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PaginatedScrollablePanel` | `public PaginatedScrollablePanel(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged` | property |
| `ItemsPerPage` | `public int ItemsPerPage` | property |
| `ScrollTime` | `public float ScrollTime` | property |
| `ContainerDirection` | `public PaginatedScrollablePanel.ContainerDirections ContainerDirection` | property |
| `ListWidget` | `public ListPanel ListWidget` | property |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget` | property |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget` | property |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope` | property |
| `ContainerDirections` | `public enum ContainerDirections` | property |
| `ContainerDirections` | `public enum ContainerDirections` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
