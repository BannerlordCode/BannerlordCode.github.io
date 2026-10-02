---
title: "GraphWidget"
description: "GraphWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 23 exposed members (1 methods, 21 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs."
---
# GraphWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets.Graph`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class GraphWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs`

## Overview

GraphWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is GraphWidget → Widget. It exposes 23 public/protected members: 1 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace differing from (TaleWorlds.GauntletUI.ExtraWidgets.Graph) the module directory; inheritance chain GraphWidget → Widget. The surface is property-led (properties 21/23, methods 1/23), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphWidget` | `public GraphWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `RowCount` | `public int RowCount` | property |
| `ColumnCount` | `public int ColumnCount` | property |
| `HorizontalLabelCount` | `public int HorizontalLabelCount` | property |
| `HorizontalMinValue` | `public float HorizontalMinValue` | property |
| `HorizontalMaxValue` | `public float HorizontalMaxValue` | property |
| `VerticalLabelCount` | `public int VerticalLabelCount` | property |
| `VerticalMinValue` | `public float VerticalMinValue` | property |
| `VerticalMaxValue` | `public float VerticalMaxValue` | property |
| `PlaneLineSprite` | `public Sprite PlaneLineSprite` | property |
| `PlaneLineColor` | `public Color PlaneLineColor` | property |
| `LeftSpace` | `public float LeftSpace` | property |
| `TopSpace` | `public float TopSpace` | property |
| `RightSpace` | `public float RightSpace` | property |
| `BottomSpace` | `public float BottomSpace` | property |
| `PlaneMarginTop` | `public float PlaneMarginTop` | property |
| `PlaneMarginRight` | `public float PlaneMarginRight` | property |
| `NumberOfValueLabelDecimalPlaces` | `public int NumberOfValueLabelDecimalPlaces` | property |
| `HorizontalValueLabelsBrush` | `public Brush HorizontalValueLabelsBrush` | property |
| `VerticalValueLabelsBrush` | `public Brush VerticalValueLabelsBrush` | property |
| `LineBrush` | `public Brush LineBrush` | property |
| `LineContainerWidget` | `public Widget LineContainerWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GraphLinePointWidget](../GraphLinePointWidget)
- [same namespace GraphLineWidget](../GraphLineWidget)
