---
title: "CustomBattleTroopTypeVM"
description: "CustomBattleTroopTypeVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 14 个（方法 5、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs。"
---
# CustomBattleTroopTypeVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleTroopTypeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs`

## 概述

CustomBattleTroopTypeVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CustomBattleTroopTypeVM → ViewModel。public/protected 成员共 14 个：5 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleTroopTypeVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleTroopTypeVM → ViewModel。成员构成以属性为主（属性 8/14，方法 5/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | 属性 |
| `CustomBattleTroopTypeVM` | `public CustomBattleTroopTypeVM(BasicCharacterObject character, Action<CustomBattleTroopTypeVM>onSelectionToggled, StringItemWithHintVM typeIconData, MBReadOnlyList<SkillObject>allSkills, bool isDefault)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteToggleSelection` | `public void ExecuteToggleSelection()` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | 方法 |
| `GetCharacterTierData` | `public static StringItemWithHintVM GetCharacterTierData(BasicCharacterObject character, bool isBig = false)` | 方法 |
| `GetCharacterTier` | `public static int GetCharacterTier(BasicCharacterObject character)` | 方法 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `TroopSkillsHint` | `public BasicTooltipViewModel TroopSkillsHint` | 属性 |
| `NameHint` | `public HintViewModel NameHint` | 属性 |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | 属性 |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
