---
title: "HeirSelectionPopupHeroVM"
description: "HeirSelectionPopupHeroVM 的自动生成类参考。"
---
# HeirSelectionPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupHeroVM.cs`

## 概述

`HeirSelectionPopupHeroVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Age` | `public int Age { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |
| `Occupation` | `public string Occupation { get; set; }` |
| `RelationToMainHero` | `public string RelationToMainHero { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupHeroVM 实例
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupHeroVM 实例
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.RefreshValues();
```

## 参见

- [本区域目录](../)