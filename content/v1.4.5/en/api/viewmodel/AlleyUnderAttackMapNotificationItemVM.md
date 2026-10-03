---
title: "AlleyUnderAttackMapNotificationItemVM"
description: "The map-notification row for \"one of your alleys is under attack\". Clicking only pans the camera to the alley's town; its single automatic behaviour is a CampaignEvents.SettlementEntered subscription that unbinds and self-destructs when the main party walks in — and that unbinding path is precisely why it has no OnFinalize."
---
# AlleyUnderAttackMapNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AlleyUnderAttackMapNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AlleyUnderAttackMapNotificationItemVM.cs`

## Overview

When an enemy faction attacks a clan alley inside a town, this row appears on the map notification panel. The whole implementation is 31 lines — among the shortest notification items in this directory:

```csharp
public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)
    : base(data)
{
    _alley = data.Alley;
    base.NotificationIdentifier = "alley_under_attack";
    CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEnter);
    _onInspect = delegate
    {
        GoToMapPosition(_alley.Settlement.Position);
    };
}
```

Three things, each more noteworthy than the last:

1. **Clicking only moves the camera.** `GoToMapPosition(_alley.Settlement.Position)` pans the map to the town's position. The actual fight, the enemy force, the losses — none of that is shown here. Contrast `AlleyLeaderDiedMapNotificationItemVM` in the same directory, which raises an explainer dialog with a navigation button.
2. **There is exactly one auto-dismiss condition**: the player's main party entering that alley's town. `OnSettlementEnter` checks `party != null && party.IsMainParty && settlement == _alley.Settlement` and, on a hit, calls `CampaignEventDispatcher.Instance.RemoveListeners(this)` then `ExecuteRemove()`.
3. **The unbinding lives inside that callback, not in `OnFinalize`.** That is the structural detail worth knowing about this type, and it has consequences.

## Mental Model

Read it as **"a camera panner plus a self-destruct path written into a callback"**:

- **Who news it up.** `MapNotificationVM`, registering `_itemConstructors.Add(typeof(AlleyUnderAttackMapNotification), typeof(AlleyUnderAttackMapNotificationItemVM))` at line 123 and constructing at line 199 via `Activator.CreateInstance`. **Not replaceable from code.**
- **Who holds the reference.** `MapNotificationVM`'s notification item list.
- **What it binds to.** Only the inherited surface (`TitleText`, `DescriptionText`, `NotificationIdentifier`, `IsFocused`, `RemoveInputKey`). It adds no `[DataSourceProperty]` of its own.
- **When it is disposed.** The list calls `OnFinalize()` when the entry is discarded — **and this class does not override it.** That matters; see below.
- **This is the only type in this directory whose unbinding covers just one path.** It registers `CampaignEvents.SettlementEntered`, yet the detach appears only inside `OnSettlementEnter`:

  ```csharp
  private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)
  {
      if (party != null && party.IsMainParty && settlement == _alley.Settlement)
      {
          CampaignEventDispatcher.Instance.RemoveListeners(this);
          ExecuteRemove();
      }
  }
  ```

  **Only the main party entering that specific town unbinds it.** Every other removal path — the player dismissing it, `MapNotificationVM` clearing the whole panel on a scene change, the alley being destroyed and cleaned up elsewhere — never reaches that `RemoveListeners` line. The listener then stays attached to `CampaignEvents.SettlementEntered` holding a dead object with a live `Alley` reference, and **the callback dereferences `_alley.Settlement` on every single invocation**. That is the leak.
  Compare `ArmyCreationNotificationItemVM` in the same directory: it registers three `CampaignEvents` listeners too, but it **overrides `OnFinalize` and calls `ClearListeners(this)` on each**. That is the correct shape.
- **`RemoveListeners(this)` rather than `ClearListeners`.** The former removes *all* of this object's listeners on the global dispatcher by key; the latter is per-event. `RemoveListeners(this)` in one shot is the right tool — the problem is not that call, it is that **it only happens on one path**.
- **It never checks whether the attack has ended.** Even if the enemy retreats, the battle resolves, and the alley is untouched, the row stays until the player walks into that town. It tracks "has the player dealt with this", not "is the threat still real".
- **Misuse #1**: treating it as an alley combat panel. It displays no combat information whatsoever; it is a camera shortcut.
- **Misuse #2**: subclassing it and "tidying up" `OnFinalize` without calling `base.OnFinalize()` — that breaks the base class's own cleanup.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)` | Called reflectively. Stores `_alley`, sets `NotificationIdentifier = "alley_under_attack"`, subscribes to `CampaignEvents.SettlementEntered`, and assigns the camera-panning closure to `_onInspect`. **Does not override `OnFinalize`.** |
| `_onInspect` (base `protected Action`) | anonymous delegate assigned in the constructor | Runs on click: `GoToMapPosition(_alley.Settlement.Position)`. No guard — a null `_alley` is an immediate NRE. |
| `OnSettlementEnter` | `private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)` | The only event handler. On the three-part condition (party non-null, is the main party, settlement equals `_alley.Settlement`) it calls **`RemoveListeners(this)` first, then `ExecuteRemove()`**. That `RemoveListeners` is the class's only unbinding point. |
| `_alley` | `private Alley _alley` | The only field. Not `readonly`, never reassigned after construction, and dereferenced from two different places (`_onInspect` and `OnSettlementEnter`). |
| `NotificationIdentifier` | base property, set to `"alley_under_attack"` here | Selects the notification's icon and layout resources — a separate resource set from `AlleyLeaderDied`'s `"alley_leader_died"`. |
| `OnFinalize` | **not overridden** (inherited) | The critical omission: the base implementation does not detach `CampaignEvents.SettlementEntered`. This is the type's only leak source. |

