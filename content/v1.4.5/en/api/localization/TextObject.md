---
title: "TextObject: localized templates, variables, and deferred rendering"
description: "Create a TextObject from a text key or raw template, attach local variables, and render its final display string through MBTextManager in the active language. Covers caching, saves, nested variables, link markers, and UI/Campaign boundaries."
---

# TextObject: localized templates, variables, and deferred rendering

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## Overview

**One-sentence responsibility:** Hold a localization key or raw text template with local variables, then resolve it into a string through the active language and text grammar only when it is displayed.

`TextObject` is neither an already translated `string` nor a replacement for the global text table. It carries deferred display meaning between Campaign code, Gauntlet ViewModels, and hints: its template can contain a `{=id}` key, `{NAME}` variables, conditions, and grammar markers, while `ToString()` lets the active language's translation, variables, and processor decide what reaches the screen.

## ↑ Parent

- [Localization](../)

## ↔ Sibling

- [MBTextManager](../MBTextManager)
- [TextProcessingContext](../TextProcessingContext)
- [TextGrammarProcessor](../TextGrammarProcessor)
- [LocalizedTextManager](../LocalizedTextManager)

## Related

- [Army](../../campaign/Army) - a real Campaign caller that returns status text with variables
- [TextProcessor token model](../MBTextToken) - runtime token data for the template in the active language

## Dependencies

`TextObject` gives its raw `Value` and local `Attributes` to [MBTextManager](../MBTextManager) for active-language lookup and rendering. [TextProcessingContext](../TextProcessingContext) coordinates variable lookup, nested expansion, and grammar context, while [MBTextToken](../MBTextToken) represents the template's runtime tokenization. These are display-path dependencies; business code should not bypass them by manually assembling the final string.

## Mental model: template data first, display string last

Treat a display operation as this lifecycle:

```text
key / raw Value + local Attributes variables
        -> MBTextManager.GetLocalizedText(Value)
        -> active-language token cache and TextProcessor grammar parsing
        -> language processor (plural, gender, and similar rules)
        -> final string
```

1. The constructor stores the supplied text in `Value`. It may be raw text or a `{=textId}` key into the translation table; it is not displayed yet.
2. `SetTextVariable` stores a string, number, or another `TextObject` in this object's own `Attributes`. Those local values take precedence over a same-named global text-context variable.
3. `ToString()` obtains the text for the active language, resolves the template and nested variables, then lets that language's processor apply grammatical rules. The same object can therefore produce different strings after a language change.
4. The cache holds **template tokens** for the active language, not a finished string. The internal lookup retokenizes when `cachedTextLanguageId` differs from the active language.

This makes `TextObject` the right way to hand display meaning from game logic to the UI. It is the wrong abstraction for a display result that should silently track later language, variable, or game-state changes after it has already become a `string`.

## When to use it, and when not to

**Use it when:**

- Text must be rendered in the player's current language, or needs `{HERO_NAME}`, `{COUNT}`, conditions, plurals, or other template grammar.
- A business API should return display meaning rather than immediately display it, such as Army status, a disabled reason, a hint, or a ViewModel field.
- One template will be rendered with different variables. Start with `CopyTextObject()`, then set variables on the copy so a shared template is not modified.

**Do not use it when:**

- You only need a fixed, non-localized internal key or log datum. Use an explicit `string`; do not make it depend on `ToString()` and the language context.
- You need a stable display result to survive a language switch. Save the key/template and business data, rebuild a `TextObject`, and render when it is displayed.
- You mean to set a cross-object global variable for the entire text processor. That is [MBTextManager](../MBTextManager)'s `SetTextVariable` / `ClearAll` context, not this object's `Attributes`; global state affects later processing in that context, so local variables are usually safer.

## Real call sites

### Campaign: Army returns a status template with an object name as a local variable

`TaleWorlds.CampaignSystem/Army.cs`, in `GetBehaviorText`, creates a siege template and puts `LeaderParty.BesiegedSettlement.Name` in `TARGET_SETTLEMENT`. The caller can keep the `TextObject` and let the eventual UI choose when to convert it to a string.

