---
title: "ClanCardSelectionPopupVM"
description: "ClanCardSelectionPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 17 个（方法 7、属性 9、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanCardSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanCardSelectionPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanCardSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：7 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanCardSelectionPopupVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanCardSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/17，方法 7/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
