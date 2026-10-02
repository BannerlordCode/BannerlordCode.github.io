---
title: "InitialStateOption"
description: "InitialStateOption：TaleWorlds.MountAndBlade 的 public 类；公开成员 8 个（方法 1、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/InitialStateOption.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialStateOption

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class InitialStateOption`
**File:** `TaleWorlds.MountAndBlade/InitialStateOption.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InitialStateOption 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/InitialStateOption.cs。它是一个 public 类，继承链为 InitialStateOption。public/protected 成员共 8 个：1 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InitialStateOption 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 InitialStateOption。成员构成以属性为主（属性 6/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/InitialStateOption.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderIndex` | `public int OrderIndex` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `Id` | `public string Id` | 属性 |
| `Func` | `public Func<bool>IsHidden` | 属性 |
| `TextObject>>IsDisabledAndReason` | `public Func<ValueTuple<bool, TextObject>>IsDisabledAndReason` | 属性 |
| `EnabledHint` | `public TextObject EnabledHint` | 属性 |
| `InitialStateOption` | `public InitialStateOption(string id, TextObject name, int orderIndex, Action action, Func<ValueTuple<bool, TextObject>>isDisabledAndReason, TextObject enabledHint = null, Func<bool>isHidden = null)` | 构造函数 |
| `DoAction` | `public void DoAction()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
