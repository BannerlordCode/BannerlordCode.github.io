---
title: "CharacterRelationManager"
description: "The Campaign persistence manager for base hero relations: it stores pairs of hashes derived from Hero.Id and exposes low-level read/write and cleanup; relation changes should normally use ChangeRelationAction."
---
# CharacterRelationManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterRelationManager`
**Base:** `System.Object`
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## One-line responsibility

It stores **base personal relation values** between campaign heroes as pairs of hashes derived from `Hero.Id`, and provides low-level read/write and unregister cleanup; the Diplomacy Model computes the effective relation that mods usually care about.

## Mental model

Read this type in three layers:

1. **Storage layer:** `Campaign` creates and owns one `CharacterRelationManager`. Its internal `HeroRelations` stores relations in `Dictionary<long, Dictionary<long, int>>`; both levels use `long` keys derived from `Hero.Id.GetHashCode()`, ordered by `Hero.Id`, so `(A, B)` and `(B, A)` are the same undirected relation. The stored keys are hashes, not `Hero` references or mod-assigned stable IDs; a missing entry reads as `0`, and writing `0` removes the entry.
2. **Business-calculation layer:** `CharacterRelationManager.GetHeroRelation` reads only the stored base value. `Hero.GetRelation` calls `Campaign.Current.Models.DiplomacyModel.GetEffectiveRelation`, which can add clan-leader, diplomacy-model, or other game rules. Do not use the base value as the final relationship decision by accident.
3. **Mutation layer:** `ChangeRelationAction` is the normal mod entry point for changing relations. It resolves effective heroes through the Diplomacy Model, applies the positive-change factor, clamps the result to `-100..100`, writes the base relation, and broadcasts `CampaignEvents.HeroRelationChanged`. The manager's setter does not perform that orchestration.

This is a persistent Campaign data service, not a replaceable Model and not an event bus. `CharacterRelationManager.Instance` is only the static shortcut for `Campaign.Current.CharacterRelationManager`; it fails outside a live Campaign because `Campaign.Current` is null.

Some API listings incorrectly place `CharacterRelationManager.Current`, and instance `GetRelation`/`SetRelation`, on this type. There is no `Current` in the source; those latter methods belong to the internal nested `HeroRelations` class and are not public manager APIs.

## Ownership and availability

- **Creation:** the `Campaign` constructor executes `new CharacterRelationManager()` and stores it in `[SaveableProperty(12)] public CharacterRelationManager CharacterRelationManager { get; private set; }`. A mod should not create a detached manager; that produces a dictionary the active Campaign neither uses nor saves.
- **Normal access:** after confirming `Campaign.Current != null` and that the campaign has started, use `Campaign.Current.CharacterRelationManager`, or call static `CharacterRelationManager.GetHeroRelation`. For normal hero queries, prefer `Hero.GetRelation` or `GetBaseHeroRelation`.
- **Loading:** the Campaign save object graph contains the manager, whose `_heroRelations` and nested `_relations` fields have `[SaveableField]`. Loading restores the object manager first, calls `CharacterRelationManager.AfterLoad()`, and only then dispatches Campaign load events.
- **Hero unregister:** `CharacterRelationCampaignBehavior` listens to `OnHeroUnregisteredEvent` and calls `Campaign.Current.CharacterRelationManager.RemoveHero(hero)`, deleting that hero's relation as either endpoint. A mod should not pass a still-registered hero to `RemoveHero` itself.

## Public members and timing

### `public static CharacterRelationManager Instance { get; }`

Returns the manager owned by the current `Campaign`; the implementation is `Campaign.Current.CharacterRelationManager`. Use it only in a live campaign callback, such as after registering a `CampaignBehaviorBase` listener. Do not call it from the main menu, early loading, or a custom scene without a Campaign.

```csharp
Campaign campaign = Campaign.Current;
if (campaign == null || !campaign.GameStarted)
    return;

CharacterRelationManager manager = campaign.CharacterRelationManager;
```

