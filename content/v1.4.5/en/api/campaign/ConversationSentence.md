---
title: "ConversationSentence"
description: "Auto-generated class reference for ConversationSentence."
---
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationSentence.cs`

## Overview

`ConversationSentence` is **one line of campaign dialogue** — the thing a conversation graph points at, which carries the text, the speaker/listener tokens, the conditions that decide whether it can be offered, and the consequence that runs when it is. The file is 341 lines; the type is `public class ConversationSentence` (`ConversationSentence.cs:13`).

It is not a view-model and it has no `RefreshValues`. It is **XML-deserialised data plus behaviour delegates**, and the two halves are visible in the declaration: nine `public` fields that exist to be populated by the deserialiser (`AgentIndex` `:35`, `NextAgentIndex` `:37`, `IsClickable = true` `:39`, `HintText` `:41`, `OnCondition` `:45`, `OnClickableCondition` `:49`, `OnConsequence` `:53`, `IsSpeaker` `:55`, `IsListener` `:57`) alongside thirteen `{ get; private set; }` properties carrying what the XML supplied (`Text` `:63`, `Index` `:65`, `Id` `:67`, `Priority` `:117`, `InputToken` `:119`, `OutputToken` `:121`, `RelatedObject` `:123`, `IsWithVariation` `:125`, `PersuationOptionArgs` `:127`).

The behaviour surface is a set of **six delegates declared by this class** — `OnConditionDelegate` (`:23`), `OnClickableConditionDelegate` (`:25`), `OnPersuasionOptionDelegate` (`:27`), `OnConsequenceDelegate` (`:29`) and `OnMultipleConversationConsequenceDelegate` (`:31`, used for both `:55` and `:57`) — which is what lets a mod attach code to a dialogue node instead of only editing its text.

## Mental Model

Picture it as **a line on a script that can veto itself**. Unlike an unconditional string, each sentence carries its own gate and its own payoff: `OnCondition` decides whether the line is eligible at all, `OnClickableCondition` decides whether it appears selectable and produces an explanation string when it does not, and `OnConsequence` runs once when it is picked.

Four boolean properties are all the **same mechanism viewed four times**. `IsPlayer`, `IsRepeatable`, `IsSpecial` and `IsUsedOnce` (`:69`, `:81`, `:93`, `:105`) each call the private `GetFlags(DialogLineFlags flag)` (`:165`), which is `(_flags & (uint)flag) != 0`. They are not independent stored booleans; they are four reads of one bitfield, so **`set_flags` on any of them mutates the same `_flags` word as the others** — the setters are `internal`, so only the engine and the deserialiser can write them.

The boundary that decides whether a mod's dialogue mod behaves: **`IsClickable` is a plain public field defaulting to `true`** (`:39`), completely separate from `OnClickableCondition` (`:49`). Setting `IsClickable = false` hides the option; setting `OnClickableCondition` to return `false` greys it out with an explanation. A mod that confuses the two gets an option that is either invisible or visible-but-wrong, and neither is what it asked for.

The second boundary is that **`Variation` does not touch this object**. `public ConversationSentence Variation(params object[] list)` (`:208`) forwards to `Game.Current.GameTextManager.AddGameText(Id).AddVariation((string)list[0], list.Skip(1).ToArray())` (`:210`) and returns `this` (`:211`) — so it registers an alternative rendering of the *text id* globally, and the `IsWithVariation` property (`:125`) is only a flag saying such a registration exists. Calling `Variation` twice for the same id **adds**, it does not replace.

## How to use

**How to obtain it.** Do not `new` it — the conversation manager deserialises sentences from XML via `Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conv…)` (`:253`). To add a line from a mod, register a conversation callbacks type and reference the node; to *inspect* one at runtime you read it off a `ConversationManager`.

**A typical use.** A mod that gates a persuasion line and gives the player a reason when it is unavailable:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

// OnClickableCondition: returning false hides the option and supplies the reason.
sentence.OnClickableCondition = (out TextObject explanation) =>
{
    bool persuasionKnown = Hero.MainHero.GetSkillValue("Trade") >= 40;
    if (!persuasionKnown)
    {
        explanation = new TextObject("{=myModPersuadeHint}You need Trade 40 to make this case.");
        return false;
    }
    explanation = null;
    return true;
};

// OnConsequence: runs once when the line is chosen.
sentence.OnConsequence = () =>
{
    Debug.Print("persuasion line chosen", 0);
};
```

