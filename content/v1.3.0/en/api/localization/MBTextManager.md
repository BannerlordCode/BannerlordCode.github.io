---
title: "MBTextManager"
description: "The static engine behind every localized string in Bannerlord: active-language switching, the process-wide text-variable table, custom grammar functions from XML, animation-tag stripping, and voice-object lookup. Also the entry point TextObject.ToString() routes through."
---
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** none
**Source:** `TaleWorlds.Localization/MBTextManager.cs`

## Overview

`MBTextManager` is the process-wide text runtime. It holds the active language id and index, a static `TextProcessingContext` that owns every text variable and grammar function, the `LanguageSpecificTextProcessor` that applies per-language inflections, and the two cached `StringBuilder`s used for id extraction. Every `TextObject.ToString()` in the game ends up in `ProcessTextToString(TextObject, bool)`, which resolves the `{=id}Default text` form to the active language's translation, runs the `Tokenizer` → `MBTextParser` → `TextGrammarProcessor` pipeline over it, and hands the result to the language processor. It is also where custom grammar functions declared in `ModuleData/Languages/**/functions` get installed, and where the `IB`/`IF`/`RB`/`RF` conversation animation tags are decoded.

## Mental Model

Read it as **"the global localization runtime, not a per-call helper"**. Every piece of state here is `static`, so it is shared by the whole process: one active language, one variable table, one function table.

**The real call order for rendering one string:**

1. Your code calls `TextObject.ToString()` (for example via string interpolation, `InformationManager.ShowInquiry`, or a Gauntlet text property).
2. `MBTextManager.ProcessTextToString(to, shouldClear)` is entered. A `null` argument returns `null`; `TextObject.IsNullOrEmpty(to)` returns `""`.
3. `GetLocalizedText(to.Value)` — if the value starts with `{=`, it splits at the first `}`. When the active language is `"English"` the target text is used verbatim and `RemoveComments` strips `{%.+?}` fragments. Otherwise `LocalizedTextManager.GetTranslatedText(activeLanguage, id)` is consulted, and the raw target text is used only as fallback. Ids of exactly `*` or `!` skip the lookup entirely.
4. `Process(localizedText, to)` reuses `to.GetCachedTokens()` if present, otherwise `Tokenizer.Tokenize(...)`, then `TextGrammarProcessor.Process(MBTextParser.Parse(list), TextContext, parent)`.
5. `_languageProcessor.Process(text)` applies the active language's inflection rules. If `shouldClear` is `true` (which is what `TextObject.ToString()` passes), `_languageProcessor.ClearTemporaryData()` runs afterwards.
6. If `LocalizationDebugMode` is on, the result is prefixed with `"(" + to.GetID() + ") "`, with `"!"` substituted for an empty id.

**Three traps:**

- **`SetTextVariable` writes into a process-wide table, not into your `TextObject`.** `TextContext.SetTextVariable(name, text)` mutates a single static `TextProcessingContext`. Two screens that both set `{myVar}` collide, and the value persists until `ClearAll()` or an overwrite. This is *different* from `TextObject.SetTextVariable(tag, variable)`, which stores the value on that instance's `Attributes` dictionary.
- **`SetTextVariable(string variableName, int arrayIndex, object content)` writes the key `variableName + ":" + arrayIndex`.** The `:` separator is the array/row syntax the grammar processor understands; if you set `"Row0"` by hand and the text references `[Row0]`, it will not resolve.
- **`ChangeLanguage` fully reloads the translation dictionary.** On success it replaces `_languageProcessor`, sets `_activeTextLanguageId` and `_activeTextLanguageIndex`, and calls `LocalizedTextManager.LoadLanguage(...)`, which clears the dictionary and calls `MBTextManager.ResetFunctions()`. Any text variable you set before the switch survives (it lives in `TextContext`), but every custom grammar function you installed is reloaded from XML.

## When to Use / When NOT to Use

**Use `MBTextManager` when:**
- You are switching or validating languages: `ChangeLanguage`, `LanguageExistsInCurrentConfiguration`, `GetActiveTextLanguageIndex`, `ActiveTextLanguage`.
- You need a **global** text variable that is not attached to a particular `TextObject` — for example a value referenced from a conversation sentence or a tooltip that you do not own.
- You are installing a grammar function at runtime, or stripping animation tags before measuring a string.
- You are resolving a voice line: `TryGetVoiceObject`.

