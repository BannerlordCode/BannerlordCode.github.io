---
title: "TextObject"
description: "Bannerlord's unified container for a piece of localizable text — hero names, item names, quest descriptions, system messages, and UI strings are all TextObjects under the hood. It holds a localization id plus a named variable table, and the real translation and token substitution happen at ToString() call time."
---

# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** `System.Object`
**Source:** TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs

## Overview

`TextObject` is the single, uniform carrier for "a piece of text" everywhere in the game: hero names, item names, quest descriptions, system messages, and UI strings are all `TextObject` underneath. Internally it holds exactly two things — a `string Value` field (the raw template) and a `Dictionary<string, object> Attributes` (the variable-substitution table). The actual "translation" and "variable fill" does **not** happen inside `TextObject`; it happens when `ToString()` is called, driven by `MBTextManager`: `MBTextManager.GetLocalizedText` first resolves any `{=id}` in `Value` to the current language's text, then `MBTextManager.Process` replaces the `{token}` placeholders with the values from `Attributes`. Think of it as a *text template awaiting resolution* rather than a finished string — the final result is produced only at the moment `ToString()` runs. Nearly every mod that shows text to the player (notifications, menus, dialogue, tooltips) uses it directly or indirectly.

## Mental Model

Treat `TextObject` as a **"localization string template with placeholders"**, not as a `string`:

- Its `Value` usually looks like `"{=abc1234}Hello {NAME}"`. The `{=abc1234}` is the localization id, `Hello` is the English fallback text, and `{NAME}` is a runtime variable.
- It **does not store language data itself**. The language packs live in `LocalizedTextManager` (official/mod XML) and `GameTextManager` (the `GameText` XML table); `TextObject` merely *references and fills* them.
- In most cases you **do not need to `new` one yourself**: read a hero name via `Hero.MainHero.Name`, an item name via `ItemObject.Name`, and a module's custom string via `GameTexts.FindText("your_id")`. Only write an inline `{=...}` template when you need to build a one-off message with variables.
- **Do not take the shortcut of storing a raw `string`**. If you later need translation, per-language pluralization, or injected links, `TextObject` reuses the whole localization pipeline for free; a raw `string` bypasses all of it.
- Resolution happens at `ToString()` call time, against the **currently active language** (`MBTextManager.ActiveTextLanguage`). Calling `GameTexts.FindText` before the game/language data is loaded returns wrong text rather than crashing.
- `TextObject` is **not immutable**: `SetTextVariable` mutates in place and returns `this`. Reusing the same instance as a template and filling it repeatedly will clobber variables — `CopyTextObject()` before sharing or caching.

## When to Use / When NOT to Use

**Use `TextObject` when:**
- Displaying any player-facing text: notifications (`InformationManager.DisplayMessage`), tooltips, menu entries, quest logs, dialogue lines.
- You have variables to inject (`{HERO}`, `{GOLD}`) or want language fallback for free.
- You want to reference a `GameText` entry by id via `GameTexts.FindText` so the mod stays translatable.

**Do NOT use `TextObject` (or prefer another path):**
- **Do not store raw `string`** for UI/encyclopedia text. A raw `string` skips `{=id}` lookup and `{token}` substitution, so it can never be translated and silently keeps whatever literal you typed. Always wrap in `TextObject` / `GameTexts.FindText`.
- **Do not `new TextObject("str_my_id")`** by passing the bare id as the value. A string that does not begin with `{=` is treated as literal text and is never looked up in the library. Acquire library text via `GameTexts.FindText("str_my_id")` instead.
- **Do not mutate a shared template in place.** If a `TextObject` is cached or shared (e.g. a tooltip label rebuilt every frame), call `CopyTextObject()` before `SetTextVariable`, otherwise every consumer overwrites the same `Attributes`.
- **Do not use `TextObject` as a dictionary key.** `GetHashCode` is based on a per-instance internal id (`CopyTextObject` assigns a fresh one), so two content-equal objects hash differently and `Equals` also compares `Attributes`.

## How to Obtain

```csharp
// 1) Look up by module localization-library id (safest, most common) —
//    the string is defined in the module's GameText XML under ModuleData
TextObject greeting = GameTexts.FindText("str_my_message");
TextObject lordVariant = GameTexts.FindText("str_my_message", "lord"); // a specific variation

// 2) Pull from an existing object (hero/clan/item names are already TextObjects)
TextObject heroName = Hero.MainHero.Name;
TextObject itemName = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1").Name;

// 3) Construct an empty text placeholder
TextObject empty = TextObject.GetEmpty();
```

