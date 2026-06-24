<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/QuestBase](/versions/QuestBase)
<!-- END BREADCRUMB -->
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class QuestBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/QuestBase.cs`

## Overview

`QuestBase` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestDueTime` | `public CampaignTime QuestDueTime { get; set; }` |
| `IsTrackEnabled` | `public bool IsTrackEnabled { get; }` |
| `QuestGiver` | `public Hero QuestGiver { get; }` |
| `Title` | `public abstract TextObject Title { get; set; }` |
| `IsRemainingTimeHidden` | `public abstract bool IsRemainingTimeHidden { get; set; }` |
| `RelationshipChangeWithQuestGiver` | `public virtual int RelationshipChangeWithQuestGiver { get; set; }` |

## Key Methods

### StartQuest
`public void StartQuest()`

**Purpose:** Handles logic related to `start quest`.

### CompleteQuestWithSuccess
`public void CompleteQuestWithSuccess()`

**Purpose:** Handles logic related to `complete quest with success`.

### CompleteQuestWithTimeOut
`public void CompleteQuestWithTimeOut(TextObject timeOutLog = null)`

**Purpose:** Handles logic related to `complete quest with time out`.

### CompleteQuestWithFail
`public void CompleteQuestWithFail(TextObject cancelLog = null)`

**Purpose:** Handles logic related to `complete quest with fail`.

### CompleteQuestWithBetrayal
`public void CompleteQuestWithBetrayal(TextObject betrayLog = null)`

**Purpose:** Handles logic related to `complete quest with betrayal`.

### CompleteQuestWithCancel
`public void CompleteQuestWithCancel(TextObject cancelLog = null)`

**Purpose:** Handles logic related to `complete quest with cancel`.

### InitializeQuestOnLoadWithQuestManager
`public void InitializeQuestOnLoadWithQuestManager()`

**Purpose:** Initializes the state, resources, or bindings for `quest on load with quest manager`.

### AddLog
`public JournalLog AddLog(TextObject text, bool hideInformation = false)`

**Purpose:** Adds `log` to the current collection or state.

### AddDiscreteLog
`public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false)`

**Purpose:** Adds `discrete log` to the current collection or state.

### AddTwoWayContinuousLog
`public JournalLog AddTwoWayContinuousLog(TextObject text, TextObject taskName, int currentProgress, int range, bool hideInformation = false)`

**Purpose:** Adds `two way continuous log` to the current collection or state.

### IsLocationTrackedByQuest
`public virtual GameMenuOption.IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**Purpose:** Handles logic related to `is location tracked by quest`.

### GetCurrentProgress
`public virtual int GetCurrentProgress()`

**Purpose:** Gets the current value of `current progress`.

### GetMaxProgress
`public virtual int GetMaxProgress()`

**Purpose:** Gets the current value of `max progress`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetPrefabName
`public virtual string GetPrefabName()`

**Purpose:** Gets the current value of `prefab name`.

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject trackedObject)`

**Purpose:** Adds `tracked object` to the current collection or state.

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableCampaignObject trackedObject)`

**Purpose:** Removes `tracked object` from the current collection or state.

### IsTracked
`public bool IsTracked(ITrackableCampaignObject o)`

**Purpose:** Handles logic related to `is tracked`.

### ToggleTrackedObjects
`public void ToggleTrackedObjects()`

**Purpose:** Handles logic related to `toggle tracked objects`.

### AddGameMenu
`public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None)`

**Purpose:** Adds `game menu` to the current collection or state.

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1)`

**Purpose:** Adds `game menu option` to the current collection or state.

### ChangeQuestDueTime
`public void ChangeQuestDueTime(CampaignTime questDueTime)`

**Purpose:** Handles logic related to `change quest due time`.

### OnFailed
`public virtual void OnFailed()`

**Purpose:** Called when the `failed` event is raised.

### OnCanceled
`public virtual void OnCanceled()`

**Purpose:** Called when the `canceled` event is raised.

### QuestPreconditions
`public virtual bool QuestPreconditions()`

**Purpose:** Handles logic related to `quest preconditions`.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can marry info is requested` event is raised.

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can lead party info is requested` event is raised.

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have party role or be governor info is requested` event is raised.

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Called when the `hero can die info is requested` event is raised.

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can become prisoner info is requested` event is raised.

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can be selected in inventory info is requested` event is raised.

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can move to settlement info is requested` event is raised.

## Usage Example

```csharp
var implementation = new CustomQuestBase();
```

## See Also

- [Complete Class Catalog](../catalog)