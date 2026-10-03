---
title: "IDataStore"
description: "The only persistence contract a campaign behavior has: three members, a two-way SyncData<T>, an IsSaving/IsLoading direction pair, and exactly one implementation in the 1.3.0 tree — the internal CampaignBehaviorDataStore.BehaviorSaveData."
---

# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IDataStore`
**Base:** none (pure interface, inherits nothing)
**File:** `TaleWorlds.CampaignSystem/IDataStore.cs` (16 lines total)

## Overview

`IDataStore` is the contract behind the `SyncData(IDataStore)` parameter of [CampaignBehaviorBase](../CampaignBehaviorBase). It has three members and one job: **tell a behavior whether this pass is saving or loading, then move its private fields in or out under a string key.**

There is no base type, no properties beyond the two flags, no lifecycle methods. `RemoveListeners` and every `OnXxx` hook live elsewhere. It is not `ISaveManager`, not `MBObjectManager`, and it does not derive from `MBObjectBase`. It answers exactly two questions: which direction is this pass (answer: `IsSaving` / `IsLoading`), and "store this field under this key / load it back" (answer: `SyncData<T>`).

**The 1.3.0 source tree contains exactly one implementation, and it is `internal`.** A grep for `IDataStore` across all `.cs` files hits more than 190 files, but almost all of them are *consumers* (`public override void SyncData(IDataStore dataStore)`). There is a single producer: the nested `internal class BehaviorSaveData : IDataStore` inside `TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs`. Because the class itself is `internal`, you can neither `new` it nor derive from it in mod code — its constructor `BehaviorSaveData(bool isSaving)` is public, but the type is not.

So the only real way to use `IDataStore` is to be the **receiver, not the provider**. You write the caller side of `SyncData`; the engine constructs the instance and hands it to you during save and load. In practice you will only ever *read* these three members — branch on `IsSaving`, move data with `SyncData` — and never implement them, unless you are writing your own test double.

## Mental Model

Think of it as a **two-way pipe between a behavior and the save file**. The whole chain has five links:

**Link 1 — you declare what must be persisted.** Inside your behavior's `SyncData`, call `dataStore.SyncData<T>("_myKey", ref this._myField)` once per field. `T` is inferred from the `ref` argument, so writing the type argument explicitly is optional. Keys are underscore-prefixed strings (`"_extraLivesContainer"` and friends) — that is a tree-wide convention, not a hard rule, but **keys must be unique within one behavior**, for the reason in link 3.

**Link 2 — direction decides everything.** `BehaviorSaveData` has a single field, `private readonly bool _isSaving`. `IsSaving` returns it; `IsLoading` returns its negation. And the body of `SyncData<T>` is this branch:

```csharp
public bool SyncData<T>(string key, ref T data)
{
    if (this.IsSaving)
    {
        this._records.Add(key, data);
        return true;
    }
    object obj;
    if (this._records.TryGetValue(key, out obj))
    {
        data = (T)((object)obj);
        return true;
    }
    return false;
}
```

The saving branch **always returns true and uses `Dictionary.Add`**. The loading branch writes back through `ref` and returns true on a hit; on a miss it returns false **and leaves your field completely untouched**.

**Link 3 — two hard constraints fall straight out of that body.** First, **a key may appear only once per saving pass** — `_records.Add` throws `ArgumentException` on a duplicate, there is no overwrite path. Second, **a key miss while loading fails silently** — the false return is discarded at every official call site (`AgingCampaignBehavior.SyncData` just writes `dataStore.SyncData<...>("_x", ref this._x);` and never binds the result). So never write "if it did not load, reset the field" logic that depends on that boolean.

**Link 4 — direction is granted by the save system, not by the constructor.** `BehaviorSaveData._isSaving` carries **no `[SaveableField]`** (only `_records` has `[SaveableField(0)]` in `CampaignBehaviorDataStore.cs`). During saving it is `true`, and the field simply is not present in the save file. During load, deserialization resets the `readonly bool` to its default, `false`, and `IsLoading` becomes true on its own. `SaveableCampaignTypeDefiner.cs:182` does register `typeof(CampaignBehaviorDataStore.BehaviorSaveData), 184`, so the container is serialized normally — only the direction flag is deliberately left out.

