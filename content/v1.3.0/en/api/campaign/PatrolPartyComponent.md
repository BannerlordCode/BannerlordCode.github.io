---
title: "PatrolPartyComponent"
description: "Auto-generated class reference for PatrolPartyComponent."
---
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PatrolPartyComponent.cs`

## Overview

`PatrolPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `PatrolPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Clan` | `public Clan Clan { get; }` |

## Key Methods

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the `default component banner` value held by the current object.

```csharp
// Obtain an instance of PatrolPartyComponent from the subsystem API first
PatrolPartyComponent patrolPartyComponent = ...;
var result = patrolPartyComponent.GetDefaultComponentBanner();
```

### CreatePatrolParty
`public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)`

**Purpose:** Constructs a new `patrol party` entity and returns it to the caller.

```csharp
// Static call; no instance required
PatrolPartyComponent.CreatePatrolParty("example", position, 0, homeSettlement, template);
```

### SortRoster
`public void SortRoster()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PatrolPartyComponent from the subsystem API first
PatrolPartyComponent patrolPartyComponent = ...;
patrolPartyComponent.SortRoster();
```

## Usage Example

```csharp
var component = agent.GetComponent<PatrolPartyComponent>();
```

## See Also

- [Area Index](../)