<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationStageBaseVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterCreationStageBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs`

## 概述

`CharacterCreationStageBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `NextStageText` | `public string NextStageText { get; set; }` |
| `PreviousStageText` | `public string PreviousStageText { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `AnyItemSelected` | `public bool AnyItemSelected { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |

## 主要方法

### OnNextStage
`public abstract void OnNextStage()`

**用途 / Purpose:** 当 `next stage` 事件触发时调用此方法。

### OnPreviousStage
`public abstract void OnPreviousStage()`

**用途 / Purpose:** 当 `previous stage` 事件触发时调用此方法。

### CanAdvanceToNextStage
`public abstract bool CanAdvanceToNextStage()`

**用途 / Purpose:** 判断当前对象是否可以执行 `advance to next stage`。

## 使用示例

```csharp
var implementation = new CustomCharacterCreationStageBaseVM();
```

## 参见

- [完整类目录](../catalog)