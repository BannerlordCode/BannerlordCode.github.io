---
title: "AseraiTag"
description: "Conversation tag: decides whether a character belongs to the aserai culture. One string comparison against Culture.StringId, and the smallest possible example of a CampaignSystem dialogue gate."
---

# AseraiTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AseraiTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AseraiTag.cs`

## Overview

`AseraiTag` is a **boolean gate** in the conversation system. It answers one question — "is the character being talked to Aserai?" — and that answer decides which lines of a dialogue XML file are allowed to appear. The entire 1.4.5 implementation is a single comparison:

```csharp
return character.Culture.StringId == "aserai";
```

Inside the dialogue layer this type carries the **"slice the line pool by culture"** job. Its siblings in the same folder gate on different axes: [AnyNotableTypeTag](../AnyNotableTypeTag) asks whether the character is notable, [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) asks whether the occupation is artisan, and other tags ask about relations or combat state. `AseraiTag` only cares about culture, so `AseraiTag` in an `allowed_tags` list means "this line is spoken only to Aserai".

Note that it tests `Culture.StringId`, not `Culture` itself. Culture is a nullable reference hanging off [CharacterObject](../CharacterObject); plain soldiers and civilians may not have one, and that single line will throw on them. That is the only real boundary this type has.

## Mental Model

Treat it as **a pure function written for dialogue XML** — not as an object with state.

- **No constructor work, no fields.** The whole class is one `const`, one property, and one method. `ConversationManager` holds instances as entries of its `_tags` dictionary and they are stateless.
- **The call order is always "engine asks, you write the condition".** You write `allowed_tags="AseraiTag"` in XML; at conversation start the engine calls `IsTagApplicable` / `GetApplicableTagNames` on [ConversationManager](../ConversationManager), which invokes `IsApplicableTo(character)` for every registered tag. Constructing `new AseraiTag()` yourself only makes sense when your own behavior wants to pre-check the same rule.
- **`Id` and `StringId` are the same literal.** `public const string Id = "AseraiTag"` and `public override string StringId => "AseraiTag"` hard-code the same string. They are not "an identifier plus a display name" — they are one identifier exposed twice. The one XML reads is `StringId`.
- **It is not a `Hero` filter.** `IsApplicableTo` takes a `CharacterObject`, not a `Hero`. `Hero.CharacterObject` works as an inbound conversion; the reverse does not compile.
- **Culture can change at runtime.** Any mod action that changes a hero's culture flips the answer on the next frame. The verdict is a live query, never a saved field.

### How the siblings divide the work

| What you want to express | Which tag | What it tests |
| --- | --- | --- |
| "Only to Aserai speakers" | `AseraiTag` | `Culture.StringId == "aserai"` |
| "Only to notable characters" | [AnyNotableTypeTag](../AnyNotableTypeTag) | `character.HeroObject.IsNotable` |
| "Only to artisans" | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | `character.Occupation == Occupation.Artisan` |
| "Only to honour + mercy below zero" | `AmoralTag` | `GetTraitLevel(Honor) + GetTraitLevel(Mercy) < 0` |
| "Only to the same ethnicity" | `BattanianTag` | Same shape, a culture StringId comparison |

A single XML node may carry several tags; they are combined with **AND**, never OR.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Id` | `public const string Id = "AseraiTag"` | Compile-time constant form of the identifier, for C# code that needs to build the string. Being `const`, it is usable as a `switch` case. |
| `StringId` | `public override string StringId => "AseraiTag"` | The literal that goes into `allowed_tags` in dialogue XML. The base [ConversationTag](../ConversationManager) uses it as the dictionary key; **the engine never reads `Id`**. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The only logic. Reads `character.Culture.StringId` and performs a **case-sensitive exact string comparison** against `"aserai"`. There is **no null check** — a null `character.Culture` throws. |

## Examples

Run the same gate over a hero from your own behavior. Note the parameter is `CharacterObject`, not `Hero`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool IsAseraiNpc(Hero candidate)
{
    if (candidate == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || character.Culture == null)
    {
        return false;
    }

    return new AseraiTag().IsApplicableTo(character);
}
```

Ask the conversation manager which tags currently hold, instead of re-implementing the rule yourself:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    ConversationManager manager = Campaign.Current.ConversationManager;
    bool aseraiLineApplies = manager.IsTagApplicable(AseraiTag.StringId, talkTarget);
    Debug.Print("aserai tag applicable = " + aseraiLineApplies, 0);
}
```

Filter a batch of heroes for your own map event or UI:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

AseraiTag tag = new AseraiTag();
foreach (Hero hero in Campaign.Current.AliveHeroes)
{
    CharacterObject character = hero.CharacterObject;
    if (character.Culture != null && tag.IsApplicableTo(character) && hero.Clan != Clan.PlayerClan)
    {
        Debug.Print("aserai lord: " + hero.Name.ToString(), 0);
    }
}
```

## Risks and crash boundaries

- **`character.Culture` has no null guard.** Non-map characters (battle troops, some NPCs) may have no culture, and `IsApplicableTo` throws there. The engine's own calls happen after it has established that the conversation target has character data, but **every manual call site must check first**.
- **Case sensitive.** The comparison is plain `==`. A culture id written as `Aserai` or `ASERAI` does not match, and nothing reports it — every gated line simply disappears.
- **It ignores context.** No check on `IsNotable`, prisoner state, or whether a Mission is running. Add those yourself if you need them.
- **No caching, no static state.** `ConversationManager` walks `_tags.Values` on each conversation start; the cost is one string comparison, which is negligible.
- **Changing culture takes effect immediately and needs no save migration.** The verdict depends entirely on the runtime `Culture.StringId`, so nothing about this tag enters the save. Swap a hero's culture and the old dialogue flips on the next conversation.
- **Inheriting it is not blocked.** `ConversationTag` is `public abstract` and `AseraiTag` is not `sealed`. A derived class only has to change `StringId` to behave as a new tag — but a new tag does not enter `_tags` on its own; check whether [ConversationManager](../ConversationManager) builds that registry from XML or from hard-coded entries before assuming registration is free.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AseraiTag.cs` is a 13-line original-source file: one `using`, one namespace, one class declaration, one `const`, one property, one method. Its entire public surface is `Id` / `StringId` / `IsApplicableTo`. Compare across versions by those three members, not by line count — the 1.3.x and 1.4.6 copies of the same file are decompiled output and are noticeably longer with the same members.

## Dependencies

- Base class and only consumer: [ConversationManager](../ConversationManager) owns the `_tags` dictionary and calls `IsApplicableTo` from `IsTagApplicable` / `GetApplicableTagNames`; the `ConversationTag` base declares only `StringId` and `IsApplicableTo`
- What it reads: the `Culture` property of [CharacterObject](../CharacterObject), which points at a [CultureObject](../CultureObject); `Culture.StringId` is the literal `aserai` from the official XML
- Sibling gates: [AnyNotableTypeTag](../AnyNotableTypeTag), [ArtisanNotableTypeTag](../ArtisanNotableTypeTag), `AmoralTag`, and `BattanianTag` form the culture / status / personality split of the `Conversation.Tags` layer
- Subject under test: [Hero](../Hero) exposes the `CharacterObject` this type accepts via `hero.CharacterObject`
- Trait constant reference: [DefaultTraits](../DefaultTraits) is what the sibling `AmoralTag` depends on; this type does not
- Bucket index: [campaign API section](../)
