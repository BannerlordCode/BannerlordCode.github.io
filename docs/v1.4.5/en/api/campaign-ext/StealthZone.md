<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthZone`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthZone

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class StealthZone`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/StealthZone.cs`

## Overview

`StealthZone` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreAgentsActive` | `public bool AreAgentsActive { get; }` |
| `UseVolumeBox` | `public bool UseVolumeBox { get; }` |
| `EliminatedAgents` | `public int EliminatedAgents { get; }` |
| `Agents` | `public List<Agent> Agents { get; }` |
| `VolumeBox` | `public VolumeBox VolumeBox { get; }` |

## Key Methods

### StealthZoneEvent
`public delegate void StealthZoneEvent()`

**Purpose:** Handles logic related to `stealth zone event`.

### SetStealthAgents
`public void SetStealthAgents(List<Agent> agents)`

**Purpose:** Sets the value or state of `stealth agents`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Called when the `agent removed` event is raised.

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**Purpose:** Handles logic related to `is agent inside`.

### OnPlayerFlees
`public void OnPlayerFlees()`

**Purpose:** Called when the `player flees` event is raised.

### ResetEvents
`public void ResetEvents()`

**Purpose:** Resets `events` to its initial state.

### DisableAll
`public void DisableAll()`

**Purpose:** Handles logic related to `disable all`.

## Usage Example

```csharp
var value = new StealthZone();
value.StealthZoneEvent();
```

## See Also

- [Complete Class Catalog](../catalog)