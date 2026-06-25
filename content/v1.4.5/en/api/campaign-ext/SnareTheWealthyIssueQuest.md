---
title: "SnareTheWealthyIssueQuest"
description: "Auto-generated class reference for SnareTheWealthyIssueQuest."
---
# SnareTheWealthyIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/SnareTheWealthyIssueBehavior.cs`

## Overview

`SnareTheWealthyIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**Purpose:** Reads and returns the mount and harness visual ids for quest caravan value held by the this instance.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarDetail reason)`

**Purpose:** Invoked when the war declared event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnWarDeclared(faction1, faction2, reason);
```

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, VillageStates oldState, VillageStates newState, MobileParty raiderParty)`

**Purpose:** Invoked when the village state changed event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the map event ended event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnMapEventEnded(mapEvent);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the settlement left event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnSettlementLeft(party, settlement);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueQuest from the subsystem API first
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

## See Also

- [Area Index](../)