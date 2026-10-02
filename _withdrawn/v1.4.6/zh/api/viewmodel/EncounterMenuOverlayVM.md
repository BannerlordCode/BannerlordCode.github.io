---
title: "EncounterMenuOverlayVM"
description: "EncounterMenuOverlayVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay 的 public 类，继承 GameMenuOverlay；公开成员 34 个（方法 3、属性 30、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncounterMenuOverlayVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs。它是一个 public 类，实现/继承 GameMenuOverlay，继承链为 EncounterMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 34 个：3 方法、30 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncounterMenuOverlayVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，继承链 EncounterMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 30/34，方法 3/34），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncounterMenuOverlayVM` | `public EncounterMenuOverlayVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `DefenderPartyBanner` | `public BannerImageIdentifierVM DefenderPartyBanner` | 属性 |
| `AttackerPartyBanner` | `public BannerImageIdentifierVM AttackerPartyBanner` | 属性 |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>AttackerPartyList` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>DefenderPartyList` | 属性 |
| `DefenderPartyMorale` | `public string DefenderPartyMorale` | 属性 |
| `AttackerPartyMorale` | `public string AttackerPartyMorale` | 属性 |
| `DefenderPartyCount` | `public int DefenderPartyCount` | 属性 |
| `AttackerPartyCount` | `public int AttackerPartyCount` | 属性 |
| `DefenderShipCount` | `public int DefenderShipCount` | 属性 |
| `AttackerShipCount` | `public int AttackerShipCount` | 属性 |
| `DefenderPartyFood` | `public string DefenderPartyFood` | 属性 |
| `AttackerPartyFood` | `public string AttackerPartyFood` | 属性 |
| `DefenderWallHitPoints` | `public string DefenderWallHitPoints` | 属性 |
| `IsNaval` | `public bool IsNaval` | 属性 |
| `IsSiege` | `public bool IsSiege` | 属性 |
| `DefenderPartyCountLbl` | `public string DefenderPartyCountLbl` | 属性 |
| `AttackerPartyCountLbl` | `public string AttackerPartyCountLbl` | 属性 |
| `AttackerBannerHint` | `public HintViewModel AttackerBannerHint` | 属性 |
| `DefenderBannerHint` | `public HintViewModel DefenderBannerHint` | 属性 |
| `AttackerTroopNumHint` | `public BasicTooltipViewModel AttackerTroopNumHint` | 属性 |
| `DefenderTroopNumHint` | `public BasicTooltipViewModel DefenderTroopNumHint` | 属性 |
| `AttackerShipNumHint` | `public BasicTooltipViewModel AttackerShipNumHint` | 属性 |
| `DefenderShipNumHint` | `public BasicTooltipViewModel DefenderShipNumHint` | 属性 |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint` | 属性 |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint` | 属性 |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint` | 属性 |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint` | 属性 |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameMenuOverlay](../GameMenuOverlay/)
- [同命名空间 ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [同命名空间 GameMenuOverlay](../GameMenuOverlay/)
- [同命名空间 GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
- [同命名空间 GameMenuOverlayFactory](../GameMenuOverlayFactory/)
