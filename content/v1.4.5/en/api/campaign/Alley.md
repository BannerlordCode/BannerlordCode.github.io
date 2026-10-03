---
title: "Alley"
description: "Town back-alley: a SettlementArea holding one saved Hero owner, with State as a runtime mirror recomputed on load — always change owner via SetOwner."
---

# Alley

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Alley : SettlementArea`
**Base:** `SettlementArea`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Alley.cs`

## Overview

`Alley` is a town's **back alley** — one the player or an enemy gang leader occupies to recruit thugs, earn daily income and get attacked. It derives from [SettlementArea](../SettlementArea) and implements just **four overrides (`Settlement` / `Name` / `Owner` / `Tag`), one `State` property, plus `SetOwner`, `Initialize`, a constructor and `AfterLoad`**.

The only field that reaches the save is `[SaveableField(10)] private Hero _owner`. `State` (`Empty` / `OccupiedByGangLeader` / `OccupiedByPlayer`) carries **no save attribute** — it is a runtime mirror recomputed by `AfterLoad()` on load. **That is the central mental model of this type.**

## Mental Model

Split `Alley` into a **durable half** and a **derived half**; every misuse comes from not separating them:

- **The durable half is `_owner` alone.** `_settlement`, `_tag` and `_name` carry no save attributes — they are rebuilt from the settlement's XML, whose only construction site is `Alleys.Add(new Alley(this, tag, new TextObject(value)))` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs:1026`). What a save holds is **one `Alley` object reference plus one `Hero` reference**; location and name are restored from the `Settlement` side.
- **The derived half is `State`.** `SetOwner` line 65 sets `State = ((_owner != Hero.MainHero) ? AreaState.OccupiedByGangLeader : AreaState.OccupiedByPlayer);` and line 69 sets `State = AreaState.Empty;`; `AfterLoad` line 90 replicates the same logic. **So `State` is always a function of `_owner`** — as long as you never write `_owner` around `SetOwner`, the two cannot drift.

Four consequences follow:

1. **`_owner` is `private` and `SetOwner` is the only write path.** But `SetOwner` is not a plain setter: it removes the alley from the old holder's `OwnedAlleys`, saves the old value, assigns `_owner`, adds to the new holder's `OwnedAlleys`, recomputes `State`, and finally raises `CampaignEventDispatcher.Instance.OnAlleyOwnerChanged(this, newOwner, owner)`. **Writing `_owner` directly loses the two-way list sync, the event, and the `State` refresh all at once.**
2. **There is a dead line inside `SetOwner`.** Line 58 removes from `_owner.OwnedAlleys`, then line 60 does `Hero owner = _owner;` — an unconditional re-read. It still captures the old holder because `_owner` has not been reassigned yet, but it reads like a bug. **It works only because the order happens to be right: remove with the old value, save the old value, assign the new one.** Do not copy that ordering into your own code.
3. **`Initialize` is `public` because the load path genuinely uses it.** The settlement's XML assembly forks on load type (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs:1024`):

   ```csharp
   if (Campaign.Current.CampaignGameLoadingType != Campaign.GameLoadingType.SavedCampaign)
   {
       Alleys.Add(new Alley(this, tag, new TextObject(value)));
   }
   else
   {
       Alleys[num].Initialize(this, tag, new TextObject(value));
   }
   ```

   A fresh campaign takes `new Alley(...)`; a loaded game takes `Alleys[num].Initialize(...)` — **because the `Settlement.Alleys` list itself is serialized (`collectedObjects.Add(Alleys)`, line 529), the `Alley` objects already exist after deserialization and only need `_settlement` / `_tag` / `_name` re-bound.** That is the sole legitimate reason `Initialize` must be public. **Calling it yourself on an alley that already has an owner produces cross-settlement corruption.**

4. **`AfterLoad` is `internal`, so mods cannot call it.** It also carries historical baggage: when `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("v1.2.0")` and the current owner is dead, it runs `SetOwner(null); State = AreaState.Empty;` — **ownerless alleys in pre-1.2.0 saves are auto-cleared**. Reading a current 1.4.5 save never hits that branch.

