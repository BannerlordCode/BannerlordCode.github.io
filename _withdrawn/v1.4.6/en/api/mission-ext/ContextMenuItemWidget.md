---
title: "ContextMenuItemWidget"
description: "ContextMenuItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContextMenuItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ContextMenuItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ContextMenuItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ContextMenuItemWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContextMenuItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain ContextMenuItemWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TypeIconWidget` | `public Widget TypeIconWidget` | property |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget` | property |
| `TypeIconState` | `public string TypeIconState` | property |
| `ContextMenuItemWidget` | `public ContextMenuItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `CanBeUsed` | `public bool CanBeUsed` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
