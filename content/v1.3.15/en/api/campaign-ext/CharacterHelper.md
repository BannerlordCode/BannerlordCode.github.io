---
title: "CharacterHelper"
description: "Character and troop-tree utilities: deterministic body and face generation, upgrade-tree traversal, formation lookup, item usability, and quest-character cleanup."
---
# CharacterHelper

**Namespace:** `Helpers`
**Module:** Helpers (TaleWorlds.CampaignSystem assembly)
**Type:** `public static class CharacterHelper`
**Base:** none (static)
**Source:** `TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## Overview

`CharacterHelper` is the [CharacterObject](../../campaign/CharacterObject/) / `BasicCharacterObject` side facade of the `Helpers` namespace, sitting next to [HeroHelper](../HeroHelper/) and the settlement/faction helpers. It answers four families of questions: **appearance** (deterministic body properties, colours, face seeds, face-generator filters, idle/pose selection for the 3D scene), **troop-tree topology** (`GetTroopTree`, `FindUpgradeRootOf`, `SearchForFormationInTroopTree`), **item usability** (`CanUseItemBasedOnSkill`, `GetDefaultWeapon`), and **lifecycle cleanup** (`DeleteQuestCharacter`, `GetRandomCompanionTemplateWithPredicate`).

About twenty public members, all `static`, spread across an 800-line file. Nothing is cached: body properties, colours and face seeds are all *deterministically derived* from stable inputs (the character's `StringId` hash, the party's `Index`, a rank number, or the owning faction's colour) rather than from `MBRandom`, which makes them reproducible across sessions. Two members do consume randomness (`GetDynamicBodyPropertiesBetweenMinMaxRange`, `GetRandomCompanionTemplateWithPredicate`). As with its siblings, the namespace is the bare `Helpers`, so `using Helpers;` is required.

## Mental Model

Think of `CharacterHelper` as **"the presentation-and-topology toolbox for a single character object"**:

- **Typical call order in a mod.** From a [CampaignBehaviorBase](../CampaignBehaviorBase/) registered via [CampaignGameStarter](../CampaignGameStarter/), subscribe to [CampaignEvents](../CampaignEvents/); in the callback — or in a mission-side handler that owns an [Agent](../../mission/Agent/) — ask `CharacterHelper` for a pose, a face seed, or the upgrade tree. There is no registration or teardown for the helper.
- **Three deterministic seed families, on purpose.** `GetDefaultFaceSeed(character, rank)` is stable per character+rank. `GetPartyMemberFaceSeed(party, character, rank)` mixes in `party.Index * 171` so the *same* troop looks different in different parties. `GetDeterministicColorsForCharacter` picks faction colours for lords and per-culture hero cloth palettes for non-lords. Use the party-scoped variant in any UI that must not make every recruit look identical.
- **`GetTroopTree` is a lazy BFS over `UpgradeTargets`.** It enqueues the base troop, yields every dequeued troop whose `Tier` falls inside `[minTier, maxTier]`, and enqueues its upgrade targets. Because it is an `IEnumerable` built on a queue, enumerating it twice restarts the walk; materialize with `.ToList()` if you need two passes.
- **Trap: `FindUpgradeRootOf` is O(all character objects).** It iterates `CharacterObject.All` and returns the first basic troop whose upgrade subtree contains your character. On a large modded roster this is a full-object scan — do not call it inside a per-agent loop.
- **Trap: `SearchForFormationInTroopTree` only matches *leaf* troops.** A troop matches only when `UpgradeTargets.Length == 0` **and** `DefaultFormationClass == formation`; otherwise it recurses into upgrades with a strictly greater `Level`. A branch whose intermediate troop carries the formation but whose leaves do not returns `false`.
- **Trap: `CanUseItemBasedOnSkill` is a *static type* check, not an instance check.** It reads `BasicCharacterObject.GetSkillValue(relevantSkill)` against `item.Difficulty` plus the `NotUsableByFemale` / `NotUsableByMale` item flags. It says nothing about the *specific* agent's current skill, and it does not check whether the item is already equipped or in the inventory.
- **Trap: `DeleteQuestCharacter` unregisters the object globally.** It removes the character from the settlement's `LocationComplex` if present, then calls `Game.Current.ObjectManager.UnregisterObject(character)` **unconditionally**. After that, any live reference to that `CharacterObject` is dangling, and the object is gone from `CharacterObject.All` — so do not call it on a character your campaign data still points at.
- **Trap: the pose/idle helpers return string animation ids, not animation objects.** `GetNonconversationPose`, `GetNonconversationFacialIdle`, `GetStandingBodyIdle` and `GetDefaultFaceIdle` return ids that must exist in your mission's animation set; a character with no matching definition falls back to a generic id that may not be loaded, which shows up as a T-pose rather than an exception.

### When to Use

**Use `CharacterHelper` when:**
- You need a hero or troop to look right in a custom screen: deterministic colours, face seed, or body properties within the character's allowed range.
- You need to pose an agent in a mission or menu (`GetNonconversationPose`, `GetStandingBodyIdle`, `GetDefaultFaceIdle`).
- You need to walk a troop's upgrade tree: which troops can this base troop upgrade into, at which tiers (`GetTroopTree`), or which basic troop does this one come from (`FindUpgradeRootOf`).
- You need to know whether a formation is reachable from a troop tree (`SearchForFormationInTroopTree`).
- You need a usability or default-loadout answer (`CanUseItemBasedOnSkill`, `GetDefaultWeapon`).
- You are cleaning up a bespoke quest character you created yourself (`DeleteQuestCharacter`).

**Do NOT use `CharacterHelper` when:**
- You want to spawn a troop or hero into a roster. That is the roster/party API plus an `*Action`; `CharacterHelper` has no spawn.
- You want per-agent skill or equipment state in a mission. Read the [Agent](../../mission/Agent/) directly — `CanUseItemBasedOnSkill` inspects the *type*, not the instance.
- You want to enumerate all basic troops. Use `CharacterObject.BasicCharacterObjects` (or your own filtered pass); `CharacterObject.All` also includes every non-basic template.
- You need appearance *customisation* that persists. These helpers derive values on the fly; persistence is your own `[SaveableField]` / `SyncData([IDataStore](../IDataStore/))` job.
- You want to remove a character from a settlement permanently without breaking campaign data. `DeleteQuestCharacter` unregisters globally; use the proper removal actions for anything real.

## Dependencies

- [CharacterObject](../../campaign/CharacterObject/) — the subject of nearly every member: `UpgradeTargets`, `Tier`, `BodyPropertyRange`, `Culture`, `Occupation`, `IsHero`, `Equipment`.
- [HeroHelper](../HeroHelper/) — the hero-side sibling; `CharacterObject.HeroObject` is the bridge between the two.
- [Hero](../../campaign/Hero/) — heroes are the common case for face seeds, colours and death notifications.
- [DynamicBodyProperties](../../core-extra/DynamicBodyProperties/) — the value type `GetDynamicBodyPropertiesBetweenMinMaxRange` builds and returns.
- [EquipmentIndex](../../core-extra/EquipmentIndex/) — the five slots `GetDefaultWeapon` scans.
- [ItemObject](../../core/ItemObject/) — `PrimaryWeapon`, `WeaponFlags`, `RelevantSkill`, `Difficulty` and the gender `ItemFlags` used by the usability checks.
- [SkillObject](../../core-extra/SkillObject/) — the skill an item's usability is measured against.
- [FormationClass](../../core-extra/FormationClass/) — the formation value `SearchForFormationInTroopTree` matches.
- [KillCharacterAction](../KillCharacterAction/) — supplies the `KillCharacterActionDetail` enum that `GetDeathNotification` switches on.
- [StringHelpers](../StringHelpers/) — populates the `{HERO}`, `{KILLER}`, `{VICTIM}`, `{NOTABLE}` variables of the returned text.
- [LocationComplex](../LocationComplex/) and [LocationCharacter](../LocationCharacter/) — the settlement location list `DeleteQuestCharacter` edits.
- [MBObjectManager](../MBObjectManager/) — the object type list `GetRandomCompanionTemplateWithPredicate` draws from and the instance `DeleteQuestCharacter` unregisters through.
- [IFacegenCampaignBehavior](../IFacegenCampaignBehavior/) — the campaign behavior `GetFaceGeneratorFilter` queries for a face-generation filter.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.GetCampaignBehavior<...>()` and `Campaign.Current.ConversationManager` are live reads behind several members.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — where the code that calls these helpers usually lives.

