---
title: "HasTableauCache"
description: "HasTableauCache：TaleWorlds.Engine 的 public 类，继承 Attribute；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/HasTableauCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HasTableauCache

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class HasTableauCache : Attribute`
**File:** `TaleWorlds.Engine/HasTableauCache.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

HasTableauCache 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/HasTableauCache.cs。它是一个 public 类，实现/继承 Attribute，继承链为 HasTableauCache → Attribute。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HasTableauCache 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 HasTableauCache → Attribute。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/HasTableauCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TableauCacheType` | `public Type TableauCacheType` | 属性 |
| `MaterialCacheIDGetType` | `public Type MaterialCacheIDGetType` | 属性 |
| `HasTableauCache` | `public HasTableauCache(Type tableauCacheType, Type materialCacheIDGetType)` | 构造函数 |
| `CollectTableauCacheTypes` | `public static void CollectTableauCacheTypes()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
