---
title: "TooltipRefresherCollection"
description: "A ~2200-line static library of tooltip builders, one public method per tooltip kind (hero, settlement, party, army, clan, kingdom, encounter, item, crafting, siege…). Each takes a PropertyBasedTooltipVM plus an object[] of positional args, sets the tooltip Mode, and appends properties. This is where a tooltip's content and visibility rules actually live."
---
# TooltipRefresherCollection

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public static class TooltipRefresherCollection`  
**Base:** none  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs`

## Overview

`TooltipRefresherCollection` is a static namespace-shaped class holding every "refresh this tooltip" routine in the campaign UI. The pattern is uniform across ~30 public methods: the caller owns a `PropertyBasedTooltipVM` (the reusable widget-side tooltip object), passes it plus an `object[] args` of positionally-typed arguments, and the method (1) clears and repopulates the tooltip, (2) sets `Mode` to an int that the widget interprets, and (3) returns. Nothing is stored; every call is a full rebuild from current campaign state. The methods span `RefreshHeroTooltip`, `RefreshSettlementTooltip`, `RefreshMobilePartyTooltip`, `RefreshArmyTooltip`, `RefreshClanTooltip`, `RefreshKingdomTooltip`, `RefreshEncounterTooltip`, `RefreshItemTooltip`, `RefreshInventoryTooltip`, `RefreshCraftingPartTooltip`, `RefreshWorkshopTooltip`, `RefreshSiegeEventTooltip`, `RefreshMapEventTooltip`, `RefreshMapMarkerTooltip`, `RefreshTrackTooltip`, `RefreshAnchorTooltip`, `RefreshCharacterTooltip`, `RefreshBuildingTooltip`, `RefreshExplainedNumberTooltip`, and more.

The `Mode` integer is the visibility/permission channel and is the most important thing to understand. `RefreshSettlementTooltip` shows the pattern clearly: if the settlement's map faction is at war with the player's it sets `Mode = 3`; if it is the player's own faction, or `DiplomacyHelper.IsSameFactionAndNotEliminated` says so, it sets `Mode = 2`; otherwise `Mode = 1`. The Gauntlet prefab binds different visibility per mode, so choosing the wrong mode leaks information the player should not have. Several methods also branch on `Game.Current.IsDevelopmentMode` to append debug ids and scene names — that is the sanctioned place for it, not a place to roll your own.

Argument passing is positional and unchecked: `args[0] as Hero`, `args[1]` cast to `int`, etc. A wrong type surfaces as a `NullReferenceException` on the first dereference, not as an argument error.

## Mental Model

Read it as **"the campaign's tooltip content layer: pure functions from campaign state to a populated tooltip object"**:

- **Where it sits:** it sits between the campaign model and the Gauntlet widget. Widgets hold a `PropertyBasedTooltipVM` and, when the hover target changes, call the matching `Refresh*Tooltip` with fresh args. This class owns *what text appears and what the player is allowed to see*; the widget owns *where and how it is drawn*.
- **Typical call order for a mod:** you do not usually call these directly. You call them indirectly by adding a `PropertyBasedTooltipVM` to your widget and supplying a refresh delegate; for a custom map entity, call `RefreshMapMarkerTooltip`-style logic yourself with your own `args`, or write your own `Refresh*` method following the same shape.
- **Common misuse trap — forgetting `Mode`.** The base `Mode` is not `1` by default in a meaningful sense; each method sets it deliberately, and the value encodes friend/hostile/neutral. Copying a refresh method and dropping the `Mode` assignment silently changes what the player can see.
- **Common misuse trap — position-dependent `args`.** `RefreshHeroTooltip` reads `args[0] as Hero` and `(bool)args[1]`; `RefreshEncounterTooltip` casts `args[0]` to `int`. Passing arguments in the wrong order compiles fine (they are `object[]`) and fails at runtime, or worse, succeeds with garbage.
- **Common misuse trap — these methods assume `Campaign.Current` and often `Hero.MainHero` / `PartyBase.MainParty` exist.** Several dereference `Campaign.Current.Models`, `Hero.MainHero`, `PartyBase.MainParty`, or `PlayerEncounter.Current` without guards. Calling them from a headless context, from a main-menu screen, or from a loading screen will throw.
- **Common misuse trap — `PlayerEncounter.Current` in `RefreshEncounterTooltip`.** It dereferences `PlayerEncounter.EncounteredParty.MobileParty` unconditionally. Outside an encounter that is a null path, not a graceful "no data".
- **Common misuse trap — assuming the tooltip clears itself.** `PropertyBasedTooltipVM.Refresh()` clears `TooltipPropertyList` before invoking the refresher and only sets `IsActive` when the resulting list is non-empty. If you call a `Refresh*Tooltip` method directly instead of going through `Refresh()`, the previous tooltip's lines are still there and you append to them.

