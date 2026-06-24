<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVisuals`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVisuals

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs`

## 概述

`AgentVisuals` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsFemale` | `public bool IsFemale { get; }` |

## 主要方法

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**用途 / Purpose:** 获取 `visuals` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### ResetNextFrame
`public void ResetNextFrame()`

**用途 / Purpose:** 将 `next frame` 重置为初始状态。

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 获取 `frame` 的当前值。

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**用途 / Purpose:** 获取 `body properties` 的当前值。

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 设置 `body properties` 的值或状态。

### GetIsFemale
`public bool GetIsFemale()`

**用途 / Purpose:** 获取 `is female` 的当前值。

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**用途 / Purpose:** 获取 `character object i d` 的当前值。

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**用途 / Purpose:** 设置 `character object i d` 的值或状态。

### GetEquipment
`public Equipment GetEquipment()`

**用途 / Purpose:** 获取 `equipment` 的当前值。

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**用途 / Purpose:** 获取 `copy agent visuals data` 的当前值。

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 获取 `entity` 的当前值。

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**用途 / Purpose:** 获取 `weak entity` 的当前值。

### SetVisible
`public void SetVisible(bool value)`

**用途 / Purpose:** 设置 `visible` 的值或状态。

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**用途 / Purpose:** 获取 `global stable eye point` 的当前值。

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**用途 / Purpose:** 获取 `global stable neck point` 的当前值。

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab to agent visual bone by bone type`。

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab to agent visual bone by real bone index`。

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool value)`

**用途 / Purpose:** 设置 `agent lod zero or max` 的值或状态。

### GetScale
`public float GetScale()`

**用途 / Purpose:** 获取 `scale` 的当前值。

### SetAction
`public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 设置 `action` 的值或状态。

### DoesActionContinueWithCurrentAction
`public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)`

**用途 / Purpose:** 处理 `does action continue with current action` 相关逻辑。

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelIndex)`

**用途 / Purpose:** 获取 `animation parameter at channel` 的当前值。

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)`

**用途 / Purpose:** 设置 `cloth wind to weapon at index` 的值或状态。

### TickVisuals
`public void TickVisuals()`

**用途 / Purpose:** 处理 `tick visuals` 相关逻辑。

### Tick
`public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Create
`public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### GetRandomGlossFactor
`public static float GetRandomGlossFactor(Random randomGenerator)`

**用途 / Purpose:** 获取 `random gloss factor` 的当前值。

### GetRandomClothingColors
`public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)`

**用途 / Purpose:** 获取 `random clothing colors` 的当前值。

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 设置 `face generation params` 的值或状态。

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**用途 / Purpose:** 设置 `voice definition index` 的值或状态。

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**用途 / Purpose:** 处理 `start rhubarb record` 相关逻辑。

### SetAgentLodZeroOrMaxExternal
`public void SetAgentLodZeroOrMaxExternal(bool makeZero)`

**用途 / Purpose:** 设置 `agent lod zero or max external` 的值或状态。

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**用途 / Purpose:** 设置 `agent local speed` 的值或状态。

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**用途 / Purpose:** 设置 `look direction` 的值或状态。

### AddArmorMultiMeshesToAgentEntity
`public unsafe void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)`

**用途 / Purpose:** 向当前集合/状态中添加 `armor multi meshes to agent entity`。

### MakeRandomVoiceForFacegen
`public void MakeRandomVoiceForFacegen()`

**用途 / Purpose:** 处理 `make random voice for facegen` 相关逻辑。

### AddTeamColorToMesh
`public static void AddTeamColorToMesh(MetaMesh metaMesh, uint color1, uint color2)`

**用途 / Purpose:** 向当前集合/状态中添加 `team color to mesh`。

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**用途 / Purpose:** 设置 `clothing colors` 的值或状态。

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**用途 / Purpose:** 获取 `clothing colors` 的当前值。

### SetEntity
`public void SetEntity(GameEntity entity)`

**用途 / Purpose:** 设置 `entity` 的值或状态。

## 使用示例

```csharp
var value = new AgentVisuals();
value.GetVisuals();
```

## 参见

- [完整类目录](../catalog)