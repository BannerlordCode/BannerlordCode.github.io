<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationGainedSkillItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationGainedSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedSkillItemVM.cs`

## 概述

`CharacterCreationGainedSkillItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SkillObj` | `public SkillObject SkillObj { get; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `Skill` | `public EncyclopediaSkillVM Skill { get; set; }` |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage { get; set; }` |
| `FocusPointGainList` | `public MBBindingList<BoolItemWithActionVM> FocusPointGainList { get; set; }` |

## 主要方法

### SetValue
`public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**用途 / Purpose:** 设置 `value` 的值或状态。

## 使用示例

```csharp
var value = new CharacterCreationGainedSkillItemVM();
value.SetValue(0, 0);
```

## 参见

- [完整类目录](../catalog)