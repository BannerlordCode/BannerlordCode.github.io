---
title: "DictionaryByType"
description: "DictionaryByType 的自动生成类参考。"
---
# DictionaryByType

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class DictionaryByType`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/DictionaryByType.cs`

## 概述

`DictionaryByType` 位于 `TaleWorlds.Library.EventSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.EventSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetClone
`public IDictionary<Type, object> GetClone()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clone 的结果。

```csharp
// 先通过子系统 API 拿到 DictionaryByType 实例
DictionaryByType dictionaryByType = ...;
var result = dictionaryByType.GetClone();
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 DictionaryByType 实例
DictionaryByType dictionaryByType = ...;
dictionaryByType.Clear();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DictionaryByType dictionaryByType = ...;
dictionaryByType.GetClone();
```

## 参见

- [本区域目录](../)