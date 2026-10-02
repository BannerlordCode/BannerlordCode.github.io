---
title: "MilitaryPowerModel"
description: "MilitaryPowerModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MilitaryPowerModel>；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MilitaryPowerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MilitaryPowerModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MilitaryPowerModel>，继承链为 MilitaryPowerModel → MBGameModel → GameModel。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MilitaryPowerModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MilitaryPowerModel → MBGameModel → GameModel。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTroopPower` | `public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier);` | 方法 |
| `GetPowerOfParty` | `public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context);` | 方法 |
| `GetContextModifier` | `public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context);` | 方法 |
| `GetContextModifier` | `public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context);` | 方法 |
| `GetContextForPosition` | `public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position);` | 方法 |
| `GetDefaultTroopPower` | `public abstract float GetDefaultTroopPower(CharacterObject troop);` | 方法 |
| `GetPowerModifierOfHero` | `public abstract float GetPowerModifierOfHero(Hero leaderHero);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
