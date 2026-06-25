---
title: "Hero"
description: "The central campaign-world character object: the player, lords, companions, and clan members, including data access and behavioral hooks."
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

## Overview

`Hero` represents a **single campaign-world character**: the player, kingdom lords, wanderers/companions, family members, caravan masters, and so on. It bridges three critical areas of campaign data:

- **Appearance and base stats** — `CharacterObject`, `BodyProperties`, `Equipment`.
- **Social identity** — `Clan`, `Kingdom`, `Occupation`, `IsClanLeader`.
- **Current state** — `PartyBelongedTo`, `CurrentSettlement`, `Gold`, `HeroState`.

Nearly every campaign mod touches `Hero` at some point: giving the player gold, changing relations, adding a lord to a kingdom, making heroes wounded or pregnant, and so on.

## Mental Model

Think of `Hero` as the **campaign-world character card**, not the 3D battlefield model:

- `Hero` itself does not animate or fight. When a battle starts, it spawns an `Agent` that represents the hero on the battlefield.
- The card is **globally unique**: every `Hero` has a `stringId` and can be retrieved with `Hero.Find(stringId)`.
- Do **not** `new Hero()` yourself. Create new heroes through `HeroCreator.CreateHero(...)` or query existing heroes with `Hero.FindFirst` / `Hero.FindAll`.
- State changes are usually direct property writes (`Gold`, `Clan`, etc.). Health, skills, and traits have dedicated methods (`ChangeHeroGold`, `AddSkillXp`, `SetTraitLevel`).

## How to Obtain a Hero

