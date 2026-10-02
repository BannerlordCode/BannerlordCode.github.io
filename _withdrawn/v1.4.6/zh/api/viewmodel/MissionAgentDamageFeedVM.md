---
title: "MissionAgentDamageFeedVM"
description: "MissionAgentDamageFeedVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed 的 public 类，继承 ViewModel；公开成员 3 个（方法 1、属性 1、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentDamageFeedVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentDamageFeedVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionAgentDamageFeedVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentDamageFeedVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentDamageFeedVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed`，继承链 MissionAgentDamageFeedVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentDamageFeedVM` | `public MissionAgentDamageFeedVM()` | 构造函数 |
| `OnMainAgentHit` | `public void OnMainAgentHit(float damage)` | 方法 |
| `MBBindingList` | `public MBBindingList<MissionAgentDamageFeedItemVM>FeedList` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MissionAgentDamageFeedItemVM](../MissionAgentDamageFeedItemVM/)