## Key members

#### `public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = float.MaxValue)`

Breadth-first walk of a troop's upgrade graph, filtered by tier.
- **Algorithm:** enqueue `baseTroop`; while the queue is non-empty dequeue a character, yield it when `(float)character.Tier` is within `[minTier, maxTier]`, and enqueue every entry of `character.UpgradeTargets`.
- **Return-value semantics:** a lazy `IEnumerable` in BFS order. It yields the base troop first. It is not filtered by tier *traversal* — the tier bounds only control what is **yielded**, so a low-tier branch can still be walked to reach a high-tier upgrade.
- **Trap:** `maxTier` defaults to `3.4028235E+38f` (`float.MaxValue`), not `float.PositiveInfinity`; a mod using `double` tiers in a custom `CharacterObject` will be excluded.
- **Trap:** it can return cycles if a mod defines an upgrade loop, because there is no visited set. Base-game trees are acyclic.
- **Cost:** the whole reachable subtree. On a wide tree, `.Count()` it once and cache.

#### `public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

Finds the basic troop whose upgrade tree contains `character`.
- **Algorithm:** iterates `CharacterObject.All`; returns the first `x` with `x.IsBasicTroop && UpgradeTreeContains(x, x, character)`, which recurses the target's `UpgradeTargets`; returns `character` itself if nothing matched.
- **Return-value semantics:** a `CharacterObject` — either the upgrade root, or the *input unchanged*. That dual meaning is the trap: a miss is indistinguishable from "the input already was the root" unless you check `IsBasicTroop` yourself.
- **Cost:** O(number of character objects) per call, each with a recursive subtree walk. Cache the result per character id if you need it per agent.
- **Trap:** it scans `CharacterObject.All`, not `BasicCharacterObjects`, so a non-basic template with an upgrade subtree could win over the true root if it were not for the `IsBasicTroop` guard.

