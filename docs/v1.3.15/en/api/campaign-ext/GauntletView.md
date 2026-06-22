<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletView

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GauntletView` is a class in the `TaleWorlds.GauntletUI.Data` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |


## Key Methods

### AddChild

```csharp
public void AddChild(GauntletView child)
```

### RemoveChild

```csharp
public void RemoveChild(GauntletView child)
```

### SwapChildrenAtIndeces

```csharp
public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)
```

### RefreshBinding

```csharp
public void RefreshBinding()
```

### RefreshBindingWithChildren

```csharp
public void RefreshBindingWithChildren()
```

### ReleaseBindingWithChildren

```csharp
public void ReleaseBindingWithChildren()
```

### BindData

```csharp
public void BindData(string property, BindingPath path)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)