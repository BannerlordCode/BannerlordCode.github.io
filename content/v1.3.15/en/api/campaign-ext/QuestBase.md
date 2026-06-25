---
title: "QuestBase"
description: "Base class for campaign quests: create, advance, complete, and track custom quests."
---
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class QuestBase : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/QuestBase.cs`

## Overview

`QuestBase` is the **core base class** of Bannerlord's campaign quest system. Inherit from it, implement a few key members, and your custom quest appears in the quest log with a due date, optional tracking, stage logs, and automatic save/load support.

Main lifecycle:

1. Create: `new MyQuest(...)` inside a `CampaignBehaviorBase` or `IssueBase`.
2. Start: call `StartQuest()` to add it to the log.
3. Advance: update the log with `AddLog` / `AddDiscreteLog`, and check completion yourself.
4. Finish: call `CompleteQuestWithSuccess()` / `Fail()` / `Cancel()` / `TimeOut()`.

## Mental Model

Think of `QuestBase` as a **timed state machine with a journal**:

- The quest itself must inherit `QuestBase`.
- Each quest instance is tied to a `QuestGiver` (usually a `Hero`).
- Journal logs (`JournalLog`) are what the player sees; stage objectives use `AddDiscreteLog` to show progress.
- Most quest logic lives in event listeners inside a `CampaignBehaviorBase`, or in virtual overrides.
- Quest state is auto-saved; fields that need persistence should be marked `[SaveableField]`.

## Core Abstract/Virtual Members

| Member | Description |
|--------|-------------|
| `Title` (abstract) | Quest title. |
| `IsRemainingTimeHidden` (abstract) | Hide remaining time or not. |
| `QuestGiver` | Quest giver. |
| `QuestDueTime` | Due date. |
| `RewardGold` / `RewardXP` | Gold/XP rewards. |
| `IsOngoing` / `IsFinalized` | Whether the quest is running / finished. |
| `RelationshipChangeWithQuestGiver` | Relation change with giver on completion. |
| `OnFailed()` / `OnCanceled()` | Failure/cancel callbacks. |
| `QuestPreconditions()` | Check quest preconditions. |

## Key Methods

### `public void StartQuest()`
Add the quest to the log and start it.

```csharp
var quest = new MyRescueQuest(questGiver);
quest.StartQuest();
```

### `public void CompleteQuestWithSuccess()` / `CompleteQuestWithFail(TextObject cancelLog)` / `CompleteQuestWithTimeOut(TextObject timeOutLog)` / `CompleteQuestWithCancel(TextObject cancelLog)`
End the quest in different states.

```csharp
if (AllHostagesRescued())
{
    CompleteQuestWithSuccess();
}
else if (quest.QuestDueTime.IsPast)
{
    CompleteQuestWithTimeOut(new TextObject("The deadline has passed."));
}
```

### `public JournalLog AddLog(TextObject text, bool hideInformation = false)` / `AddDiscreteLog(...)` / `AddTwoWayContinuousLog(...)`
Add journal entries.

```csharp
AddDiscreteLog(
    new TextObject("Hostages rescued"),
    new TextObject("Rescue"),
    rescuedCount,
    totalHostages);
```

### `public void AddTrackedObject(ITrackableCampaignObject trackedObject)` / `RemoveTrackedObject(...)` / `IsTracked(...)`
Highlight an object on the campaign map.

```csharp
AddTrackedObject(targetSettlement);
```

### `public void AddGameMenu(...)` / `AddGameMenuOption(...)`
Add dynamic campaign-map menu options for the quest.

```csharp
AddGameMenuOption(
    "town",
    "my_quest_option",
    new TextObject("Ask about the bandits"),
    OnCondition,
    OnConsequence);
```

### `public void ChangeQuestDueTime(CampaignTime questDueTime)`
Change the quest deadline.

```csharp
ChangeQuestDueTime(CampaignTime.Now + CampaignTime.Days(3));
```

## Typical Usage Example

```csharp
public class RescueHostageQuest : QuestBase
{
    [SaveableField(0)]
    private Hero _hostage;

    [SaveableField(1)]
    private int _rescuedCount;

    public override TextObject Title => new TextObject("Rescue the Hostage");

    public override bool IsRemainingTimeHidden => false;

    public RescueHostageQuest(Hero questGiver, Hero hostage)
        : base("rescue_hostage_quest", questGiver, CampaignTime.DaysFromNow(7))
    {
        _hostage = hostage;
    }

    protected override void OnStartQuest()
    {
        base.OnStartQuest();
        AddDiscreteLog(
            new TextObject("Find and rescue {HOSTAGE}"),
            new TextObject("Rescue"),
            0, 1,
            null,
            false);
    }

    protected override void OnFinalize()
    {
        if (_hostage.IsAlive && _hostage.CurrentSettlement != null)
        {
            CompleteQuestWithSuccess();
        }
        else
        {
            CompleteQuestWithFail(new TextObject("The hostage did not survive."));
        }
    }
}
```

> Actual event triggers (entering a settlement, defeating a party, etc.) are usually subscribed in `CampaignBehaviorBase.RegisterEvents()`, which then calls methods on the quest instance.

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 `QuestBase` structure is mostly unchanged, but some callback signatures may have `in`/`ref` adjustments.
- v1.4.5 adds more built-in support for custom `QuestTaskBase` and tracked objects.

## See Also

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — common hook to create and manage quests
- [IssueBase](../IssueBase/) — the "issue/contract" object that often starts a quest
- [Hero](../../campaign/Hero/) — quest giver and targets
- [Settlement](../../campaign/Settlement/) — quest locations
- [MobileParty](../../campaign/MobileParty/) — tracking party-based objectives
