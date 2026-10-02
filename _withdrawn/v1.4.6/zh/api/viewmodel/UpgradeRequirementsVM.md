---
title: "UpgradeRequirementsVM"
description: "UpgradeRequirementsVM：TaleWorlds.CampaignSystem.ViewModelCollection.Party 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 8、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UpgradeRequirementsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class UpgradeRequirementsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

UpgradeRequirementsVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 UpgradeRequirementsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UpgradeRequirementsVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，继承链 UpgradeRequirementsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpgradeRequirementsVM` | `public UpgradeRequirementsVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetItemRequirement` | `public void SetItemRequirement(ItemCategory category)` | 方法 |
| `SetPerkRequirement` | `public void SetPerkRequirement(PerkObject perk)` | 方法 |
| `SetRequirementsMet` | `public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)` | 方法 |
| `IsItemRequirementMet` | `public bool IsItemRequirementMet` | 属性 |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet` | 属性 |
| `HasItemRequirement` | `public bool HasItemRequirement` | 属性 |
| `HasPerkRequirement` | `public bool HasPerkRequirement` | 属性 |
| `PerkRequirement` | `public string PerkRequirement` | 属性 |
| `ItemRequirement` | `public string ItemRequirement` | 属性 |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint` | 属性 |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM/)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM/)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM/)
- [同命名空间 PartyTradeVM](../PartyTradeVM/)
