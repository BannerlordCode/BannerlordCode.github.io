---
title: "MenuCallbackArgs"
description: "MenuCallbackArgs：TaleWorlds.CampaignSystem 的 public 类；公开成员 6 个（方法 0、属性 2、字段 1）。源文件 TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs。"
---
# MenuCallbackArgs

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MenuCallbackArgs`
**File:** `TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs`

## 概述

MenuCallbackArgs 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs。它是一个 public 类，继承链为 MenuCallbackArgs。public/protected 成员共 6 个：2 属性、1 字段、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MenuCallbackArgs 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameMenus），继承链 MenuCallbackArgs。成员构成以属性为主（属性 2/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | 属性 |
| `MapState` | `public MapState MapState` | 属性 |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MenuContext menuContext, TextObject text)` | 构造函数 |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MapState mapState, TextObject text)` | 构造函数 |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MapState mapState, TextObject text, float dt)` | 构造函数 |
| `IsEnabled` | `public bool IsEnabled` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenu](../GameMenu)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager)
- [同命名空间 GameMenuEventHandler](../GameMenuEventHandler)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
