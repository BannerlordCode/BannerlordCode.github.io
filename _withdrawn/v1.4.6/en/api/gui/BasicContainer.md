---
title: "BasicContainer"
description: "BasicContainer: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Container; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BasicContainer

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BasicContainer : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BasicContainer lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs. It is a public class, implementing/inheriting Container; the inheritance chain is BasicContainer → Container → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicContainer lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain BasicContainer → Container → Widget → PropertyOwnerObject. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BasicContainer` | `public BasicContainer(UIContext context) : base(context)` | constructor |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | property |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | method |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | method |
| `IsDragHovering` | `public override bool IsDragHovering` | property |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Container](../Container/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
- [same namespace Container](../Container/)
