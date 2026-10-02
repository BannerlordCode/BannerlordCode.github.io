---
title: "CrosshairVM"
description: "CrosshairVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 ViewModel；公开成员 19 个（方法 4、属性 14、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CrosshairVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CrosshairVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

CrosshairVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CrosshairVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：4 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrosshairVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 CrosshairVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 14/19，方法 4/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CrosshairVM` | `public CrosshairVM()` | 构造函数 |
| `SetProperties` | `public void SetProperties(double accuracy, double scale)` | 方法 |
| `SetArrowProperties` | `public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)` | 方法 |
| `SetReloadProperties` | `public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)` | 方法 |
| `ShowHitMarker` | `public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)` | 方法 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `IsReloadPhasesVisible` | `public bool IsReloadPhasesVisible` | 属性 |
| `IsHitMarkerVisible` | `public bool IsHitMarkerVisible` | 属性 |
| `IsVictimDead` | `public bool IsVictimDead` | 属性 |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot` | 属性 |
| `TopArrowOpacity` | `public double TopArrowOpacity` | 属性 |
| `MBBindingList` | `public MBBindingList<ReloadPhaseItemVM>ReloadPhases` | 属性 |
| `BottomArrowOpacity` | `public double BottomArrowOpacity` | 属性 |
| `RightArrowOpacity` | `public double RightArrowOpacity` | 属性 |
| `LeftArrowOpacity` | `public double LeftArrowOpacity` | 属性 |
| `IsTargetInvalid` | `public bool IsTargetInvalid` | 属性 |
| `CrosshairAccuracy` | `public double CrosshairAccuracy` | 属性 |
| `CrosshairScale` | `public double CrosshairScale` | 属性 |
| `CrosshairType` | `public int CrosshairType` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
- [同命名空间 MissionAgentLockItemVM](../MissionAgentLockItemVM/)
