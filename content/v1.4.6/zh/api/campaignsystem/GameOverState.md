---
title: "GameOverState"
description: "GameOverState：TaleWorlds.CampaignSystem 的 public 类，继承 GameState；公开成员 10 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/GameState/GameOverState.cs。"
---
# GameOverState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameOverState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/GameOverState.cs`

## 概述

GameOverState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/GameOverState.cs。它是一个 public 类，实现/继承 GameState，继承链为 GameOverState → GameState。public/protected 成员共 10 个：3 方法、4 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameOverState 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameState），继承链 GameOverState → GameState。成员构成以属性为主（属性 4/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 GameState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/GameOverState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `Handler` | `public IGameOverStateHandler Handler` | 属性 |
| `Reason` | `public GameOverState.GameOverReason Reason` | 属性 |
| `GameOverState` | `public GameOverState()` | 构造函数 |
| `GameOverState` | `public GameOverState(GameOverState.GameOverReason reason)` | 构造函数 |
| `CreateForVictory` | `public static GameOverState CreateForVictory()` | 方法 |
| `CreateForRetirement` | `public static GameOverState CreateForRetirement()` | 方法 |
| `CreateForClanDestroyed` | `public static GameOverState CreateForClanDestroyed()` | 方法 |
| `GameOverReason` | `public enum GameOverReason` | 属性 |
| `GameOverReason` | `public enum GameOverReason` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorState](../BannerEditorState)
- [同命名空间 BarberState](../BarberState)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState)
- [同命名空间 ClanState](../ClanState)
