<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonerRecruitCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonerRecruitCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PrisonerRecruitCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/PrisonerRecruitCampaignBehavior.cs`

## 概述

`PrisonerRecruitCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### conversation_prisoner_recruit_on_condition
`public bool conversation_prisoner_recruit_on_condition()`

**用途 / Purpose:** 处理 `conversation_prisoner_recruit_on_condition` 相关逻辑。

### conversation_prisoner_recruit_no_on_condition
`public bool conversation_prisoner_recruit_no_on_condition()`

**用途 / Purpose:** 处理 `conversation_prisoner_recruit_no_on_condition` 相关逻辑。

## 使用示例

```csharp
var value = new PrisonerRecruitCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)