```csharp
TextObject behaviorText = new TextObject("{=JTxI3sW2}Besieging {TARGET_SETTLEMENT}.");
behaviorText.SetTextVariable("TARGET_SETTLEMENT", LeaderParty.BesiegedSettlement.Name);
return behaviorText;
```

This is not string concatenation: `Settlement.Name` is itself localizable, so the nested object can resolve during the same processing pass. Check that `BesiegedSettlement` is not `null`; the game source reaches this code only from the siege branch.

### Gauntlet ViewModel: copy a shared template before filling frame-specific values

`CampaignOptionData.cs` copies the result of `GameTexts.FindText("str_string_newline_string")`, sets two text variables, and renders immediately. The copy matters because `SetTextVariable` mutates its receiver.

```csharp
TextObject combinedText = GameTexts.FindText("str_string_newline_string").CopyTextObject();
combinedText.SetTextVariable("STR1", text);
combinedText.SetTextVariable("STR2", campaignOptionDisableStatus.Value.DisabledReason);
text = combinedText.ToString();
```

`ClanFinanceWorkshopItemVM.RefreshStoragePercentages` provides another UI example: it repeatedly sets `NUMBER` to 0, 25, 50, 75, and 100 on one template, renders after each change, and assigns each result to a selector item. That pattern is safe only when the template is ViewModel-private; copy a `GameTexts.FindText` result before using it across consumers.

## State, saves, and caching

| Member | Purpose and timing | Side effects and boundaries |
|---|---|---|
| `Value` | The raw template or keyed text; set by constructors and sometimes read or changed by older code. | It is `SaveableField(1)`, so it is saved. It is not the active-language display string; writing it directly does not automatically invalidate a token cache already made for the same language. Prefer a new object, or call `CacheTokens()` only when that is genuinely required. |
| `Attributes` | Stores per-object variables through `SetTextVariable`; can be read to inspect bound keys. | It is `SaveableProperty(2)`, so the dictionary and its values must be types the save system can handle. The dictionary is mutable; editing it changes the template instance. Do not put short-lived UI objects or values unsupported by SaveSystem into text intended to live in a save. |
| `Length` | Read when you need the length of the raw template. | Returns `Value?.Length ?? 0`; it does not measure translation, substitutions, markup, or rendered display width. |
| `IsLink` | Read when UI code needs to recognize encyclopedia-link text. | It is true only when `Value` starts with the exact `"{=!}{.link}"` prefix. It neither parses rendered text nor verifies that a link variable was supplied. |
| `GetEmpty()` / `IsEmpty()` / `IsNullOrEmpty()` | Produce or test the no-text sentinel before passing optional descriptions to UI or composition code. | `GetEmpty()` has both `Value` and `Attributes` set to `null`. `IsEmpty()` is true only when `Value` is empty and attributes are `null` or empty; an object with variables but no template is not empty. The static form also handles a `null` reference. |
| `GetDepth(maxDepth)` | Estimate nesting depth in `Attributes` before recursive text processing. | It visits only `TextObject` values in attributes and caps the result at `maxDepth`. It skips a direct self-reference, but is not a complete detector for arbitrary reference cycles. |

### Save behavior and language switches

`Value` and `Attributes` are saveable state. `cachedTokens` and `cachedTextLanguageId` are `CachedData`; they are not a saved or session-independent display result. On load, `OnLoad` assigns a new internal ID. After a language change, token lookup compares the active language index and retokenizes, but ordinary strings previously put into a ViewModel remain in the old language until that ViewModel follows its own `RefreshValues` or refresh path and renders again.

Directly changing `Value` adds another hazard: the cache key compares language, not `Value`. Reusing an object in one language after changing its template can continue parsing old tokens. Public mutability does not make direct template replacement a safe update strategy.

## Variables, rendering, and identity members

