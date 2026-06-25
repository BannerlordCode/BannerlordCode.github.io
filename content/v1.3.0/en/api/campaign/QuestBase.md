---
title: "QuestBase"
description: "Auto-generated class reference for QuestBase."
---
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class QuestBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/QuestBase.cs`

## Overview

`QuestBase` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestDueTime` | `public CampaignTime QuestDueTime { get; set; }` |
| `TaskList` | `public MBReadOnlyList<QuestTaskBase> TaskList { get; }` |
| `JournalEntries` | `public MBReadOnlyList<JournalLog> JournalEntries { get; }` |
| `IsTrackEnabled` | `public bool IsTrackEnabled { get; }` |
| `IsOngoing` | `public bool IsOngoing { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsThereDiscussDialogFlow` | `public bool IsThereDiscussDialogFlow { get; }` |
| `QuestGiver` | `public Hero QuestGiver { get; }` |
| `Title` | `public abstract TextObject Title { get; set; }` |
| `IsRemainingTimeHidden` | `public abstract bool IsRemainingTimeHidden { get; set; }` |
| `RelationshipChangeWithQuestGiver` | `public virtual int RelationshipChangeWithQuestGiver { get; set; }` |
| `IsSpecialQuest` | `public virtual bool IsSpecialQuest { get; }` |

## Key Methods

### StartQuest
`public void StartQuest()`

**Purpose:** Starts the `quest` flow or state machine.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.StartQuest();
```

### CompleteQuestWithSuccess
`public void CompleteQuestWithSuccess()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.CompleteQuestWithSuccess();
```

### CompleteQuestWithTimeOut
`public void CompleteQuestWithTimeOut(TextObject timeOutLog = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.CompleteQuestWithTimeOut(null);
```

### CompleteQuestWithFail
`public void CompleteQuestWithFail(TextObject cancelLog = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.CompleteQuestWithFail(null);
```

### CompleteQuestWithBetrayal
`public void CompleteQuestWithBetrayal(TextObject betrayLog = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.CompleteQuestWithBetrayal(null);
```

### CompleteQuestWithCancel
`public void CompleteQuestWithCancel(TextObject cancelLog = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.CompleteQuestWithCancel(null);
```

### InitializeQuestOnLoadWithQuestManager
`public void InitializeQuestOnLoadWithQuestManager()`

**Purpose:** Prepares the resources, state, or bindings required by `quest on load with quest manager`.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.InitializeQuestOnLoadWithQuestManager();
```

### AddLog
`public JournalLog AddLog(TextObject text, bool hideInformation = false)`

**Purpose:** Adds `log` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.AddLog(text, false);
```

### AddDiscreteLog
`public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false)`

**Purpose:** Adds `discrete log` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.AddDiscreteLog(text, taskName, 0, 0, null, false);
```

### AddTwoWayContinuousLog
`public JournalLog AddTwoWayContinuousLog(TextObject text, TextObject taskName, int currentProgress, int range, bool hideInformation = false)`

**Purpose:** Adds `two way continuous log` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.AddTwoWayContinuousLog(text, taskName, 0, 0, false);
```

### IsLocationTrackedByQuest
`public virtual GameMenuOption.IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**Purpose:** Determines whether the current object is in the `location tracked by quest` state or condition.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.IsLocationTrackedByQuest(location);
```

### GetCurrentProgress
`public virtual int GetCurrentProgress()`

**Purpose:** Reads and returns the `current progress` value held by the current object.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.GetCurrentProgress();
```

### GetMaxProgress
`public virtual int GetMaxProgress()`

**Purpose:** Reads and returns the `max progress` value held by the current object.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.GetMaxProgress();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.ToString();
```

### GetPrefabName
`public virtual string GetPrefabName()`

**Purpose:** Reads and returns the `prefab name` value held by the current object.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.GetPrefabName();
```

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject trackedObject)`

**Purpose:** Adds `tracked object` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.AddTrackedObject(trackedObject);
```

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableCampaignObject trackedObject)`

**Purpose:** Removes `tracked object` from the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.RemoveTrackedObject(trackedObject);
```

### IsTracked
`public bool IsTracked(ITrackableCampaignObject o)`

**Purpose:** Determines whether the current object is in the `tracked` state or condition.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.IsTracked(o);
```

### ToggleTrackedObjects
`public void ToggleTrackedObjects()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.ToggleTrackedObjects();
```

### AddGameMenu
`public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None)`

**Purpose:** Adds `game menu` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.AddGameMenu("example", menuText, initDelegate, gameMenu.MenuOverlayType.None, gameMenu.MenuFlags.None);
```

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1)`

**Purpose:** Adds `game menu option` to the current collection or state.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.AddGameMenuOption("example", "example", optionText, condition, consequence, false, 0);
```

### ChangeQuestDueTime
`public void ChangeQuestDueTime(CampaignTime questDueTime)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.ChangeQuestDueTime(questDueTime);
```

### OnFailed
`public virtual void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnFailed();
```

### OnCanceled
`public virtual void OnCanceled()`

**Purpose:** Invoked when the `canceled` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnCanceled();
```

### QuestPreconditions
`public virtual bool QuestPreconditions()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
var result = questBase.QuestPreconditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can marry info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Invoked when the `hero can die info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can become prisoner info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanBecomePrisonerInfoIsRequested(hero, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can move to settlement info is requested` event is raised.

```csharp
// Obtain an instance of QuestBase from the subsystem API first
QuestBase questBase = ...;
questBase.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
QuestBase instance = ...;
```

## See Also

- [Area Index](../)