---
title: "TextObject"
description: "The value type every piece of display text in Bannerlord travels as: an inline {=id}English fallback string, a fluent SetTextVariable for inline variables, cached tokens for fast re-rendering, and a ToString that runs the whole localization pipeline and swallows failures into an error string."
---
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** none
**Source:** `TaleWorlds.Localization/TextObject.cs`

## Overview

`TextObject` is the class every localized string in Bannerlord is stored as. It is a thin wrapper over a public `string Value` field holding the *inline source form* — normally `{=Ab3xKq1L}Clan {MY_CLAN} holds {MY_FIEF_COUNT} fiefs.` — plus an optional `Dictionary<string, object> Attributes` bag used for inline variable values. Nothing is resolved at construction time. Resolution happens in `ToString()`, which hands the whole thing to `MBTextManager.ProcessTextToString(this, true)`: active-language lookup of the `{=id}` prefix, tokenize, parse, substitute variables, apply the language processor, optionally clear its temporary data. `TextObject` also caches its token list (`cachedTokens` plus `cachedTextLanguageId`) so repeated rendering of the same instance skips re-tokenizing.

## Mental Model

Read it as **"a deferred format string with a variable bag"** — closer to `string.Format` crossed with a lazy `ResourceString` than to a plain string. You build one, you hand it to the UI or the engine, and the engine calls `ToString()` when it needs pixels.

**The real resolution order, from `MBTextManager.ProcessTextToString`:**

1. `null` argument → `null` returned. `TextObject.IsNullOrEmpty(this)` → `""` returned.
2. `GetLocalizedText(Value)` — if `Value` starts with `{=`, split at the first `}` into id and target text. Active language `"English"` uses the target text directly (after `RemoveComments` strips `{%.+?}`); any other language asks `LocalizedTextManager.GetTranslatedText(...)` and falls back to the target text. Ids of exactly `*` or `!` skip the table lookup.
3. `Process(localizedText, this)` — uses `GetCachedTokens()` if the cache is valid for the current language, otherwise `Tokenizer.Tokenize(...)`; then `TextGrammarProcessor.Process(MBTextParser.Parse(list), TextContext, parent)`.
4. `_languageProcessor.Process(text)` applies the active language's inflection; `ClearTemporaryData()` runs afterwards because `ToString()` passes `shouldClear: true`.
5. If `MBTextManager.LocalizationDebugMode` is on, prefix `"(<id>) "`.

**Three traps:**

- **`ToString()` never throws.** It wraps the whole pipeline in `try`/`catch` and, on any exception, returns the literal string `"Error at id: " + GetID() + ". Lang: " + MBTextManager.ActiveTextLanguage` after a `Debug.Print` of the message. A typo'd variable name or a malformed grammar function shows up as that string in the UI. If you see it, the cause is in `Value`, not in `ToString`.
- **`IsEmpty()` is stricter than `Value == ""`.** It returns `string.IsNullOrEmpty(Value) && (Attributes == null || Attributes.Count == 0)`. A `TextObject` built from an empty string but carrying an attribute is *not* empty, and `MBTextManager.ProcessTextToString` will run it through the full pipeline.
- **`Equals`/`GetHashCode`/`==` are about `Value`, not about rendered text.** `HasSameValue(TextObject to)` is literally `this.Value == to.Value`, and the `==`/`!=` operators delegate to the same idea. Two instances with the same id but different `Attributes` are equal, and two instances with different ids but identical rendered output are not. Do not use `==` to decide whether two UI labels will look the same.

## When to Use / When NOT to Use

**Use `TextObject` when:**
- Any value is handed to an API that renders it: `InformationManager.ShowInquiry`, Gauntlet text properties, `InitialStateOption.Name`, conversation sentence text, notification text.
- You need inline variables that travel with the string — `SetTextVariable(tag, value)` returns `this`, so it chains and the values are attached to the instance.
- You need to keep the id around for later (tooltip lookups, localization audits) via `GetID()`.

