---
title: "AgentVisuals"
description: "Auto-generated class reference for AgentVisuals."
---
# AgentVisuals

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs`

## Overview

`AgentVisuals` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFemale` | `public bool IsFemale { get; }` |

## Key Methods

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**Purpose:** Reads and returns the visuals value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetVisuals();
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.Reset();
```

### ResetNextFrame
`public void ResetNextFrame()`

**Purpose:** Returns next frame to its default or initial condition.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.ResetNextFrame();
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the frame value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetFrame();
```

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**Purpose:** Reads and returns the body properties value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetBodyProperties();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**Purpose:** Assigns a new value to body properties and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetBodyProperties(bodyProperties);
```

### GetIsFemale
`public bool GetIsFemale()`

**Purpose:** Reads and returns the is female value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetIsFemale();
```

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**Purpose:** Reads and returns the character object i d value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetCharacterObjectID();
```

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**Purpose:** Assigns a new value to character object i d and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetCharacterObjectID("example");
```

### GetEquipment
`public Equipment GetEquipment()`

**Purpose:** Reads and returns the equipment value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetEquipment();
```

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**Purpose:** Reads and returns the copy agent visuals data value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetCopyAgentVisualsData();
```

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Reads and returns the entity value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetEntity();
```

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** Assigns a new value to visible and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetVisible(false);
```

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**Purpose:** Reads and returns the global stable eye point value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetGlobalStableEyePoint(false);
```

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**Purpose:** Reads and returns the global stable neck point value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetGlobalStableNeckPoint(false);
```

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**Purpose:** Adds prefab to agent visual bone by bone type to the current collection or state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.AddPrefabToAgentVisualBoneByBoneType("example", boneType);
```

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**Purpose:** Adds prefab to agent visual bone by real bone index to the current collection or state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.AddPrefabToAgentVisualBoneByRealBoneIndex("example", 0);
```

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool value)`

**Purpose:** Assigns a new value to agent lod zero or max and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLodZeroOrMax(false);
```

### GetScale
`public float GetScale()`

**Purpose:** Reads and returns the scale value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetScale();
```

### SetAction
`public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**Purpose:** Assigns a new value to action and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetAction(actionIndex, 0, false);
```

### DoesActionContinueWithCurrentAction
`public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)`

**Purpose:** Returns a boolean answer to whether action continue with current action is true for the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.DoesActionContinueWithCurrentAction(actionIndex);
```

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelIndex)`

**Purpose:** Reads and returns the animation parameter at channel value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetAnimationParameterAtChannel(0);
```

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.Refresh(false, data, false);
```

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)`

**Purpose:** Assigns a new value to cloth wind to weapon at index and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetClothWindToWeaponAtIndex(localWindVector, false, weaponIndex);
```

### TickVisuals
`public void TickVisuals()`

**Purpose:** Advances the visuals state each frame or update cycle.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.TickVisuals();
```

### Tick
`public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.Tick(parentAgentVisuals, 0, false, 0);
```

### Create
`public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
AgentVisuals.Create(data, "example", false, false, false);
```

### GetRandomGlossFactor
`public static float GetRandomGlossFactor(Random randomGenerator)`

**Purpose:** Reads and returns the random gloss factor value held by the this instance.

```csharp
// Static call; no instance required
AgentVisuals.GetRandomGlossFactor(randomGenerator);
```

### GetRandomClothingColors
`public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)`

**Purpose:** Reads and returns the random clothing colors value held by the this instance.

```csharp
// Static call; no instance required
AgentVisuals.GetRandomClothingColors(0, inputColor1, inputColor2, color1, color2);
```

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**Purpose:** Assigns a new value to face generation params and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetFaceGenerationParams(faceGenerationParams);
```

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**Purpose:** Assigns a new value to voice definition index and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetVoiceDefinitionIndex(0, 0);
```

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**Purpose:** Starts the rhubarb record flow or state machine.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.StartRhubarbRecord("example", 0);
```

### SetAgentLodZeroOrMaxExternal
`public void SetAgentLodZeroOrMaxExternal(bool makeZero)`

**Purpose:** Assigns a new value to agent lod zero or max external and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLodZeroOrMaxExternal(false);
```

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**Purpose:** Assigns a new value to agent local speed and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLocalSpeed(speed);
```

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**Purpose:** Assigns a new value to look direction and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetLookDirection(direction);
```

### AddArmorMultiMeshesToAgentEntity
`public void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)`

**Purpose:** Adds armor multi meshes to agent entity to the current collection or state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.AddArmorMultiMeshesToAgentEntity(0, 0);
```

### MakeRandomVoiceForFacegen
`public void MakeRandomVoiceForFacegen()`

**Purpose:** Executes the MakeRandomVoiceForFacegen logic.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.MakeRandomVoiceForFacegen();
```

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**Purpose:** Assigns a new value to clothing colors and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetClothingColors(0, 0);
```

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**Purpose:** Reads and returns the clothing colors value held by the this instance.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.GetClothingColors(color1, color2);
```

### SetEntity
`public void SetEntity(GameEntity entity)`

**Purpose:** Assigns a new value to entity and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisuals from the subsystem API first
AgentVisuals agentVisuals = ...;
agentVisuals.SetEntity(entity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentVisuals agentVisuals = ...;
agentVisuals.GetVisuals();
```

## See Also

- [Area Index](../)