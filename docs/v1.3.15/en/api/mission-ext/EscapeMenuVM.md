<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EscapeMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `EscapeMenuVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `MenuItems` | `public MBBindingList<EscapeMenuItemVM> MenuItems { get; set; }` |
| `Tips` | `public GameTipsVM Tips { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Tick

```csharp
public virtual void Tick(float dt)
```

### RefreshItems

```csharp
public void RefreshItems(IEnumerable<EscapeMenuItemVM> items)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)