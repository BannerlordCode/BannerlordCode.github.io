---
title: "DefaultClanMemberPartyRoleModel"
description: "Auto-generated class reference for DefaultClanMemberPartyRoleModel."
---
# DefaultClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**Base:** `ClanMemberPartyRoleModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanMemberPartyRoleModel.cs`

## Overview

`DefaultClanMemberPartyRoleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanMemberPartyRoleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAssignablePartyRoles
`public override IEnumerable<PartyRole> GetAssignablePartyRoles()`

**Purpose:** **Purpose:** Reads and returns the assignable party roles value held by the this instance.

```csharp
// Obtain an instance of DefaultClanMemberPartyRoleModel from the subsystem API first
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.GetAssignablePartyRoles();
```

### GetRelevantSkillForPartyRole
`public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**Purpose:** **Purpose:** Reads and returns the relevant skill for party role value held by the this instance.

```csharp
// Obtain an instance of DefaultClanMemberPartyRoleModel from the subsystem API first
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.GetRelevantSkillForPartyRole(role);
```

### IsHeroAssignableForPartyRole
`public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the hero assignable for party role state or condition.

```csharp
// Obtain an instance of DefaultClanMemberPartyRoleModel from the subsystem API first
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.IsHeroAssignableForPartyRole(hero, role, party);
```

### DoesHeroHaveEnoughSkillForPartyRole
`public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** **Purpose:** Returns a boolean answer to whether hero have enough skill for party role is true for the this instance.

```csharp
// Obtain an instance of DefaultClanMemberPartyRoleModel from the subsystem API first
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.DoesHeroHaveEnoughSkillForPartyRole(hero, role, party);
```

### IsHeroAssignableForPartyRoleInParty
`public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the hero assignable for party role in party state or condition.

```csharp
// Obtain an instance of DefaultClanMemberPartyRoleModel from the subsystem API first
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.IsHeroAssignableForPartyRoleInParty(role, hero, party);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanMemberPartyRoleModel>(new MyDefaultClanMemberPartyRoleModel());
```

## See Also

- [Area Index](../)