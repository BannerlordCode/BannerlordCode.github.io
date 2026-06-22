<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Hero`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Hero](/versions/Hero)
<!-- END BREADCRUMB -->
# Hero

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** sealed class (inherits `MBObjectBase`; implements `ITrackableCampaignObject`, `ITrackableBase`, `IRandomOwner`)

`Hero` represents a named character in the campaign system — a lord, companion, notable, wanderer, or the player themselves. It is the primary entry point for mods to interact with characters: query state, modify gold/relations/skills, iterate living heroes, and locate their clan or party.

## Overview

Each `Hero` is tied to a `CharacterObject` (combat template) and holds name, culture, age, clan, family relations (spouse/parents/children), party membership, current location, gold, and hit points. Life/activity state is described by `HeroState` (the `CharacterStates` enum), with convenience properties such as `IsAlive`, `IsDead`, `IsPrisoner`, and `IsActive`.

Mods should generally not call `new Hero(...)` directly (construction registers the hero with the `CampaignObjectManager`). Instead, obtain existing heroes via `Hero.Find`, `Hero.FindFirst`, `Hero.FindAll`, or `Hero.AllAliveHeroes`, then read/write their properties.

## Developer Use Cases

### Use Case 1: Find a hero by StringId and modify gold

**Scenario**: On mod startup you need to locate a lord defined in XML and grant or deduct gold.

```csharp
// Find by StringId (delegates to CampaignObjectManager.Find<Hero>)
Hero lord = Hero.Find("lord_1_1");
if (lord != null && lord.IsAlive)
{
    // Delta modify, internally clamped to >= 0
    lord.ChangeHeroGold(1000);
}
```

**Key points**: `Hero.Find` returns `null` when not found — always null-check; `ChangeHeroGold` accepts negatives for deductions.

### Use Case 2: Change hero relation with the player

**Scenario**: After completing a quest, raise an NPC's relation toward the player.

```csharp
int current = lord.GetRelation(Hero.MainHero);
// SetPersonalRelation clamps to the diplomacy model's relation bounds
lord.SetPersonalRelation(Hero.MainHero, current + 5);
```

**Key points**: Use `GetRelation` to read the diplomacy-model-adjusted effective value; do not write the `Gold` property directly — use `ChangeHeroGold` for delta logic.

### Use Case 3: Iterate all living lords of a culture

**Scenario**: Count current living heroes, filtered by culture.

```csharp
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsLord && hero.Culture == culture)
    {
        // Process each lord
    }
}
```

**Key points**: `AllAliveHeroes` contains only living heroes; use `DeadOrDisabledHeroes` for dead/disabled ones.

### Use Case 4: Find heroes matching a predicate

**Scenario**: Find every clan leader within a kingdom.

```csharp
Hero leader = Hero.FindFirst(h => h.IsClanLeader && h.Clan?.Kingdom == kingdom);
```

**Key points**: `FindFirst` returns the first match or `null`; use `FindAll` for all matches.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| Name | TextObject | Full name (read-only) |
| FirstName | TextObject | First name (read-only) |
| Culture | CultureObject | Culture (public field) |
| IsFemale | bool | Whether female |
| Age | float | Current age (derived from birth/death day) |
| BirthDay | CampaignTime | Birth moment |
| DeathDay | CampaignTime | Death moment |
| Level | int | Level (public field) |
| HitPoints | int | Current HP; setter clamps to [1, MaxHitPoints] |
| MaxHitPoints | int | Maximum HP |
| IsWounded | bool | Whether wounded (HitPoints ≤ WoundedHealthLimit) |
| Gold | int | Gold held; setter clamps to ≥ 0 |
| Power | float | Influence power |
| HeroState | Hero.CharacterStates | Current state enum |
| Occupation | Occupation | Occupation (Lord/Merchant/Wanderer...) |
| Clan | Clan | Owning clan (returns CompanionOf if a companion) |
| CompanionOf | Clan | Clan this hero is a companion of |
| SupporterOf | Clan | Clan this notable supports |
| GovernorOf | Town | Town where this hero is governor |
| MapFaction | IFaction | Map faction (kingdom or clan) |
| IsClanLeader / IsKingdomLeader / IsFactionLeader | bool | Whether leader of clan/kingdom/faction |
| PartyBelongedTo | MobileParty | Party the hero belongs to (may be null) |
| PartyBelongedToAsPrisoner | PartyBase | Party holding the hero as prisoner (may be null) |
| StayingInSettlement | Settlement | Settlement currently staying in |
| BornSettlement | Settlement | Birth settlement |
| HomeSettlement | Settlement | Computed "home" settlement |
| CurrentSettlement | Settlement | Current settlement (derived from party/prisoner/staying) |
| Father / Mother / Spouse | Hero | Father / mother / spouse |
| ExSpouses | `MBReadOnlyList<Hero>` | List of former spouses |
| Children | `MBList<Hero>` | List of children |
| Siblings | `IEnumerable<Hero>` | Siblings |
| CharacterObject | CharacterObject | Associated combat character template |
| BattleEquipment / CivilianEquipment / StealthEquipment | Equipment | Battle / civilian / stealth equipment |
| BannerItem | EquipmentElement | Banner item |
| ClanBanner | Banner | Clan banner |
| HeroDeveloper | HeroDeveloper | Character developer (skills/xp) |
| IsKnownToPlayer | bool | Whether known to the player |
| HasMet | bool | Whether has met the player |
| LastMeetingTimeWithPlayer | CampaignTime | Last meeting time with the player |
| IsPlayerCompanion | bool | Whether a player companion |
| IsHumanPlayerCharacter | bool | Whether the player themselves |
| IsMinorFactionHero | bool | Whether a minor-faction hero |
| IsNotable / IsLord / IsWanderer / IsMerchant / IsGangLeader etc. | bool | Convenience checks based on Occupation |
| IsAlive / IsDead / IsPrisoner / IsActive / IsFugitive / IsReleased / IsNotSpawned / IsDisabled / IsTraveling | bool | Convenience checks based on HeroState |
| IsChild | bool | Whether underage |
| IsPregnant | bool | Whether pregnant (public field) |
| VolunteerTypes | CharacterObject[] | Recruitable volunteer templates (length 6, public field) |
| SpecialItems | `MBList<ItemObject>` | Special items (public field) |
| OwnedWorkshops | `MBReadOnlyList<Workshop>` | Workshops owned |
| OwnedCaravans / OwnedAlleys | `List<...>` | Caravans / alleys owned |
| PreferredUpgradeFormation | FormationClass | Preferred upgrade troop formation |
| EncyclopediaText / EncyclopediaLink / EncyclopediaLinkWithName | ... | Encyclopedia text and links |
| DeathMark | KillCharacterAction.KillCharacterActionDetail | Death mark |
| DeathMarkKillerHero | Hero | Killer of the death-marked hero |

## Static members

| Name | Type | Description |
|------|------|-------------|
| MainHero | Hero | The player's main hero |
| AllAliveHeroes | `MBReadOnlyList<Hero>` | All living heroes |
| DeadOrDisabledHeroes | `MBReadOnlyList<Hero>` | All dead/disabled heroes |
| OneToOneConversationHero | Hero | The other hero in the current one-to-one conversation |
| IsMainHeroIll | bool | Whether the main hero is ill |
| MaximumNumberOfVolunteers | int | Constant, = 6 |

## Static lookup methods

### Find

```csharp
public static Hero Find(string stringId)
```

Find a hero by `StringId` (delegates to `Campaign.Current.CampaignObjectManager.Find<Hero>`). Returns `null` if not found.

### FindFirst

```csharp
public static Hero FindFirst(Func<Hero, bool> predicate)
```

Returns the first living/registered hero matching the predicate, or `null`.

### FindAll

```csharp
public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)
```

Returns all heroes matching the predicate.

## Main methods

### SetName

```csharp
public void SetName(TextObject fullName, TextObject firstName)
```

Sets full name and first name; if the hero leads their party, clears the party's cached name.

### SetBirthDay / SetDeathDay

```csharp
public void SetBirthDay(CampaignTime birthday)
public void SetDeathDay(CampaignTime deathDay)
```

Set the birth / death moment.

### ChangeState

```csharp
public void ChangeState(Hero.CharacterStates newState)
```

Switches the hero's state, notifying the owning clan and `CampaignObjectManager`; switching to `Traveling` fires `OnHeroGetsBusy`.

### ChangeHeroGold

```csharp
public void ChangeHeroGold(int changeAmount)
```

Modifies gold by a delta (positive or negative; internally clamped via `Gold` to ≥ 0, with overflow protection).

### Heal / IsHealthFull

```csharp
public void Heal(int healAmount, bool addXp = false)
public bool IsHealthFull()
```

Heals the hero (amount adjusted by `PartyHealingModel`); checks whether at full HP.

### MakeWounded / AddDeathMark

```csharp
public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)
public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)
```

Sets the hero wounded (HP set to 1) / applies a death mark.

### Skills, attributes, traits, perks

```csharp
public int GetSkillValue(SkillObject skill)
public void SetSkillValue(SkillObject skill, int value)
public void AddSkillXp(SkillObject skill, float xpAmount)
public void ClearSkills()

