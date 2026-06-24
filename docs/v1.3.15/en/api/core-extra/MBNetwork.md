<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBNetwork`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBNetwork

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBNetwork`
**Area:** core-extra

## Overview

`MBNetwork` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NetworkViewCommunication` | `public static INetworkCommunication NetworkViewCommunication { get; }` |
| `MyPeer` | `public static VirtualPlayer MyPeer { get; }` |

## Key Methods

### Initialize
`public static void Initialize(INetworkCommunication networkCommunication)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBNetwork.Initialize(networkCommunication);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
