---
title: MBAgentVisuals
description: MBAgentVisuals - Agent 视觉表现的原生对象封装，管理网格、骨骼、武器与轮廓
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAgentVisuals`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** sealed class（继承自 

`NativeObject

`，标?

`[EngineClass("Agent_visuals")]

`?**领域:** 引擎 / Agent 渲染

## 概述

`MBAgentVisuals

` ?Agent 视觉表现的原生对象封装。每?

`Agent

` 内部持有一?

`MBAgentVisuals

` 实例，负责管?Agent ?3D 渲染：身体网格、骨骼动画、武器网格、轮廓高亮、粒子效果、布料等。所有方法都通过 

`MBAPI.IMBAgentVisuals

` 接口转发到原?C++ 引擎（P/Invoke），托管层只持有 

`UIntPtr

` 指针?
核心能力分七组：1) **生命周期**——`CreateAgentVisuals

` 创建、`Reset

`/

`ResetNextFrame

` 重置、`IsValid

` 检查；2) **变换与帧**——`GetGlobalFrame

`/

`GetFrame

`/

`SetFrame

`/

`GetEntity

`/

`GetWeakEntity

`?) **骨骼**——`GetSkeleton

`/

`SetSkeleton

`/

`GetBoneEntitialFrame

`/

`GetRealBoneIndex

`/

`ApplySkeletonScale

`/

`UpdateSkeletonScale

`/

`SetAgentActionChannel

`?) **网格**——`AddMultiMesh

`/

`ReplaceMeshWithMesh

`/

`AddSkinMeshes

`/

`FillEntityWithBodyMeshesWithoutAgentVisuals

`/

`AddPrefabToAgentVisualBoneByBoneType

`/

`AddPrefabToAgentVisualBoneByRealBoneIndex

`/

`AddHorseReinsClothMesh

`?) **武器**——`AddWeaponToAgentEntity

`/

`ClearAllWeaponMeshes

`/

`ClearWeaponMeshes

`/

`SetWieldedWeaponIndices

`/

`UpdateQuiverMeshesWithoutAgent

`/

`GetAttachedWeaponEntity

`/

`SetClothWindToWeaponAtIndex

`?) **视觉状?*——`SetVisible

`/

`GetVisible

`/

`SetContourColor

`/

`SetEnableOcclusionCulling

`/

`SetAgentLodZeroOrMax

`/

`SetAgentLocalSpeed

`/

`SetLookDirection

`/

`SetLodAtlasShadingIndex

`/

`BatchLastLodMeshes

`?) **特效与声?*——`CreateParticleSystemAttachedToBone

`/

`MakeVoice

`/

`SetVoiceDefinitionIndex

`/

`StartRhubarbRecord

`?
`GetGlobalStableEyePoint

`/

`GetGlobalStableNeckPoint

`/

`GetCurrentHeadLookDirection

` 提供 Agent 的眼?脖子/头部朝向信息，用于相机和 AI。`GetVisualStrengthOfAgentVisual

` 计算两个 Agent 视觉之间的可见度（受光照影响），用于潜行判定。`GetMovementMode

` 返回当前行走模式（走/跑）。`GetCurrentRagdollState

` 返回布娃娃状态。`GetBoneTypeData

` 获取骨骼的碰撞体类型数据?
## 心智模型

?

`MBAgentVisuals

` 看作"Agent ?3D 渲染管理?。它持有原生引擎中的 

`Agent_visuals

` 对象指针，所有操作都通过 P/Invoke 转发?
**创建与初始化**：`CreateAgentVisuals(scene, ownerName, eyeOffset)

` 创建新的视觉对象。之后通过 

`SetEntity

` 关联 

`GameEntity

`，`AddSkinMeshes

` 添加身体网格（根?

`SkinGenerationParams

` ?

`BodyProperties

` 生成面容），

`AddWeaponToAgentEntity

` 逐个添加武器?
**每帧更新**：`Tick(parentAgentVisuals, dt, entityMoving, speed)

` 驱动动画更新。`SetAgentLocalSpeed

`/

`SetLookDirection

` 更新运动与视线。`LazyUpdateAgentRendererData

` 延迟更新渲染数据?
**骨骼操作**：`GetSkeleton

` 获取骨骼对象，`SetSkeleton

` 替换骨骼。`SetAgentActionChannel

` 在指定动画通道上播放动作。`ApplySkeletonScale

`/

`UpdateSkeletonScale

` 调整骨骼缩放（角色体型变化）。`GetBoneEntitialFrame

` 获取骨骼的局部变换矩阵。`AddPrefabToAgentVisualBoneByBoneType

