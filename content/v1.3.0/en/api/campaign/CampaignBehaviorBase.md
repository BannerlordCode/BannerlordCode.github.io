---
title: "CampaignBehaviorBase"
description: "The abstract base for campaign behaviors: six members, two constructors that decide the save key, RegisterEvents and SyncData as the only abstract methods, and GetCampaignBehavior<T> as a plain static forward into Campaign."
---

# CampaignBehaviorBase

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** implements the marker interface [ICampaignBehavior](../ICampaignBehavior) (which declares only `RegisterEvents()`); does not derive from `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs` (27 lines total)

## Overview

`CampaignBehaviorBase` is the ticket a mod uses to plug logic into a campaign. The class itself has **no behavior, no field storage and no lifecycle management** — only six public/protected members: two constructors, two abstract methods, one static forwarder, and one `readonly string StringId`.

You must implement exactly two things: `RegisterEvents()` and `SyncData(IDataStore)`. The first is called once per behavior by `CampaignBehaviorManager.RegisterEvents()` during campaign initialization, and is where you attach `CampaignEvents` subscriptions. The second is called by the save system on save and on load, and is the only channel through which your private fields reach the save file. Beyond that the base class offers no default behavior — no `Dispose`, no `OnEndCampaign`; if you need teardown you write it yourself inside the load branch of `SyncData` or inside the events you subscribed to.

**`StringId` is the only member with a persistence consequence, and its value is decided by which constructor you picked.** `CampaignBehaviorBase(string stringId)` uses the string you pass; the parameterless constructor uses `base.GetType().Name`, i.e. the **runtime class name**. That id is the primary key of the `[SaveableField(1)] Dictionary<string, BehaviorSaveData> _behaviorDict` in the save file. `CampaignBehaviorDataStore.SaveBehaviorData` fires `Debug.FailedAssert("trying to save multiple behaviors with the same stringid: ...")` on a duplicate, and `LoadBehaviorData` degrades to a fuzzy "does any old key contain the class name" match when the exact lookup misses. **Renaming your class changes the default id and therefore how old saves are read** — which is why derived classes usually pass an explicit, stable string.

**Watch one asymmetry that catches people.** `CampaignGameStarter.AddBehavior(CampaignBehaviorBase)` only does `_campaignBehaviors.Add(campaignBehavior)` — it does **not** call `RegisterEvents()`. The runtime `CampaignBehaviorManager.AddBehavior` does `_campaignBehaviors.Add(campaignBehavior); campaignBehavior.RegisterEvents();` — it registers **immediately**. Same method name, two different semantics: going through the starter means "queue up and wait for the batch registration"; going through the manager means "insert and take effect now".

## Mental Model

Treat it as **a resident plugin for the campaign's lifetime**, and locate yourself with three questions: *when am I called? how do I reach my peers? how do I survive a save?*

**Question 1 — when am I called?** Three timings, each shaped differently.

`RegisterEvents()` is driven by [CampaignBehaviorManager](../CampaignBehaviorManager)'s method of the same name, whose body is `foreach (CampaignBehaviorBase b in this._campaignBehaviors) { b.RegisterEvents(); }` — **once, over everything, in registration order**. That means a loop over `Campaign.Current.GetCampaignBehaviors<T>()` inside `RegisterEvents` sees every behavior including yourself, and any assumption that "B has already subscribed by the time my code runs" holds only if B was registered before you.

At no other time is the object called directly. What runs constantly are the delegates you attached to `CampaignEvents` — `CampaignEvents.DailyTickHeroEvent`, `OnClanInfluenceChanged`, `PerkOpenedEvent` and friends, fired by the engine at their own moments.

**Question 2 — how do I reach my peers?** Two routes, with different behavior.

`CampaignBehaviorBase.GetCampaignBehavior<T>()` is **static** and its body is one line, `return Campaign.Current.GetCampaignBehavior<T>();`, which in turn is `_campaignBehaviorManager.GetBehavior<T>()`. The method that actually does the work is `CampaignBehaviorManager.GetBehavior<T>()`: `return this._campaignBehaviors.OfType<T>().FirstOrDefault<T>();`

**`FirstOrDefault` means "the first match in registration order".** That is the *opposite* direction from the `Count - 1` reverse scan used by the [GameModel](../../core-extra/GameModel) override chain: for a model the last registration wins, for a behavior the first one wins. And because it is `OfType<T>`, `T` need not be a `CampaignBehaviorBase`, so `GetCampaignBehavior<IAllianceCampaignBehavior>()` — fetching an official behavior *by interface* — is perfectly legal. That is exactly what `AcceptCallToWarAgreementDecision.AllianceCampaignBehavior` does: its getter is `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()`.

**A miss returns null; it does not throw.** `FirstOrDefault` yields `default(T)` on an empty sequence. Official code gets away with dereferencing it (see `AcceptCallToWarAgreementDecision.ApplyChosenOutcome`, which calls `this.AllianceCampaignBehavior.StartCallToWarAgreement(...)` unguarded) because the sandbox guarantees that behavior is registered. If you ask for something you never registered, you must null-check yourself.

