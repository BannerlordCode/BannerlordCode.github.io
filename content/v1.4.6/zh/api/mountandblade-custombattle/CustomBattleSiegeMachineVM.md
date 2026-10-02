---
title: "CustomBattleSiegeMachineVM"
description: "CustomBattleSiegeMachineVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs。"
---
# CustomBattleSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSiegeMachineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs`

## 概述

CustomBattleSiegeMachineVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CustomBattleSiegeMachineVM → ViewModel。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleSiegeMachineVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle），继承链 CustomBattleSiegeMachineVM → ViewModel。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeEngineType` | `public SiegeEngineType SiegeEngineType` | 属性 |
| `CustomBattleSiegeMachineVM` | `public CustomBattleSiegeMachineVM(SiegeEngineType machineType, Action<CustomBattleSiegeMachineVM>onSelection, Action<CustomBattleSiegeMachineVM>onResetSelection)` | 构造函数 |
| `SetMachineType` | `public void SetMachineType(SiegeEngineType machine)` | 方法 |
| `IsRanged` | `public bool IsRanged` | 属性 |
| `MachineID` | `public string MachineID` | 属性 |
| `Name` | `public string Name` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData)
- [同命名空间 CustomBattleData](../CustomBattleData)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide)
