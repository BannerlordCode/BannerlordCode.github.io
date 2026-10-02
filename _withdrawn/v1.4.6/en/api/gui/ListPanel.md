---
title: "ListPanel"
description: "ListPanel: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Container; 12 exposed members (7 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ListPanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ListPanel : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ListPanel lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs. It is a public class, implementing/inheriting Container; the inheritance chain is ListPanel → Container → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ListPanel lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain ListPanel → Container → Widget → PropertyOwnerObject. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Container](../Container/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
