---
title: "Container"
description: "Container: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Widget; 21 exposed members (10 methods, 6 properties, 4 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Container

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public abstract class Container : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

Container lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs. It is a public class (abstract), implementing/inheriting Widget; the inheritance chain is Container → Widget → PropertyOwnerObject. It exposes 21 public/protected members: 10 methods, 6 properties, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Container lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain Container → Widget → PropertyOwnerObject. The surface is method-led (methods 10/21, properties 6/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription` | property |
| `Predicate` | `public abstract Predicate<Widget>AcceptDropPredicate` | property |
| `GetDropGizmoPosition` | `public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition);` | method |
| `GetIndexForDrop` | `public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition);` | method |
| `IntValue` | `public int IntValue` | property |
| `IsDragHovering` | `public abstract bool IsDragHovering` | property |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex` | property |
| `Container` | `protected Container(UIContext context) : base(context)` | constructor |
| `OnDrop` | `protected internal override bool OnDrop()` | method |
| `OnChildSelected` | `public abstract void OnChildSelected(Widget widget);` | method |
| `GetItemDescription` | `public ContainerItemDescription GetItemDescription(string id, int index)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | method |
| `AddItemDescription` | `public void AddItemDescription(ContainerItemDescription itemDescription)` | method |
| `FindParentPanel` | `public ScrollablePanel FindParentPanel()` | method |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval` | property |
| `List` | `public List<Action<Widget>>SelectEventHandlers` | field |
| `Widget>>ItemAddEventHandlers` | `public List<Action<Widget, Widget>>ItemAddEventHandlers` | field |
| `Widget>>ItemRemoveEventHandlers` | `public List<Action<Widget, Widget>>ItemRemoveEventHandlers` | field |
| `List` | `public List<Action<Widget>>ItemAfterRemoveEventHandlers` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
