---
title: "WindMill"
description: "WindMill：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 8 个（方法 6、属性 0、字段 2）。源文件 TaleWorlds.MountAndBlade/WindMill.cs。"
---
# WindMill

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WindMill : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WindMill.cs`

## 概述

WindMill 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/WindMill.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 WindMill → ScriptComponentBehavior。public/protected 成员共 8 个：6 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WindMill 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 WindMill → ScriptComponentBehavior。成员构成以方法为主（方法 6/8，属性 0/8），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/WindMill.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetIntegerFromStringEnd` | `public static int GetIntegerFromStringEnd(string str)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `rotationSpeed` | `public float rotationSpeed` | 字段 |
| `waterSplashIntervalMultiplier` | `public float waterSplashIntervalMultiplier` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
