---
title: "CustomBattleFactionSelectionVM"
description: "CustomBattleFactionSelectionVM：TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem 的 public 类，继承 ViewModel；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleFactionSelectionVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

CustomBattleFactionSelectionVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CustomBattleFactionSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleFactionSelectionVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`，继承链 CustomBattleFactionSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleFactionSelectionVM` | `public CustomBattleFactionSelectionVM(Action<BasicCultureObject>onSelectionChanged)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SelectFaction` | `public void SelectFaction(int index)` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | 方法 |
| `MBBindingList` | `public MBBindingList<FactionItemVM>Factions` | 属性 |
| `SelectedFactionName` | `public string SelectedFactionName` | 属性 |
| `SelectedItem` | `public FactionItemVM SelectedItem` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CharacterItemVM](../CharacterItemVM/)
- [同命名空间 FactionItemVM](../FactionItemVM/)
- [同命名空间 GameTypeItemVM](../GameTypeItemVM/)
- [同命名空间 MapItemVM](../MapItemVM/)
