---
title: "StringHelpers"
description: "StringHelpers is the Bannerlord text-variable and string-normalization utility for writing CharacterObject, Settlement, and effect values into TextObject or repeatable dialogue lines."
---
# StringHelpers

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class StringHelpers`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## One-sentence responsibility

It turns characters, settlements, and effect increments into variables for localized text while also providing CamelCase, snake_case, and diacritic normalization; these methods mainly change transient text state, not campaign entities.

## Mental Model

`StringHelpers` has two boundaries. `SplitCamelCase`, `CamelCaseToSnakeCase`, and `RemoveDiacritics` are pure string transforms. `SetCharacterProperties`, `SetSettlementProperties`, `SetRepeatableCharacterProperties`, and `SetEffectIncrementTypeTextVariable` write to a parent `TextObject`, `MBTextManager`, or `ConversationSentence.SelectedRepeatLine`. The same tag therefore has different lifetimes depending on its target, and a returned `TextObject` does not make the write location irrelevant.

The character group includes `NAME`, `GENDER`, and `LINK`; for heroes, `includeDetails` can add `FIRSTNAME`, `AGE`, `FACTION`, and `CLAN`. The settlement group includes `NAME` and `LINK`. These are values read from the objects at call time, not saved references to those objects.

## When to use and when not to use

- Use `SetCharacterProperties` or `SetSettlementProperties` to build reusable localized-text variables, preferably with a parent `TextObject` to keep the scope local.
- Use `SetRepeatableCharacterProperties` or `isRepeatable: true` only inside a repeatable conversation-line handler because they write to `ConversationSentence.SelectedRepeatLine`.
- Use `SetEffectIncrementTypeTextVariable` for additive or factor effects; `AddFactor` multiplies the bonus by 100 before formatting it.
- Do not treat text variables as save fields, and do not call repeat-line entries without an active selected repeat line. World changes belong to entity or Action APIs.

## Dependencies

```text
CharacterObject / Settlement
  -> StringHelpers property builders
  -> TextObject / MBTextManager / ConversationSentence.SelectedRepeatLine
  -> localized dialogue, notifications, encyclopedia text
```

- Input entities: [CharacterObject](../../campaign/CharacterObject), [Hero](../../campaign/Hero), and [Settlement](../../campaign/Settlement).
- Text targets: [TextObject](../../localization/TextObject) and [ConversationSentence](../../campaign/ConversationSentence).
- Conversation entry: [DialogHelper](../DialogHelper); it finds text while `StringHelpers` fills its variables.

## Public members

| Member | Purpose and side effect |
|---|---|
| `SplitCamelCase` | Inserts spaces at lower-to-upper and word-start boundaries and returns a new string. |
| `CamelCaseToSnakeCase` | Converts CamelCase and numeric boundaries to lowercase underscore form and returns a new string. |
| `SetSettlementProperties` | Builds `NAME` and `LINK` variables for a settlement and writes them to a parent, the global text manager, or a repeat line. |
| `SetRepeatableCharacterProperties` | Builds character variables and writes them to `ConversationSentence.SelectedRepeatLine`; it is repeat-line-only. |
| `SetCharacterProperties` | Builds character variables, writes them to a parent or `MBTextManager`, and returns the variable `TextObject`. |
| `SetEffectIncrementTypeTextVariable` | Formats `bonus` according to `EffectIncrementType`, including a signed value; factor effects are displayed as percentages. |
| `RemoveDiacritics` | Uses Unicode decomposition to remove non-spacing marks and normalizes back to Form C; it is for comparison/search, not display replacement. |

## Real example

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

Hero hero = Hero.MainHero;
TextObject notification = new TextObject("{=helper_example}Welcome, {HERO.NAME}.");
StringHelpers.SetCharacterProperties("HERO", hero.CharacterObject, notification, includeDetails: true);
```

The variables are written to the local `notification`, so `{HERO.NAME}` is scoped to that `TextObject`. Omitting `parent` would write to the global `MBTextManager` table and has a different pollution and lifetime risk.

## Risks and save boundaries

- With no `parent`, character or settlement variables enter global `MBTextManager`; reusing generic tags can contaminate later notifications or dialogue.
- `SetRepeatableCharacterProperties` and `isRepeatable: true` require a selected repeat line. Calling them outside the conversation flow reaches an invalid `SelectedRepeatLine` context.
- `includeDetails` reads hero faction, clan, and age. Do not turn those values into durable state while the object is loading, unregistered, or about to be replaced.
- `RemoveDiacritics` is for comparison and search. Display text should keep the original localized string; the method does not modify a `TextObject` or character name.

## Version note

In v1.4.5, `SetEffectIncrementTypeTextVariable` formats `EffectIncrementType.AddFactor` as a percentage while other types use the raw bonus. Do not multiply the factor by 100 again in the caller.

## Navigation

- [↑ API system index](../)
- [↔ DialogHelper](../DialogHelper)
- [Related: TextObject](../../localization/TextObject)
- [Related: CharacterObject](../../campaign/CharacterObject)
