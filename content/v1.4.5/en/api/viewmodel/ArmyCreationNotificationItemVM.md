---
title: "ArmyCreationNotificationItemVM"
description: "The map-notification row for \"an army has been raised\". It exposes a get-only Army property for external lookup, pans the camera on click, and subscribes to three CampaignEvents so the row withdraws when the player joins, the army disperses, or the clan changes kingdom — unbinding each one in OnFinalize, the canonical shape in this directory."
---
# ArmyCreationNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyCreationNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/ArmyCreationNotificationItemVM.cs`

## Overview

When a new army is raised, this row appears on the map notification panel. Unlike the political-offer notifications nearby, its content is minimal: **it exposes exactly one `Army` property** and fills in no custom text, banner, or numbers of its own — title and description are produced entirely by the base class from the data.

The constructor:

```csharp
public ArmyCreationNotificationItemVM(ArmyCreationMapNotification data)
    : base(data)
{
    Army = data.CreatedArmy;
    base.NotificationIdentifier = "armycreation";
    _onInspect = delegate
    {
        GoToMapPosition(Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position);
    };
    CampaignEvents.OnPartyJoinedArmyEvent.AddNonSerializedListener(this, OnPartyJoinedArmy);
    CampaignEvents.ArmyDispersed.AddNonSerializedListener(this, OnArmyDispersed);
    CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(this, OnClanChangedKingdom);
}
```

Three things worth noticing:

1. **`public Army Army { get; }` is get-only**, assigned from `data.CreatedArmy` at construction and never changed afterwards. It is the class's only outward member, and the entry point for external code that needs to know *which* army this row refers to.
2. **The click is a safely-degrading camera move**: `Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position`. Three levels of null-conditional — the army may already be dispersed, its leader party may not exist yet — falling back to the main party's position. Its three event callbacks (notably `OnArmyDispersed`) remove the whole row exactly when the army really does disperse, so those null-conditional chains are belt-and-braces.
3. **`OnFinalize` unbinds all three listeners correctly**, one `ClearListeners(this)` each:

   ```csharp
   public override void OnFinalize()
   {
       base.OnFinalize();
       CampaignEvents.OnPartyJoinedArmyEvent.ClearListeners(this);
       CampaignEvents.ArmyDispersed.ClearListeners(this);
       CampaignEvents.OnClanChangedKingdomEvent.ClearListeners(this);
   }
   ```

   This is the **canonical shape** in this directory. Compare `AlleyUnderAttackMapNotificationItemVM`, which registers a listener but never overrides `OnFinalize` and puts its detach inside the callback — that one leaks.

## Mental Model

Read it as **"a map notification that carries an army handle, whose auto-dismiss conditions cover the three things a player does next"**:

- **Who news it up.** `MapNotificationVM`, registering `_itemConstructors.Add(typeof(ArmyCreationMapNotification), typeof(ArmyCreationNotificationItemVM))` at line 118 and constructing at line 199 via `Activator.CreateInstance`. **Not replaceable from code.**
- **Who holds the reference.** `MapNotificationVM`'s notification item list.
- **What it binds to.** Only the inherited surface. It adds no `[DataSourceProperty]`; its `Army` property is **not** a binding point (no `[DataSourceProperty]` attribute) but a query entry point for C# code.
- **When it is disposed.** The list calls `OnFinalize()` on discard; this class overrides it and clears each of the three listeners individually. **There is no leak path.**
- **The three auto-dismiss conditions have genuinely different meanings**, worth separating:
  - `OnPartyJoinedArmy(MobileParty party)` (`ArmyCreationNotificationItemVM.cs:41-47`) — the player's main party **joined** this army (`party == MobileParty.MainParty && party.Army == Army`). The row existed to say "there is an army available"; once you use it, the prompt is redundant.
  - `OnArmyDispersed(Army, Army.ArmyDispersionReason, bool)` (`:33-39`) — this army **dispersed**. Note the second parameter is named `arg2` and is **entirely unused**; the test only compares the first argument against `Army` by reference.
  - `OnClanChangedKingdom(Clan, Kingdom, Kingdom, ..., bool)` (`:25-31`) — the player's clan changed kingdom (`oldKingdom != newKingdom`). Army ownership shifts with it, so the row is void.
- **`OnClanChangedKingdom` tests `MobileParty.MainParty.ActualClan`, not `Clan.PlayerClan`.** These coincide almost always, but `ActualClan` tracks actual membership (including captured or vassal edge cases). This is a subtle difference from the political notifications in this directory, which use `Clan.PlayerClan`.
- **The click path has no guard beyond the null-conditional chain** — no `IsMainParty` check or similar. If `MobileParty.MainParty` itself is null (campaign not yet initialized), the fallback value NREs too.
- **Typical misuse**: treating `Army` as a live state query. After the army disperses the property still points at the dead object; it never becomes null and never notifies you.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `Army` | `public Army Army { get; }` (`ArmyCreationNotificationItemVM.cs:9`) | **Get-only property**, assigned from `data.CreatedArmy` at `:14`. The class's way of telling external code which army this row concerns. **Not a binding property, and not updated when the army disperses.** |
| Constructor | `public ArmyCreationNotificationItemVM(ArmyCreationMapNotification data)` (`:11-23`) | Called reflectively. Assigns `Army`, sets `NotificationIdentifier = "armycreation"` (`:15`), assigns `_onInspect` (`:16-19`), and subscribes three `CampaignEvents` (`:20-22`). |
| `_onInspect` (base `protected Action`) | closure assigned at `:16-19` | `GoToMapPosition(Ay?.LeaderParty?.Position ?? MobileParty.MainParty.Position)` — a three-level null-conditional that falls back to the main party when the army or its leader party is missing. |
| `OnPartyJoinedArmy` | `private void OnPartyJoinedArmy(MobileParty party)` (`:41-47`) | `ExecuteRemove()` when the main party joins this army. Predicate: `party == MobileParty.MainParty && party.Army == Army`. |
| `OnArmyDispersed` | `private void OnArmyDispersed(Army arg1, Army.ArmyDispersionReason arg2, bool isPlayersArmy)` (`:33-39`) | `ExecuteRemove()` when the argument army is `Army`. `arg2` (the dispersion reason) and `isPlayersArmy` are **both unused** — why the army ended never affects the decision. |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` (`:25-31`) | `ExecuteRemove()` when the player's clan changes kingdom and `oldKingdom != newKingdom`. Identity is tested via `MobileParty.MainParty.ActualClan`. |
| `OnFinalize` | `public override void OnFinalize()` (`:49-55`) | After `base.OnFinalize()`, calls `ClearListeners(this)` once per event. **The canonical unbinding shape in this directory.** |
| `NotificationIdentifier` | base property, set to `"armycreation"` (`:15`) | Selects the notification's icon and layout resources. |

## Real Example

Connecting the notification back to a campaign object through the `Army` property — the class's main outward use:

```csharp
using TaleWorlds.CampaignSystem.Party;

