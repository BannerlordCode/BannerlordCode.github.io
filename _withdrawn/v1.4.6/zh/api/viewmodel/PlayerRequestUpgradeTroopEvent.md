---
title: "PlayerRequestUpgradeTroopEvent"
description: "PlayerRequestUpgradeTroopEvent：TaleWorlds.CampaignSystem.ViewModelCollection.Party 的 public 类，继承 EventBase；公开成员 4 个（方法 0、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerRequestUpgradeTroopEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PlayerRequestUpgradeTroopEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PlayerRequestUpgradeTroopEvent 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 PlayerRequestUpgradeTroopEvent → EventBase。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerRequestUpgradeTroopEvent 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，继承链 PlayerRequestUpgradeTroopEvent → EventBase。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerRequestUpgradeTroopEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SourceTroop` | `public CharacterObject SourceTroop` | 属性 |
| `TargetTroop` | `public CharacterObject TargetTroop` | 属性 |
| `Number` | `public int Number` | 属性 |
| `PlayerRequestUpgradeTroopEvent` | `public PlayerRequestUpgradeTroopEvent(CharacterObject sourceTroop, CharacterObject targetTroop, int num)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EventBase](../../core-extra/EventBase/)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM/)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM/)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM/)
- [同命名空间 PartyTradeVM](../PartyTradeVM/)