#### `public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

Whether a formation is present anywhere in the reachable leaf troops.
- **Algorithm:** returns `true` if `baseTroop.UpgradeTargets.Length == 0 && baseTroop.DefaultFormationClass == formation`; otherwise recurses into every upgrade target with a strictly greater `Level`; `false` if none match.
- **Return-value semantics:** a plain `bool`, no tri-state. It only matches on **leaf** troops — an intermediate troop carrying the formation does not count unless it has no upgrades.
- **Trap:** the `characterObject.Level > baseTroop.Level` guard means a same-level sibling link in a modded tree is never traversed. Deliberate cycle protection, but it also drops legitimate same-level branches.
- **Use:** gate a formation button in a recruitment or customization screen: only offer a formation the target troop can actually field.

#### `public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

Static usability check for an item against a troop *type*.
- **Algorithm:** `relevantSkill == null || currentCharacter.GetSkillValue(relevantSkill) >= item.Difficulty`, **and** (if female) the item does not carry `NotUsableByFemale`, **and** (if male) it does not carry `NotUsableByMale`.
- **Return-value semantics:** `true` when the type could use the item. It is a *capability* answer, not an inventory or equipment answer.
- **Trap:** `itemRosterElement.Item` is dereferenced immediately — a null `EquipmentElement` or an element with a null `Item` throws.
- **Trap:** it says nothing about the item being a weapon the troop's formation can wield, nor about it being present. Combine with an inventory check.
- **Use:** filtering an inventory screen for troops of a given type.