`/

`ByRealBoneIndex

` ?Prefab 挂到指定骨骼上（如挂旗帜到右手）?
**轮廓高亮**：`SetContourColor(color, alwaysVisible)

` 设置轮廓颜色。color ?null ?

`DisableContour

`。用于选中高亮（友方绿色、敌方红色等）?
## 主要方法

### CreateAgentVisuals
`

`

`csharp
public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)
`

`

`
创建新的 Agent 视觉对象。在指定 Scene 中创建，ownerName 用于调试，eyeOffset 是眼睛偏移?
### Tick
`

`

`csharp
public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)
`

`

`
每帧驱动动画更新。parentAgentVisuals 是父级视觉（如坐骑上骑手的父级是坐骑），dt 是帧时间，entityMoving 是否移动中，speed 是移动速度?
### GetGlobalFrame / GetFrame / SetFrame
`

`

`csharp
public MatrixFrame GetGlobalFrame()
public MatrixFrame GetFrame()
public void SetFrame(ref MatrixFrame frame)
`

`

`
获取/设置变换矩阵。`GetGlobalFrame

` 返回世界坐标帧，

`GetFrame

` 返回局部坐标帧，`SetFrame

` 设置局部帧?
### GetEntity / GetWeakEntity / SetEntity
`

`

`csharp
public GameEntity GetEntity()
public WeakGameEntity GetWeakEntity()
public void SetEntity(GameEntity value)
`

`

`
获取/设置关联?

`GameEntity

`。`GetWeakEntity

` 返回弱引用（避免循环引用）?
### GetSkeleton / SetSkeleton
`

`

`csharp
public Skeleton GetSkeleton()
public void SetSkeleton(Skeleton newSkeleton)
`

`

`
获取/设置骨骼对象。骨骼管理动画播放与骨骼变换?
### AddSkinMeshes / FillEntityWithBodyMeshesWithoutAgentVisuals
`

`

`csharp
public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)
public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)
`

`

`
添加皮肤网格。`AddSkinMeshes

` 根据 

`SkinGenerationParams

` ?

`BodyProperties

` 生成面容与身体网格。`FillEntityWithBodyMeshesWithoutAgentVisuals

` 静态方法直接填充实体（不需?AgentVisuals）?
### AddMultiMesh / ReplaceMeshWithMesh
`

`

`csharp
public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)
public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)
`

`

`
添加/替换身体部位网格。`BodyMeshTypes

` 包括 Cap（头）、Chestpiece（身）、Footwear（腿）、Gloves（手）、Shoulderpiece（肩）。`ReplaceMeshWithMesh

` 移除旧网格再添加新网格?
### AddWeaponToAgentEntity / ClearAllWeaponMeshes / ClearWeaponMeshes / SetWieldedWeaponIndices
`

`

`csharp
public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData[] weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData[] ammoWeaponStatsData, GameEntity cachedEntity)
public void ClearAllWeaponMeshes()
public void ClearWeaponMeshes(EquipmentIndex index)
public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)
`

`

`
武器网格管理。`AddWeaponToAgentEntity

` 在指定槽位添加武器（含弹药数据）。`ClearAllWeaponMeshes

` 清除所有武器。`ClearWeaponMeshes

` 清除指定槽位。`SetWieldedWeaponIndices

` 设置当前手持武器槽位（主?副手）?
### SetContourColor
`

`

`csharp
public void SetContourColor(uint? color, bool alwaysVisible = true)
`

`

`
设置轮廓高亮颜色。color ?null 时启用轮廓（

`SetAsContourEntity

` + 

`SetContourState

`），null ?

`DisableContour

`。用于选中/友方/敌方高亮?
### SetVisible / GetVisible
`

`

`csharp
public void SetVisible(bool value)
public bool GetVisible()
`

`

`
设置/获取可见性?
### SetAgentActionChannel
`

`

`csharp
public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)
`

`

`
在指定动画通道播放动作。通过 

`IMBSkeletonExtensions.SetAgentActionChannel

` 转发到骨骼。支持混合周期、面部变形重启、与下一动作的混合因子?
### CreateParticleSystemAttachedToBone
`

`

`csharp
public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)
public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)
`

`

`
在指定骨骼上创建粒子效果（如 blood spurt、魔法特效）。boneLocalParticleFrame 是粒子相对于骨骼的局部帧?
### GetGlobalStableEyePoint / GetGlobalStableNeckPoint / GetCurrentHeadLookDirection
`

`

`csharp
public Vec3 GetGlobalStableEyePoint(bool isHumanoid)
public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)
public Vec3 GetCurrentHeadLookDirection()
`

`

