<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServerEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameServerEntry`
**Area:** mission-ext

## Overview

`GameServerEntry` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public CustomBattleId Id { get; }` |
| `Address` | `public string Address { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `PlayerCount` | `public int PlayerCount { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `Ping` | `public int Ping { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; }` |
| `Permission` | `public int Permission { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |
| `HostId` | `public PlayerId HostId { get; }` |
| `HostName` | `public string HostName { get; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; }` |

## Key Methods

### FilterGameServerEntriesBasedOnCrossplay
`public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)`

**Purpose:** Handles logic related to `filter game server entries based on crossplay`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(serverList, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
