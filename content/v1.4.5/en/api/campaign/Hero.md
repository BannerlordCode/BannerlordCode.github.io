---
title: "Hero"
description: "Auto-generated class reference for Hero."
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs`

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

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetName();
```

### SetName
`public void SetName(TextObject fullName, TextObject firstName)`

**Purpose:** Assigns a new value to name and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetName(fullName, firstName);
```

### OnIssueCreatedForHero
`public void OnIssueCreatedForHero(IssueBase issue)`

**Purpose:** Invoked when the issue created for hero event is raised.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.OnIssueCreatedForHero(issue);
```

### OnIssueDeactivatedForHero
`public void OnIssueDeactivatedForHero()`

**Purpose:** Invoked when the issue deactivated for hero event is raised.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.OnIssueDeactivatedForHero();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.ToString();
```

### UpdateLastKnownClosestSettlement
`public void UpdateLastKnownClosestSettlement(Settlement settlement)`

**Purpose:** Recalculates and stores the latest representation of last known closest settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdateLastKnownClosestSettlement(settlement);
```

### SetNewOccupation
`public void SetNewOccupation(Occupation occupation)`

**Purpose:** Assigns a new value to new occupation and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetNewOccupation(occupation);
```

### SetBirthDay
`public void SetBirthDay(CampaignTime birthday)`

**Purpose:** Assigns a new value to birth day and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetBirthDay(birthday);
```

### SetDeathDay
`public void SetDeathDay(CampaignTime deathDay)`

**Purpose:** Assigns a new value to death day and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetDeathDay(deathDay);
```

### AddPower
`public void AddPower(float value)`

**Purpose:** Adds power to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddPower(0);
```

### SetHasMet
`public void SetHasMet()`

**Purpose:** Assigns a new value to has met and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetHasMet();
```

### UpdatePowerModifier
`public void UpdatePowerModifier()`

**Purpose:** Recalculates and stores the latest representation of power modifier.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdatePowerModifier();
```

### UpdateHomeSettlement
`public void UpdateHomeSettlement()`

**Purpose:** Recalculates and stores the latest representation of home settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdateHomeSettlement();
```

### GetSkillValue
`public int GetSkillValue(SkillObject skill)`

**Purpose:** Reads and returns the skill value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetSkillValue(skill);
```

### SetSkillValue
`public void SetSkillValue(SkillObject skill, int value)`

**Purpose:** Assigns a new value to skill value and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetSkillValue(skill, 0);
```

### ClearSkills
`public void ClearSkills()`

**Purpose:** Removes all skills from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearSkills();
```

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float xpAmount)`

**Purpose:** Adds skill xp to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddSkillXp(skill, 0);
```

### GetAttributeValue
`public int GetAttributeValue(CharacterAttribute charAttribute)`

**Purpose:** Reads and returns the attribute value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetAttributeValue(charAttribute);
```

### ClearAttributes
`public void ClearAttributes()`

**Purpose:** Removes all attributes from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearAttributes();
```

### SetTraitLevel
`public void SetTraitLevel(TraitObject trait, int value)`

**Purpose:** Assigns a new value to trait level and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetTraitLevel(trait, 0);
```

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**Purpose:** Reads and returns the trait level value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetTraitLevel(trait);
```

### ClearTraits
`public void ClearTraits()`

**Purpose:** Removes all traits from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearTraits();
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** Reads and returns the perk value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetPerkValue(perk);
```

### ClearPerks
`public void ClearPerks()`

**Purpose:** Removes all perks from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearPerks();
```

### ChangeState
`public void ChangeState(CharacterStates newState)`

**Purpose:** Executes the ChangeState logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ChangeState(newState);
```

### IsHealthFull
`public bool IsHealthFull()`

**Purpose:** Determines whether the this instance is in the health full state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsHealthFull();
```

### Heal
`public void Heal(int healAmount, bool addXp = false)`

**Purpose:** Executes the Heal logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.Heal(0, false);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.Deserialize(objectManager, node);
```

### CanLeadParty
`public bool CanLeadParty()`

**Purpose:** Checks whether the this instance meets the preconditions for lead party.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanLeadParty();
```

### SetHeroEncyclopediaTextAndLinks
`public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)`

**Purpose:** Assigns a new value to hero encyclopedia text and links and updates the object's internal state.

```csharp
// Static call; no instance required
Hero.SetHeroEncyclopediaTextAndLinks(o);
```

### CanHeroEquipmentBeChanged
`public bool CanHeroEquipmentBeChanged()`

**Purpose:** Checks whether the this instance meets the preconditions for hero equipment be changed.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanHeroEquipmentBeChanged();
```

### CanMarry
`public bool CanMarry()`

**Purpose:** Checks whether the this instance meets the preconditions for marry.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanMarry();
```

### CanBeGovernorOrHavePartyRole
`public bool CanBeGovernorOrHavePartyRole()`

