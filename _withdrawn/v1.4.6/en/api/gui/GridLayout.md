---
title: "GridLayout"
description: "GridLayout: a public class in TaleWorlds.GauntletUI.Layout, inheriting ILayout; 6 exposed members (0 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GridLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GridLayout lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs. It is a public class, implementing/inheriting ILayout; the inheritance chain is GridLayout → ILayout. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GridLayout lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.Layout`, inheritance chain GridLayout → ILayout. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VerticalLayoutMethod` | `public GridVerticalLayoutMethod VerticalLayoutMethod` | property |
| `HorizontalLayoutMethod` | `public GridHorizontalLayoutMethod HorizontalLayoutMethod` | property |
| `Direction` | `public GridDirection Direction` | property |
| `IReadOnlyList` | `public IReadOnlyList<float>RowHeights` | property |
| `IReadOnlyList` | `public IReadOnlyList<float>ColumnWidths` | property |
| `GridLayout` | `public GridLayout()` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ILayout](../ILayout/)
- [same namespace DefaultLayout](../DefaultLayout/)
- [same namespace DragCarrierLayout](../DragCarrierLayout/)
- [same namespace GridDirection](../GridDirection/)
- [same namespace GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod/)
