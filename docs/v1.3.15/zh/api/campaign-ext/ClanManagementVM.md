<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanManagementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanManagementVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanManagementVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Leader` | `public HeroVM Leader { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ClanMembers` | `public ClanMembersVM ClanMembers { get; set; }` |
| `ClanParties` | `public ClanPartiesVM ClanParties { get; set; }` |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs { get; set; }` |
| `ClanIncome` | `public ClanIncomeVM ClanIncome { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName { get; set; }` |
| `CanChooseBanner` | `public bool CanChooseBanner { get; set; }` |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SelectHero

```csharp
public void SelectHero(Hero hero)
```

### SelectParty

```csharp
public void SelectParty(PartyBase party)
```

### SelectSettlement

```csharp
public void SelectSettlement(Settlement settlement)
```

### SelectWorkshop

```csharp
public void SelectWorkshop(Workshop workshop)
```

### SelectAlley

```csharp
public void SelectAlley(Alley alley)
```

### SelectPreviousCategory

```csharp
public void SelectPreviousCategory()
```

### SelectNextCategory

```csharp
public void SelectNextCategory()
```

### ExecuteOpenBannerEditor

```csharp
public void ExecuteOpenBannerEditor()
```

### UpdateBannerVisuals

```csharp
public void UpdateBannerVisuals()
```

### SetSelectedCategory

```csharp
public void SetSelectedCategory(int index)
```

### RefreshDailyValues

```csharp
public void RefreshDailyValues()
```

### RefreshCategoryValues

```csharp
public void RefreshCategoryValues()
```

### ExecuteChangeClanName

```csharp
public void ExecuteChangeClanName()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetPreviousTabInputKey

```csharp
public void SetPreviousTabInputKey(HotKey hotkey)
```

### SetNextTabInputKey

```csharp
public void SetNextTabInputKey(HotKey hotkey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)