**Do NOT use `MBTextManager` when:**
- You have a `TextObject` in hand. `textObject.SetTextVariable(tag, value).ToString()` is the correct, instance-scoped path, and it is what survives being passed around.
- You want per-campaign text. Campaign-scoped strings go through the campaign's own text manager / `GameTextManager`, not this static.
- You want to load or read language XML. That is `LocalizedTextManager` — `MBTextManager` never touches files.

## Dependencies

- [TextObject](../TextObject/) — the type whose `ToString()` routes into this class; also the value type every variable setter accepts.
- [LocalizedTextManager](../LocalizedTextManager/) — owns the translation dictionary and `LoadLanguage`, and creates the language processors this class installs.
- [LanguageData](../LanguageData/) — the per-language metadata (title, ISO codes, subtitle extension, processor type name) `LocalizedTextManager` reads.
- [VoiceObject](../VoiceObject/) — the type `TryGetVoiceObject` hands back.
- [TextGrammarProcessor](../TextGrammarProcessor/) — evaluates the parsed expression tree during `Process`.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — `OnApplicationTick` is where a mod typically reacts to a language change or refreshes debug text.

## Key Members

### Active language

#### `public static bool ChangeLanguage(string language)`
Checks the id against `LocalizedTextManager.GetLanguageIds(true)`. On success it installs a new `LanguageSpecificTextProcessor`, updates the active id and index, and reloads the language. **Contract:** returns `false` and fires `Debug.FailedAssert("Invalid language")` for an unknown id — the assert does not throw in a shipping build, so you get a silent `false`.

#### `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`
Thin wrapper over `LocalizedTextManager.GetLanguageIds(developmentMode).Any(l => l == language)`. Pass `developmentMode: true` if you want languages marked "under development" to count, otherwise a language that exists but is flagged will read as absent.

#### `public static string ActiveTextLanguage { get; }` / `public static int GetActiveTextLanguageIndex()`
The active id string and its index in the `LanguageData` list. Both are cached fields, refreshed only by `ChangeLanguage`.

#### `public static bool TryChangeVoiceLanguage(string language)`
Switches only the *voice* language (via `LocalizedVoiceManager`), independently of the text language. Returns `false` when the id is not in the voice language list; unlike `ChangeLanguage` it does not assert.

### Text variables

#### `public static void SetTextVariable(string variableName, string text, bool sendClients = false)` and the `TextObject` / `int` / `float` / `object` overloads
Six overloads, all funnelling into `TextContext.SetTextVariable(variableName, new TextObject(text, null))`. A `null` `text` or `null` `content` is a **silent no-op** — the early `return` means the old value stays. The `float` overload rounds with `MathF.Round(content, decimalDigits)` before converting, defaulting to two decimals. The `sendClients` parameter is accepted and ignored in v1.3.0.

#### `public static void SetTextVariable(string variableName, int arrayIndex, object content)`
The indexed overload. Stores under `variableName + ":" + arrayIndex`, which is the key shape the grammar processor matches for row/array references.

#### `public static void ClearAll()`
`TextContext.ClearAll()` — wipes the global variable table. Global, not scoped: calling it discards variables other systems set.

### Grammar functions

#### `public static void SetFunction(string funcName, string functionBody)`
Parses `functionBody` with `MBTextParser.Parse(Tokenizer.Tokenize(...))` into an `MBTextModel` and installs it in `TextContext`. This is what `LocalizedTextManager.LoadLanguage` calls for every `<function functionName=".." functionBody="..">` node it finds in `ModuleData/Languages/**/language_data.xml`. A malformed body throws here — and the throw surfaces as a swallowed `"Error at id: ..."` string when a `TextObject` is later rendered, not as a load-time failure.

#### `public static void ResetFunctions()`
Clears the function table. Called by `LocalizedTextManager.LoadLanguage` *before* it re-installs the XML functions, so custom functions registered from code are lost on every language switch unless you re-register them.

### String utilities

