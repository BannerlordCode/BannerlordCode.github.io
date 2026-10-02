---
title: "SettlementAccessModel"
description: "SettlementAccessModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SettlementAccessModel>；公开成员 22 个（方法 6、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs。"
---
# SettlementAccessModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## 概述

SettlementAccessModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementAccessModel>，继承链为 SettlementAccessModel → MBGameModel。public/protected 成员共 22 个：6 方法、8 属性、8 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementAccessModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SettlementAccessModel → MBGameModel。成员构成以属性为主（属性 8/22，方法 6/22），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanMainHeroEnterSettlement` | `public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | 方法 |
| `CanMainHeroEnterLordsHall` | `public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | 方法 |
| `CanMainHeroEnterDungeon` | `public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | 方法 |
| `CanMainHeroAccessLocation` | `public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText);` | 方法 |
| `CanMainHeroDoSettlementAction` | `public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText);` | 方法 |
| `IsRequestMeetingOptionAvailable` | `public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText);` | 方法 |
| `AccessLevel` | `public enum AccessLevel` | 属性 |
| `AccessMethod` | `public enum AccessMethod` | 属性 |
| `AccessLimitationReason` | `public enum AccessLimitationReason` | 属性 |
| `LimitedAccessSolution` | `public enum LimitedAccessSolution` | 属性 |
| `PreliminaryActionObligation` | `public enum PreliminaryActionObligation` | 属性 |
| `PreliminaryActionType` | `public enum PreliminaryActionType` | 属性 |
| `SettlementAction` | `public enum SettlementAction` | 属性 |
| `AccessDetails` | `public struct AccessDetails` | 属性 |
| `AccessLevel` | `public enum AccessLevel` | 嵌套类型 |
| `AccessMethod` | `public enum AccessMethod` | 嵌套类型 |
| `AccessLimitationReason` | `public enum AccessLimitationReason` | 嵌套类型 |
| `LimitedAccessSolution` | `public enum LimitedAccessSolution` | 嵌套类型 |
| `PreliminaryActionObligation` | `public enum PreliminaryActionObligation` | 嵌套类型 |
| `PreliminaryActionType` | `public enum PreliminaryActionType` | 嵌套类型 |
| `SettlementAction` | `public enum SettlementAction` | 嵌套类型 |
| `AccessDetails` | `public struct AccessDetails` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