## Real Example

Reproducing its auto-dismiss condition — note that it asks "has the player arrived", not "is the threat over":

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public bool ShouldDismissOnEnter(MobileParty party, Settlement settlement, Alley alley)
{
    // Exactly the same three-part condition as OnSettlementEnter.
    if (party == null || !party.IsMainParty)
    {
        return false;
    }

    return settlement == alley.Settlement;
}
```

Supplying the unbinding path vanilla omits — get `OnFinalize` right when you subclass:

```csharp
public class MyAlleyUnderAttackNotificationItemVM : AlleyUnderAttackMapNotificationItemVM
{
    public MyAlleyUnderAttackNotificationItemVM(AlleyUnderAttackMapNotification data)
        : base(data)
    {
    }

    public override void OnFinalize()
    {
        // Let the base class finish its own cleanup first.
        base.OnFinalize();

        // Then add the step vanilla misses: drop every listener this object has on the
        // global dispatcher, by key. Relying on the single RemoveListeners inside
        // OnSettlementEnter means the "dismissed" and "panel cleared" paths both leave a
        // permanently attached dead object behind.
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

Watching whether the alley was actually taken, so the row can withdraw early — a behaviour vanilla does not have:

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public class MyReactiveAlleyNotificationItemVM : AlleyUnderAttackMapNotificationItemVM
{
    public MyReactiveAlleyNotificationItemVM(AlleyUnderAttackMapNotification data)
        : base(data)
    {
        // AfterSettlementEntered carries the same delegate signature as
        // SettlementEntered: (MobileParty, Settlement, Hero).
        CampaignEvents.AfterSettlementEntered.AddNonSerializedListener(this, OnAfterSettlementEntered);
    }

    private void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        ExecuteRemove();
    }

    public override void OnFinalize()
    {
        base.OnFinalize();
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

## Risks and crash boundaries

- **The leak is this type's main risk, and the structure causes it.** It registers `CampaignEvents.SettlementEntered` but has no `OnFinalize`, and detaches only on the "main party entered that town" path. Any removal that bypasses `OnSettlementEnter` — a dismiss, a scene change, an alley destroyed and cleaned up by another system — leaves the listener on the global dispatcher. The dead object still holds an `Alley` reference, and every subsequent settlement entry runs the callback and dereferences `_alley.Settlement`. **The first thing to do when subclassing this is override `OnFinalize` and call `RemoveListeners(this)`.**
- **The callback dereferences `_alley` every time**, including when the main party enters a *different* town — `party.IsMainParty` is checked first and a non-main party returns early, but a main party entering anywhere else still reads `_alley.Settlement` for the comparison. So while leaked, every main-party entry widens the NRE exposure.
- **It does not check whether the threat ended.** The row survives the enemy retreating. Doing it properly means listening for battle completion and calling `ExecuteRemove()` yourself.
- **The click path has no null defence**: `_onInspect` goes straight to `_alley.Settlement.Position`. The data side guarantees non-null, but a hand-constructed item with `_alley == null` NREs on click.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. "An alley is under attack" is persisted by the campaign side; this notification row is not.
- **`GoToMapPosition` only moves the camera.** It changes no game state and does not pause the map.
- **Native boundary**: none here. Pure managed, though `Alley.Settlement.Position` ultimately refers to a map coordinate owned by the campaign side.
- **Cross-version**: the delegate signature of `CampaignEvents.SettlementEntered` is `MbEvent<MobileParty, Settlement, Hero>`; `Alley.Settlement` and `MapNotificationItemBaseVM.GoToMapPosition` are both v1.4.5 shapes. If upstream adds an `OnFinalize` override, this page's leak analysis stops being true.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `GoToMapPosition`, `NotificationIdentifier`
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — owner of the type constructor table and the only construction entry point
- ↔ Sibling: [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) — the same alley family, but that one registers **no listeners at all**; read together they show what "registers but never overrides `OnFinalize`" costs
- ↔ Sibling: [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM) — also subscribes to several `CampaignEvents` but **unbinds correctly inside `OnFinalize`**, and is the reference implementation to copy
- → Data source: `AlleyUnderAttackMapNotification` (zh: [../../campaign-ext/AlleyUnderAttackMapNotification](../../campaign-ext/AlleyUnderAttackMapNotification), en: [../../campaign/AlleyUnderAttackMapNotification](../../campaign/AlleyUnderAttackMapNotification))
- → Settlement and party: [Settlement](../../campaign/Settlement), [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents) — origin of `SettlementEntered`
- → Alley: `TaleWorlds.CampaignSystem.Settlements.Alley`
