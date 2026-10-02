---
title: "LocalizedTextManager"
description: "The static loader and lookup layer for Bannerlord's language XML: enumerates LanguageData entries, creates per-language text processors, loads and hot-adds ModuleData/Languages trees, formats dates and times by culture, and exposes the change_language / reload_texts / check_for_errors console commands."
---
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** none
**Source:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## Overview

`LocalizedTextManager` owns everything about *having* languages, where `MBTextManager` owns *rendering* with the active one. It scans each module's `ModuleData/Languages` tree for `language_data.xml` files, turns them into `LanguageData` entries, and keeps the single flat `Dictionary<string, string> _gameTextDictionary` that currently holds one language's translations. It is also the culture bridge: `GetDateFormattedByLanguage` and `GetTimeFormattedByLanguage` pick a `CultureInfo` from the language's `SupportedIsoCodes` and use its `DateTimeFormat` patterns, which is the only correct way to format a date for a Bannerlord player. Three console commands are attributed to it through `[CommandLineArgumentFunction]`: `change_language`, `reload_texts`, `check_for_errors`.

## Mental Model

Read it as **"the language registry plus the one-language-at-a-time translation cache"**. Two very different jobs live here: (a) enumerating and describing languages, which is stable and safe; (b) loading and reloading translation data, which is destructive.

**The real load order (from `Module.Initialize`):**

1. `ModuleHelper.InitializeModules(Utilities.GetModulesNames(), platformModulePaths)` resolves the module list.
2. `Module.LoadLocalizationXmls()` collects every `ModuleInfo.FolderPath` and calls `LocalizedTextManager.LoadLocalizationXmls(paths)`.
3. `LoadLocalizationXmls` calls **`LanguageData.Clear()` first** — wiping all language metadata — then for each path, if `<path>/ModuleData/Languages` exists, `Directory.GetFiles(..., "language_data.xml", SearchOption.AllDirectories)` and `LanguageData.LoadFromXml(...)` per file.
4. `Module.GlobalTextManager.LoadDefaultTexts()`.
5. On `MBTextManager.ChangeLanguage(...)` later, `LoadLanguage(languageId)` clears `_gameTextDictionary`, calls `MBTextManager.ResetFunctions()`, then walks `language.XmlPaths` and (a) for non-English languages deserializes every `<string id=.. text=..>` into the dictionary, and (b) for **every** language installs every `<function functionName=.. functionBody=..>` via `MBTextManager.SetFunction`.

**Three traps:**

- **`GetTranslatedText(string languageId, string id)` ignores `languageId` entirely.** The body is just `_gameTextDictionary.TryGetValue(id, out result)`. The parameter is decorative; the answer is always whatever language was loaded last. If you call it expecting the German string while English is active, you get `null` (or the English-only path never populated the dictionary at all — English strings are inlined in the source `{=id}English text` form and are never inserted into the dictionary, since `LoadLanguage` guards that loop with `bool flag = stringId != "English"`).
- **`LoadLocalizationXmls` is destructive; `AddLocalizationXml` is not.** The first clears every `LanguageData` and rebuilds. The second only merges one module's tree in. `Module.LoadSingleModule(modulePath)` — the hot-load path — uses the *non*-clearing `AddLocalizationXml`. Using the wrong one from a mod removes every other module's languages.
- **`LoadLanguage` only deserializes `<string>` nodes for non-English languages.** English never populates `_gameTextDictionary`, because English text lives inline in the `TextObject.Value`. Any tooling that counts dictionary entries sees "English missing" and thinks localization is broken.

## When to Use / When NOT to Use

**Use `LocalizedTextManager` when:**
- You are building a language picker: `GetLanguageIds(bool developmentMode)`, `GetLanguageTitle(id)`, `GetSubtitleExtensionOfLanguage(id)`.
- You are formatting dates/times/culture-specific values: `GetDateFormattedByLanguage`, `GetTimeFormattedByLanguage`.
- You are mapping an OS locale to a game language: `GetLocalizationCodeOfISOLanguageCode(string)`.
- You are shipping a language pack or a partial translation and want to load it from your own module folder.

**Do NOT use `LocalizedTextManager` when:**
- You want to render a string. Use `TextObject.ToString()` — that path goes through `MBTextManager`, not through here.
- You want to set a variable. Use `MBTextManager.SetTextVariable` or, better, `TextObject.SetTextVariable`.
- You are doing a hot module load. `Module.LoadSingleModule` already calls `AddLocalizationXml` for you; calling it again double-parses.

## Dependencies

- [MBTextManager](../MBTextManager/) — the renderer; `LoadLanguage` installs its functions and `ChangeLanguage` drives the switch.
- [LanguageData](../LanguageData/) — the per-language record this class creates, enumerates and clears.
- [TextObject](../TextObject/) — the value type whose ids `GetTranslatedText` resolves.
- [VoiceObject](../VoiceObject/) — reached through `LocalizedVoiceManager`, which `MBTextManager.TryChangeVoiceLanguage` drives.
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/) — the save-side counterpart for localization objects.
- [Module](../../core/Module/) — the only caller of `LoadLocalizationXmls` and `AddLocalizationXml`.

