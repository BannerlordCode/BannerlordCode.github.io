<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListPanel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ListPanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ListPanel` is a class in the `TaleWorlds.GauntletUI.BaseTypes` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |


## Key Methods

### GetIndexForDrop

```csharp
public override int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### GetDropGizmoPosition

```csharp
public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### OnChildSelected

```csharp
public override void OnChildSelected(Widget widget)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)