**Do NOT use `TextObject` when:**
- You need a global variable visible to strings you do not own. That is `MBTextManager.SetTextVariable(name, value)`, which writes to the shared `TextProcessingContext`. Instance attributes are only seen by expressions inside *that* object.
- You want to concatenate text. `TextObject` has no `+`; build one string and wrap it, or use the `MBTextManager.LinkAttribute`/`{!s}`-style link markup the engine provides.
- You are storing non-text data. The `Attributes` dictionary is `object`-valued and untyped; nothing validates it, and nothing serializes it unless you explicitly route it through a `MetaData` sync.

## Dependencies

- [MBTextManager](../MBTextManager/) — `ToString()` calls into `MBTextManager.ProcessTextToString`; this class is the input to the whole text pipeline.
- [LocalizedTextManager](../LocalizedTextManager/) — resolves the `{=id}` prefix against the active language's dictionary.
- [TextGrammarProcessor](../TextGrammarProcessor/) — evaluates the parsed expression tree produced from `Value`.
- [TextIdExpression](../TextIdExpression/) — the parsed node that carries the `{=id}` lookup.
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/) — the save-side counterpart when a `TextObject` is embedded in a serialized object.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — the typical place to build localized strings for the game's own screens.

## Key Members

### Construction

#### `public TextObject(string value, Dictionary<string, object> attributes = null)`
The primary constructor. `value` should be the inline `{=id}English text` form. **Contract:** nothing is parsed or validated here; an id that does not exist in the translation table silently renders the English fallback.

#### `public TextObject(int value, Dictionary<string, object> attributes = null)` / `public TextObject(float value, ...)`
Both chain to the string constructor via `value.ToString()`. These produce a `TextObject` with **no** `{=id}` prefix, so they are not localizable — they are for numbers you intend to plug in as a variable value, not as a displayed string.

### Rendering

#### `public override string ToString()`
The resolution path described above, with exceptions swallowed into an `"Error at id: ..."` string. Called implicitly by string interpolation, `string.Concat`, `Console.WriteLine` and every engine API that takes a `TextObject`.

#### `public string ToStringWithoutClear()`
Renders via the internal `MBTextManager.ProcessWithoutLanguageProcessor(to)` — the same pipeline **minus** `_languageProcessor.Process(text)`. Use it when the string is going to be re-processed by the caller (for example before measuring, or when the language processor would double-apply inflections). Using it where you meant plain `ToString()` produces text without the language's grammatical adjustments.

#### `public string GetID()`
Walks `Value` from index 2 until the first `}` and returns the captured id, or `""` when `Value` is null, shorter than three characters, or does not start with `{=`. Returns `"!"`-adjacent empty strings rather than null.

#### `public TextObject CopyTextObject()`
Deep-copies the `Attributes` dictionary (shallow-copies the values) and returns a new instance. **Contract:** copying is the right move when you are about to call `SetTextVariable` on a shared or static `TextObject`; mutating the original would leak your value into every other holder of it.

### Inline variables

#### `public TextObject SetTextVariable(string tag, TextObject variable)` and the `string` / `int` / `float` / `TextObject` overloads
All four funnel into the private `SetTextVariableFromObject(tag, variable)` which writes into `Attributes`, and all four **return `this`** — they are fluent, not void. The `float` overload takes `decimalDigits = 2`. This is instance scope: only expressions inside *this* object can read the tag.

#### `public bool GetVariableValue(string tag, out TextObject variable)`
Reads back an inline variable. Returns `false` when the tag is absent, leaving `variable` at its default.

#### `public void AddIDToValue(string id)`
Prepends `"{=" + id + "}"` to `Value`, but only when `Value` is non-null, does not already contain that id, and does not already start with `"{="`. Idempotent by construction, and a silent no-op on an already-prefixed value.

### Emptiness, comparison, conversion

#### `public bool IsEmpty()` / `public static TextObject GetEmpty()` / `public static bool IsNullOrEmpty(TextObject obj)`
`IsEmpty()` is `Value` empty **and** no attributes. `GetEmpty()` returns a shared empty instance — reuse it for "no text" rather than `null`, because `MBTextManager` returns `null` for a null `TextObject` and `""` for an empty one, and the UI layers handle `""` more gracefully.

