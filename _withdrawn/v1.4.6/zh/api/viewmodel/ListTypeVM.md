---
title: "ListTypeVM"
description: "ListTypeVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List 的 public 类，继承 ViewModel；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ListTypeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ListTypeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ListTypeVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ListTypeVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ListTypeVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，继承链 ListTypeVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListTypeVM` | `public ListTypeVM(EncyclopediaPage encyclopediaPage)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Execute` | `public void Execute()` | 方法 |
| `ID` | `public string ID` | 属性 |
| `Order` | `public int Order` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ImageID` | `public string ImageID` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [同命名空间 EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [同命名空间 EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [同命名空间 EncyclopediaListItemVM](../EncyclopediaListItemVM/)
