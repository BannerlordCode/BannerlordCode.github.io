---
title: "LocalizedVoiceManager"
description: "LocalizedVoiceManager — class in TaleWorlds.Localization. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# LocalizedVoiceManager

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public static class LocalizedVoiceManager`  
**Source:** `TaleWorlds.Localization/LocalizedVoiceManager.cs`

## Overview

`LocalizedVoiceManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `GetLocalizedVoice`, `GetVoiceLanguageIds`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetLocalizedVoice` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `VoiceObject`. Read path: prefer it over reaching for the backing store. |
| `GetVoiceLanguageIds` | method (static) | Static entry point. Takes no arguments. Returns `List<string>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var localizedVoiceManager = LocalizedVoiceManager.GetVoiceLanguageIds();
LocalizedVoiceManager.GetLocalizedVoice(id);
LocalizedVoiceManager.GetVoiceLanguageIds();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Localization/LocalizedVoiceManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LanguageData](../LanguageData/) — `TaleWorlds.Localization`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/localization/](../) — the other types in this bucket.
