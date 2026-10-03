---
title: "ArtisanNotableTypeTag"
description: "Conversation tag: decides whether a character's Occupation is Artisan. Sibling of AseraiTag and AnyNotableTypeTag, and one third of the identity slice of the dialogue tag layer."
---

# ArtisanNotableTypeTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanNotableTypeTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ArtisanNotableTypeTag.cs`

## Overview

`ArtisanNotableTypeTag` is an **identity gate**: it answers "is the character being talked to an artisan?", and the answer decides which lines of a dialogue XML file are available. The whole 1.4.5 implementation is three effective lines:

```csharp
if (character.IsHero)
{
    return character.Occupation == Occupation.Artisan;
}
return false;
```

Inside the dialogue layer this type carries the **"slice the line pool by occupation"** job. Together with [AseraiTag](../AseraiTag) (culture) and [AnyNotableTypeTag](../AnyNotableTypeTag) (notability) it forms a three-piece identity set: culture, standing, occupation. A single XML node may carry several of them, and the semantics are **AND**.

The difference from `AnyNotableTypeTag` deserves calling out: both start with `if (character.IsHero)`, but one reads `HeroObject.IsNotable` (is this hero a town notable) and the other reads `character.Occupation`. **`Occupation` hangs off `CharacterObject`, not off `Hero`** — this is one of the few places in 1.4.5 where an occupation can be observed on a non-hero character object. The `IsHero` short-circuit exists to exclude non-human entries rather than because `Occupation` is hero-only.

## Mental Model

Think of it as **a one-line alias for an Occupation comparison**.

- **It does not forward to `Hero.IsArtisan`; it implements the check itself.** [Hero](../Hero) does expose `public bool IsArtisan => Occupation == Occupation.Artisan;` at `Hero.cs:343`, but this tag reads `character.Occupation` because its parameter is a `CharacterObject`. The two agree on heroes, but only this type works at the `CharacterObject` layer.
- **The call order is always "engine asks, you write the condition".** You put `allowed_tags="ArtisanNotableTypeTag"` in XML; at conversation start the engine reaches `IsApplicableTo` through [ConversationManager](../ConversationManager). Constructing your own instance only makes sense when your behavior pre-checks the same rule.
- **`Id` and `StringId` are the same literal.** `public const string Id = "ArtisanNotableTypeTag"` and `public override string StringId => "ArtisanNotableTypeTag"`. XML reads `StringId`; the engine never reads `Id`.
- **The `IsHero` short-circuit is meaningful.** A non-hero character's `Occupation` may be `NotAssigned` or something else, and comparing it directly would misfire, so the guard comes first.
- **Do not replace it with `hero.Occupation == Occupation.Artisan` inside a `foreach (Hero)` and assume identical semantics.** It is semantically equivalent, but if your list can contain non-human units, reading `Occupation` directly does not exclude them for you.

### How the three identity siblings divide the work

| What you want to express | Tag | What it tests |
| --- | --- | --- |
| "Only to artisans" | `ArtisanNotableTypeTag` | `character.Occupation == Occupation.Artisan` |
| "Only to Aserai speakers" | [AseraiTag](../AseraiTag) | `Culture.StringId == "aserai"` |
| "Only to town notables" | [AnyNotableTypeTag](../AnyNotableTypeTag) | `character.HeroObject.IsNotable` |
| "Only to honour + mercy below zero" | `AmoralTag` | `GetTraitLevel(Honor) + GetTraitLevel(Mercy) < 0` |
| "Only while the player is attacking" | [AttackingTag](../AttackingTag) | `HeroHelper.WillLordAttack()` or the siege roster |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Id` | `public const string Id = "ArtisanNotableTypeTag"` | Compile-time constant form of the identifier, usable as a `switch` case. |
| `StringId` | `public override string StringId => "ArtisanNotableTypeTag"` | The literal written into `allowed_tags` in dialogue XML; also the dictionary key inside `ConversationManager._tags`. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The only logic: short-circuit on `character.IsHero`, then compare `character.Occupation` with `Occupation.Artisan`. **The parameter itself has no null guard** — a null `character` throws immediately. |

## Examples

Test whether a hero would pass this dialogue gate from inside your own behavior:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool ArtisanLineApplies(Hero candidate)
{
    if (candidate == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || !character.IsHero)
    {
        return false;
    }

    ArtisanNotableTypeTag tag = new ArtisanNotableTypeTag();
    return tag.IsApplicableTo(character);
}
```

