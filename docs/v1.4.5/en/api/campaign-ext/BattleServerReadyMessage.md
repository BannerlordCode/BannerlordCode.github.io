<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleServerReadyMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleServerReadyMessage

**Namespace:** Messages.FromBattleServer.ToBattleServerManager
**Module:** Messages.FromBattleServer
**Type:** `public class BattleServerReadyMessage : LoginMessage`
**Base:** `LoginMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServer.ToBattleServerManager/BattleServerReadyMessage.cs`

## Overview

`BattleServerReadyMessage` lives in `Messages.FromBattleServer.ToBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServer.ToBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `AssignedAddress` | `public string AssignedAddress { get; }` |
| `AssignedPort` | `public ushort AssignedPort { get; }` |
| `Region` | `public string Region { get; }` |
| `Priority` | `public sbyte Priority { get; }` |
| `Password` | `public string Password { get; }` |
| `GameType` | `public string GameType { get; }` |

## Usage Example

```csharp
var example = new BattleServerReadyMessage();
```

## See Also

- [Complete Class Catalog](../catalog)