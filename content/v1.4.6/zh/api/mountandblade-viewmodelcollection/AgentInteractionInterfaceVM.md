---
title: "AgentInteractionInterfaceVM"
description: "AgentInteractionInterfaceVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 22 个（方法 10、属性 11、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs。"
---
# AgentInteractionInterfaceVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs`

## 概述

AgentInteractionInterfaceVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 AgentInteractionInterfaceVM → ViewModel。public/protected 成员共 22 个：10 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentInteractionInterfaceVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction），继承链 AgentInteractionInterfaceVM → ViewModel。成员构成以属性为主（属性 11/22，方法 10/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentInteractionInterfaceVM` | `public AgentInteractionInterfaceVM(Mission mission)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnFocusedHealthChanged` | `public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)` | 方法 |
| `OnActiveMissionHintChanged` | `public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)` | 方法 |
| `AddSecondaryMessage` | `public void AddSecondaryMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `RemoveSecondaryMessage` | `public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `HasSecondaryInteractionMessage` | `public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)` | 方法 |
| `ResetFocus` | `public void ResetFocus()` | 方法 |
| `SetForcedInteractionTexts` | `public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)` | 方法 |
| `ClearForcedInteractionTexts` | `public void ClearForcedInteractionTexts()` | 方法 |
| `TargetHealth` | `public int TargetHealth` | 属性 |
| `ShowHealthBar` | `public bool ShowHealthBar` | 属性 |
| `MBBindingList` | `public MBBindingList<MissionPrimaryInteractionItemVM>PrimaryInteractionMessages` | 属性 |
| `MBBindingList` | `public MBBindingList<MissionInteractionItemBaseVM>SecondaryInteractionMessages` | 属性 |
| `BackgroundColor` | `public string BackgroundColor` | 属性 |
| `TextColor` | `public string TextColor` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages` | 属性 |
| `DisplayInteractionText` | `public bool DisplayInteractionText` | 属性 |
| `MBBindingList` | `public MBBindingList<MissionPrimaryInteractionItemVM>ForcedInteractionMessages` | 属性 |
| `HasForcedMessages` | `public bool HasForcedMessages` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IInteractionInterfaceHandler](../IInteractionInterfaceHandler)
