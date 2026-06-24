<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisualHolder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVisualHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualHolder : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/AgentVisualHolder.cs`

## Overview

`AgentVisualHolder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAction
`public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**Purpose:** Sets the value or state of `action`.

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Gets the current value of `entity`.

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**Purpose:** Gets the current value of `visuals`.

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**Purpose:** Sets the value or state of `frame`.

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Gets the current value of `frame`.

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**Purpose:** Gets the current value of `body properties`.

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**Purpose:** Sets the value or state of `body properties`.

### GetIsFemale
`public bool GetIsFemale()`

**Purpose:** Gets the current value of `is female`.

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**Purpose:** Gets the current value of `character object i d`.

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**Purpose:** Sets the value or state of `character object i d`.

### GetEquipment
`public Equipment GetEquipment()`

**Purpose:** Gets the current value of `equipment`.

### RefreshWithNewEquipment
`public void RefreshWithNewEquipment(Equipment equipment)`

**Purpose:** Refreshes the display or cache of `with new equipment`.

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**Purpose:** Sets the value or state of `clothing colors`.

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**Purpose:** Gets the current value of `clothing colors`.

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**Purpose:** Gets the current value of `copy agent visuals data`.

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new AgentVisualHolder();
value.SetAction(actionName, 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)