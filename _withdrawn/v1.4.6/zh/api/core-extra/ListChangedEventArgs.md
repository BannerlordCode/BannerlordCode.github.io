---
title: "ListChangedEventArgs"
description: "ListChangedEventArgs：TaleWorlds.Library 的 public 类，继承 EventArgs；公开成员 5 个（方法 0、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/ListChangedEventArgs.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ListChangedEventArgs

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ListChangedEventArgs : EventArgs`
**File:** `TaleWorlds.Library/ListChangedEventArgs.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

ListChangedEventArgs 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ListChangedEventArgs.cs。它是一个 public 类，实现/继承 EventArgs，继承链为 ListChangedEventArgs → EventArgs。public/protected 成员共 5 个：3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ListChangedEventArgs 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 ListChangedEventArgs → EventArgs。成员构成以属性为主（属性 3/5，方法 0/5），对外主要以状态读取接口暴露。继承链上的 EventArgs 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ListChangedEventArgs.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex)` | 构造函数 |
| `ListChangedEventArgs` | `public ListChangedEventArgs(ListChangedType listChangedType, int newIndex, int oldIndex)` | 构造函数 |
| `ListChangedType` | `public ListChangedType ListChangedType` | 属性 |
| `NewIndex` | `public int NewIndex` | 属性 |
| `OldIndex` | `public int OldIndex` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
