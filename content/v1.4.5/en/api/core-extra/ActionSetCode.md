---
title: "ActionSetCode"
description: "The action-set naming table: 47 role/scene suffix constants plus the single static method GenerateActionSetNameWithSuffix, which assembles the as_* key that the engine actually looks up from a monster, a gender, and a role suffix."
---

# ActionSetCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class ActionSetCode`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ActionSetCode.cs`

## Overview

`ActionSetCode` is the **lookup table for action-set keys** in battle scenes and on the campaign map. The engine knows nothing about "lord", "blacksmith", or "villager carrying firewood"; it only knows a string key such as `as_human_lord` or `as_human_female_villager_merchant`, and that string is the entry point the animation system uses to find the `.actset` resource and, through it, every action record inside. `ActionSetCode` splits "role × scene" into two layers: **47 `const string` suffixes** (`"_lord"`, `"_warrior_in_aserai_tavern"`, `"_villager_carry_bucket_on_lefthand"`, …) and **one static method**, `GenerateActionSetNameWithSuffix`, which glues three segments into the finished key.

The role this type plays in the system is **translating semantics into resource keys**. Callers — [HeroAgentSpawnCampaignBehavior](../../campaign/HeroAgentSpawnCampaignBehavior), `NotableHelperCharacterCampaignBehavior`, `LordsNeedsTutorIssueBehavior`, [LocationCharacter](../../campaign/LocationCharacter), `MBGlobals` — only decide *whether* the person is a lord or a farmer; every bit of string assembly is delegated here. That boundary matters: **this table is the single place to touch when you add a new action set.** Character logic should never build `"as_" + …` by hand.

## Mental Model

Treat it as **a dictionary of suffixes plus a key assembler**, not as an object — it has no instances, no state, and no lifecycle. It is purely compile-time constants and one pure function.

**The suffix table is grouped by prefix**, and that grouping is the only structure worth extracting when reading the source. The 47 constants fall into six families. The `_warrior` / `_child` / `_villager` series is the **identity** family (members named `Villager`, `Warrior`, `Lord`, `Villain`, `Child`). The `_villager_in_tavern` / `_warrior_in_aserai_tavern` / `_barmaid` / `_tavern_keeper` / `_musician` / `_dancer` set is the **scene** family, only reachable indoors. The `_villager_carry_*` / `_worker_carry_wood_on_shoulder` set is the **carry-pose** family: these describe a held object, not a social role. And `_poses` / `_facegen` / `_map` / `_map_with_banner` are **technical** suffixes serving FaceGen generation, map-flag animation, and flag-carrying map animation — none of them corresponds to any in-game character.

**There is exactly one assembly rule**, written as the last statement of `GenerateActionSetNameWithSuffix` (`ActionSetCode.cs:103`): `"as_" + (BaseMonster non-empty ? BaseMonster : StringId) + (isFemale ? "_female" : "") + suffix`. Three segments, and **the gender segment sits between the monster name and the suffix**, so a female lord is `as_human_female_lord`, never `as_human_lord_female`. When `monster` is null the method takes the `:101` branch and hard-codes the prefix `"as_human"`, so passing null always yields a human action set — that is a deliberate fallback for "there genuinely is no monster data", not an error.

