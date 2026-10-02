---
title: "MissionAgentLockVisualizerVM"
description: "MissionAgentLockVisualizerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs。"
---
# MissionAgentLockVisualizerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentLockVisualizerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs`

## 概述

MissionAgentLockVisualizerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentLockVisualizerVM → ViewModel。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentLockVisualizerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD），继承链 MissionAgentLockVisualizerVM → ViewModel。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentLockVisualizerVM` | `public MissionAgentLockVisualizerVM()` | 构造函数 |
| `OnActiveLockAgentChange` | `public void OnActiveLockAgentChange(Agent oldAgent, Agent newAgent)` | 方法 |
| `OnPossibleLockAgentChange` | `public void OnPossibleLockAgentChange(Agent oldPossibleAgent, Agent newPossibleAgent)` | 方法 |
| `MBBindingList` | `public MBBindingList<MissionAgentLockItemVM>AllTrackedAgents` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [同命名空间 CrosshairVM](../CrosshairVM)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM)
