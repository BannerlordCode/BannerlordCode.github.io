<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewPlayerMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NewPlayerMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class NewPlayerMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServerManager.ToBattleServer/NewPlayerMessage.cs`

## Overview

`NewPlayerMessage` lives in `Messages.FromBattleServerManager.ToBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServerManager.ToBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerBattleInfo` | `public PlayerBattleInfo PlayerBattleInfo { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `PlayerParty` | `public Guid PlayerParty { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |

## Usage Example

```csharp
var example = new NewPlayerMessage();
```

## See Also

- [Complete Class Catalog](../catalog)