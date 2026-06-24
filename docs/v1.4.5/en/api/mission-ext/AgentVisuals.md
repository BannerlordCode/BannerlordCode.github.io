<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisuals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVisuals

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs`

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

**Purpose:** Gets the current value of `visuals`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### ResetNextFrame
`public void ResetNextFrame()`

**Purpose:** Resets `next frame` to its initial state.

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

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**Purpose:** Gets the current value of `copy agent visuals data`.

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Gets the current value of `entity`.

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**Purpose:** Gets the current value of `weak entity`.

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** Sets the value or state of `visible`.

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable eye point`.

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable neck point`.

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**Purpose:** Adds `prefab to agent visual bone by bone type` to the current collection or state.

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**Purpose:** Adds `prefab to agent visual bone by real bone index` to the current collection or state.

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool value)`

**Purpose:** Sets the value or state of `agent lod zero or max`.

### GetScale
`public float GetScale()`

**Purpose:** Gets the current value of `scale`.

### SetAction
`public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**Purpose:** Sets the value or state of `action`.

### DoesActionContinueWithCurrentAction
`public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)`

**Purpose:** Handles logic related to `does action continue with current action`.

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelIndex)`

**Purpose:** Gets the current value of `animation parameter at channel`.

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**Purpose:** Refreshes the display or cache of `refresh`.

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)`

**Purpose:** Sets the value or state of `cloth wind to weapon at index`.

### TickVisuals
`public void TickVisuals()`

**Purpose:** Handles logic related to `tick visuals`.

### Tick
`public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)`

**Purpose:** Handles logic related to `tick`.

### Create
`public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**Purpose:** Creates a new `create` instance or object.

### GetRandomGlossFactor
`public static float GetRandomGlossFactor(Random randomGenerator)`

**Purpose:** Gets the current value of `random gloss factor`.

### GetRandomClothingColors
`public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)`

**Purpose:** Gets the current value of `random clothing colors`.

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**Purpose:** Sets the value or state of `face generation params`.

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**Purpose:** Sets the value or state of `voice definition index`.

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**Purpose:** Handles logic related to `start rhubarb record`.

### SetAgentLodZeroOrMaxExternal
`public void SetAgentLodZeroOrMaxExternal(bool makeZero)`

**Purpose:** Sets the value or state of `agent lod zero or max external`.

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**Purpose:** Sets the value or state of `agent local speed`.

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**Purpose:** Sets the value or state of `look direction`.

### AddArmorMultiMeshesToAgentEntity
`public unsafe void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)`

**Purpose:** Adds `armor multi meshes to agent entity` to the current collection or state.

### MakeRandomVoiceForFacegen
`public void MakeRandomVoiceForFacegen()`

**Purpose:** Handles logic related to `make random voice for facegen`.

### AddTeamColorToMesh
`public static void AddTeamColorToMesh(MetaMesh metaMesh, uint color1, uint color2)`

**Purpose:** Adds `team color to mesh` to the current collection or state.

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**Purpose:** Sets the value or state of `clothing colors`.

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**Purpose:** Gets the current value of `clothing colors`.

### SetEntity
`public void SetEntity(GameEntity entity)`

**Purpose:** Sets the value or state of `entity`.

## Usage Example

```csharp
var value = new AgentVisuals();
value.GetVisuals();
```

## See Also

- [Complete Class Catalog](../catalog)