<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanMemberPartyRoleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**Base:** `ClanMemberPartyRoleModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanMemberPartyRoleModel.cs`

## Overview

`DefaultClanMemberPartyRoleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanMemberPartyRoleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAssignablePartyRoles
`public override IEnumerable<PartyRole> GetAssignablePartyRoles()`

**Purpose:** Gets the current value of `assignable party roles`.

### GetRelevantSkillForPartyRole
`public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**Purpose:** Gets the current value of `relevant skill for party role`.

### IsHeroAssignableForPartyRole
`public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for party role`.

### DoesHeroHaveEnoughSkillForPartyRole
`public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** Handles logic related to `does hero have enough skill for party role`.

### IsHeroAssignableForPartyRoleInParty
`public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for party role in party`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanMemberPartyRoleModel>(new MyDefaultClanMemberPartyRoleModel());
```

## See Also

- [Complete Class Catalog](../catalog)