---
title: "AgentVisuals"
description: "AgentVisuals 的自动生成类参考。"
---
# AgentVisuals

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 visuals 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetVisuals();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.Reset();
```

### ResetNextFrame
`public void ResetNextFrame()`

**用途 / Purpose:** 将 next frame 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.ResetNextFrame();
```

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 读取并返回当前对象中 frame 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetFrame();
```

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**用途 / Purpose:** 读取并返回当前对象中 body properties 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetBodyProperties();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 为 body properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetBodyProperties(bodyProperties);
```

### GetIsFemale
`public bool GetIsFemale()`

**用途 / Purpose:** 读取并返回当前对象中 is female 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetIsFemale();
```

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**用途 / Purpose:** 读取并返回当前对象中 character object i d 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetCharacterObjectID();
```

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**用途 / Purpose:** 为 character object i d 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetCharacterObjectID("example");
```

### GetEquipment
`public Equipment GetEquipment()`

**用途 / Purpose:** 读取并返回当前对象中 equipment 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetEquipment();
```

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**用途 / Purpose:** 读取并返回当前对象中 copy agent visuals data 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetCopyAgentVisualsData();
```

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 读取并返回当前对象中 entity 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetEntity();
```

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**用途 / Purpose:** 读取并返回当前对象中 weak entity 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetWeakEntity();
```

### SetVisible
`public void SetVisible(bool value)`

**用途 / Purpose:** 为 visible 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetVisible(false);
```

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**用途 / Purpose:** 读取并返回当前对象中 global stable eye point 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetGlobalStableEyePoint(false);
```

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**用途 / Purpose:** 读取并返回当前对象中 global stable neck point 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetGlobalStableNeckPoint(false);
```

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**用途 / Purpose:** 将 prefab to agent visual bone by bone type 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.AddPrefabToAgentVisualBoneByBoneType("example", boneType);
```

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**用途 / Purpose:** 将 prefab to agent visual bone by real bone index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.AddPrefabToAgentVisualBoneByRealBoneIndex("example", 0);
```

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool value)`

**用途 / Purpose:** 为 agent lod zero or max 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLodZeroOrMax(false);
```

### GetScale
`public float GetScale()`

**用途 / Purpose:** 读取并返回当前对象中 scale 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetScale();
```

### SetAction
`public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 为 action 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetAction(actionIndex, 0, false);
```

### DoesActionContinueWithCurrentAction
`public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)`

**用途 / Purpose:** 判断action continue with current action这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.DoesActionContinueWithCurrentAction(actionIndex);
```

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelIndex)`

**用途 / Purpose:** 读取并返回当前对象中 animation parameter at channel 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
var result = agentVisuals.GetAnimationParameterAtChannel(0);
```

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.Refresh(false, data, false);
```

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)`

**用途 / Purpose:** 为 cloth wind to weapon at index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetClothWindToWeaponAtIndex(localWindVector, false, weaponIndex);
```

### TickVisuals
`public void TickVisuals()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进visuals的状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.TickVisuals();
```

### Tick
`public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.Tick(parentAgentVisuals, 0, false, 0);
```

### Create
`public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
AgentVisuals.Create(data, "example", false, false, false);
```

### GetRandomGlossFactor
`public static float GetRandomGlossFactor(Random randomGenerator)`

**用途 / Purpose:** 读取并返回当前对象中 random gloss factor 的结果。

```csharp
// 静态调用，不需要实例
AgentVisuals.GetRandomGlossFactor(randomGenerator);
```

### GetRandomClothingColors
`public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)`

**用途 / Purpose:** 读取并返回当前对象中 random clothing colors 的结果。

```csharp
// 静态调用，不需要实例
AgentVisuals.GetRandomClothingColors(0, inputColor1, inputColor2, color1, color2);
```

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 为 face generation params 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetFaceGenerationParams(faceGenerationParams);
```

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**用途 / Purpose:** 为 voice definition index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetVoiceDefinitionIndex(0, 0);
```

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**用途 / Purpose:** 启动rhubarb record流程或状态机。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.StartRhubarbRecord("example", 0);
```

### SetAgentLodZeroOrMaxExternal
`public void SetAgentLodZeroOrMaxExternal(bool makeZero)`

**用途 / Purpose:** 为 agent lod zero or max external 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLodZeroOrMaxExternal(false);
```

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**用途 / Purpose:** 为 agent local speed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetAgentLocalSpeed(speed);
```

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**用途 / Purpose:** 为 look direction 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetLookDirection(direction);
```

### AddArmorMultiMeshesToAgentEntity
`public unsafe void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)`

**用途 / Purpose:** 将 armor multi meshes to agent entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.AddArmorMultiMeshesToAgentEntity(0, 0);
```

### MakeRandomVoiceForFacegen
`public void MakeRandomVoiceForFacegen()`

**用途 / Purpose:** 调用 MakeRandomVoiceForFacegen 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.MakeRandomVoiceForFacegen();
```

### AddTeamColorToMesh
`public static void AddTeamColorToMesh(MetaMesh metaMesh, uint color1, uint color2)`

**用途 / Purpose:** 将 team color to mesh 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
AgentVisuals.AddTeamColorToMesh(metaMesh, 0, 0);
```

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**用途 / Purpose:** 为 clothing colors 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetClothingColors(0, 0);
```

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**用途 / Purpose:** 读取并返回当前对象中 clothing colors 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.GetClothingColors(color1, color2);
```

### SetEntity
`public void SetEntity(GameEntity entity)`

**用途 / Purpose:** 为 entity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisuals 实例
AgentVisuals agentVisuals = ...;
agentVisuals.SetEntity(entity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentVisuals agentVisuals = ...;
agentVisuals.GetVisuals();
```

## 参见

- [本区域目录](../)