A fifth point worth separating out: **`State` and "is this the player's" are different questions.** `AreaState.OccupiedByPlayer` tests whether the owner reference equals `Hero.MainHero`. An AI-controlled main hero (`_owner == Hero.MainHero` but not human-driven) also yields `OccupiedByPlayer`.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `_owner` | `[SaveableField(10)] private Hero _owner` | **The only saved field in the type**, and the sole data source for the `OwnedAlleys` two-way list and for `State`. `private` with no setter — writable only through `SetOwner`. `AutoGeneratedInstanceCollectObjects` collects it into the save graph. |
| `State` | `public AreaState State { get; private set; }` | A runtime mirror with three values: `Empty` / `OccupiedByGangLeader` / `OccupiedByPlayer`. **`private set` and no save attribute** — `AfterLoad()` recomputes it at lines 90 and 100. **Always read it as a derived value of `_owner`; never try to write it.** |
| `SetOwner` | `public void SetOwner(Hero newOwner)` | The only owner write path, in order: old owner's `OwnedAlleys.Remove(this)` → `Hero owner = _owner` → assign → new owner's `OwnedAlleys.Add(this)` → recompute `State` from `_owner != Hero.MainHero` → `CampaignEventDispatcher.Instance.OnAlleyOwnerChanged(this, newOwner, owner)`. **Passing null is legal and means abandoning the alley.** |
| `Settlement` | `public override Settlement Settlement => _settlement` | Overrides the base abstract member. Written at construction and **not saved** — restored by the load path. Its presence declares that an alley always belongs to a settlement. |
| `Name` | `public override TextObject Name => _name` | The localized name, carrying a `[CachedData]` attribute. Also **not saved**; built from the settlement XML's `value` attribute. |
| `Owner` | `public override Hero Owner => _owner` | The public read outlet, a straight forward to `_owner`. **Read-only** — use `SetOwner` to change it. |
| `Tag` | `public override string Tag => _tag` | The alley's XML tag, the key that lets a settlement tell its alleys apart. **Not saved.** |
| Constructor | `public Alley(Settlement settlement, string tag, TextObject name)` | The only constructor; it delegates straight to `Initialize(settlement, tag, name)`. **Its only official call site is `Settlement.cs:1026`**, so an alley can only be created by settlement XML assembly — a mod cannot conjure one unanchored to a town. |
| `Initialize` | `public void Initialize(Settlement settlement, string tag, TextObject name)` | Bare assignment of the three fields with **no validation whatsoever**. It is `public` for the load path: `Alleys[num].Initialize(this, tag, ...)` at `Settlement.cs:1028`. Using it on an alley that already has an owner wipes `_settlement` while keeping `_owner`, yielding "owner in town A, alley registered under town B". |
| `AfterLoad` | `internal void AfterLoad()` | Load hook: recomputes `State`, re-adds `_owner` into `OwnedAlleys`, and applies the pre-1.2.0 save cleanup. **`internal`, unreachable from mods**; invoked by the settlement's loading flow after deserialization. |

## Examples

Walk a town's alleys and bucket them by state (`Alleys` is a collection on `Settlement`):

```csharp
Settlement town = Settlement.Find("Epicrotea");
foreach (Alley alley in town.Alleys)
{
    if (alley.State == AreaState.OccupiedByPlayer)
    {
        Debug.Print("player alley " + alley.Tag + " in " + alley.Settlement.Name + " owner=" + alley.Owner.Name, 0);
    }
}
```

Change an alley's owner and confirm the event actually fired:

```csharp
Alley target = Settlement.Find("Epicrotea").Alleys[0];
Hero oldOwner = target.Owner;
Hero newOwner = Hero.MainHero;
target.SetOwner(newOwner);
Debug.Print(oldOwner.Name + " -> " + target.Owner.Name + " state=" + target.State, 0);
Debug.Print("main hero owns it = " + target.Owner.OwnedAlleys.Contains(target), 0);
```

Abandon an alley — passing null is legal and flips `State` to `Empty`:

