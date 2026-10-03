---
title: "ArmyCohesionBoostedByPlayerEvent"
description: "A signal event with no members at all. The file is two lines — an EventBase subclass with an empty body. It is TriggerEvent'd when the player clicks the cohesion-boost button, but the real BoostCohesionWithInfluence does not happen until ExecuteDone — and nothing in the vanilla source tree listens to it."
---
# ArmyCohesionBoostedByPlayerEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyCohesionBoostedByPlayerEvent : EventBase`  
**Base:** `EventBase` (`TaleWorlds.Library.EventSystem`)  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyCohesionBoostedByPlayerEvent.cs`

## Overview

The entire file is five lines. Strip the `using` and the namespace and the whole class is:

```csharp
public class ArmyCohesionBoostedByPlayerEvent : EventBase
{
}
```

**Zero fields, zero properties, zero methods, zero constructors.** It is a pure marker: its entire existence is the fact "the player just clicked the boost-cohesion button". It carries no data — no amount, no army reference, no payload of any kind. A listener that wants to know what happened must go and read campaign state itself.

It travels through the `TaleWorlds.Library.EventSystem` event system, whose surface is three methods:

```csharp
public void RegisterEvent<T>(Action<T> eventObjType)      // subscribe
public void UnregisterEvent<T>(Action<T> eventObjType)    // unsubscribe
public void TriggerEvent<T>(T eventObj)                   // raise
```

The only trigger site in the whole tree is `ArmyManagementVM.ExecuteBoostCohesionManual()`:

```csharp
public void ExecuteBoostCohesionManual()
{
    OnBoostCohesion();
    Game.Current.EventManager.TriggerEvent(new ArmyCohesionBoostedByPlayerEvent());
}
```

## Mental Model

Read it as **"a signal that the button was clicked, not a notification that the settlement happened"**:

- **Who news it up.** `ArmyManagementVM.ExecuteBoostCohesionManual()` (`ArmyManagementVM.cs:1386-1390`). **The only site in the tree**, reached because Gauntlet binds that method to the cohesion-boost button in the army management screen.
- **Who holds the reference.** **Nobody.** `TriggerEvent` receives the temporary instance `new ArmyCohesionBoostedByPlayerEvent()`, which becomes garbage immediately after dispatch. The difference from every other view model in this directory is exactly this: it is not "held by some list", it is "held by nobody".
- **What it binds to.** **Not applicable.** It is not a `ViewModel`, has no `[DataSourceProperty]`, and takes part in no data binding. It is a *downstream artefact* of a button.
- **When it is disposed.** **There is no disposal.** No resources, no `OnFinalize`, nothing registered. Its lifetime is "constructed → dispatched → discarded", a single instant.
- 🔴 **The single most important fact: it means "clicked", not "applied".** Those two things are a whole panel apart in vanilla. `OnBoostCohesion()` only does bookkeeping:

  ```csharp
  private void OnBoostCohesion()
  {
      if (CanBoostCohesion)
      {
          TotalCost += CohesionBoostCost;
          _boostedCohesion += 10;
          _influenceSpentForCohesionBoosting += CohesionBoostCost;
          OnRefresh();
      }
  }
  ```

  What actually mutates the army is `ApplyCohesionChange()`, which calls `MobileParty.MainParty.Army.BoostCohesionWithInfluence(num, _influenceSpentForCohesionBoosting)` — and that is invoked **only from `ExecuteDone()`, and only when `NewCohesion > Cohesion`** (`ArmyManagementVM.cs:1296-1299`). In other words: **a player who clicks the button three times and then presses Cancel has raised this event three times while cohesion was not granted even once.** Reading `Army.Cohesion` inside a listener and running settlement logic off it is wrong.
- 🔴 **It fires unconditionally.** That `if (CanBoostCohesion)` lives *inside* `OnBoostCohesion()`, while `TriggerEvent` sits *outside* it. So even when the button is unavailable — cohesion near 100, not enough influence, the player not in an army — **the event still fires.** A listener cannot assume "event received ⇒ operation succeeded"; it must re-check `CanBoostCohesion` and the real state itself.
- 🔴 **Nothing in vanilla listens to it.** Searching the tree for `ArmyCohesionBoostedByPlayerEvent` yields three hits: the class declaration, the constructor's `this` alias, and the `new` above. **There is no `RegisterEvent<ArmyCohesionBoostedByPlayerEvent>(...)` anywhere.** It is an extension point left purely for mods.
- **Misuse**: treating it as a "cohesion has changed" settlement hook for applying army buffs or writing logs. Per the above, the timing is wrong.
- **Correct use**: treating it as "the player expressed the intent to boost cohesion". Granting a side reward on click, or recording a statistic — neither depends on cohesion actually landing.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| The type itself | `public class ArmyCohesionBoostedByPlayerEvent : EventBase` | **The only member.** The class body is empty (`ArmyCohesionBoostedByPlayerEvent.cs:5-7`). Its entire semantics *is* its type identity — `TriggerEvent<T>` dispatches on the generic argument and listeners match by type. |
| (inherited) `EventBase` | `TaleWorlds.Library.EventSystem.EventBase` | Marker base class. It carries no members of its own; its job is to enrol this event in `EventManager`'s typed dispatch so `RegisterEvent<T>` / `TriggerEvent<T>` match by type rather than by delegate instance. |

Note that **there is no public field or property to read**. A listener receives no amount, no army, and no success flag.

## Real Example

Subscribing — and note that unsubscribing must be paired, because `EventManager` will not do it for you:

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library.EventSystem;

public class MyCohesionSignalListener
{
    private readonly string _label;

    public MyCohesionSignalListener(string label)
    {
        _label = label;
    }

    public void Subscribe()
    {
        Game.Current.EventManager.RegisterEvent<ArmyCohesionBoostedByPlayerEvent>(OnBoostClicked);
    }

    public void Unsubscribe()
    {
        // You must unsubscribe: the EventManager holds a delegate onto your object,
        // and skipping this leaves a dead object attached to the global manager.
        Game.Current.EventManager.UnregisterEvent<ArmyCohesionBoostedByPlayerEvent>(OnBoostClicked);
    }

    private void OnBoostClicked(ArmyCohesionBoostedByPlayerEvent evt)
    {
        // The event carries no data; evt is empty.
        // And do not read Army.Cohesion here as if cohesion had already been granted —
        // the real BoostCohesionWithInfluence waits for the player to press Done.
        MBInformationManager.AddQuickInformation(new TextObject("{=MyCoh}Cohesion boost requested"), -1000);
    }
}
```

