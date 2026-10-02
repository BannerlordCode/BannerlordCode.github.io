---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView：SandBox.GauntletUI 的 public 类，继承 MenuView；公开成员 12 个（方法 11、属性 1、字段 0）。源文件 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs。"
---
# GauntletMenuBaseView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuBaseView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`

## 概述

GauntletMenuBaseView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs。它是一个 public 类，实现/继承 MenuView，继承链为 GauntletMenuBaseView → MenuView。public/protected 成员共 12 个：11 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMenuBaseView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Menu），继承链 GauntletMenuBaseView → MenuView。成员构成以方法为主（方法 11/12，属性 1/12），对外主要以操作入口暴露。继承链上的 MenuView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource` | 属性 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnResume` | `protected override void OnResume()` | 方法 |
| `OnMenuContextRefreshed` | `protected override void OnMenuContextRefreshed()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | 方法 |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | 方法 |
| `OnMenuContextUpdated` | `protected override void OnMenuContextUpdated(MenuContext newMenuContext)` | 方法 |
| `OnBackgroundMeshNameSet` | `protected override void OnBackgroundMeshNameSet(string name)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletMenuBackground](../GauntletMenuBackground)
- [同命名空间 GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView)
- [同命名空间 GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView)
- [同命名空间 GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView)
