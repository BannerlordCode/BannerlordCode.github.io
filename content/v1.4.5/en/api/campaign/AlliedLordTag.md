---
title: "AlliedLordTag"
description: "Conversation gate: true when the speaker is a hero whose MapFaction is the player's own and neither realm has been eliminated."
---

# AlliedLordTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AlliedLordTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AlliedLordTag.cs`

## Overview

`AlliedLordTag` is a single-predicate conversation gate: it answers "is the person in front of me a lord of my own side?". The verdict has two layers and both must hold — `character.IsHero` first, then `DiplomacyHelper.IsSameFactionAndNotEliminated(character.HeroObject.MapFaction, Hero.MainHero.MapFaction)`. What it compares is `MapFaction`, the **live on-map faction**, not `Clan`, not `Kingdom`, and it never inspects whether that hero's own [Clan](../Clan) is vassal or ruler.

The naming is a trap worth stating up front: the class is `AlliedLordTag` but both `Id` and `StringId` are `"PlayerIsAlliedTag"`. Dialogue data refers to the **registered name**, not the class name.

## Mental Model

Like its siblings in the same namespace, this is **a predicate name inside dialogue text**, not an object you construct on demand. `ConversationManager.InitializeTags()` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`) walks every active game assembly, finds each subclass of [ConversationTag](../ConversationTag), calls `Activator.CreateInstance(item)`, and stores the instance in `_tags` keyed by `StringId`. The runtime entry point is `Campaign.Current.ConversationManager.IsTagApplicable(tagId, character)`, which looks the key up and forwards to `IsApplicableTo`; a missing key only trips `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)` and returns false.

Four consequences you actually have to remember:

1. **Write `"PlayerIsAlliedTag"` into your dialogue data, not `"AlliedLordTag"`.** `StringId` is the registration key. Passing the class name silently yields false and the dialogue variation gets pruned without any exception.
2. **It must be a hero.** `IsHero` is checked first and short-circuits. Ordinary soldiers travelling inside a [MobileParty](../MobileParty) never satisfy this gate, even when they share the player's faction.
3. **Same faction is not the same as "my vassal".** The predicate never checks lordship or nobility. A direct vassal and a non-vassal lord inside the player's own kingdom can both pass; so can a mercenary commander while the player is still leading their own faction. The "Lord" in the name is a convention, not an implementation.
4. **Elimination kills the gate immediately.** `DiplomacyHelper.IsSameFactionAndNotEliminated` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs:41`) requires both factions non-null, reference-equal, and not eliminated. Once the player's realm is wiped out, the tag goes false even if the hero is still standing on the map.

**Tag names must be unique per assembly**: `_tags.Add(conversationTag.StringId, conversationTag)` is an `Add`, not an indexer assignment. Deriving a tag that reuses `"PlayerIsAlliedTag"` throws `ArgumentException` during startup, not a graceful degradation.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Id` | `public const string Id = "PlayerIsAlliedTag"` | The C#-side constant. **It equals `StringId`, not the class name.** The engine never reads this constant — the `_tags` key comes from `StringId` — but keeping the two identical is the family's official convention, so do not "fix" it to `"AlliedLordTag"`. |
| `StringId` | `public override string StringId => "PlayerIsAlliedTag"` | The key used by reflective registration, and the literal your `ChoiceTag.tag_name` / `IsTagApplicable` call must use. The base `ToString()` returns it, so debug prints show this string. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The entire behaviour. Rejects non-heroes, then compares `character.HeroObject.MapFaction` with `Hero.MainHero.MapFaction` for same-and-not-eliminated. No caching, no side effects; recomputed per candidate character while dialogue variations are scored. |

## Examples

Query whether the current conversation partner satisfies the gate:

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool isAlliedLord = Campaign.Current.ConversationManager.IsTagApplicable("PlayerIsAlliedTag", speaker);
if (isAlliedLord)
{
    Debug.Print(speaker.Name + " is a lord of the player's map faction", 0);
}
```

Reuse the same rule directly in code instead of routing through the dialogue manager:

```csharp
CharacterObject candidate = Hero.MainHero.CharacterObject;
bool allied = candidate.IsHero
    && DiplomacyHelper.IsSameFactionAndNotEliminated(candidate.HeroObject.MapFaction, Hero.MainHero.MapFaction);
Debug.Print("map faction = " + candidate.HeroObject.MapFaction.Name + " allied = " + allied, 0);
```

Enumerate every living hero that satisfies the gate, which is exactly every lord sharing the player's map faction:

```csharp
string tagId = AlliedLordTag.Id;
foreach (Hero lord in Hero.AllAliveHeroes)
{
    if (Campaign.Current.ConversationManager.IsTagApplicable(tagId, lord.CharacterObject))
    {
        Debug.Print(lord.Name + " of " + lord.MapFaction.Name + " qualifies", 0);
    }
}
```

## Risks and crash boundaries

- **Class name is not the registered name.** `AlliedLordTag` registers as `"PlayerIsAlliedTag"`. Getting it wrong fails silently — an assert plus a false, not an exception.
- **Not a constructible runtime object.** There is no `new AlliedLordTag(` anywhere in the tree; `InitializeTags` builds and caches the instance with the parameterless constructor. An instance you build yourself is not in `_tags`, so `IsTagApplicable` never asks it. Any derived tag must also expose a public parameterless constructor or startup throws `MissingMethodException`.
- **`MapFaction`, not `Clan`/`Kingdom`.** When the player leaves a kingdom `Hero.MainHero.MapFaction` changes and the tag result changes with it, while the old clan relation is untouched. Do not infer the tag from clan bookkeeping.
- **Nothing enforces "lord".** There is no `IsLord` or `Clan.IsNoble` check. Player vassals and plain lords are indistinguishable here.
- **Soldiers are always false.** The `IsHero` early-out keeps non-hero characters out.
- **Elimination turns it off.** Either faction reporting `IsEliminated` makes the helper return false.
- **Null factions are safe.** `IsSameFactionAndNotEliminated` null-checks both arguments, so faction-less characters such as some notables do not throw.
- **Recomputed per `ChoiceTag`.** `ConversationManager.FindMatchingScore` calls it once per tag; trivial here, expensive if you derive a tag that walks the world.
- **Independent of `CampaignOptions`.** Nothing about the life/death cycle switches affects it.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AlliedLordTag.cs` is 19 lines with 3 members, a single predicate and no conditional compilation. The 1.4.6 and 1.3.15 files of the same name expose an identical public surface — no additions, no removals.

## Dependencies

- Base: [ConversationTag](../ConversationTag) declares only the two abstract members `StringId` / `IsApplicableTo`, and makes `ToString()` return `StringId`.
- Registration and query: [ConversationManager](../ConversationManager) — `InitializeTags()` builds instances reflectively, `IsTagApplicable(string, CharacterObject)` forwards, and `FindMatchingScore` in the same file uses the verdict to score dialogue variations.
- Predicate helper: [DiplomacyHelper](../DiplomacyHelper) — `IsSameFactionAndNotEliminated(IFaction, IFaction)` is the single implementation of "same faction, neither eliminated".
- Queried object: [CharacterObject](../CharacterObject) for `IsHero` / `HeroObject`, and [Hero](../Hero) for `MapFaction`.
- Faction abstraction: [IFaction](../IFaction) supplies `IsEliminated`; [Faction](../Faction) is its concrete implementation.
- Sibling tags: [AmoralTag](../AmoralTag) and [AnyNotableTypeTag](../AnyNotableTypeTag) are the other two structurally identical gates in this namespace.
