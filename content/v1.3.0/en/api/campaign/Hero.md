---
title: "Hero"
description: "A campaign character: identity, skills, attributes, traits, perks, wounds, relations, family, party membership and map position."
---

# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

## Overview

`Hero` is the campaign-layer character aggregate. It is **not** a `CharacterObject`: a `CharacterObject` is the template (the "what"), while a `Hero` is a living instance of it with a name, a map position, skills, a family, a party and a state machine.

The state machine is the part that matters most. `Hero.CharacterStates` drives a dozen boolean views (`IsDead`, `IsFugitive`, `IsPrisoner`, `IsReleased`, `IsActive`, `IsNotSpawned`, `IsDisabled`, `IsTraveling`, `IsWounded`, `IsAlive`), and every state change runs a different set of vanilla side effects — party removal, prisoner transfer, death handling, book-keeping. `ChangeState` is the sanctioned entry point; setting the underlying state directly skips all of it.

The second thing to internalise is the split between **capability flags** (`CanBecomePrisoner`, `CanMarry`, `CanLeadParty`, `CanDie`, `CanMoveToSettlement`, `CanHaveCampaignIssues`) and **current facts** (`IsPrisoner`, `IsWounded`, ...). Mods that check only one of the two get different answers depending on whether the hero is the player, a lord, a notable or a template.

## Mental Model

`Hero` hangs off `Campaign` and is referenced by [Clan](../Clan), [Kingdom](../Kingdom), [MobileParty](../MobileParty) and [Settlement](../Settlement):

```
CharacterObject (template: body, gear, troop tier)
        │  Hero.CharacterObject
        ▼
Hero ──.Clan──► Clan        ──.PartyBelongedTo──► MobileParty
  │   ──.CompanionOf──► Clan
  │   ──.Spouse / .Father / .Mother / .Children──► Hero
  │   ──.GovernorOf──► Town
  │   ──.CurrentSettlement / .StayingInSettlement──► Settlement
  └── HeroState : CharacterStates ──► IsDead / IsPrisoner / IsActive / ...
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Hero.MainHero is live
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HeroWounded / HeroKilledEvent / HeroCreated
DailyTick
    hero.HitPoints and other state read
    hero.AddSkillXp(...) / hero.ChangeState(...) mutate
    the matching CampaignEvents fire afterwards
```

Traps that bite in practice:

- **Do not construct heroes directly.** `new Hero()` and `new Hero(stringId, characterObject, birthDay)` exist for the object manager, but a manually created hero is not registered, does not appear in `Hero.AllAliveHeroes`, and is never saved. The supported path is `MBObjectManager.Instance.AddObject<Hero>(...)` or a campaign behaviour that creates through the object manager.
- **`ChangeState` is not idempotent.** Moving an already-dead hero to `Dead` re-runs the death path: log entries, clan lord lists, faction membership cleanup. Guard on the current `HeroState` first.
- **`IsActive` and `IsAlive` are different.** A prisoner is alive but not active; a fugitive is active but not `IsFactionLeader`-eligible. Never collapse them into one "available" test.
- **`KillCharacterAction` detail matters.** `CanDie(causeOfDeath)` and `AddDeathMark(killer, detail)` branch on the detail enum. Passing `None` when you meant a combat death skips the wounded/death bookkeeping the log expects.
- **`GetRelation` is signed and asymmetric.** Use `GetRelation(other)` for the pair and `SetPersonalRelation` to write; `GetBaseHeroRelation` strips modifiers and is not what UI shows.
- **Cached views lag.** `CompanionsInParty`, `Siblings`, `Children` are recomputed on family events, not on every read. Do not mutate a `Hero.Children` list while iterating it.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Store | `MBObjectBase` | `Id` / `StringId`, many `[SaveableProperty]` fields |
| Template | `CharacterObject` | `Hero.CharacterObject` is the underlying body |
| Clan | [Clan](../Clan), [Kingdom](../Kingdom) | `Clan`, `MapFaction`, `SupporterOf`, `IsFactionLeader` |
| Party | [MobileParty](../MobileParty), [PartyBase](../PartyBase) | `PartyBelongedTo`, `PartyBelongedToAsPrisoner` |
| Place | [Settlement](../Settlement), [Town](../Town) | `CurrentSettlement`, `StayingInSettlement`, `GovernorOf` |
| Skills | `SkillObject`, `CharacterAttribute`, `TraitObject`, `PerkObject` | Skill / attribute / trait / perk storage |
| Actions | `KillCharacterAction` | Death and wounding cause detail |
| Events | [CampaignEvents](../CampaignEvents) | `HeroWounded`, `HeroKilledEvent`, `HeroCreated`, `HeroRelationChanged` |

## Key members

### Identity

#### `public CharacterObject CharacterObject`

The template this hero was created from. Two heroes can share a `CharacterObject` and differ in every other way.

