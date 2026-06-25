---
title: "ViewModel"
description: "Auto-generated class reference for ViewModel."
---
# ViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**Base:** `IViewModel`
**File:** `TaleWorlds.Library/ViewModel.cs`

## Overview

`ViewModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ViewModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** **Purpose:** Invoked when the property changed event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChanged("example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(false, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(int value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(float value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(uint value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Color value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(value, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(double value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Vec2 value, string propertyName = null)`

**Purpose:** **Purpose:** Invoked when the property changed with value event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(value, "example");
```

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path, bool isList)`

**Purpose:** **Purpose:** Reads and returns the view model at path value held by the this instance.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
var result = viewModel.GetViewModelAtPath(path, false);
```

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path)`

**Purpose:** **Purpose:** Reads and returns the view model at path value held by the this instance.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
var result = viewModel.GetViewModelAtPath(path);
```

### GetPropertyValue
`public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)`

**Purpose:** **Purpose:** Reads and returns the property value value held by the this instance.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
var result = viewModel.GetPropertyValue("example", propertyTypeFeeder);
```

### GetPropertyValue
`public object GetPropertyValue(string name)`

**Purpose:** **Purpose:** Reads and returns the property value value held by the this instance.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
var result = viewModel.GetPropertyValue("example");
```

### GetPropertyType
`public Type GetPropertyType(string name)`

**Purpose:** **Purpose:** Reads and returns the property type value held by the this instance.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
var result = viewModel.GetPropertyType("example");
```

### SetPropertyValue
`public void SetPropertyValue(string name, object value)`

**Purpose:** **Purpose:** Assigns a new value to property value and updates the object's internal state.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.SetPropertyValue("example", value);
```

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.OnFinalize();
```

### ExecuteCommand
`public void ExecuteCommand(string commandName, object parameters)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with command.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.ExecuteCommand("example", parameters);
```

### RefreshValues
`public virtual void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ViewModel from the subsystem API first
ViewModel viewModel = ...;
viewModel.RefreshValues();
```

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos()`

**Purpose:** **Purpose:** Keeps the display or cache of property and method infos in sync with the underlying state.

```csharp
// Static call; no instance required
ViewModel.RefreshPropertyAndMethodInfos();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ViewModel instance = ...;
```

## See Also

- [Area Index](../)