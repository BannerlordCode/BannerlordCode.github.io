---
title: "MBFastRandomSelector<T>"
description: "MBFastRandomSelector<T>：TaleWorlds.Core 的 public 类；公开成员 11 个（方法 4、属性 2、字段 2）。canonical 桶 core-extra。源文件 TaleWorlds.Core/MBFastRandomSelector.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBFastRandomSelector<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBFastRandomSelector<T>`
**File:** `TaleWorlds.Core/MBFastRandomSelector.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

MBFastRandomSelector<T> 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBFastRandomSelector.cs。它是一个 public 类，继承链为 MBFastRandomSelector。public/protected 成员共 11 个：4 方法、2 属性、2 字段、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBFastRandomSelector<T> 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 MBFastRandomSelector。成员构成以方法为主（方法 4/11，属性 2/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBFastRandomSelector.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemainingCount` | `public ushort RemainingCount` | 属性 |
| `MBFastRandomSelector` | `public MBFastRandomSelector(ushort capacity = 32)` | 构造函数 |
| `MBFastRandomSelector` | `public MBFastRandomSelector(MBReadOnlyList<T>list, ushort capacity = 32)` | 构造函数 |
| `Initialize` | `public void Initialize(MBReadOnlyList<T>list)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `Pack` | `public void Pack()` | 方法 |
| `SelectRandom` | `public bool SelectRandom(out T selection, Predicate<T>conditions = null)` | 方法 |
| `MinimumCapacity` | `public const ushort MinimumCapacity` | 字段 |
| `MaximumCapacity` | `public const ushort MaximumCapacity` | 字段 |
| `IndexEntry` | `public struct IndexEntry` | 属性 |
| `IndexEntry` | `public struct IndexEntry` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