// Army is get-only and assigned exactly once, so it never updates itself.
public bool IsStillAValidArmy(ArmyCreationNotificationItemVM item)
{
    Army army = item.Army;
    if (army == null)
    {
        return false;
    }

    // After dispersion the property still points at the object, so ask the
    // campaign side whether it is still alive.
    return army.LeaderParty != null;
}
```

Reproducing its auto-dismiss predicates — three conditions with three different jobs:

```csharp
using TaleWorlds.CampaignSystem.Party;

public class MyArmyNotificationWatcher : CampaignBehaviorBase
{
    private Army _watched;

    public void Watch(Army army)
    {
        _watched = army;
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnPartyJoinedArmyEvent.AddNonSerializedListener(this, OnPartyJoinedArmy);
        CampaignEvents.ArmyDispersed.AddNonSerializedListener(this, OnArmyDispersed);
    }

    private void OnPartyJoinedArmy(MobileParty party)
    {
        if (party == MobileParty.MainParty && party.Army == _watched)
        {
            _watched = null;
        }
    }

    private void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)
    {
        // Same as vanilla: only the first argument is tested. Neither the
        // dispersion reason nor the is-players flag takes part.
        if (army == _watched)
        {
            _watched = null;
        }
    }

    public override void UnregisterEvents()
    {
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

Reproducing the click's three-tier camera fallback:

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public void FocusArmyLeaderOrFallBack(Army army)
{
    // Equivalent to _onInspect's
    // Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position.
    Vec2 target = army != null && army.LeaderParty != null
        ? army.LeaderParty.Position
        : MobileParty.MainParty.Position;

    Debug.Print("Focusing at " + target);
}
```

## Risks and crash boundaries

- **The lifecycle here is the most correct in this directory**: three listeners registered, three `ClearListeners(this)` calls in `OnFinalize`. **No leak path.** If you subclass and add a listener, you must add the matching unbind to `OnFinalize`, or you degrade into exactly the leaky shape of `AlleyUnderAttackMapNotificationItemVM`.
- **The `Army` property goes stale silently.** After the army disperses it still points at the original object, never becomes null, and raises no `PropertyChanged` (it is not `[DataSourceProperty]`, and it is get-only). **Any code caching this notification must independently confirm the army is still alive.**
- **`OnArmyDispersed` ignores the reason.** Both `Army.ArmyDispersionReason` and `isPlayersArmy` are unused, so "the player disbanded it" and "the AI broke it" are handled identically — the row disappears, and no extra feedback is given either way.
- **`MobileParty.MainParty.ActualClan` can differ from `Clan.PlayerClan`** (captured clan, vassal edge cases). This class uses `ActualClan` while the political notifications in this directory use `Clan.PlayerClan`. Whether the difference is deliberate or historical cannot be determined from the source; **mods that depend on it should be careful.**
- **The click path's final fallback still NREs**: if `MobileParty.MainParty` itself is null (campaign not fully initialized), evaluating `?? MobileParty.MainParty.Position` throws. The null-conditional chain only protects the first two levels.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. "There is a new army" is persisted by the campaign side; this notification row is not.
- **This class fills in no text of its own.** Title and description come entirely from the base class via `ArmyCreationMapNotification`. Custom copy requires overriding `RefreshValues()` — vanilla does not.
- **Native boundary**: none. Pure managed. `Army.LeaderParty.Position` yields a campaign-owned map coordinate.
- **Cross-version**: the three `CampaignEvents` accessors (`OnPartyJoinedArmyEvent` / `ArmyDispersed` / `OnClanChangedKingdomEvent`) and `Army.ArmyDispersionReason` are all v1.4.5 shapes.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `GoToMapPosition`, `NotificationIdentifier`
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — the type constructor table and only construction entry point
- ↔ Sibling: [ArmyDispersionItemVM](../ArmyDispersionItemVM) — the row shown when an army **disperses**; together with this page it covers both ends of an army's life
- ↔ Sibling: [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) — also subscribes to `CampaignEvents` yet never overrides `OnFinalize`; read it as the counter-example to this class's unbinding
- → Data source: [ArmyCreationMapNotification](../../campaign/ArmyCreationMapNotification)
- → Army and party: [Army](../../campaign-ext/Army), [MobileParty](../../campaign/MobileParty)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents) — origin of the three listeners
- ↑ Coordinate type: `Vec2` from `TaleWorlds.Library`, the same assembly as [MBBindingList](../../core-extra/MBBindingList)
