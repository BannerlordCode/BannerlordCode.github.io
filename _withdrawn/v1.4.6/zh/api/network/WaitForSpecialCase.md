---
title: "WaitForSpecialCase"
description: "WaitForSpecialCase：TaleWorlds.Network 的 public 类，继承 CoroutineState；公开成员 4 个（方法 1、属性 1、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/WaitForSpecialCase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaitForSpecialCase

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class WaitForSpecialCase : CoroutineState`
**File:** `TaleWorlds.Network/WaitForSpecialCase.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

WaitForSpecialCase 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/WaitForSpecialCase.cs。它是一个 public 类，实现/继承 CoroutineState，继承链为 WaitForSpecialCase → CoroutineState。public/protected 成员共 4 个：1 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WaitForSpecialCase 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 WaitForSpecialCase → CoroutineState。成员构成以方法为主（方法 1/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/WaitForSpecialCase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WaitForSpecialCase` | `public WaitForSpecialCase(WaitForSpecialCase.IsConditionSatisfiedDelegate isConditionSatisfiedDelegate)` | 构造函数 |
| `IsFinished` | `protected internal override bool IsFinished` | 属性 |
| `IsConditionSatisfiedDelegate` | `public delegate bool IsConditionSatisfiedDelegate();` | 方法 |
| `IsConditionSatisfiedDelegate` | `public delegate bool IsConditionSatisfiedDelegate()` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CoroutineState](../CoroutineState/)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
