---
title: "DialogHelper"
description: "DialogHelper is the campaign conversation-text bridge that matches the current one-to-one character to a GameText and writes the result into MBTextManager."
---
# DialogHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DialogHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## One-sentence responsibility

It uses the active conversation manager and `CharacterObject.OneToOneConversationCharacter` to find a matching text object, then writes that object into the named global text variable for later conversation expansion.

## Mental Model

`DialogHelper` neither creates a conversation nor chooses its character. The caller supplies a variable name and a `gameTextId`; the helper asks `Campaign.Current.ConversationManager` for a matching `TextObject` using the current one-to-one character, then calls `MBTextManager.SetTextVariable`. The conversation system and its text templates consume the variable; the helper owns only this context bridge.

It therefore requires an active conversation context. A missing campaign, missing one-to-one character, or unmatched text can produce an empty result. This is not a general localization loader, and a variable written for one conversation should not be cached outside that conversation.

## When to use and when not to use

- Call `SetDialogString` from a conversation consequence after the current character has been established.
- Pass a registered GameText ID and the exact variable name used by the following conversation template.
- Do not call it before `Campaign.Current` or `CharacterObject.OneToOneConversationCharacter` exists, and do not replace the conversation manager's character matching with this helper.
- Use [StringHelpers](../StringHelpers) when a specific `TextObject` needs character, settlement, or effect variables instead.

## Dependencies

```text
Campaign.Current.ConversationManager
  -> FindMatchingTextOrNull(gameTextId, OneToOneConversationCharacter)
  -> MBTextManager.SetTextVariable(stringVariable, TextObject)
  -> conversation text template
```

- Conversation context: [Campaign](../../campaign/Campaign) and [ConversationSentence](../../campaign/ConversationSentence).
- Text object: [TextObject](../../localization/TextObject); character source: [CharacterObject](../../campaign/CharacterObject).
- Related variable helper: [StringHelpers](../StringHelpers), which builds richer character and settlement variable objects.

## Public members

| Member | Purpose and timing |
|---|---|
| `SetDialogString(string stringVariable, string gameTextId)` | Finds matching GameText for the active one-to-one character and writes the returned `TextObject` into `MBTextManager`; it returns no text and does not change conversation state. |

## Real example

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

if (Campaign.Current != null && CharacterObject.OneToOneConversationCharacter != null)
{
    DialogHelper.SetDialogString("MEETING_RESULT", "str_meeting_result");
}
```

Use this inside a one-to-one conversation consequence. `str_meeting_result` must be a registered, character-matchable text ID, and `MEETING_RESULT` must match the variable name referenced by the conversation template.

## Risks and save boundaries

- The source method has no null guards. Calling it without conversation context can write an empty text object or make later text expansion fail.
- `stringVariable` is a global text-variable name. Reusing a generic name can contaminate later lines in the same conversation; use a module-specific naming convention.
- The write is transient UI/conversation state, not a Campaign save field. Never use it as recoverable gameplay data.
- GameText IDs and character matching belong to localization and conversation data. When replacing a conversation, validate both the template variable and the `ConversationManager` context.

## Version note

The v1.4.5 implementation still calls `FindMatchingTextOrNull` with the active one-to-one character and then writes through `MBTextManager`; it does not create or register a GameText from the ID.

## Navigation

- [↑ API system index](../)
- [↔ StringHelpers](../StringHelpers)
- [Related: ConversationSentence](../../campaign/ConversationSentence)
- [Related: TextObject](../../localization/TextObject)