#### `public static string DiscardAnimationTags(string text)`
Strips everything between `[` and `]`. Useful before measuring or before feeding a string into a UI element that cannot parse tags.

#### `public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`
Same strip, plus a private `CheckAnimationTagPositions` pass that verifies each stripped tag left nothing but whitespace behind. Returns the stripped text either way; the boolean result of the check is not surfaced.

#### `public static string[] GetConversationAnimations(TextObject to)`
Returns a fixed `string[4]` for the `IB`, `IF`, `RB`, `RF` slots, parsed out of `to.CopyTextObject().ToString()`. Slots you did not fill stay `null`, so index-check before use.

#### `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)`
Resolves the `{=id}` inside `to` to a `VoiceObject` via `LocalizedVoiceManager.GetLocalizedVoice`. If the text has no id (`GetLocalizationId` returns `"!"`) it walks the token list and recurses into the first `TokenType.Identifier` variable that yields a voice object. Returns `false` and nulls both outs when `TextObject.IsNullOrEmpty(to)`.

### Debugging

#### `public static bool LocalizationDebugMode { get; set; }`
When `true`, every rendered string is prefixed with its id — `"(CaSafuAH) Content Download Complete"` — with `"!"` standing in for an empty id. This is the fastest way to find an untranslated or mis-keyed string.

#### `public static void ThrowLocalizationError(string message)`
`Debug.FailedAssert` with a hardcoded source path. Use it to fail loudly during development when a required localization invariant is violated.

#### `public const string LinkAttribute = "LINK"`
The attribute key used to mark a `TextObject` whose value carries a rich-text link. The companion `LinkTag` (`".link"`), `LinkStarter` (`"<a style=\"Link."`), `LinkEnding` (`"</b></a>"`), `LinkTagLength` (7) and `LinkEndingLength` (8) are `internal const`s — they exist for the engine's markup writer and are not part of the mod-facing surface, which is why tutorials that tell you to concatenate them do not compile.

## Examples

### Example 1 — switch language and verify the configuration

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLanguageSwitcher
    {
        public static bool Apply(string id)
        {
            if (!MBTextManager.LanguageExistsInCurrentConfiguration(id, true))
            {
                MBDebug.Print("language not present: " + id);
                return false;
            }
            // True includes languages still flagged as under development.
            bool changed = MBTextManager.ChangeLanguage(id);
            MBDebug.Print("active = " + MBTextManager.ActiveTextLanguage + " index = " + MBTextManager.GetActiveTextLanguageIndex());
            return changed;
        }
    }
}
```

### Example 2 — set a global text variable and resolve it

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public class MyNameGenerator
    {
        public string BuildFor(string clanName, int clanCount)
        {
            // Global table, not instance state. "Gold" is the variable the XML line references.
            MBTextManager.SetTextVariable("MyClanName", clanName);
            // Indexed overload writes the key "MyRoster:0".
            MBTextManager.SetTextVariable("MyRoster", 0, clanCount);
            return new TextObject("{=Ab3xKq1L}Clan {MyClanName} has {MyRoster:0} fiefs.", null).ToString();
        }
    }
}
```

