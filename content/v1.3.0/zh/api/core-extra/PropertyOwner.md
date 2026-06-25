---
title: "PropertyOwner"
description: "PropertyOwner 的自动生成类参考。"
---
# PropertyOwner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyOwner<T> : IReadOnlyPropertyOwner<T> where T : MBObjectBase`
**Base:** `IReadOnlyPropertyOwner<T> where T : MBObjectBase`
**File:** `TaleWorlds.Core/PropertyOwner.cs`

## 概述

`PropertyOwner` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetPropertyValue
`public void SetPropertyValue(T attribute, int value)`

**用途 / Purpose:** 为 「property value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
propertyOwner.SetPropertyValue(attribute, 0);
```

### GetPropertyValue
`public int GetPropertyValue(T attribute)`

**用途 / Purpose:** 读取并返回当前对象中 「property value」 的结果。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
var result = propertyOwner.GetPropertyValue(attribute);
```

### HasProperty
`public bool HasProperty(T attribute)`

**用途 / Purpose:** 判断当前对象是否已经持有 「property」。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
var result = propertyOwner.HasProperty(attribute);
```

### ClearAllProperty
`public void ClearAllProperty()`

**用途 / Purpose:** 清空当前对象中的「all property」。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
propertyOwner.ClearAllProperty();
```

### GetProperties
`public MBList<T> GetProperties()`

**用途 / Purpose:** 读取并返回当前对象中 「properties」 的结果。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
var result = propertyOwner.GetProperties();
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 PropertyOwner 实例
PropertyOwner propertyOwner = ...;
propertyOwner.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PropertyOwner propertyOwner = ...;
propertyOwner.SetPropertyValue(attribute, 0);
```

## 参见

- [本区域目录](../)