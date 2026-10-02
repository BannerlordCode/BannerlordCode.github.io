---
title: "InitialState"
description: "InitialState：TaleWorlds.MountAndBlade 的 public 类，继承 GameState；公开成员 7 个（方法 4、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/InitialState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class InitialState : GameState`
**File:** `TaleWorlds.MountAndBlade/InitialState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

InitialState 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/InitialState.cs。它是一个 public 类，实现/继承 GameState，继承链为 InitialState → GameState → MBObjectBase。public/protected 成员共 7 个：4 方法、1 属性、2 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InitialState 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 InitialState → GameState → MBObjectBase。成员构成以方法为主（方法 4/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/InitialState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | 属性 |
| `OnInitialMenuOptionInvoked;` | `public event OnInitialMenuOptionInvokedDelegate OnInitialMenuOptionInvoked;` | 事件 |
| `OnGameContentUpdated;` | `public event OnGameContentUpdatedDelegate OnGameContentUpdated;` | 事件 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnExecutedInitialStateOption` | `public void OnExecutedInitialStateOption(InitialStateOption target)` | 方法 |
| `RefreshContentState` | `public void RefreshContentState()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
