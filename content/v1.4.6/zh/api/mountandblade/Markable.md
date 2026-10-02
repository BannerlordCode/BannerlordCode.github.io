---
title: "Markable"
description: "Markable：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 7 个（方法 6、属性 0、字段 1）。源文件 TaleWorlds.MountAndBlade/Markable.cs。"
---
# Markable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Markable : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Markable.cs`

## 概述

Markable 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Markable.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 Markable → ScriptComponentBehavior。public/protected 成员共 7 个：6 方法、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Markable 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 Markable → ScriptComponentBehavior。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Markable.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `DisableMarkerActivation` | `public void DisableMarkerActivation()` | 方法 |
| `ActivateMarkerFor` | `public void ActivateMarkerFor(float activeSeconds, float passiveSeconds)` | 方法 |
| `ResetPassiveDurationTimer` | `public void ResetPassiveDurationTimer()` | 方法 |
| `MarkerPrefabName` | `public string MarkerPrefabName` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
