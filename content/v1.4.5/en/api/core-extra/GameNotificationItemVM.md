---
title: "GameNotificationItemVM"
description: "Auto-generated class reference for GameNotificationItemVM."
---
# GameNotificationItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/GameNotificationItemVM.cs`

## Overview

`GameNotificationItemVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ExtraTimeInMs` | `public int ExtraTimeInMs { get; set; }` |
| `GameNotificationText` | `public string GameNotificationText { get; set; }` |
| `CharacterNameText` | `public string CharacterNameText { get; set; }` |
| `NotificationSoundId` | `public string NotificationSoundId { get; set; }` |
| `DialogSoundPath` | `public string DialogSoundPath { get; set; }` |
| `Announcer` | `public CharacterImageIdentifierVM Announcer { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GameNotificationItemVM instance = ...;
```

## See Also

- [Area Index](../)