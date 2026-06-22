<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordsNeedsTutorIssueQuest`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordsNeedsTutorIssueQuest

**命名空间:** TaleWorlds.CampaignSystem.Issues
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`LordsNeedsTutorIssueQuest` 是 `TaleWorlds.CampaignSystem.Issues` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RegisterEvents()
```

### OnCheckForIssue

```csharp
public void OnCheckForIssue(Hero hero)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetFrequency

```csharp
public override IssueBase.IssueFrequency GetFrequency()
```

### IssueStayAliveConditions

```csharp
public override bool IssueStayAliveConditions()
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested

```csharp
public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested

```csharp
public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanLeadPartyInfoIsRequested

```csharp
public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested

```csharp
public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanMarryInfoIsRequested

```csharp
public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroGainedSkill

```csharp
public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)