If you actually want a "cohesion has been committed" hook, listen somewhere else or wrap it yourself:

```csharp
public class MyCohesionCommitWatcher
{
    public void Subscribe()
    {
        // Vanilla provides no "committed" event. For precise timing, hook a campaign
        // event that ExecuteDone traverses, or use the polling/action hook below.
        CampaignEvents.OnArmyOverlaySetDirtyEvent.AddNonSerializedListener(this, OnOverlayDirty);
    }

    private void OnOverlayDirty()
    {
        Army army = MobileParty.MainParty.Army;
        if (army != null)
        {
            MBInformationManager.ShowHint("Army cohesion now " + (int)army.Cohesion);
        }
    }
}
```

Or roll your own payload-carrying equivalent in place of the empty shell:

```csharp
public class MyCohesionBoostCommittedEvent : EventBase
{
    public Army Army { get; }
    public int SpentInfluence { get; }
    public int NewCohesion { get; }

    public MyCohesionBoostCommittedEvent(Army army, int spentInfluence, int newCohesion)
    {
        Army = army;
        SpentInfluence = spentInfluence;
        NewCohesion = newCohesion;
    }
}
```

## Risks and crash boundaries

- 🔴 **The timing mismatch is this type's biggest trap.** The event fires on **click**, while `Army.BoostCohesionWithInfluence` runs on **panel confirmation** (`ApplyCohesionChange` at `ArmyManagementVM.cs:1147-1154`, called from `ExecuteDone` at `:1296`). A player who clicks and then cancels gets the event with nothing spent. Any listener that settles something "against the price paid" will compute the wrong answer.
- 🔴 **Fires unconditionally.** `TriggerEvent` sits outside the `if (CanBoostCohesion)` (`ArmyManagementVM.cs:1388-1389`), so unavailable states still raise it. Listeners must re-check availability and the real outcome.
- **Carries no data.** No amount, no `Army` reference, no success flag. Distinguishing "clicked the 10-point button" from "clicked the 20-point button" is impossible; you would have to read `ArmyManagementVM`, which exposes no button handle.
- **Serialization**: none. The event object is transient and `EventManager` holds it no longer than one dispatch.
- **Zero lifecycle cost**: no fields, no `OnFinalize`, no native handles. The only "resource" involved is the listener's own registration on the `EventManager`.
- **Subscription must be paired.** `RegisterEvent<T>(Action<T>)` and `UnregisterEvent<T>(Action<T>)` take a **delegate instance**, and `UnregisterEvent` compares by reference — so writing a fresh lambda at each site makes the unsubscription **silently fail** and leave a permanent subscription. This is the most common leak path here.
- **`Game.Current.EventManager` has a limited availability window.** It exists only after UI/game initialization; subscribing before the campaign starts can NRE. Subscribe when the screen opens or after `OnGameStart`.
- **Native boundary**: none. Pure managed, and it contains no game logic whatsoever.
- **Cross-version**: the three `EventManager` signatures and the call site inside `ArmyManagementVM.ExecuteBoostCohesionManual()` are v1.4.5 shapes. If upstream moves `TriggerEvent` inside the `if`, or next to `ApplyCohesionChange`, this page's central conclusion stops holding.

## Dependencies

- ↑ Base class: `EventBase`, from `TaleWorlds.Library.EventSystem` (same assembly family as [MBBindingList](../../core-extra/MBBindingList))
- ↔ Sibling: [ArmyManagementVM](../ArmyManagementVM) — **the only trigger site**, `ExecuteBoostCohesionManual()` at lines 1386-1390
- ↔ Sibling: [ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM) — another extension point in the same screen, likewise constructed nowhere in vanilla
- ↔ Sibling: [ArmyManagementItemVM](../ArmyManagementItemVM) — the same screen's row view model; compare it with this page to see "stateful VM" versus "stateless signal"
- → Event host: [Game](../../core-extra/Game) — `Game.Current.EventManager`
- → Army object: [Army](../../campaign-ext/Army); the actual `BoostCohesionWithInfluence` sits on the [ArmyManagementCalculationModel](../../campaign-ext/ArmyManagementCalculationModel) side (zh link)
- → Derived objects: [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero)