Ask the conversation manager instead of allocating a tag yourself:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool artisanLine = Campaign.Current.ConversationManager.IsTagApplicable(
        ArtisanNotableTypeTag.StringId, talkTarget);
    Debug.Print("artisan line applicable = " + artisanLine, 0);
}
```

Filter every artisan hero in the world for a map event or a quest precondition:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

ArtisanNotableTypeTag tag = new ArtisanNotableTypeTag();
foreach (Hero hero in Campaign.Current.AliveHeroes)
{
    CharacterObject character = hero.CharacterObject;
    if (character.Culture != null && tag.IsApplicableTo(character))
    {
        Debug.Print("artisan lord: " + hero.Name.ToString() + " @ " + hero.CurrentSettlement.Name, 0);
    }
}
```

## Risks and crash boundaries

- **No null guard on the parameter.** The very first line dereferences `character.IsHero`. Compare the sibling `AmoralTag`, which calls `character.GetTraitLevel(...)` with no protection either — the convention of this layer is that the caller passes a valid character.
- **Depends on live `Occupation` assignment.** Reassignment (retraining, release from captivity, AI redistribution) flips the verdict immediately and involves no save migration.
- **No faction or situation filtering.** It does not check whether the artisan is in a town, captured, or inside a Mission. Add those checks yourself.
- **A different read path than `Hero.IsArtisan`.** One reads `CharacterObject.Occupation`, the other reads `Hero.Occupation`. They agree on heroes, but for a plain `CharacterObject` stripped of its `Hero` layer only this type works.
- **No caching, no static state.** `ConversationManager` walks `_tags.Values` at each conversation start; the cost is one enum comparison.
- **Inheritance is not blocked.** `ConversationTag` is `public abstract` and this class is not `sealed`. A derived class only needs to change `StringId` to act as a new tag, but a new tag does not enter `_tags` on its own — confirm whether [ConversationManager](../ConversationManager) builds that registry from XML or from hard-coded entries.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ArtisanNotableTypeTag.cs` is a 17-line original-source file. Its entire public surface is `Id` / `StringId` / `IsApplicableTo` — no fields, no extra properties, no events. Compare versions by those three members; the 1.3.x and 1.4.6 copies of this file are decompiled output and are noticeably longer with the same members.

## Dependencies

- Base class and only consumer: [ConversationManager](../ConversationManager) owns the `_tags` dictionary and calls `IsApplicableTo` from `IsTagApplicable` / `GetApplicableTagNames`
- What it reads: the `IsHero` and `Occupation` properties of [CharacterObject](../CharacterObject); `Occupation` is a Core-layer enum
- Equivalent convenience form: the `IsArtisan` property on [Hero](../Hero) is a direct `Occupation == Occupation.Artisan` wrapper that this type deliberately does not use
- Sibling gates: [AseraiTag](../AseraiTag), [AnyNotableTypeTag](../AnyNotableTypeTag), [AttackingTag](../AttackingTag), `AmoralTag`, `BattanianTag`
- Upstream behavior reference: both `ArtisanCantSellProductsAtAFairPriceIssueBehavior` and `ArtisanOverpricedGoodsIssueBehavior` gate on `issueGiver.IsArtisan`, which shows artisan identity being used from the issue system as well as from dialogue tags
- Bucket index: [campaign API section](../)
