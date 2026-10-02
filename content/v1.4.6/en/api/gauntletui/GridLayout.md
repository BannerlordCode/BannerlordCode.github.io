---
title: "GridLayout"
description: "GridLayout: a public class in TaleWorlds.GauntletUI, inheriting ILayout; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs."
---
# GridLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GridLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs`

## Overview

GridLayout lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs. It is a public class, implementing/inheriting ILayout; the inheritance chain is GridLayout → ILayout. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GridLayout is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.Layout) the module directory; inheritance chain GridLayout → ILayout. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VerticalLayoutMethod` | `public GridVerticalLayoutMethod VerticalLayoutMethod` | property |
| `HorizontalLayoutMethod` | `public GridHorizontalLayoutMethod HorizontalLayoutMethod` | property |
| `Direction` | `public GridDirection Direction` | property |
| `IReadOnlyList` | `public IReadOnlyList<float>RowHeights` | property |
| `IReadOnlyList` | `public IReadOnlyList<float>ColumnWidths` | property |
| `GridLayout` | `public GridLayout()` | constructor |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ILayout](../ILayout)
- [same namespace DefaultLayout](../DefaultLayout)
- [same namespace DragCarrierLayout](../DragCarrierLayout)
- [same namespace GridDirection](../GridDirection)
- [same namespace GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod)
