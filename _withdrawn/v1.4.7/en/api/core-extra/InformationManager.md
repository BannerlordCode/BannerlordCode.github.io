---
title: "InformationManager"
description: "InformationManager — class in TaleWorlds.Library. 21 public members (21 static)."
---

<!-- v147-skeleton -->
# InformationManager

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public static class InformationManager`  
**Source:** `TaleWorlds.Library/InformationManager.cs`

## Overview

`InformationManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (13): `IsAnyInquiryActive`, `DisplayMessage`, `HideAllMessages`, `ClearAllMessages`, `AddSystemNotification`, `ShowTooltip`, ….
- **Data and constants** (8): `DisplayMessageInternal`, `ClearAllMessagesInternal`, `HideAllMessagesInternal`, `OnAddSystemNotification`, `OnHideTooltip`, `OnHideInquiry`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddSystemNotification` | method (static) | Static entry point. Takes 1 argument: `string message`. Adds to the collection or relation this type owns. |
| `Clear` | method (static) | Static entry point. Takes no arguments. |
| `ClearAllMessages` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DisplayMessage` | method (static) | Static entry point. Takes 1 argument: `InformationMessage message`. |
| `GetIsAnyTooltipActive` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetIsAnyTooltipActiveAndExtended` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `HideAllMessages` | method (static) | Static entry point. Takes no arguments. |
| `HideInquiry` | method (static) | Static entry point. Takes no arguments. |
| `HideTooltip` | method (static) | Static entry point. Takes no arguments. |
| `IsAnyInquiryActive` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ShowInquiry` | method (static) | Static entry point. Takes 3 arguments: `InquiryData data`, `bool pauseGameActiveState`, `bool prioritize`. |
| `ShowTextInquiry` | method (static) | Static entry point. Takes 3 arguments: `TextInquiryData textData`, `bool pauseGameActiveState`, `bool prioritize`. |
| `ShowTooltip` | method (static) | Static entry point. Takes 2 arguments: `Type type`, `params object[] args`. |
| `ClearAllMessagesInternal` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `DisplayMessageInternal` | field (static) | Static entry point `Action<InformationMessage>` field — direct storage with no validation or notification. |
| `HideAllMessagesInternal` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `IsAnyInquiryActiveInternal` | field (static) | Static entry point `Func<bool>` field — direct storage with no validation or notification. |
| `IsAnyTooltipActiveInternal` | field (static) | Static entry point `InformationManager.IsAnyTooltipActiveDelegate` field — direct storage with no validation or notification. |
| `OnAddSystemNotification` | field (static) | Static entry point `Action<string>` field — direct storage with no validation or notification. |
| `OnHideInquiry` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `OnHideTooltip` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var informationManager = InformationManager.GetIsAnyTooltipActive();
InformationManager.IsAnyInquiryActive();
InformationManager.DisplayMessage(message);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Library/InformationManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