**Link 5 — fuzzy key recovery.** `CampaignBehaviorDataStore.LoadBehaviorData` first looks up `_behaviorDict` by `campaignBehavior.StringId`. If that misses, it snapshots the dictionary and searches for `campaignBehavior.GetType().Name` (**the class name, not the StringId**) via `keyValuePair.Key.Contains(name)`. On a hit it deletes the old key, registers the new one, and hands that older `BehaviorSaveData` to the behavior. So renaming your class or moving its namespace makes old saves miss on the exact lookup — but because of this `Contains` fallback, any save whose `StringId` still embeds the class name will still be recovered. That fallback is also why the parameterless `CampaignBehaviorBase` constructor defaults `StringId` to `GetType().Name`.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `SyncData<T>` | `bool SyncData<T>(string key, ref T data)` | Moves one field in both directions. **Return-value semantics**: while saving it is always `true` (the `Add` succeeded); while loading it is `true` on a hit and `false` on a miss, with `data` left untouched. Official implementations **never inspect this return value**, so treat it as a diagnostic ("did this key exist in the save?") rather than control flow. `ref` means you must pass the field itself (`ref this._x`) — not a property, not an expression. `T` is inferred. |
| `IsSaving` | `bool IsSaving { get; }` | The current pass is a write. Implemented as `get { return this._isSaving; }`, getter only. The typical official use is to decide whether to build a temporary structure; most implementations ignore it entirely and let the same key serve both directions, because the body branches on its own. |
| `IsLoading` | `bool IsLoading { get; }` | Implemented as `get { return !this._isSaving; }` — strictly the complement of `IsSaving`. It exists so load code reads clearly: `if (dataStore.IsLoading) { ...rebuild indices... }`. Exactly one of the two is true at any moment; there is no third state where both are false. |

All three members are `public` (interface members are implicitly public). If you do implement the interface you must supply all three; omitting any one leaves the type abstract.

## Real Example

The canonical one-line form, copied verbatim from `TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs`:

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData<Dictionary<Hero, int>>("_extraLivesContainer", ref this._extraLivesContainer);
    dataStore.SyncData<Dictionary<Hero, int>>("_heroesYoungerThanHeroComesOfAge", ref this._heroesYoungerThanHeroComesOfAge);
}
```

The same key serves both saving and loading, because the body of `SyncData<T>` branches on the direction — **you never write it twice**.

Asking "did this actually load?" — no official behavior does it, because nobody binds the result, but this is the only legal use:

```csharp
public override void SyncData(IDataStore dataStore)
{
    if (!dataStore.SyncData<int>("_myCounter", ref this._counter))
    {
        // false appears only on load with a missing key. The save path always returns true.
        this._counter = 0;
    }

    if (dataStore.IsLoading)
    {
        // What lands in _byHeroCache is a plain Dictionary<Hero, int>;
        // any index derived from it has to be rebuilt by hand.
        this._byHero = new Dictionary<Hero, int>();
        foreach (KeyValuePair<Hero, int> pair in this._byHeroCache)
        {
            this._byHero[pair.Key] = pair.Value;
        }
    }
}
```

The `IsLoading` block is the only self-consistent reading: **`SyncData` moves fields, it does not rebuild anything derived from them**. Skip the rebuild and you are running an archived world with an index pointing at deserialized objects.

A complete, compilable behavior skeleton:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public class LoyaltyLedgerBehavior : CampaignBehaviorBase
{
    private Dictionary<Clan, int> _debts = new Dictionary<Clan, int>();

    public LoyaltyLedgerBehavior() : base("LoyaltyLedger")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnClanInfluenceChanged.AddNonSerializedListener(this, this.OnClanInfluenceChanged);
    }

    private void OnClanInfluenceChanged(Clan clan, float change)
    {
        int current;
        this._debts.TryGetValue(clan, out current);
        this._debts[clan] = current - (int)change;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<Dictionary<Clan, int>>("_debts", ref this._debts);
    }
}
```

The delegate registered against `CampaignEvents.OnClanInfluenceChanged` has the signature `(Clan clan, float change)`, taken verbatim from `CampaignEventReceiver.OnClanInfluenceChanged` — `IMbEvent<Clan, float>`'s type arguments match it one-for-one. The handler is named `OnClanInfluenceChanged` because C#'s implicit method-group-to-`Action<Clan, float>` conversion looks only at the shape, never at the name.

## Risks and Boundaries

