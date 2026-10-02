---
title: "ListPanel"
description: "ListPanel: a public class in TaleWorlds.GauntletUI, inheriting Container; 12 exposed members (7 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs."
---
# ListPanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ListPanel : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs`

## Overview

ListPanel lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs. It is a public class, implementing/inheriting Container; the inheritance chain is ListPanel → Container → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ListPanel is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain ListPanel → Container → Widget → PropertyOwnerObject. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StackLayout` | `public StackLayout StackLayout` | property |
| `ListPanel` | `public ListPanel(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | property |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 mousePosition)` | method |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 mousePosition)` | method |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | method |
| `OnDragHoverBegin` | `protected internal override void OnDragHoverBegin()` | method |
| `OnDragHoverEnd` | `protected internal override void OnDragHoverEnd()` | method |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | method |
| `IsDragHovering` | `public override bool IsDragHovering` | property |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Container](../Container)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
