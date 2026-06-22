<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IViewModelSetterInterface`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IViewModelSetterInterface

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 接口 interface interface
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`IViewModelSetterInterface` 是 `TaleWorlds.Library` 命名空间下的一个接口 interface。
> 如需了解其属性、方法和开发者用例，请参考
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

源码或贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)