- **There is no public implementation in 1.3.0.** The only one, `CampaignBehaviorDataStore.BehaviorSaveData`, is an `internal class` inside the `TaleWorlds.CampaignSystem` assembly. `new BehaviorSaveData(...)` will not compile from a mod. Do not try to fake one with a dynamic proxy either: the generic `SyncData<T>` cannot be intercepted by a non-generic proxy, so you get a stand-in that silently does nothing.
- **`IDataStore` has nothing to do with `ISaveManager`.** Both names contain "Save", but `ISaveManager` owns the whole save file while `IDataStore` owns a handful of fields in one behavior. Do not port `ISaveManager` idioms across.
- **A duplicate key while saving throws.** `_records.Add(key, data)` raises `ArgumentException` on an existing key. Two calls with the same key in one `SyncData` will crash. Normal saves do not hit this, because `CampaignBehaviorManager.OnBeforeSave` calls `ClearBehaviorData()` first and then creates a fresh `BehaviorSaveData(true)` per behavior.
- **A miss while loading is silent.** False is returned, the field is unchanged, no exception and no assert. That is why adding a new field never breaks old saves — and also why a new collection field arrives as C#'s default (`null` for reference types). Initialize every newly added collection yourself after loading.
- **`ref` forbids properties.** `dataStore.SyncData("k", ref this.SomeProperty)` does not compile. Pass the field. The field itself may be null without trouble — `ref` passes an address — but then null is what gets stored.
- **What is stored is the reference, not a deep copy.** The saving branch does `_records.Add(key, data)`. Serialization semantics apply only later, when the save system serializes `_records`; within the same save pass, mutating the collection after `SyncData` is visible to the save.
- **Implementing means implementing all three.** Any missing member leaves the class abstract. A test double must supply `SyncData<T>`, `IsSaving` and `IsLoading`.
- **The two flags have no third state.** `IsLoading` is literally `!IsSaving`, so "neither" is unreachable. Do not branch on it.
- **Keep `SyncData` cheap.** It runs once per behavior on save and once per behavior on load, both on the critical path. Two dictionary moves, as in `AgingCampaignBehavior`, is the performance yardstick for this type.

## Cross-Version Notes

`IDataStore` is **byte-for-byte identical** across `bannerlord-1.3.0/`, `bannerlord-1.3.15/`, `bannerlord-1.4.6/`, `bannerlord-1.4.7/` and `bannerlord-1.5.3/`: 16 lines each, declaring only `SyncData<T>`, `IsSaving` and `IsLoading`. Zero change across three major versions, which makes it the safest contract a mod's save code can depend on.

What grows is the **number of consumers**: more than 190 files implement `SyncData(IDataStore)` in 1.3.0 alone (over a hundred under `TaleWorlds.CampaignSystem/CampaignBehaviors/`, around forty under `Issues/`, plus sandbox and story-mode classes), and later versions add more. Their key names and chosen `T` (`Dictionary<Hero, int>`, `int`, `bool`, `string` all appear) are implementation details of each behavior, not part of the interface.

The "`_isSaving` is not persisted, therefore loading flips the direction automatically" technique is equally stable, because it rests on the save system's field-reflection rules rather than on game logic. In other words: **an `SyncData` implementation copied from 1.3.0 needs no edit on 1.5.3.**

## Dependencies

- The only declaration site: [CampaignBehaviorBase](../CampaignBehaviorBase) declares `public abstract void SyncData(IDataStore dataStore)`; its two constructors and `StringId` field are documented on that page
- The only implementation: `internal class BehaviorSaveData : IDataStore` inside [CampaignBehaviorDataStore](../CampaignBehaviorDataStore) — its `_records` dictionary and `readonly bool _isSaving` are the concrete shape of this interface
- The scheduler: [CampaignBehaviorManager](../CampaignBehaviorManager) drives both timings, calling `SaveBehaviorData` per behavior from `OnBeforeSave` and reverse-looking them in `LoadBehaviorData`
- Save type registration: `SaveableCampaignTypeDefiner` calls `AddClassDefinition(typeof(CampaignBehaviorDataStore.BehaviorSaveData), 184, null)`; see the [save-system architecture page](../../../architecture/save-system)
- Sibling marker interface: [ICampaignBehavior](../ICampaignBehavior) declares only `RegisterEvents()`; it is parallel to this interface, not a base of it
- Bucket index: [campaign API section](../)