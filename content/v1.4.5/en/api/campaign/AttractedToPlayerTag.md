---
title: "AttractedToPlayerTag"
description: "Conversation tag: decides whether an opposite-sex NPC is attracted to the player (RomanceModel attraction above 70, both parties unmarried, not at war). The gate in front of the romance line pool."
---

# AttractedToPlayerTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AttractedToPlayerTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttractedToPlayerTag.cs`

## Overview

`AttractedToPlayerTag` is the **affection gate** of the romance line. It answers "does this NPC have a crush on the player?", and the answer decides which flirtation or confession lines a dialogue XML file may show. The 1.4.5 implementation packs five conditions into a single `if`:

```csharp
heroObject != null
  && Hero.MainHero.IsFemale != heroObject.IsFemale
  && !FactionManager.IsAtWarAgainstFaction(heroObject.MapFaction, Hero.MainHero.MapFaction)
  && Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(heroObject, Hero.MainHero) > 70
  && heroObject.Spouse == null
```

Inside the dialogue layer this type carries the **"slice the line pool by relationship intimacy"** job. Its siblings — [AseraiTag](../AseraiTag) for culture, [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) for occupation, [AnyNotableTypeTag](../AnyNotableTypeTag) for notability — test **static identity**. This one tests a **live relationship**, which is why it goes through the replaceable [RomanceModel](../RomanceModel) instead of a hard-coded number.

One source detail has to be known up front: the class declares `private const int MinimumFlirtPercentageForComment = 70;` but `IsApplicableTo` compares against the literal `70`, and **that constant is never referenced**. The 70 threshold in 1.4.5 is therefore an unconfigurable magic number — swapping the model does not change it unless you override the tag yourself.

## Mental Model

Think of it as **a conjunction of romance-line preconditions** — all five must hold at once.

- **It is the only runtime-relationship tag at this layer.** Identity tags read static fields off the character; this one reads a live score from `RomanceModel`. Once a behavior such as `RomanceCampaignBehavior` moves the affection value, the verdict flips on the next frame, with no save migration involved.
- **Mind the direction.** The parameter is `character` and the character is the one being evaluated, but the score query is `GetAttractionValuePercentage(heroObject, Hero.MainHero)` — "how much does `heroObject` like `Hero.MainHero`". The reverse order is a different number, and swapping it fails silently.
- **The threshold is a hard-coded 70, not the constant and not a model parameter.** `MinimumFlirtPercentageForComment` is dead code. Do not reference it, and do not expect editing it to do anything.
- **There are two `Spouse == null` checks and both matter.** The NPC must be unmarried **and the player must be unmarried**. Marrying the player removes every `AttractedToPlayerTag` line, not merely some of them.
- **War is a hard veto.** `FactionManager.IsAtWarAgainstFaction(...)` returning true forces false even at maximum affection. NPCs of an enemy faction never reach this line pool.
- **`IsFemale` must differ.** That is the game's definition of a romanceable partner, not a rule this tag invented. Same-sex NPCs never match.

### Where it sits relative to the rest of the romance system

| What you want to express | Which path to take |
| --- | --- |
| "Show this line only to an NPC attracted to the player" | This tag, via `allowed_tags` in dialogue XML |
| "What is the player's current affection value" | `Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(hero, Hero.MainHero)` |
| "Change affection" | Go through the behavior/action behind [RomanceModel](../RomanceModel); do not write the number yourself |
| "Show this line only to married NPCs" | Write your own tag; 1.4.5's `Conversation.Tags` folder has none |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `MinimumFlirtPercentageForComment` | `private const int MinimumFlirtPercentageForComment = 70` | **Dead code.** `IsApplicableTo` compares against the literal `70` and never reads this constant. It only records that the author meant to lift the threshold out, and 1.4.5 did not finish the job. |
| `StringId` | `public override string StringId => "AttractedToPlayerTag"` | The literal written into `allowed_tags` in dialogue XML, and the key inside `ConversationManager._tags`. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The only logic. Short-circuits on `heroObject != null`, opposite sex, not at war per [FactionManager](../FactionManager), `RomanceModel` attraction `> 70`, NPC unmarried, player unmarried. **Dereferences `Campaign.Current` and `Hero.MainHero`** — either being null throws. |

