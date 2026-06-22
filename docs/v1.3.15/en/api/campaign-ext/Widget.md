<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Widget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Widget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Widget` is a class in the `TaleWorlds.GauntletUI.BaseTypes` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ExtendLeft` | `public float ExtendLeft { get; set; }` |
| `ExtendRight` | `public float ExtendRight { get; set; }` |
| `ExtendTop` | `public float ExtendTop { get; set; }` |
| `ExtendBottom` | `public float ExtendBottom { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `NinePatchTop` | `public int NinePatchTop { get; set; }` |
| `NinePatchBottom` | `public int NinePatchBottom { get; set; }` |
| `NinePatchLeft` | `public int NinePatchLeft { get; set; }` |
| `NinePatchRight` | `public int NinePatchRight { get; set; }` |
| `ImageFit` | `public ImageFit ImageFit { get; set; }` |
| `GlobalRotation` | `public float GlobalRotation { get; }` |
| `Rotation` | `public float Rotation { get; set; }` |
| `PivotX` | `public float PivotX { get; set; }` |
| `PivotY` | `public float PivotY { get; set; }` |
| `Left` | `public float Left { get; }` |


## Key Methods

### GetAllChildrenAndThisRecursive

```csharp
public List<Widget> GetAllChildrenAndThisRecursive()
```

### ApplyActionToAllChildren

```csharp
public void ApplyActionToAllChildren(Action<Widget> action)
```

### ApplyActionToAllChildrenRecursive

```csharp
public void ApplyActionToAllChildrenRecursive(Action<Widget> action)
```

### GetAllChildrenRecursive

```csharp
public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)
```

### GetAllParents

```csharp
public List<Widget> GetAllParents()
```

### AddComponent

```csharp
public void AddComponent(WidgetComponent component)
```

### AddState

```csharp
public void AddState(string stateName)
```

### ContainsState

```csharp
public bool ContainsState(string stateName)
```

### SetState

```csharp
public virtual void SetState(string stateName)
```

### FindChild

```csharp
public Widget FindChild(BindingPath path)
```

### FindChild

```csharp
public Widget FindChild(string singlePathNode)
```

### FindChild

```csharp
public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)
```

### FindChild

```csharp
public Widget FindChild(string id, bool includeAllChildren = false)
```

### GetFirstInChildrenAndThisRecursive

```csharp
public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)
```

### GetFirstInChildrenRecursive

```csharp
public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)
```

### RemoveAllChildren

```csharp
public void RemoveAllChildren()
```

### UpdateAnimationPropertiesSubTask

```csharp
public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)
```

### Measure

```csharp
public void Measure(Vector2 measureSpec)
```

### CheckIsMyChildRecursive

```csharp
public bool CheckIsMyChildRecursive(Widget child)
```

### AddChild

```csharp
public void AddChild(Widget widget)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)