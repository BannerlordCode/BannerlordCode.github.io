---
title: "PropertyChangedWithIntValueEventArgs"
description: "PropertyChangedWithIntValueEventArgs 的自动生成类参考。"
---
# PropertyChangedWithIntValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithIntValueEventArgs`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithIntValueEventArgs.cs`

## 概述

`PropertyChangedWithIntValueEventArgs` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public int Value { get; }` |

## 主要方法

### PropertyChangedWithIntValueEventArgs
`public struct PropertyChangedWithIntValueEventArgs(string propertyName, int value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PropertyChangedWithIntValueEventArgs 对应的操作。

```csharp
// 先通过子系统 API 拿到 PropertyChangedWithIntValueEventArgs 实例
PropertyChangedWithIntValueEventArgs propertyChangedWithIntValueEventArgs = ...;
var result = propertyChangedWithIntValueEventArgs.PropertyChangedWithIntValueEventArgs("example", 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PropertyChangedWithIntValueEventArgs propertyChangedWithIntValueEventArgs = ...;
propertyChangedWithIntValueEventArgs.PropertyChangedWithIntValueEventArgs("example", 0);
```

## 参见

- [本区域目录](../)