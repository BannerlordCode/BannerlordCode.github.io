---
title: "MissionSpectatorControlVM"
description: "MissionSpectatorControlVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 ViewModel；公开成员 20 个（方法 8、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSpectatorControlVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionSpectatorControlVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionSpectatorControlVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：8 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSpectatorControlVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 MissionSpectatorControlVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/20，方法 8/20），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionSpectatorControlVM` | `public MissionSpectatorControlVM(Mission mission)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSpectatedAgentFocusIn` | `public void OnSpectatedAgentFocusIn(Agent followedAgent)` | 方法 |
| `OnSpectatedAgentFocusOut` | `public void OnSpectatedAgentFocusOut(Agent followedAgent)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetMainAgentStatus` | `public void SetMainAgentStatus(bool isDead)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `PrevCharacterText` | `public string PrevCharacterText` | 属性 |
| `NextCharacterText` | `public string NextCharacterText` | 属性 |
| `TakeControlText` | `public string TakeControlText` | 属性 |
| `StatusText` | `public string StatusText` | 属性 |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant` | 属性 |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled` | 属性 |
| `SetPrevCharacterInputKey` | `public void SetPrevCharacterInputKey(GameKey gameKey)` | 方法 |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(GameKey gameKey)` | 方法 |
| `SetTakeControlInputKey` | `public void SetTakeControlInputKey(GameKey gameKey)` | 方法 |
| `SpectatedAgentName` | `public string SpectatedAgentName` | 属性 |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey` | 属性 |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey` | 属性 |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [同命名空间 CrosshairVM](../CrosshairVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
