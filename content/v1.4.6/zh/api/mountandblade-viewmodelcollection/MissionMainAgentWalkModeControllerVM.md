---
title: "MissionMainAgentWalkModeControllerVM"
description: "MissionMainAgentWalkModeControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 7、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs。"
---
# MissionMainAgentWalkModeControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs`

## 概述

MissionMainAgentWalkModeControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionMainAgentWalkModeControllerVM → ViewModel。public/protected 成员共 14 个：7 方法、3 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentWalkModeControllerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode），继承链 MissionMainAgentWalkModeControllerVM → ViewModel。成员构成以方法为主（方法 7/14，属性 3/14），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionMainAgentWalkModeControllerVM` | `public MissionMainAgentWalkModeControllerVM()` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `AddWalkMode` | `public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)` | 方法 |
| `AddWalkMode` | `public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)` | 方法 |
| `SetEnabled` | `public void SetEnabled(bool isEnabled)` | 方法 |
| `MBBindingList` | `public MBBindingList<WalkModeItemVM>ControlModes` | 属性 |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `GetIsWalkModeActivatedDelegate` | `public delegate bool GetIsWalkModeActivatedDelegate();` | 方法 |
| `SetIsWalkModeActivatedDelegate` | `public delegate void SetIsWalkModeActivatedDelegate(bool value);` | 方法 |
| `GetCanChangeWalkModeActivatedDelegate` | `public delegate bool GetCanChangeWalkModeActivatedDelegate();` | 方法 |
| `GetIsWalkModeActivatedDelegate` | `public delegate bool GetIsWalkModeActivatedDelegate()` | 嵌套类型 |
| `SetIsWalkModeActivatedDelegate` | `public delegate void SetIsWalkModeActivatedDelegate(bool value)` | 嵌套类型 |
| `GetCanChangeWalkModeActivatedDelegate` | `public delegate bool GetCanChangeWalkModeActivatedDelegate()` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 WalkModeItemVM](../WalkModeItemVM)
