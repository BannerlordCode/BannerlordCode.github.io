---
title: "ClanState"
description: "ClanState：TaleWorlds.CampaignSystem 的 public 类，继承 GameState；公开成员 13 个（方法 0、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/GameState/ClanState.cs。"
---
# ClanState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ClanState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/ClanState.cs`

## 概述

ClanState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/ClanState.cs。它是一个 public 类，实现/继承 GameState，继承链为 ClanState → GameState。public/protected 成员共 13 个：7 属性、6 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanState 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameState），继承链 ClanState → GameState。成员构成以属性为主（属性 7/13，方法 0/13），对外主要以状态读取接口暴露。继承链上的 GameState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/ClanState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `InitialSelectedHero` | `public Hero InitialSelectedHero` | 属性 |
| `InitialSelectedParty` | `public PartyBase InitialSelectedParty` | 属性 |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement` | 属性 |
| `InitialSelectedWorkshop` | `public Workshop InitialSelectedWorkshop` | 属性 |
| `InitialSelectedAlley` | `public Alley InitialSelectedAlley` | 属性 |
| `Handler` | `public IClanStateHandler Handler` | 属性 |
| `ClanState` | `public ClanState()` | 构造函数 |
| `ClanState` | `public ClanState(Hero initialSelectedHero)` | 构造函数 |
| `ClanState` | `public ClanState(PartyBase initialSelectedParty)` | 构造函数 |
| `ClanState` | `public ClanState(Settlement initialSelectedSettlement)` | 构造函数 |
| `ClanState` | `public ClanState(Workshop initialSelectedWorkshop)` | 构造函数 |
| `ClanState` | `public ClanState(Alley initialSelectedAlley)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorState](../BannerEditorState)
- [同命名空间 BarberState](../BarberState)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState)
- [同命名空间 CraftingState](../CraftingState)