#### `public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

Scans equipment slots 0..4 for the first item whose `PrimaryWeapon` carries a `WeaponFlags.WeaponMask` flag.
- **Return-value semantics:** the first matching `ItemObject`, or `null` when no slot holds a weapon. The bound of `i <= 4` covers the five [EquipmentIndex](../../core-extra/EquipmentIndex/) slots.
- **Trap:** it reads the character's **current** `Equipment`, not a loadout template. A dismounted or stripped troop returns `null` even though its default loadout has a weapon.
- **Trap:** `equipmentFromSlot.Item` is dereferenced without a null check inside the loop, so a character definition with an explicitly empty slot can throw. Guard with `?.` on your side if you see it.

#### `public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

Rolls age, weight and build uniformly inside the character's declared `BodyPropertyRange`, ordering min/max defensively in each case.
- **Algorithm:** reads `character.BodyPropertyRange.BodyPropertyMin` / `BodyPropertyMax`; computes ordered min/max for `Age`, `Weight` and `Build`; returns `new DynamicBodyProperties(MBRandom.RandomFloatRanged(ageMin, ageMax), ..., ...)`.
- **Return-value semantics:** a fresh [DynamicBodyProperties](../../core-extra/DynamicBodyProperties/) value. Because the min/max are swapped defensively, a character definition with inverted bounds does not throw — it just returns the swapped range.
- **Trap:** this **consumes `MBRandom`**. Calling it for every agent every frame produces a different body each frame and desynchronises anything deterministic (replays, replays of the same battle, multiplayer).
- **Use:** roll once per created hero/agent and store the result yourself.

#### `public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)`

Deterministic primary/secondary cloth colours.
- **Algorithm:** resolves the culture from the hero's `MapFaction.Culture` when `HeroObject != null`, else `character.Culture`; non-heroes get `culture.Color` / `culture.Color2`; lords get their map faction's `Color` / `Color2` (falling back to `4291609515U`); other heroes get the faction `Color` plus a per-hero colour drawn deterministically from `CampaignData.{Empire,Sturgia,Aserai,Vlandia,Battania,Khuzait}HeroClothColors`, with Empire's list as the default for unknown cultures.
- **Return-value semantics:** a `(primary, secondary)` pair of `uint` colour values. Fully deterministic for a given hero — calling it repeatedly returns the same pair.
- **Trap:** the culture dispatch is a hard-coded `if` chain over the six vanilla culture string ids. A **modded culture gets the Empire palette**, silently.
- **Trap:** it dereferences `character.HeroObject.MapFaction` repeatedly without a null check inside the lord and hero branches; a hero with no map faction returns the fallback grey `4291609515U` rather than throwing on some paths.

#### `public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)` / `GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

Deterministic face seeds.
- **Algorithm (party variant):** `party.Index * 171 + character.StringId.GetDeterministicHashCode() * 6791 + rank * 197`, made non-negative, then `% 2000`.
- **Return-value semantics:** an `int` in `[0, 2000)`. The non-default variant simply forwards to `character.GetDefaultFaceSeed(rank)`.
- **Trap:** the `% 2000` truncation means the mixed value collides across different parties — it is a *variety* seed, not a unique key. Do not use it as an identifier.
- **Trap:** `party` is dereferenced immediately; a null party throws.
- **Use:** the party variant in any UI listing many parties so the same recruit does not have the same face everywhere.

#### `public static string GetNonconversationPose(CharacterObject character)` / `GetNonconversationFacialIdle(CharacterObject character)` / `GetStandingBodyIdle(CharacterObject character, PartyBase party)` / `GetDefaultFaceIdle(CharacterObject character)`

