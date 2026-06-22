<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServerEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GameServerEntry` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)