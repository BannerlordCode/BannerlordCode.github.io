---
title: "ArmyCompositionItemVM"
description: "ArmyCompositionItemVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 16 个（方法 6、属性 8、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyCompositionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

ArmyCompositionItemVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyCompositionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 16 个：6 方法、8 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyCompositionItemVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle`，继承链 ArmyCompositionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/16，方法 6/16），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyCompositionItemVM` | `public ArmyCompositionItemVM(ArmyCompositionItemVM.CompositionType type, List<BasicCharacterObject>allCharacterObjects, MBReadOnlyList<SkillObject>allSkills, Action<int, int>onCompositionValueChanged, TroopTypeSelectionPopUpVM troopTypeSelectionPopUp, int[]compositionValues)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetCurrentSelectedCulture` | `public void SetCurrentSelectedCulture(BasicCultureObject culture)` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize(int compositionValue)` | 方法 |
| `ExecuteAddTroopTypes` | `public void ExecuteAddTroopTypes()` | 方法 |
| `RefreshCompositionValue` | `public void RefreshCompositionValue()` | 方法 |
| `GetTroopTypeIconData` | `public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, ArmyCompositionItemVM.CompositionType type, bool isBig = false)` | 方法 |
| `MBBindingList` | `public MBBindingList<CustomBattleTroopTypeVM>TroopTypes` | 属性 |
| `InvalidHint` | `public HintViewModel InvalidHint` | 属性 |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint` | 属性 |
| `IsLocked` | `public bool IsLocked` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `CompositionValue` | `public int CompositionValue` | 属性 |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText` | 属性 |
| `CompositionType` | `public enum CompositionType` | 属性 |
| `CompositionType` | `public enum CompositionType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
- [同命名空间 CustomBattleSceneData](../CustomBattleSceneData/)
