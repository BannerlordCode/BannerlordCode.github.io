---
title: "CreateAgentVisuals"
description: "Auto-generated class reference for CreateAgentVisuals."
---
# CreateAgentVisuals

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateAgentVisuals : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateAgentVisuals.cs`

## Overview

`CreateAgentVisuals` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `VisualsIndex` | `public int VisualsIndex { get; }` |
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Equipment` | `public Equipment Equipment { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `SelectedEquipmentSetIndex` | `public int SelectedEquipmentSetIndex { get; }` |
| `TroopCountInFormation` | `public int TroopCountInFormation { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CreateAgentVisuals instance = ...;
```

## See Also

- [Area Index](../)