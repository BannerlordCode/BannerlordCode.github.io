---
title: "ProfitItemPropertyVM"
description: "ProfitItemPropertyVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 12 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs。"
---
# ProfitItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ProfitItemPropertyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs`

## 概述

ProfitItemPropertyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ProfitItemPropertyVM → ViewModel。public/protected 成员共 12 个：1 方法、9 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ProfitItemPropertyVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 ProfitItemPropertyVM → ViewModel。成员构成以属性为主（属性 9/12，方法 1/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProfitItemPropertyVM` | `public ProfitItemPropertyVM(string name, int value, ProfitItemPropertyVM.PropertyType type = ProfitItemPropertyVM.PropertyType.None, CharacterImageIdentifierVM governorVisual = null, BasicTooltipViewModel hint = null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Type` | `public int Type` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Value` | `public int Value` | 属性 |
| `ValueString` | `public string ValueString` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `ColonText` | `public string ColonText` | 属性 |
| `GovernorVisual` | `public CharacterImageIdentifierVM GovernorVisual` | 属性 |
| `ShowGovernorPortrait` | `public bool ShowGovernorPortrait` | 属性 |
| `PropertyType` | `public enum PropertyType` | 属性 |
| `PropertyType` | `public enum PropertyType` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
