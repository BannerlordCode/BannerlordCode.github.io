---
title: "CampaignBehaviorManager"
description: "The live registry of CampaignBehaviorBase instances behind Campaign.Current.CampaignBehaviorManager: add, remove, query, and save/load behavior data at runtime."
---
# CampaignBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## Overview

`CampaignBehaviorManager` is the long-lived object that actually holds every [CampaignBehaviorBase](../CampaignBehaviorBase/) instance in a running campaign. During campaign bootstrap the engine constructs it from the list a [CampaignGameStarter](../CampaignGameStarter/) collected, then calls `RegisterEvents()` on each behavior in one pass — that single call is what wires every `CampaignEvents` subscription to a live campaign. From that point on `Campaign.Current.CampaignBehaviorManager` is the runtime handle: it can add a behavior mid-campaign, remove one by type, query one by type, and it owns the per-behavior save trays that carry behavior state through `SaveManager`.

The class is deliberately small — thirteen members, of which the useful public surface is `RegisterEvents`, `AddBehavior`, `RemoveBehavior<T>`, `ClearBehaviors`, `GetBehavior<T>`, `GetBehaviors<T>`, `LoadBehaviorData`, and `InitializeCampaignBehaviors`. It also holds a `[SaveableField]` `CampaignBehaviorDataStore`, so the manager itself is serialized as part of the campaign save, and it listens to `CampaignEvents.OnBeforeSaveEvent` to refill that store before every save.

## Mental Model

Think of it as the **registry and the save desk behind `Campaign.Current.CampaignBehaviorManager`**:

- **Construction order is fixed.** `Campaign` creates the manager, then calls `RegisterEvents()` exactly once, once per behavior. Anything you want subscribed must be in the list before that pass runs.
- **Bootstrap registration goes through the starter.** Add from `InitializeGameStarter` / `OnCampaignStart` / `OnGameLoaded` via `CampaignGameStarter.AddBehavior`. Add from *inside a running campaign* via `Campaign.Current.CampaignBehaviorManager.AddBehavior` — that overload immediately calls `RegisterEvents()` on the new behavior, so it is live on the same frame.
- **Save flow is event-driven, not call-driven.** The manager subscribes to `CampaignEvents.OnBeforeSaveEvent` in its constructor. On save it clears the store and re-walks every behavior calling `SaveBehaviorData`. On load `LoadBehaviorData()` walks every behavior calling `LoadBehaviorData`, then clears the store again. You never call the store yourself.
- **Trap: `RemoveBehavior<T>()` removes at most one instance and returns void.** It walks backwards and removes the *first* match then `return`s. If two behaviors of type `T` were registered, one survives. It also calls `CampaignEventDispatcher.Instance.RemoveListeners(t)` for that instance only.
- **Trap: `ClearBehaviors()` does not unsubscribe anything.** It empties the list, so behaviors stop being ticked and saved, but their `CampaignEvents` subscriptions stay attached to the dispatcher. Use `RemoveBehavior<T>()` when you mean removal.
- **Trap: `GetBehavior<T>()` returns `default(T)`.** For a reference type that is `null`; for a value-typed `T` it is a zero-initialized struct, which is why the call never throws on a miss.

### When to Use

**Use `CampaignBehaviorManager` when:**
- You must attach or detach a behavior while the campaign is already running (a toggleable quest system, a debug/cheat overlay, a DLC-gated system).
- You need to reach an existing behavior from another system and must not keep a hard reference to your own instance: `GetBehavior<T>()`.
- You need every behavior of a kind: `GetBehaviors<T>()` for patching, bulk inspection, or iteration in a menu screen.

**Do NOT use `CampaignBehaviorManager` when:**
- You are bootstrapping. Use `CampaignGameStarter.AddBehavior` — the manager is not safe to poke while it is being built.
- You want to persist your own object. Use `[SaveableField]` / `[SaveableProperty]` plus [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/), not the behavior data store.
- You expect `RemoveBehavior` to unregister `CampaignEvents` you subscribed yourself. Only the removed behavior's own dispatcher listeners are cleaned; your manual `CampaignEvents.XxxEvent.AddNonSerializedListener(...)` calls are not tracked here.

