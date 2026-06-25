---
title: "MultiplayerStarter"
description: "Auto-generated class reference for MultiplayerStarter."
---
# MultiplayerStarter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerStarter`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerStarter.cs`

## Overview

`MultiplayerStarter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadXMLFromFile
`public void LoadXMLFromFile(string xmlPath, string xsdPath)`

**Purpose:** Reads x m l from file from persistent storage or a stream.

```csharp
// Obtain an instance of MultiplayerStarter from the subsystem API first
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.LoadXMLFromFile("example", "example");
```

### ClearEmptyObjects
`public void ClearEmptyObjects()`

**Purpose:** Removes all empty objects from the this instance.

```csharp
// Obtain an instance of MultiplayerStarter from the subsystem API first
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.ClearEmptyObjects();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.LoadXMLFromFile("example", "example");
```

## See Also

- [Area Index](../)