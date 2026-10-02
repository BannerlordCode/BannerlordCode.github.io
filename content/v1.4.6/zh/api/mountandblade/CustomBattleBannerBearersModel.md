---
title: "CustomBattleBannerBearersModel"
description: "CustomBattleBannerBearersModel：TaleWorlds.MountAndBlade 的 public 类，继承 BattleBannerBearersModel；公开成员 9 个（方法 9、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs。"
---
# CustomBattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## 概述

CustomBattleBannerBearersModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs。它是一个 public 类，实现/继承 BattleBannerBearersModel，继承链为 CustomBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleBannerBearersModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMinimumFormationTroopCountToBearBanners` | `public override int GetMinimumFormationTroopCountToBearBanners()` | 方法 |
| `GetBannerInteractionDistance` | `public override float GetBannerInteractionDistance(Agent interactingAgent)` | 方法 |
| `CanBannerBearerProvideEffectToFormation` | `public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)` | 方法 |
| `CanAgentPickUpAnyBanner` | `public override bool CanAgentPickUpAnyBanner(Agent agent)` | 方法 |
| `CanAgentBecomeBannerBearer` | `public override bool CanAgentBecomeBannerBearer(Agent agent)` | 方法 |
| `GetAgentBannerBearingPriority` | `public override int GetAgentBannerBearingPriority(Agent agent)` | 方法 |
| `CanFormationDeployBannerBearers` | `public override bool CanFormationDeployBannerBearers(Formation formation)` | 方法 |
| `GetDesiredNumberOfBannerBearersForFormation` | `public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)` | 方法 |
| `GetBannerBearerReplacementWeapon` | `public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BattleBannerBearersModel](../BattleBannerBearersModel)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
