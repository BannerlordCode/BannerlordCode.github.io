---
title: "GameStartupInfo"
description: "Auto-generated class reference for GameStartupInfo."
---
# GameStartupInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameStartupInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/GameStartupInfo.cs`

## Overview

`GameStartupInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartupType` | `public GameStartupType StartupType { get; set; }` |
| `DedicatedServerType` | `public DedicatedServerType DedicatedServerType { get; set; }` |
| `PlayerHostedDedicatedServer` | `public bool PlayerHostedDedicatedServer { get; set; }` |
| `IsSinglePlatformServer` | `public bool IsSinglePlatformServer { get; set; }` |
| `CustomServerHostIP` | `public string CustomServerHostIP { get; set; }` |
| `ServerPort` | `public int ServerPort { get; set; }` |
| `ServerRegion` | `public string ServerRegion { get; set; }` |
| `ServerPriority` | `public sbyte ServerPriority { get; set; }` |
| `ServerGameMode` | `public string ServerGameMode { get; set; }` |
| `CustomGameServerConfigFile` | `public string CustomGameServerConfigFile { get; set; }` |
| `CustomGameServerNameOverride` | `public string CustomGameServerNameOverride { get; set; }` |
| `CustomGameServerPasswordOverride` | `public string CustomGameServerPasswordOverride { get; set; }` |
| `CustomGameServerAuthToken` | `public string CustomGameServerAuthToken { get; set; }` |
| `CustomGameServerAllowsOptionalModules` | `public bool CustomGameServerAllowsOptionalModules { get; set; }` |
| `OverridenUserName` | `public string OverridenUserName { get; set; }` |
| `PremadeGameType` | `public string PremadeGameType { get; set; }` |
| `Permission` | `public int Permission { get; set; }` |
| `PlatformInterface` | `public string PlatformInterface { get; set; }` |
| `EpicUserId` | `public string EpicUserId { get; set; }` |
| `EpicUserName` | `public string EpicUserName { get; set; }` |
| `IsContinueGame` | `public bool IsContinueGame { get; set; }` |
| `ServerBandwidthLimitInMbps` | `public double ServerBandwidthLimitInMbps { get; set; }` |
| `ServerTickRate` | `public int ServerTickRate { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GameStartupInfo instance = ...;
```

## See Also

- [Area Index](../)