### `public static int GetHeroRelation(Hero hero1, Hero hero2)`

Reads the stored base relation for two heroes. A missing relation returns `0`; equal heroes are not a meaningful relation endpoint. This method does not call `DiplomacyModel.GetEffectiveRelation`, so it is useful for inspecting the stored base value, diagnosing an Action result, or implementing logic that explicitly requires base relation. For UI, diplomacy, or player-facing decisions, call `hero1.GetRelation(hero2)` instead.

```csharp
Hero mainHero = Hero.MainHero;
Hero derthert = Hero.Find("lord_derthert");
if (Campaign.Current != null && mainHero != null && derthert != null && mainHero != derthert)
{
    int storedRelation = CharacterRelationManager.GetHeroRelation(mainHero, derthert);
    int effectiveRelation = mainHero.GetRelation(derthert);
}
```

### `public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

Directly replaces the stored base relation. It only rejects `hero1 == hero2` through an assertion; it does not consult the Diplomacy Model, clamp to model limits, or raise `HeroRelationChanged`. A value of `0` removes the ID-pair entry; a nonzero value writes it.

This is a low-level storage boundary, not the Action equivalent of “give two heroes relation.” Unless code is explicitly performing controlled migration or restoration, a mod should not call it directly: direct writes skip skill progression, notifications, relation listeners, and effective-hero mapping.

### `public void AfterLoad()`

The save-load initialization hook. Only when `MBSaveLoad.LastLoadedGameVersion < v1.1.0` does it call the internal `HeroRelations.ClearOldData()`, which compares saved keys with the current `CampaignObjectManager.AliveHeroes` and removes keys for heroes no longer alive. It does not recompute relations on every load and is not a mod “refresh relations” method; Campaign owns its call timing.

### `public void RemoveHero(Hero deadHero)`

Removes every relation where a hero is either the outer or inner endpoint. The official `CharacterRelationCampaignBehavior.OnHeroUnregistered` calls it when a hero is unregistered from the object system. It does not perform death, replacement, or another world mutation, and it raises no relation-change event. Do not use it instead of `KillCharacterAction`, or call it for a living hero: it silently drops that hero's relation data and later reads return `0`.

### Constructor and internal members

`public CharacterRelationManager()` only creates an empty `HeroRelations` dictionary. It exists for the Campaign construction path, but public visibility does not make detached construction valid for mods. `HeroRelations.GetRelation`, `SetRelation`, `Remove`, `ClearOldData`, and `_relations` are internal/private implementation details; do not reflect into them or retain their dictionary.

## Action or direct write?

| Goal | Correct entry | Why |
|------|---------------|-----|
| Read the relationship experienced by the player or another hero | `hero1.GetRelation(hero2)` | Goes through the Diplomacy Model instead of reading only the raw dictionary. |
| Read an explicitly base personal relation | `CharacterRelationManager.GetHeroRelation(hero1, hero2)` or `hero1.GetBaseHeroRelation(hero2)` | Both have base-relation semantics; the former reads storage directly, the latter uses the Model's base entry. |
| Give or remove relation between the player and a hero | `ChangeRelationAction.ApplyPlayerRelation(hero, delta, ...)` | Uses the player entry point, model adjustment, bounds, and relation-change event. |
| Give or remove relation between two specified heroes | `ChangeRelationAction.ApplyRelationChangeBetweenHeroes(hero1, hero2, delta, ...)` | Resolves effective heroes and broadcasts `HeroRelationChanged`. |
| Write a specific value during controlled save migration | Use the low-level setter only in controlled load/migration code | The caller must own bounds, events, and compatibility; normal gameplay mods should not do this. |

`Hero.SetPersonalRelation(otherHero, value)` is public, but it is a low-level absolute-value setter: the source clamps with `Campaign.Current.Models.DiplomacyModel.MinRelationLimit`/`MaxRelationLimit`, then calls `CharacterRelationManager.SetHeroRelation`; it still does not raise `HeroRelationChanged`. For gameplay changes use `ChangeRelationAction`, not `SetPersonalRelation` as an Action synonym.

