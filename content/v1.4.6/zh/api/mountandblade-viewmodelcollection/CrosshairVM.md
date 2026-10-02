---
title: "CrosshairVM"
description: "CrosshairVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 4、属性 14、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs。"
---
# CrosshairVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CrosshairVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs`

## 概述

CrosshairVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CrosshairVM → ViewModel。public/protected 成员共 19 个：4 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrosshairVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD），继承链 CrosshairVM → ViewModel。成员构成以属性为主（属性 14/19，方法 4/19），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs 的方法体或该类型的深写页确认。

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

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM)
- [同命名空间 MissionAgentLockItemVM](../MissionAgentLockItemVM)