## Examples

Decide from your own behavior whether an NPC would reach this romance line:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool IsAttractedNpc(Hero candidate)
{
    if (candidate == null || Campaign.Current == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || character.HeroObject == null)
    {
        return false;
    }

    return new AttractedToPlayerTag().IsApplicableTo(character);
}
```

Ask the conversation manager whether the condition holds right now, without allocating a tag:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool attractedLine = Campaign.Current.ConversationManager.IsTagApplicable(
        AttractedToPlayerTag.StringId, talkTarget);
    Debug.Print("attracted line applicable = " + attractedLine, 0);
}
```

Recompute the score yourself for a UI readout. Note this is a different road from the tag: the model value is configurable, the tag threshold is not.

```csharp
using TaleWorlds.CampaignSystem;

Hero npc = Hero.OneToOneConversationHero;
if (npc != null && Campaign.Current != null && npc.Spouse == null)
{
    int attraction = Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(npc, Hero.MainHero);
    Debug.Print("attraction = " + attraction + " (tag threshold is the hard-coded 70)", 0);
}
```

## Risks and crash boundaries

- **Hard dependency on `Campaign.Current` and `Hero.MainHero`.** Both are dereferenced inside `IsApplicableTo`. A null `Campaign.Current` (main menu, early module load, incomplete load) throws.
- **The 70 threshold is a magic number, not a constant and not a model parameter.** Replacing the `RomanceModel` implementation does not move it. To change it you must derive a tag class and override `IsApplicableTo`.
- **Affection is directional.** Swapping the two `Hero` arguments produces a completely different number and reports no error.
- **The player's marriage removes every romance line.** That is the `Hero.MainHero.Spouse == null` term, and it is an easy thing to misdiagnose as "the tag broke" in story mods.
- **War vetoes instantly.** Declaring war takes all `AttractedToPlayerTag` lines offline and making peace brings them back; no dialogue resource reload is involved.
- **Opposite-sex requirement is hard.** `IsFemale` must differ, and it sits near the front of the conjunction so it fails early.
- **No caching, no static state.** Each conversation start walks every tag; the cost is a few property reads plus one model call.
- **Inheritance is not blocked.** `ConversationTag` is `public abstract` and this class is not `sealed`. A new tag still needs confirmation that [ConversationManager](../ConversationManager) builds its registry from XML or from hard-coded entries.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttractedToPlayerTag.cs` is a 20-line original-source file: one unused `private const`, one `StringId`, one `IsApplicableTo`. Note that it has **no `Id` constant**, unlike `AseraiTag`, `ArtisanNotableTypeTag`, and `AnyNotableTypeTag` in the same folder, which all declare `public const string Id`. When diffing across versions, compare the members that actually exist rather than expecting an `Id` to be there.

## Dependencies

- Base class and only consumer: [ConversationManager](../ConversationManager) owns the `_tags` dictionary and calls `IsApplicableTo` from `IsTagApplicable` / `GetApplicableTagNames`
- Source of the affection score: [RomanceModel](../RomanceModel) exposes `GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`, and that implementation is replaceable
- War check: the `IsAtWarAgainstFaction(IFaction, IFaction)` member of [FactionManager](../FactionManager)
- Parameter and subject: the `HeroObject` field of [CharacterObject](../CharacterObject) plus the `IsFemale` and `Spouse` properties of [Hero](../Hero)
- Sibling runtime-state tag: [AttackingTag](../AttackingTag) also reads `Hero.MainHero` and `PlayerEncounter`, making it a second sample of a state-dependent tag
- Bucket index: [campaign API section](../)