Animation-id selection for out-of-conversation presentation.
- **Return-value semantics:** a string animation id — not an animation object and not a `MissionAnimation`. Each method walks the character's age/occupation and picks an id, with generic fallbacks when nothing more specific matches.
- **Trap:** an id that your mission's animation set does not contain will simply not play. The failure mode is a static or default-pose character, never an exception.
- **Trap:** `GetStandingBodyIdle` also takes the party, so the same character idles differently in a party than in a menu. Passing a party you do not actually own changes the answer.
- **Use:** drive a custom character preview or an idle pose in a mission, and verify the ids exist in your XML.

#### `public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

Asks the campaign for a face-generation filter.
- **Algorithm:** `Campaign.Current.GetCampaignBehavior<IFacegenCampaignBehavior>()`; returns `campaignBehavior.GetFaceGenFilter()` or `null` when no such behavior is registered.
- **Return-value semantics:** `null` is a normal, documented result — not an error. Always null-check before using.
- **Trap:** it is safe outside a loaded campaign only in the sense that `GetCampaignBehavior` returns null; in the character-creation menu `Campaign.Current` may itself be null, in which case you get a `NullReferenceException` before the null check helps.
- **Use:** pass through to your own face-generation call so DLC face packs are honoured.

#### `public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

Removes a bespoke quest character from a settlement's location list and unregisters it from the object manager.
- **Side effects, in order:** if `questSettlement != null`, look through `questSettlement.LocationComplex.GetListOfCharacters()`, and on the first match call `RemoveCharacterIfExists`; then **unconditionally** `Game.Current.ObjectManager.UnregisterObject(character)`.
- **Trap:** unregistering is global and irreversible for that object. Every live reference — in campaign data, in a behavior field, in a mission agent — becomes dangling, and the character disappears from `CharacterObject.All`.
- **Trap:** the settlement removal is guarded, the unregister is not. Calling it with a null settlement still destroys the object.
- **Use:** only for characters *you* created solely for one quest and stored no persistent references to. For anything else, use the proper character-removal actions.

#### `public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

Picks a random companion-eligible troop template.
- **Algorithm:** from `MBObjectManager.Instance.GetObjectTypeList<CharacterObject>()`, returns `GetRandomElementWithPredicate(x => x.IsTemplate && x.Occupation == Occupation.Wanderer)` and, when a predicate is supplied, additionally `&& predicate(x)`.
- **Return-value semantics:** a matching template, or whatever `GetRandomElementWithPredicate` yields when nothing matches (check for null before use).
- **Trap:** it **consumes `MBRandom`**. Fine during load, not fine inside a deterministic or networked path.
- **Trap:** a predicate that no template satisfies returns nothing and you get null, not an exception — a "no companions spawn" bug that is easy to misread as a config problem.
- **Use:** spawning a generic wanderer companion at quest start.

#### `public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)`

Builds the localized "hero died" notification.
- **Algorithm:** `DiedInLabor` / `Murdered` / `DiedInBattle` / `DiedOfOldAge` use `str_on_hero_killed` with `detail.ToString()` as the variant; `Executed` / `ExecutionAfterMapEvent` additionally set `{KILLER}` when `killer != null`; `Lost` sets `{VICTIM}`; everything else falls back to the `"Default"` variant. All paths then set `{HERO}`.
- **Return-value semantics:** a `TextObject`. The variant key is the enum member's `ToString()`, so a custom `KillCharacterActionDetail` value in a mod has no matching text unless the mod adds it.
- **Trap:** `victimHero.CharacterObject` is dereferenced on every path — a null victim throws after the text lookup already ran.
- **Trap:** `killer` is only used in the execution branches; passing a killer for a battle death silently drops the `{KILLER}` variable, so the text renders without it.

#### `public static TextObject GetReputationDescription(CharacterObject character)`

Wraps the notable's reputation line in a `{REPUTATION_SUMMARY}` template.
- **Algorithm:** builds `new TextObject("{=!}{REPUTATION_SUMMARY}")`, resolves the inner line via `Campaign.Current.ConversationManager.FindMatchingTextOrNull("reputation", character)`, sets `{NOTABLE}` on it, then sets `{REPUTATION_SUMMARY}` on the wrapper.
- **Return-value semantics:** a `TextObject` wrapper, not the raw reputation line. `FindMatchingTextOrNull` can return null, in which case `SetCharacterProperties` on a null inner object is where it breaks.
- **Trap:** the outer template has the `=!` "do not localize" marker, so the wrapper text itself is never translated — only the inner line is.
- **Use:** show a notable's reputation inside a custom screen.

