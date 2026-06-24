<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationGainedPropertiesVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationGainedPropertiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedPropertiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedPropertiesVM.cs`

## 概述

`CharacterCreationGainedPropertiesVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GainGroups` | `public MBBindingList<CharacterCreationGainGroupItemVM> GainGroups { get; set; }` |
| `GainedTraits` | `public MBBindingList<EncyclopediaTraitItemVM> GainedTraits { get; set; }` |
| `OtherSkills` | `public MBBindingList<CharacterCreationGainedSkillItemVM> OtherSkills { get; set; }` |

## 主要方法

### UpdateValues
`public void UpdateValues()`

**用途 / Purpose:** 更新 `values` 的状态或数据。

## 使用示例

```csharp
var value = new CharacterCreationGainedPropertiesVM();
value.UpdateValues();
```

## 参见

- [完整类目录](../catalog)