**Question 3 — how do I survive a save?** Only through `SyncData`. The mechanics live on the [IDataStore](../IDataStore) page: the same key serves saving and loading, `ref` accepts only fields, and a key miss on load returns false silently. Add one rule that is only visible at this layer: **`SyncData` moves raw fields and does not rebuild anything derived from them.** `AgingCampaignBehavior.SyncData` stores two `Dictionary<Hero, int>` and stops; its "who is still under age" logic is recomputed on every `DailyTickHero` rather than restored from an index built during load.

**Last discipline: `RegisterEvents` runs once, and removing a behavior does not unsubscribe you.** `CampaignBehaviorManager.RemoveBehavior<T>()` calls `CampaignEventDispatcher.Instance.RemoveListeners(t)` after removing, which does clear listeners registered under that behavior as owner. But `ClearBehaviors()` only does `_campaignBehaviors.Clear()` — **no listener cleanup** — and the startup-phase `CampaignGameStarter.RemoveBehaviors<T>()` is blunter still: it deletes the list entry and never touches `CampaignEventDispatcher`.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `.ctor(string)` | `public CampaignBehaviorBase(string stringId)` | Body is only `this.StringId = stringId;`. Passing a stable literal decouples the save key from the class name, so renaming or refactoring stays compatible with old saves. Passing null does not crash, but the dictionary key becomes null and both duplicate detection and the fuzzy `Contains` fallback become unpredictable. |
| `.ctor()` | `public CampaignBehaviorBase()` | Body is only `this.StringId = base.GetType().Name;`. Convenient, but it binds the save key to the runtime class name: renaming the class, or having two same-named classes from different mods, collides with the duplicate-id assert in `SaveBehaviorData` or triggers the fuzzy path in `LoadBehaviorData`. Derived classes that do not pass an explicit id land here. |
| `RegisterEvents` | `public abstract void RegisterEvents()` | **Must implement.** Called once per behavior during campaign initialization, and it is the only moment you get to attach `CampaignEvents` subscriptions. It is **not** re-run on load — loading goes through the `SyncData` branch. So do not put "state that must be rebuilt" here. |
| `SyncData` | `public abstract void SyncData(IDataStore dataStore)` | **Must implement.** Called once per behavior on save (`IsSaving` true) and once on load (`IsLoading` true). The engine constructs the `IDataStore` and passes it in; mod code has no access to any other instance of that type. See [IDataStore](../IDataStore) for the exact semantics. |
| `GetCampaignBehavior<T>` | `public static T GetCampaignBehavior<T>()` | A one-line forward: `return Campaign.Current.GetCampaignBehavior<T>();`. Being static, it can be called from an instance method without `this.`. Returns the first registered behavior matching `T` in registration order, and **returns null rather than throwing**. `T` is unconstrained, so it may be an interface such as `IAllianceCampaignBehavior` or a concrete class. |
| `StringId` | `public readonly string StringId` | The save key. Each constructor supplies it differently. It is `readonly`, so derived classes **cannot change it** — the only way to fix the key is to pass the right value to the constructor. It also doubles as the behavior's name in diagnostics. |

Inherited from [ICampaignBehavior](../ICampaignBehavior) is only `RegisterEvents()`, which the base class promotes to `abstract` — so implementing the interface and deriving from this class are the same road.

## Real Example

The smallest compilable behavior, with an explicit save key and a real campaign event:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public class DebtLedgerBehavior : CampaignBehaviorBase
{
    private Dictionary<Clan, int> _debts = new Dictionary<Clan, int>();

    public DebtLedgerBehavior() : base("DebtLedger")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnClanInfluenceChanged.AddNonSerializedListener(this, this.OnClanInfluenceChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<Dictionary<Clan, int>>("_debts", ref this._debts);
    }

    private void OnClanInfluenceChanged(Clan clan, float change)
    {
        int current;
        this._debts.TryGetValue(clan, out current);
        this._debts[clan] = current - (int)change;
    }

    public int GetDebt(Clan clan)
    {
        int value;
        this._debts.TryGetValue(clan, out value);
        return value;
    }
}
```

Attaching it from `MBSubModuleBase.InitializeGameStarter`. Note this goes through `CampaignGameStarter.AddBehavior`, which does **not** call `RegisterEvents` — registration is deferred to campaign initialization and then run in one batch by `CampaignBehaviorManager.RegisterEvents()`:

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new DebtLedgerBehavior());
}
```

Fetching an official behavior at runtime, by interface — the same shape official code uses:

```csharp
IAllianceCampaignBehavior alliances = CampaignBehaviorBase.GetCampaignBehavior<IAllianceCampaignBehavior>();
if (alliances != null)
{
    alliances.StartCallToWarAgreement(kingdomA, kingdomB, kingdomC, 500, false);
}
```

`GetCampaignBehavior<T>` returning null does not throw, so the `if` is required rather than defensive padding. The `StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)` call above uses the real signature declared on `IAllianceCampaignBehavior`.

