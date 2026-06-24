<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordsNeedsTutorIssueQuest`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LordsNeedsTutorIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordsNeedsTutorIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LordsNeedsTutorIssueBehavior.cs`

## 概述

`LordsNeedsTutorIssueQuest` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

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
var value = new LordsNeedsTutorIssueQuest();
value.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

## 参见

- [完整类目录](../catalog)