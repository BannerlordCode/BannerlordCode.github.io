---
title: "KingdomState"
description: "KingdomState：TaleWorlds.CampaignSystem.GameState 的 public 类，继承 GameState；公开成员 14 个（方法 0、属性 8、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameState/KingdomState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/KingdomState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

KingdomState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/KingdomState.cs。它是一个 public 类，实现/继承 GameState，继承链为 KingdomState → GameState → MBObjectBase。public/protected 成员共 14 个：8 属性、6 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomState 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameState`，继承链 KingdomState → GameState → MBObjectBase。成员构成以属性为主（属性 8/14，方法 0/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/KingdomState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `InitialSelectedArmy` | `public Army InitialSelectedArmy` | 属性 |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement` | 属性 |
| `InitialSelectedClan` | `public Clan InitialSelectedClan` | 属性 |
| `InitialSelectedPolicy` | `public PolicyObject InitialSelectedPolicy` | 属性 |
| `InitialSelectedKingdom` | `public Kingdom InitialSelectedKingdom` | 属性 |
| `InitialSelectedDecision` | `public KingdomDecision InitialSelectedDecision` | 属性 |
| `Handler` | `public IKingdomStateHandler Handler` | 属性 |
| `KingdomState` | `public KingdomState()` | 构造函数 |
| `KingdomState` | `public KingdomState(KingdomDecision initialSelectedDecision)` | 构造函数 |
| `KingdomState` | `public KingdomState(Army initialSelectedArmy)` | 构造函数 |
| `KingdomState` | `public KingdomState(Settlement initialSelectedSettlement)` | 构造函数 |
| `KingdomState` | `public KingdomState(IFaction initialSelectedFaction)` | 构造函数 |
| `KingdomState` | `public KingdomState(PolicyObject initialSelectedPolicy)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 BannerEditorState](../BannerEditorState/)
- [同命名空间 BarberState](../BarberState/)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState/)
- [同命名空间 ClanState](../ClanState/)
