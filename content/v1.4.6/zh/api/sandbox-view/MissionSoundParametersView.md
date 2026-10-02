---
title: "MissionSoundParametersView"
description: "MissionSoundParametersView：SandBox.View 的 public 类，继承 MissionView；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 SandBox.View/Missions/MissionSoundParametersView.cs。"
---
# MissionSoundParametersView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionSoundParametersView : MissionView`
**File:** `SandBox.View/Missions/MissionSoundParametersView.cs`

## 概述

MissionSoundParametersView 位于 SandBox.View 模块，源文件 SandBox.View/Missions/MissionSoundParametersView.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionSoundParametersView → MissionView。public/protected 成员共 5 个：3 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSoundParametersView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions），继承链 MissionSoundParametersView → MissionView。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/MissionSoundParametersView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 方法 |
| `short` | `public enum SoundParameterMissionCulture : short` | 属性 |
| `short` | `public enum SoundParameterMissionCulture : short` | 嵌套类型 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [同命名空间 MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [同命名空间 MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [同命名空间 MissionAudienceHandler](../MissionAudienceHandler)
