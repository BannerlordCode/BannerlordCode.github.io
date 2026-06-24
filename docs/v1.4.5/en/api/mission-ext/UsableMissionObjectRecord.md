<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObjectRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMissionObjectRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## Overview

`UsableMissionObjectRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDeactivated` | `public bool IsDeactivated { get; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; }` |
| `IsUserAgentExists` | `public bool IsUserAgentExists { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

## Usage Example

```csharp
var value = new UsableMissionObjectRecord();
value.ReadFromNetwork(bufferReadValid);
```

## See Also

- [Complete Class Catalog](../catalog)