<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaClanPageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaClanPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaClanPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaClanPageVM.cs`

## 概述

`EncyclopediaClanPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `InformationText` | `public string InformationText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `DescriptorText` | `public string DescriptorText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ProsperityHint` | `public HintViewModel ProsperityHint { get; set; }` |
| `StrengthHint` | `public HintViewModel StrengthHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetName
`public override string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 获取 `navigation bar u r l` 的当前值。

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 `switch bookmarked state` 操作或流程。

## 使用示例

```csharp
var value = new EncyclopediaClanPageVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)