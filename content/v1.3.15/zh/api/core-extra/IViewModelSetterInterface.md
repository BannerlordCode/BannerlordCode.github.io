---
title: "IViewModelSetterInterface"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IViewModelSetterInterface`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IViewModelSetterInterface

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public interface IViewModelSetterInterface`
**领域:** core-extra

## 概述

`IViewModelSetterInterface` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### OnPropertyChanged
`public void OnPropertyChanged( string propertyName = null)`

**用途 / Purpose:** 当 `property changed` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(int value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(float value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(uint value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Color value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(double value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(Vec2 value, string propertyName = null)`

**用途 / Purpose:** 当 `property changed with value` 事件触发时调用此方法。

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path, bool isList)`

**用途 / Purpose:** 获取 `view model at path` 的当前值。

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path)`

**用途 / Purpose:** 获取 `view model at path` 的当前值。

### GetPropertyValue
`public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)`

**用途 / Purpose:** 获取 `property value` 的当前值。

### GetPropertyValue
`public object GetPropertyValue(string name)`

**用途 / Purpose:** 获取 `property value` 的当前值。

### GetPropertyType
`public Type GetPropertyType(string name)`

**用途 / Purpose:** 获取 `property type` 的当前值。

### SetPropertyValue
`public void SetPropertyValue(string name, object value)`

**用途 / Purpose:** 设置 `property value` 的值或状态。

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteCommand
`public void ExecuteCommand(string commandName, object parameters)`

**用途 / Purpose:** 执行 `command` 操作或流程。

### RefreshValues
`public virtual void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos()`

**用途 / Purpose:** 刷新 `property and method infos` 的显示或缓存。

## 使用示例

```csharp
IViewModelSetterInterface implementation = GetViewModelSetterInterfaceImplementation();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
