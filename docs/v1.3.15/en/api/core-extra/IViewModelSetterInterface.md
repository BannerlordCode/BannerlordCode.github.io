<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IViewModelSetterInterface`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IViewModelSetterInterface

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface IViewModelSetterInterface`
**Area:** core-extra

## Overview

`IViewModelSetterInterface` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void OnPropertyChanged( string propertyName = null)`

**Purpose:** Called when the `property changed` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(int value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(float value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(uint value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Color value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(double value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Vec2 value, string propertyName = null)`

**Purpose:** Called when the `property changed with value` event is raised.

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path, bool isList)`

**Purpose:** Gets the current value of `view model at path`.

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path)`

**Purpose:** Gets the current value of `view model at path`.

### GetPropertyValue
`public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)`

**Purpose:** Gets the current value of `property value`.

### GetPropertyValue
`public object GetPropertyValue(string name)`

**Purpose:** Gets the current value of `property value`.

### GetPropertyType
`public Type GetPropertyType(string name)`

**Purpose:** Gets the current value of `property type`.

### SetPropertyValue
`public void SetPropertyValue(string name, object value)`

**Purpose:** Sets the value or state of `property value`.

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteCommand
`public void ExecuteCommand(string commandName, object parameters)`

**Purpose:** Executes the `command` operation or workflow.

### RefreshValues
`public virtual void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos()`

**Purpose:** Refreshes the display or cache of `property and method infos`.

## Usage Example

```csharp
IViewModelSetterInterface implementation = GetViewModelSetterInterfaceImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
