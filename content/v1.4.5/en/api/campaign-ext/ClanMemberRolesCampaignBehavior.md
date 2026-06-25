---
title: "ClanMemberRolesCampaignBehavior"
description: "Auto-generated class reference for ClanMemberRolesCampaignBehavior."
---
# ClanMemberRolesCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class ClanMemberRolesCampaignBehavior : CampaignBehaviorBase, IMissionPlayerFollowerHandler`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs`

## Overview

`ClanMemberRolesCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ClanMemberRolesCampaignBehavior from the subsystem API first
ClanMemberRolesCampaignBehavior clanMemberRolesCampaignBehavior = ...;
clanMemberRolesCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of ClanMemberRolesCampaignBehavior from the subsystem API first
ClanMemberRolesCampaignBehavior clanMemberRolesCampaignBehavior = ...;
clanMemberRolesCampaignBehavior.SyncData(dataStore);
```

### IsFollowingPlayer
`public bool IsFollowingPlayer(Hero hero)`

**Purpose:** Determines whether the current object is in the `following player` state or condition.

```csharp
// Obtain an instance of ClanMemberRolesCampaignBehavior from the subsystem API first
ClanMemberRolesCampaignBehavior clanMemberRolesCampaignBehavior = ...;
var result = clanMemberRolesCampaignBehavior.IsFollowingPlayer(hero);
```

### RemoveFollowingHero
`public void RemoveFollowingHero(Hero hero)`

**Purpose:** Removes `following hero` from the current collection or state.

```csharp
// Obtain an instance of ClanMemberRolesCampaignBehavior from the subsystem API first
ClanMemberRolesCampaignBehavior clanMemberRolesCampaignBehavior = ...;
clanMemberRolesCampaignBehavior.RemoveFollowingHero(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanMemberRolesCampaignBehavior clanMemberRolesCampaignBehavior = ...;
clanMemberRolesCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)