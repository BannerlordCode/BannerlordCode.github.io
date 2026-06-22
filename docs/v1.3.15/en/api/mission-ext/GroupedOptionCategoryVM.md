<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GroupedOptionCategoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GroupedOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GroupedOptionCategoryVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AllOptions` | `public IEnumerable<GenericOptionDataVM> AllOptions { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsResetSupported` | `public bool IsResetSupported { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `Groups` | `public MBBindingList<OptionGroupVM> Groups { get; set; }` |
| `BaseOptions` | `public MBBindingList<GenericOptionDataVM> BaseOptions { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ResetData

```csharp
public void ResetData()
```

### ExecuteResetToDefault

```csharp
public void ExecuteResetToDefault()
```

### GetOption

```csharp
public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)
```

### GetOption

```csharp
public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)