---
title: "BattleReadyResponseMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleReadyResponseMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleReadyResponseMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class BattleReadyResponseMessage : FunctionResult`
**Base:** `FunctionResult`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServerManager.ToBattleServer/BattleReadyResponseMessage.cs`

## Overview

`BattleReadyResponseMessage` lives in `Messages.FromBattleServerManager.ToBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServerManager.ToBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldReportActivities` | `public bool ShouldReportActivities { get; }` |

## Usage Example

```csharp
var example = new BattleReadyResponseMessage();
```

## See Also

- [Complete Class Catalog](../catalog)