The constructor `TextObject(string value, Dictionary<string,object> attributes = null)` (plus `int` / `float` overloads) does exist, so you can inline `new TextObject("{=yourid}English fallback {TAG}")` to build a template directly. **Key rule:** the string must start with `{=` to enter the localization library, otherwise it is stored as literal text. In day-to-day mod code, prefer `GameTexts.FindText` / existing objects over scattering inline ids.

## Key Properties

| Property | Type | Notes |
|----------|------|-------|
| `Value` | `string` (public field, `[SaveableField(1)]`) | The raw template. Starting with `{=id}` denotes a localization entry; otherwise it is literal text. `Value == null` means the object is empty. |
| `Attributes` | `Dictionary<string, object>` (`[SaveableProperty(2)]`, read-only getter) | The text variable table. Keys are placeholder tags like `NAME`/`FACTION`; values are `string`, `int`, `float`, or another `TextObject`, written via `SetTextVariable`. |
| `Length` | `int` | Character length of `Value`; returns 0 when `Value` is `null`. |
| `IsLink` | `bool` | True only when `Value` starts with `"{=!}{.link}"`, marking the text as a clickable link (e.g. a reference inside an item tooltip). |

## Key Members

### Creating and Empty Checks

#### `public static TextObject GetEmpty()`
**Purpose:** Produces a `TextObject` whose `Value` is `null`, used as a safe "no text yet" placeholder before a query or conditional render, avoiding null references.

```csharp
TextObject t = TextObject.GetEmpty();
bool isBlank = TextObject.IsNullOrEmpty(t); // true
```

#### `public bool IsEmpty()` / `public static bool IsNullOrEmpty(TextObject obj)`
**Purpose:** Decides whether the object truly has no content — `IsEmpty` is true when `Value` is the empty string and `Attributes` is empty; `IsNullOrEmpty` additionally treats a `null` `obj` as empty. Commonly used in dialogue/quests to decide whether a piece of text is worth showing.

```csharp
if (!TextObject.IsNullOrEmpty(questLogText))
{
    InformationManager.DisplayMessage(new InformationMessage(questLogText.ToString()));
}
```

### Resolving to the Final String (core)

#### `public override string ToString()`
**Purpose:** Resolves the template under the active language into the final display string: first translates via `{=id}`, then replaces `{TOKEN}` placeholders with the `Attributes` values. On resolution failure it returns `"Error at id: <id>. Lang: <language>"` and logs — it does not crash the caller. An empty object returns `""`.

```csharp
TextObject t = GameTexts.FindText("str_you_met"); // module GameText: "{=xyz}You met {HERO}"
t.SetTextVariable("HERO", Hero.MainHero.Name);
InformationManager.DisplayMessage(new InformationMessage(t.ToString()));
```

#### `public string ToStringWithoutClear()`
**Purpose:** Resolves the same way as `ToString`, but passes `shouldClear: false` to the language processor. Used by internal pipelines that need to `Process` repeatedly within one resolution flow. For ordinary UI display, use `ToString()`.

```csharp
TextObject log = GameTexts.FindText("str_battle_result"); // "{=b}{HERO} won the field"
log.SetTextVariable("HERO", Hero.MainHero.Name);
string rendered = log.ToStringWithoutClear(); // does not clear the global processor, so it can Process again later the same frame
```

#### `public void CacheTokens()`
**Purpose:** Pre-tokenizes and caches the current language's localization text into `cachedTokens` (recording `cachedTextLanguageId`) — a warm-up for frequently refreshed `ViewModel`/HUD paths so every `ToString()` does not re-run `Tokenizer.Tokenize`. The cache auto-expires when the language changes because `cachedTextLanguageId` no longer matches.

```csharp
TextObject label = GameTexts.FindText("str_scoreboard_title");
label.CacheTokens(); // warm up before entering a per-frame HUD loop
```

#### `public string Format(float p1)`
**Purpose:** One-shot formatting of a single float: writes `p1` (rounded to 1 decimal) into the **global** variable `A0`, then returns `ToString()` of a fresh `TextObject` built from the current `Value`. Note it operates on the `MBTextManager` global context, not this object's `Attributes`.

### Text Variables

#### `SetTextVariable(string tag, TextObject variable)` / `(string tag, string variable)` / `(string tag, float variable, int decimalDigits = 2)` / `(string tag, int variable)`
**Purpose:** Binds a `{TOKEN}` placeholder in the text to a concrete value and writes it into `Attributes`. The `float` overload rounds to `decimalDigits` (default 2) before storing. A `TextObject` value such as `Name` is expanded recursively during resolution. It **mutates in place and returns itself** — it does not produce a new copy.

