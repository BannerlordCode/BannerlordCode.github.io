---
title: "MissionGenericInteractionItemVM"
description: "MissionGenericInteractionItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems 的 public 类，继承 MissionInteractionItemBaseVM；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGenericInteractionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionGenericInteractionItemVM : MissionInteractionItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionGenericInteractionItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs。它是一个 public 类，实现/继承 MissionInteractionItemBaseVM，继承链为 MissionGenericInteractionItemVM → MissionInteractionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGenericInteractionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`，继承链 MissionGenericInteractionItemVM → MissionInteractionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetData` | `public void SetData(TextObject message, bool isDisabled = false)` | 方法 |
| `ResetData` | `public void ResetData()` | 方法 |
| `OnSetData` | `protected virtual void OnSetData(TextObject message, bool isDisabled)` | 方法 |
| `OnResetData` | `protected virtual void OnResetData()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM/)
- [同命名空间 MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM/)
- [同命名空间 MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM/)
