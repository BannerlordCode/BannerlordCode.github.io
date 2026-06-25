---
title: "BattleServerReadyResponseMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleServerReadyResponseMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleServerReadyResponseMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class BattleServerReadyResponseMessage : LoginResultObject`
**Base:** `LoginResultObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServerManager.ToBattleServer/BattleServerReadyResponseMessage.cs`

## Overview

`BattleServerReadyResponseMessage` lives in `Messages.FromBattleServerManager.ToBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServerManager.ToBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new BattleServerReadyResponseMessage();
```

## See Also

- [Complete Class Catalog](../catalog)