## Dependencies

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — the payload type; `RegisterEvents`, `SyncData`, and the internal save hooks all live there.
- [CampaignGameStarter](../CampaignGameStarter/) — collects behaviors at bootstrap; its list is what the manager is built from.
- [CampaignEvents](../CampaignEvents/) — `OnBeforeSaveEvent` is what triggers the save-desk refill, and every behavior subscribes through the same dispatcher.
- [CampaignEventDispatcher](../CampaignEventDispatcher/) — `Instance.RemoveListeners(t)` is called by `RemoveBehavior<T>()` to strip the removed behavior's listeners.
- [IDataStore](../IDataStore/) — the contract each behavior receives in `SyncData`; the store behind it is what the manager serializes.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.CampaignBehaviorManager` is the only public handle to this object.
- [SaveManager](../../save-system/SaveManager/) — drives the load half (`LoadBehaviorData`) once the campaign object graph is restored.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — declares the starter hooks where most behaviors are registered in the first place.

## Key members

#### `public CampaignBehaviorManager(IEnumerable<CampaignBehaviorBase> inputComponents)`

Constructor. Materializes the incoming enumerable into a private `List<CampaignBehaviorBase>` and creates the `CampaignBehaviorDataStore`, then subscribes `OnBeforeSave` to `CampaignEvents.OnBeforeSaveEvent`.
- **Note:** the constructor does **not** call `RegisterEvents()`. The engine calls it as a separate pass right after construction; if you construct one yourself in a test you must call `RegisterEvents()` yourself or nothing subscribes.
- **Note:** the `OnBeforeSaveEvent` subscription uses `AddNonSerializedListener`, so it is *not* restored on load — the manager is only ever constructed on a fresh campaign start, never deserialized into a live one.

#### `public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`

Replaces the behavior list wholesale. Equivalent to `SetBehaviors` plus a *second* `OnBeforeSaveEvent` registration.
- **Side effect:** unlike the constructor, this does not create a new `CampaignBehaviorDataStore`, so any data already collected is preserved.
- **Trap:** calling it re-registers another `OnBeforeSave` listener on top of the constructor's. The save desk then walks the list twice per save.

#### `public void RegisterEvents()`

The bootstrap hook. Iterates the behavior list in insertion order and calls `RegisterEvents()` on each.
- **Call order matters** for behaviors that depend on one another: a behavior whose `RegisterEvents` reads `Campaign.Current.CampaignBehaviorManager.GetBehavior<TOther>()` only works if `TOther` was added to the starter earlier.
- **Return value:** none. Failures inside a behavior's `RegisterEvents` propagate as an exception and abort the rest of the pass, leaving later behaviors unsubscribed.

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

Runtime registration. Appends to the list and **immediately** calls `RegisterEvents()` on the new behavior.
- **Use:** adding a behavior mid-campaign, after the bootstrap pass has already run.
- **Return value:** none. There is no validation — a `null` argument is appended and the null-reference throw happens one line later inside `campaignBehavior.RegisterEvents()`.
- **Side effect:** the new behavior is now saved by the `OnBeforeSave` walk and loaded by `LoadBehaviorData`, so its `SyncData` shape must match what an old save contains (see Risks).

#### `public void RemoveBehavior<T>() where T : CampaignBehaviorBase`

Scans the list **backwards**, removes the first instance that `is T`, calls `CampaignEventDispatcher.Instance.RemoveListeners(t)` for it, and returns.
- **Return value:** `void`. There is no way to tell whether anything was removed — check `GetBehavior<T>()` before calling if you need to know.
- **Trap:** removes at most one. Registering the same behavior class twice and calling `RemoveBehavior<T>()` once leaves the second copy alive and still subscribed.
- **Side effect:** the removed behavior's `SyncData` data is *not* cleaned out of the store; the next `OnBeforeSave` rebuilds the store from the surviving list, so the orphaned key disappears on the next save.

#### `public void ClearBehaviors()`

Empties the private list outright. No dispatcher cleanup, no store cleanup.
- **Use:** teardown in tests and in campaign-teardown paths only.
- **Trap:** surviving behaviors keep their `CampaignEvents` subscriptions and keep firing. Any closure capturing state you just discarded will still run.

#### `public T GetBehavior<T>()`

Forward linear scan over the list, returning the first instance that `is T`, else `default(T)`.
- **Return-value semantics:** `null` for the reference-typed behaviors that are normal in practice. Check before use, or a mod loading before yours gets a `NullReferenceException` at the call site rather than a graceful no-op.
- **Cost:** O(n) over the whole behavior list. Fine for a handful of lookups; do not put it inside a per-troop loop over thousands of agents.

#### `public IEnumerable<T> GetBehaviors<T>()`

`Enumerable.OfType<T>` over the list — a lazy projection, so it reflects later mutations of the list if you enumerate late.
- **Return-value semantics:** an empty sequence on a miss, never `null`. Cast to `List<T>` or `.ToList()` if you need to index or sort without re-enumerating.

#### `public void LoadBehaviorData()`

Walks every behavior calling the internal `LoadBehaviorData(behavior)` (which re-enters each behavior's `SyncData` in loading mode), then clears the store.
- **Call order:** driven by the save system after the object graph is restored, not by you.
- **Trap:** because `ClearBehaviorData()` runs at the end, calling `LoadBehaviorData()` a second time in the same load (for example from a mod that also hooks load) finds an **empty** store and every key misses — fields silently revert to their constructed defaults.

#### `private void OnBeforeSave()`

Registered on `CampaignEvents.OnBeforeSaveEvent`. Clears the store, then calls `SaveBehaviorData` for each behavior.
- **Trap:** it walks *all* behaviors, including ones removed earlier in the same frame by `ClearBehaviors` — no, those are gone from the list, so they are simply skipped; but any behavior still in the list is walked even if it was added after the last save, which is what you want.

## Examples

### Example 1 — add and remove a behavior at runtime

```csharp
public class ToggleableOverlayManager
{
    private CampaignBehaviorManager Manager => Campaign.Current.CampaignBehaviorManager;

