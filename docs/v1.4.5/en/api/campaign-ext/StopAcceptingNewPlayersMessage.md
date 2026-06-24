<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StopAcceptingNewPlayersMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StopAcceptingNewPlayersMessage

**Namespace:** Messages.FromBattleServer.ToBattleServerManager
**Module:** Messages.FromBattleServer
**Type:** `public class StopAcceptingNewPlayersMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServer.ToBattleServerManager/StopAcceptingNewPlayersMessage.cs`

## Overview

`StopAcceptingNewPlayersMessage` lives in `Messages.FromBattleServer.ToBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServer.ToBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new StopAcceptingNewPlayersMessage();
```

## See Also

- [Complete Class Catalog](../catalog)