#### `public TextObject Name` / `public TextObject FirstName`

Localized display names. `SetName(fullName, firstName)` writes both.

#### `public static Hero MainHero`

The player character. Null in editor and while a campaign is being torn down.

#### `public static Hero Find(string stringId)` / `FindFirst(Func<Hero,bool>)` / `FindAll(Func<Hero,bool>)`

Lookup helpers. `FindAll` walks the full hero list — cache the result if you call it per tick.

#### `public static MBReadOnlyList<Hero> AllAliveHeroes` / `DeadOrDisabledHeroes`

Cached partitions, mirrored by `Campaign.Current.AliveHeroes`.

### State

#### `public Hero.CharacterStates HeroState`

The raw enum behind every `Is*` state boolean. Read it when you need a switch; read the booleans otherwise.

#### `public void ChangeState(Hero.CharacterStates newState)`

The only supported way to move a hero between states. Runs vanilla fixups for party removal, prisoner rosters, faction membership and log entries. Check `HeroState != newState` before calling.

#### `public bool IsDead` / `IsFugitive` / `IsPrisoner` / `IsReleased` / `IsActive` / `IsNotSpawned` / `IsDisabled` / `IsWounded` / `IsTraveling` / `IsAlive`

Derived views over `HeroState`. Cheap and safe to read.

#### `public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = ...)` / `public void AddDeathMark(...)`

Damage and death entry points. `AddDeathMark` moves the hero to `Dead`; `MakeWounded` only lowers health.

### Health and power

#### `public int HitPoints` / `public int MaxHitPoints` / `public int WoundedHealthLimit`

Current, maximum and wounding threshold. Set through `Heal(int, bool)`, not by writing the field.

#### `public void Heal(int healAmount, bool addXp = false)`

Restores health, clamped to `MaxHitPoints`. With `addXp: true` it also grants skill XP through the leveling manager.

#### `public void AddPower(float value)` / `public void UpdatePowerModifier()`

Renown-scale political power used for AI weightings. Recompute after renown or clan changes.

#### `public bool IsHealthFull()`

Convenience for "no need to heal".

### Skills, attributes, traits, perks

#### `public int GetSkillValue(SkillObject skill)` / `public void SetSkillValue(SkillObject skill, int value)`

Direct skill read/write. Writing bypasses the XP path, so progression history in the save does not match.

#### `public void AddSkillXp(SkillObject skill, float xpAmount)`

The XP path. Goes through the skill leveling manager, so perks and attribute gains on level-up fire normally.

#### `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes`

Attribute owner. Read with `GetAttributeValue(CharacterAttribute)`.

#### `public int GetTraitLevel(TraitObject trait)` / `public void SetTraitLevel(TraitObject trait, int value)`

Trait levels. Vanilla gates many behaviours on specific trait values; change them only if you also want those behaviours to change.

#### `public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)` (on `MobileParty`) and `public bool GetPerkValue(PerkObject perk)`

Hero perk check vs. party perk check. `MobileParty.HasPerk` with `checkSecondaryRole: true` also considers the quartermaster/engineer, which is what AI weightings use.

### Relations

#### `public int GetRelation(Hero otherHero)` / `public float GetRelationWithPlayer()`

Signed personal relation. Positive is friendly. `GetRelationWithPlayer` is the value shown in UI.

#### `public void SetPersonalRelation(Hero otherHero, int value)`

Writes the pair relation. There is no symmetric setter — write once, both directions see it.

#### `public bool IsEnemy(Hero otherHero)` / `IsFriend` / `IsNeutral`

Thresholded views over `GetRelation`.

#### `public bool CanMarry()` / `CanBecomePrisoner()` / `CanLeadParty()` / `CanDie(...)` / `CanMoveToSettlement()` / `CanHaveCampaignIssues()` / `CanBeGovernorOrHavePartyRole()` / `CanHeroEquipmentBeChanged()` / `CanHaveRecruits`

Capability predicates. Each returns `false` for the player hero, templates and heroes in an incompatible state. Check the capability before attempting the action.

### Family and placement

#### `public Clan Clan` / `public Clan CompanionOf`

Noble clan, or the clan this hero serves as a companion. A companion has `CompanionOf` set and is not a clan lord.

#### `public MobileParty PartyBelongedTo` / `public Settlement CurrentSettlement` / `public Settlement StayingInSettlement`

Where the hero is right now. `PartyBelongedTo` is null while the hero is inside a settlement.

#### `public Hero GovernorOf`

The town this hero governs, or null.

#### `public Hero Father` / `Mother` / `Spouse` / `ExSpouses` / `Children` / `Siblings`

Family graph. Back-references are maintained by the family behaviour, so read-only from a mod.

### Money and goods

#### `public void ChangeHeroGold(int changeAmount)`

