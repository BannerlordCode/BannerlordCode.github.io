---
title: "LobbyNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyNotification`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyNotification

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNotification`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs`

## Overview

`LobbyNotification` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public NotificationType Type { get; set; }` |
| `Date` | `public DateTime Date { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; set; }` |

## Key Methods

### GetParametersAsString
`public string GetParametersAsString()`

**Purpose:** Gets the current value of `parameters as string`.

### GetTextObjectOfMessage
`public TextObject GetTextObjectOfMessage()`

**Purpose:** Gets the current value of `text object of message`.

## Usage Example

```csharp
var value = new LobbyNotification();
value.GetParametersAsString();
```

## See Also

- [Complete Class Catalog](../catalog)