## The complete ChangeRelationAction boundary

`ChangeRelationAction.ApplyInternal` does the following:

1. For a positive `relationChange`, it asks `Campaign.Current.Models.DiplomacyModel.GetRelationIncreaseFactor` for the adjusted amount and uses randomized rounding; negative changes skip this step.
2. It calls `GetHeroesForEffectiveRelation` to map the original heroes to the effective heroes that actually carry the relation.
3. It reads the base relation, adds the delta, and clamps the final value with `MBMath.ClampInt(value, -100, 100)`.
4. It calls `SetPersonalRelation` on the effective hero to write the manager.
5. It calls `CampaignEventDispatcher.Instance.OnHeroRelationChanged`, passing effective/original heroes, delta, notification state, and `ChangeRelationDetail` to `CampaignEvents.HeroRelationChanged` listeners.

Thus `ApplyPlayerRelation` and `ApplyRelationChangeBetweenHeroes` take a **delta**, not a final absolute value. The `affectRelatives` parameter on `ApplyPlayerRelation` is present in the 1.3.15/1.4.5 implementation but is not passed into `ApplyInternal`; do not assume it automatically changes relatives' relations.

## Relation events and a real listener path

The actual `CampaignEvents.HeroRelationChanged` signature is:

```csharp
IMbEvent<Hero, Hero, int, bool,
    ChangeRelationAction.ChangeRelationDetail, Hero, Hero>
```