```csharp
Alley alley = Settlement.Find("Lycaron").Alleys.First((Alley a) => a.State == AreaState.OccupiedByGangLeader);
alley.SetOwner(null);
Debug.Print("owner now " + (alley.Owner == null ? "null" : alley.Owner.Name) + " state=" + alley.State, 0);
```

## Risks and crash boundaries

- **`Initialize` is public, but only the load path should use it.** Re-initializing an alley that already has an owner replaces its town and name while keeping the owner. It has a legitimate job at `Settlement.cs:1028` and **none anywhere else**.
- **The only way `State` and `_owner` can disagree** is bypassing `SetOwner` — there is currently no public route, but reflection or a mod-side change to the same fields can do it. **When `State` contradicts `Owner`, trust `Owner`.**
- **`AfterLoad` has a 1.2.0 historical branch.** With `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("v1.2.0") && !_owner.IsAlive` it runs `SetOwner(null)`. Reading a 1.4.5 save never triggers it, but an old save produced by a cross-version mod will.
- **`AfterLoad` and `SetOwner` both `Add(this)` into `_owner.OwnedAlleys`.** The load path only runs `AfterLoad` (it does not call `SetOwner` again unless the 1.2.0 branch hits), so no duplicate; but calling `SetOwner(sameOwner)` yourself still ends with exactly one entry, since it removes before adding.
- **`Hero.OwnedAlleys` consistency is `SetOwner`'s exclusive job.** Inside an `OnAlleyOwnerChanged` listener the list is **already up to date**, because the event is raised last.
- **The `Alley` objects are in the save, but `_owner` is the only saved field on them.** `Settlement.cs:529`'s `collectedObjects.Add(Alleys)` pulls the whole list into the object graph, while `Alley` itself saves only `SaveableField(10)`. `_settlement` / `_tag` / `_name` are re-bound at load by `Initialize`. **Changing those three is not a save change; changing `_owner` is.**
- **An alley cannot be created detached from a settlement.** The constructor demands a `Settlement` and its only call site is settlement XML assembly.
- **`Name` carries `[CachedData]`.** It is a localized `TextObject` managed by the caching layer; holding a reference across a load is unsafe.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Alley.cs` is 103 lines with 9 public members (four base overrides, `State`, `SetOwner`, the constructor and `Initialize`; `AfterLoad` is `internal`) and `SaveableField` id 10. The 1.4.6 and 1.3.15 files of the same name expose an identical public surface, member for member.

## Dependencies

- Base: [SettlementArea](../SettlementArea) declares the four members an override must supply — `Settlement` / `Name` / `Tag` / `Owner`, all `abstract`.
- Sole construction site: [Settlement](../Settlement).Alleys.Add(new Alley(this, tag, new TextObject(value))) at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs:1026`, driven by the `<Area name="...">` child nodes of the settlement XML.
- Load re-binding: `Alleys[num].Initialize(this, tag, new TextObject(value))` at line 1028 of the same file, mutually exclusive with the construction branch via `Campaign.Current.CampaignGameLoadingType != Campaign.GameLoadingType.SavedCampaign`.
- Holder: [Hero](../Hero).OwnedAlleys is the reverse index `SetOwner` maintains, and `Hero.MainHero` is the sole basis for the "player occupied" state.
- Event: [CampaignEventDispatcher](../CampaignEventDispatcher).Instance.OnAlleyOwnerChanged(alley, newOwner, oldOwner), consumed by [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior).OnAlleyOwnerChanged to write a log entry.
- Rules: [AlleyModel](../AlleyModel) supplies every number — daily income, recruitment, crime rating — reached through `Campaign.Current.Models.AlleyModel.*`.
- Serialization: `SaveableField(10)` plus `AutoGeneratedInstanceCollectObjects` collecting `_owner` inside the [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) system; `AfterLoad()` rebuilds the derived state.
- Save version: [MBSaveLoad](../../save-system/MBSaveLoad).LastLoadedGameVersion together with `ApplicationVersion.FromString("v1.2.0")` selects the historical cleanup branch.