Four consequences follow, and they are where mods get hurt. First, **there is a second, unrelated `ActionSetCode` string property on `Monster`** (`Monster.cs:38`, read from XML at `Monster.cs:307`). It has nothing to do with this type: that one is a whole action-set name carried by the monster definition file and is looked up separately by `MonsterMissionData` (`MonsterMissionData.cs:24`), whereas this type produces a suffix assembled from a role. Identical names, different concepts. Second, **the constant names are not consistent**, so never infer a suffix from the naming pattern: `Villager1ActionSetSuffix`, `Villager2ActionSetSuffix`, and `Villager3ActionSetSuffix` all have the value `"_villager"` (three redundant declarations), while `VillagerCarryBucketLeftHand` and `VillagerCarryFishBucketsLeftHand` are the only two members that do *not* end in `Suffix`. Reference the constant; do not rebuild the string. Third, **nothing is validated**: `GenerateActionSetNameWithSuffix` will cheerfully assemble a nonsense key, and the failure only surfaces inside `MBGlobals.GetActionSet` as `throw new Exception("Invalid action set code")`. Fourth, **there is far more than just `human` here** — when `Monster.BaseMonster` is non-empty the key becomes `as_dragon_lord`-shaped, and the art side may simply not ship that actset, so pairing a `_lord` suffix with a dragon needs verification on your side.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `GenerateActionSetNameWithSuffix` | `public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)` | The only function in the type. Returns a key starting with `"as_human"` when `monster` is null; falls back to `StringId` when `BaseMonster` is null or empty; inserts `"_female"` before the suffix when `isFemale` is true. **A pure function — no lookup, no validation, no caching** — whether the assembled key actually exists is only known at `MBActionSet.GetActionSet`. |
| `LordActionSetSuffix` / `Villager1ActionSetSuffix` / `Villager2ActionSetSuffix` / `Villager3ActionSetSuffix` | `public const string` = `"_lord"` / `"_villager"` ×3 | Default poses for a party-less lord and for an ordinary farmer. `Villager1/2/3` are legacy duplicates with identical values, so any of the three will do. `HeroAgentSpawnCampaignBehavior.cs:176/179` and the default in [LocationCharacter](../../campaign/LocationCharacter) go through these. |
| `WarriorActionSetSuffix` / `VillagerInTavernActionSetSuffix` / `WarriorInTavernActionSetSuffix` | `public const string` = `"_warrior"` / `"_villager_in_tavern"` / `"_warrior_in_tavern"` | Poses for an able-bodied commoner and for the two tavern variants. The Wanderer branch at `HeroAgentSpawnCampaignBehavior.cs:193` picks between `_warrior_in_aserai_tavern` and `_warrior_in_tavern` based on the settlement's culture (`aserai` / `khuzait`). |
| `VillagerInAseraiTavernActionSetSuffix` / `WarriorInAseraiTavernActionSetSuffix` | `public const string` = `"_villager_in_aserai_tavern"` / `"_warrior_in_aserai_tavern"` | Aserai-culture indoor poses. These two constants have **no caller anywhere in the 1.4.5 managed code** — `HeroAgentSpawnCampaignBehavior` writes the bare string `"_warrior_in_aserai_tavern"` instead. The constants exist for mods. |
| `ArtisanSuffix` / `MerchantSuffix` / `PreacherSuffix` / `GangLeaderSuffix` / `RuralNotableSuffix` | `public const string` = `"_villager_artisan"` / `"_villager_merchant"` / `"_villager_preacher"` / `"_villager_gangleader"` / `"_villager_ruralnotable"` | The five notable occupations found in towns. Note they all start with `_villager_` rather than `_artisan`, because they are farmer variants. `HeroAgentSpawnCampaignBehavior.cs:186` distinguishes town NPCs precisely by these five values. |
| `TavernKeeperSuffix` / `WeaponsmithSuffix` / `SellerSuffix` / `MusicianSuffix` / `BarmaidActionSetSuffix` / `GuardSuffix` / `UnarmedGuardSuffix` | `public const string` | Dedicated action sets for tavern and town service staff. These likewise have no caller on the managed side in 1.4.5 — the art side is ready, the logic side is simply not wired up. |
| `VillagerCarryOnShoulderSuffix` / `VillagerCarryBucketLeftHand` / `VillagerCarryOverHeadSuffix` / `WorkerCarryOnShoulderSuffix` and the other `VillagerCarry*` | `public const string` | The carry-pose family, describing a held object (firewood, bucket, fish bucket, axe, overhead) rather than a role. It contains one member whose prefix means the opposite of the rest — `WorkerCarryOnShoulderSuffix` has the value `"_worker_carry_wood_on_shoulder"`, the only carry action prefixed with `_worker_`. |
| `PosesSuffix` / `FaceGenActionSetSuffix` / `MapActionSetSuffix` / `MapWithBannerActionSetSuffix` | `public const string` = `"_poses"` / `"_facegen"` / `"_map"` / `"_map_with_banner"` | Technical suffixes: the generic pose pool, FaceGen's per-body/culture action, map-flag (map-movement) action, and the flag-carrying variant. `Monster.cs:646` uses the monster's own `ActionSetCode` with `GetBoneIndexWithId`, which lives in exactly this naming space. |

## Real Example

The commonest single step: fetch monster data, then ask `MBGlobals` for the action set, taking the suffix from this table (`MBGlobals.cs:29-31` defines `GetActionSetWithSuffix` as `GenerateActionSetNameWithSuffix` plus `GetActionSet`):

```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("spider");
if (monster == null)
{
    Debug.Print("monster 'spider' is not loaded", 0);
    return;
}

MBActionSet actionSet = MBGlobals.GetActionSetWithSuffix(
    monster, isFemale: false, ActionSetCode.WarriorActionSetSuffix);

if (!actionSet.IsValid)
{
    Debug.Print("no action set for " + monster.StringId + " / warrior", 0);
    return;
}

// The key finally reaches the visuals layer through AgentVisualsData; the chain
// below mirrors MultiplayerMissionAgentVisualSpawnComponent.cs:151.
AgentVisualsData visuals = new AgentVisualsData()
    .Equipment(hero.BattleEquipment)
    .Frame(MatrixFrame.Identity)
    .ActionSet(actionSet)
    .Scene(Mission.Current.Scene)
    .Monster(monster)
    .PrepareImmediately(prepareImmediately: false);
```

Choosing a suffix by occupation before handing it to [LocationCharacter](../../campaign/LocationCharacter) (structure taken from the branch at `HeroAgentSpawnCampaignBehavior.cs:179-193`):

```csharp
string suffix = hero.IsArtisan
    ? ActionSetCode.ArtisanSuffix
    : (hero.IsMerchant
        ? ActionSetCode.MerchantSuffix
        : (hero.IsPreacher
            ? ActionSetCode.PreacherSuffix
            : ActionSetCode.Villager1ActionSetSuffix));

string actionSetCode = ActionSetCode.GenerateActionSetNameWithSuffix(
    agentData.AgentMonster, hero.IsFemale, suffix);

LocationCharacter villager = new LocationCharacter(
    agentData,
    SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors,
    "sp_notable",
    fixedLocation: true,
    LocationCharacter.CharacterRelations.Neutral,
    actionSetCode,
    useCivilianEquipment: true);
```

