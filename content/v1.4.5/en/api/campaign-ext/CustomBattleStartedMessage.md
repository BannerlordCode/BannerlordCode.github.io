---
title: "CustomBattleStartedMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleStartedMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleStartedMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class CustomBattleStartedMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServer.ToCustomBattleServerManager/CustomBattleStartedMessage.cs`

## Overview

`CustomBattleStartedMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; set; }` |
| `PlayerTeams` | `public Dictionary<string, int> PlayerTeams { get; set; }` |
| `FactionNames` | `public List<string> FactionNames { get; set; }` |

## Usage Example

```csharp
var example = new CustomBattleStartedMessage();
```

## See Also

- [Complete Class Catalog](../catalog)