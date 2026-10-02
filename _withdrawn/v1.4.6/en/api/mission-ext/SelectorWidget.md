---
title: "SelectorWidget"
description: "SelectorWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SelectorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SelectorWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SelectorWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SelectorWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectorWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain SelectorWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectorWidget` | `public SelectorWidget(UIContext context) : base(context)` | constructor |
| `OnListChanged` | `public void OnListChanged(Widget widget)` | method |
| `OnListChanged` | `public void OnListChanged(Widget parentWidget, Widget addedWidget)` | method |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)` | method |
| `ListPanelValue` | `public int ListPanelValue` | property |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex` | property |
| `Container` | `public Container Container` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