## Risks and Boundaries

- **Abstract class; both abstract methods are unavoidable.** Omit `RegisterEvents` or `SyncData` and it will not compile. `ICampaignBehavior` declares only `RegisterEvents`, so you *could* implement the interface without inheriting — but then you lose `StringId`, `SyncData` and the static helper, and `CampaignBehaviorManager.SetBehaviors` takes an `IEnumerable<CampaignBehaviorBase>`, so such an object could not be installed anyway. Deriving is the only workable path.
- **`GetCampaignBehavior<T>` is first-registration-wins, not last.** The body is `OfType<T>().FirstOrDefault<T>()`. That is the reverse of the model override chain's reverse scan, and it is one of the sharpest differences between the two subsystems. If several mods implement `IAllianceCampaignBehavior`, the earliest registered one is what you get; you cannot promote yourself by changing registration order.
- **A miss returns null; it does not throw.** That is `FirstOrDefault` on an empty sequence. Official code dereferences the result unguarded (see `AcceptCallToWarAgreementDecision.ApplyChosenOutcome`) because the sandbox guarantees the behavior exists. If your mod may also run in a trimmed campaign, the null check is mandatory.
- **`StringId` is `readonly`.** You cannot adjust it after construction; getting it right means passing it to the constructor. Writing `this.StringId = ...` in a derived class is a compile error.
- **The parameterless constructor ties the save key to the class name.** Rename the class and the exact lookup on old saves misses, dropping into `LoadBehaviorData`'s `keyValuePair.Key.Contains(name)` fallback. If the identifying word also changed, nothing is recovered, fields fall back to defaults, and **no error is reported**.
- **The two `AddBehavior` methods differ.** `CampaignGameStarter.AddBehavior` only queues; `CampaignBehaviorManager.AddBehavior` queues **and immediately calls `RegisterEvents()`**. Hot-swapping a behavior at runtime should use the latter — but calling it twice attaches the same subscriptions twice.
- **Neither `RemoveBehaviors<T>()` nor `ClearBehaviors()` unsubscribes.** The first deletes a list entry on the starter; the second only calls `_campaignBehaviors.Clear()`. Real teardown requires `CampaignBehaviorManager.RemoveBehavior<T>()`, which invokes `CampaignEventDispatcher.Instance.RemoveListeners(t)` — and it **removes exactly one then returns**. Call it repeatedly for multiple matches.
- **`RegisterEvents` runs once.** It is not "per campaign entry". To rebuild in-memory state after a load, use the `IsLoading` branch of `SyncData`, or subscribe to `CampaignEvents.OnGameLoadedEvent` — which is what `AgingCampaignBehavior` does.
- **No `Dispose`, no deregistration method.** A statically-installed behavior lives for the whole process and is not reset between campaigns. If you need teardown, write it yourself into a hook such as `OnGameLoadedEvent`.

## Cross-Version Notes

The public/protected surface of `CampaignBehaviorBase` is **identical** across `bannerlord-1.3.0/`, `bannerlord-1.3.15/`, `bannerlord-1.4.6/`, `bannerlord-1.4.7/` and `bannerlord-1.5.3/`: six members in each (two constructors, `RegisterEvents`, `SyncData`, static `GetCampaignBehavior<T>`, `readonly StringId`), with zero additions, zero removals and zero signature changes.

What actually changes is the **derived population**. More than 190 files implement this class in 1.3.0 alone (over a hundred under `CampaignBehaviors/`, around forty under `Issues/`, plus sandbox and story-mode classes), and later versions keep adding. So an upgrade is far more likely to break you through "an `CampaignEvents` delegate I subscribe to changed shape" or "a member of an official behavior's interface changed" than through the base class itself.

One practical rule that follows: since the two abstract methods' signatures and `StringId`'s meaning are permanently stable, **a cross-version migration only needs the event delegate signatures and your `SyncData` key names re-checked.**

## Dependencies

- The only declaration site: [ICampaignBehavior](../ICampaignBehavior) declares `RegisterEvents()`, which this base class promotes to an abstract member
- The save contract: [IDataStore](../IDataStore) is the type of the `SyncData` parameter, and the three members' semantics plus the "`_isSaving` is not persisted" mechanism are documented there
- The scheduler: [CampaignBehaviorManager](../CampaignBehaviorManager) fixes `RegisterEvents` timing (one batch, forward order), the "first match" semantics of `GetBehavior<T>`, and the unsubscribe performed by `RemoveBehavior<T>`
- The static forward's endpoint: [Campaign](../Campaign)'s `GetCampaignBehavior<T>` / `GetCampaignBehaviors<T>` are thin wrappers over the manager
- The registration entry point: [CampaignGameStarter](../CampaignGameStarter)'s `AddBehavior` / `RemoveBehaviors<T>` are the only two mount points available at startup
- A worked example: [AgingCampaignBehavior](../AgingCampaignBehavior) is an official behavior that implements both abstract methods and additionally subscribes to `OnGameLoadedEvent`
- Bucket index: [campaign API section](../)