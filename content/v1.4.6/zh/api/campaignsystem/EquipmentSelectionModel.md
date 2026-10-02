---
title: "EquipmentSelectionModel"
description: "EquipmentSelectionModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<EquipmentSelectionModel>；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs。"
---
# EquipmentSelectionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## 概述

EquipmentSelectionModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<EquipmentSelectionModel>，继承链为 EquipmentSelectionModel → MBGameModel。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EquipmentSelectionModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 EquipmentSelectionModel → MBGameModel。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEquipmentForHeroComeOfAge` | `public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType);` | 方法 |
| `GetEquipmentForHeroReachesTeenAge` | `public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero);` | 方法 |
| `GetEquipmentForInitialChildrenGeneration` | `public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero);` | 方法 |
| `GetEquipmentForDeliveredOffspring` | `public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero);` | 方法 |
| `Equipment>GetEquipmentsForChangingRuler` | `public abstract ValueTuple<Equipment, Equipment>GetEquipmentsForChangingRuler(Hero newRuler, Hero oldRuler, Equipment.EquipmentType equipmentType);` | 方法 |
| `GetEquipmentForCompanionWhenTurningToLord` | `public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
