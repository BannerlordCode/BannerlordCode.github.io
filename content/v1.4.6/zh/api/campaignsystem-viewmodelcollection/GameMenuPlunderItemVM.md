---
title: "GameMenuPlunderItemVM"
description: "GameMenuPlunderItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs。"
---
# GameMenuPlunderItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuPlunderItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs`

## 概述

GameMenuPlunderItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuPlunderItemVM → ViewModel。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuPlunderItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu），继承链 GameMenuPlunderItemVM → ViewModel。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuPlunderItemVM` | `public GameMenuPlunderItemVM(EquipmentElement item, int amount = 1)` | 构造函数 |
| `ExecuteBeginTooltip` | `public void ExecuteBeginTooltip()` | 方法 |
| `ExecuteEndTooltip` | `public void ExecuteEndTooltip()` | 方法 |
| `Visual` | `public ItemImageIdentifierVM Visual` | 属性 |
| `Amount` | `public int Amount` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenuItemProgressVM](../GameMenuItemProgressVM)
- [同命名空间 GameMenuItemVM](../GameMenuItemVM)
- [同命名空间 GameMenuVM](../GameMenuVM)
