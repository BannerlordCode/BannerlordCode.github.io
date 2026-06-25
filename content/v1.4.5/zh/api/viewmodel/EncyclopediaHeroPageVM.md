---
title: "EncyclopediaHeroPageVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaHeroPageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaHeroPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaHeroPageVM.cs`

## 概述

`EncyclopediaHeroPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Faction` | `public EncyclopediaFactionVM Faction { get; set; }` |
| `IsCompanion` | `public bool IsCompanion { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Master` | `public HeroVM Master { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `MasterText` | `public string MasterText { get; set; }` |
| `KingdomRankText` | `public string KingdomRankText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `LastSeenText` | `public string LastSeenText { get; set; }` |
| `DeceasedText` | `public string DeceasedText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `DwellingsText` | `public string DwellingsText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `Stats` | `public MBBindingList<StringPairItemVM> Stats { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Dwellings` | `public MBBindingList<EncyclopediaDwellingVM> Dwellings { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `Family` | `public MBBindingList<EncyclopediaFamilyMemberVM> Family { get; set; }` |
| `Companions` | `public MBBindingList<HeroVM> Companions { get; set; }` |
| `Enemies` | `public MBBindingList<HeroVM> Enemies { get; set; }` |
| `Allies` | `public MBBindingList<HeroVM> Allies { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `HasNeutralClan` | `public bool HasNeutralClan { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsInformationHidden` | `public bool IsInformationHidden { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `PregnantHint` | `public HintViewModel PregnantHint { get; set; }` |
| `HasAnySkills` | `public bool HasAnySkills { get; set; }` |
| `AdditionalEnemies` | `public MBBindingList<HeroVM> AdditionalEnemies { get; set; }` |
| `AdditionalAllies` | `public MBBindingList<HeroVM> AdditionalAllies { get; set; }` |
| `AnyAdditionalAllies` | `public bool AnyAdditionalAllies { get; set; }` |
| `AnyAdditionalEnemies` | `public bool AnyAdditionalEnemies { get; set; }` |
| `AdditionalAlliesString` | `public string AdditionalAlliesString { get; set; }` |
| `AdditionalEnemiesString` | `public string AdditionalEnemiesString { get; set; }` |
| `AdditionalAlliesHint` | `public BasicTooltipViewModel AdditionalAlliesHint { get; set; }` |
| `AdditionalEnemiesHint` | `public BasicTooltipViewModel AdditionalEnemiesHint { get; set; }` |

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

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 `link` 操作或流程。

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 `switch bookmarked state` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new EncyclopediaHeroPageVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)