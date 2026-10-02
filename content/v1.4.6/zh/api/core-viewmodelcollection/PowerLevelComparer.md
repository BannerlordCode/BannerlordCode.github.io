---
title: "PowerLevelComparer"
description: "PowerLevelComparer：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 3、属性 14、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs。"
---
# PowerLevelComparer

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class PowerLevelComparer : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs`

## 概述

PowerLevelComparer 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PowerLevelComparer → ViewModel。public/protected 成员共 18 个：3 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PowerLevelComparer 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 PowerLevelComparer → ViewModel。成员构成以属性为主（属性 14/18，方法 3/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PowerLevelComparer` | `public PowerLevelComparer(double defenderPower, double attackerPower)` | 构造函数 |
| `SetColors` | `public void SetColors(string defenderColor, string attackerColor)` | 方法 |
| `Update` | `public void Update(double defenderPower, double attackerPower)` | 方法 |
| `Update` | `public void Update(double defenderPower, double attackerPower, double initialDefenderPower, double initialAttackerPower)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `DefenderBattlePower` | `public double DefenderBattlePower` | 属性 |
| `DefenderBattlePowerValue` | `public double DefenderBattlePowerValue` | 属性 |
| `AttackerBattlePower` | `public double AttackerBattlePower` | 属性 |
| `AttackerBattlePowerValue` | `public double AttackerBattlePowerValue` | 属性 |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower` | 属性 |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower` | 属性 |
| `InitialDefenderBattlePowerValue` | `public double InitialDefenderBattlePowerValue` | 属性 |
| `InitialAttackerBattlePowerValue` | `public double InitialAttackerBattlePowerValue` | 属性 |
| `DefenderRelativePower` | `public float DefenderRelativePower` | 属性 |
| `AttackerRelativePower` | `public float AttackerRelativePower` | 属性 |
| `DefenderColor` | `public string DefenderColor` | 属性 |
| `AttackerColor` | `public string AttackerColor` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleResultVM](../BattleResultVM)
- [同命名空间 CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [同命名空间 CharacterViewModel](../CharacterViewModel)
- [同命名空间 CharacterWithActionViewModel](../CharacterWithActionViewModel)
