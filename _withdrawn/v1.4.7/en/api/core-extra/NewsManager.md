---
title: "NewsManager"
description: "NewsManager — class in TaleWorlds.Library.NewsManager. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# NewsManager

**Namespace:** `TaleWorlds.Library.NewsManager`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class NewsManager`  
**Source:** `TaleWorlds.Library/NewsManager/NewsManager.cs`

## Overview

`NewsManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `NewsManager`.
- **Instance members** (8): `NewsItems`, `IsInPreviewMode`, `LocalizationID`, `GetNewsItems`, `SetNewsSourceURL`, `UpdateNewsItems`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetNewsItems` | method | Instance entry point. Takes 1 argument: `bool forceRefresh`. Returns `Task<MBReadOnlyList<NewsItem>>`. Read path: prefer it over reaching for the backing store. |
| `IsInPreviewMode` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LocalizationID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NewsItems` | property | Instance entry point `MBReadOnlyList<NewsItem>` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetNewsSourceURL` | method | Instance entry point. Takes 1 argument: `string url`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateLocalizationID` | method | Instance entry point. Takes 1 argument: `string localizationID`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateNewsItems` | method | Instance entry point. Takes 1 argument: `bool forceRefresh`. Returns `Task`. Called from the owner’s update loop — do not assume a frame boundary. |
| `NewsManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public NewsManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var newsManager = new NewsManager();
// Read the live state through newsManager.NewsItems.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Library/NewsManager/NewsManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [NewsItem](../NewsItem/) — `TaleWorlds.Library.NewsManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/core-extra/](../) — the other types in this bucket.
