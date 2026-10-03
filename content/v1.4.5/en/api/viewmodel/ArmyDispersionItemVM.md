---
title: "ArmyDispersionItemVM"
description: "The map-notification row for \"an army has dispersed\". The whole implementation is 18 lines: no text of its own, no event subscriptions, and a click that uses a null-safe NavigationHandler to jump to the army's kingdom page and then removes itself — the smallest and cleanest notification item in this directory."
---
# ArmyDispersionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyDispersionItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/ArmyDispersionItemVM.cs`

## Overview

When an army disperses, this row appears on the map notification panel. **The entire file is 18 lines** — the smallest notification item in this directory:

```csharp
public ArmyDispersionItemVM(ArmyDispersionMapNotification data)
    : base(data)
{
    ArmyDispersionItemVM armyDispersionItemVM = this;
    base.NotificationIdentifier = "armydispersion";
    _onInspect = delegate
    {
        armyDispersionItemVM.NavigationHandler?.OpenKingdom(data.DispersedArmy);
        armyDispersionItemVM.ExecuteRemove();
    };
}
```

No fields, no event subscriptions, no `OnFinalize` override, no `RefreshValues` override. The entire behaviour is the closure above.

**It forms a instructive pair with `AlleyLeaderDiedMapNotificationItemVM` in the same directory**: that one also dialogs and navigates, but traps `ExecuteRemove()` *inside* `if (NavigationHandler != null && _alley != null)` — so a null handler makes the button do nothing at all. This class uses the null-conditional `NavigationHandler?.OpenKingdom(...)`, so a null handler simply **skips the navigation while `ExecuteRemove()` still runs**. Same null scenario: one leaves an undismissable row, the other cleans up normally.

`OpenKingdom` is an **extension method** on `INavigationHandler` with seven overloads (no-arg / `Army` / `Settlement` / `Clan` / `PolicyObject` / `IFaction` / `KingdomDecision`). The argument here is `data.DispersedArmy`, statically typed `Army`, so overload resolution selects `OpenKingdom(this INavigationHandler, Army army)`.

## Mental Model

Read it as **"a one-shot navigation that self-destructs immediately — no state, no compensation, no side effects"**:

- **Who news it up.** `MapNotificationVM`, registering `_itemConstructors.Add(typeof(ArmyDispersionMapNotification), typeof(ArmyDispersionItemVM))` at line 111 and constructing at line 199 via `Activator.CreateInstance`. **Not replaceable from code.**
- **Who holds the reference.** `MapNotificationVM`'s notification item list.
- **What it binds to.** Only the inherited surface. It adds no `[DataSourceProperty]`; title and description come entirely from the base class via `ArmyDispersionMapNotification`.
- **When it is disposed.** The list calls `OnFinalize()` on discard, and this class does not override it. **Because it registers nothing, there is no leak path.** The cost is that it **also never dismisses itself** — an army dispersing is a *terminal* event, with no later moment at which "the matter is settled" could be observed.
- **The data is captured by the closure, never stored in a field.** `data.DispersedArmy` is not assigned to any member at construction; it is read off the captured `data` at click time. That means **the row holds no `Army` reference at all** — a direct contrast with `ArmyCreationNotificationItemVM`, which exposes `public Army Army { get; }`.
- **`armyDispersionItemVM = this` is a decompiler artifact** — the local alias it needs to reference `this` from inside an anonymous delegate, not something the original author wrote.
- **It never asks why the army ended.** A player-initiated disband, an AI defeat, and a cohesion collapse all produce exactly the same row: no wording difference, no branching behaviour.
- **Typical misuse**: expecting to read the dispersion reason or the losses off the notification. You cannot. This class exposes no properties, and `data.DispersedArmy` inside the closure is private.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public ArmyDispersionItemVM(ArmyDispersionMapNotification data)` (`ArmyDispersionItemVM.cs:7-17`) | Called reflectively. Sets `NotificationIdentifier = "armydispersion"` (`:11`) and points `_onInspect` at the "navigate then remove" closure (`:12-16`). **Registers no events and does not override `OnFinalize`.** |
| `_onInspect` (base `protected Action`) | closure assigned at `:12-16` | `NavigationHandler?.OpenKingdom(data.DispersedArmy)` followed by an **unconditional** `ExecuteRemove()`. The null-conditional protects the navigation only, never the removal. |
| `NotificationIdentifier` | base property, set to `"armydispersion"` (`:11`) | Selects the notification's icon and layout resources. A separate resource set from `ArmyCreationNotificationItemVM`'s `"armycreation"`. |

Note that this class **has no fields of its own**. Unlike `ArmyCreationNotificationItemVM`, `AlleyUnderAttackMapNotificationItemVM`, and `AlleyLeaderDiedMapNotificationItemVM`, it keeps not even an `_alley` / `Army` handle.

## Real Example

Reproducing its click behaviour — the point being the combination of the null-conditional with the unconditional removal:

```csharp
using TaleWorlds.CampaignSystem.Party;

