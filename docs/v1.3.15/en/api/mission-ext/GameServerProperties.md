<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServerProperties`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerProperties

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GameServerProperties` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `Region` | `public string Region { get; set; }` |
| `GameModule` | `public string GameModule { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Map` | `public string Map { get; set; }` |
| `UniqueMapId` | `public string UniqueMapId { get; set; }` |
| `GamePassword` | `public string GamePassword { get; set; }` |
| `AdminPassword` | `public string AdminPassword { get; set; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; set; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; set; }` |
| `IsOfficial` | `public bool IsOfficial { get; set; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; set; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; set; }` |
| `Permission` | `public int Permission { get; set; }` |
| `HostId` | `public PlayerId HostId { get; set; }` |
| `HostName` | `public string HostName { get; set; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; set; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; set; }` |


## Key Methods

### CheckAndReplaceProxyAddress

```csharp
public void CheckAndReplaceProxyAddress(IReadOnlyDictionary<string, string> proxyAddressMap)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)