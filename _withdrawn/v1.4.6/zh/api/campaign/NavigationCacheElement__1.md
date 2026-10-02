---
title: "NavigationCacheElement<T>"
description: "NavigationCacheElement<T>：TaleWorlds.CampaignSystem.Map.DistanceCache 的 public 结构体，继承 IEquatable<NavigationCacheElement<T>>；公开成员 10 个（方法 6、属性 3、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NavigationCacheElement<T>

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public readonly struct NavigationCacheElement<T>: IEquatable<NavigationCacheElement<T>>where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

NavigationCacheElement<T> 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs。它是一个 public 结构体，实现/继承 IEquatable<NavigationCacheElement<T>>，继承链为 NavigationCacheElement → IEquatable。public/protected 成员共 10 个：6 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigationCacheElement<T> 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache`，继承链 NavigationCacheElement → IEquatable。成员构成以方法为主（方法 6/10，属性 3/10），对外主要以操作入口暴露。继承链上的 IEquatable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PortPosition` | `public CampaignVec2 PortPosition` | 属性 |
| `GatePosition` | `public CampaignVec2 GatePosition` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `NavigationCacheElement` | `public NavigationCacheElement(T settlement, bool isPortUsed)` | 构造函数 |
| `Sort` | `public static void Sort(ref NavigationCacheElement<T>settlement1, ref NavigationCacheElement<T>settlement2, out bool isPairChanged)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(NavigationCacheElement<T>other)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ISettlementDataHolder](../ISettlementDataHolder/)
- [同命名空间 NavigationCache](../NavigationCache__1/)
- [同命名空间 SandBoxNavigationCache](../SandBoxNavigationCache/)