`
获取眼睛/脖子世界坐标位置、头部朝向。用于相机定位和 AI 视线判定?
### GetVisualStrengthOfAgentVisual
`

`

`csharp
public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)
`

`

`
计算两个 Agent 视觉之间的可见度?~1）。受环境光、日月光强度影响。用于潜?可见性判定?
### GetBodyMeshIndex (static)
`

`

`csharp
public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)
`

`

`
把装备槽位映射为身体网格类型。`NumAllWeaponSlots

`→Cap、`Body

`→Chestpiece、`Leg

`→Footwear、`Gloves

`→Gloves、`Cape

`→Shoulderpiece?
### AddPrefabToAgentVisualBoneByBoneType / ByRealBoneIndex
`

`

`csharp
public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)
public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)
`

`

`
?Prefab 挂载到指定骨骼上。返?

`CompositeComponent

`。用于挂载旗帜、火把等附加物?
### SetVoiceDefinitionIndex / MakeVoice
`

`

`csharp
public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)
public void MakeVoice(int voiceId, Vec3 position)
`

`

`
设置语音定义索引与音调、播放语音。voiceId 指定语音条目，position 是发声位置?
## 使用示例

### 示例: 为自定义 Agent 设置视觉与轮?
**场景**: Mod 创建一?NPC Agent，需要设置身体网格、武器、选中轮廓颜色?
`

`

`csharp
public Agent CreateNPCAgent(Scene scene, Vec3 position, CharacterObject character)
{
    // 1. 创建 Agent 基础
    Agent agent = new Agent();
    agent.Setup(scene, new AgentBuildData(character));

    // 2. 通过 Agent.Visuals 操作视觉
    MBAgentVisuals visuals = agent.Visuals;

    // 3. 设置位置?    MatrixFrame frame = MatrixFrame.Identity;
    frame.origin = position;
    visuals.SetFrame(ref frame);

    // 4. 添加皮肤网格（根据角色面容属性）
    var skinParams = new SkinGenerationParams
    {
        BodyMeshType = character.Race,
        FaceMeshType = character.Race
    };
    visuals.AddSkinMeshes(skinParams, character.BodyProperties, useGPUMorph: true, useFaceCache: false);

    // 5. 设置选中轮廓（绿色表示友方）
    visuals.SetContourColor(0xFF00FF00, alwaysVisible: true);

    // 6. 添加武器
    Equipment equipment = character.Equipment;
    for (int i = 0; i &lt; 4; i++)
    {
        if (!equipment[i].IsEmpty)
        {
            WeaponData weaponData = equipment[i].GetWeaponData();
            visuals.AddWeaponToAgentEntity(i, in weaponData, null, in default(WeaponData), null, null);
        }
    }

    // 7. 设置手持武器（主手槽?0，副?-1 表示无）
    visuals.SetWieldedWeaponIndices(0, -1);

    // 8. 在头部骨骼上创建粒子效果（如治疗光环?    sbyte headBoneIndex = visuals.GetRealBoneIndex(HumanBone.Head);
    MatrixFrame particleFrame = MatrixFrame.Identity;
    particleFrame.origin.z = 0.2f;  // 头顶上方 0.2 ?    visuals.CreateParticleSystemAttachedToBone("heal_aura_particle", headBoneIndex, ref particleFrame);

    return agent;
}

// 获取 Agent 眼睛位置（用于第一人称相机?public Vec3 GetAgentEyePosition(Agent agent)
{
    return agent.Visuals.GetGlobalStableEyePoint(agent.IsHuman);
}

// 检查两?Agent 之间的可见度（潜行系统）
public float GetVisibilityBetween(Agent observer, Agent target, Mission mission)
{
    float ambientLight = 0.5f;
    float sunMoonLight = 0.8f;
    return observer.Visuals.GetVisualStrengthOfAgentVisual(
        target.Visuals, mission, ambientLight, sunMoonLight, target.Index);
}
`

`

`

**要点**: 

`MBAgentVisuals

` ?sealed class，不能继承；所有方法都?P/Invoke 转发，性能开销低但要注意原生对象生命周期；

`AddSkinMeshes

` ?

`BodyProperties

` 决定面容生成结果；`SetWieldedWeaponIndices

` 必须在武器网格添加后调用；`SetContourColor(null)

` 禁用轮廓；`GetBodyMeshIndex

` ?static 方法，用于从装备槽推断身体部位；骨骼索引通过 

`GetRealBoneIndex(HumanBone)

` 获取，不要硬编码；`CreateParticleSystemAttachedToBone

` 的骨骼索引必须是 

`GetRealBoneIndex

` 返回的真实索引?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