Seeing the "gender segment goes in the middle" rule explicitly, and the difference from `Monster.ActionSetCode`:

```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("human");

string maleLord = ActionSetCode.GenerateActionSetNameWithSuffix(
    monster, isFemale: false, ActionSetCode.LordActionSetSuffix);
string femaleLord = ActionSetCode.GenerateActionSetNameWithSuffix(
    monster, isFemale: true, ActionSetCode.LordActionSetSuffix);

// as_human_lord  /  as_human_female_lord
Debug.Print(maleLord + "  |  " + femaleLord, 0);

// Passing null falls back to as_human, with the gender segment still inserted
string fallback = ActionSetCode.GenerateActionSetNameWithSuffix(
    null, isFemale: true, ActionSetCode.Villager1ActionSetSuffix);
Debug.Print(fallback, 0);

// This one is the monster definition's own action-set name -- not the suffix
// string assembled above, and not the same concept at all.
Debug.Print("monster-owned code = " + monster.ActionSetCode, 0);
```

## Risks and Boundaries

- **A wrong suffix does not fail where you wrote it.** `GenerateActionSetNameWithSuffix` never checks that a resource exists; the error is deferred into `MBGlobals.GetActionSet`, which raises `Debug.FailedAssert` and then `throw new Exception("Invalid action set code")`. A custom NPC with a bad suffix crashes the whole mission while agents are being spawned.
- **Name collision: never treat `Monster.ActionSetCode` as this type's output.** The former is a complete action-set name read from XML (`Monster.cs:307`) and looked up separately at `MonsterMissionData.cs:24`; the latter is a role-derived suffix. Mixing them gets you a completely unrelated action set.
- **Suffixes for non-human monsters may not exist.** When `Monster.BaseMonster` is non-empty the key becomes `as_<BaseMonster><suffix>`. Confirm the art side actually ships that actset before pairing `_lord` with a dragon or a wolf, otherwise you land on the crash path above.
- **The constant table contains duplicates and inconsistent naming.** `Villager1/2/3ActionSetSuffix` share a value; `VillagerCarryBucketLeftHand` and `VillagerCarryFishBucketsLeftHand` lack the `Suffix` suffix. **Reference constants; never synthesise the strings from the naming pattern.**
- **Static class, no instances, no thread-safety surface (and none needed).** Every member is `const`, inlined at compile time — zero runtime cost, zero state.
- **Nearly half the constants have no managed caller in 1.4.5.** `VillagerInAseraiTavernActionSetSuffix`, `TavernKeeperSuffix`, `WeaponsmithSuffix`, `SellerSuffix`, `MusicianSuffix`, `GuardSuffix`, `UnarmedGuardSuffix`, `PosesSuffix` and friends exist only in the table. That is not dead code — it is a public table whose art assets ship ahead of its logic, and mods are meant to consume it.
- **Editing this table edits the look of every NPC at once.** Any change to a suffix value simultaneously affects lords, farmers, tavern NPCs, and town service staff. There is no compatibility layer.

## Cross-Version Notes

`ActionSetCode` is in 1.4.5's original-source form (`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ActionSetCode.cs`, 105 lines, file-scoped namespace, no `// Token:` comments). 1.3.x and 1.4.6 ship the same table with different builds, and **the constant set is content rather than API** — adding or removing a suffix is a normal asset update. When migrating across versions, the two things actually worth checking are whether `GenerateActionSetNameWithSuffix` keeps its **signature and its three-segment order**, and whether your own XML or mod code **hard-codes bare suffix strings**. `HeroAgentSpawnCampaignBehavior.cs:193` is exactly such a case — it writes the literal `"_warrior_in_aserai_tavern"` rather than using the constant — and that kind of hard-coding breaks silently if an asset is renamed.

## Dependencies

- Consumer: [MBGlobals](../../mission-ext/MBGlobals)'s `GetActionSetWithSuffix` / `GetActionSet` is the only channel that turns this type's strings into actual animation resources
- Input data: [Monster](../Monster) supplies the `BaseMonster` / `StringId` segments; `Monster.ActionSetCode` is an independent second source of action sets
- Main callers (Campaign layer): [HeroAgentSpawnCampaignBehavior](../../campaign/HeroAgentSpawnCampaignBehavior)'s `CreateLocationCharacterForHero`, `NotableHelperCharacterCampaignBehavior`, `LordsNeedsTutorIssueBehavior`
- Landing site: [LocationCharacter](../../campaign/LocationCharacter) falls back to `"_villager"` when its 6th `actionSetCode` argument is null (`LocationCharacter.cs:71`)
- Gender source: [Hero](../../campaign/Hero)'s `IsFemale`, plus `AgentData.AgentIsFemale`
- Bucket index: [core-extra API section](../)