### Example 3 — install a grammar function and strip tags before measuring

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextTools
    {
        public static void InstallFunction()
        {
            // Lost on every ChangeLanguage: LoadLanguage calls ResetFunctions() first.
            MBTextManager.SetFunction("myPlural", "if [n>1]s|");
        }

        public static int MeasurePlain(string tagged)
        {
            MBTextManager.LocalizationDebugMode = true;
            string rendered = new TextObject(tagged, null).ToString();
            // Strip [ib] [if] [rb] [rf] before layout maths.
            string plain = MBTextManager.DiscardAnimationTags(rendered);
            return plain.Length;
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** `MBTextManager` is not serialized and holds no saveable objects. Text variables set on the global table survive a save/load cycle but are **not** restored to a known value — a load that does not re-run your setter renders the previous game's value. Anything that must be correct after a load has to be re-set in your bootstrap hook.
- **Cross-domain dependency.** `MBTextManager` lives in `TaleWorlds.Localization` and pulls in `TaleWorlds.Library` (`Debug`, `MBStringBuilder`), `TaleWorlds.Localization.TextProcessor` and `...TextProcessor.LanguageProcessors`. It does **not** reference `TaleWorlds.CampaignSystem`, which is why it is safe to call from the editor, a dedicated server and an early `OnSubModuleLoad`. By contrast `LocalizedTextManager.LoadLanguage` touches `TaleWorlds.Library` `Debug.Print` and the XML loader.
- **Load order.** `_activeTextLanguageId` defaults to `"English"` and `_languageProcessor` to `new EnglishTextProcessor()` in static initializers, so the class is usable before any XML loads. But `LocalizedTextManager.LoadLocalizationXmls` starts with `LanguageData.Clear()`, so calling it after your module has already resolved language ids wipes the table out from under you. `Module.Initialize()` orders it correctly: `ModuleHelper.InitializeModules` → `LoadLocalizationXmls` → `GlobalTextManager.LoadDefaultTexts()`.
- **ID stability.** The `{=Ab3xKq1L}` key is a translation-table key shared across every module that ships the same string. `LocalizedTextManager.GetTranslatedText` writes into one flat `Dictionary<string, string>` keyed only by id, so two modules declaring the same id silently overwrite each other and the winner is whichever `language_data.xml` was parsed last. Keep your ids unique.
- **Silent null in every variable setter.** `SetTextVariable(name, (string)null)` and `SetTextVariable(name, (object)null)` return without doing anything — they do not clear the variable. To clear a value, assign an empty `TextObject` (`TextObject.GetEmpty()`), not `null`.
- **Swallowed render failures.** `TextObject.ToString()` catches every exception from the pipeline and returns `"Error at id: <id>. Lang: <lang>"`. A malformed function body or a bad variable name therefore shows up as that literal string in the UI rather than as a crash, and no log line is written unless `LocalizationDebugMode` is on. If you see that string, the cause is in your XML or your variable names.
- **Language switch is not atomic.** `ChangeLanguage` mutates `_activeTextLanguageId` before `LoadLanguage` reloads the dictionary. Rendering on another thread mid-switch sees the new language id with the old (or cleared) dictionary. The whole localization runtime is single-threaded by design; do not call it from a background task.

## Cross-Version Notes

- **v1.3.0:** `MBTextManager` is `public static class MBTextManager` with `ActiveTextLanguage`, `LocalizationDebugMode`, `LanguageExistsInCurrentConfiguration`, `ChangeLanguage`, `GetActiveTextLanguageIndex`, `TryChangeVoiceLanguage`, `ClearAll`, six `SetTextVariable` overloads, `SetFunction`, `ResetFunctions`, `ThrowLocalizationError`, `DiscardAnimationTagsAndCheckAnimationTagPositions`, `DiscardAnimationTags`, `GetConversationAnimations`, `TryGetVoiceObject`, and `public const string LinkAttribute`. `ProcessTextToString`, `ProcessWithoutLanguageProcessor`, `GetLocalizedText`, `ProcessNumber`, `Process`, `RemoveComments`, `ProcessTextForVocalization`, `GetLocalizationId` and `CheckAnimationTagPositions` are all `internal` or `private`.
- **Not on this class:** there is no `MBTextManager.GetText(string id)` and no `MBTextManager.Localize`. Localization lookup goes through `TextObject`, and raw table access through `LocalizedTextManager.GetTranslatedText`.
- **v1.3.15 / v1.4.5:** the shape is stable; later patches add language definitions rather than API. The `{=id}default text` convention, the `:` array-variable syntax and the `ResetFunctions()`-before-reload ordering described above are unchanged, so mod code written against v1.3.0 still behaves identically.

## See Also

- ↑ Parent bucket: [Localization API index](../)
- ↔ Sibling: [TextObject](../TextObject/) — the type that routes into this class
- ↔ Sibling: [LocalizedTextManager](../LocalizedTextManager/) — XML loading and the translation dictionary
- ↔ Sibling: [LanguageData](../LanguageData/) · [VoiceObject](../VoiceObject/)
- ↪ Pipeline stage: [TextGrammarProcessor](../TextGrammarProcessor/)
- ↖ Caller: [MBSubModuleBase](../../core/MBSubModuleBase/)