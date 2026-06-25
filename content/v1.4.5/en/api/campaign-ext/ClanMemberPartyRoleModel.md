---
title: "ClanMemberPartyRoleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanMemberPartyRoleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel>`
**Base:** `MBGameModel<ClanMemberPartyRoleModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanMemberPartyRoleModel.cs`

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

**Purpose:** Gets the current value of `assignable party roles`.

### GetRelevantSkillForPartyRole
`public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**Purpose:** Gets the current value of `relevant skill for party role`.

### IsHeroAssignableForPartyRole
`public abstract bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for party role`.

### DoesHeroHaveEnoughSkillForPartyRole
`public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** Handles logic related to `does hero have enough skill for party role`.

### IsHeroAssignableForPartyRoleInParty
`public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for party role in party`.

## Usage Example

```csharp
var implementation = new CustomClanMemberPartyRoleModel();
```

## See Also

- [Complete Class Catalog](../catalog)