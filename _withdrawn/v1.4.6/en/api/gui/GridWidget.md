---
title: "GridWidget"
description: "GridWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Container; 17 exposed members (3 methods, 11 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GridWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridWidget : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GridWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs. It is a public class, implementing/inheriting Container; the inheritance chain is GridWidget → Container → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 3 methods, 11 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GridWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain GridWidget → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 11/17, methods 3/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GridLayout` | `public GridLayout GridLayout` | property |
| `DefaultCellWidth` | `public float DefaultCellWidth` | property |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth` | property |
| `DefaultCellHeight` | `public float DefaultCellHeight` | property |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight` | property |
| `RowCount` | `public int RowCount` | property |
| `ColumnCount` | `public int ColumnCount` | property |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth` | property |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight` | property |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | property |
| `IsDragHovering` | `public override bool IsDragHovering` | property |
| `GridWidget` | `public GridWidget(UIContext context) : base(context)` | constructor |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | method |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | method |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | method |
| `DefaultRowCount` | `public const int DefaultRowCount` | field |
| `DefaultColumnCount` | `public const int DefaultColumnCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Container](../Container/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
