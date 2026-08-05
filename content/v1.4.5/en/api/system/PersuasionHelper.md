---
title: "PersuasionHelper: localized persuasion result text"
description: "PersuasionHelper returns localized success and reaction TextObjects for campaign conversation code in v1.4.5; it does not own the conversation UI or outcome mutation."
---
# PersuasionHelper

**Namespace:** `Helpers`
<br>**Module:** `TaleWorlds.CampaignSystem`
<br>**Type:** `public static class PersuasionHelper`
<br>**Base:** `System.Object`
<br>**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## One-sentence responsibility

`PersuasionHelper` is a very small localization boundary that supplies `TextObject` values for persuasion option success text and default reactions; conversation behaviors still own presentation and consequences.

## Mental Model

The method names sound more active than the v1.4.5 implementation is. `GetDefaultPersuasionOptionReaction` maps a `PersuasionOptionResult` to a localized response, with a random choice for the default branch. `ShowSuccess` accepts a `PersuasionOptionArgs` and a `showToPlayer` flag but currently returns `TextObject.GetEmpty()` without displaying anything. The caller builds the conversation line, assigns text variables, and decides what a success or failure does.

## When to use and when not to use

- Use `GetDefaultPersuasionOptionReaction` when a conversation or issue behavior needs a localized reaction for the last persuasion result.
- Use `ShowSuccess` only where the v1.4.5 caller expects a `TextObject` for a success-chance variable; the current result is empty and must not be treated as a visible probability string.
- Do not use this helper to start a conversation, select a persuasion option, block options, change relation, or complete an Issue. Those transitions remain in the conversation or campaign behavior.
- Do not persist the returned `TextObject`; it is presentation data whose language and variables belong to the current UI context.

## Dependencies and call chain

```text
ConversationManager / Issue behavior
          |
          v
PersuasionOptionResult or PersuasionOptionArgs
          |
          v
PersuasionHelper -> TextObject -> MBTextManager variable -> conversation line
```

- [`Hero`](../../campaign/Hero) and conversation behaviors provide the live interlocutor and campaign context; the helper does not discover or own them.
- [`CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) and [`CampaignEvents`](../../campaign/CampaignEvents) are lifecycle owners for the issue/conversation behavior that consumes the text.
- [`TextObject`](../../localization/TextObject) is the output value; it is not a replacement for a saved persuasion result or Action.

## Public members by contract

| Member | Source-confirmed behavior |
|---|---|
| `ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)` | Returns `TextObject.GetEmpty()` in this source. The arguments and flag do not trigger a UI display or calculate a success value here. |
| `GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)` | Returns localized text for critical success, failure/miss, and critical failure. Other values randomly choose one of two neutral positive/observational responses using `MBRandom.RandomFloat`. |

## Real example: assign the reaction through the caller's text pipeline

This mirrors the issue behavior call site: the conversation code obtains the result, asks the helper for text, and assigns the text variable. The helper does not block options or mutate the Issue:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Persuasion;
using TaleWorlds.Localization;

public static TextObject BuildPersuasionReaction(PersuasionOptionResult result)
{
    Hero conversationHero = Hero.OneToOneConversationHero;
    if (conversationHero == null)
    {
        return TextObject.GetEmpty();
    }

    return PersuasionHelper.GetDefaultPersuasionOptionReaction(result);
}
```

In the real `SmugglersIssueBehavior` and `MerchantArmyOfPoachersIssueBehavior` paths, the returned value is passed to `MBTextManager.SetTextVariable("PERSUASION_REACTION", reaction)`. Their behavior then decides whether a critical failure blocks all options. That decision is outside `PersuasionHelper`.

## Result and localization boundaries

The default mapping is `CriticalSuccess` to a concession reaction, `Failure` or `Miss` to a refusal, and `CriticalFailure` to a stronger refusal. Any other enum value takes one of two localized neutral responses at random. Since the random branch is presentation text, it must not be used as a deterministic gameplay signal.

`ShowSuccess` is especially important for version audits: its name suggests a rendered success value, but this v1.4.5 body returns an empty `TextObject`. A caller may still place that object into a text variable, as the issue behaviors do, but the resulting line receives no value from this helper.

## Risks and save boundaries

- `GetDefaultPersuasionOptionReaction` uses `MBRandom.RandomFloat` for its default branch, so repeated reads can produce different text.
- `Hero.OneToOneConversationHero` and conversation manager state are caller-owned and can be null outside an active conversation.
- `TextObject` localization is language/context-sensitive; do not convert it to a durable save field or assume its rendered string is stable across languages.
- The helper does not apply relation changes, quest progress, persuasion cooldowns, or option blocking. Those effects belong to the surrounding Issue or conversation behavior.

## Version note

This page follows v1.4.5 `PersuasionHelper.cs`, where `ShowSuccess` returns an empty `TextObject` and default reactions use the listed localization IDs and random fallback. Recheck this behavior before relying on the method name in another build.

## Navigation

- [↑ API system index](../)
- [↔ MenuHelper](../MenuHelper)
- [↔ PerkHelper](../PerkHelper)
- [Related: Hero](../../campaign/Hero)
- [Related: CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)
- [Related: CampaignEvents](../../campaign/CampaignEvents)
- [Related: TextObject](../../localization/TextObject)
- [中文页面](../../../../zh/api/system/PersuasionHelper)
