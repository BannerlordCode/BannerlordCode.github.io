---
title: "SelectableItemPropertyVM"
description: "SelectableItemPropertyVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 1、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SelectableItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SelectableItemPropertyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SelectableItemPropertyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SelectableItemPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 10 个：1 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SelectableItemPropertyVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection`，继承链 SelectableItemPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectableItemPropertyVM` | `public SelectableItemPropertyVM(string name, string value, bool isWarning = false, BasicTooltipViewModel hint = null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Type` | `public int Type` | 属性 |
| `IsWarning` | `public bool IsWarning` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Value` | `public string Value` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `ColonText` | `public string ColonText` | 属性 |
| `PropertyType` | `public enum PropertyType` | 属性 |
| `PropertyType` | `public enum PropertyType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData/)
- [同命名空间 BannerEditorVM](../BannerEditorVM/)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [同命名空间 CampaignOptionData](../CampaignOptionData/)