The first two heroes are effective heroes; the last two are the original heroes supplied to the Action. The event means an Action has committed one relation delta. It is not a general property-changed event for every low-level setter.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class RelationObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroRelationChanged.AddNonSerializedListener(this, OnRelationChanged);
    }

    private void OnRelationChanged(
        Hero effectiveHero,
        Hero effectiveOther,
        int relationChange,
        bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero,
        Hero originalOther)
    {
        if (Campaign.Current == null || effectiveHero == null || effectiveOther == null)
            return;

        // Observe the committed Action delta; do not call SetHeroRelation again here.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Persist the mod's own derived relation state, not the manager's dictionary.
    }
}
```

The official `CharacterRelationCampaignBehavior` also subscribes in `RegisterEvents`; on positive changes it notifies the skill-progression system, and it listens to `OnHeroUnregisteredEvent` for cleanup. A mod that needs to update UI, renown, or derived state should listen to this event instead of polling the dictionary.

## Save boundary and corruption risks

- **The manager is saved:** `Campaign.CharacterRelationManager` has `[SaveableProperty(12)]`; `CharacterRelationManager._heroRelations` and nested `HeroRelations._relations` each have `[SaveableField(1)]`. Both `SaveableCampaignTypeDefiner` versions register `CharacterRelationManager` as type 31 and `HeroRelations` as type 186. Campaign's generated collector adds the manager to the save object graph, so relation values are not a transient cache.
- **The stored values are hash-key pairs and integers:** the relation graph does not save `Hero` object references as endpoints; it saves `long` keys derived from Hero IDs. Do not treat those internal hashes as cross-system Hero identifiers or insert your own objects into the dictionary. After loading, let official object registration finish, then resolve current Heroes through `Hero.Find` or another supported entry point.
- **Load order matters:** in 1.3.15, `Campaign.OnGameLoaded` runs object-manager `PreAfterLoad`/`AfterLoad`, then `CharacterRelationManager.AfterLoad`, then dispatches `OnGameEarlyLoaded`/`OnGameLoaded`; 1.4.5 keeps the same relation-manager ordering. Do not read effective relation during earlier construction or save-member restoration stages.
- **Legacy cleanup is conditional:** `AfterLoad` calls `ClearOldData` only for saves older than v1.1.0. For modern saves, the official cleanup route is hero-unregister; do not assume every load removes all dead/unregistered Hero keys.
- **Do not modify save definitions:** Replacing `_relations` through reflection, changing field types, writing unbounded values, or inserting custom objects into the official dictionary violates the SaveSystem type/field contract and can make loading fail or relation decisions inconsistent.
- **An event is not save submission:** `HeroRelationChanged` reports a delta and context. Persist a mod's own derived state through `CampaignBehaviorBase.SyncData(IDataStore)`, and rebuild Hero references after loading; do not serialize the official relation dictionary again.

## Wrong-phase failures and common mistakes

- **Calling outside Campaign:** `Instance`, `GetHeroRelation`, and `SetHeroRelation` ultimately depend on `Campaign.Current`. Calling them in the main menu, a battle Mission, or before Campaign startup can cause `NullReferenceException`.
- **Null or unregistered Hero:** the manager accesses `hero.Id`; null, unregistered, or already-unregistered objects are invalid endpoints. Obtain real objects through `Hero.MainHero`, `Hero.Find`, or `Hero.AllAliveHeroes`, and check their lifetime.
- **Treating base as effective:** the manager's value can differ from `Hero.GetRelation`; mixing them makes diplomacy, dialogue, UI, and Model decisions disagree.
- **Direct `SetHeroRelation`/`SetPersonalRelation`:** these skip the Action's effective-hero mapping, positive-change adjustment, event broadcast, and notification, creating a hidden state mismatch where the number changed but dependent systems were not told.
- **Misusing `RemoveHero`:** calling it for a living hero drops all relations without a restoration event; calling it in parallel with the official unregister path can create ordering bugs. Let the unregister event own cleanup.
- **Re-entrant relation events:** unconditionally starting another setter/Action inside a relation listener can recurse or apply duplicate deltas. Start a new Action only under a finite condition and guard against cycles.
- **Assuming `affectRelatives` cascades:** the current source does not use that parameter to write relatives. Apply explicit Actions according to the intended rule and accept each change's event/model calculation.

## Real example: acquire Campaign/Hero and change safely

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Campaign campaign = Campaign.Current;
Hero mainHero = Hero.MainHero;
Hero derthert = Hero.Find("lord_derthert");

if (campaign != null && campaign.GameStarted && mainHero != null && derthert != null && mainHero != derthert)
{
    CharacterRelationManager manager = campaign.CharacterRelationManager;
    int baseRelation = CharacterRelationManager.GetHeroRelation(mainHero, derthert);
    int effectiveRelation = mainHero.GetRelation(derthert);

    // This is a delta; the Action handles effective heroes, bounds, and HeroRelationChanged.
    ChangeRelationAction.ApplyRelationChangeBetweenHeroes(mainHero, derthert, 5, showQuickNotification: false);
}
```

The real acquisition path is `Campaign.Current` -> `campaign.CharacterRelationManager`, plus `Hero.MainHero`/`Hero.Find(stringId)`. The real mutation path is `ChangeRelationAction.ApplyRelationChangeBetweenHeroes`. If you only need to observe, read `baseRelation` or `effectiveRelation`; do not call a setter just to read.

## Dependencies

### Upstream

- [Campaign](../../campaign/Campaign): creates, owns, and saves `CharacterRelationManager`, and controls the `AfterLoad` timing.
- [Hero](../../campaign/Hero): supplies real relation endpoints; `GetRelation`, `GetBaseHeroRelation`, `SetPersonalRelation`, and friend/enemy checks route through this manager or the Diplomacy Model.
- [CampaignObjectManager](../CampaignObjectManager): maintains alive/registered Hero collections used by legacy cleanup and unregister flow.
- [DiplomacyModel](../DiplomacyModel): computes effective relation, relation limits, and positive relation adjustment.

### Downstream

