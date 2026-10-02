---
title: "DoubleTabControlListPanel"
description: "DoubleTabControlListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DoubleTabControlListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DoubleTabControlListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DoubleTabControlListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is DoubleTabControlListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DoubleTabControlListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain DoubleTabControlListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DoubleTabControlListPanel` | `public DoubleTabControlListPanel(UIContext context) : base(context)` | constructor |
| `OnFirstTabClick` | `public void OnFirstTabClick(Widget widget)` | method |
| `OnSecondTabClick` | `public void OnSecondTabClick(Widget widget)` | method |
| `FirstListButton` | `public ButtonWidget FirstListButton` | property |
| `SecondListButton` | `public ButtonWidget SecondListButton` | property |
| `FirstList` | `public Widget FirstList` | property |
| `SecondList` | `public Widget SecondList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
