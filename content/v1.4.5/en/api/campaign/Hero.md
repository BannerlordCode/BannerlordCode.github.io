---
title: "Hero"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Hero`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/Hero](/versions/Hero)
<!-- END BREADCRUMB -->
# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs`

## Overview

`Hero` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StaticBodyProperties` | `public StaticBodyProperties StaticBodyProperties { get; set; }` |
| `Weight` | `public float Weight { get; set; }` |
| `Build` | `public float Build { get; set; }` |
| `PassedTimeAtHomeSettlement` | `public float PassedTimeAtHomeSettlement { get; set; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `CaptivityStartTime` | `public CampaignTime CaptivityStartTime { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass PreferredUpgradeFormation { get; }` |
| `HeroState` | `public CharacterStates HeroState { get; }` |
| `IsMinorFactionHero` | `public bool IsMinorFactionHero { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `CompanionOf` | `public Clan CompanionOf { get; set; }` |
| `CompanionsInParty` | `public IEnumerable<Hero> CompanionsInParty { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `DeathMark` | `public KillCharacterAction.KillCharacterActionDetail DeathMark { get; }` |
| `DeathMarkKillerHero` | `public Hero DeathMarkKillerHero { get; }` |
| `LastKnownClosestSettlement` | `public Settlement LastKnownClosestSettlement { get; }` |
| `IsUrbanNotable` | `public bool IsUrbanNotable { get; }` |
| `IsRebel` | `public bool IsRebel { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |
| `IsNotable` | `public bool IsNotable { get; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `BirthDay` | `public CampaignTime BirthDay { get; }` |
| `DeathDay` | `public CampaignTime DeathDay { get; }` |
| `Age` | `public float Age { get; }` |
| `LastExaminedLogEntryID` | `public long LastExaminedLogEntryID { get; set; }` |
| `Clan` | `public Clan Clan { get; set; }` |
| `SupporterOf` | `public Clan SupporterOf { get; set; }` |
| `GovernorOf` | `public Town GovernorOf { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `OwnedAlleys` | `public List<Alley> OwnedAlleys { get; }` |
| `IsFactionLeader` | `public bool IsFactionLeader { get; }` |
| `IsKingdomLeader` | `public bool IsKingdomLeader { get; }` |
| `IsClanLeader` | `public bool IsClanLeader { get; }` |
| `OwnedCaravans` | `public List<CaravanPartyComponent> OwnedCaravans { get; }` |
| `PartyBelongedTo` | `public MobileParty PartyBelongedTo { get; }` |
| `PartyBelongedToAsPrisoner` | `public PartyBase PartyBelongedToAsPrisoner { get; }` |
| `StayingInSettlement` | `public Settlement StayingInSettlement { get; set; }` |
| `IsKnownToPlayer` | `public bool IsKnownToPlayer { get; set; }` |
| `HasMet` | `public bool HasMet { get; }` |
| `LastMeetingTimeWithPlayer` | `public CampaignTime LastMeetingTimeWithPlayer { get; set; }` |
| `BornSettlement` | `public Settlement BornSettlement { get; set; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `PowerModifier` | `public float PowerModifier { get; }` |
| `CurrentSettlement` | `public Settlement CurrentSettlement { get; }` |
| `Gold` | `public int Gold { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `BannerItem` | `public EquipmentElement BannerItem { get; set; }` |
| `Father` | `public Hero Father { get; set; }` |
| `Mother` | `public Hero Mother { get; set; }` |
| `Spouse` | `public Hero Spouse { get; set; }` |
| `Siblings` | `public IEnumerable<Hero> Siblings { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### SetName
`public void SetName(TextObject fullName, TextObject firstName)`

**Purpose:** Sets the value or state of `name`.

### OnIssueCreatedForHero
`public void OnIssueCreatedForHero(IssueBase issue)`

**Purpose:** Called when the `issue created for hero` event is raised.

### OnIssueDeactivatedForHero
`public void OnIssueDeactivatedForHero()`

**Purpose:** Called when the `issue deactivated for hero` event is raised.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### UpdateLastKnownClosestSettlement
`public void UpdateLastKnownClosestSettlement(Settlement settlement)`

**Purpose:** Updates the state or data of `last known closest settlement`.

### SetNewOccupation
`public void SetNewOccupation(Occupation occupation)`

**Purpose:** Sets the value or state of `new occupation`.

### SetBirthDay
`public void SetBirthDay(CampaignTime birthday)`

**Purpose:** Sets the value or state of `birth day`.

### SetDeathDay
`public void SetDeathDay(CampaignTime deathDay)`

**Purpose:** Sets the value or state of `death day`.

### AddPower
`public void AddPower(float value)`

**Purpose:** Adds `power` to the current collection or state.

### SetHasMet
`public void SetHasMet()`

**Purpose:** Sets the value or state of `has met`.

### UpdatePowerModifier
`public void UpdatePowerModifier()`

**Purpose:** Updates the state or data of `power modifier`.

### UpdateHomeSettlement
`public void UpdateHomeSettlement()`

**Purpose:** Updates the state or data of `home settlement`.

### GetSkillValue
`public int GetSkillValue(SkillObject skill)`

**Purpose:** Gets the current value of `skill value`.

### SetSkillValue
`public void SetSkillValue(SkillObject skill, int value)`

**Purpose:** Sets the value or state of `skill value`.

### ClearSkills
`public void ClearSkills()`

**Purpose:** Handles logic related to `clear skills`.

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float xpAmount)`

**Purpose:** Adds `skill xp` to the current collection or state.

### GetAttributeValue
`public int GetAttributeValue(CharacterAttribute charAttribute)`

**Purpose:** Gets the current value of `attribute value`.

### ClearAttributes
`public void ClearAttributes()`

**Purpose:** Handles logic related to `clear attributes`.

### SetTraitLevel
`public void SetTraitLevel(TraitObject trait, int value)`

**Purpose:** Sets the value or state of `trait level`.

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**Purpose:** Gets the current value of `trait level`.

### ClearTraits
`public void ClearTraits()`

**Purpose:** Handles logic related to `clear traits`.

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** Gets the current value of `perk value`.

### ClearPerks
`public void ClearPerks()`

**Purpose:** Handles logic related to `clear perks`.

### ChangeState
`public void ChangeState(CharacterStates newState)`

**Purpose:** Handles logic related to `change state`.

### IsHealthFull
`public bool IsHealthFull()`

**Purpose:** Handles logic related to `is health full`.

### Heal
`public void Heal(int healAmount, bool addXp = false)`

**Purpose:** Handles logic related to `heal`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### CanLeadParty
`public bool CanLeadParty()`

**Purpose:** Checks whether the current object can `lead party`.

### SetHeroEncyclopediaTextAndLinks
`public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)`

**Purpose:** Sets the value or state of `hero encyclopedia text and links`.

### CanHeroEquipmentBeChanged
`public bool CanHeroEquipmentBeChanged()`

**Purpose:** Checks whether the current object can `hero equipment be changed`.

### CanMarry
`public bool CanMarry()`

**Purpose:** Checks whether the current object can `marry`.

### CanBeGovernorOrHavePartyRole
`public bool CanBeGovernorOrHavePartyRole()`

**Purpose:** Checks whether the current object can `be governor or have party role`.

### CanDie
`public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)`

**Purpose:** Checks whether the current object can `die`.

### CanBecomePrisoner
`public bool CanBecomePrisoner()`

**Purpose:** Checks whether the current object can `become prisoner`.

### CanMoveToSettlement
`public bool CanMoveToSettlement()`

**Purpose:** Checks whether the current object can `move to settlement`.

### CanHaveCampaignIssues
`public bool CanHaveCampaignIssues()`

**Purpose:** Checks whether the current object can `have campaign issues`.

### AddInfluenceWithKingdom
`public void AddInfluenceWithKingdom(float additionalInfluence)`

**Purpose:** Adds `influence with kingdom` to the current collection or state.

### GetRelationWithPlayer
`public float GetRelationWithPlayer()`

**Purpose:** Gets the current value of `relation with player`.

### GetUnmodifiedClanLeaderRelationshipWithPlayer
`public float GetUnmodifiedClanLeaderRelationshipWithPlayer()`

**Purpose:** Gets the current value of `unmodified clan leader relationship with player`.

### SetTextVariables
`public void SetTextVariables()`

**Purpose:** Sets the value or state of `text variables`.

### SetPersonalRelation
`public void SetPersonalRelation(Hero otherHero, int value)`

**Purpose:** Sets the value or state of `personal relation`.

### GetRelation
`public int GetRelation(Hero otherHero)`

**Purpose:** Gets the current value of `relation`.

### GetBaseHeroRelation
`public int GetBaseHeroRelation(Hero otherHero)`

**Purpose:** Gets the current value of `base hero relation`.

### IsEnemy
`public bool IsEnemy(Hero otherHero)`

**Purpose:** Handles logic related to `is enemy`.

### IsFriend
`public bool IsFriend(Hero otherHero)`

**Purpose:** Handles logic related to `is friend`.

### IsNeutral
`public bool IsNeutral(Hero otherHero)`

**Purpose:** Handles logic related to `is neutral`.

### ModifyHair
`public void ModifyHair(int hair, int beard, int tattoo)`

**Purpose:** Handles logic related to `modify hair`.

### AddOwnedWorkshop
`public void AddOwnedWorkshop(Workshop workshop)`

**Purpose:** Adds `owned workshop` to the current collection or state.

### RemoveOwnedWorkshop
`public void RemoveOwnedWorkshop(Workshop workshop)`

**Purpose:** Removes `owned workshop` from the current collection or state.

### FindFirst
`public static Hero FindFirst(Func<Hero, bool> predicate)`

**Purpose:** Handles logic related to `find first`.

### Find
`public static Hero Find(string stringId)`

**Purpose:** Handles logic related to `find`.

### FindAll
`public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`

**Purpose:** Handles logic related to `find all`.

### MakeWounded
`public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** Handles logic related to `make wounded`.

### AddDeathMark
`public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** Adds `death mark` to the current collection or state.

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Gets the current value of `position as vec3`.

### GetCampaignPosition
`public CampaignVec2 GetCampaignPosition()`

**Purpose:** Gets the current value of `campaign position`.

### GetMapPoint
`public IMapPoint GetMapPoint()`

**Purpose:** Gets the current value of `map point`.

### ResetEquipments
`public void ResetEquipments()`

**Purpose:** Resets `equipments` to its initial state.

### ChangeHeroGold
`public void ChangeHeroGold(int changeAmount)`

**Purpose:** Handles logic related to `change hero gold`.

### CheckInvalidEquipmentsAndReplaceIfNeeded
`public void CheckInvalidEquipmentsAndReplaceIfNeeded()`

**Purpose:** Handles logic related to `check invalid equipments and replace if needed`.

## Usage Example

```csharp
var value = new Hero();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)