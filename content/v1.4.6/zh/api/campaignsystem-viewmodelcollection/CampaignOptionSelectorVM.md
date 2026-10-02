---
title: "CampaignOptionSelectorVM"
description: "CampaignOptionSelectorVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 SelectorVM<SelectorItemVM>；公开成员 4 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs。"
---
# CampaignOptionSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CampaignOptionSelectorVM : SelectorVM<SelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs`

## 概述

CampaignOptionSelectorVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs。它是一个 public 类，实现/继承 SelectorVM<SelectorItemVM>，继承链为 CampaignOptionSelectorVM → SelectorVM。public/protected 成员共 4 个：1 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignOptionSelectorVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 CampaignOptionSelectorVM → SelectorVM。成员构成以属性为主（属性 1/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 SelectorVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(selectedIndex, onChange)` | 构造函数 |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(IEnumerable<string>list, int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(list, selectedIndex, onChange)` | 构造函数 |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(IEnumerable<TextObject>list, int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(list, selectedIndex, onChange)` | 构造函数 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData)
- [同命名空间 BannerEditorVM](../BannerEditorVM)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [同命名空间 CampaignOptionData](../CampaignOptionData)
