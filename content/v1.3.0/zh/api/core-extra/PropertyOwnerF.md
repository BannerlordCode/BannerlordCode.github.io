---
title: "PropertyOwnerF"
description: "PropertyOwnerF 的自动生成类参考。"
---
# PropertyOwnerF

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyOwnerF<T> : IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**Base:** `IReadOnlyPropertyOwnerF<T> where T : MBObjectBase`
**File:** `TaleWorlds.Core/PropertyOwnerF.cs`

## 概述

`PropertyOwnerF` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetPropertyValue
`public void SetPropertyValue(T attribute, float value)`

**用途 / Purpose:** 为 「property value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.SetPropertyValue(attribute, 0);
```

### GetPropertyValue
`public float GetPropertyValue(T attribute)`

**用途 / Purpose:** 读取并返回当前对象中 「property value」 的结果。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.GetPropertyValue(attribute);
```

### HasProperty
`public bool HasProperty(T attribute)`

**用途 / Purpose:** 判断当前对象是否已经持有 「property」。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.HasProperty(attribute);
```

### ClearAllProperty
`public void ClearAllProperty()`

**用途 / Purpose:** 清空当前对象中的「all property」。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.ClearAllProperty();
```

### GetProperties
`public MBList<T> GetProperties()`

**用途 / Purpose:** 读取并返回当前对象中 「properties」 的结果。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
var result = propertyOwnerF.GetProperties();
```

### Serialize
`public void Serialize(XmlWriter writer)`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.Serialize(writer);
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 PropertyOwnerF 实例
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PropertyOwnerF propertyOwnerF = ...;
propertyOwnerF.SetPropertyValue(attribute, 0);
```

## 参见

- [本区域目录](../)