## Key Members

### Lookup

#### `public static string GetTranslatedText(string languageId, string id)`
Dictionary probe returning the translation or `null`. **Contract:** `languageId` is not used; the dictionary holds exactly one language's strings, set by the last `LoadLanguage`. Returns `null` for English, for unknown ids, and for any language that has not been loaded yet.

#### `public static List<string> GetLanguageIds(bool developmentMode)`
Builds a fresh `List<string>` from `LanguageData.All`, keeping entries where `IsValid` is true and — only when `developmentMode` is `false` — skipping `IsUnderDevelopment`. Pass `true` to include in-progress languages.

#### `public static string GetLanguageTitle(string id)`
`LanguageData.Title` for the id, falling back to the English entry when the lookup misses.

### Language metadata

#### `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`
Resolves `LanguageData.TextProcessor` (a type name string) with `Type.GetType`, then `Activator.CreateInstance`. Falls back to `new DefaultTextProcessor()` when the language is unknown, when it has no processor configured, or when the type cannot be found (the last case also fires `Debug.FailedAssert`). `MBTextManager.ChangeLanguage` calls this for every switch.

#### `public static int GetLanguageIndex(string id)`
`LanguageData.GetLanguageDataIndex(id)`, falling back to the English index on a miss. `MBTextManager._activeTextLanguageIndex` is set from this.

#### `public static string GetSubtitleExtensionOfLanguage(string languageId)`
The subtitle file extension (e.g. `.srt`) for that language. Used by the video subsystem to pick a subtitle track.

#### `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`
Scans every `LanguageData.SupportedIsoCodes` case-insensitively and returns the matching `StringId`. On a miss it fires `Debug.FailedAssert("Undefined language code ...")` and returns `"English"` — an assert, not a throw, so an unmapped locale silently becomes English.

### Culture formatting

#### `public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`
Reads `CultureInfo.DateTimeFormat.ShortDatePattern` and applies it. The private `GetCultureInfo` uses `SupportedIsoCodes[0]` when present and `CultureInfo.InvariantCulture` otherwise. Invariant short-date is `MM/dd/yyyy`, which is the reason an unlabelled mod date field looks American to European testers.

#### `public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`
The same path against `DateTimeFormat.ShortTimePattern`.

### Loading

#### `public static void LoadLocalizationXmls(string[] loadedModules)`
**Destructive.** `LanguageData.Clear()`, then for each module path, enumerate `ModuleData/Languages/**/language_data.xml` and `LanguageData.LoadFromXml`. A directory-read failure asserts and treats that module as contributing zero files rather than aborting.

#### `public static void AddLocalizationXml(string newModule)`
**Non-destructive.** Same enumeration for a single module path, no `Clear()`. This is the hot-load path.

#### `internal static void LoadLanguage(string languageId)`
Called by `MBTextManager.ChangeLanguage`. Clears the dictionary, calls `MBTextManager.ResetFunctions()`, then installs `<functions>` from **every** language's XML and `<strings>` only when `languageId != "English"`.

### Validation and console commands

#### `public static bool CheckValidity(string id, string text, out string errorLine)`
Checks brace balance (`{` count vs `}` count) and the `{?` / `{\?}` conditional pairing, then actually runs the string through `MBTextManager.ProcessTextToString` inside a `try`/`catch` — a throw there is reported as a fault. Sets `errorLine` to `"<id> | <text>"` on the first problem and returns `true`.

#### `public static string CheckValidity(List<string> strings)`
`[CommandLineArgumentFunction("check_for_errors", "localization")]`. Deletes any stale `faulty_translation_lines.txt`, then loops **every** language calling `MBTextManager.ChangeLanguage` for each and validating every dictionary entry, appending to that file. It mutates the active language as a side effect and does not restore the one you started with.

#### `public static string ChangeLanguage(List<string> strings)`
`[CommandLineArgumentFunction("change_language", "localization")]`. Accepts a language code, title or ISO code, resolves it against `GetLanguageIds(true)` by title or subtitle extension, refuses if the index is unchanged, then calls `MBTextManager.ChangeLanguage`.

#### `public static string ReloadTexts(List<string> strings)`
`[CommandLineArgumentFunction("reload_texts", "localization")]`. Calls `LoadLanguage(MBTextManager.ActiveTextLanguage)` — the fastest way to iterate on translation XML without restarting the game.

## Examples