```csharp
TextObject title = GameTexts.FindText("str_kingdom_wealth"); // "{=k}Warchest of {KINGDOM}: {GOLD}{GOLD_ICON}"
title.SetTextVariable("KINGDOM", Hero.MainHero.MapFaction.Name)
     .SetTextVariable("GOLD", Hero.MainHero.Gold)
     .SetTextVariable("GOLD_ICON", "{=!}<img src=\"General\\Icons\\Coin@2x\" extend=\"8\">");
```

> Real reference: `TaleWorlds.CampaignSystem`'s `AllianceCampaignBehavior` fills diplomatic documents with exactly this pattern — `textObject.SetTextVariable("KINGDOM_NAME", offeringKingdom.Name)`.

#### `public bool GetVariableValue(string tag, out TextObject variable)`
**Purpose:** Reads a previously set variable from `Attributes` by `tag`; returns `false` and sets `variable` to an empty `TextObject("")` if not found. When the value is a `TextObject` with its own sub-variables, it drills down recursively — handy for checking whether a variable is set before substitution.

```csharp
TextObject msg = GameTexts.FindText("str_greet"); // already SetTextVariable("HERO", ...)
if (msg.GetVariableValue("HERO", out TextObject heroVar) && heroVar != null)
{
    InformationManager.DisplayMessage(new InformationMessage(heroVar.ToString()));
}
```

#### `public void AddIDToValue(string id)`
**Purpose:** Only when `Value` is literal text (does not start with `{=`) and does not already contain the `id`, rewrites `Value` to `"{=id}" + originalText` so `GetID()` can trace back to the library source id (`GameTextManager.TryGetText` calls this internally to brand the result with the library id).

### Copy and Compare

#### `public TextObject CopyTextObject()`
**Purpose:** Returns a shallow copy (`Value` shares the reference; the `Attributes` dictionary is freshly `new`-ed). **Always `CopyTextObject()` before filling variables on a shared/cached template**, or you pollute the original template.

```csharp
TextObject template = GameTexts.FindText("str_war_progress"); // "{=wp}War of {FACTION1} vs {FACTION2}"
string titleA = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionA.Name)
                        .SetTextVariable("FACTION2", factionB.Name)
                        .ToString();
string titleB = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionC.Name)
                        .SetTextVariable("FACTION2", factionD.Name)
                        .ToString();
```

#### `public string GetID()`
**Purpose:** Parses the id out of `Value`'s `{=id}` (e.g. `"{abc}Hi"` returns `"abc"`; returns `""` when there is no `{=` prefix). Useful for debugging which localization entry a piece of text came from.

#### `public bool HasSameValue(TextObject to)` / `public override bool Equals(object other)` / `public bool Equals(TextObject other)` / `public override int GetHashCode()`
**Purpose:** `HasSameValue` compares only the `Value` string; `Equals(TextObject)` is true when `Value` matches and `Attributes` are sequence-equal; `GetHashCode` is based on a per-construction `_internalId` (`CopyTextObject` assigns a new one), so two content-equal objects hash differently — **do not** rely on content equality to use `TextObject` as a dictionary key.

#### `public static List<string> ConvertToStringList(List<TextObject> to)`
**Purpose:** Maps a batch of `TextObject` to their `Value` strings (no localization resolution) — handy for bulk logging or serialized export.

#### `public bool Contains(TextObject to)` / `public bool Contains(string text)`
**Purpose:** Checks whether `Value` contains another `Value` or a substring; returns `false` when `Value` is `null`. Good for simple text matching/filtering.

## Examples

### Example 1: Send a localized system message with a hero name

```csharp
// Text defined in the module GameText XML: id=str_greet, text="{=xyz}Greetings, {HERO}!"
TextObject message = GameTexts.FindText("str_greet");
message.SetTextVariable("HERO", Hero.MainHero.Name); // Name is itself a TextObject, expanded recursively
InformationManager.DisplayMessage(new InformationMessage(message.ToString()));
```

### Example 2: Reuse a template for different factions (must copy)

```csharp
TextObject template = GameTexts.FindText("str_war_progress"); // "{=wp}War of {FACTION1} vs {FACTION2}"
string titleA = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionA.Name)
                        .SetTextVariable("FACTION2", factionB.Name)
                        .ToString();
string titleB = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionC.Name)
                        .SetTextVariable("FACTION2", factionD.Name)
                        .ToString();
```

### Example 3: Read an item name and display it directly

```csharp
// An item's name is already a TextObject — show it or substitute into it directly
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1");
TextObject name = sword.Name;                 // e.g. "{=abc}Aserai Sword"
InformationManager.DisplayMessage(new InformationMessage(name.ToString()));
```

