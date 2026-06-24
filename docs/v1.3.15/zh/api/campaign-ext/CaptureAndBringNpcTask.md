<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaptureAndBringNpcTask`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaptureAndBringNpcTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaptureAndBringNpcTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/CaptureAndBringNpcTask.cs`

## 概述

`CaptureAndBringNpcTask` 位于 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnPlayerBattleEnd
`public void OnPlayerBattleEnd(MapEvent mapEvent)`

**用途 / Purpose:** 当 `player battle end` 事件触发时调用此方法。

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 设置 `references` 的值或状态。

## 使用示例

```csharp
var value = new CaptureAndBringNpcTask();
value.OnPlayerBattleEnd(mapEvent);
```

## 参见

- [完整类目录](../catalog)