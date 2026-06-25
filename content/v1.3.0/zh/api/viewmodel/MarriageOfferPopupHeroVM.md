---
title: "MarriageOfferPopupHeroVM"
description: "MarriageOfferPopupHeroVM 的自动生成类参考。"
---
# MarriageOfferPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs`

## 概述

`MarriageOfferPopupHeroVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `EncyclopediaLinkWithName` | `public string EncyclopediaLinkWithName { get; set; }` |
| `AgeString` | `public string AgeString { get; set; }` |
| `OccupationString` | `public string OccupationString { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupHeroVM 实例
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.Update();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupHeroVM 实例
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupHeroVM 实例
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.OnFinalize();
```

### ExecuteHeroLink
`public void ExecuteHeroLink()`

**用途 / Purpose:** 执行 「hero link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupHeroVM 实例
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.ExecuteHeroLink();
```

### ExecuteClanLink
`public void ExecuteClanLink()`

**用途 / Purpose:** 执行 「clan link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupHeroVM 实例
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.ExecuteClanLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.Update();
```

## 参见

- [本区域目录](../)