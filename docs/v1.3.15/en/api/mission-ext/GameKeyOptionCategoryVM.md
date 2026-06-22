<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyOptionCategoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GameKeyOptionCategoryVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `GameKeyGroups` | `public MBBindingList<GameKeyGroupVM> GameKeyGroups { get; set; }` |
| `AuxiliaryKeyGroups` | `public MBBindingList<AuxiliaryKeyGroupVM> AuxiliaryKeyGroups { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### IsChanged

```csharp
public bool IsChanged()
```

### ExecuteResetToDefault

```csharp
public void ExecuteResetToDefault()
```

### OnDone

```csharp
public void OnDone()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Cancel

```csharp
public void Cancel()
```

### ApplyValues

```csharp
public void ApplyValues()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)