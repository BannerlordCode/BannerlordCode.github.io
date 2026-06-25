---
title: "CaseInsensitiveComparer"
description: "CaseInsensitiveComparer 的自动生成类参考。"
---
# CaseInsensitiveComparer

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `internal class CaseInsensitiveComparer : IEqualityComparer<string>`
**Base:** `IEqualityComparer<string>`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/CaseInsensitiveComparer.cs`

## 概述

`CaseInsensitiveComparer` 位于 `TaleWorlds.Localization.TextProcessor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Equals
`public bool Equals(string x, string y)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 CaseInsensitiveComparer 实例
CaseInsensitiveComparer caseInsensitiveComparer = ...;
var result = caseInsensitiveComparer.Equals("example", "example");
```

### GetHashCode
`public int GetHashCode(string x)`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 CaseInsensitiveComparer 实例
CaseInsensitiveComparer caseInsensitiveComparer = ...;
var result = caseInsensitiveComparer.GetHashCode("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CaseInsensitiveComparer caseInsensitiveComparer = ...;
caseInsensitiveComparer.Equals("example", "example");
```

## 参见

- [本区域目录](../)