- [ChangeRelationAction](../ChangeRelationAction): the normal relation-change transaction entry.
- [CampaignEvents](../CampaignEvents): publishes `HeroRelationChanged` and `OnHeroUnregisteredEvent` for behaviors and other systems.
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior): official listener for skill progression response and unregister cleanup.
- [IDataStore](../IDataStore) / [SaveManager](../../save-system/SaveManager): the official Campaign object graph saves the manager; a mod's own derived state belongs in Behavior `SyncData`.

## 1.3.15 versus 1.4.5

- Both versions keep the same public relation boundary: `Instance`, `GetHeroRelation`, `SetHeroRelation`, `AfterLoad`, and `RemoveHero`. `HeroRelations` remains internal; relations use hash-key pairs ordered by `Hero.Id`, missing values read as 0, and writing 0 removes an entry.
- Both mark `Campaign.CharacterRelationManager` with `[SaveableProperty(12)]`, and both mark `_heroRelations` and nested `_relations` with `[SaveableField(1)]`; loading still performs object loading, relation cleanup, and then event dispatch in that order.
- Both `ChangeRelationAction` versions resolve effective heroes through the Diplomacy Model, clamp to `-100..100`, write the value, and broadcast the seven-argument `HeroRelationChanged` event; 1.4.5 mainly changes file-scoped namespace and local-variable syntax.
- Both `Hero.SetPersonalRelation` versions clamp to Diplomacy Model min/max and write the low-level manager without replacing the Action event chain; both `Hero.GetRelation` versions return the Diplomacy Model's effective relation.

## Navigation

### ↑ Parent

- [Campaign-ext API](../)
- [SDK overview](../../../architecture/sdk-overview)

### ↔ Siblings

- [ChangeRelationAction](../ChangeRelationAction)
- [CampaignEvents](../CampaignEvents)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior)
- [DiplomacyModel](../DiplomacyModel)

### Related / bidirectional return

- [Campaign](../../campaign/Campaign): owner and save-root path for the manager.
- [Hero](../../campaign/Hero): relation queries, low-level absolute writes, and effective-relation semantics.
- [CampaignObjectManager](../CampaignObjectManager): Hero registration/unregistration and legacy-save cleanup.
- [IDataStore](../IDataStore): the mod's persistence entry point; do not copy the official relation dictionary.
- [SaveManager](../../save-system/SaveManager): save coordinator; the manager is saved indirectly through the Campaign object graph.

### ↓ Children

- There are no public child pages; internal `HeroRelations` is not exposed to mods. Return to [Hero](../../campaign/Hero) for supported relation endpoints and query semantics instead of creating a reflection-based child page for the dictionary.

## Source basis

- 1.3.15: `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CharacterRelationManager.cs` (relation dictionary, public members, `AfterLoad`, `RemoveHero`); `Campaign.cs` (property, construction, load, and SaveSystem object graph); `SaveableCampaignTypeDefiner.cs` (type registration); `Hero.cs`; `Actions\ChangeRelationAction.cs`.
- 1.4.5 comparison: `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CharacterRelationManager.cs`, `Hero.cs`, `Campaign.cs`, and `SaveableCampaignTypeDefiner.cs` from the same directory, plus `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.Actions\ChangeRelationAction.cs`.
- Call chain: both versions' `CampaignEvents.cs`/`CampaignEventDispatcher.cs` `HeroRelationChanged`, plus the 1.3.15 `CampaignBehaviors\CharacterRelationCampaignBehavior.cs` and 1.4.5 `TaleWorlds.CampaignSystem.CampaignBehaviors\CharacterRelationCampaignBehavior.cs` relation subscriptions and `OnHeroUnregistered` cleanup.

## See Also

- ↑ [Campaign-ext API](../)
- ↔ [ChangeRelationAction](../ChangeRelationAction) · [CampaignEvents](../CampaignEvents) · [DiplomacyModel](../DiplomacyModel)
- ↓ [Hero](../../campaign/Hero) · [Campaign](../../campaign/Campaign) · [SaveManager](../../save-system/SaveManager)
