---
title: "CreateClanMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreateClanMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreateClanMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class CreateClanMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromClient.ToLobbyServer/CreateClanMessage.cs`

## Overview

`CreateClanMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanName` | `public string ClanName { get; }` |
| `ClanTag` | `public string ClanTag { get; }` |
| `ClanFaction` | `public string ClanFaction { get; }` |
| `ClanSigil` | `public string ClanSigil { get; }` |

## Usage Example

```csharp
var example = new CreateClanMessage();
```

## See Also

- [Complete Class Catalog](../catalog)