#### `public override bool Equals(object other)` / `public bool Equals(TextObject other)` / `public static bool operator ==` / `!=` / `public override int GetHashCode()`
Value-based equality. Two `TextObject`s with the same `Value` compare equal regardless of `Attributes`. Because this also defines `GetHashCode`, a `TextObject` used as a `Dictionary` key collides with any other having the same source string.

#### `public bool HasSameValue(TextObject to)`
Exactly `this.Value == to.Value`, with no null guard on `to` — passing `null` throws.

#### `public int GetValueHashCode()`
Hash of `Value` alone, exposed separately from `GetHashCode()` so callers can key on the raw string rather than on equality semantics.

#### `public static List<string> ConvertToStringList(List<TextObject> to)`
Renders each element via `ToString()` and returns the strings. There is no inverse — a `List<TextObject>` cannot be reconstructed from the strings without losing ids and variables.

#### `public string Format(float p1)`
Single-float formatting convenience for the `{value}` style placeholder.

#### `public bool Contains(TextObject to)` / `public bool Contains(string text)`
Substring checks against the rendered form (or the raw string, for the string overload).

### Caching

#### `public void CacheTokens()`
Forces tokenization now so the first `ToString()` does not pay for it. `internal List<MBTextToken> GetCachedTokens()` returns the cache, and `cachedTextLanguageId` records which language it was built for so the cache invalidates on a language switch.

#### `public Dictionary<string, object> Attributes { get; private set; }` / `public int Length` / `public bool IsLink`
`Attributes` has a private setter — use `SetTextVariable` / `CopyTextObject`. `Length` is `Value.Length`. `IsLink` reflects the `MBTextManager.LinkAttribute` markup.

## Examples

### Example 1 — build and render a localized string with inline variables

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextFactory
    {
        public static TextObject FiefCountLabel(string clanName, int count)
        {
            // Inline English fallback plus a unique id; variables travel with the instance.
            return new TextObject("{=Qa71bXzP}{MY_CLAN} holds {MY_FIEF_COUNT} fiefs.", null)
                .SetTextVariable("MY_CLAN", clanName)
                .SetTextVariable("MY_FIEF_COUNT", count);
        }

        public static string Render(string clanName, int count)
        {
            // ToString() runs the whole pipeline; a bad variable yields
            // "Error at id: Qa71bXzP. Lang: <lang>" instead of throwing.
            return FiefCountLabel(clanName, count).ToString();
        }
    }
}
```

### Example 2 — inspect an id and copy before mutating

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextTools
    {
        private static readonly TextObject Shared = new TextObject("{=L4mZ9pQa}Shared label", null);

        public static string IdOf(TextObject to)
        {
            return to.GetID();
        }

        public static TextObject Specialized(string extra)
        {
            // Copy first: mutating the shared instance would leak "extra" everywhere.
            TextObject copy = Shared.CopyTextObject();
            copy.SetTextVariable("MY_EXTRA", extra);
            return copy;
        }

        public static void PreTokenize(TextObject to)
        {
            to.CacheTokens();
        }
    }
}
```

