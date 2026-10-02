---
title: "SelectableFiefItemPropertyVM"
description: "SelectableFiefItemPropertyVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 SelectableItemPropertyVM；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs。"
---
# SelectableFiefItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SelectableFiefItemPropertyVM : SelectableItemPropertyVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs`

## 概述

SelectableFiefItemPropertyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs。它是一个 public 类，实现/继承 SelectableItemPropertyVM，继承链为 SelectableFiefItemPropertyVM → SelectableItemPropertyVM → ViewModel。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SelectableFiefItemPropertyVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 SelectableFiefItemPropertyVM → SelectableItemPropertyVM → ViewModel。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectableFiefItemPropertyVM` | `public SelectableFiefItemPropertyVM(string name, string value, int changeAmount, SelectableItemPropertyVM.PropertyType type, BasicTooltipViewModel hint = null, bool isWarning = false) : base(name, value, isWarning, hint)` | 构造函数 |
| `ChangeAmount` | `public int ChangeAmount` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SelectableItemPropertyVM](../SelectableItemPropertyVM)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
