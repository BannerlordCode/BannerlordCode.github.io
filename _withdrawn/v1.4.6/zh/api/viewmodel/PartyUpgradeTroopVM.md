---
title: "PartyUpgradeTroopVM"
description: "PartyUpgradeTroopVM：TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp 的 public 类，继承 PartyTroopManagerVM；公开成员 13 个（方法 10、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyUpgradeTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PartyUpgradeTroopVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs。它是一个 public 类，实现/继承 PartyTroopManagerVM，继承链为 PartyUpgradeTroopVM → PartyTroopManagerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：10 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyUpgradeTroopVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，继承链 PartyUpgradeTroopVM → PartyTroopManagerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 10/13，属性 2/13），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyUpgradeTroopVM` | `public PartyUpgradeTroopVM(PartyVM partyVM) : base(partyVM)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnRanOutTroop` | `public void OnRanOutTroop(PartyCharacterVM troop)` | 方法 |
| `OnTroopUpgraded` | `public void OnTroopUpgraded()` | 方法 |
| `OpenPopUp` | `public override void OpenPopUp()` | 方法 |
| `ExecuteDone` | `public override void ExecuteDone()` | 方法 |
| `ExecuteCancel` | `public override void ExecuteCancel()` | 方法 |
| `ConfirmCancel` | `protected override void ConfirmCancel()` | 方法 |
| `ExecuteItemPrimaryAction` | `public override void ExecuteItemPrimaryAction()` | 方法 |
| `ExecuteItemSecondaryAction` | `public override void ExecuteItemSecondaryAction()` | 方法 |
| `ExecuteItemTertiaryAction` | `public override void ExecuteItemTertiaryAction()` | 方法 |
| `UpgradeCostText` | `public string UpgradeCostText` | 属性 |
| `UpgradesAndRequirementsText` | `public string UpgradesAndRequirementsText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PartyTroopManagerVM](../PartyTroopManagerVM/)
- [同命名空间 PartyRecruitTroopVM](../PartyRecruitTroopVM/)
- [同命名空间 PartyTroopManagerItemVM](../PartyTroopManagerItemVM/)
- [同命名空间 PartyTroopManagerVM](../PartyTroopManagerVM/)
