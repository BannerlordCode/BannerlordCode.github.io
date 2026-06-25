---
title: "EncounterMenuOverlayVM"
description: "EncounterMenuOverlayVM 的自动生成类参考。"
---
# EncounterMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs`

## 概述

`EncounterMenuOverlayVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `DefenderPartyBanner` | `public BannerImageIdentifierVM DefenderPartyBanner { get; set; }` |
| `AttackerPartyBanner` | `public BannerImageIdentifierVM AttackerPartyBanner { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `AttackerPartyList` | `public MBBindingList<GameMenuPartyItemVM> AttackerPartyList { get; set; }` |
| `DefenderPartyList` | `public MBBindingList<GameMenuPartyItemVM> DefenderPartyList { get; set; }` |
| `DefenderPartyMorale` | `public string DefenderPartyMorale { get; set; }` |
| `AttackerPartyMorale` | `public string AttackerPartyMorale { get; set; }` |
| `DefenderPartyCount` | `public int DefenderPartyCount { get; set; }` |
| `AttackerPartyCount` | `public int AttackerPartyCount { get; set; }` |
| `DefenderShipCount` | `public int DefenderShipCount { get; set; }` |
| `AttackerShipCount` | `public int AttackerShipCount { get; set; }` |
| `DefenderPartyFood` | `public string DefenderPartyFood { get; set; }` |
| `AttackerPartyFood` | `public string AttackerPartyFood { get; set; }` |
| `DefenderWallHitPoints` | `public string DefenderWallHitPoints { get; set; }` |
| `IsNaval` | `public bool IsNaval { get; set; }` |
| `IsSiege` | `public bool IsSiege { get; set; }` |
| `DefenderPartyCountLbl` | `public string DefenderPartyCountLbl { get; set; }` |
| `AttackerPartyCountLbl` | `public string AttackerPartyCountLbl { get; set; }` |
| `AttackerBannerHint` | `public HintViewModel AttackerBannerHint { get; set; }` |
| `DefenderBannerHint` | `public HintViewModel DefenderBannerHint { get; set; }` |
| `AttackerTroopNumHint` | `public HintViewModel AttackerTroopNumHint { get; set; }` |
| `DefenderTroopNumHint` | `public HintViewModel DefenderTroopNumHint { get; set; }` |
| `AttackerShipNumHint` | `public HintViewModel AttackerShipNumHint { get; set; }` |
| `DefenderShipNumHint` | `public HintViewModel DefenderShipNumHint { get; set; }` |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint { get; set; }` |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint { get; set; }` |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint { get; set; }` |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint { get; set; }` |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncounterMenuOverlayVM 实例
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.RefreshValues();
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncounterMenuOverlayVM 实例
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.OnFrameTick(0);
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncounterMenuOverlayVM 实例
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.RefreshValues();
```

## 参见

- [本区域目录](../)