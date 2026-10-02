---
title: "GauntletClanScreen"
description: "GauntletClanScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 11 个（方法 9、属性 1、字段 0）。源文件 SandBox.GauntletUI/GauntletClanScreen.cs。"
---
# GauntletClanScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletClanScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletClanScreen.cs`

## 概述

GauntletClanScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/GauntletClanScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 GauntletClanScreen → ScreenBase。public/protected 成员共 11 个：9 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletClanScreen 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletClanScreen → ScreenBase。成员构成以方法为主（方法 9/11，属性 1/11），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/GauntletClanScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_dataSource` | `public ClanManagementVM _dataSource` | 属性 |
| `GauntletClanScreen` | `public GauntletClanScreen(ClanState clanState)` | 构造函数 |
| `CreateDataSource` | `protected virtual ClanManagementVM CreateDataSource()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `IsRoleSelectionPopupActive` | `protected bool IsRoleSelectionPopupActive()` | 方法 |
| `OpenPartyScreenForNewClanParty` | `protected void OpenPartyScreenForNewClanParty(Hero hero)` | 方法 |
| `OpenBannerEditorWithPlayerClan` | `protected void OpenBannerEditorWithPlayerClan()` | 方法 |
| `ShowHeroOnMap` | `protected void ShowHeroOnMap(Hero hero)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `CloseClanScreen` | `protected void CloseClanScreen()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen)
- [同命名空间 GauntletEducationScreen](../GauntletEducationScreen)