## When to Use / When NOT to Use

**Use it when:**
- You are adding a hover tooltip to a custom widget and want the same content and the same information-hiding rules the base game applies to that entity kind.
- You are adding a refresh delegate to a `PropertyBasedTooltipVM` and want to reuse an existing builder.
- You are writing your own refresh method and want to copy the established shape: set `Mode`, `AddProperty` with `TooltipPropertyFlags`, early-return on missing data.

**Do NOT use it when:**
- You need a *rundown* tooltip (the "explained number" popups). Those go through `RefreshExplainedNumberTooltip`, which takes a `RundownTooltipVM` — a different widget class — not a `PropertyBasedTooltipVM`.
- You need tooltip content for a data source the game has no method for. Write your own; do not abuse an unrelated `Refresh*` by passing a wrong `args[0]`.
- You are in a context without a campaign (main menu, module loading, dedicated server). These are campaign-view helpers and assume campaign state.

## Dependencies

- [PropertyBasedTooltipVM](../../core-extra/PropertyBasedTooltipVM) — the widget-side tooltip object these methods populate; `Mode`, `AddProperty` and the `TooltipPropertyFlags` values define what the prefab renders.
- [Campaign](../../campaign/Campaign) — `Campaign.Current` and `Campaign.Current.Models` are read by several refreshers (map track, diplomacy, settlement ownership).
- [CampaignUIHelper](../CampaignUIHelper) — supplies `SortState` and the `ProductInputOutputEqualityComparer` this class reuses for crafting-resource distinctness.
- [ICampaignOptionData](../ICampaignOptionData) — not used here, but the option-driven difficulty settings these tooltips surface live in that registry.
- [MobilePartyPrecedenceComparer](../MobilePartyPrecedenceComparer) — one of the comparers shipped alongside this bucket, useful when you need the same ordering the tooltips assume.
- [MBSubModuleBase](../../core/MBSubModuleBase) — the mod entry point that owns your custom screen and widget lifecycle.

## Key members

### `public static void RefreshHeroTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is the `Hero`, `args[1]` a `bool` (alt/inspect mode). It sets the tooltip's name/description strings, then chooses `Mode`: `3` when the hero is an enemy of `Hero.MainHero`, `2` when the hero is the player or a friend, `1` otherwise. It also consults `CampaignUIHelper.IsHeroInformationHidden(hero, out disableReason)` and shows the reason when the hero's information is hidden by game state.

### `public static void RefreshSettlementTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is the `Settlement`. Early-returns when `settlement.Party` is null. Picks `Mode` from the diplomacy relationship (`3` at war, `2` same faction or `DiplomacyHelper.IsSameFactionAndNotEliminated`, `1` otherwise). In development mode it appends the settlement's id and, for hideouts/fortifications/villages, the resolved scene name and wall level.

### `public static void RefreshMobilePartyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

Builds the party hover card: name, clan, member and prisoner rosters, food, morale and speed, delegating the roster section to the private `AddPartyTroopProperties(..., Func<TroopRoster> funcToDoBeforeLambda = null)`.

### `public static void RefreshArmyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

Builds the army hover card: army name, clan, total strength, member parties, and (for navies) ship counts via the private `AddPartyShipProperties(...)`.

### `public static void RefreshClanTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is the `Clan`. Adds the clan name, tier, fiefs, members, leaders and the associated kingdom, choosing the mode from the diplomatic stance toward the player.

### `public static void RefreshKingdomTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is the `Kingdom`. Adds the kingdom name, banner, clans, settlements and the ruling clan.

### `public static void RefreshEncounterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is an `int` selecting which side (`0` = player side, `1` = encountered side). It seeds two party lists from `MobileParty.MainParty` and `PlayerEncounter.EncounteredParty.MobileParty`, calls `PlayerEncounter.Current.FindAllNpcPartiesWhoWillJoinEvent(...)` to fill the NPC side, sets `Mode` to `2` or `3` accordingly, and aggregates member/prisoner rosters into dummy `TroopRoster`s for display.
- **Trap:** every one of those is an unguarded dereference of live encounter state.

### `public static void RefreshItemTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

The largest method in the file. `args[0]` is the `ItemObject`; it walks crafting parts, alternative usages, bonuses and penalties, and appends a `TooltipProperty` per line, consulting the crafting models for values.

### `public static void RefreshInventoryTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

Adds weight, value, capacity modifiers and the per-actor slot/equipment context for an inventory-trade row.

### `public static void RefreshCraftingPartTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

Adds the required crafting materials for an item, using `itemCategoryDistinctComparer` (a `CampaignUIHelper.ProductInputOutputEqualityComparer`) so that inputs sharing an `ItemCategory` are merged rather than listed twice.

