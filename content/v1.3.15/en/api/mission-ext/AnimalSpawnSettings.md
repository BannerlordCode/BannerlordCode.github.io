---
title: "AnimalSpawnSettings"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimalSpawnSettings`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimalSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**Area:** mission-ext

## Overview

`AnimalSpawnSettings` lives in `TaleWorlds.MountAndBlade.Objects`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckAndSetAnimalAgentFlags
`public static void CheckAndSetAnimalAgentFlags(GameEntity spawnEntity, Agent animalAgent)`

**Purpose:** Handles logic related to `check and set animal agent flags`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
