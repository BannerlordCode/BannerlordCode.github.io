---
title: "StackLayout"
description: "StackLayout: a public class in TaleWorlds.GauntletUI, inheriting ILayout; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs."
---
# StackLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class StackLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs`

## Overview

StackLayout lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs. It is a public class, implementing/inheriting ILayout; the inheritance chain is StackLayout → ILayout. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StackLayout is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.Layout) the module directory; inheritance chain StackLayout → ILayout. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription` | property |
| `LayoutMethod` | `public LayoutMethod LayoutMethod` | property |
| `StackLayout` | `public StackLayout()` | constructor |
| `GetItemDescription` | `public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)` | method |
| `MeasureChildren` | `public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)` | method |
| `OnLayout` | `public void OnLayout(Widget widget, float left, float bottom, float right, float top)` | method |
| `GetIndexForDrop` | `public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)` | method |
| `GetDropGizmoPosition` | `public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ILayout](../ILayout)
- [same namespace DefaultLayout](../DefaultLayout)
- [same namespace DragCarrierLayout](../DragCarrierLayout)
- [same namespace GridDirection](../GridDirection)
- [same namespace GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod)
