---
title: "MapParleyAnimationVM"
description: "MapParleyAnimationVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapParleyAnimationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapParleyAnimationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MapParleyAnimationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapParleyAnimationVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapParleyAnimationVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley`，继承链 MapParleyAnimationVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapParleyAnimationVM` | `public MapParleyAnimationVM(PartyBase parleyedParty, float animationDuration)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ParleyText` | `public string ParleyText` | 属性 |
| `AnimationDuration` | `public float AnimationDuration` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
