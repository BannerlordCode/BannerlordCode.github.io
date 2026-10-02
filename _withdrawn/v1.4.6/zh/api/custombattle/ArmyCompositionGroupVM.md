---
title: "ArmyCompositionGroupVM"
description: "ArmyCompositionGroupVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 8、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyCompositionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

ArmyCompositionGroupVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyCompositionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyCompositionGroupVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle`，继承链 ArmyCompositionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyCompositionGroupVM` | `public ArmyCompositionGroupVM(TroopTypeSelectionPopUpVM troopTypeSelectionPopUp)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetCurrentSelectedCulture` | `public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)` | 方法 |
| `OnPlayerTypeChange` | `public void OnPlayerTypeChange(CustomBattlePlayerType playerType)` | 方法 |
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition` | 属性 |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition` | 属性 |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition` | 属性 |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition` | 属性 |
| `ArmySizeTitle` | `public string ArmySizeTitle` | 属性 |
| `ArmySize` | `public int ArmySize` | 属性 |
| `MaxArmySize` | `public int MaxArmySize` | 属性 |
| `MinArmySize` | `public int MinArmySize` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
- [同命名空间 CustomBattleSceneData](../CustomBattleSceneData/)
