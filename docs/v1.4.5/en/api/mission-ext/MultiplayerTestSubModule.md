<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTestSubModule`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTestSubModule

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Test
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTestSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Multiplayer.Test/TaleWorlds.MountAndBlade.Multiplayer.Test/MultiplayerTestSubModule.cs`

## Overview

`MultiplayerTestSubModule` lives in `TaleWorlds.MountAndBlade.Multiplayer.Test` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Test` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new MultiplayerTestSubModule();
```

## See Also

- [Complete Class Catalog](../catalog)