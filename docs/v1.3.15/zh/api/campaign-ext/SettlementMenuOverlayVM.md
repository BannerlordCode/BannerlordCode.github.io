<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMenuOverlayVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SettlementMenuOverlayVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount { get; set; }` |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount { get; set; }` |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount { get; set; }` |
| `GarrisonAmount` | `public int GarrisonAmount { get; set; }` |
| `CrimeChangeAmount` | `public int CrimeChangeAmount { get; set; }` |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount { get; set; }` |
| `SecurityChangeAmount` | `public int SecurityChangeAmount { get; set; }` |
| `FoodChangeAmount` | `public int FoodChangeAmount { get; set; }` |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint { get; set; }` |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint { get; set; }` |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint { get; set; }` |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint { get; set; }` |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint { get; set; }` |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint { get; set; }` |
| `WallsHint` | `public BasicTooltipViewModel WallsHint { get; set; }` |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint { get; set; }` |
| `LeaveMembersHint` | `public HintViewModel LeaveMembersHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteOnOverlayClosed

```csharp
public override void ExecuteOnOverlayClosed()
```

### UpdateOverlayType

```csharp
public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)
```

### Refresh

```csharp
public override void Refresh()
```

### ExecuteAddCompanion

```csharp
public void ExecuteAddCompanion()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Compare

```csharp
public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)
```

### Compare

```csharp
public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)