---
title: "FamilyFeudIssueQuest"
description: "Auto-generated class reference for FamilyFeudIssueQuest."
---
# FamilyFeudIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`

## Overview

`FamilyFeudIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**Purpose:** Invoked when the `mission started` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** Invoked when the `before mission opened` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueQuest from the subsystem API first
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnBeforeMissionOpened();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)