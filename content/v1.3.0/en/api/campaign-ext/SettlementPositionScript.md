---
title: "SettlementPositionScript"
description: "Auto-generated class reference for SettlementPositionScript."
---
# SettlementPositionScript

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class SettlementPositionScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox.View/Map/SettlementPositionScript.cs`

## Overview

`SettlementPositionScript` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |

## Key Methods

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** **Purpose:** Reads and returns the scene xml crc values value held by the this instance.

```csharp
// Obtain an instance of SettlementPositionScript from the subsystem API first
SettlementPositionScript settlementPositionScript = ...;
settlementPositionScript.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementPositionScript settlementPositionScript = ...;
settlementPositionScript.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

## See Also

- [Area Index](../)