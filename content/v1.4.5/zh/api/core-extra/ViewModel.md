---
title: "ViewModel"
description: "ViewModel 的自动生成类参考。"
---
# ViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**Base:** `IViewModel`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`

## 概述

`ViewModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ViewModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Properties` | `public Dictionary<string, PropertyInfo> Properties { get; set; }` |
| `Methods` | `public Dictionary<string, MethodInfo> Methods { get; set; }` |
| `PropertyChanged` | `public event PropertyChangedEventHandler PropertyChanged { get; }` |
| `PropertyChangedWithValue` | `public event PropertyChangedWithValueEventHandler PropertyChangedWithValue { get; }` |
| `PropertyChangedWithBoolValue` | `public event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue { get; }` |
| `PropertyChangedWithIntValue` | `public event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue { get; }` |
| `PropertyChangedWithFloatValue` | `public event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue { get; }` |
| `PropertyChangedWithUIntValue` | `public event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue { get; }` |
| `PropertyChangedWithColorValue` | `public event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue { get; }` |
| `PropertyChangedWithDoubleValue` | `public event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue { get; }` |
| `PropertyChangedWithVec2Value` | `public event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value { get; }` |

## 主要方法

### OnPropertyChanged
`public void OnPropertyChanged( string propertyName = null)`

**用途 / Purpose:** 在 「property changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChanged("example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(false, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(int value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(float value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(uint value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Color value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(value, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(double value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(0, "example");
```

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Vec2 value, string propertyName = null)`

**用途 / Purpose:** 在 「property changed with value」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnPropertyChangedWithValue(value, "example");
```

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path, bool isList)`

**用途 / Purpose:** 读取并返回当前对象中 「view model at path」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
var result = viewModel.GetViewModelAtPath(path, false);
```

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path)`

**用途 / Purpose:** 读取并返回当前对象中 「view model at path」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
var result = viewModel.GetViewModelAtPath(path);
```

### GetPropertyValue
`public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)`

**用途 / Purpose:** 读取并返回当前对象中 「property value」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
var result = viewModel.GetPropertyValue("example", propertyTypeFeeder);
```

### GetPropertyValue
`public object GetPropertyValue(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「property value」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
var result = viewModel.GetPropertyValue("example");
```

### GetPropertyType
`public Type GetPropertyType(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「property type」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
var result = viewModel.GetPropertyType("example");
```

### SetPropertyValue
`public void SetPropertyValue(string name, object value)`

**用途 / Purpose:** 为 「property value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.SetPropertyValue("example", value);
```

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.OnFinalize();
```

### ExecuteCommand
`public void ExecuteCommand(string commandName, object parameters)`

**用途 / Purpose:** 执行 「command」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.ExecuteCommand("example", parameters);
```

### RefreshValues
`public virtual void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ViewModel 实例
ViewModel viewModel = ...;
viewModel.RefreshValues();
```

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos()`

**用途 / Purpose:** 使 「property and method infos」 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
ViewModel.RefreshPropertyAndMethodInfos();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ViewModel instance = ...;
```

## 参见

- [本区域目录](../)