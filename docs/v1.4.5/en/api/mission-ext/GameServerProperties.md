<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServerProperties`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameServerProperties

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameServerProperties`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs`

## Overview

`GameServerProperties` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void CheckAndReplaceProxyAddress(IReadOnlyDictionary<string, string> proxyAddressMap)`

**Purpose:** Handles logic related to `check and replace proxy address`.

## Usage Example

```csharp
var value = new GameServerProperties();
value.CheckAndReplaceProxyAddress(iReadOnlyDictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)