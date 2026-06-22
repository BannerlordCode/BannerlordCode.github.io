<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderItemBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderItemBaseVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `OrderIconId` | `public string OrderIconId { get; set; }` |
| `SelectionState` | `public string SelectionState { get; set; }` |
| `Name` | `public string Name { get; set; }` |


## Key Methods

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshState

```csharp
public void RefreshState()
```

### ExecuteAction

```csharp
public void ExecuteAction(VisualOrderExecutionParameters executionParameters)
```

### SetShortcutKey

```csharp
public void SetShortcutKey(InputKeyItemVM inputKeyItem)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)