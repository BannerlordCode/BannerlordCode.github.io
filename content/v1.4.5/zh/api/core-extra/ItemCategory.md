---
title: "ItemCategory"
description: "ItemCategory 的自动生成类参考。"
---
# ItemCategory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemCategory : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemCategory.cs`

## 概述

`ItemCategory` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `CanSubstitute` | `public ItemCategory CanSubstitute { get; }` |
| `SubstitutionFactor` | `public float SubstitutionFactor { get; }` |
| `Properties` | `public Property Properties { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `BaseDemand` | `public float BaseDemand { get; }` |
| `LuxuryDemand` | `public float LuxuryDemand { get; }` |

## 主要方法

### InitializeObject
`public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, Property properties = Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)`

**用途 / Purpose:** 为 object 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ItemCategory 实例
ItemCategory itemCategory = ...;
var result = itemCategory.InitializeObject(false, 0, 0, property.None, null, 0, false, false);
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 ItemCategory 实例
ItemCategory itemCategory = ...;
var result = itemCategory.GetName();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ItemCategory 实例
ItemCategory itemCategory = ...;
var result = itemCategory.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemCategory itemCategory = ...;
itemCategory.InitializeObject(false, 0, 0, property.None, null, 0, false, false);
```

## 参见

- [本区域目录](../)