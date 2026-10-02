---
title: "StandingPointWithWeaponRequirement"
description: "StandingPointWithWeaponRequirement：TaleWorlds.MountAndBlade 的 public 类，继承 StandingPoint；公开成员 9 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs。"
---
# StandingPointWithWeaponRequirement

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## 概述

StandingPointWithWeaponRequirement 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs。它是一个 public 类，实现/继承 StandingPoint，继承链为 StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StandingPointWithWeaponRequirement 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StandingPointWithWeaponRequirement` | `public StandingPointWithWeaponRequirement()` | 构造函数 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `InitRequiredWeaponClasses` | `public void InitRequiredWeaponClasses(WeaponClass[]requiredWeaponClasses)` | 方法 |
| `InitRequiredWeapon` | `public void InitRequiredWeapon(ItemObject weapon)` | 方法 |
| `InitGivenWeapon` | `public void InitGivenWeapon(ItemObject weapon)` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `SetHasAlternative` | `public void SetHasAlternative(bool hasAlternative)` | 方法 |
| `HasAlternative` | `public override bool HasAlternative()` | 方法 |
| `SetUsingBattleSide` | `public void SetUsingBattleSide(BattleSideEnum side)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 StandingPoint](../StandingPoint)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
