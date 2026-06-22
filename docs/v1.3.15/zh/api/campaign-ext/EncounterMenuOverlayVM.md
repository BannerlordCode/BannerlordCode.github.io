<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterMenuOverlayVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterMenuOverlayVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncounterMenuOverlayVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFrameTick

```csharp
public override void OnFrameTick(float dt)
```

### Refresh

```csharp
public override void Refresh()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)