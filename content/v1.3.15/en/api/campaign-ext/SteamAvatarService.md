---
title: "SteamAvatarService"
description: "Auto-generated class reference for SteamAvatarService."
---
# SteamAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class SteamAvatarService : ApiAvatarServiceBase`
**Base:** `ApiAvatarServiceBase`
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/SteamAvatarService.cs`

## Overview

`SteamAvatarService` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `response` | `public SteamAvatarService.SteamPlayers response { get; set; }` |
| `players` | `public SteamAvatarService.SteamPlayerSummary players { get; set; }` |
| `avatar` | `public string avatar { get; set; }` |
| `avatarfull` | `public string avatarfull { get; set; }` |
| `avatarmedium` | `public string avatarmedium { get; set; }` |
| `communityvisibilitystate` | `public int communityvisibilitystate { get; set; }` |
| `lastlogoff` | `public int lastlogoff { get; set; }` |
| `personaname` | `public string personaname { get; set; }` |
| `personastate` | `public int personastate { get; set; }` |
| `personastateflags` | `public int personastateflags { get; set; }` |
| `primaryclanid` | `public string primaryclanid { get; set; }` |
| `profilestate` | `public int profilestate { get; set; }` |
| `profileurl` | `public string profileurl { get; set; }` |
| `realname` | `public string realname { get; set; }` |
| `steamid` | `public string steamid { get; set; }` |
| `timecreated` | `public int timecreated { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SteamAvatarService instance = ...;
```

## See Also

- [Area Index](../)