**What to watch out for.** Assuming `IsRepeatable` can be flipped from outside. The single most common mistake is `sentence.IsRepeatable = true;` from a mod — the property has a `private get` and an **`internal set`** (`:81`-`:90`), so the write does not compile from a mod assembly. The consequence of working around it (say, by reflecting or by re-registering the sentence from mod XML) is that you replace the object the conversation manager is holding, and any delegate the engine already bound to the original instance is lost.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `DefaultPriority` | `public const int DefaultPriority = 100;` (`:33`) | The baseline ordering value. Ordering is by `Priority` (`:117`), so a mod line with no explicit priority sorts against 100. |
| `Text` / `Id` / `Index` | `public TextObject Text { get; private set; }` (`:63`), `public string Id { get; private set; }` (`:67`), `public int Index { get; internal set; }` (`:65`) | What the line says and what it is called. **`Id` is what `Variation` registers against** (`:210`), so it must be stable for variations to attach. `Index` is the only one with an `internal set`. |
| `AgentIndex` / `NextAgentIndex` | `public int AgentIndex;` (`:35`), `public int NextAgentIndex;` (`:37`) | Who speaks and who answers, by agent index. **Public mutable fields**, filled by the deserialiser — writing them after the manager has bound the sentence does not re-bind the graph. |
| `IsClickable` | `public bool IsClickable = true;` (`:39`) | Whether the option is offered at all. **A plain field, default `true`**, and independent of `OnClickableCondition`. Setting it false hides the line rather than greying it. |
| `HintText` | `public TextObject HintText;` (`:41`) | The hover/tooltip text shown next to the option. Separate from the `TextObject explanation` that `OnClickableCondition` returns — **two different mechanisms for showing the user why**. |
| `OnCondition` | `public OnConditionDelegate OnCondition;` (`:45`) | Gate for eligibility. Delegate declared at `:23` as `bool OnConditionDelegate()` — **no explanation channel**, so an ineligible line fails silently to the player. |
| `OnClickableCondition` | `public OnClickableConditionDelegate OnClickableCondition;` (`:49`) | Gate for selectability, **with** an explanation. Delegate at `:25`: `bool OnClickableConditionDelegate(out TextObject explanation)`. The `out` parameter is how the "why not" text reaches the UI; returning `false` without writing it gives a silent disable. |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence;` (`:53`) | The payoff. Delegate at `:29`: `void OnConsequenceDelegate()`. Fired by `internal void RunConsequence(Game game)` (`:214`), which is `internal` — the engine drives it, not a mod. |
| `IsSpeaker` / `IsListener` | `public OnMultipleConversationConsequenceDelegate IsSpeaker;` (`:55`), `IsListener` (`:57`) | Agent-specific conditions evaluated **per agent in the conversation**, which is why they share the delegate type at `:31` (`bool …(IAgent agent)`). A mod attaching only `OnCondition` loses the per-speaker half. |
| `HasPersuasion` | `public bool HasPersuasion => _onPersuasionOption != null;` (`:129`) | Whether this line opens the persuasion minigame. **It reads a private field, not the public delegate surface**, so it is a read-only indicator you cannot set from outside. |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs { get; private set; }` (`:127`) | The pre-built arguments for the persuasion flow. **Note the misspelling in the member name (`Persuation`, not `Persuasion`)** — it is the identifier the engine binds, so the typo must be reproduced in any code that names it. |
| `IsPlayer` / `IsRepeatable` / `IsSpecial` / `IsUsedOnce` | `public bool IsPlayer { get; internal set; }` (`:69`), `IsRepeatable` (`:81`), `IsSpecial` (`:93`), `IsUsedOnce` (`:105`) | Four reads of one bitfield, via `private bool GetFlags(DialogLineFlags flag)` (`:165`) = `(_flags & (uint)flag) != 0`. **All four have `internal set`** — a mod cannot flip any of them, and setting one mutates the shared `_flags` word. |
| `DialogLineFlags` (nested) | `public enum DialogLineFlags` (`:15`) | The bitfield those four read. Because the cast is `(uint)flag` (`:166`), flags above `int` range would need a wider word — the enum is the limit. |
| `Priority` / `InputToken` / `OutputToken` | `public int Priority { get; private set; }` (`:117`), `InputToken` (`:119`), `OutputToken` (`:121`) | Ordering and the conversation graph's wiring. `private set` on all three: **the deserialiser is the only writer.** |
| `RelatedObject` / `IsWithVariation` | `public object RelatedObject { get; private set; }` (`:123`), `public bool IsWithVariation { get; private set; }` (`:125`) | The subject the line is about, and whether a text variation was registered for its `Id`. **The flag records that a variation exists, it does not hold it** — the variation lives in the game-text manager. |
| `SkillName` / `TraitName` | `public string SkillName` (`:131`), `public string TraitName` (`:143`) | The skill / trait this line keys off, resolved to a display string. Return `null`-able values when the hero has neither, so a mod must handle the "no skill" case rather than assuming one is set. |
| `CurrentProcessedRepeatObject` / `SelectedRepeatObject` / `SelectedRepeatLine` | three `public static` properties at `:159`, `:161`, `:163` | **Static**, and each dereferences `Campaign.Current.ConversationManager` without a null check. Readable only inside a live campaign with a conversation manager present. |
| `Variation` | `public ConversationSentence Variation(params object[] list)` (`:208`) | Registers a text variation for this sentence's `Id` via `Game.Current.GameTextManager.AddGameText(Id).AddVariation((string)list[0], list.Skip(1).ToArray())` (`:210`) and returns `this` (`:211`). **Adds rather than replaces**, so repeated calls accumulate. |
| `Deserialize` | `public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conv…)` (`:253`) | The XML loader — the intended way a sentence comes into existence. Takes the callback type explicitly, which is how a mod's delegate type gets bound. |
| `SetObjectsToRepeatOver` | `public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepe…)` (`:336`) | Supplies the object pool that `IsRepeatable` lines cycle through. Static and session-wide; the `maxRepeat…` parameter is truncated in this view. |

