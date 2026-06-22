<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IViewModelGetterInterface`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IViewModelGetterInterface

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** interface
**Area:** Core

## Overview

> This is an auto-generated stub. `IViewModelGetterInterface` is a interface in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyChanged` | `public event PropertyChangedEventHandler PropertyChanged { get; }` |
| `PropertyChangedWithValue` | `public event PropertyChangedWithValueEventHandler PropertyChangedWithValue { get; }` |
| `PropertyChangedWithBoolValue` | `public event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue { get; }` |
| `PropertyChangedWithIntValue` | `public event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue { get; }` |
| `PropertyChangedWithFloatValue` | `public event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue { get; }` |
| `PropertyChangedWithUIntValue` | `public event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue { get; }` |
| `PropertyChangedWithColorValue` | `public event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue { get; }` |
| `PropertyChangedWithDoubleValue` | `public event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue { get; }` |
| `PropertyChangedWithVec2Value` | `public event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value { get; }` |
| `Properties` | `public Dictionary<string, PropertyInfo> Properties { get; set; }` |
| `Methods` | `public Dictionary<string, MethodInfo> Methods { get; set; }` |


## Key Methods

### OnPropertyChanged

```csharp
public void OnPropertyChanged( string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(bool value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(int value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(float value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(uint value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(Color value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(double value, string propertyName = null)
```

### OnPropertyChangedWithValue

```csharp
public void OnPropertyChangedWithValue(Vec2 value, string propertyName = null)
```

### GetViewModelAtPath

```csharp
public object GetViewModelAtPath(BindingPath path, bool isList)
```

### GetViewModelAtPath

```csharp
public object GetViewModelAtPath(BindingPath path)
```

### GetPropertyValue

```csharp
public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)
```

### GetPropertyValue

```csharp
public object GetPropertyValue(string name)
```

### GetPropertyType

```csharp
public Type GetPropertyType(string name)
```

### SetPropertyValue

```csharp
public void SetPropertyValue(string name, object value)
```

### OnFinalize

```csharp
public virtual void OnFinalize()
```

### ExecuteCommand

```csharp
public void ExecuteCommand(string commandName, object parameters)
```

### RefreshValues

```csharp
public virtual void RefreshValues()
```

### RefreshPropertyAndMethodInfos

```csharp
public static void RefreshPropertyAndMethodInfos()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)