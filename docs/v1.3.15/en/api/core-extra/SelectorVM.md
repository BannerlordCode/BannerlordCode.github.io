<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectorVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `SelectorVM` is a class in the `TaleWorlds.Core.ViewModelCollection.Selector` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ItemList` | `public MBBindingList<T> ItemList { get; set; }` |
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `SelectedItem` | `public T SelectedItem { get; set; }` |
| `HasSingleItem` | `public bool HasSingleItem { get; set; }` |


## Key Methods

### Refresh

```csharp
public void Refresh(IEnumerable<string> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### Refresh

```csharp
public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### Refresh

```csharp
public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### SetOnChangeAction

```csharp
public void SetOnChangeAction(Action<SelectorVM<T>> onChange)
```

### AddItem

```csharp
public void AddItem(T item)
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteSelectNextItem

```csharp
public void ExecuteSelectNextItem()
```

### ExecuteSelectPreviousItem

```csharp
public void ExecuteSelectPreviousItem()
```

### GetCurrentItem

```csharp
public T GetCurrentItem()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)