public void OnDispersionNotificationInspected(ArmyDispersionMapNotification data)
{
    // Null-conditional: skip the jump when the handler is null.
    // ExecuteRemove() sits outside any `if`: the row disappears either way.
    // That is precisely the difference from AlleyLeaderDiedMapNotificationItemVM.
    NavigationHandler?.OpenKingdom(data.DispersedArmy);
    ExecuteRemove();
}
```

Looking up the reason yourself — the notification does not supply it, so ask the campaign side:

```csharp
using TaleWorlds.CampaignSystem.Party;

public string DescribeWhyArmyEnded(Army army)
{
    if (army == null)
    {
        return "unknown";
    }

    // ArmyDispersionItemVM does not distinguish dispersion reasons; to tell them
    // apart you have to interrogate the campaign state yourself.
    if (!army.IsActive)
    {
        return "inactive";
    }

    if (army.LeaderParty == null)
    {
        return "leader lost";
    }

    return "still active";
}
```

Writing a fuller notification item that keeps its null-safety but adds a reason:

```csharp
public class MyArmyDispersionNotificationItemVM : ArmyDispersionItemVM
{
    private readonly Army.ArmyDispersionReason _reason;

    public MyArmyDispersionNotificationItemVM(ArmyDispersionMapNotification data)
        : base(data)
    {
        _reason = data.DispersionReason;
    }

    public override void RefreshValues()
    {
        base.RefreshValues();
        DescriptionText = "The army dissolved. Reason code: " + (int)_reason;
    }
}
```

## Risks and crash boundaries

- **Zero lifecycle cost**: no listeners, no `OnFinalize`, no fields. It therefore carries neither leak risk nor any automatic cleanup to depend on. It is the opposite extreme from `AlleyUnderAttackMapNotificationItemVM` in the same directory, which registers a listener and never overrides `OnFinalize`.
- **It never auto-dismisses.** An army dispersing is terminal — there is no "afterwards it got resolved" moment to observe, so vanilla registers nothing and needs nothing. The row ends only when the player clicks it or `MapNotificationVM` clears the whole panel.
- **The click path's null-conditional protects only half of it.** `NavigationHandler?.OpenKingdom(...)` is safe, but the `ExecuteRemove()` that follows depends on the base class's `OnRemove` callback chain. If the item was never added to `MapNotificationVM`'s list — a hand-constructed instance, say — `ExecuteRemove()` may be inert because `OnRemove` is null. **That is a different failure mode from `AlleyLeaderDied`, which simply never calls it: the latter is deterministic behaviour, the former depends on how completely the item was assembled.**
- **`data.DispersedArmy` is read at click time.** If the notification data object is recycled or cleared before the click, the closure sees that snapshot's current value rather than the value it had at construction.
- **It does not distinguish dispersion reasons.** A player-initiated disband and a cohesion collapse produce identical notifications. Giving the player more precise feedback requires extending it yourself (see the example above).
- **It fills in no custom copy of its own.** Title and description are entirely base-class-generated from the data; vanilla never overrides `RefreshValues()`.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact.
- **`OpenKingdom` is an extension method with seven overloads.** Passing an `Army` selects `OpenKingdom(this INavigationHandler, Army army)`. If your compilation context does not import the namespace holding those extensions, `NavigationHandler?.OpenKingdom(...)` fails to compile — the classic extension-method pitfall.
- **Native boundary**: none. Pure managed.
- **Cross-version**: `ArmyDispersionMapNotification` and the overload set of `INavigationHandler.OpenKingdom` are v1.4.5 shapes. Adding or removing overloads upstream changes which one resolution picks here.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `NavigationHandler`, `DescriptionText`, `NotificationIdentifier`
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — the type constructor table and only construction entry point
- ↔ Sibling: [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM) — the other end of an army's life: the row shown when one is raised, exposing an `Army` property and three listeners
- ↔ Sibling: [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) — also "navigate then remove", but traps `ExecuteRemove()` **inside** a null check; side by side with this class the difference is stark
- → Data source: `ArmyDispersionMapNotification` (zh: [../../campaign-ext/ArmyDispersionMapNotification](../../campaign-ext/ArmyDispersionMapNotification), en: [../../campaign/ArmyDispersionMapNotification](../../campaign/ArmyDispersionMapNotification))
- → Army and party: [Army](../../campaign-ext/Army), [MobileParty](../../campaign/MobileParty)
- ↑ Extension host: `INavigationHandler`, with the `OpenKingdom` extension family from `TaleWorlds.CampaignSystem.ViewModelCollection`
