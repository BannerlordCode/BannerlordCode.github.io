---
title: "GauntletMenuOverlayBaseView"
description: "GauntletMenuOverlayBaseView：SandBox.GauntletUI 的 public 类，继承 MenuView；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 SandBox.GauntletUI/Menu/GauntletMenuOverlayBaseView.cs。"
---
# GauntletMenuOverlayBaseView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuOverlayBaseView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuOverlayBaseView.cs`

## 概述

GauntletMenuOverlayBaseView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Menu/GauntletMenuOverlayBaseView.cs。它是一个 public 类，实现/继承 MenuView，继承链为 GauntletMenuOverlayBaseView → MenuView。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMenuOverlayBaseView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Menu），继承链 GauntletMenuOverlayBaseView → MenuView。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MenuView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Menu/GauntletMenuOverlayBaseView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnHourlyTick` | `protected override void OnHourlyTick()` | 方法 |
| `OnOverlayTypeChange` | `protected override void OnOverlayTypeChange(GameMenu.MenuOverlayType newType)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | 方法 |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletMenuBackground](../GauntletMenuBackground)
- [同命名空间 GauntletMenuBaseView](../GauntletMenuBaseView)
- [同命名空间 GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView)
- [同命名空间 GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView)
