---
title: "IssueBase"
description: "Issues/contracts offered by villagers or lords: can be solved by a quest, alternative troops, or a lord solution."
---
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class IssueBase : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/Issues/IssueBase.cs`

## Overview

`IssueBase` is the base class for Bannerlord's **"issue/contract"** system. The quests offered above villagers', innkeepers', or lords' heads are backed by `IssueBase` instances. Its relationship with `QuestBase`:

- `IssueBase` = the contract an NPC offers.
- `QuestBase` = the tracked entry in the player's quest log after accepting.
- When the player accepts, `IssueBase` usually calls `StartIssueWithQuest()` to create the matching `QuestBase`.

Three solution types:

1. **Quest solution** — the player personally completes the task.
2. **Alternative solution** — send a party and companion to resolve it, returning after several days.
3. **Lord solution** — persuade a local lord to handle it, spending influence or relations.

## Mental Model

Think of `IssueBase` as the **"optional quest entry point attached to an NPC"**:

- It provides dialogue text, availability conditions, and solution explanations.
- It does not store player progress directly; that lives in `QuestBase`.
- Each `IssueBase` has an `IssueOwner` (the offering hero) and an `IssueSettlement`.
- You can listen for new issues via `CampaignEvents` or manually create and start one during an NPC conversation.

## Core Abstract/Virtual Members

| Member | Description |
|--------|-------------|
| `Title` (abstract) | Issue title. |
| `Description` (abstract) | Description text. |
| `IssueBriefByIssueGiver` / `IssueAcceptByPlayer` / `IssueQuestSolutionExplanationByIssueGiver` / `IssueQuestSolutionAcceptByPlayer` (abstract) | Dialogue lines. |
| `IsThereAlternativeSolution` / `IsThereLordSolution` (abstract) | Whether alt/lord solutions exist. |
| `IssueOwner` | Offering hero. |
| `IssueSettlement` | Settlement where issue occurs. |
| `IssueQuest` | Associated `QuestBase`. |
| `AlternativeSolutionBaseNeededMenCount` / `AlternativeSolutionReturnTimeForTroops` | Alt solution requirements. |
| `RelationshipChangeWithIssueOwner` | Relation change after solving. |

## Key Methods

### `public bool StartIssueWithQuest()`
Start the quest solution: create and enable the linked `QuestBase`.

```csharp
issue.StartIssueWithQuest();
```

### `public void StartIssueWithAlternativeSolution()`
Start the alternative solution: send assigned troops and a companion away; they return after the duration.

```csharp
issue.StartIssueWithAlternativeSolution();
```

### `public void StartIssueWithLordSolution()`
Request a lord solution.

```csharp
issue.StartIssueWithLordSolution();
```

### `public virtual bool AlternativeSolutionCondition(out TextObject explanation)`
Check whether the alternative solution is available.

```csharp
if (issue.AlternativeSolutionCondition(out TextObject reason))
{
    issue.StartIssueWithAlternativeSolution();
}
else
{
    InformationManager.DisplayMessage(new InformationMessage(reason.ToString()));
}
```

### `public virtual bool LordSolutionCondition(out TextObject explanation)`
Check whether the lord solution is available.

```csharp
bool available = issue.LordSolutionCondition(out TextObject reason);
if (!available)
{
    InformationManager.DisplayMessage(new InformationMessage(reason.ToString()));
}
```

### `public void CompleteIssueWithQuest()` / `CompleteIssueWithAlternativeSolution()` / `CompleteIssueWithLordSolutionWithAcceptCounterOffer()`
Complete the issue through different solutions.

```csharp
// Resolve the issue by creating its associated quest.
issue.CompleteIssueWithQuest();
```

### `public void CompleteIssueWithTimedOut()` / `CompleteIssueWithFail(TextObject log)` / `CompleteIssueWithCancel(TextObject log)`
End the issue by timeout/failure/cancellation.

```csharp
issue.CompleteIssueWithFail(new TextObject("The request could not be fulfilled."));
```

### `public void AddLog(JournalLog log)`
Add an entry to the visible issue log.

```csharp
issue.AddLog(new JournalLog(CampaignTime.Now, new TextObject("A rumor was heard"), null, false));
```

### `public abstract IssueFrequency GetFrequency()` / `public abstract bool IssueStayAliveConditions()`
Control spawn frequency and survival conditions.

```csharp
public override IssueFrequency GetFrequency() => IssueFrequency.VeryCommmon;

public override bool IssueStayAliveConditions() => 
    IssueOwner.IsAlive && !QuestBase.CurrentQuestCheck; // keep issue alive while valid
```

## Typical Usage Example

### Example 1: Manually add an issue to an NPC

```csharp
public class MyCustomIssue : IssueBase
{
    public override TextObject Title => new TextObject("Bandit Trouble");

    public override TextObject Description => new TextObject("Bandits are raiding nearby villages.");

    protected override bool CanPlayerTakeQuestConditions(Hero issueGiver, out PreconditionFlags flags, out TextObject explanation)
    {
        flags = PreconditionFlags.None;
        explanation = TextObject.Empty;
        return true;
    }

    // ... other abstract members
}
```

### Example 2: Listen for issue creation in a `CampaignBehavior`

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnIssueCreatedEvent.AddNonSerializedListener(this, OnIssueCreated);
}

private void OnIssueCreated(IssueBase issue)
{
    if (issue is MyCustomIssue myIssue)
    {
        // custom initialization
    }
}
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 `IssueBase` API is consistent.
- v1.4.5 rebalanced AI auto-completion and alternative solutions, but the abstract interface is unchanged.

## See Also

- [QuestBase](../QuestBase/) — the quest that an issue creates
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — create/listen for issues
- [Hero](../../campaign/Hero/) — issue owner
- [Settlement](../../campaign/Settlement/) — issue location
