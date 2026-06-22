<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheerBarkNodeItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerBarkNodeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CheerBarkNodeItemVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `SubNodes` | `public MBBindingList<CheerBarkNodeItemVM> SubNodes { get; set; }` |
| `CheerNameText` | `public string CheerNameText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasSubNodes` | `public bool HasSubNodes { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `TauntVisualName` | `public string TauntVisualName { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |


## Key Methods

### ClearSelectionRecursive

```csharp
public void ClearSelectionRecursive()
```

### ExecuteFocused

```csharp
public void ExecuteFocused()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddSubNode

```csharp
public void AddSubNode(CheerBarkNodeItemVM subNode)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)