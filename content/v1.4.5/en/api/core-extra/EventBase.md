---
title: "EventBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventBase`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EventBase

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class EventBase`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventBase.cs`

## Overview

`EventBase` lives in `TaleWorlds.Library.EventSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.EventSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new EventBase();
```

## See Also

- [Complete Class Catalog](../catalog)