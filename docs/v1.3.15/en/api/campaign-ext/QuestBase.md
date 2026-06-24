
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/QuestBase](/versions/QuestBase)
<!-- END BREADCRUMB -->
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** abstract class (inherits `MBObjectBase`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/QuestBase.cs`

`QuestBase` is the base class for all quests. Mods add custom quests by subclassing it and implementing `Title`, `IsRemainingTimeHidden`, and the lifecycle methods.

## Overview

A quest is started by a `QuestGiver` (the hero offering it), has a deadline `QuestDueTime`, and holds tasks (`TaskList`) and journal entries (`JournalEntries`). Start it with `StartQuest`; end it via the `CompleteQuestWith*` family by success/timeout/fail/betrayal/cancel. During the quest you can add game menus (`AddGameMenu`) and tracked objects (`AddTrackedObject`).

## Mental Model

Treat `QuestBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| QuestGiver | Hero | The hero offering the quest |
| QuestDueTime | CampaignTime | Deadline (protected set) |
| Title | TextObject | Quest title (abstract) |
| IsRemainingTimeHidden | bool | Whether remaining time is hidden (abstract) |
| TaskList | `MBReadOnlyList<QuestTaskBase>` | Quest task list |
| JournalEntries | `MBReadOnlyList<JournalLog>` | Journal entries |
| IsOngoing | bool | Whether ongoing |
| IsFinalized | bool | Whether finalized |
| IsTrackEnabled | bool | Whether tracking is enabled |
| RelationshipChangeWithQuestGiver | int | Relation change with the quest giver on completion |

## Main methods

```csharp
public void StartQuest();
public void CompleteQuestWithSuccess();
public void CompleteQuestWithTimeOut(TextObject timeOutLog = null);
public void CompleteQuestWithFail(TextObject cancelLog = null);
public void CompleteQuestWithBetrayal(TextObject betrayLog = null);
public void CompleteQuestWithCancel(TextObject cancelLog = null);

public JournalLog AddLog(TextObject text, bool hideInformation = false);
public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false);

public void AddTrackedObject(ITrackableCampaignObject trackedObject);
public void RemoveTrackedObject(ITrackableCampaignObject trackedObject);

public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None);
public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1);

public void ChangeQuestDueTime(CampaignTime questDueTime);

public virtual int GetCurrentProgress();
public virtual int GetMaxProgress();
public virtual void OnFailed();
public virtual void OnCanceled();
public virtual bool QuestPreconditions();
```

When a quest ends, the engine calls the corresponding virtual method (`OnFailed`/`OnCanceled`, etc.); override it to clean up.

## Usage example

```csharp
public class MyQuest : QuestBase
{
    public override TextObject Title => new TextObject("{=myquest}My Custom Quest");
    public override bool IsRemainingTimeHidden => false;

    protected override void RegisterEvents()
    {
        // register campaign event callbacks
    }

    protected override void InitializeQuestOnGameLoad()
    {
        // restore state on load
    }

    public void Start()
    {
        QuestDueTime = CampaignTime.Now + CampaignTime.DaysFromNow(7);
        AddLog(new TextObject("Go find the objective"));
        StartQuest();
    }

    public void OnObjectiveDone()
    {
        AddLog(new TextObject("Objective complete"));
        CompleteQuestWithSuccess();
    }
}
```

## See also

- [IssueBase](./IssueBase.md)
- [Hero](../campaign/Hero.md)
- [CampaignTime](./CampaignTime.md)
- [Campaign](./Campaign.md)

## Usage Example

```csharp
var implementation = new CustomQuestBase();
```
