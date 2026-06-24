<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitTroopTutorialQuestTask`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitTroopTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode.Quests
**Type:** `public class RecruitTroopTutorialQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.QuestTasks/RecruitTroopTutorialQuestTask.cs`

## 概述

`RecruitTroopTutorialQuestTask` 位于 `StoryMode.Quests.QuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.QuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeTaskOnLoad
`public void InitializeTaskOnLoad(int targetRecruitAmount, Func<CharacterObject, bool> recruitTypeConditions, Settlement recruitSettlement = null)`

**用途 / Purpose:** 初始化 `task on load` 的状态、资源或绑定。

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 设置 `references` 的值或状态。

## 使用示例

```csharp
var value = new RecruitTroopTutorialQuestTask();
value.InitializeTaskOnLoad(0, func<CharacterObject, false, null);
```

## 参见

- [完整类目录](../catalog)