**Purpose:** Checks whether the this instance meets the preconditions for be governor or have party role.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanBeGovernorOrHavePartyRole();
```

### CanDie
`public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)`

**Purpose:** Checks whether the this instance meets the preconditions for die.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanDie(causeOfDeath);
```

### CanBecomePrisoner
`public bool CanBecomePrisoner()`

**Purpose:** Checks whether the this instance meets the preconditions for become prisoner.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanBecomePrisoner();
```

### CanMoveToSettlement
`public bool CanMoveToSettlement()`

**Purpose:** Checks whether the this instance meets the preconditions for move to settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanMoveToSettlement();
```

### CanHaveCampaignIssues
`public bool CanHaveCampaignIssues()`

**Purpose:** Checks whether the this instance meets the preconditions for have campaign issues.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanHaveCampaignIssues();
```

### AddInfluenceWithKingdom
`public void AddInfluenceWithKingdom(float additionalInfluence)`

**Purpose:** Adds influence with kingdom to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddInfluenceWithKingdom(0);
```

### GetRelationWithPlayer
`public float GetRelationWithPlayer()`

**Purpose:** Reads and returns the relation with player value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetRelationWithPlayer();
```

### GetUnmodifiedClanLeaderRelationshipWithPlayer
`public float GetUnmodifiedClanLeaderRelationshipWithPlayer()`

**Purpose:** Reads and returns the unmodified clan leader relationship with player value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetUnmodifiedClanLeaderRelationshipWithPlayer();
```

### SetTextVariables
`public void SetTextVariables()`

**Purpose:** Assigns a new value to text variables and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetTextVariables();
```

### SetPersonalRelation
`public void SetPersonalRelation(Hero otherHero, int value)`

**Purpose:** Assigns a new value to personal relation and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetPersonalRelation(otherHero, 0);
```

### GetRelation
`public int GetRelation(Hero otherHero)`

**Purpose:** Reads and returns the relation value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetRelation(otherHero);
```

### GetBaseHeroRelation
`public int GetBaseHeroRelation(Hero otherHero)`

**Purpose:** Reads and returns the base hero relation value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetBaseHeroRelation(otherHero);
```

### IsEnemy
`public bool IsEnemy(Hero otherHero)`

**Purpose:** Determines whether the this instance is in the enemy state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsEnemy(otherHero);
```

### IsFriend
`public bool IsFriend(Hero otherHero)`

**Purpose:** Determines whether the this instance is in the friend state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsFriend(otherHero);
```

### IsNeutral
`public bool IsNeutral(Hero otherHero)`

**Purpose:** Determines whether the this instance is in the neutral state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsNeutral(otherHero);
```

### ModifyHair
`public void ModifyHair(int hair, int beard, int tattoo)`

**Purpose:** Executes the ModifyHair logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ModifyHair(0, 0, 0);
```

### AddOwnedWorkshop
`public void AddOwnedWorkshop(Workshop workshop)`

**Purpose:** Adds owned workshop to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddOwnedWorkshop(workshop);
```

### RemoveOwnedWorkshop
`public void RemoveOwnedWorkshop(Workshop workshop)`

**Purpose:** Removes owned workshop from the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.RemoveOwnedWorkshop(workshop);
```

### FindFirst
`public static Hero FindFirst(Func<Hero, bool> predicate)`

**Purpose:** Looks up the matching first in the current collection or scope.

```csharp
// Static call; no instance required
Hero.FindFirst(func<Hero, false);
```

### Find
`public static Hero Find(string stringId)`

**Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Static call; no instance required
Hero.Find("example");
```

### FindAll
`public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`

**Purpose:** Looks up the matching all in the current collection or scope.

```csharp
// Static call; no instance required
Hero.FindAll(func<Hero, false);
```

### MakeWounded
`public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** Executes the MakeWounded logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.MakeWounded(null, killCharacterAction.KillCharacterActionDetail.None);
```

### AddDeathMark
`public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** Adds death mark to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddDeathMark(null, killCharacterAction.KillCharacterActionDetail.None);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Reads and returns the position as vec3 value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetPositionAsVec3();
```

### GetCampaignPosition
`public CampaignVec2 GetCampaignPosition()`

**Purpose:** Reads and returns the campaign position value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetCampaignPosition();
```

### GetMapPoint
`public IMapPoint GetMapPoint()`

**Purpose:** Reads and returns the map point value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetMapPoint();
```

### ResetEquipments
`public void ResetEquipments()`

**Purpose:** Returns equipments to its default or initial condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ResetEquipments();
```

### ChangeHeroGold
`public void ChangeHeroGold(int changeAmount)`

**Purpose:** Executes the ChangeHeroGold logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ChangeHeroGold(0);
```

### CheckInvalidEquipmentsAndReplaceIfNeeded
`public void CheckInvalidEquipmentsAndReplaceIfNeeded()`

**Purpose:** Verifies whether invalid equipments and replace if needed holds true for the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.CheckInvalidEquipmentsAndReplaceIfNeeded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Hero hero = ...;
hero.GetName();
```

## See Also

- [Area Index](../)