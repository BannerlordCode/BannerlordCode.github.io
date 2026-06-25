---
title: "MBGUID"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGUID`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBGUID

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Base:** `IComparable`
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBGUID.cs`

## 概述

`MBGUID` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHash2
`public static long GetHash2(MBGUID id1, MBGUID id2)`

**用途 / Purpose:** 获取 `hash2` 的当前值。

### CompareTo
`public int CompareTo(object a)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### GetTypeIndex
`public uint GetTypeIndex()`

**用途 / Purpose:** 获取 `type index` 的当前值。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public bool Equals(MBGUID other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
MBGUID.GetHash2(id1, id2);
```

## 参见

- [完整类目录](../catalog)