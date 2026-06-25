---
title: "LocationCharacterMissionExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationCharacterMissionExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocationCharacterMissionExtensions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class LocationCharacterMissionExtensions`
**Area:** campaign-ext

## Overview

`LocationCharacterMissionExtensions` lives in `SandBox`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAgentBuildData
`public static AgentBuildData GetAgentBuildData(this LocationCharacter locationCharacter)`

**Purpose:** Gets the current value of `agent build data`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LocationCharacterMissionExtensions.GetAgentBuildData(locationCharacter);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
