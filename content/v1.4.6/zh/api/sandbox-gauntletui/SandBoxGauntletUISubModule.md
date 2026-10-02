---
title: "SandBoxGauntletUISubModule"
description: "SandBoxGauntletUISubModule：SandBox.GauntletUI 的 public 类，继承 MBSubModuleBase；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 SandBox.GauntletUI/SandBoxGauntletUISubModule.cs。"
---
# SandBoxGauntletUISubModule

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`
**File:** `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## 概述

SandBoxGauntletUISubModule 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/SandBoxGauntletUISubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 SandBoxGauntletUISubModule → MBSubModuleBase。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxGauntletUISubModule 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 SandBoxGauntletUISubModule → MBSubModuleBase。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MBSubModuleBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/SandBoxGauntletUISubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxGauntletUISubModule` | `public SandBoxGauntletUISubModule()` | 构造函数 |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | 方法 |
| `OnGameStart` | `protected override void OnGameStart(Game game, IGameStarter gameStarterObject)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | 方法 |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen)
