---
title: "PersuasionOptionVM"
description: "PersuasionOptionVM：TaleWorlds.CampaignSystem.ViewModelCollection.Conversation 的 public 类，继承 ViewModel；公开成员 22 个（方法 3、属性 18、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PersuasionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PersuasionOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PersuasionOptionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PersuasionOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 22 个：3 方法、18 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PersuasionOptionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，继承链 PersuasionOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 18/22，方法 3/22），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PersuasionOptionVM` | `public PersuasionOptionVM(ConversationManager manager, int index, Action onReadyToContinue)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `GetPersuasionAdditionalText` | `public string GetPersuasionAdditionalText()` | 方法 |
| `ExecuteReadyToContinue` | `public void ExecuteReadyToContinue()` | 方法 |
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady` | 属性 |
| `IsABlockingOption` | `public bool IsABlockingOption` | 属性 |
| `IsAProgressingOption` | `public bool IsAProgressingOption` | 属性 |
| `SuccessChance` | `public int SuccessChance` | 属性 |
| `PersuasionResultIndex` | `public int PersuasionResultIndex` | 属性 |
| `FailChance` | `public int FailChance` | 属性 |
| `CritSuccessChance` | `public int CritSuccessChance` | 属性 |
| `CritFailChance` | `public int CritFailChance` | 属性 |
| `FailChanceText` | `public string FailChanceText` | 属性 |
| `CritFailChanceText` | `public string CritFailChanceText` | 属性 |
| `SuccessChanceText` | `public string SuccessChanceText` | 属性 |
| `CritSuccessChanceText` | `public string CritSuccessChanceText` | 属性 |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint` | 属性 |
| `FailHint` | `public BasicTooltipViewModel FailHint` | 属性 |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint` | 属性 |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint` | 属性 |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint` | 属性 |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [同命名空间 ConversationItemVM](../ConversationItemVM/)
- [同命名空间 MissionConversationVM](../MissionConversationVM/)
- [同命名空间 PersuasionVM](../PersuasionVM/)
