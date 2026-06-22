<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackLayout`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `StackLayout` is a class in the `TaleWorlds.GauntletUI.Layout` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `LayoutMethod` | `public LayoutMethod LayoutMethod { get; set; }` |


## Key Methods

### GetItemDescription

```csharp
public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)
```

### MeasureChildren

```csharp
public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)
```

### OnLayout

```csharp
public void OnLayout(Widget widget, float left, float bottom, float right, float top)
```

### GetIndexForDrop

```csharp
public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)
```

### GetDropGizmoPosition

```csharp
public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)