## Examples

### Example 1 — deterministic party-scoped appearance for a recruit list

```csharp
public List<AgentPreview> BuildRecruitPreviews(PartyBase party, IEnumerable<CharacterObject> troops)
{
    var previews = new List<AgentPreview>();
    int rank = 0;
    foreach (CharacterObject troop in troops)
    {
        // Party-scoped seed: same troop, different face per party.
        int faceSeed = CharacterHelper.GetPartyMemberFaceSeed(party, troop, rank);
        var colors = CharacterHelper.GetDeterministicColorsForCharacter(troop);
        previews.Add(new AgentPreview(troop, faceSeed, colors.Item1, colors.Item2));
        rank++;
    }
    return previews;
}
```

### Example 2 — offer only formations the troop can actually field

```csharp
public List<FormationClass> GetAvailableFormations(CharacterObject baseTroop)
{
    var offered = new List<FormationClass>();
    foreach (FormationClass formation in Enum.GetValues(typeof(FormationClass)))
    {
        // Only leaf troops carry the formation in the base game's trees.
        if (CharacterHelper.SearchForFormationInTroopTree(baseTroop, formation))
        {
            offered.Add(formation);
        }
    }
    return offered;
}
```

### Example 3 — walk a troop's upgrade tree once, by tier band

```csharp
public List<CharacterObject> GetEliteTierTroops(CharacterObject baseTroop)
{
    // Lazy BFS: materialize once, otherwise a second pass restarts the walk.
    return CharacterHelper.GetTroopTree(baseTroop, minTier: 4f, maxTier: 6f).ToList();
}
```

### Example 4 — filter an inventory by troop capability (not per-agent skill)

```csharp
public List<ItemObject> GetUsableItems(BasicCharacterObject troop, IEnumerable<ItemObject> items)
{
    var usable = new List<ItemObject>();
    foreach (ItemObject item in items)
    {
        var element = new EquipmentElement(item);
        // Type-level check: skill value of the TYPE vs item difficulty + gender flags.
        if (CharacterHelper.CanUseItemBasedOnSkill(troop, element))
        {
            usable.Add(item);
        }
    }
    return usable;
}
```

### Example 5 — roll a hero's body once and keep it

```csharp
public void FinalizeNewHeroAppearance(Hero hero)
{
    // Consumes MBRandom - roll once, then keep the value yourself.
    DynamicBodyProperties body = CharacterHelper.GetDynamicBodyPropertiesBetweenMinMaxRange(hero.CharacterObject);
    hero.DynamicBodyProperties = body;
    hero.SetFaceSeed(CharacterHelper.GetDefaultFaceSeed(hero.CharacterObject, 0));
}
```

## Risks and crash boundaries

