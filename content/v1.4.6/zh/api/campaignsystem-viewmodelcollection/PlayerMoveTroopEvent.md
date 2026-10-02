---
title: "PlayerMoveTroopEvent"
description: "PlayerMoveTroopEvent：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EventBase；公开成员 6 个（方法 0、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs。"
---
# PlayerMoveTroopEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PlayerMoveTroopEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs`

## 概述

PlayerMoveTroopEvent 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 PlayerMoveTroopEvent → EventBase。public/protected 成员共 6 个：5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerMoveTroopEvent 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PlayerMoveTroopEvent → EventBase。成员构成以属性为主（属性 5/6，方法 0/6），对外主要以状态读取接口暴露。继承链上的 EventBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PlayerMoveTroopEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Troop` | `public CharacterObject Troop` | 属性 |
| `Amount` | `public int Amount` | 属性 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `FromSide` | `public PartyScreenLogic.PartyRosterSide FromSide` | 属性 |
| `ToSide` | `public PartyScreenLogic.PartyRosterSide ToSide` | 属性 |
| `PlayerMoveTroopEvent` | `public PlayerMoveTroopEvent(CharacterObject troop, PartyScreenLogic.PartyRosterSide fromSide, PartyScreenLogic.PartyRosterSide toSide, int amount, bool isPrisoner)` | 构造函数 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM)
- [同命名空间 PartyTradeVM](../PartyTradeVM)
