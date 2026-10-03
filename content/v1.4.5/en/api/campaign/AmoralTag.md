---
title: "AmoralTag"
description: "Conversation gate: true when Honor + Mercy sum below zero, i.e. the NPC has already crossed the line on both moral axes."
---

# AmoralTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AmoralTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AmoralTag.cs`

## Overview

`AmoralTag` is a one-line conversation predicate: given the [CharacterObject](../CharacterObject) currently talking to you, it answers "has this person already gone morally too far?". The whole implementation is `character.GetTraitLevel(DefaultTraits.Honor) + character.GetTraitLevel(DefaultTraits.Mercy) < 0`.

It carries no dialogue content, picks no line and changes no relation. What consumes it is the `ChoiceTag` attached to dialogue variations — the game marks a variation as "requires AmoralTag", and `ConversationManager.FindMatchingScore` calls `IsApplicableTo` while scoring variations: a matching tag adds its `Weight`, and a single `ChoiceTag` whose verdict disagrees with the expectation short-circuits the whole variation to `-2147483648`. So `AmoralTag` is a **swappable condition inside dialogue data**, not a scripting API.

## Mental Model

Read it as "a predicate name that lives in your dialogue XML", not as an object you hold in your hand. The whole chain is:

`ConversationManager.InitializeTags()` → reflect over every active game assembly for subclasses of [ConversationTag](../ConversationTag) → `Activator.CreateInstance(item)` on each → `_tags.Add(conversationTag.StringId, conversationTag)`. At runtime the real call is `Campaign.Current.ConversationManager.IsTagApplicable("AmoralTag", character)`, which looks the key up and forwards. Three hard consequences:

1. **Do not `new AmoralTag()` yourself.** There is no `new AmoralTag(` anywhere in the 1.4.5 tree; the instance is built reflectively with a **parameterless constructor**. An instance you create is not in `_tags`, so `IsTagApplicable` never consults it.
2. **A derived tag must have a public parameterless constructor.** `Activator.CreateInstance` without one throws `MissingMethodException`, and it happens inside `InitializeTags` during startup — not on the first conversation.
3. **`StringId` must match the literal in your dialogue data character for character.** `StringId` returns `"AmoralTag"` and `const string Id` agrees. When `IsTagApplicable` cannot find the key it runs `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)`. A typo therefore does not throw — the affected `ChoiceTag` is simply never satisfied and that variation is silently pruned.

The predicate itself hides one more layer worth knowing: `GetTraitLevel` comes from [CharacterObject](../CharacterObject) (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterObject.cs:773`) and branches on `IsHero` — heroes forward to `HeroObject.GetTraitLevel(trait)`, everyone else reads the plain `_characterTraits` bag. So the gate works on **ordinary NPCs too**; an amoral merchant or villager satisfies it, not just nobles. The threshold is strictly less than zero: a character with Honor `+2` and Mercy `-2` sums to exactly 0 and is **not** amoral. Widening that to `<= 0` means writing your own derived tag; the `const Id` will not do it for you.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Id` | `public const string Id = "AmoralTag"` | The constant used for C#-side references, equal to `StringId`. The engine does **not** read it — the `_tags` key comes from `StringId`. Keep the literal in sync when you touch either one. |
| `StringId` | `public override string StringId => "AmoralTag"` | The key used during reflective registration, and the literal your `ChoiceTag.tag_name` must contain. The base `ToString()` returns it, so debug output shows this exact string. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The entire behaviour. Sums the Honor and Mercy [TraitObject](../TraitObject) levels and returns true only when the total is **strictly below** 0. No caching and no side effects; recomputed per candidate character while variations are scored. |

## Examples

Check whether a character currently satisfies the "no moral limits" conversation condition:

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool amoral = Campaign.Current.ConversationManager.IsTagApplicable("AmoralTag", speaker);
if (amoral)
{
    Debug.Print(speaker.Name + " has Honor+Mercy below zero", 0);
}
```

To see how far off the character is, recompute the rule yourself — `IsApplicableTo` only ever gives you a bool:

```csharp
CharacterObject npc = Hero.MainHero.CharacterObject;
int honor = npc.GetTraitLevel(DefaultTraits.Honor);
int mercy = npc.GetTraitLevel(DefaultTraits.Mercy);
int moralSum = honor + mercy;
Debug.Print("honor=" + honor + " mercy=" + mercy + " sum=" + moralSum, 0);
```

Deriving your own gate while keeping the family's convention of a constant whose name matches its value, and relying on the inherited parameterless constructor:

```csharp
public class RuthlessTag : ConversationTag
{
    public const string Id = "RuthlessTag";

    public override string StringId => "RuthlessTag";

    public override bool IsApplicableTo(CharacterObject character)
    {
        return character.GetTraitLevel(DefaultTraits.Mercy) <= -3;
    }
}
```

## Risks and crash boundaries

- **Not a runtime object you construct.** The only registration path is `InitializeTags`, which builds and caches every instance once. Hot-swapping a tag mid-battle or mid-conversation is not possible.
- **A misspelled name fails silently.** `IsTagApplicable` only asserts and then returns false, so the variation disappears with no crash. When debugging, confirm the `StringId` is present in `_tags`.
- **Tag names must be unique per assembly.** `_tags.Add(...)` is an `Add`, so two classes returning the same `StringId` throw `ArgumentException` at startup and module load order decides who registers first.
- **No gender, status or life-state filtering.** There is no `IsHero`, no `IsFemale` test inside the predicate. Add the branch yourself if you need it.
- **Applies to AI-controlled heroes too.** `IsApplicableTo` returns a verdict for the AI main hero as well, and `ConversationManager` treats it identically.
- **Recomputed per `ChoiceTag`.** `FindMatchingScore` calls `IsTagApplicable` once per tag. Two trait reads are free; a derived tag that scans the world is not.
- **Independent of `CampaignOptions`.** Nothing about the life/death cycle or similar switches reaches this predicate.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AmoralTag.cs` is 15 lines with 4 members, a one-line predicate and no conditional compilation. The 1.4.6 and 1.3.15 files of the same name expose an identical public surface — no additions, no removals.

## Dependencies

- Base: [ConversationTag](../ConversationTag) declares only `StringId` / `IsApplicableTo` and returns `StringId` from `ToString()`.
- Registration and query: [ConversationManager](../ConversationManager) — `InitializeTags()` builds instances reflectively, `IsTagApplicable(string, CharacterObject)` forwards, and `FindMatchingScore` in the same file uses the verdict to score dialogue variations.
- Queried object: [CharacterObject](../CharacterObject) — `GetTraitLevel(TraitObject)` at `CharacterObject.cs:773` is the hero/`HeroObject` versus ordinary-`_characterTraits` two-path read.
- Predicate constants: [DefaultTraits](../DefaultTraits) supplies the `Honor` and `Mercy` [TraitObject](../TraitObject) instances.
- Sibling tags: [AlliedLordTag](../AlliedLordTag) and [AnyNotableTypeTag](../AnyNotableTypeTag) are the other two structurally identical gates in this namespace.
- Container: the `TaleWorlds.CampaignSystem.Conversation` namespace that hosts [ConversationManager](../ConversationManager) is where every dialogue tag and text table lives.
