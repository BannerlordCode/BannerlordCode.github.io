---
title: "NavigationCacheElement"
description: "NavigationCacheElement 的自动生成类参考。"
---
# NavigationCacheElement

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `struct NavigationCacheElement<T> : IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`
**Base:** `IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`

## 概述

`NavigationCacheElement` 位于 `TaleWorlds.CampaignSystem.Map.DistanceCache`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PortPosition` | `public CampaignVec2 PortPosition { get; }` |
| `GatePosition` | `public CampaignVec2 GatePosition { get; }` |
| `StringId` | `public string StringId { get; }` |

## 主要方法

### Sort
`public static void Sort(ref NavigationCacheElement<T> settlement1, ref NavigationCacheElement<T> settlement2, out bool isPairChanged)`

**用途 / Purpose:** 对当前对象中的内容进行排序。

```csharp
// 静态调用，不需要实例
NavigationCacheElement.Sort(settlement1, settlement2, isPairChanged);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 NavigationCacheElement 实例
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 NavigationCacheElement 实例
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.Equals(obj);
```

### Equals
`public bool Equals(NavigationCacheElement<T> other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 NavigationCacheElement 实例
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.Equals(other);
```

## 使用示例

```csharp
NavigationCacheElement.Sort(settlement1, settlement2, isPairChanged);
```

## 参见

- [本区域目录](../)