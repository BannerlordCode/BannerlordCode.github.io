---
title: "EncyclopediaHeroPageVM"
description: "EncyclopediaHeroPageVM 的自动生成类参考。"
---
# EncyclopediaHeroPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaHeroPageVM.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.Refresh();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
var result = encyclopediaHeroPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
var result = encyclopediaHeroPageVM.GetNavigationBarURL();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.ExecuteLink("example");
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch bookmarked state 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.ExecuteSwitchBookmarkedState();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHeroPageVM 实例
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.RefreshValues();
```

## 参见

- [本区域目录](../)