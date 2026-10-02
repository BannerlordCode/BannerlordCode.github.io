---
title: "ConversationItemVM"
description: "ConversationItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Conversation 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ConversationItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ConversationItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：4 方法、7 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，继承链 ConversationItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationItemVM` | `public ConversationItemVM(Action<int>action, Action onReadyToContinue, Action<ConversationItemVM>setCurrentAnswer, int index)` | 构造函数 |
| `ConversationItemVM` | `public ConversationItemVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `SetCurrentAnswer` | `public void SetCurrentAnswer()` | 方法 |
| `ResetCurrentAnswer` | `public void ResetCurrentAnswer()` | 方法 |
| `PersuasionItem` | `public PersuasionOptionVM PersuasionItem` | 属性 |
| `HasPersuasion` | `public bool HasPersuasion` | 属性 |
| `IconType` | `public int IconType` | 属性 |
| `OptionHint` | `public HintViewModel OptionHint` | 属性 |
| `ItemText` | `public string ItemText` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsSpecial` | `public bool IsSpecial` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [同命名空间 MissionConversationVM](../MissionConversationVM/)
- [同命名空间 PersuasionOptionVM](../PersuasionOptionVM/)
- [同命名空间 PersuasionVM](../PersuasionVM/)
