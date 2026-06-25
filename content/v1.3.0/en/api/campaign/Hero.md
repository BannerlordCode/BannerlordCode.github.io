---
title: "Hero"
description: "Auto-generated class reference for Hero."
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

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
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `PassedTimeAtHomeSettlement` | `public float PassedTimeAtHomeSettlement { get; set; }` |
| `CanHaveRecruits` | `public bool CanHaveRecruits { get; }` |
| `CharacterObject` | `public CharacterObject CharacterObject { get; }` |
| `FirstName` | `public TextObject FirstName { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; set; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `BattleEquipment` | `public Equipment BattleEquipment { get; }` |
| `CivilianEquipment` | `public Equipment CivilianEquipment { get; }` |
| `StealthEquipment` | `public Equipment StealthEquipment { get; set; }` |
| `CaptivityStartTime` | `public CampaignTime CaptivityStartTime { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass PreferredUpgradeFormation { get; }` |
| `HeroState` | `public Hero.CharacterStates HeroState { get; }` |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes { get; set; }` |
| `IsMinorFactionHero` | `public bool IsMinorFactionHero { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `WoundedHealthLimit` | `public int WoundedHealthLimit { get; }` |
| `IsNoncombatant` | `public bool IsNoncombatant { get; set; }` |
| `CompanionOf` | `public Clan CompanionOf { get; set; }` |
| `CompanionsInParty` | `public IEnumerable<Hero> CompanionsInParty { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `Template` | `public CharacterObject Template { get; }` |
| `IsDead` | `public bool IsDead { get; }` |
| `IsFugitive` | `public bool IsFugitive { get; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsNotSpawned` | `public bool IsNotSpawned { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `IsTraveling` | `public bool IsTraveling { get; }` |
| `IsAlive` | `public bool IsAlive { get; }` |
| `DeathMark` | `public KillCharacterAction.KillCharacterActionDetail DeathMark { get; }` |
| `DeathMarkKillerHero` | `public Hero DeathMarkKillerHero { get; }` |
| `LastKnownClosestSettlement` | `public Settlement LastKnownClosestSettlement { get; }` |
| `IsWanderer` | `public bool IsWanderer { get; }` |
| `IsTemplate` | `public bool IsTemplate { get; }` |
| `IsWounded` | `public bool IsWounded { get; }` |
| `IsPlayerCompanion` | `public bool IsPlayerCompanion { get; }` |
| `IsMerchant` | `public bool IsMerchant { get; }` |
| `IsPreacher` | `public bool IsPreacher { get; }` |
| `IsHeadman` | `public bool IsHeadman { get; }` |
| `IsGangLeader` | `public bool IsGangLeader { get; }` |
| `IsArtisan` | `public bool IsArtisan { get; }` |
| `IsRuralNotable` | `public bool IsRuralNotable { get; }` |
| `IsUrbanNotable` | `public bool IsUrbanNotable { get; }` |
| `IsSpecial` | `public bool IsSpecial { get; }` |
| `IsRebel` | `public bool IsRebel { get; }` |
| `IsCommander` | `public bool IsCommander { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |
| `IsNotable` | `public bool IsNotable { get; }` |
| `IsLord` | `public bool IsLord { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `BirthDay` | `public CampaignTime BirthDay { get; }` |
| `DeathDay` | `public CampaignTime DeathDay { get; }` |
| `Age` | `public float Age { get; }` |
| `IsChild` | `public bool IsChild { get; }` |
| `Power` | `public float Power { get; }` |
| `ClanBanner` | `public Banner ClanBanner { get; set; }` |
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
| `IsHumanPlayerCharacter` | `public bool IsHumanPlayerCharacter { get; set; }` |
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
| `ProbabilityOfDeath` | `public float ProbabilityOfDeath { get; }` |
| `Father` | `public Hero Father { get; set; }` |
| `Mother` | `public Hero Mother { get; set; }` |
| `ExSpouses` | `public MBReadOnlyList<Hero> ExSpouses { get; set; }` |
| `Spouse` | `public Hero Spouse { get; set; }` |
| `Children` | `public MBList<Hero> Children { get; }` |
| `Siblings` | `public IEnumerable<Hero> Siblings { get; }` |
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper { get; }` |
| `OwnedWorkshops` | `public MBReadOnlyList<Workshop> OwnedWorkshops { get; }` |
| `AllAliveHeroes` | `public static MBReadOnlyList<Hero> AllAliveHeroes { get; }` |
| `DeadOrDisabledHeroes` | `public static MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` |
| `MainHero` | `public static Hero MainHero { get; }` |
| `OneToOneConversationHero` | `public static Hero OneToOneConversationHero { get; }` |
| `IsMainHeroIll` | `public static bool IsMainHeroIll { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetName();
```

### SetName
`public void SetName(TextObject fullName, TextObject firstName)`

**Purpose:** **Purpose:** Assigns a new value to name and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetName(fullName, firstName);
```

### OnIssueCreatedForHero
`public void OnIssueCreatedForHero(IssueBase issue)`

**Purpose:** **Purpose:** Invoked when the issue created for hero event is raised.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.OnIssueCreatedForHero(issue);
```

### OnIssueDeactivatedForHero
`public void OnIssueDeactivatedForHero()`

**Purpose:** **Purpose:** Invoked when the issue deactivated for hero event is raised.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.OnIssueDeactivatedForHero();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.ToString();
```

### UpdateLastKnownClosestSettlement
`public void UpdateLastKnownClosestSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of last known closest settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdateLastKnownClosestSettlement(settlement);
```

### SetNewOccupation
`public void SetNewOccupation(Occupation occupation)`

**Purpose:** **Purpose:** Assigns a new value to new occupation and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetNewOccupation(occupation);
```

### SetBirthDay
`public void SetBirthDay(CampaignTime birthday)`

**Purpose:** **Purpose:** Assigns a new value to birth day and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetBirthDay(birthday);
```

### SetDeathDay
`public void SetDeathDay(CampaignTime deathDay)`

**Purpose:** **Purpose:** Assigns a new value to death day and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetDeathDay(deathDay);
```

### AddPower
`public void AddPower(float value)`

**Purpose:** **Purpose:** Adds power to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddPower(0);
```

### SetHasMet
`public void SetHasMet()`

**Purpose:** **Purpose:** Assigns a new value to has met and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetHasMet();
```

### UpdatePowerModifier
`public void UpdatePowerModifier()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of power modifier.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdatePowerModifier();
```

### UpdateHomeSettlement
`public void UpdateHomeSettlement()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of home settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.UpdateHomeSettlement();
```

### GetSkillValue
`public int GetSkillValue(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the skill value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetSkillValue(skill);
```

### SetSkillValue
`public void SetSkillValue(SkillObject skill, int value)`

**Purpose:** **Purpose:** Assigns a new value to skill value and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetSkillValue(skill, 0);
```

### ClearSkills
`public void ClearSkills()`

**Purpose:** **Purpose:** Removes all skills from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearSkills();
```

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float xpAmount)`

**Purpose:** **Purpose:** Adds skill xp to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddSkillXp(skill, 0);
```

### GetAttributeValue
`public int GetAttributeValue(CharacterAttribute charAttribute)`

**Purpose:** **Purpose:** Reads and returns the attribute value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetAttributeValue(charAttribute);
```

### ClearAttributes
`public void ClearAttributes()`

**Purpose:** **Purpose:** Removes all attributes from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearAttributes();
```

### SetTraitLevel
`public void SetTraitLevel(TraitObject trait, int value)`

**Purpose:** **Purpose:** Assigns a new value to trait level and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetTraitLevel(trait, 0);
```

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**Purpose:** **Purpose:** Reads and returns the trait level value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetTraitLevel(trait);
```

### ClearTraits
`public void ClearTraits()`

**Purpose:** **Purpose:** Removes all traits from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearTraits();
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** **Purpose:** Reads and returns the perk value value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetPerkValue(perk);
```

### ClearPerks
`public void ClearPerks()`

**Purpose:** **Purpose:** Removes all perks from the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ClearPerks();
```

### ChangeState
`public void ChangeState(Hero.CharacterStates newState)`

**Purpose:** **Purpose:** Executes the ChangeState logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ChangeState(newState);
```

### IsHealthFull
`public bool IsHealthFull()`

**Purpose:** **Purpose:** Determines whether the this instance is in the health full state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsHealthFull();
```

### Heal
`public void Heal(int healAmount, bool addXp = false)`

**Purpose:** **Purpose:** Executes the Heal logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.Heal(0, false);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.Deserialize(objectManager, node);
```

### CanLeadParty
`public bool CanLeadParty()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for lead party.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanLeadParty();
```

### SetHeroEncyclopediaTextAndLinks
`public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)`

**Purpose:** **Purpose:** Assigns a new value to hero encyclopedia text and links and updates the object's internal state.

```csharp
// Static call; no instance required
Hero.SetHeroEncyclopediaTextAndLinks(o);
```

### CanHeroEquipmentBeChanged
`public bool CanHeroEquipmentBeChanged()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero equipment be changed.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanHeroEquipmentBeChanged();
```

### CanMarry
`public bool CanMarry()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for marry.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanMarry();
```

### CanBeGovernorOrHavePartyRole
`public bool CanBeGovernorOrHavePartyRole()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for be governor or have party role.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanBeGovernorOrHavePartyRole();
```

### CanDie
`public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for die.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanDie(causeOfDeath);
```

### CanBecomePrisoner
`public bool CanBecomePrisoner()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for become prisoner.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanBecomePrisoner();
```

### CanMoveToSettlement
`public bool CanMoveToSettlement()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for move to settlement.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanMoveToSettlement();
```

### CanHaveCampaignIssues
`public bool CanHaveCampaignIssues()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for have campaign issues.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.CanHaveCampaignIssues();
```

### AddInfluenceWithKingdom
`public void AddInfluenceWithKingdom(float additionalInfluence)`

**Purpose:** **Purpose:** Adds influence with kingdom to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddInfluenceWithKingdom(0);
```

### GetRelationWithPlayer
`public float GetRelationWithPlayer()`

**Purpose:** **Purpose:** Reads and returns the relation with player value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetRelationWithPlayer();
```

### GetUnmodifiedClanLeaderRelationshipWithPlayer
`public float GetUnmodifiedClanLeaderRelationshipWithPlayer()`

**Purpose:** **Purpose:** Reads and returns the unmodified clan leader relationship with player value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetUnmodifiedClanLeaderRelationshipWithPlayer();
```

### SetTextVariables
`public void SetTextVariables()`

**Purpose:** **Purpose:** Assigns a new value to text variables and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetTextVariables();
```

### SetPersonalRelation
`public void SetPersonalRelation(Hero otherHero, int value)`

**Purpose:** **Purpose:** Assigns a new value to personal relation and updates the object's internal state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.SetPersonalRelation(otherHero, 0);
```

### GetRelation
`public int GetRelation(Hero otherHero)`

**Purpose:** **Purpose:** Reads and returns the relation value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetRelation(otherHero);
```

### GetBaseHeroRelation
`public int GetBaseHeroRelation(Hero otherHero)`

**Purpose:** **Purpose:** Reads and returns the base hero relation value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetBaseHeroRelation(otherHero);
```

### IsEnemy
`public bool IsEnemy(Hero otherHero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the enemy state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsEnemy(otherHero);
```

### IsFriend
`public bool IsFriend(Hero otherHero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the friend state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsFriend(otherHero);
```

### IsNeutral
`public bool IsNeutral(Hero otherHero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the neutral state or condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.IsNeutral(otherHero);
```

### ModifyHair
`public void ModifyHair(int hair, int beard, int tattoo)`

**Purpose:** **Purpose:** Executes the ModifyHair logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ModifyHair(0, 0, 0);
```

### AddOwnedWorkshop
`public void AddOwnedWorkshop(Workshop workshop)`

**Purpose:** **Purpose:** Adds owned workshop to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddOwnedWorkshop(workshop);
```

### RemoveOwnedWorkshop
`public void RemoveOwnedWorkshop(Workshop workshop)`

**Purpose:** **Purpose:** Removes owned workshop from the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.RemoveOwnedWorkshop(workshop);
```

### FindFirst
`public static Hero FindFirst(Func<Hero, bool> predicate)`

**Purpose:** **Purpose:** Looks up the matching first in the current collection or scope.

```csharp
// Static call; no instance required
Hero.FindFirst(func<Hero, false);
```

### Find
`public static Hero Find(string stringId)`

**Purpose:** **Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Static call; no instance required
Hero.Find("example");
```

### FindAll
`public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`

**Purpose:** **Purpose:** Looks up the matching all in the current collection or scope.

```csharp
// Static call; no instance required
Hero.FindAll(func<Hero, false);
```

### MakeWounded
`public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** **Purpose:** Executes the MakeWounded logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.MakeWounded(null, killCharacterAction.KillCharacterActionDetail.None);
```

### AddDeathMark
`public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**Purpose:** **Purpose:** Adds death mark to the current collection or state.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.AddDeathMark(null, killCharacterAction.KillCharacterActionDetail.None);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** **Purpose:** Reads and returns the position as vec3 value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetPositionAsVec3();
```

### GetCampaignPosition
`public CampaignVec2 GetCampaignPosition()`

**Purpose:** **Purpose:** Reads and returns the campaign position value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetCampaignPosition();
```

### GetMapPoint
`public IMapPoint GetMapPoint()`

**Purpose:** **Purpose:** Reads and returns the map point value held by the this instance.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
var result = hero.GetMapPoint();
```

### ResetEquipments
`public void ResetEquipments()`

**Purpose:** **Purpose:** Returns equipments to its default or initial condition.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ResetEquipments();
```

### ChangeHeroGold
`public void ChangeHeroGold(int changeAmount)`

**Purpose:** **Purpose:** Executes the ChangeHeroGold logic.

```csharp
// Obtain an instance of Hero from the subsystem API first
Hero hero = ...;
hero.ChangeHeroGold(0);
```

### CheckInvalidEquipmentsAndReplaceIfNeeded
`public void CheckInvalidEquipmentsAndReplaceIfNeeded()`

**Purpose:** **Purpose:** Verifies whether invalid equipments and replace if needed holds true for the this instance.

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