## Risks / Crash Boundaries

- **A bare id is never looked up (the most common pitfall):** if the string does not start with `{=`, `ToString()` emits the whole text verbatim and never consults the localization library. To fetch by id you must use `GameTexts.FindText("str_my_id")` — do not drop the id in as the `Value`.
- **`FindText` returns error text, not null, when missing:** `GameTexts.FindText("nonexistent_id")` returns `Value = "{=!}ERROR: Text with id nonexistent_id doesn't exist!"`, which renders as an English error line, not an empty string. When debugging a custom id's spelling, this line is the most direct clue.
- **Missing translation falls back to English, never empties:** an inline entry like `{=abc}Hello`, in a non-English environment without a translation for that id, makes `GetLocalizedText` fall back to the inline English after `}` (here `"Hello"`). So an inline string always shows at least English and never silently vanishes.
- **`SetTextVariable` mutates in place and returns itself:** it is not immutable. Reusing one `TextObject` as a template and calling `SetTextVariable` repeatedly clobbers variables; `CopyTextObject()` before caching/sharing. If the variable value is another shared `TextObject` (e.g. `Hero.Name`), edits to its properties also reflect at the reference site.
- **Resolving before localization data loads yields error text:** `GameTexts.FindText` depends on an initialized `GameTextManager` (only present after the game starts). Calling it before `Game` launches or when `GameTextManager` is `null` throws `NullReferenceException`; an inline `{=...}` string does not depend on the library and can `ToString()` any time.
- **Misspelled placeholders fail silently:** write `{NAME}` in the text but call `SetTextVariable("NAM", ...)` (missing the E) and the resolved output still contains the literal `{NAME}` with no error — proofread tag vs placeholder character by character.
- **Do not use it as a dictionary key:** `GetHashCode` is instance-id based, so two content-equal objects hash differently, and `Equals` compares `Attributes` too; putting it in a `HashSet<TextObject>` or as a `Dictionary` key gives counter-intuitive results.
- **Token cache is language-bound:** `cachedTokens` is valid only while `cachedTextLanguageId` equals the current language index; after a language switch the first `ToString()` re-tokenizes automatically. After manually `CacheTokens()`, switching language again requires re-warming.

## Cross-Version Notes

- The public API of `TextObject` in v1.3.15 and v1.4.5 is **essentially identical**; all of `SetTextVariable`, `ToString`, `CopyTextObject`, `GetID`, `IsNullOrEmpty` behave the same across both versions.
- v1.4.5 additions: `GetDepth(int maxDepth)` / private `GetDepthInternal` compute the recursive depth of nested `TextObject`s in `Attributes` (to guard against overly deep circular references); `Format(float)` dropped an internal `false` argument to `MBTextManager.SetTextVariable` (behavior unchanged); `TryGetOrCreateFromObject` no longer passes an explicit `null` `attributes` (same result).
- Neither version folds "look up by id" into the `TextObject` constructor — library text is always acquired via `GameTexts.FindText` / `Game.Current.GameTextManager.FindText`.

## Dependencies

- [MBTextManager](../MBTextManager/) — the processor behind `ToString()` that actually performs translation and `{token}` substitution.
- [LocalizedTextManager](../LocalizedTextManager/) — the source of official/mod XML language packs that `TextObject` references.
- [GameTextManager](../../core-extra/GameTextManager/) / [GameTexts](../../core-extra/GameTexts/) — `GameTexts.FindText` is the normal acquisition path for library text.
- [Game](../../core-extra/Game/) — `Game.Current.GameTextManager` is the host that carries the localization library (`GameText`).
- [Hero](../../campaign/Hero/) — `Name` / `FirstName` are `TextObject`s, the most common text source.
- [ItemObject](../../core/ItemObject/) — an item's `Name` is also a `TextObject`.
- [InformationManager](../../core-extra/InformationManager/) — display text via `InformationMessage(textObject.ToString())`.
- [ViewModel](../../core-extra/ViewModel/) — `CacheTokens()` warm-up targets frequently refreshed HUD/UI bindings.

## See Also

- ↑ [Localization bucket index](../) — entry point for all types in this (localization) area.
- ↔ [MBTextManager](../MBTextManager/) · [LocalizedTextManager](../LocalizedTextManager/) — the text resolution pipeline.
- ↔ [Hero](../../campaign/Hero/) · [ItemObject](../../core/ItemObject/) — common `TextObject` sources.
- ↔ [InformationManager](../../core-extra/InformationManager/) · [ViewModel](../../core-extra/ViewModel/) · [Game](../../core-extra/Game/) — where text is shown and where the library lives.
