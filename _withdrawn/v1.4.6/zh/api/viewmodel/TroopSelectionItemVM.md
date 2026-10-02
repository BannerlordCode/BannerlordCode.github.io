---
title: "TroopSelectionItemVM"
description: "TroopSelectionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection 的 public 类，继承 ViewModel；公开成员 17 个（方法 3、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TroopSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

TroopSelectionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TroopSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：3 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TroopSelectionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`，继承链 TroopSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/17，方法 3/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Troop` | `public TroopRosterElement Troop` | 属性 |
| `TroopSelectionItemVM` | `public TroopSelectionItemVM(TroopRosterElement troop, Action<TroopSelectionItemVM>onAdd, Action<TroopSelectionItemVM>onRemove)` | 构造函数 |
| `ExecuteAdd` | `public void ExecuteAdd()` | 方法 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `MaxAmount` | `public int MaxAmount` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsRosterFull` | `public bool IsRosterFull` | 属性 |
| `IsTroopHero` | `public bool IsTroopHero` | 属性 |
| `IsLocked` | `public bool IsLocked` | 属性 |
| `CurrentAmount` | `public int CurrentAmount` | 属性 |
| `HeroHealthPercent` | `public int HeroHealthPercent` | 属性 |
| `Name` | `public string Name` | 属性 |
| `AmountText` | `public string AmountText` | 属性 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | 属性 |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 GameMenuTroopSelectionVM](../GameMenuTroopSelectionVM/)
- [同命名空间 TroopItemComparer](../TroopItemComparer/)
