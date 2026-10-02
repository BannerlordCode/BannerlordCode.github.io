---
title: "CampaignOptionItemVM"
description: "CampaignOptionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 20 个（方法 6、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignOptionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CampaignOptionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CampaignOptionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CampaignOptionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：6 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignOptionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection`，继承链 CampaignOptionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/20，方法 6/20），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionData` | `public ICampaignOptionData OptionData` | 属性 |
| `CampaignOptionItemVM` | `public CampaignOptionItemVM(ICampaignOptionData optionData)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshDisabledStatus` | `public void RefreshDisabledStatus()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `OnSelectionOptionValueChanged` | `public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM>selector)` | 方法 |
| `SetValue` | `public void SetValue(float value)` | 方法 |
| `SetOnValueChangedCallback` | `public void SetOnValueChangedCallback(Action<CampaignOptionItemVM>onValueChanged)` | 方法 |
| `HideOptionName` | `public bool HideOptionName` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `OptionType` | `public int OptionType` | 属性 |
| `ValueAsBoolean` | `public bool ValueAsBoolean` | 属性 |
| `IsDiscrete` | `public bool IsDiscrete` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `MinRange` | `public float MinRange` | 属性 |
| `MaxRange` | `public float MaxRange` | 属性 |
| `ValueAsRange` | `public float ValueAsRange` | 属性 |
| `ValueAsString` | `public string ValueAsString` | 属性 |
| `SelectionSelector` | `public CampaignOptionSelectorVM SelectionSelector` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData/)
- [同命名空间 BannerEditorVM](../BannerEditorVM/)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [同命名空间 CampaignOptionData](../CampaignOptionData/)