Adds (or removes) gold. Negative amounts are clamped at zero; this is the method clan wallets ultimately use.

#### `public int Gold`

Current gold. Vanilla recalculates wages here on the daily tick.

#### `public MBList<ItemObject> SpecialItems`

Hero-bound items that follow the hero rather than a roster.

## Real examples

### Example 1: award skill XP through the real progression path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.Core;

public sealed class HeroTrainingBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || Hero.MainHero == null)
        {
            return;
        }

        SkillObject athletics = Skills.All.FirstOrDefault(s => s.StringId == "Athletics");
        if (athletics == null)
        {
            return;
        }

        Hero.MainHero.AddSkillXp(athletics, 5f);
        InformationManager.DisplayMessage(
            new InformationMessage($"Athletics now {Hero.MainHero.GetSkillValue(athletics)}"));
    }
}
```

### Example 2: safe wounding and death

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void WoundOrKill(Hero hero, Hero killer)
{
    if (hero == null || hero.IsDead || hero.IsMainPlayerCharacter)
    {
        return;
    }

    if (!hero.CanDie(KillCharacterAction.KillCharacterActionDetail.DiedInBattle))
    {
        return;
    }

    if (hero.HitPoints > hero.WoundedHealthLimit)
    {
        hero.MakeWounded(killer, KillCharacterAction.KillCharacterActionDetail.WoundedInBattle);
        return;
    }

    hero.AddDeathMark(killer, KillCharacterAction.KillCharacterActionDetail.DiedInBattle);
}
```

### Example 3: change a relation pair safely

```csharp
using TaleWorlds.CampaignSystem;

public static void Befriend(Hero a, Hero b, int delta)
{
    if (a == null || b == null || a == b)
    {
        return;
    }

    if (!a.IsAlive || !b.IsAlive)
    {
        return;
    }

    a.SetPersonalRelation(b, a.GetRelation(b) + delta);
    InformationManager.DisplayMessage(
        new InformationMessage($"{a.Name.Name} ↔ {b.Name.Name}: {a.GetRelation(b)}"));
}
```

### Example 4: iterate every living lord without re-scanning per frame

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

public static int CountLordsAtWarWithPlayer()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return 0;
    }

    return campaign.AliveHeroes.Count(h => h.IsLord && h.Clan != null && h.Clan.IsAtWarWith(Clan.PlayerClan));
}
```

## Risks and crash boundaries

1. **Unregistered heroes vanish.** `new Hero(...)` bypasses `MBObjectManager`; it will not appear in `AllAliveHeroes`, will not be saved, and any party or clan reference to it will be a dangling ID after load. Create through the object manager.
2. **`ChangeState` re-entry.** Calling it with the state a hero is already in re-runs the whole transition (log entries, clan lists, roster writes). Guard with `if (hero.HeroState != newState)`.
3. **`Hero.MainHero` null in menus.** Any static or module-load code that touches it must guard for `null` as well as for `Campaign.Current`.
4. **`SetSkillValue` vs `AddSkillXp`.** Writing a skill level directly does not award attribute points on level-up and leaves XP progress inconsistent; use the XP path unless you deliberately want a flat override.
5. **Save coupling.** `HitPoints`, `HeroState`, `IsFemale`, skills, attributes, traits, `Gold` and family links are all saved. Renumbering or reordering `SaveableProperty` ids breaks existing saves — see [save-system](../../../architecture/save-system).
6. **Prisoner consistency.** `PartyBelongedToAsPrisoner` is repaired by `PartyBase.AfterLoad`. Manually moving a hero into or out of a prison roster without the official action produces a save that only breaks after reload.
7. **Cross-domain dependency on parties.** Reading `PartyBelongedTo` inside a mission callback is legal, but mutating it during a battle write-back will desync `PartyBase.MemberRoster`.
8. **Per-tick scans.** `Hero.FindAll` over the whole hero list per tick, per behavior, is expensive at scale. Prefer `CampaignEvents.DailyTickHeroEvent` / `HourlyTickEvent`, which hand you the subject directly.

## Cross-version notes

- The member list is the 1.3.0 decompiled surface. `Hero` gained a few navigation-related and convoy fields in later 1.3.x patches, but the state machine, skill and relation APIs are unchanged.
- `ChangeState`, `AddDeathMark`, `MakeWounded` and `KillCharacterAction` detail enums keep the same shape through 1.4.x, so behavior code written against them loads on newer saves.

## See Also

- [Clan](../Clan) — noble family the hero belongs to
- [Kingdom](../Kingdom) — realm the hero's clan serves
- [MobileParty](../MobileParty) — the party the hero leads or joins
- [PartyBase](../PartyBase) — the roster the hero's party exposes
- [Settlement](../Settlement) — where the hero currently is
- [Campaign](../Campaign) — hero registries and the campaign clock
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough