---
title: "PartyComponent"
description: "Defines a MobileParty's 'behavioral identity' on the campaign map: whose party it is, what it is called, which settlement it belongs to, and provides a unified entry point for wage limits, naval capability, and leader changes."
---

# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** None (abstract base, derives directly from `System.Object`)
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## Overview

`PartyComponent` is the **"identity card" attached to every `MobileParty`** on the campaign map. It does not hold troops itself and does not run AI; instead it answers three questions about what a party "is":

- **Ownership**: which hero / clan / settlement this party belongs to (`PartyOwner`, `HomeSettlement`, `Leader`).
- **Name**: the party name shown on the map (`Name`, `GetDefaultComponentBanner`).
- **Capability boundary**: how much wage it can pay (`WagePaymentLimit`), whether it can sail (`CanHaveNavalNavigationCapability`).

You will almost never `new PartyComponent()` yourself. Bannerlord uses its concrete subclasses to distinguish whether a party is a lord's field army, a caravan, a village supply train, a garrison, or a bandit: `WarPartyComponent`, `CaravanPartyComponent`, `VillagerPartyComponent`, `GarrisonPartyComponent`, `BanditPartyComponent`, `PatrolPartyComponent` all derive from it. When branching on these subclasses, fetching the `PartyComponent` first and then downcasting is usually more robust than using `is` / type checks.

## Mental Model

Treat `PartyComponent` as the **"party's identity card + behavior hook set"**, not as an independent entity:

- It is **held by `MobileParty`**, and its lifecycle follows the `MobileParty`: `MobileParty.CreateParty(stringId, component)` binds it via `Create(MobileParty)`, and `MobileParty.SetPartyComponent(...)` can swap the whole component; it goes through `Finish()` when the party is destroyed.
- It is not a subclass of `MBObjectBase`, has **no `StringId`**, and has no "presence" of its own — it only lives on the `MobileParty.PartyComponent` reference.
- Abstract members (`PartyOwner`, `Name`, `HomeSettlement`, `GetDefaultComponentBanner`) must be implemented by subclasses; the base only provides a set of defaults (e.g. `WagePaymentLimit` defaults to `PartyWageModel.MaxWagePaymentLimit`, `Leader` defaults to `null`).
- Internally there are three protected lifecycle hooks `OnMobilePartySetOnCreation` / `OnInitialize` / `OnFinalize` that subclasses (e.g. `GarrisonPartyComponent`, `CaravanPartyComponent`) use to register at a settlement, add to a clan's `WarParty` list, etc. **Do not call `Create`/`Initialize`/`Finish` manually** — they are driven by `MobileParty` on creation, load, and destruction.
- Layer = **Campaign**. It only makes sense in campaign-map semantics; once you enter a battle scene, the corresponding short-lived object is `Agent`, not this component.

## How to get a PartyComponent

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

// The identity card of the player's main party
PartyComponent comp = MobileParty.MainParty.PartyComponent;

// Or use the strongly-typed accessors for the concrete subclass directly
WarPartyComponent war = MobileParty.MainParty.WarPartyComponent;
CaravanPartyComponent caravan = someCaravan.CaravanPartyComponent;

// Iterate all parties in the world and branch by component type
foreach (MobileParty party in MobileParty.All)
{
    PartyComponent c = party.PartyComponent;
    if (c is WarPartyComponent) { /* lord / clan field army */ }
    else if (c is GarrisonPartyComponent) { /* garrison */ }
}
```

> Note: `MobileParty.Party` returns the `PartyBase` (troop roster and party stats), **not** `PartyComponent`. To get the component use `MobileParty.PartyComponent` or a strongly-typed property like `WarPartyComponent`.

## When to use / When not to use

**Use it:**

- To read "whose party is this" (`PartyOwner`), the display name (`Name`), or the home settlement (`HomeSettlement`) without caring how many troops it has inside.
- To branch logic by party type (lord army / caravan / garrison / bandit) using `party.PartyComponent is XxxPartyComponent`.
- To change the wage limit or swap the leader: prefer `SetWagePaymentLimit` / `ChangePartyLeader`, so the component and the events update together.

**Do not use it for:**

- Do not `new PartyComponent()` or `new` any abstract subclass. To create a new party use `MobileParty.CreateParty(id, new XxxPartyComponent(...))`; to convert an existing party use `MobileParty.SetPartyComponent(...)` (e.g. `CaravanPartyComponent.ConvertPartyToCaravanParty`).
- Do not write `MobileParty.MemberRoster` directly inside the component to "swap the leader." To change the leader use `PartyComponent.ChangePartyLeader(newLeader)` (or its wrapper `MobileParty.ChangePartyLeader`), which validates that the new leader is in the roster and broadcasts `OnPartyLeaderChanged`.
- Do not use `SetWagePaymentLimit` as a generic setter. The base implementation is `Debug.FailedAssert("Invalid set wage payment limit function usage!")` — calling the base only triggers an assert failure; only a subclass that actually overrides it (like `GarrisonPartyComponent`) is meaningful. To change a settlement garrison's wage, change `Settlement`'s `GarrisonWagePaymentLimit`, which the component forwards to.

## Dependencies

- Upstream: [MobileParty](../../campaign/MobileParty/) creates and holds the unique `PartyComponent` (via `CreateParty` / `SetPartyComponent`); [Campaign](../../campaign/Campaign/) and `CampaignObjectManager` fire callbacks before and after a component change.
- Concrete implementations by purpose: [WarPartyComponent](../../campaign-ext/WarPartyComponent/) (clan / lord field army), [CaravanPartyComponent](../../campaign-ext/CaravanPartyComponent/) (caravan), [VillagerPartyComponent](../../campaign-ext/VillagerPartyComponent/) (village supply train), [GarrisonPartyComponent](../../campaign-ext/GarrisonPartyComponent/) (garrison), [BanditPartyComponent](../../campaign-ext/BanditPartyComponent/) (bandit), [PatrolPartyComponent](../../campaign-ext/PatrolPartyComponent/) (patrol).
- Downstream systems: [PartyBase](../../campaign/PartyBase/) provides troops / stats; [PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/) computes the party size cap by component type; [PartyWageModel](../../campaign-ext/PartyWageModel/) decides the default `WagePaymentLimit`; [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) broadcasts `OnPartyLeaderChanged` on leader change; [Clan](../../campaign/Clan/) and [Settlement](../../campaign/Settlement/) are the sources of `PartyOwner` / `HomeSettlement`; when entering a [MapEvent](../../campaign-ext/MapEvent/) the component participates in combat resolution.

## Risks

- **Leader-change validation failure does not throw**: `ChangePartyLeader` only triggers `Debug.FailedAssert` and **returns directly** when the new leader is not in the `MemberRoster`; the leader does not change and no event fires. Before calling, make sure `newLeader.CharacterObject` is already in the party roster (add them with `AddHeroToPartyAction.Apply` first, then swap).
- **`SetWagePaymentLimit` base is a trap**: the base implementation asserts failure outright; only call it on a subclass that truly overrides it (like `GarrisonPartyComponent`); in other cases change the corresponding settlement / clan setting.
- **`OnInitialize` only after load**: the component runs `OnMobilePartySetOnCreation` on `CreateParty` (first creation), and `OnInitialize` after save deserialization. Put "re-register on every save entry" logic in `OnInitialize`, and "first generation" logic in `OnMobilePartySetOnCreation` — putting it in the wrong hook causes duplicate or missed registration when returning to the main menu and reloading.
- **`null` window**: `MobileParty.AllPartiesWithoutPartyComponent` includes parties not yet mounted with a component; accessing `party.PartyComponent` on those returns `null`. Check for null before operating on the component after iterating `MobileParty.All`.
- **Clear cache after renaming**: `Name` is cached in many subclasses (e.g. `CaravanPartyComponent`, `GarrisonPartyComponent`). After changing a source that affects the name (e.g. a caravan's `Owner`, settlement ownership), you must call `ClearCachedName()`, otherwise the old name still shows on the map.

## Members

### Identity and ownership

#### `public MobileParty MobileParty { get; private set; }`
The `MobileParty` this component is bound to. Assigned by `MobileParty` during `Create`/`Initialize`, then read-only. Almost all other members fetch data through it.

#### `public PartyBase Party => MobileParty.Party;`
The party's stats / roster entry, equivalent to `MobileParty.Party`. After getting the component, use this to read troop count, gold, size cap.

#### `public abstract Hero PartyOwner { get; }`
The nominal owner of this party (e.g. a caravan's owner, a garrison's clan leader). **Abstract**, must be implemented by subclasses — `GarrisonPartyComponent` returns `Settlement.OwnerClan.Leader`, `CaravanPartyComponent` returns `Owner`.

#### `public abstract TextObject Name { get; }`
The party name shown on the map. **Abstract**, mostly cached in subclasses; call `ClearCachedName()` after renaming.

#### `public abstract Settlement HomeSettlement { get; }`
The party's "home" settlement (the caravan / garrison's birth settlement). **Abstract.**

#### `public virtual Hero Leader { get; }`
The current leader. The base returns `null`; `CaravanPartyComponent` etc. return the actual leading hero. To get "this party's leading hero" prefer reading this over `MobileParty.LeaderHero` (the latter is the troop-bearing hero; `Leader` is the component-semantic leader).

#### `public Banner Banner => MobileParty.Banner;`
The party's banner, forwarded straight from `MobileParty.Banner`.

#### `public abstract Banner GetDefaultComponentBanner()`
The source of "which banner this component should use by default" (e.g. `WarPartyComponent` returns `Clan.Banner`, `GarrisonPartyComponent` returns `Settlement.Banner`). `MobileParty` calls it first during map banner initialization.

### Capacity, economy, and navigation

#### `public virtual int WagePaymentLimit => Campaign.Current.Models.PartyWageModel.MaxWagePaymentLimit;`
The maximum wage this party is allowed to pay. The base defaults to the global `PartyWageModel` cap; `GarrisonPartyComponent` overrides it to return `Settlement.GarrisonWagePaymentLimit`. It is a read-only "current cap"; to change it use `SetWagePaymentLimit`.

#### `public virtual void SetWagePaymentLimit(int newLimit)`
Sets the wage cap. **The base implementation is `Debug.FailedAssert("Invalid set wage payment limit function usage!")` — calling the base directly only fails.** Only use it on a subclass that overrides it (like `GarrisonPartyComponent`, which forwards to `Settlement.SetGarrisonWagePaymentLimit`).

#### `public virtual bool CanHaveNavalNavigationCapability => MobileParty.ActualClan?.HasNavalNavigationCapability ?? false;`
Whether this party has sea navigation capability. The base decides by owning clan; `CaravanPartyComponent` overrides it as the inverse of `MobileParty.HasLandNavigationCapability` (has a ship → can sail).

#### `public virtual bool CanHaveLandNavigationCapability => true;`
Whether it has land navigation capability; the base is always `true`.

### Behavior toggles

#### `public virtual bool AvoidHostileActions => false;`
Whether the component should avoid proactive hostile actions (e.g. caravans, garrisons do not participate in proactive attacks by default). Affects AI decisions. Base default `false`.

### Lifecycle hooks (for subclass authors)

#### `public void ChangePartyLeader(Hero newLeader)`
**Public, safely callable.** Swaps the leader: first validates that `newLeader` is in the roster (asserts and gives up if not), then calls `OnChangePartyLeader`; if the new leader is `null` and the party is not in a `MapEvent`, auto `SetMoveModeHold()`; when the leader actually changes it broadcasts `CampaignEventDispatcher.Instance.OnPartyLeaderChanged(party, oldLeader)`.

#### `protected virtual void OnChangePartyLeader(Hero newLeader)`
Subclass extension point for leader change, actually writes the `_leader` field to the new value (see `CaravanPartyComponent`). Normal mods usually do not touch it directly.

#### `public virtual void ClearCachedName()`
Clears the `Name` cache so the next `Name` read regenerates it. The base is a no-op; cached subclasses (caravan, garrison) set `_cachedName` to `null` here.

#### `public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`
Returns the mount / harness visual id on the map icon (e.g. `CaravanPartyComponent` returns `camel`/`mule` and the matching harness by culture). The base writes empty strings. Display-only, does not affect logic.

#### `protected virtual void OnMobilePartySetOnCreation()`
Called by `Create(MobileParty)` when the party is **first created** (e.g. `CaravanPartyComponent` initializes troops here, `GarrisonPartyComponent` disables AI here). Only put logic in the "new" branch.

#### `protected virtual void OnInitialize()`
Called by `Initialize(MobileParty)` **after save deserialization** (e.g. `WarPartyComponent` does `Clan.OnWarPartyAdded` here, `CaravanPartyComponent` adds itself to `Owner.OwnedCaravans`). Put "rebuild association on every save entry" logic here.

#### `protected virtual void OnFinalize()`
Called by `Finish()` when the party is destroyed (e.g. `WarPartyComponent.OnWarPartyRemoved`, `GarrisonPartyComponent` nulls the settlement's `GarrisonPartyComponent` reference). Used for unbinding, unregistering.

### Delegates

#### `public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty);`
Callback signature for "a party's component has been created." Internally the engine uses it to notify relevant systems to refresh state when a component is mounted on a `MobileParty`.

## Typical usage examples

### Example 1: read the player party's ownership and navigation capability

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

PartyComponent comp = MobileParty.MainParty.PartyComponent;
if (comp != null)
{
    Hero owner = comp.PartyOwner;          // nominal owner of this party
    TextObject name = comp.Name;           // map display name
    Settlement home = comp.HomeSettlement; // home settlement
    bool canSail = comp.CanHaveNavalNavigationCapability;

    // Branch by component type
    if (comp is WarPartyComponent war)
    {
        Clan clan = war.Clan; // clan the lord / clan field army belongs to
    }
}
```

