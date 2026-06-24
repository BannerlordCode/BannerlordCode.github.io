<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkMessageHandlerRegistererContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NetworkMessageHandlerRegistererContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NetworkMessageHandlerRegistererContainer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`NetworkMessageHandlerRegistererContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterMessages
`public void RegisterMessages()`

**Purpose:** Handles logic related to `register messages`.

### UnregisterMessages
`public void UnregisterMessages()`

**Purpose:** Handles logic related to `unregister messages`.

## Usage Example

```csharp
var value = new NetworkMessageHandlerRegistererContainer();
value.RegisterMessages();
```

## See Also

- [Complete Class Catalog](../catalog)