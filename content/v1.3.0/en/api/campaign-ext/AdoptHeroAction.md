---
title: "AdoptHeroAction"
description: "Auto-generated campaign action reference for AdoptHeroAction."
---
# AdoptHeroAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

## Overview

`AdoptHeroAction` is a 29-line static class (`AdoptHeroAction.cs:6`) whose entire job is to make one specific hero a child of the player character. There is exactly one public entry point, `Apply(Hero adoptedHero)` (`AdoptHeroAction.cs:23`), which forwards to a private `ApplyInternal` (`AdoptHeroAction.cs:9`). It is an instance-free helper: you never construct it and never hold a reference to it.

The work it does is three assignments. It picks the parent field from the *player's* sex — `adoptedHero.Mother = Hero.MainHero` when `Hero.MainHero.IsFemale` (`AdoptHeroAction.cs:13`), otherwise `adoptedHero.Father = Hero.MainHero` (`AdoptHeroAction.cs:17`) — and then unconditionally moves the hero into the player's clan with `adoptedHero.Clan = Clan.PlayerClan` (`AdoptHeroAction.cs:19`). It is not on the AI side of the campaign: `Clan.PlayerClan` and `Hero.MainHero` are hard-coded, so this class can only ever express "the player adopts someone".

Within the `bannerlord-1.3.0` C# sources there is no external caller of `AdoptHeroAction.Apply` at all — the only reference to the type name outside its own file is nothing. In practice it is a public seam for scripted narrative (a quest or event handler wiring "your character takes in the orphan") rather than something the campaign loop calls by itself.

## Mental Model

Model this as a *parent-field plus clan-transfer* primitive, not as a full adoption. The class name oversells it. What the code does and does not do is worth being precise about, because both halves bite:

- Only **one** parent slot is written. The opposite slot — `Father` for a female `MainHero`, `Mother` for a male one — is left exactly as it was, so an adult hero adopted late keeps whatever parent they already had. That is usually what you want, but it means "this hero has two parents from the same family" is reachable state.
- The clan assignment is the load-bearing line and it is a property write, not a field poke. `Hero.Clan` is a property with a real setter (`Hero.cs:1218`) that nulls `_homeSettlement`, calls `OnLordRemoved`/`OnLordAdded` on the old and new clan, and dispatches `CampaignEventDispatcher.Instance.OnHeroChangedClan`. So membership lists and the clan-change campaign event do fire — you do not need to add the hero to `Clan.Heroes` yourself. The cost is that the hero's home settlement is silently discarded, and there is no undo: nothing here writes a `ChangeHeroClanLogEntry`, so the move cannot be rolled back by the campaign's own rewind machinery.
- The getter on that same property returns `CompanionOf ?? _clan`. If the adopted hero happens to be leading a companion party, `adoptedHero.Clan` will still report their commander after `Apply` has set `_clan` to the player clan. Anything you read back immediately after calling `Apply` sees the wrong clan.
- `Hero.MainHero` is the *player's* hero, always. There is no overload taking the adopter. To model a noble adopting a foundling you must write the `Mother`/`Father`/`Clan` assignments yourself, using this class as the template.

## Methods

### Apply

```csharp
public static void Apply(Hero adoptedHero)
```

**Purpose:** Applies the this instance's effect to its target.

## How to use

### Getting one

Nothing to obtain — it is `public static class AdoptHeroAction` (`AdoptHeroAction.cs:6`), so call it directly. The real entry point is `AdoptHeroAction.Apply(hero)`, declared at `AdoptHeroAction.cs:23`. Call it from a `CampaignBehaviorBase` event handler or from a quest-stage action, after the hero has been resolved but before you write any text that refers to their new family.

### Typical use

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public class OrphanQuestStage
{
    private readonly Hero _orphan;

    public OrphanQuestStage(Hero orphan)
    {
        _orphan = orphan;
    }

    public void Complete()
    {
        Hero orphan = _orphan;

        // One call: writes Mother or Father from Hero.MainHero.IsFemale, then Clan = Clan.PlayerClan.
        AdoptHeroAction.Apply(orphan);

        // The clan move went through Hero.Clan's setter, so OnLordAdded and
        // CampaignEventDispatcher.OnHeroChangedClan already fired before this line.
        // Read the backing value, not the property, or a companion hero reports its commander.
        if (orphan.CompanionOf == null && orphan.Clan == Clan.PlayerClan)
        {
            orphan.HomeSettlement = Settlement.FindSettlementById("village_adoption_home");
        }
    }
}
```

### The mistake that bites

Calling `Apply` on a hero who is already a member of `Clan.PlayerClan`, or on any hero at all when your mod is not modelling the *player's* adoption. `Apply` takes one argument and there is no guard: the clan setter's `if (this._clan != value)` short-circuit (`Hero.cs:1226`) means the clan move is a genuine no-op, but the parent field has already been overwritten by the time you notice — you end up with a hero whose `Mother` or `Father` is the player character while their clan never changed, and no exception anywhere. Check `orphan.Clan == Clan.PlayerClan` yourself before calling.

## Usage Example

```csharp
// Trigger this action from a mod
AdoptHeroAction.Apply(adoptedHero);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)