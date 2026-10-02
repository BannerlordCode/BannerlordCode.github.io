---
title: "MissionMainAgentInteractionComponent"
description: "MissionMainAgentInteractionComponent：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 18 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs。"
---
# MissionMainAgentInteractionComponent

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionMainAgentInteractionComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs`

## 概述

MissionMainAgentInteractionComponent 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs。它是一个 public 类，继承链为 MissionMainAgentInteractionComponent。public/protected 成员共 18 个：9 方法、2 属性、3 事件、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentInteractionComponent 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews），继承链 MissionMainAgentInteractionComponent。成员构成以方法为主（方法 9/18，属性 2/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnFocusGained;` | `public event MissionMainAgentInteractionComponent.MissionFocusGainedEventDelegate OnFocusGained;` | 事件 |
| `OnFocusLost;` | `public event MissionMainAgentInteractionComponent.MissionFocusLostEventDelegate OnFocusLost;` | 事件 |
| `OnFocusHealthChanged;` | `public event MissionMainAgentInteractionComponent.MissionFocusHealthChangeDelegate OnFocusHealthChanged;` | 事件 |
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject` | 属性 |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine` | 属性 |
| `SetCurrentFocusedObject` | `public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)` | 方法 |
| `ClearFocus` | `public void ClearFocus()` | 方法 |
| `OnClearScene` | `public void OnClearScene()` | 方法 |
| `MissionMainAgentInteractionComponent` | `public MissionMainAgentInteractionComponent(MissionMainAgentController mainAgentController)` | 构造函数 |
| `FocusTick` | `public void FocusTick()` | 方法 |
| `FocusStateCheckTick` | `public void FocusStateCheckTick()` | 方法 |
| `FocusedItemHealthTick` | `public void FocusedItemHealthTick()` | 方法 |
| `MissionFocusGainedEventDelegate` | `public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable);` | 方法 |
| `MissionFocusLostEventDelegate` | `public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject);` | 方法 |
| `MissionFocusHealthChangeDelegate` | `public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull);` | 方法 |
| `MissionFocusGainedEventDelegate` | `public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)` | 嵌套类型 |
| `MissionFocusLostEventDelegate` | `public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)` | 嵌套类型 |
| `MissionFocusHealthChangeDelegate` | `public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)` | 嵌套类型 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView)
