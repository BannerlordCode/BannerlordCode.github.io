<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/IssueBase](/versions/IssueBase)
<!-- END BREADCRUMB -->
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** abstract class (inherits `MBObjectBase`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Issues/IssueBase.cs`

`IssueBase` is the base class for all notable issues. Notables in towns and villages offer issues to the player, who may: complete the associated quest, dispatch troops via an alternative solution, or delegate to a lord solution. Mods add custom issues by inheriting it.

## Overview

Each issue is attached to an `IssueOwner` (the hero providing the issue). Subclasses must implement the dialogue text properties (`IssueBriefByIssueGiver`, etc.) and the `IsThereAlternativeSolution` / `IsThereLordSolution` booleans. The alternative solution involves the required troop count (`AlternativeSolutionBaseNeededMenCount`) and duration (`GetBaseAlternativeSolutionDurationInDays`), validated via `AlternativeSolutionCondition` / `DoTroopsSatisfyAlternativeSolution`.

## Key abstract members (must implement)

| Name | Type | Description |
|------|------|-------------|
| IssueBriefByIssueGiver | TextObject | Issue brief (spoken by the notable) |
| IssueAcceptByPlayer | TextObject | Player line on accepting |
| IssueQuestSolutionExplanationByIssueGiver | TextObject | Quest-solution explanation |
| IssueQuestSolutionAcceptByPlayer | TextObject | Player line accepting the quest solution |
| IsThereAlternativeSolution | bool | Whether a troop-dispatch solution exists |
| IsThereLordSolution | bool | Whether a lord solution exists |

## Key virtual members

| Name | Type | Description |
|------|------|-------------|
| IssuePlayerResponseAfterLordExplanation | TextObject | Player response after the lord-solution explanation |
| IssueAlternativeSolutionExplanationByIssueGiver | TextObject | Alternative-solution explanation |
| AlternativeSolutionBaseNeededMenCount | int | Base troop count needed for the alternative solution |
| AlternativeSolutionHero | Hero | Hero executing the alternative solution |
| CounterOfferHero | Hero | Hero proposing the lord counter-offer |
| NeededInfluenceForLordSolution | int | Influence needed for the lord solution |
| IssueAsRumorInSettlement | TextObject | Text shown when the issue appears as a rumor |

## Key methods

```csharp
public int GetTotalAlternativeSolutionNeededMenCount();
public int GetTotalAlternativeSolutionDurationInDays();
public int GetBaseAlternativeSolutionDurationInDays();

public virtual bool AlternativeSolutionCondition(out TextObject explanation);
public virtual void AlternativeSolutionStartConsequence();
public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation);
public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character);

public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }
public virtual TextObject IssueAlternativeSolutionFailLog { get; }
```

## Usage example

```csharp
public class MyIssue : IssueBase
{
    public override TextObject IssueBriefByIssueGiver => new TextObject("{=myissue_brief}My caravan was robbed...");
    public override TextObject IssueAcceptByPlayer => new TextObject("{=myissue_accept}I'll help you.");
    public override TextObject IssueQuestSolutionExplanationByIssueGiver => new TextObject("{=myissue_quest}Go wipe out those bandits.");
    public override TextObject IssueQuestSolutionAcceptByPlayer => new TextObject("{=myissue_questacc}Leave it to me.");
    public override bool IsThereAlternativeSolution => true;
    public override bool IsThereLordSolution => false;

    public override int AlternativeSolutionBaseNeededMenCount => 10;

    public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)
    {
        explanation = TextObject.Empty;
        return troopRoster.TotalManCount >= AlternativeSolutionBaseNeededMenCount;
    }

    public override QuestBase GetIssueQuest() => new MyQuest(IssueOwner);
}
```

::: tip
Issues pair with quests: `IssueBase` describes the issue and solution dialogue, while `GetIssueQuest` returns the `QuestBase` launched when the player picks the quest solution. See the full virtual-method table in the source file.
:::

## See also

- [QuestBase](./QuestBase.md)
- [Hero](../campaign/Hero.md)
- [Campaign](./Campaign.md)
