<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuOption`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuOption

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenuOption`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs`

## 概述

`NarrativeMenuOption` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |

## 主要方法

### OnCondition
`public bool OnCondition(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 当 `condition` 事件触发时调用此方法。

### OnSelect
`public void OnSelect(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 当 `select` 事件触发时调用此方法。

### OnConsequence
`public void OnConsequence(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 当 `consequence` 事件触发时调用此方法。

### SetOnCondition
`public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)`

**用途 / Purpose:** 设置 `on condition` 的值或状态。

### SetOnSelect
`public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)`

**用途 / Purpose:** 设置 `on select` 的值或状态。

### SetOnConsequence
`public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)`

**用途 / Purpose:** 设置 `on consequence` 的值或状态。

### ApplyFinalEffects
`public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)`

**用途 / Purpose:** 将 `final effects` 应用到当前对象。

## 使用示例

```csharp
var value = new NarrativeMenuOption();
value.OnCondition(characterCreationManager);
```

## 参见

- [完整类目录](../catalog)