```csharp
// The player hero
Hero main = Hero.MainHero;

// The hero the player is currently talking to (tavern, lord hall, etc.)
Hero talkTo = Hero.OneToOneConversationHero;

// Exact lookup by id
Hero arwa = Hero.Find("hero_arwa");

// First hero matching a predicate
Hero woundedHero = Hero.FindFirst(h => h.IsWounded);

// Iterate over all living heroes
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsPlayerCompanion)
    {
        // ...
    }
}

// Getting a hero from related objects
Hero leader = MobileParty.MainParty.LeaderHero;
Hero governor = Settlement.CurrentSettlement.Governor;
```

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Name` | `TextObject` | Full name including title. |
| `FirstName` | `TextObject` | First name only. |
| `CharacterObject` | `CharacterObject` | Character template bound to this hero; holds skills, equipment slots, body attributes. |
| `Clan` | `Clan` | Clan this hero belongs to; player clan is `Clan.PlayerClan`. |
| `Kingdom` | `Kingdom` | Kingdom this hero belongs to, if any. |
| `Occupation` | `Occupation` | Social role: lord, merchant, wanderer, bandit, etc. |
| `Gold` | `int` | Personal money carried by the hero. |
| `PartyBelongedTo` | `MobileParty` | Party this hero is currently in; player party is `MobileParty.MainParty`. |
| `CurrentSettlement` | `Settlement` | Settlement the hero is currently staying in, or `null`. |
| `HomeSettlement` | `Settlement` | Hero's home settlement. |
| `Spouse` | `Hero` | Current spouse. |
| `ExSpouses` | `List<Hero>` | Previous spouses. |
| `IsDead` / `IsWounded` / `IsPrisoner` / `IsFugitive` | `bool` | Life-state flags. |
| `IsClanLeader` | `bool` | Whether this hero leads their clan. |
| `IsNoncombatant` | `bool` | Whether this hero cannot fight (children, some NPCs). |
| `CanLeadParty` | `bool` | Whether this hero is eligible to lead a party. |

## Key Methods

### Queries

#### `public static Hero Find(string stringId)`
Get the unique hero by `stringId`; returns `null` if not found.

```csharp
Hero derthert = Hero.Find("lord_derthert");
if (derthert != null && !derthert.IsDead)
{
    InformationManager.DisplayMessage(new InformationMessage($"Found {derthert.Name}"));
}
```

#### `public static Hero FindFirst(Func<Hero, bool> predicate)`
Returns the first hero matching a predicate. Good for simple lookups.

```csharp
Hero richLord = Hero.FindFirst(h => h.IsLord && h.Gold > 100000);
```

#### `public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`
Returns all matching heroes.

```csharp
var playerFactionHeroes = Hero.FindAll(h => h.MapFaction == Hero.MainHero.MapFaction && h.IsAlive);
```

### Relations & State

#### `public float GetRelation(Hero otherHero)`
Returns the personal relation with another hero (-100 ~ 100).

```csharp
int relation = Hero.MainHero.GetRelation(Hero.OneToOneConversationHero);
if (relation < -20)
{
    // Relations are bad; bribery or intimidation may be needed.
}
```

#### `public void SetPersonalRelation(Hero otherHero, int value)`
Sets the relation value directly. This affects dialogue, quests, and army-joining checks.

```csharp
Hero.MainHero.SetPersonalRelation(someLord, 50); // become friendly
```

#### `public bool CanLeadParty()`
Checks whether the hero can lead a party (considers age, state, occupation, etc.).

```csharp
Hero companion = Hero.FindFirst(h => h.IsPlayerCompanion && h.CanLeadParty());
if (companion != null)
{
    // Assign as new party or caravan leader
}
```

### Economy & Influence

#### `public void ChangeHeroGold(int changeAmount)`
Add or remove gold from this hero.

```csharp
Hero.MainHero.ChangeHeroGold(5000);  // player gains 5000
someLord.ChangeHeroGold(-1000);      // deduct 1000 from a lord
```

#### `public void AddInfluenceWithKingdom(float additionalInfluence)`
Adds influence if the hero belongs to a kingdom.

```csharp
Hero.MainHero.AddInfluenceWithKingdom(25f);
```

### Skills & Traits

#### `public int GetSkillValue(SkillObject skill)`
Gets the current level of a skill.

```csharp
int oneHanded = Hero.MainHero.GetSkillValue(DefaultSkills.OneHanded);
```

#### `public void AddSkillXp(SkillObject skill, float xpAmount)`
Adds experience to a skill.

```csharp
Hero.MainHero.AddSkillXp(DefaultSkills.Riding, 1000f);
```

#### `public void SetSkillValue(SkillObject skill, int value)`
Directly sets a skill level.

```csharp
Hero.MainHero.SetSkillValue(DefaultSkills.Leadership, 200);
```

#### `public int GetTraitLevel(TraitObject trait)`
Gets the level of a trait such as Honor, Mercy, or Valor.

```csharp
int honor = Hero.MainHero.GetTraitLevel(DefaultTraits.Honor);
```

#### `public void SetTraitLevel(TraitObject trait, int value)`
Sets a trait level.

```csharp
Hero.MainHero.SetTraitLevel(DefaultTraits.Mercy, 1);
```

### Lifecycle

#### `public void MakeWounded(Hero killerHero = null, ...)`
Wounds the hero (does not kill). Useful for events and quests.

```csharp
Hero enemyLord = Hero.FindFirst(h => h.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction));
enemyLord?.MakeWounded();
```

> Note: To actually kill a hero, use `KillCharacterAction.ApplyByOldAge(...)` or similar Actions, not `MakeWounded`.

#### `public void SetImmuneToWound(bool value)`
Marks the hero as immune to wounds.

```csharp
Hero.MainHero.SetImmuneToWound(true); // protagonist cannot be wounded
```

## Typical Usage Examples

### Example 1: Give money to all player-clan heroes

```csharp
foreach (Hero hero in Clan.PlayerClan.Heroes)
{
    if (hero.IsAlive)
    {
        hero.ChangeHeroGold(1000);
    }
}
```

### Example 2: Set the current conversation lord's relation to 50

```csharp
Hero target = Hero.OneToOneConversationHero;
if (target != null && target.IsLord)
{
    Hero.MainHero.SetPersonalRelation(target, 50);
}
```

### Example 3: Push the player's Trade skill to the next level

```csharp
SkillObject skill = DefaultSkills.Trade;
int current = Hero.MainHero.GetSkillValue(skill);
int nextLevelXp = Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForLevel(current + 1);
int currentXp = Hero.MainHero.HeroDeveloper.GetSkillXpProgress(skill);
Hero.MainHero.AddSkillXp(skill, Math.Max(0, nextLevelXp - currentXp));
```

## Cross-Version Notes

- v1.3.0: The core API is the same; `Hero.MainHero` was previously often written as `CharacterObject.PlayerCharacter.HeroObject`.
- v1.4.5: Some `HeroDeveloper` and `Hero.Skills` accessors were split or renamed. For cross-version mods, prefer `Hero.MainHero.HeroDeveloper`.

## See Also

- [CharacterObject](../CharacterObject/) — template data behind a hero
- [Clan](../Clan/) — clan ownership and hero membership
- [Kingdom](../Kingdom/) — kingdoms and factions
- [Settlement](../Settlement/) — settlements and towns
- [MobileParty](../MobileParty/) — the party a hero belongs to
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — batch-process heroes inside daily ticks
- [Campaign](../Campaign/) — access the whole world via `Campaign.Current`
