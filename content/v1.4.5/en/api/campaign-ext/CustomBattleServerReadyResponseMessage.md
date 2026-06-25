---
title: "CustomBattleServerReadyResponseMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleServerReadyResponseMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleServerReadyResponseMessage

**Namespace:** Messages.FromCustomBattleServerManager.ToCustomBattleServer
**Module:** Messages.FromCustomBattleServerManager
**Type:** `public class CustomBattleServerReadyResponseMessage : LoginResultObject`
**Base:** `LoginResultObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServerManager.ToCustomBattleServer/CustomBattleServerReadyResponseMessage.cs`

## Overview

`CustomBattleServerReadyResponseMessage` lives in `Messages.FromCustomBattleServerManager.ToCustomBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServerManager.ToCustomBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new CustomBattleServerReadyResponseMessage();
```

## See Also

- [Complete Class Catalog](../catalog)