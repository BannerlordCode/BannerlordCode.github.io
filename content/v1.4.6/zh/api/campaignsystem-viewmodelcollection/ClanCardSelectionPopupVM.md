---
title: "ClanCardSelectionPopupVM"
description: "ClanCardSelectionPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 17 个（方法 7、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs。"
---
# ClanCardSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs`

## 概述

ClanCardSelectionPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanCardSelectionPopupVM → ViewModel。public/protected 成员共 17 个：7 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanCardSelectionPopupVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanCardSelectionPopupVM → ViewModel。成员构成以属性为主（属性 9/17，方法 7/17），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanCardSelectionPopupVM` | `public ClanCardSelectionPopupVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `Open` | `public void Open(ClanCardSelectionInfo info)` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `MBBindingList` | `public MBBindingList<ClanCardSelectionPopupItemVM>Items` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `Title` | `public string Title` | 属性 |
| `ActionResult` | `public string ActionResult` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | 属性 |
| `DisabledHint` | `public HintViewModel DisabledHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
