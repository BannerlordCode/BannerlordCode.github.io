---
title: "AnyNotableTypeTag"
description: "Conversation gate: true for any of the six local-notable roles (artisan, gang leader, preacher, merchant, rural notable, headman)."
---

# AnyNotableTypeTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AnyNotableTypeTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AnyNotableTypeTag.cs`

## Overview

`AnyNotableTypeTag` answers one question: **is this person any kind of local notable?** The "AnyNotable" in the name maps onto [Hero](../Hero).IsNotable, itself a six-way union — `IsArtisan`, `IsGangLeader`, `IsPreacher`, `IsMerchant`, `IsRuralNotable`, plus `IsHeadman` as the fallback when none of the first five hold.

It is the broadest character-class filter in the dialogue data. The only code reference to it in the whole 1.4.5 tree sits at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/LordConversationsCampaignBehavior.cs:907`, where it adds a small weight to a "yes, my lord" answer, roughly "since you are somebody, I will call you my lord". It deliberately does **not** discriminate between the six roles; if you want "merchants only", you need a different tag.

## Mental Model

Three members, one-line predicate — the minimal member of this family. The chain is reflect-and-lookup: `ConversationManager.InitializeTags()` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`) walks every active game assembly for subclasses of [ConversationTag](../ConversationTag), calls `Activator.CreateInstance(item)` on each, and stores it in `_tags` keyed by `StringId`. The runtime entry point is `Campaign.Current.ConversationManager.IsTagApplicable("AnyNotableTypeTag", character)`.

Four things to actually remember:

1. **`IsHero` comes first.** A non-hero `CharacterObject` returns false immediately. Clan members are heroes, but whether a merchant-class character counts depends on whether the data marks it as `IsHero`. Ordinary soldiers and villagers travelling with a party never qualify.
2. **The predicate is the `Hero.IsNotable` property, not an occupation enum.** `IsNotable` is "any of five true, otherwise fall through to `IsHeadman`". It does **not** include `IsLord` — being a lord does not by itself make someone notable, and a hero with all five false usually lands on a false `IsHeadman`. In this game "notable" means the *local notable* social stratum, not "famous person".
3. **It supplies a condition, never a line.** Weight and direction live in the dialogue data. The real usage at `LordConversationsCampaignBehavior.cs:907` is:

   ```csharp
   .Variation("{=MTxuTZDA}I'll be here, your {?PLAYER.GENDER}ladyship{?}lordship{\\?}.", "UnderCommandTag", 5, "AnyNotableTypeTag", 1, "WandererTag", -1)
   ```

   `AnyNotableTypeTag` carries weight **1** (forward: satisfied means bonus), while `WandererTag` carries **-1** — and a negative weight is **reversed**: `FindMatchingScore` rejects the whole variation when `IsTagApplicable(...) == choiceTag.IsTagReversed`, so `-1` means "this tag must *not* apply". The net effect is "say the polite form only when the player gave an order, the target is a person of standing, and the target is not a wanderer".
4. **A misspelled name fails silently.** `IsTagApplicable` on an unknown key only runs `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)` and returns false, so the variation is pruned without an exception.

`Id` and `StringId` are both `"AnyNotableTypeTag"` and therefore agree. `_tags.Add(...)` is an `Add`, so a duplicate tag name throws `ArgumentException` during startup.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Id` | `public const string Id = "AnyNotableTypeTag"` | The C#-side constant, equal to `StringId`. The engine does **not** read it — the `_tags` key comes from `StringId`. Its practical use is avoiding hand-typed literals when you build weight arguments in code. |
| `StringId` | `public override string StringId => "AnyNotableTypeTag"` | The key used during reflective registration, and the literal your `ChoiceTag.tag_name` must contain. The base `ToString()` returns it, so debug prints show this string. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The entire behaviour. Short-circuits on `IsHero`, then returns `character.HeroObject.IsNotable`. No caching, no side effects; recomputed per candidate character while variations are scored. |

## Examples

Check whether the current conversation partner belongs to the notable stratum:

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool notable = Campaign.Current.ConversationManager.IsTagApplicable("AnyNotableTypeTag", speaker);
if (notable)
{
    Debug.Print(speaker.Name + " counts as a notable", 0);
}
```

