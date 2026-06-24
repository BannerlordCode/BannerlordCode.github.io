<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientSocketSession`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClientSocketSession

**Namespace:** TaleWorlds.Diamond.Socket
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class ClientSocketSession : ClientsideSession, IClientSession`
**Base:** `ClientsideSession`
**File:** `TaleWorlds.Diamond/Socket/ClientSocketSession.cs`

## Overview

`ClientSocketSession` lives in `TaleWorlds.Diamond.Socket` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Socket` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var implementation = new CustomClientSocketSession();
```

## See Also

- [Complete Class Catalog](../catalog)