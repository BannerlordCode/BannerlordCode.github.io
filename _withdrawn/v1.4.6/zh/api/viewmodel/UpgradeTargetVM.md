---
title: "UpgradeTargetVM"
description: "UpgradeTargetVM：TaleWorlds.CampaignSystem.ViewModelCollection.Party 的 public 类，继承 ViewModel；公开成员 18 个（方法 6、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UpgradeTargetVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class UpgradeTargetVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

UpgradeTargetVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 UpgradeTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：6 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UpgradeTargetVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，继承链 UpgradeTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/18，方法 6/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpgradeTargetVM` | `public UpgradeTargetVM(int upgradeIndex, CharacterObject character, CharacterCode upgradeCharacterCode, Action<int, int>onUpgraded, Action<UpgradeTargetVM>onFocused)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)` | 方法 |
| `ExecuteUpgradeEncyclopediaLink` | `public void ExecuteUpgradeEncyclopediaLink()` | 方法 |
| `ExecuteUpgrade` | `public void ExecuteUpgrade()` | 方法 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey` | 属性 |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey` | 属性 |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey` | 属性 |
| `Requirements` | `public UpgradeRequirementsVM Requirements` | 属性 |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `AvailableUpgrades` | `public int AvailableUpgrades` | 属性 |
| `IsAvailable` | `public bool IsAvailable` | 属性 |
| `IsInsufficient` | `public bool IsInsufficient` | 属性 |
| `IsHighlighted` | `public bool IsHighlighted` | 属性 |
| `IsMarinerTroop` | `public bool IsMarinerTroop` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM/)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM/)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM/)
- [同命名空间 PartyTradeVM](../PartyTradeVM/)