### Example 2: safely swap a caravan's leader

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party.PartyComponents;

CaravanPartyComponent caravan = someCaravan.CaravanPartyComponent;
Hero newLeader = /* some hero already in this caravan's roster */;

// First confirm the new leader is in the party roster, otherwise ChangePartyLeader only asserts and does not swap
if (newLeader != null && someCaravan.MemberRoster.Contains(newLeader.CharacterObject))
{
    caravan.ChangePartyLeader(newLeader); // broadcasts OnPartyLeaderChanged
}
else if (newLeader != null)
{
    // Not in roster: first add them via the Action, then make them leader
    AddHeroToPartyAction.Apply(newLeader, someCaravan, isLeader: true);
}
```

### Example 3: change a settlement garrison's wage cap

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

GarrisonPartyComponent garrison = someSettlement.Town.GarrisonPartyComponent;
if (garrison != null)
{
    // Do not call the base SetWagePaymentLimit directly (it asserts).
    // GarrisonPartyComponent overrides it, forwarding to the settlement:
    garrison.SetWagePaymentLimit(1500);
}
```

## Cross-version notes

- `PartyComponent`'s public and protected members are **essentially consistent across v1.3.0 / v1.3.15 / v1.4.5**: `MobileParty`, `Party`, `PartyOwner`, `Name`, `HomeSettlement`, `AvoidHostileActions`, `WagePaymentLimit`, `Leader`, `Banner`, the navigation capability properties, `SetWagePaymentLimit`, `GetDefaultComponentBanner`, `ChangePartyLeader`, `ClearCachedName`, `GetMountAndHarnessVisualIdsForPartyIcon`, and the lifecycle hooks all exist with unchanged signatures.
- The only shape difference is in the **concrete subclasses**: different versions add/remove parameters to some subclasses' `Create*` / `Convert*` factory methods. Accessing the component itself via the stable entry `MobileParty.PartyComponent` is cross-version compatible.

## See also

- [MobileParty](../../campaign/MobileParty/) — the party body that holds and drives PartyComponent
- [PartyBase](../../campaign/PartyBase/) — the troop / stat entry the component exposes
- [WarPartyComponent](../../campaign-ext/WarPartyComponent/) — lord / clan field army component
- [CaravanPartyComponent](../../campaign-ext/CaravanPartyComponent/) — caravan component
- [GarrisonPartyComponent](../../campaign-ext/GarrisonPartyComponent/) — garrison component
- [PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/) — computes party size cap by component type
- [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) — leader-change event broadcast
