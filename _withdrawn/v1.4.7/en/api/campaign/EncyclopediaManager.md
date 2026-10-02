---
title: "EncyclopediaManager"
description: "EncyclopediaManager — class in TaleWorlds.CampaignSystem.Encyclopedia. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaManager

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class EncyclopediaManager`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## Overview

`EncyclopediaManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (8): `ViewDataTracker`, `CreateEncyclopediaPages`, `GetEncyclopediaPages`, `GetPageOf`, `GetIdentifier`, `GoToLink`, ….
- **Data and constants** (3): `HOME_ID`, `LIST_PAGE_ID`, `LAST_PAGE_ID`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateEncyclopediaPages` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetEncyclopediaPages` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<EncyclopediaPage>`. Read path: prefer it over reaching for the backing store. |
| `GetIdentifier` | method | Instance entry point. Takes 1 argument: `Type type`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetPageOf` | method | Instance entry point. Takes 1 argument: `Type type`. Returns `EncyclopediaPage`. Read path: prefer it over reaching for the backing store. |
| `GoToLink` | method | Instance entry point. Takes 2 arguments: `string pageType`, `string stringID`. |
| `GoToLink` | method | Instance entry point. Takes 1 argument: `string link`. |
| `SetLinkCallback` | method | Instance entry point. Takes 2 arguments: `Action<string`, `object> ExecuteLink`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ViewDataTracker` | property | Instance entry point `IViewDataTracker` property. Read it for current state; a declared setter writes that state in place. |
| `HOME_ID` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `LAST_PAGE_ID` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `LIST_PAGE_ID` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// EncyclopediaManager exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