### Example 1 — build a language picker

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLanguagePicker
    {
        public static List<string> AvailableLanguages(bool includeUnreleased)
        {
            // developmentMode: false hides languages flagged as under development.
            return LocalizedTextManager.GetLanguageIds(includeUnreleased);
        }

        public static string SubtitleSuffixFor(string languageId)
        {
            return LocalizedTextManager.GetSubtitleExtensionOfLanguage(languageId);
        }

        public static string Apply(string languageId)
        {
            // ChangeLanguage lives on MBTextManager; this class only describes languages.
            return MBTextManager.ChangeLanguage(languageId) ? "ok" : "rejected";
        }
    }
}
```

### Example 2 — culture-correct dates and times

```csharp
using System;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyDateFormatter
    {
        public static string Format(DateTime when, string languageCode)
        {
            string date = LocalizedTextManager.GetDateFormattedByLanguage(languageCode, when);
            string time = LocalizedTextManager.GetTimeFormattedByLanguage(languageCode, when);
            return date + " " + time;
        }
    }
}
```

### Example 3 — resolve an OS locale to a shipped language

```csharp
using System.Globalization;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLocaleBridge
    {
        public static string ResolveSystemLanguage()
        {
            string iso = CultureInfo.CurrentCulture.TwoLetterISOLanguageName;
            // Returns "English" (and asserts) when the locale is not shipped.
            return LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode(iso);
        }

        public static void ReloadAfterEditingXml()
        {
            // Hot-reloads the active language from ModuleData/Languages.
            LocalizedTextManager.ReloadTexts(null);
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** `LocalizedTextManager` is not serialized and owns no saveable campaign objects. `SaveableLocalizationTypeDefiner` is the save-side type for localization objects (for example voice/culture records inside a save) and is registered separately; touching this class has no effect on what a save contains. The real save risk is different: if you change which languages are *available*, a save created under one language set loads under another and every `TextObject` id resolves against a different dictionary — the ids are stable, the translations behind them are not.
- **Cross-domain dependency.** `LocalizedTextManager` references `TaleWorlds.Library` (`Debug.FailedAssert`, `Debug.Print`, `MBStringBuilder`), `System.Xml`, `TaleWorlds.Localization.TextProcessor` and the `VoiceObject` type indirectly. It does **not** reference `TaleWorlds.CampaignSystem` or `TaleWorlds.ScreenSystem`, so it is safe from any `MBSubModuleBase` hook including the editor and a dedicated server. `GetTranslatedText` in particular is often the only localization call a headless tool needs.
- **Load order.** `LanguageData.Clear()` at the top of `LoadLocalizationXmls` makes this class order-sensitive in a way that is easy to miss. If your module calls `LoadLocalizationXmls` (plural) from `OnSubModuleLoad`, you erase the languages `Module.Initialize` already registered and then re-add only yours. Use `AddLocalizationXml` (singular) from a module, or do nothing and let `Module` load your `ModuleData/Languages` tree for you.
- **ID stability.** `_gameTextDictionary` is keyed by id alone, with no module or namespace qualifier. Two modules that declare the same `<string id="Xyz" .../>` collide; the later parse wins, and which one that is depends on `Directory.GetFiles` enumeration order across modules. This is the single most common localization bug in a mod stack and it is invisible in single-mod testing.
- **Calling `CheckValidity(List<string>)` changes the active language.** It loops every language with `MBTextManager.ChangeLanguage` and never restores the original. Run it from a console command, never from a hook that other systems depend on.
- **Thread affinity.** `LoadLanguage` mutates the static dictionary and the grammar function table in place. Calling `ReloadTexts` while a frame is mid-render is not safe; do it from the console or a menu screen, not from `OnApplicationTick`.
- **XML parse failures are asserts, not exceptions.** `LoadXmlFile` catches everything and reports via `Debug.FailedAssert("Could not parse: " + path)`, returning `null`. A malformed `language_data.xml` therefore degrades to "that language is missing" rather than a hard failure — check the log, not just the UI.

## Cross-Version Notes

- **v1.3.0:** `LocalizedTextManager` is `public static class LocalizedTextManager`. Public surface: `GetTranslatedText`, `GetLanguageIds`, `GetLanguageTitle`, `CreateTextProcessorForLanguage`, `AddLanguageTest`, `GetLanguageIndex`, `LoadLocalizationXmls`, `AddLocalizationXml`, `GetDateFormattedByLanguage`, `GetTimeFormattedByLanguage`, `GetSubtitleExtensionOfLanguage`, `GetLocalizationCodeOfISOLanguageCode`, the three `[CommandLineArgumentFunction]` console methods, `CheckValidity(string, string, out string)`, `public const string LanguageDataFileName = "language_data"` and `public const string DefaultEnglishLanguageId = "English"`. `LoadLanguage(string)` is `internal`; `GetLanguageData`, `LoadXmlFile`, `GetCultureInfo`, `LoadLanguage(LanguageData)` and `DeserializeStrings` are `private`.
- **A detail worth flagging because tutorials get it wrong:** the XML file is `language_data.xml` while the public constant is `LanguageDataFileName = "language_data"`. There is no public `*.xml` suffix constant.
- **v1.3.15 / v1.4.5:** the API shape is unchanged; the differences are in the shipped `LanguageData` set and in the content of `ModuleData/Languages`. The `Clear()`-on-plural / no-`Clear()`-on-singular asymmetry and the "`languageId` is ignored" behaviour of `GetTranslatedText` are identical, so mod tooling written against v1.3.0 stays correct.

## See Also

- ↑ Parent bucket: [Localization API index](../)
- ↔ Sibling: [MBTextManager](../MBTextManager/) — the renderer that consumes this dictionary
- ↔ Sibling: [LanguageData](../LanguageData/) · [TextObject](../TextObject/)
- ↪ Save side: [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/)
- ↖ Caller: [Module](../../core/Module/)