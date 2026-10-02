---
title: "TacticFullScaleAttack"
description: "TacticFullScaleAttack：TaleWorlds.MountAndBlade 的 public 类，继承 TacticComponent；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/TacticFullScaleAttack.cs。"
---
# TacticFullScaleAttack

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticFullScaleAttack : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticFullScaleAttack.cs`

## 概述

TacticFullScaleAttack 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TacticFullScaleAttack.cs。它是一个 public 类，实现/继承 TacticComponent，继承链为 TacticFullScaleAttack → TacticComponent。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TacticFullScaleAttack 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TacticFullScaleAttack → TacticComponent。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TacticFullScaleAttack.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TacticFullScaleAttack` | `public TacticFullScaleAttack(Team team) : base(team)` | 构造函数 |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | 方法 |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | 方法 |
| `TickOccasionally` | `public override void TickOccasionally()` | 方法 |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TacticComponent](../TacticComponent)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
