---
title: "PropertyChangedWithBoolValueEventArgs"
description: "PropertyChangedWithBoolValueEventArgs 的自动生成类参考。"
---
# PropertyChangedWithBoolValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithBoolValueEventArgs`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithBoolValueEventArgs.cs`

## 概述

`PropertyChangedWithBoolValueEventArgs` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public bool Value { get; }` |

## 主要方法

### PropertyChangedWithBoolValueEventArgs
`public struct PropertyChangedWithBoolValueEventArgs(string propertyName, bool value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PropertyChangedWithBoolValueEventArgs 实例
PropertyChangedWithBoolValueEventArgs propertyChangedWithBoolValueEventArgs = ...;
var result = propertyChangedWithBoolValueEventArgs.PropertyChangedWithBoolValueEventArgs("example", false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PropertyChangedWithBoolValueEventArgs propertyChangedWithBoolValueEventArgs = ...;
propertyChangedWithBoolValueEventArgs.PropertyChangedWithBoolValueEventArgs("example", false);
```

## 参见

- [本区域目录](../)