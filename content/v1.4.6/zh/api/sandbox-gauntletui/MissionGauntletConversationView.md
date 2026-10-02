---
title: "MissionGauntletConversationView"
description: "MissionGauntletConversationView：SandBox.GauntletUI 的 public 类，继承 MissionView、IConversationStateHandler；公开成员 7 个（方法 5、属性 1、字段 0）。源文件 SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs。"
---
# MissionGauntletConversationView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs`

## 概述

MissionGauntletConversationView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs。它是一个 public 类，实现/继承 MissionView、IConversationStateHandler，继承链为 MissionGauntletConversationView → MissionView。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletConversationView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Missions），继承链 MissionGauntletConversationView → MissionView。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler` | 属性 |
| `MissionGauntletConversationView` | `public MissionGauntletConversationView()` | 构造函数 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | 方法 |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [同命名空间 MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [同命名空间 MissionGauntletBarterView](../MissionGauntletBarterView)
- [同命名空间 MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