## Examples

Attach the two gates and the payoff to a sentence the conversation manager already holds:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

ConversationSentence sentence = manager.GetSentence(sentenceId);

sentence.OnCondition = () =>
{
    // No explanation channel here: a false result is silent to the player.
    return Campaign.Current.ConversationManager != null;
};

sentence.OnClickableCondition = (out TextObject explanation) =>
{
    explanation = null;
    return true;
};

sentence.OnConsequence = () =>
{
    Debug.Print("line " + sentence.Id + " chosen", 0);
};
```

Gate a line per speaker, which needs the agent-taking delegate rather than the plain one:

```csharp
using TaleWorlds.CampaignSystem;

sentence.IsSpeaker = (IAgent agent) =>
{
    // Evaluated once per agent in the conversation, not once for the line.
    return agent != null;
};
```

Check whether a line opens the persuasion minigame before wiring a persuasion handler:

```csharp
using TaleWorlds.CampaignSystem;

if (sentence.HasPersuasion)
{
    Debug.Print("persuasion args ready = " + (sentence.PersuationOptionArgs != null), 0);
}
else
{
    Debug.Print("plain line, no persuasion flow", 0);
}
```

## Risks and crash boundaries

- **`IsPlayer` / `IsRepeatable` / `IsSpecial` / `IsUsedOnce` cannot be written by a mod.** All four have `internal set` (`:69`-`:116`). Trying compiles to an error; working around it by re-registering the sentence from mod XML discards the delegates the engine already bound.
- **The four booleans share one bitfield.** `GetFlags` (`:165`) reads `_flags & (uint)flag`. They are not independent — any internal write to one changes the word all four read.
- **`IsClickable` and `OnClickableCondition` are different mechanisms.** `IsClickable = false` (`:39`) hides the option; `OnClickableCondition` returning `false` (`:49`) disables it with an explanation. Substituting one for the other produces an invisible line or a wrongly-enabled line.
- **`OnCondition` has no explanation channel.** `OnConditionDelegate()` takes no arguments (`:23`), so a mod gating eligibility this way cannot tell the player why.
- **`Variation` accumulates.** `AddVariation(...)` (`:210`) adds; there is no replace. Repeated calls for the same `Id` grow the game-text entry.
- **`HasPersuasion` reads a private field** (`:129`), so it cannot be forced true from outside; setting a persuasion delegate is the only route and the field is not public.
- **The three static properties dereference `Campaign.Current.ConversationManager`** (`:159`, `:161`, `:163`) with no null guard — reading them outside a live campaign is a null dereference.
- **`PersuationOptionArgs` is misspelled in the source** (`:127`, and again at `:27` for the delegate type). The identifier must be reproduced exactly.
- **`Deserialize` is the real constructor.** (`:253`) There is no public constructor; a `new ConversationSentence()` would produce an instance with no `Id`, no tokens and no `Text`, which the manager will not route.
- **Not a save participant.** Conversation state lives on `ConversationManager`; the sentence is static XML data.

## Cross-Version Notes

The v1.4.5 file is 341 lines. The same-named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/` keeps the same delegate set and the same `DialogLineFlags` bitfield design, and `bannerlord-1.5.3` retains the shape. **The `DialogLineFlags` bit positions are the cross-version risk**: `GetFlags` masks with `(uint)flag` (`:166`), so inserting a flag in the middle of the enum silently reinterprets every saved conversation graph.

## Dependencies

- Owner and driver: `ConversationManager` in `TaleWorlds.CampaignSystem.Conversation`, reached by all three static properties (`:159`-`:163`) and passed to `Deserialize` (`:253`).
- Text registry behind `Variation`: `Game.Current.GameTextManager.AddGameText(Id).AddVariation(...)` (`:210`).
- Persuasion payload: `PersuasionOptionArgs` in `TaleWorlds.CampaignSystem.Persuasion`, and `PersuasionArgument`/`PersuasionOptionResult` on the campaign side.
- Per-agent condition type: `IAgent` in `TaleWorlds.MountAndBlade` (`:31`).
- Localization: `TextObject` in `TaleWorlds.Localization` (`:41`, `:63`, `:163`).
- Skill and trait lookups: `Hero` in `TaleWorlds.CampaignSystem`, resolved by the `SkillName` (`:131`) and `TraitName` (`:143`) getters.
- Combat entry point that opens the persuasion flow: [`ConversationHelper`](../ConversationHelper).
- Bucket index: [campaign API](../)
