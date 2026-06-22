<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaClanPageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaClanPageVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaClanPageVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ClanInfo` | `public MBBindingList<StringPairItemVM> ClanInfo { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Enemies` | `public MBBindingList<EncyclopediaFactionVM> Enemies { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `ParentKingdom` | `public EncyclopediaFactionVM ParentKingdom { get; set; }` |
| `HasParentKingdom` | `public bool HasParentKingdom { get; set; }` |
| `IsClanDestroyed` | `public bool IsClanDestroyed { get; set; }` |
| `DestroyedText` | `public string DestroyedText { get; set; }` |
| `PartOfText` | `public string PartOfText { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public override void Refresh()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)