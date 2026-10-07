---
title: "ChangePlayerCharacterAction"
description: "The controlled handover of the player slot from one hero to another — it handles the naval edge case where the outgoing main party was carrying ships, and it is a single synchronous method with no undo."
---

# ChangePlayerCharacterAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ChangePlayerCharacterAction`
**Base:** none (standalone action class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangePlayerCharacterAction.cs`

## Overview

This is what runs when the game transfers player control — the death-and-inheritance chain, a scripted "you are now this character" beat, or a mod's own succession hook. Everything about it exists to answer one question: the player slot is moving from `Hero.MainHero` to a new hero, and the main party may or may not move with them. The method snapshots the outgoing main party's position, sea state, and disembark anchor, reassigns `Game.Current.PlayerTroop`, lets `Campaign.Current.OnPlayerCharacterChanged(out bool isMainPartyChanged)` decide whether the party itself changes hands, and then cleans up whatever that decision orphaned — transferring or destroying ships, cancelling a navigation transition, re-seating the map anchor, and disposing of an empty old main party.

It is declared `public class` rather than `static class`, but `Apply` is the only member and it is `public static`. There is nothing to instantiate.

## Mental Model

Read `Apply` as a before/after sandwich with one authoritative branch in the middle.

**Before the handover** it captures the three things that cannot be recovered later: `position` (the anchor's `CampaignVec2`), `lastUsedDisembarkPosition` (where the party last touched land), and `isCurrentlyAtSea`. It also cancels a pending `IsMovingToPoint` target via `ResetMoveTarget()` — otherwise the incoming hero would inherit a move order meant for someone else — and raises `OnBeforePlayerCharacterChanged(mainHero, hero)` so listeners can veto-adjacent setup before anything moves.

**The authoritative branch** is `Campaign.Current.OnPlayerCharacterChanged(out var isMainPartyChanged)`. That `out` parameter is the whole design: the campaign decides whether the *party* changes along with the *character*, and every downstream step keys off it. If it comes back `true`, the outgoing `mainParty` is a different object from `MobileParty.MainParty` afterwards.

**Naval cleanup** is the fiddliest part and it is gated on `mainParty.Ships.Count > 0 && isMainPartyChanged`. If the party is changing and it was carrying ships, the action picks a survivor — `mainParty.Ships.MinBy(x => x.HitPoints)`, unless the roster has a single man or the party is not at sea, in which case the survivor is `null` — and transfers *every other* ship to `PartyBase.MainParty` via `ChangeShipOwnerAction.ApplyByTransferring`. The survivor stays behind. This is a deliberate "do not sink the fleet" path, and it iterates backwards so removal does not skip entries.

**After the handover** it cancels any in-progress navigation transition, and — only when the party has ships, the saved `position.IsValid()`, the anchor is *not* valid, and the party is *not* at sea — re-applies the saved position and disembark anchor, so a hero swap cannot strand a fleet mid-ocean. Then the old party is dealt with: empty rosters are destroyed via `DestroyPartyAction.Apply(null, mainParty)`, non-empty ones are handed to the new `Hero.MainHero` through `LordPartyComponent.ChangePartyOwner`. Prisoner state triggers `PlayerCaptivity.OnPlayerCharacterChanged()`. Finally `OnPlayerCharacterChanged(mainHero, hero, MobileParty.MainParty, isMainPartyChanged)` fires, both parties are marked visually dirty, `Campaign.Current.MainHeroIllDays` is reset to `-1`, and every ship still on the new main party gets `OnPlayerCharacterChanged()` called on it directly.

The non-obvious part: `MobileParty.MainParty.Ships` is read *after* the branch for the final per-ship notification, so ships transferred away in the branch are not notified, and only the survivor plus any newly-present ships are. If you hook ship behaviour, that asymmetry is the thing to know.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Apply` | `public static void Apply(Hero hero)` | Performs the entire player-slot handover in one synchronous pass: snapshots the outgoing party's anchor/sea state, sets `Game.Current.PlayerTroop`, calls `Campaign.Current.OnPlayerCharacterChanged` to learn whether the party also moves, transfers or discards ships, destroys or re-owns the orphaned old party, resets `MainHeroIllDays`, and raises both `OnBeforePlayerCharacterChanged` and `OnPlayerCharacterChanged`. Call it only when the new hero is genuinely ready to be the player — there is no undo and no confirmation step. |

The class declares no other public member. `Apply` is `static` despite the non-static class declaration, so there is no instance state and no extension point.

## Real Example

Hand the player slot to a new hero from your own behavior, and read back what the party did:

```csharp
Hero heir = Hero.MainHero.Clan.GetHeirApparents().OrderByDescending((KeyValuePair<Hero, int> h) => h.Value).First().Key;
Hero previous = Hero.MainHero;

ChangePlayerCharacterAction.Apply(heir);

Debug.Print("player hero " + previous.Name + " -> " + Hero.MainHero.Name, 0);
Debug.Print("main party is now " + MobileParty.MainParty, 0);
Debug.Print("ill days reset to " + Campaign.Current.MainHeroIllDays, 0);
```

Prepare on `OnBeforePlayerCharacterChanged` and finish on `OnPlayerCharacterChanged` — the two events bracket the swap:

```csharp
CampaignEvents.OnBeforePlayerCharacterChangedEvent.AddNonSerializedListener(
    this,
    (oldHero, newHero) =>
    {
        Debug.Print("incoming " + newHero.Name + " gold = " + newHero.Gold, 0);
    });

CampaignEvents.OnPlayerCharacterChangedEvent.AddNonSerializedListener(
    this,
    (oldHero, newHero, newMainParty, isMainPartyChanged) =>
    {
        Debug.Print("party changed = " + isMainPartyChanged, 0);
    });
```

Read the new main party's naval state after the handover to see which ships survived:

```csharp
Debug.Print("ships carried over = " + MobileParty.MainParty.Ships.Count, 0);
Debug.Print("at sea = " + MobileParty.MainParty.IsCurrentlyAtSea, 0);
```

## Risks and Boundaries

- **No undo and no confirmation.** Once `Game.Current.PlayerTroop` is reassigned there is no reverse call; the previous `Hero.MainHero` is only recoverable from your own bookkeeping.
- **The whole thing is synchronous.** `Campaign.Current.OnPlayerCharacterChanged` runs its listeners inline, so anything expensive registered on the campaign events fires inside this method.
- **`OnPlayerCharacterChanged` is raised at least once and up to twice.** The dispatcher's `OnPlayerCharacterChanged` fires mid-method, and `OnBeforePlayerCharacterChanged` fires before it. Code that runs on both must be idempotent.
- **Ships are only redistributed when the party also changes.** If `isMainPartyChanged` is `false`, the entire naval block is skipped and ships stay attached to the party as-is.
- **A main party with zero troops is destroyed outright.** `DestroyPartyAction.Apply(null, mainParty)` is unconditional once the roster is empty — plan for the party disappearing.
- **Non-empty orphan parties are force-chained to the new hero** via `ChangePartyOwner`, regardless of the old leader's opinion.
- **`MainHeroIllDays` is unconditionally reset to `-1`**, which clears wound recovery progress for the incoming player character.
- **The `in` position restore is conditional on four predicates** (ships present, saved position valid, anchor invalid, not at sea). If any fails the party is left where it is, silently.
- **Static method, no policy hooks.** Every decision here is hard-coded; the single moddable seam is `Campaign.Current.OnPlayerCharacterChanged`.

## Cross-version note

The v1.4.5 file is 68 lines and exposes exactly one public static method. There is no overload taking the new party, no reason parameter, and no way to request that ships be kept rather than transferred.

## Dependencies

- Player slot: [Hero](../../campaign/Hero) supplies `MainHero`, `CharacterObject`, prisoner state, and gold.
- Party: [MobileParty](../../campaign/MobileParty) is the main party, its `Anchor` supplies the position/sea snapshot, and `LordPartyComponent` handles the orphan re-owning.
- Campaign seam: [Campaign](../../campaign/Campaign) provides `OnPlayerCharacterChanged(out bool isMainPartyChanged)` — the only place the party-vs-character decision is made.
- Collaborating actions: [ChangeShipOwnerAction](../ChangeShipOwnerAction) redistributes the fleet; [DestroyPartyAction](../DestroyPartyAction) removes an emptied main party.
- Supporting types: [PlayerCaptivity](../../campaign/PlayerCaptivity) re-syncs captivity when the incoming hero is a prisoner; [Ship](../../campaign/Ship) receives the per-ship notification.
- Bucket index: [campaign-ext API section](../)
