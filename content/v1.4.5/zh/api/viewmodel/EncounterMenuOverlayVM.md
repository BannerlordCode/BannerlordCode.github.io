---
title: "EncounterMenuOverlayVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterMenuOverlayVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/EncounterMenuOverlayVM.cs`

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
| `AttackerTroopNumHint` | `public BasicTooltipViewModel AttackerTroopNumHint { get; set; }` |
| `DefenderTroopNumHint` | `public BasicTooltipViewModel DefenderTroopNumHint { get; set; }` |
| `AttackerShipNumHint` | `public BasicTooltipViewModel AttackerShipNumHint { get; set; }` |
| `DefenderShipNumHint` | `public BasicTooltipViewModel DefenderShipNumHint { get; set; }` |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint { get; set; }` |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint { get; set; }` |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint { get; set; }` |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint { get; set; }` |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new EncounterMenuOverlayVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)