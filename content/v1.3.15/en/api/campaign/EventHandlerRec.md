---
title: "EventHandlerRec"
description: "Auto-generated class reference for EventHandlerRec."
---
# EventHandlerRec

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class EventHandlerRec<TS>`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MbEvent.2.cs`

## Overview

`EventHandlerRec` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EventHandlerRec instance = ...;
```

## See Also

- [Area Index](../)