To find out *which* role it is, break the union apart yourself — `IsApplicableTo` only ever returns the merged bool:

```csharp
CharacterObject npc = Hero.OneToOneConversationHero.CharacterObject;
if (npc.IsHero)
{
    Hero hero = npc.HeroObject;
    string kind = hero.IsArtisan ? "artisan"
        : hero.IsGangLeader ? "gang leader"
        : hero.IsPreacher ? "preacher"
        : hero.IsMerchant ? "merchant"
        : hero.IsRuralNotable ? "rural notable"
        : hero.IsHeadman ? "headman"
        : "plain noble";
    Debug.Print(hero.Name + " -> " + kind + " notable=" + hero.IsNotable, 0);
}
```

Enumerate every hero on the map who will trigger this dialogue tag, to predict which NPCs pull from the notable dialogue pool:

```csharp
string tagId = AnyNotableTypeTag.Id;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (Campaign.Current.ConversationManager.IsTagApplicable(tagId, hero.CharacterObject))
    {
        Debug.Print(hero.Name + " uses the notable dialogue pool", 0);
    }
}
```

## Risks and crash boundaries

- **Not a constructible runtime object.** There is no `new AnyNotableTypeTag(` in the tree; `InitializeTags` builds and caches the instance with the parameterless constructor. One you construct yourself is not in `_tags`, so `IsTagApplicable` never consults it. Derived tags need a public parameterless constructor too or startup throws `MissingMethodException`.
- **A wrong tag name does not throw.** It asserts and returns false, and the variation vanishes silently. When debugging, confirm the `StringId` is present in `_tags`.
- **Tag names must be unique per assembly.** Duplicate keys throw `ArgumentException` from `_tags.Add`, and module load order decides who registers first.
- **"Notable" is not "lord".** There is no `IsLord` test in the predicate. Use a lord-specific tag if that is what you mean.
- **Soldiers and farmers are always false.** The `IsHero` early-out excludes them; only characters the data marks as `IsHeadman` slip through that branch.
- **Occupation changes flip the answer immediately.** `IsNotable` is recomputed on every call with no cache, so a promotion to headman or joining a gang-leader group changes the verdict on the next conversation.
- **Negative weights read backwards.** In `FindMatchingScore` a negative weight means "this tag must *not* apply", not "subtract points when satisfied".
- **Independent of `CampaignOptions`.** Nothing about the life/death cycle reaches this predicate.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AnyNotableTypeTag.cs` is 17 lines with 3 members, a one-line predicate and no conditional compilation. The 1.4.6 and 1.3.15 files of the same name expose an identical public surface — no additions, no removals.

## Dependencies

- Base: [ConversationTag](../ConversationTag) declares only the two abstract members `StringId` / `IsApplicableTo`, and returns `StringId` from `ToString()`.
- Registration and query: [ConversationManager](../ConversationManager) — `InitializeTags()` builds instances reflectively, `IsTagApplicable(string, CharacterObject)` forwards, and `FindMatchingScore` in the same file handles weights and reversal.
- Queried object: [CharacterObject](../CharacterObject) supplies `IsHero` and `HeroObject`.
- The predicate itself: [Hero](../Hero).IsNotable at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs:387` is the six-term union.
- Role constants: [Occupation](../Occupation) together with [Hero](../Hero)'s `IsArtisan` / `IsGangLeader` / `IsPreacher` / `IsMerchant` / `IsRuralNotable` / `IsHeadman` define the local-notable stratum.
- Sibling tags: [AlliedLordTag](../AlliedLordTag) and [AmoralTag](../AmoralTag) are the other two structurally identical gates in this namespace.
