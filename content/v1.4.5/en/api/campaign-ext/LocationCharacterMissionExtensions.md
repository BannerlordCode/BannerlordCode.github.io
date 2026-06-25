---
title: "LocationCharacterMissionExtensions"
description: "Auto-generated class reference for LocationCharacterMissionExtensions."
---
# LocationCharacterMissionExtensions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class LocationCharacterMissionExtensions`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/LocationCharacterMissionExtensions.cs`

## Overview

`LocationCharacterMissionExtensions` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAgentBuildData
`public static AgentBuildData GetAgentBuildData(this LocationCharacter locationCharacter)`

**Purpose:** Reads and returns the `agent build data` value held by the current object.

```csharp
// Static call; no instance required
LocationCharacterMissionExtensions.GetAgentBuildData(locationCharacter);
```

## Usage Example

```csharp
LocationCharacterMissionExtensions.GetAgentBuildData(locationCharacter);
```

## See Also

- [Area Index](../)