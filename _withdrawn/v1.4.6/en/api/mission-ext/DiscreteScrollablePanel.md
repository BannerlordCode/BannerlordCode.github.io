---
title: "DiscreteScrollablePanel"
description: "DiscreteScrollablePanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ScrollablePanel; 9 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DiscreteScrollablePanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DiscreteScrollablePanel : ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DiscreteScrollablePanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs. It is a public class, implementing/inheriting ScrollablePanel; the inheritance chain is DiscreteScrollablePanel → ScrollablePanel → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DiscreteScrollablePanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain DiscreteScrollablePanel → ScrollablePanel → Widget → PropertyOwnerObject. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DiscreteScrollablePanel` | `public DiscreteScrollablePanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsLooping` | `public bool IsLooping` | property |
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged` | property |
| `ItemsPerPage` | `public int ItemsPerPage` | property |
| `ScrollTime` | `public float ScrollTime` | property |
| `ListWidget` | `public ListPanel ListWidget` | property |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget` | property |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScrollablePanel](../../gui/ScrollablePanel/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
