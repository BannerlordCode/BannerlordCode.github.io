<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericOptionDataVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GenericOptionDataVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsNative` | `public bool IsNative { get; }` |
| `IsAction` | `public bool IsAction { get; }` |
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |


## Key Methods

### UpdateData

```csharp
public virtual void UpdateData(bool initUpdate)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetOptionType

```csharp
public object GetOptionType()
```

### GetOptionData

```csharp
public IOptionData GetOptionData()
```

### ResetToDefault

```csharp
public void ResetToDefault()
```

### UpdateEnableState

```csharp
public void UpdateEnableState()
```

### UpdateValue

```csharp
public abstract void UpdateValue()
```

### Cancel

```csharp
public abstract void Cancel()
```

### IsChanged

```csharp
public abstract bool IsChanged()
```

### SetValue

```csharp
public abstract void SetValue(float value)
```

### ResetData

```csharp
public abstract void ResetData()
```

### ApplyValue

```csharp
public abstract void ApplyValue()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)