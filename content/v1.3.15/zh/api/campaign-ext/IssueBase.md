---
title: "IssueBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/IssueBase](/versions/IssueBase)
<!-- END BREADCRUMB -->
# IssueBase

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** abstract class（继?

`MBObjectBase

`? 
**文件:** 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/Issues/IssueBase.cs

`

`IssueBase

` 是所?要人问题"（issue）的基类。要人在城镇/村庄里向玩家提出问题，玩家可选择：完成对应任务（quest）、派遣部队的替代方案（alternative solution），或交由领主处理（lord solution）。mod 通过继承它来添加自定义问题?
## 概述

每个问题挂在一?

`IssueOwner

`（提供问题的英雄）上。子类必须实现对话文本属性（

`IssueBriefByIssueGiver

` 等）?

`IsThereAlternativeSolution

` / 

`IsThereLordSolution

` 布尔。替代方案涉及所需兵力（`AlternativeSolutionBaseNeededMenCount

`）与时长（`GetBaseAlternativeSolutionDurationInDays

`），并可通过 

`AlternativeSolutionCondition

` / 

`DoTroopsSatisfyAlternativeSolution

` 校验?
## 心智模型

先把 `IssueBase` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 关键抽象成员（必须实现）

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| IssueBriefByIssueGiver \| TextObject \| 问题简述（要人口述?\|
\| IssueAcceptByPlayer \| TextObject \| 玩家接受时的台词 \|
\| IssueQuestSolutionExplanationByIssueGiver \| TextObject \| 任务解法的说?\|
\| IssueQuestSolutionAcceptByPlayer \| TextObject \| 玩家接受任务解法的台?\|
\| IsThereAlternativeSolution \| bool \| 是否有替代（派兵）解?\|
\| IsThereLordSolution \| bool \| 是否有领主解?\|

## 关键虚成?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| IssuePlayerResponseAfterLordExplanation \| TextObject \| 领主解法说明后玩家回?\|
\| IssueAlternativeSolutionExplanationByIssueGiver \| TextObject \| 替代解法说明 \|
\| AlternativeSolutionBaseNeededMenCount \| int \| 替代解法所需基础兵力 \|
\| AlternativeSolutionHero \| Hero \| 执行替代解法的英?\|
\| CounterOfferHero \| Hero \| 领主反建议的英雄 \|
\| NeededInfluenceForLordSolution \| int \| 领主解法所需影响?\|
\| IssueAsRumorInSettlement \| TextObject \| 作为传闻出现的文?\|

## 关键方法

`

`

`csharp
public int GetTotalAlternativeSolutionNeededMenCount();
public int GetTotalAlternativeSolutionDurationInDays();
public int GetBaseAlternativeSolutionDurationInDays();

public virtual bool AlternativeSolutionCondition(out TextObject explanation);
public virtual void AlternativeSolutionStartConsequence();
public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation);
public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character);

public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }
public virtual TextObject IssueAlternativeSolutionFailLog { get; }
`

`

`

## 使用示例

`

`

`csharp
public class MyIssue : IssueBase
{
    public override TextObject IssueBriefByIssueGiver =&gt; new TextObject("{=myissue_brief}我的商队被抢?..");
    public override TextObject IssueAcceptByPlayer =&gt; new TextObject("{=myissue_accept}我来帮你?);
    public override TextObject IssueQuestSolutionExplanationByIssueGiver =&gt; new TextObject("{=myissue_quest}去剿灭那伙强盗?);
    public override TextObject IssueQuestSolutionAcceptByPlayer =&gt; new TextObject("{=myissue_questacc}交给我?);
    public override bool IsThereAlternativeSolution =&gt; true;
    public override bool IsThereLordSolution =&gt; false;

    public override int AlternativeSolutionBaseNeededMenCount =&gt; 10;

    public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)
    {
        explanation = TextObject.Empty;
        return troopRoster.TotalManCount &gt;= AlternativeSolutionBaseNeededMenCount;
    }

    public override QuestBase GetIssueQuest() =&gt; new MyQuest(IssueOwner);
}
`

`

`

> **提示**
> 问题与任务配合：
>
> `IssueBase
>
> ` 描述问题与解法对话，
>
> `GetIssueQuest
>
> ` 返回玩家选择任务解法时启动的 
>
> `QuestBase
>
> `。详见源文件中的完整虚方法表

## 参见

- [QuestBase](./QuestBase)
- [Hero](../campaign/Hero)
- [Campaign](./Campaign)