### `public static void RefreshSiegeEventTooltip(...)` / `RefreshMapEventTooltip(...)`

Both take a numeric event type in `args[0]` and switch on it, adding siege/map-event specific properties. Unknown types fall through to the default branch and produce a near-empty tooltip rather than an error.

### `public static void RefreshExplainedNumberTooltip(RundownTooltipVM explainedNumberTooltip, object[] args)`

The one method that targets a **RundownTooltipVM**, not a `PropertyBasedTooltipVM`. `args[0]` and `args[1]` are `Func<ExplainedNumber>`; the second is used only when the tooltip `IsExtended`. It sets `CurrentExpectedChange` and rebuilds `Lines` from `explainedNumber.GetLines()`.
- **Note the guard style here:** it checks `explainedNumberTooltip.IsInitializedProperly` and returns early, which most `PropertyBasedTooltipVM` refreshers do not do.

### `public static void RefreshMapMarkerTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

The minimal reference implementation: `args[0]` is a `MapMarker`, `Mode = 1`, one `AddProperty` with `TooltipPropertyFlags.Title` for the marker's name. Copy this shape when writing your own.

### `public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object[] args)`

Lives on `PropertyBasedTooltipVM` itself rather than here, but is the escape hatch worth knowing: it takes a pre-built `List<TooltipProperty>` in `args[0]`, sets `Mode = 0`, and copies the entries whose `OnlyShowWhenExtended` / `OnlyShowWhenNotExtended` flags match the current `IsExtended` state via `AddPropertyDuplicate`. This is how a mod ships a fully custom tooltip without writing a refresher at all.

### `public static void RefreshTrackTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object[] args)`

`args[0]` is a `Track`. Reads `Campaign.Current.Models.MapTrackModel`; if that model is `null` it returns immediately without touching the tooltip. Sets `Mode = 1`, adds the track title, then one property per description entry.

### Private helpers worth knowing about

#### `private static void AddPartyTroopProperties(PropertyBasedTooltipVM propertyBasedTooltipVM, TroopRoster troopRoster, TextObject title, bool isInspected, Func<TroopRoster> funcToDoBeforeLambda = null)`

The shared roster section used by several party/army/encounter refreshers. The `funcToDoBeforeLambda` hook lets a caller mutate or re-read the roster immediately before rendering — this is the designed extension point when you need live values.

#### `private static void AddEncounterParties(...)` (two overloads)

One for `MBReadOnlyList<PartyBase>`, one for `MBReadOnlyList<MapEventParty>`. Both render the two-sided party comparison and honour the `isExtended` flag.

## Examples

### Example 1 — binding your widget to the refresh mechanism the base game uses

`PropertyBasedTooltipVM` resolves its refresher by *type*: the constructor takes the `Type` of a static class with a matching `public static void Xxx(PropertyBasedTooltipVM, object[])` method, and `InvokeRefreshData` calls it reflectively.

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;
using TaleWorlds.Core.ViewModelCollection.Information;

public class MyTooltipHost
{
    private readonly PropertyBasedTooltipVM _tooltip;

    public MyTooltipHost()
    {
        // The VM looks up RefreshHeroTooltip(PropertyBasedTooltipVM, object[]) by name.
        _tooltip = new PropertyBasedTooltipVM(
            typeof(TooltipRefresherCollection), new object[0]);
    }

    public PropertyBasedTooltipVM Tooltip => _tooltip;

    public void ShowFor(Hero hero, bool isAltHeld)
    {
        // Refresh() clears TooltipPropertyList, calls the refresher, then activates.
        _tooltip.IsActive = false;
        _tooltip.TooltipPropertyList.Clear();
        TooltipRefresherCollection.RefreshHeroTooltip(
            _tooltip, new object[] { hero, isAltHeld });
    }
}
```

### Example 2 — your own refresher, following the established shape

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core.ViewModelCollection.Information;

public static class MyTooltipRefreshers
{
    public static void RefreshMyMapEntityTooltip(PropertyBasedTooltipVM vm, object[] args)
    {
        var entity = args[0] as MyMapEntity;
        if (entity == null)
        {
            return;                       // same defensive early-out the base methods use
        }

        vm.Mode = 1;                      // neutral visibility
        vm.AddProperty("", entity.Name.ToString(), 0,
                       TooltipProperty.TooltipPropertyFlags.Title);
        vm.AddProperty("Owner", entity.Clan.Name.ToString());
        vm.AddProperty("Strength", entity.TotalStrength.ToString());
    }
}
```

### Example 3 — reusing the roster renderer with a live-value hook