| Member | Purpose and timing | Side effects and boundaries |
|---|---|---|
| `SetTextVariable(tag, TextObject|string|float|int)` | Bind a local value for `{TAG}`; chain it while constructing hints, statuses, and option text. | The first call creates `Attributes`; a repeated tag overwrites its old value. The `float` overload rounds to the specified decimal count before storing it. Passing another `TextObject` defers nested resolution instead of freezing a string now. |
| `GetVariableValue(tag, out variable)` | Used by TextProcessor to resolve a parent text's local variable; useful when diagnosing a custom template binding. | Supported values are converted to `TextObject`; source explicitly handles `string`, `int`, `float`, and `TextObject`, while other objects can produce `null`. It recursively searches that value using the same tag only when the converted `TextObject.Value == ""` and `Attributes != null`; `Value == null` does not satisfy that condition and returns `true` directly. Avoid cyclic or pathological nesting by design. |
| `CacheTokens()` | Prewarm tokens for the active language when a stable template will be rendered repeatedly and immediately. | Replaces the current cached tokens and language ID. Manual use is usually unnecessary because first processing loads lazily; it neither calculates a final string nor refreshes strings already stored by a UI. |
| `ToString()` | The normal final step before giving text to UI, a tooltip, or a log. | Calls `MBTextManager.ProcessTextToString(this, true)`: localization, grammar processing, then clearing language-processor temporary data. Exceptions are caught, debug-printed, and returned as an error string containing the ID and active language, so tests must not mistake that visible error for a valid translation. |
| `ToStringWithoutClear()` | Use only while one text-processing sequence must retain language-processor temporary data; `TextProcessingContext` uses it to continue parsing a variable. | Uses the same processing pipeline without clearing temporary language data. It should not replace `ToString()` for ordinary UI display, or temporary grammar state can leak into later processing. |
| `AddIDToValue(id)` / `GetID()` | The first adds a `{=id}` prefix to an unkeyed raw `Value`; the second extracts that ID for diagnostics, debugging, or an error display. | `AddIDToValue` directly changes saved `Value`, and acts only when the template does not already start with `{=` and does not contain the supplied ID. Do not use it on keyed, shared, or cached templates. `GetID()` reads only an initial `{=...}` form; raw text returns an empty string. |
| `CopyTextObject()` | Make a working copy from `GameTexts.FindText` or a long-lived template before binding independent variables. | It copies the dictionary container but does not deep-copy nested objects; cached token list and cached language ID are also carried over. Mutating a nested `TextObject` can still affect both copies. |
| `Equals(TextObject)` / `Equals(object)` | Compare template value and attributes when that structural comparison is actually intended. | It compares `Value`, then either the same attributes dictionary or its enumeration sequence; it is not a comparison of current rendered text. `GetHashCode()` uses the internal ID rather than that structural content, so do not use potentially equal `TextObject` values as stable `Dictionary` or `HashSet` content keys. |

`Format(float)` is a legacy shortcut: it writes the formatted value to global `MBTextManager` variable `A0`, then renders a new object holding the same `Value`. It does not copy this object's `Attributes` and has global-context side effects. Explicit `SetTextVariable` calls are more predictable in new code.

## Failure boundaries and troubleshooting order

1. When a variable does not render, first verify tag spelling and case between the template and `SetTextVariable`, then verify the value was bound before `ToString()`. TextProcessingContext emits an error text for a missing variable; it cannot infer a value from a game object.
2. When nested templates recurse unexpectedly, inspect `Attributes` for indirect cycles such as A -> B -> A. `GetDepth` does not reliably eliminate them.
3. When text stays in the old language, determine whether the UI cached a plain `string`. Rebuild or refresh the ViewModel display field; an existing string does not react to `MBTextManager.ActiveTextLanguage`.
4. When values bleed between apparently separate UI uses, check whether code called `SetTextVariable` directly on a `GameTexts.FindText` result. Use `CopyTextObject()` on paths with more than one consumer.
5. When `Error at id:` appears, inspect the debug output for the exception caught by `ToString`, then check the translation and template grammar in that language. The API's catch-and-return behavior hides the normal exception path.

## Working rule

Keep a `TextObject` at the boundary between game logic and UI, and call `ToString()` as late as practical. Let business code return the template and data, then let a ViewModel bind variables and render during refresh. That preserves current-language grammar and fresh game data without accidentally writing a localized display result back into save state.
