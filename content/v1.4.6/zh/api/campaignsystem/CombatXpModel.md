---
title: "CombatXpModel"
description: "CombatXpModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<CombatXpModel>；公开成员 6 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs。"
---
# CombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`

## 概述

CombatXpModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CombatXpModel>，继承链为 CombatXpModel → MBGameModel。public/protected 成员共 6 个：3 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CombatXpModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 CombatXpModel → MBGameModel。成员构成以方法为主（方法 3/6，属性 2/6），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSkillForWeapon` | `public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit);` | 方法 |
| `GetXpFromHit` | `public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType);` | 方法 |
| `GetXpMultiplierFromShotDifficulty` | `public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty);` | 方法 |
| `CaptainRadius` | `public abstract float CaptainRadius` | 属性 |
| `MissionTypeEnum` | `public enum MissionTypeEnum` | 属性 |
| `MissionTypeEnum` | `public enum MissionTypeEnum` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
