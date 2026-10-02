---
title: "KingdomArmyItemVM"
description: "KingdomArmyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies 的 public 类，继承 KingdomItemVM；公开成员 18 个（方法 3、属性 14、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomArmyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomArmyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs。它是一个 public 类，实现/继承 KingdomItemVM，继承链为 KingdomArmyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：3 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomArmyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`，继承链 KingdomArmyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 14/18，方法 3/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DistanceToMainParty` | `public float DistanceToMainParty` | 属性 |
| `KingdomArmyItemVM` | `public KingdomArmyItemVM(Army army, Action<KingdomArmyItemVM>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSelect` | `protected override void OnSelect()` | 方法 |
| `ExecuteLink` | `protected void ExecuteLink(string link)` | 方法 |
| `MBBindingList` | `public MBBindingList<KingdomArmyPartyItemVM>Parties` | 属性 |
| `Leader` | `public HeroVM Leader` | 属性 |
| `ArmyName` | `public string ArmyName` | 属性 |
| `Cohesion` | `public int Cohesion` | 属性 |
| `CohesionLabel` | `public string CohesionLabel` | 属性 |
| `LordCount` | `public int LordCount` | 属性 |
| `Strength` | `public int Strength` | 属性 |
| `StrengthLabel` | `public string StrengthLabel` | 属性 |
| `ShipCount` | `public int ShipCount` | 属性 |
| `ShipCountLabel` | `public string ShipCountLabel` | 属性 |
| `Location` | `public string Location` | 属性 |
| `Behavior` | `public string Behavior` | 属性 |
| `IsMainArmy` | `public bool IsMainArmy` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomItemVM](../KingdomItemVM/)
- [同命名空间 KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM/)
- [同命名空间 KingdomArmySortControllerVM](../KingdomArmySortControllerVM/)
- [同命名空间 KingdomArmyVM](../KingdomArmyVM/)
- [同命名空间 KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM/)
