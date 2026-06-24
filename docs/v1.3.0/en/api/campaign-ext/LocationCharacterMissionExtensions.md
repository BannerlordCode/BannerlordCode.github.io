<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationCharacterMissionExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocationCharacterMissionExtensions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class LocationCharacterMissionExtensions`
**Base:** none
**File:** `SandBox/LocationCharacterMissionExtensions.cs`

## Overview

`LocationCharacterMissionExtensions` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAgentBuildData
`public static AgentBuildData GetAgentBuildData(this LocationCharacter locationCharacter)`

**Purpose:** Gets the current value of `agent build data`.

## Usage Example

```csharp
LocationCharacterMissionExtensions.GetAgentBuildData(locationCharacter);
```

## See Also

- [Complete Class Catalog](../catalog)