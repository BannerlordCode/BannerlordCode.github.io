---
title: "MissionAgentDamageFeedItemVM"
description: "MissionAgentDamageFeedItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs。"
---
# MissionAgentDamageFeedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentDamageFeedItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs`

## 概述

MissionAgentDamageFeedItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentDamageFeedItemVM → ViewModel。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentDamageFeedItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed），继承链 MissionAgentDamageFeedItemVM → ViewModel。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentDamageFeedItemVM` | `public MissionAgentDamageFeedItemVM(string feedText, Action<MissionAgentDamageFeedItemVM>onRemove)` | 构造函数 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `FeedText` | `public string FeedText` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionAgentDamageFeedVM](../MissionAgentDamageFeedVM)
