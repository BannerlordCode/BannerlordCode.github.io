---
title: "LocalizedTextManager"
description: "LocalizedTextManager — class in TaleWorlds.Localization. 15 public members (13 static)."
---

<!-- v147-skeleton -->
# LocalizedTextManager

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public static class LocalizedTextManager`  
**Source:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## Overview

`LocalizedTextManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (13): `GetTranslatedText`, `GetLanguageIds`, `GetLanguageTitle`, `CreateTextProcessorForLanguage`, `AddLanguageTest`, `GetLanguageIndex`, ….
- **Data and constants** (2): `LanguageDataFileName`, `DefaultEnglishLanguageId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddLanguageTest` | method (static) | Static entry point. Takes 2 arguments: `string id`, `string processor`. Adds to the collection or relation this type owns. |
| `AddLocalizationXml` | method (static) | Static entry point. Takes 1 argument: `string newModule`. Adds to the collection or relation this type owns. |
| `CheckValidity` | method (static) | Static entry point. Takes 3 arguments: `string id`, `string text`, `out string errorLine`. Returns `bool`. |
| `CreateTextProcessorForLanguage` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `LanguageSpecificTextProcessor`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetDateFormattedByLanguage` | method (static) | Static entry point. Takes 2 arguments: `string languageCode`, `DateTime dateTime`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetLanguageIds` | method (static) | Static entry point. Takes 1 argument: `bool developmentMode`. Returns `List<string>`. Read path: prefer it over reaching for the backing store. |
| `GetLanguageIndex` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetLanguageTitle` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetLocalizationCodeOfISOLanguageCode` | method (static) | Static entry point. Takes 1 argument: `string isoLanguageCode`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSubtitleExtensionOfLanguage` | method (static) | Static entry point. Takes 1 argument: `string languageId`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetTimeFormattedByLanguage` | method (static) | Static entry point. Takes 2 arguments: `string languageCode`, `DateTime dateTime`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetTranslatedText` | method (static) | Static entry point. Takes 2 arguments: `string languageId`, `string id`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `LoadLocalizationXmls` | method (static) | Static entry point. Takes 1 argument: `string[] loadedModules`. |
| `DefaultEnglishLanguageId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `LanguageDataFileName` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// LocalizedTextManager exposes no accessor; the engine passes the instance to its callbacks.
LocalizedTextManager.GetTranslatedText(languageId, id);
LocalizedTextManager.GetLanguageIds(developmentMode);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Localization/LocalizedTextManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LanguageData](../LanguageData/) — `TaleWorlds.Localization`.
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/) — `TaleWorlds.Localization.TextProcessor`.
- [DefaultTextProcessor](../DefaultTextProcessor/) — `TaleWorlds.Localization.TextProcessor`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [CommandLineFunctionality](../../core-extra/CommandLineFunctionality/) — `TaleWorlds.Library`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/localization/](../) — the other types in this bucket.
