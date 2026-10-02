---
title: "MissionCampaignView"
description: "MissionCampaignView：SandBox.View 的 public 类，继承 MissionView；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox.View/Missions/MissionCampaignView.cs。"
---
# MissionCampaignView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionCampaignView : MissionView`
**File:** `SandBox.View/Missions/MissionCampaignView.cs`

## 概述

MissionCampaignView 位于 SandBox.View 模块，源文件 SandBox.View/Missions/MissionCampaignView.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionCampaignView → MissionView。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionCampaignView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions），继承链 MissionCampaignView → MissionView。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/MissionCampaignView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionScreenPreLoad` | `public override void OnMissionScreenPreLoad()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `GetFaceAndHelmetInfoOfFollowedAgent` | `public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string>strings)` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [同命名空间 MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [同命名空间 MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [同命名空间 MissionAudienceHandler](../MissionAudienceHandler)
