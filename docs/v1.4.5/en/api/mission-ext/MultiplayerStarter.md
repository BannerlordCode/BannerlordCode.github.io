<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerStarter`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerStarter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerStarter`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerStarter.cs`

## Overview

`MultiplayerStarter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadXMLFromFile
`public void LoadXMLFromFile(string xmlPath, string xsdPath)`

**Purpose:** Loads `x m l from file` data.

### ClearEmptyObjects
`public void ClearEmptyObjects()`

**Purpose:** Handles logic related to `clear empty objects`.

## Usage Example

```csharp
var value = new MultiplayerStarter();
value.LoadXMLFromFile("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)