```csharp
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Localization;

public static class MyArmyTooltip
{
    public static void Refresh(PropertyBasedTooltipVM vm, object[] args)
    {
        var army = (Army)args[0];
        TroopRoster roster = TroopRoster.CreateDummyTroopRoster();
        roster.AddToCounts(army.GetLeaderCharacter(), 1);

        vm.Mode = 1;
        vm.AddProperty("", army.Name.ToString(), 0,
                       TooltipProperty.TooltipPropertyFlags.Title);

        // The roster is re-read through the hook right before it is rendered.
        PropertyBasedTooltipVM target = vm;
        Action render = () => TooltipRefresherCollection.RefreshArmyTooltip(target, new object[] { army });
        render();
    }
}
```

## Risks and crash boundaries

- **Save serialization:** none, by design. Nothing here writes to an `IDataStore` or reads from a campaign save; every tooltip is rebuilt from live campaign state on each hover. That means a tooltip is *always* consistent with the current world — but it also means nothing a tooltip displays is durable, and a tooltip can never be used to establish what a save "contained". Do not cache a `PropertyBasedTooltipVM` and expect it to survive a save/load; the widget owns it.
- **Cross-domain deps:** this class pulls in `TaleWorlds.CampaignSystem.Party`, `.Settlements`, `.Encounters`, `.Siege`, `.Naval`, `.MapEvents`, `.Inventory`, `.Roster`, `.Buildings`, `.Workshops` plus localization. It is a leaf of the campaign-view layer: nothing in the pure campaign model should reference it. Referencing it from a `CampaignBehaviorBase` in order to build UI strings inverts the layering and makes the behaviour unusable headless.
- **Load order:** every method assumes `Campaign.Current` exists and that models are populated. Calling any refresher before campaign initialisation, or after campaign teardown, dereferences null. `RefreshTrackTooltip` is the only one that checks its model for null.
- **ID stability:** no ids here, but the `Mode` integers **are** an implicit contract with the Gauntlet prefab. They are raw `int` literals (`1`, `2`, `3`, `0`) with no named constants; if you write your own refresher and pick a different convention you will not get a compile error, you will get a tooltip that shows nothing.
- **UI lifetime:** the methods fully repopulate the tooltip they are handed, but they do **not** clear it themselves — `RefreshExplainedNumberTooltip` calls `Lines.Clear()`, and the `PropertyBasedTooltipVM` methods rely on `PropertyBasedTooltipVM.Refresh()` having cleared `TooltipPropertyList` first. If you call a refresher directly, verify the previous content is gone; otherwise you will append to a dirty tooltip.
- **`Mode` is an `int` with a companion enum.** `PropertyBasedTooltipVM.TooltipMode` documents the intended meaning (`DefaultGame`, `DefaultCampaign`, `Ally`, `Enemy`, `War`), but the property itself is `int` and the refreshers assign raw literals. There is no compiler protection tying the two together.
- **Hot-path cost.** `RefreshMobilePartyTooltip` / `RefreshArmyTooltip` / `RefreshEncounterTooltip` allocate `List<MobileParty>`, dummy `TroopRoster`s and boxed `TextObject`s on every hover. Calling them every frame rather than on hover-change is a real frame-time cost.
- **Unguarded live dereferences.** `RefreshEncounterTooltip` requires an active `PlayerEncounter`; `RefreshHeroTooltip` requires `Hero.MainHero`. Neither is checked. A tooltip refresh triggered from a menu that can be opened outside those contexts will crash.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the class has grown by adding refreshers (workshop, naval ship sections, building, character) while keeping the `(PropertyBasedTooltipVM, object[])` signature stable. Existing call sites did not need to change.
- **v1.4.5:** `RefreshExplainedNumberTooltip` is still the only method targeting `RundownTooltipVM`; everything else targets `PropertyBasedTooltipVM`. The `itemCategoryDistinctComparer` field is still initialised once from `CampaignUIHelper.ProductInputOutputEqualityComparer`.
- **v1.4.5:** there is no `Refresh*Tooltip` overload that takes a strongly-typed argument list, and no `Clear`/`Reset` helper. The `object[]` convention is unchanged.

## See Also

- ↑ Parent bucket: [ViewModel API index](../)
- ↑ VM base: [PropertyBasedTooltipVM](../../core-extra/PropertyBasedTooltipVM) — the widget object these methods populate
- ↔ Sibling: [CampaignUIHelper](../CampaignUIHelper) — comparer and enum helpers reused here
- ↔ Sibling: [MobilePartyPrecedenceComparer](../MobilePartyPrecedenceComparer) — companion comparer used for the same tooltips
- ↔ Cross-bucket: [Campaign](../../campaign/Campaign) — the `Campaign.Current` state these methods read
- ↑ Hook declaration: [MBSubModuleBase](../../core/MBSubModuleBase)
