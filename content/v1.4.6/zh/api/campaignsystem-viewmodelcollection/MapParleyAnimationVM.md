---
title: "MapParleyAnimationVM"
description: "MapParleyAnimationVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs。"
---
# MapParleyAnimationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapParleyAnimationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs`

## 概述

MapParleyAnimationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapParleyAnimationVM → ViewModel。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapParleyAnimationVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley），继承链 MapParleyAnimationVM → ViewModel。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapParleyAnimationVM` | `public MapParleyAnimationVM(PartyBase parleyedParty, float animationDuration)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ParleyText` | `public string ParleyText` | 属性 |
| `AnimationDuration` | `public float AnimationDuration` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