    public void Enable()
    {
        // GetBehavior<T>() returns null when nothing is registered yet.
        if (Manager.GetBehavior<DebugOverlayBehavior>() == null)
        {
            // AddBehavior subscribes immediately; RegisterEvents is NOT needed.
            Manager.AddBehavior(new DebugOverlayBehavior());
        }
    }

    public void Disable()
    {
        // Removes ONE instance and strips its dispatcher listeners.
        Manager.RemoveBehavior<DebugOverlayBehavior>();
    }
}
```

### Example 2 — resolve a behavior owned by another mod

```csharp
public class MyQuestSystem : CampaignBehaviorBase
{
    private ReputationTracker _tracker;

    public override void RegisterEvents()
    {
        // Other mods' behaviors may not be registered yet - always null-check.
        _tracker = Campaign.Current.CampaignBehaviorManager.GetBehavior<ReputationTracker>();
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_renownSpent", ref _renownSpent);
    }
}
```

### Example 3 — inspect every behavior of a kind without holding references

```csharp
public List<string> DescribeMyBehaviors()
{
    var manager = Campaign.Current.CampaignBehaviorManager;
    // GetBehaviors<T>() is lazy and never null; ToList() to snapshot it.
    return manager.GetBehaviors<MyFeatureBehavior>()
                  .Select(b => b.FeatureName)
                  .ToList();
}
```

## Risks and crash boundaries

- **Save serialization is manager-owned.** The manager serializes one `[SaveableField(1)]` `CampaignBehaviorDataStore`. Each behavior gets its own tray keyed by the behavior's `StringId` (the behavior type name). If you register a behavior whose `StringId` collides with another of the same type, they share a tray and clobber each other's keys. Deriving from `CampaignBehaviorBase` in a *different assembly with the same namespace and type name* is the realistic way to hit this.
- **Adding a behavior mid-campaign changes the save shape.** A behavior added after a save was written has no tray in that save. On load `LoadBehaviorData` finds no data, `SyncData` misses every key, and your fields stay at their constructed defaults. Initialize fields under `if (dataStore.IsLoading)` if a missing key is not acceptable.
- **`LoadBehaviorData` is single-shot.** It clears the store at the end. Calling it twice in one load silently resets every behavior instead of restoring.
- **Cross-domain dependency:** this type lives in `TaleWorlds.CampaignSystem` but reaches into `TaleWorlds.SaveSystem` (`SaveableField`) and `TaleWorlds.Core` (`CampaignEvents`). Assemblies that ship an older `TaleWorlds.CampaignSystem` will throw `MissingMethodException` at the save step, not at load time, which makes the failure look unrelated.
- **Load-order dependency:** `GetBehavior<T>()` inside another behavior's `RegisterEvents` depends on starter insertion order. Behaviors are registered in the order the starter collected them, and starter order across modules is *not* guaranteed by the API — resolve lazily (on first use) instead of caching a `null` in the constructor path.
- **ID stability:** nothing here is keyed by a save-stable id of your own except the behavior `StringId`, which is derived from the type. Renaming or moving a behavior class into another namespace changes its tray key and orphans previously saved data. Versioned key prefixes inside your own `SyncData` are the supported mitigation.
- **Null hazard on `AddBehavior`:** `null` is not filtered. `CampaignBehaviorManager` will append it and throw on the next line. The starter's `AddBehavior` does ignore `null`; this one does not.
- **Double subscription on `InitializeCampaignBehaviors`:** it adds a second `OnBeforeSave` listener. Every save then walks the behavior list twice; a behavior with non-idempotent `SyncData` will save its values twice.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above is complete. `GetBehavior<T>` returns `default(T)`, not an explicit `null`.
- **v1.4.x:** the type is unchanged; `GetBehavior<T>()` returns `null` explicitly on a miss. Callers see identical behaviour — the difference only shows up if you wrote `var result = default(T);` and compared.
- **v1.5.x:** `ICampaignBehaviorManager` gained further members, but `CampaignBehaviorManager` itself is still the concrete implementation used by `Campaign.Current.CampaignBehaviorManager`. Register through `IGameStarter` rather than touching the concrete type in new code.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [CampaignBehaviorBase](../CampaignBehaviorBase/) — the behavior type this registry stores
- ↔ Sibling: [CampaignGameStarter](../CampaignGameStarter/) — where bootstrap registration happens
- ↔ Sibling: [CampaignEvents](../CampaignEvents/) — the dispatcher every behavior subscribes to
- ↔ Sibling: [IDataStore](../IDataStore/) — the persistence contract passed into each behavior
- ↔ Sibling: [CampaignEventDispatcher](../CampaignEventDispatcher/) — where `RemoveListeners` runs
- ↑ Campaign world: [Campaign](../../campaign/Campaign/)
- ↑ Save layer: [SaveManager](../../save-system/SaveManager/)