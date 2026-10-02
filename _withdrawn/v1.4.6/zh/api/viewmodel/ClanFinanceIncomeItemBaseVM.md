---
title: "ClanFinanceIncomeItemBaseVM"
description: "ClanFinanceIncomeItemBaseVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 15 个（方法 4、属性 10、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceIncomeItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceIncomeItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanFinanceIncomeItemBaseVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 15 个：4 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceIncomeItemBaseVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/15，方法 4/15），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IncomeTypeAsEnum` | `public IncomeTypes IncomeTypeAsEnum` | 属性 |
| `ClanFinanceIncomeItemBaseVM` | `protected ClanFinanceIncomeItemBaseVM(Action<ClanFinanceIncomeItemBaseVM>onSelection, Action onRefresh)` | 构造函数 |
| `PopulateStatsList` | `protected virtual void PopulateStatsList()` | 方法 |
| `PopulateActionList` | `protected virtual void PopulateActionList()` | 方法 |
| `OnIncomeSelection` | `public void OnIncomeSelection()` | 方法 |
| `DetermineIncomeText` | `protected string DetermineIncomeText(int incomeAmount)` | 方法 |
| `MBBindingList` | `public MBBindingList<SelectableItemPropertyVM>ItemProperties` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Location` | `public string Location` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IncomeValueText` | `public string IncomeValueText` | 属性 |
| `ImageName` | `public string ImageName` | 属性 |
| `Income` | `public int Income` | 属性 |
| `Visual` | `public ImageIdentifierVM Visual` | 属性 |
| `IncomeType` | `public int IncomeType` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
