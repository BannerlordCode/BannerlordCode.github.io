---
title: "ArmyMenuOverlayVM"
description: "ArmyMenuOverlayVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay 的 public 类，继承 GameMenuOverlay；公开成员 20 个（方法 6、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ArmyMenuOverlayVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs。它是一个 public 类，实现/继承 GameMenuOverlay，继承链为 ArmyMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：6 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyMenuOverlayVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，继承链 ArmyMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/20，方法 6/20），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyMenuOverlayVM` | `public ArmyMenuOverlayVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | 方法 |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | 方法 |
| `Refresh` | `public sealed override void Refresh()` | 方法 |
| `ExecuteOpenArmyManagement` | `public void ExecuteOpenArmyManagement()` | 方法 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint` | 属性 |
| `Cohesion` | `public int Cohesion` | 属性 |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled` | 属性 |
| `CanManageArmy` | `public bool CanManageArmy` | 属性 |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader` | 属性 |
| `ManCountText` | `public string ManCountText` | 属性 |
| `Food` | `public int Food` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>PartyList` | 属性 |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint` | 属性 |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint` | 属性 |
| `FoodHint` | `public BasicTooltipViewModel FoodHint` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>IssueList` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameMenuOverlay](../GameMenuOverlay/)
- [同命名空间 EncounterMenuOverlayVM](../EncounterMenuOverlayVM/)
- [同命名空间 GameMenuOverlay](../GameMenuOverlay/)
- [同命名空间 GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
- [同命名空间 GameMenuOverlayFactory](../GameMenuOverlayFactory/)
