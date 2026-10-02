---
title: "EncyclopediaPageVM"
description: "EncyclopediaPageVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages 的 public 类，继承 ViewModel；公开成员 14 个（方法 6、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaPageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaPageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：6 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaPageVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，继承链 EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/14，方法 6/14），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Obj` | `public object Obj` | 属性 |
| `GetName` | `public virtual string GetName()` | 方法 |
| `GetNavigationBarURL` | `public virtual string GetNavigationBarURL()` | 方法 |
| `Refresh` | `public virtual void Refresh()` | 方法 |
| `EncyclopediaPageVM` | `public EncyclopediaPageVM(EncyclopediaPageArgs args)` | 构造函数 |
| `OnTick` | `public virtual void OnTick()` | 方法 |
| `ExecuteSwitchBookmarkedState` | `public virtual void ExecuteSwitchBookmarkedState()` | 方法 |
| `UpdateBookmarkHintText` | `protected void UpdateBookmarkHintText()` | 方法 |
| `IsLoadingOver` | `public bool IsLoadingOver` | 属性 |
| `IsBookmarked` | `public bool IsBookmarked` | 属性 |
| `BookmarkHint` | `public HintViewModel BookmarkHint` | 属性 |
| `MBBindingList` | `public virtual MBBindingList<EncyclopediaListItemVM>Items` | 属性 |
| `MBBindingList` | `public virtual MBBindingList<EncyclopediaFilterGroupVM>FilterGroups` | 属性 |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [同命名空间 EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [同命名空间 EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [同命名空间 EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
