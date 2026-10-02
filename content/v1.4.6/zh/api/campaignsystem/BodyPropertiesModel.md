---
title: "BodyPropertiesModel"
description: "BodyPropertiesModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<BodyPropertiesModel>；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs。"
---
# BodyPropertiesModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`

## 概述

BodyPropertiesModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BodyPropertiesModel>，继承链为 BodyPropertiesModel → MBGameModel。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyPropertiesModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 BodyPropertiesModel → MBGameModel。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `int[]GetHairIndicesForCulture` | `public abstract int[]GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture);` | 方法 |
| `int[]GetBeardIndicesForCulture` | `public abstract int[]GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture);` | 方法 |
| `int[]GetTattooIndicesForCulture` | `public abstract int[]GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
