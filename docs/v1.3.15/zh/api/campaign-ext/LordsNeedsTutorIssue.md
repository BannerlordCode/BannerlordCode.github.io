<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordsNeedsTutorIssue`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordsNeedsTutorIssue

**命名空间:** TaleWorlds.CampaignSystem.Issues
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class LordsNeedsTutorIssue`
**领域:** campaign-ext

## 概述

`LordsNeedsTutorIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 获取 `frequency` 的当前值。

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 处理 `issue stay alive conditions` 相关逻辑。

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can be selected in inventory info is requested` 事件触发时调用此方法。

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have party role or be governor info is requested` 事件触发时调用此方法。

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can lead party info is requested` 事件触发时调用此方法。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### OnHeroCanMarryInfoIsRequested
`public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can marry info is requested` 事件触发时调用此方法。

### OnHeroGainedSkill
`public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**用途 / Purpose:** 当 `hero gained skill` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 LordsNeedsTutorIssue 实例，再调用它的公开方法
var value = new LordsNeedsTutorIssue();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
