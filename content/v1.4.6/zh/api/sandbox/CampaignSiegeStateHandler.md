---
title: "CampaignSiegeStateHandler"
description: "CampaignSiegeStateHandler：SandBox 的 public 类，继承 MissionLogic；公开成员 8 个（方法 4、属性 3、字段 0）。源文件 SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs。"
---
# CampaignSiegeStateHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs`

## 概述

CampaignSiegeStateHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 CampaignSiegeStateHandler → MissionLogic。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignSiegeStateHandler 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 CampaignSiegeStateHandler → MissionLogic。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSiege` | `public bool IsSiege` | 属性 |
| `IsSallyOut` | `public bool IsSallyOut` | 属性 |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `CampaignSiegeStateHandler` | `public CampaignSiegeStateHandler()` | 构造函数 |
| `OnRetreatMission` | `public override void OnRetreatMission()` | 方法 |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | 方法 |
| `OnSurrenderMission` | `public override void OnSurrenderMission()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CombatMissionWithDialogueController](../CombatMissionWithDialogueController)
