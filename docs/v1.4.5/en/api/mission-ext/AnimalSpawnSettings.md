<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimalSpawnSettings`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimalSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/AnimalSpawnSettings.cs`

## Overview

`AnimalSpawnSettings` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckAndSetAnimalAgentFlags
`public static void CheckAndSetAnimalAgentFlags(GameEntity spawnEntity, Agent animalAgent)`

**Purpose:** Handles logic related to `check and set animal agent flags`.

## Usage Example

```csharp
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## See Also

- [Complete Class Catalog](../catalog)