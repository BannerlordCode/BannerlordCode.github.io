---
title: "BarberState"
description: "BarberState：TaleWorlds.CampaignSystem 的 public 类，继承 GameState；公开成员 4 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/GameState/BarberState.cs。"
---
# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BarberState.cs`

## 概述

BarberState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/BarberState.cs。它是一个 public 类，实现/继承 GameState，继承链为 BarberState → GameState。public/protected 成员共 4 个：2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarberState 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameState），继承链 BarberState → GameState。成员构成以属性为主（属性 2/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 GameState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/BarberState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `Filter` | `public IFaceGeneratorCustomFilter Filter` | 属性 |
| `BarberState` | `public BarberState()` | 构造函数 |
| `BarberState` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorState](../BannerEditorState)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState)
- [同命名空间 ClanState](../ClanState)
- [同命名空间 CraftingState](../CraftingState)
