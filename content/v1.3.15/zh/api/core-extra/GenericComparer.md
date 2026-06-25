---
title: "GenericComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericComparer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericComparer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class GenericComparer<T> : Comparer<T> where T : IComparable<T>`
**Base:** `Comparer<T> where T : IComparable<T>`
**File:** `TaleWorlds.Library/GenericComparer.cs`

## 概述

`GenericComparer` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Compare
`public override int Compare(T x, T y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new GenericComparer();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)