### Example 3 — debug missing translations

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLocalizationAudit
    {
        public static string[] Audit(IEnumerable<string> ids)
        {
            // Prefixes every rendered string with its id so gaps are visible in-game.
            MBTextManager.LocalizationDebugMode = true;
            var results = new List<string>();
            foreach (string id in ids)
            {
                TextObject probe = new TextObject("{=" + id + "}MISSING", null);
                results.Add(probe.ToString());
            }
            return results.ToArray();
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** A `TextObject` is serializable by the game's save system through `MetaData` — `TextObject` implements the object-collection protocol (`AutoGeneratedInstanceCollectObjects`, `OnLoad(MetaData)`). That means a `TextObject` stored on a **saveable** object (an `MBObjectManager` type, a `Hero`, a campaign object) round-trips. A `TextObject` stored on a plain field of a `CampaignBehaviorBase` does **not**, unless you route it through `IDataStore` yourself — you must store the raw `Value` string, since the attribute dictionary and the token cache are not part of the saved payload in any meaningful form.
- **Cross-domain dependency.** `TextObject.cs` itself only needs `System` and `TaleWorlds.Library` (`Debug.Print`, `MBStringBuilder`, `CommandLineFunctionality`). It does not touch `TaleWorlds.CampaignSystem`, which is exactly why it is safe from every `MBSubModuleBase` hook. `TaleWorlds.CampaignSystem.Extensions.TextObjectExtensions` adds campaign-flavoured helpers on top; referencing that extension class is what pulls the campaign assembly in.
- **Load order.** The `{=id}` lookup goes against `LocalizedTextManager._gameTextDictionary`, which is empty until a language is loaded and — as noted on that page — is **never** populated for English. A `TextObject.ToString()` in a static constructor, before `Module.Initialize` has run `LoadLocalizationXmls`, still returns the English fallback, so ordering rarely bites here; what bites instead is a *non-English* player, whose dictionary is populated later and who therefore sees fallbacks for anything resolved too early and cached.
- **ID stability.** The id is a translation-table key shared across all modules. Two modules declaring `{=Ab3xKq1L}` collide in `LocalizedTextManager._gameTextDictionary` and one silently wins. If you fork a vanilla string to change it, you must **change the id**, or you are now sharing a key with the game and with every other mod — `LocalizedTextManager.CheckValidity` will not warn you about it.
- **Token cache invalidation.** `CacheTokens()` stores `cachedTextLanguageId`. The cache is only safe when the language has not changed. Calling `MBTextManager.ChangeLanguage` after caching is handled by the id check inside the pipeline; caching around a *reload* (`LocalizedTextManager.ReloadTexts`) is not, so re-render after a reload rather than trusting a cached instance.
- **Shared-instance mutation.** `SetTextVariable` mutates `Attributes` on the instance. A `static readonly TextObject` used as a template will accumulate variables from every caller. `CopyTextObject()` is the fix; a fresh `new TextObject(...)` is cheaper still.
- **`HasSameValue(null)`** throws; `IsNullOrEmpty(null)` is safe and returns `true`. Use `TextObject.IsNullOrEmpty(to)` before any dereference — it is the null-tolerant form the engine itself uses everywhere.
- **Number constructors are not localizable.** `new TextObject(42)` produces `"42"` with no `{=id}` prefix. It will read identically in every language, including ones with different digit systems or number formatting rules. Format numbers through `MBTextManager.SetTextVariable(name, float, decimalDigits)` on a real localized string instead.

## Cross-Version Notes

- **v1.3.0:** `TextObject` is `public class TextObject` with `public string Value;` as a **field**, not a property. Public surface: the `Attributes` property, `Length`, `IsLink`, three constructors, `GetEmpty`, `IsEmpty`, `IsNullOrEmpty`, `ToString`, `ToStringWithoutClear`, `Format(float)`, both `Contains` overloads, the `Equals`/`GetHashCode`/`operator ==`/`operator !=` set, `Equals(TextObject)`, `HasSameValue`, `ConvertToStringList`, four `SetTextVariable` overloads, `AddIDToValue`, `GetVariableValue`, `GetValueHashCode`, `CopyTextObject`, `GetID`, and `CacheTokens`. `GetCachedTokens`, `TryGetAttributesValue` and the four `AutoGenerated*` members are `internal`.
- **Not on this class:** there is no `TextObject.Format(string)`, no implicit conversion from `string`, and no `+` operator. `new TextObject("x", null)` is the only construction path, and `ToString()` is the only rendering path.
- **v1.3.15 / v1.4.5:** the shape and the `{=id}fallback` convention are unchanged. Later patches extend the set of shipped `LanguageData` entries and the per-language processors, but `ToString()`'s swallow-and-return-error-string behaviour and the instance-vs-global variable split (`TextObject.SetTextVariable` vs `MBTextManager.SetTextVariable`) are identical, so code written for v1.3.0 keeps working.

## See Also

- ↑ Parent bucket: [Localization API index](../)
- ↔ Sibling: [MBTextManager](../MBTextManager/) — the runtime this object renders through
- ↔ Sibling: [LocalizedTextManager](../LocalizedTextManager/) — the table the `{=id}` prefix resolves against
- ↪ Pipeline stage: [TextGrammarProcessor](../TextGrammarProcessor/) · [TextIdExpression](../TextIdExpression/)
- ↖ Typical caller: [MBSubModuleBase](../../core/MBSubModuleBase/)