- **Crash boundary — `DeleteQuestCharacter` unregisters globally.** After the call, the `CharacterObject` is removed from `CharacterObject.All` and every reference to it — in a behavior field, in a mission agent, in a `SaveableTypeDefiner`-registered structure — becomes a dangling reference. Save a save that held such a reference and it will fail to resolve on load. Use this only for characters you created and hold no references to.
- **Crash boundary — null dereferences in "obvious" helpers.** `GetDefaultWeapon` indexes five equipment slots and dereferences `.Item`; `GetPartyMemberFaceSeed` dereferences `party`; `GetDeterministicColorsForCharacter` dereferences `character.HeroObject.MapFaction` in its lord and hero branches; `GetRandomCompanionTemplateWithPredicate` needs a live `MBObjectManager`. All are reached easily with partially-initialized or mod-defined characters.
- **Determinism boundary — the RNG members.** `GetDynamicBodyPropertiesBetweenMinMaxRange` and `GetRandomCompanionTemplateWithPredicate` advance `MBRandom`. Call them once at creation time, never inside a per-frame or per-agent loop, and never on a path that must be reproducible (replays, deterministic tests, multiplayer sync).
- **Cross-domain dependency.** The class lives in `TaleWorlds.CampaignSystem` under the `Helpers` namespace, but returns `TaleWorlds.Core` value types ([DynamicBodyProperties](../../core-extra/DynamicBodyProperties/), [ItemObject](../../core/ItemObject/)) and `TaleWorlds.Localization` `TextObject`, and it reaches into `Game.Current.ObjectManager`. A mod that omits any of those references gets a load-time assembly failure on the first call, not a compile error.
- **Load-order dependency.** `GetFaceGeneratorFilter` and `GetReputationDescription` both resolve campaign behaviors / the conversation manager at call time. Calling them inside a behavior's `RegisterEvents` during bootstrap is legal but returns partial data; call them on first UI use instead.
- **Animation-id boundary.** The pose and idle helpers return ids, not validated animations. A modded character with no matching animation definition produces a static-pose character, not an error — which is easy to mistake for a face/pose logic bug.
- **Save serialization and ID stability.** None of these helpers participate in save/load. `GetPartyMemberFaceSeed` and `GetDefaultFaceSeed` fold `character.StringId` through a deterministic hash, so they are stable across sessions for a given character id but break entirely if a troop is re-ided or renamed. Persist the *rolled* value (e.g. `hero.SetFaceSeed`) rather than recomputing it, so a renamed troop cannot silently change a saved hero's face.
- **Modded-culture boundary.** `GetDeterministicColorsForCharacter` hard-codes the six vanilla culture ids and falls back to the Empire palette for anything else. A fully custom culture silently gets Imperial cloth colours unless you override the call yourself.
- **`UpgradeTargets` graph assumptions.** `GetTroopTree` has no visited set and `SearchForFormationInTroopTree` requires strictly increasing `Level`. A modded upgrade graph with cycles or same-level links makes the first one loop forever and the second miss legitimate branches.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above matches 1.3.15, including `GetDefaultFaceIdle` and `GetStandingBodyIdle` for the newer idle system. `GetTroopTree`'s default `maxTier` is `float.MaxValue`.
- **v1.4.x:** the troop-tree and appearance helpers are unchanged. Newer versions extend `CampaignData.*HeroClothColors` handling but keep the same shape; if you ship a custom culture, re-check which palette you land in.
- **v1.5.x:** expect more animation-id selectors for new conversation and siege contexts. The stable contract is the deterministic seed trio (`GetDefaultFaceSeed`, `GetPartyMemberFaceSeed`, `GetDeterministicColorsForCharacter`) plus the tree helpers (`GetTroopTree`, `FindUpgradeRootOf`) — build on those and treat the pose/idle strings as version-sensitive.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [HeroHelper](../HeroHelper/) — the hero-side facade in the same `Helpers` namespace
- ↔ Sibling: [StringHelpers](../StringHelpers/) — populates the text variables the notification helpers set
- ↔ Sibling: [KillCharacterAction](../KillCharacterAction/) — the detail enum driving `GetDeathNotification`
- ↔ Sibling: [LocationComplex](../LocationComplex/) — the settlement location list `DeleteQuestCharacter` edits
- ↔ Sibling: [MBObjectManager](../MBObjectManager/) — the template list and the unregister call
- ↔ Sibling: [IFacegenCampaignBehavior](../IFacegenCampaignBehavior/) — the face-generator filter source
- ↑ CharacterObject: [CharacterObject](../../campaign/CharacterObject/)
- ↑ ItemObject: [ItemObject](../../core/ItemObject/)
- ↑ DynamicBodyProperties: [DynamicBodyProperties](../../core-extra/DynamicBodyProperties/)
- ↑ Agent (mission-side counterpart): [Agent](../../mission/Agent/)