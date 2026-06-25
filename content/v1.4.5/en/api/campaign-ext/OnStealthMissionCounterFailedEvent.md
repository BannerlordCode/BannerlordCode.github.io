---
title: "OnStealthMissionCounterFailedEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OnStealthMissionCounterFailedEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OnStealthMissionCounterFailedEvent

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class OnStealthMissionCounterFailedEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/OnStealthMissionCounterFailedEvent.cs`

## Overview

`OnStealthMissionCounterFailedEvent` lives in `SandBox.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new OnStealthMissionCounterFailedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)