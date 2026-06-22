<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Container`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Container` is a class in the `TaleWorlds.GauntletUI.BaseTypes` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `AcceptDropPredicate` | `public abstract Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `IsDragHovering` | `public abstract bool IsDragHovering { get; set; }` |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex { get; set; }` |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval { get; set; }` |


## Key Methods

### GetDropGizmoPosition

```csharp
public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### GetIndexForDrop

```csharp
public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### OnChildSelected

```csharp
public abstract void OnChildSelected(Widget widget)
```

### GetItemDescription

```csharp
public ContainerItemDescription GetItemDescription(string id, int index)
```

### AddItemDescription

```csharp
public void AddItemDescription(ContainerItemDescription itemDescription)
```

### FindParentPanel

```csharp
public ScrollablePanel FindParentPanel()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)