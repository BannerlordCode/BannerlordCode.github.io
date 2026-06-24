<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleServerReadyMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleServerReadyMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class CustomBattleServerReadyMessage : LoginMessage`
**Base:** `LoginMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServer.ToCustomBattleServerManager/CustomBattleServerReadyMessage.cs`

## Overview

`CustomBattleServerReadyMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `AuthToken` | `public string AuthToken { get; }` |
| `LoadedModules` | `public ModuleInfoModel LoadedModules { get; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; }` |

## Usage Example

```csharp
var example = new CustomBattleServerReadyMessage();
```

## See Also

- [Complete Class Catalog](../catalog)