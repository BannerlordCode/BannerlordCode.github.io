---
title: "LanguageData"
description: "LanguageData — class in TaleWorlds.Localization. 16 public members (6 static)."
---

<!-- v147-skeleton -->
# LanguageData

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `internal class LanguageData`  
**Source:** `TaleWorlds.Localization/LanguageData.cs`

## Overview

`LanguageData` is an internal class in TaleWorlds.Localization. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`LanguageData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LanguageData`.
- **Static entry points** (6): `All`, `Clear`, `GetLanguageData`, `GetLanguageDataIndex`, `LoadFromXml`, `LoadTestData`.
- **Instance members** (8): `Title`, `TextProcessor`, `SupportedIsoCodes`, `SubtitleExtension`, `IsUnderDevelopment`, `XmlPaths`, ….
- **Data and constants** (1): `StringId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<LanguageData>` property. Read it for current state; a declared setter writes that state in place. |
| `Clear` | method (static) | Static entry point. Takes no arguments. |
| `GetLanguageData` | method (static) | Static entry point. Takes 1 argument: `string stringId`. Returns `LanguageData`. Read path: prefer it over reaching for the backing store. |
| `GetLanguageDataIndex` | method (static) | Static entry point. Takes 1 argument: `string stringId`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `LoadFromXml` | method (static) | Static entry point. Takes 2 arguments: `XmlDocument doc`, `string modulePath`. |
| `LoadTestData` | method (static) | Static entry point. Takes 1 argument: `LanguageData data`. |
| `InitializeDefault` | method | Instance entry point. Takes 5 arguments: `string title`, `string[] supportedIsoCodes`, `string subtitleExtension`, `string textProcessor`, …. |
| `IsUnderDevelopment` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsValid` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SubtitleExtension` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SupportedIsoCodes` | property | Instance entry point `string[]` property. Read it for current state; a declared setter writes that state in place. |
| `TextProcessor` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Title` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `XmlPaths` | property | Instance entry point `MBReadOnlyList<string>` property. Read it for current state; a declared setter writes that state in place. |
| `LanguageData` | ctor | Instance entry point. Takes 1 argument: `string stringId`. Returns ``. |
| `StringId` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public LanguageData(string stringId)`.

## Usage Example

```csharp
// LanguageData is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   All
//     MBReadOnlyList<LanguageData>
//   Title
//     string
//   TextProcessor
//     string
//   SupportedIsoCodes
//     string[]
//   SubtitleExtension
//     string
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.Localization/LanguageData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/localization/](../) — the other types in this bucket.
