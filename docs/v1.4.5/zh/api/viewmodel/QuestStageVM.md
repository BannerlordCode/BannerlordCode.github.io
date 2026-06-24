<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestStageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QuestStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestStageVM.cs`

## 概述

`QuestStageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DateText` | `public string DateText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HasATask` | `public bool HasATask { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsLastStage` | `public bool IsLastStage { get; set; }` |
| `IsTaskCompleted` | `public bool IsTaskCompleted { get; set; }` |
| `StageTask` | `public QuestStageTaskVM StageTask { get; set; }` |

## 主要方法

### ExecuteResetUpdated
`public void ExecuteResetUpdated()`

**用途 / Purpose:** 执行 `reset updated` 操作或流程。

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 `link` 操作或流程。

### UpdateIsNew
`public void UpdateIsNew()`

**用途 / Purpose:** 更新 `is new` 的状态或数据。

## 使用示例

```csharp
var value = new QuestStageVM();
value.ExecuteResetUpdated();
```

## 参见

- [完整类目录](../catalog)