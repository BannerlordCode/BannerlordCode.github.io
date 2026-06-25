---
title: "ClanMemberPartyRoleModel"
description: "Auto-generated class reference for ClanMemberPartyRoleModel."
---
# ClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel>`
**Base:** `MBGameModel<ClanMemberPartyRoleModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanMemberPartyRoleModel.cs`

## Overview

`ClanMemberPartyRoleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ClanMemberPartyRoleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumPartyRoleAssignmentCount` | `public abstract int MaximumPartyRoleAssignmentCount { get; }` |

## Key Methods

### GetAssignablePartyRoles
`public abstract IEnumerable<PartyRole> GetAssignablePartyRoles()`

**Purpose:** **Purpose:** Reads and returns the assignable party roles value held by the this instance.

```csharp
// Obtain an instance of ClanMemberPartyRoleModel from the subsystem API first
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.GetAssignablePartyRoles();
```

### GetRelevantSkillForPartyRole
`public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**Purpose:** **Purpose:** Reads and returns the relevant skill for party role value held by the this instance.

```csharp
// Obtain an instance of ClanMemberPartyRoleModel from the subsystem API first
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.GetRelevantSkillForPartyRole(role);
```

### IsHeroAssignableForPartyRole
`public abstract bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the hero assignable for party role state or condition.

```csharp
// Obtain an instance of ClanMemberPartyRoleModel from the subsystem API first
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.IsHeroAssignableForPartyRole(hero, role, party);
```

### DoesHeroHaveEnoughSkillForPartyRole
`public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** **Purpose:** Returns a boolean answer to whether hero have enough skill for party role is true for the this instance.

```csharp
// Obtain an instance of ClanMemberPartyRoleModel from the subsystem API first
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.DoesHeroHaveEnoughSkillForPartyRole(hero, role, party);
```

### IsHeroAssignableForPartyRoleInParty
`public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the hero assignable for party role in party state or condition.

```csharp
// Obtain an instance of ClanMemberPartyRoleModel from the subsystem API first
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.IsHeroAssignableForPartyRoleInParty(role, hero, party);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ClanMemberPartyRoleModel instance = ...;
```

## See Also

- [Area Index](../)