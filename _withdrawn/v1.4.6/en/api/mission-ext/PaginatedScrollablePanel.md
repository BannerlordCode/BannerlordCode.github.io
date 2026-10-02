---
title: "PaginatedScrollablePanel"
description: "PaginatedScrollablePanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ScrollablePanel; 12 exposed members (1 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PaginatedScrollablePanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PaginatedScrollablePanel : ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PaginatedScrollablePanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs. It is a public class, implementing/inheriting ScrollablePanel; the inheritance chain is PaginatedScrollablePanel → ScrollablePanel → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 1 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PaginatedScrollablePanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain PaginatedScrollablePanel → ScrollablePanel → Widget → PropertyOwnerObject. The surface is property-led (properties 9/12, methods 1/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScrollablePanel](../../gui/ScrollablePanel/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