public int GetAttributeValue(CharacterAttribute charAttribute)
public void ClearAttributes()

public int GetTraitLevel(TraitObject trait)
public void SetTraitLevel(TraitObject trait, int value)
public void ClearTraits()

public bool GetPerkValue(PerkObject perk)
public void ClearPerks()
```

Read/write skill values, attribute values, trait levels, and perk flags, with clear methods.

### Relations

```csharp
public float GetRelationWithPlayer()
public int GetRelation(Hero otherHero)
public int GetBaseHeroRelation(Hero otherHero)
public void SetPersonalRelation(Hero otherHero, int value)
public bool IsEnemy(Hero otherHero)
public bool IsFriend(Hero otherHero)
public bool IsNeutral(Hero otherHero)
```

`GetRelation` returns the effective relation computed by the diplomacy model; comparing with self returns 0. `SetPersonalRelation` clamps to the diplomacy model's relation bounds.

### Other

```csharp
public void AddPower(float value)
public void UpdatePowerModifier()
public void UpdateHomeSettlement()
public void UpdateLastKnownClosestSettlement(Settlement settlement)
public void SetNewOccupation(Occupation occupation)
public void AddInfluenceWithKingdom(float additionalInfluence)
public void AddOwnedWorkshop(Workshop workshop)
public void RemoveOwnedWorkshop(Workshop workshop)
public void ResetEquipments()
public bool CanLeadParty()
public bool CanMarry()
public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)
public bool CanBecomePrisoner()
public bool CanBeGovernorOrHavePartyRole()
public bool CanHaveCampaignIssues()
public bool CanMoveToSettlement()
public bool CanHeroEquipmentBeChanged()
public Vec3 GetPositionAsVec3()
public CampaignVec2 GetCampaignPosition()
public IMapPoint GetMapPoint()
public void SetHasMet()
public void SetTextVariables()
public void ModifyHair(int hair, int beard, int tattoo)
```

## CharacterStates enum

```csharp
public enum CharacterStates
{
    NotSpawned,
    Active,
    Fugitive,
    Prisoner,
    Released,
    Dead,
    Disabled,
    Traveling
}
```

## Usage example

```csharp
// Find a hero by StringId
Hero lord = Hero.Find("lord_1_1");
if (lord != null && lord.IsAlive)
{
    // Grant gold
    lord.ChangeHeroGold(1000);

    // Raise relation with the player
    lord.SetPersonalRelation(Hero.MainHero, lord.GetRelation(Hero.MainHero) + 5);

    // Add skill xp
    lord.AddSkillXp(DefaultSkills.OneHanded, 500f);
}

// Iterate all living lords of a culture
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsLord && hero.Culture == culture)
    {
        // ...
    }
}

// Find with a predicate
Hero target = Hero.FindFirst(h => h.IsClanLeader && h.Clan?.Kingdom == kingdom);
```

## See also

- [MobileParty](./MobileParty.md)
- [Clan](./Clan.md)
- [Kingdom](./Kingdom.md)
- [PartyBase](./PartyBase.md)
