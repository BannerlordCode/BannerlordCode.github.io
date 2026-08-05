---
title: "ICampaignBehavior"
description: "The minimal campaign-behavior contract: one event-registration hook, implemented in practice through CampaignBehaviorBase and the campaign starter/manager lifecycle."
---
# ICampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignBehavior`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ICampaignBehavior.cs`

## One-line responsibility

`ICampaignBehavior` defines the smallest contract for a campaign behavior: the object must be able to register its Campaign event listeners through `RegisterEvents()`.

## Mental model

This is the **event-registration boundary**, not the behavior storage or save contract. The interface itself contains only `RegisterEvents()`. In the supported campaign path, [`CampaignBehaviorBase`](../CampaignBehaviorBase) implements it and adds the stable `StringId` plus `SyncData(IDataStore)` required by campaign behavior persistence.

For a new campaign, [`CampaignGameStarter`](../CampaignGameStarter) collects `CampaignBehaviorBase` instances through `AddBehavior`. [`Campaign`](../Campaign) later gives that collection to `CampaignBehaviorManager`, which calls `RegisterEvents()` when the campaign is initialized. For a saved campaign, the manager replaces its behavior list, loads behavior data, and only then registers listeners. The interface does not create, retain, find, or save a behavior on its own.

## When to use and when not to

**Use it when:**

- Explaining the common event hook shared by campaign behaviors.
- Implementing a behavior through `CampaignBehaviorBase`, where the manager can register it and the save system can call `SyncData`.
- Keeping a consumer or test dependent on the minimal registration contract rather than a concrete behavior implementation.

**Do not use it when:**

- You want to add a normal mod behavior directly to a campaign. Derive from [`CampaignBehaviorBase`](../CampaignBehaviorBase) and add it to [`CampaignGameStarter`](../CampaignGameStarter); `ICampaignBehaviorManager.AddBehavior` accepts `CampaignBehaviorBase`, not an arbitrary interface implementation.
- You need persistent fields. Implement `CampaignBehaviorBase.SyncData(IDataStore)` and keep stable keys; `RegisterEvents()` is not a save hook.
- You need runtime lookup or removal. Acquire [`ICampaignBehaviorManager`](../ICampaignBehaviorManager) from `Campaign.Current.CampaignBehaviorManager` and use its typed lookup/removal methods.

## Contract and lifecycle

### `RegisterEvents()`

The only interface member. It should attach this behavior as the owner of the `CampaignEvents` listeners it needs. The manager calls it for every behavior during campaign initialization and also calls it immediately for a behavior added at runtime. It is therefore an activation hook, not a method to call repeatedly as a refresh operation.

Listeners should be registered with the behavior instance as the owner, and registration should be idempotent in any class that can be initialized more than once. [`CampaignBehaviorManager.RemoveBehavior<T>()`](../CampaignBehaviorManager) removes the behavior and asks `CampaignEventDispatcher` to detach its listeners; manually calling `RegisterEvents()` twice can otherwise duplicate daily ticks or world-change callbacks.

## Real implementation and registration

The normal mod shape is a `CampaignBehaviorBase`, not a bare `ICampaignBehavior`. This example uses the real `CampaignEvents.OnGameLoadFinishedEvent`, `IDataStore.SyncData`, and `CampaignGameStarter.AddBehavior` paths:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public sealed class ModCampaignBehavior : CampaignBehaviorBase
{
    private int _observationCount;

    public override void RegisterEvents()
    {
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, OnGameLoadFinished);
    }

    private void OnGameLoadFinished()
    {
        _observationCount++;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_observationCount", ref _observationCount);
    }
}

public sealed class ModSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        if (gameStarter is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new ModCampaignBehavior());
        }
    }
}
```

`CampaignGameStarter.AddBehavior` only puts the non-null behavior into the startup collection. The campaign manager owns event registration and later save/load orchestration, so this hook belongs to campaign startup rather than a menu callback or an arbitrary constructor.

## Dependencies and boundaries

- **Upstream:** [`CampaignGameStarter`](../CampaignGameStarter) collects concrete `CampaignBehaviorBase` instances; [`Campaign`](../Campaign) creates or reinitializes the runtime manager.
- **Event downstream:** [`CampaignEvents`](../CampaignEvents) dispatches callbacks registered by `RegisterEvents()` through [`CampaignEventDispatcher`](../CampaignEventDispatcher).
- **Save downstream:** [`CampaignBehaviorBase`](../CampaignBehaviorBase) supplies `SyncData(IDataStore)`; [`CampaignBehaviorDataStore`](../CampaignBehaviorDataStore) and [`SaveManager`](../../save-system/SaveManager) handle persistence around the manager's save boundary.
- **Runtime lookup:** [`ICampaignBehaviorManager`](../ICampaignBehaviorManager) exposes the active behavior collection through `Campaign.Current`.

## Risks and crash/save boundaries

- `Campaign.Current` can be `null` during module loading, menus, or a transition. Do not look up the manager from a constructor or unconditional submodule tick.
- Registering the same listener more than once multiplies callbacks. A duplicated world-changing listener can add gold, relation, or roster changes twice.
- `ICampaignBehavior` alone has no `SyncData` or stable behavior ID. A bare implementation is not a substitute for `CampaignBehaviorBase` in the normal manager path and will not establish a compatible save schema.
- `SyncData` should contain stable scalar values, IDs, and supported references only. Do not save `Agent`, `Mission`, UI controls, delegates, or other runtime engine handles.
- Event callbacks run at campaign-specific timing. Use the relevant [`Action`](../../campaign-ext/ChangeRelationAction) or domain API for world mutations; do not use a registration callback to bypass ownership or lifecycle rules.

## Navigation

- ↑ Parent: [Campaign API](./)
- ↔ Siblings: [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [CampaignGameStarter](../CampaignGameStarter)
- Related: [Campaign](../Campaign) · [ICampaignBehaviorManager](../ICampaignBehaviorManager) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
- 中文/English: [ICampaignBehavior](../../../../zh/api/campaign/ICampaignBehavior)
