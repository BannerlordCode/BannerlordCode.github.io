---
title: "EncyclopediaUnitPageVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaUnitPageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaUnitPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaUnitPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaUnitPageVM.cs`

## 概述

`EncyclopediaUnitPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `PropertiesList` | `public MBBindingList<StringItemWithHintVM> PropertiesList { get; set; }` |
| `EquipmentSetSelector` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM> EquipmentSetSelector { get; set; }` |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet { get; set; }` |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree { get; set; }` |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText { get; set; }` |
| `EquipmentSetText` | `public string EquipmentSetText { get; set; }` |
| `HasErrors` | `public bool HasErrors { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

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
var value = new EncyclopediaUnitPageVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)