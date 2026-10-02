---
title: "StandingPointWithVolumeBox"
description: "StandingPointWithVolumeBox：TaleWorlds.MountAndBlade 的 public 类，继承 StandingPointWithWeaponRequirement；公开成员 4 个（方法 2、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs。"
---
# StandingPointWithVolumeBox

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointWithVolumeBox : StandingPointWithWeaponRequirement`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs`

## 概述

StandingPointWithVolumeBox 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs。它是一个 public 类，实现/继承 StandingPointWithWeaponRequirement，继承链为 StandingPointWithVolumeBox → StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 4 个：2 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StandingPointWithVolumeBox 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 StandingPointWithVolumeBox → StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableScriptedFrameFlags` | `public override Agent.AIScriptedFrameFlags DisableScriptedFrameFlags` | 属性 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `VolumeBoxTag` | `public string VolumeBoxTag` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
