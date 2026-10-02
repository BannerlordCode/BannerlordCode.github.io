---
title: "PersuasionVM"
description: "PersuasionVM：TaleWorlds.CampaignSystem.ViewModelCollection.Conversation 的 public 类，继承 ViewModel；公开成员 14 个（方法 4、属性 9、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PersuasionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PersuasionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PersuasionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PersuasionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：4 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PersuasionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，继承链 PersuasionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/14，方法 4/14），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PersuasionVM` | `public PersuasionVM(ConversationManager manager)` | 构造函数 |
| `OnPersuasionProgress` | `public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult>selectedOption)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetCurrentOption` | `public void SetCurrentOption(PersuasionOptionVM option)` | 方法 |
| `RefreshPersusasion` | `public void RefreshPersusasion()` | 方法 |
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint` | 属性 |
| `ProgressText` | `public string ProgressText` | 属性 |
| `MBBindingList` | `public MBBindingList<BoolItemWithActionVM>PersuasionProgress` | 属性 |
| `IsPersuasionActive` | `public bool IsPersuasionActive` | 属性 |
| `CurrentSuccessChance` | `public int CurrentSuccessChance` | 属性 |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption` | 属性 |
| `CurrentFailChance` | `public int CurrentFailChance` | 属性 |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance` | 属性 |
| `CurrentCritFailChance` | `public int CurrentCritFailChance` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [同命名空间 ConversationItemVM](../ConversationItemVM/)
- [同命名空间 MissionConversationVM](../MissionConversationVM/)
- [同命名空间 PersuasionOptionVM](../PersuasionOptionVM/)
