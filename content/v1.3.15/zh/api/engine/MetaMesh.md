---
title: MetaMesh
description: MetaMesh - 引擎网格容器，封装多?Mesh ?LOD、材质、着色器参数
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaMesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaMesh

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** sealed class（继承自 

`GameEntityComponent

`，标?

`[EngineClass("rglMeta_mesh")]

`?**领域:** 引擎 / 渲染资源

## 概述

`MetaMesh

` ?Bannerlord 引擎?网格容器"的托管包装。一?MetaMesh 包含多个 

`Mesh

`（子网格），每个 Mesh 有自己的材质、LOD（多级细节）层级、标签。它?3D 渲染的基本单位——`GameEntity

` 通过挂载 MetaMesh 来显?3D 模型，UI 中的 

`SceneWidget

` 也用 MetaMesh 渲染 3D 内容?2D 纹理?
所有方法都通过 

`EngineApplicationInterface.IMetaMesh

` 转发到原?C++ 引擎（P/Invoke），托管层只持有 

`UIntPtr

` 指针。`CreateMetaMesh(name)

` 按名从资源库创建实例；`GetCopy(name)

` 创建副本（可独立修改）；

`GetMorphedCopy(name, morphTarget, showErrors)

` 创建变形副本（用于角色面容生成等需?morph 的场景）?
核心能力?) **Mesh 管理**——`AddMesh

`/

`GetMeshAtIndex

`/

`MeshCount

`/

`GetFirstMeshWithTag

`/

`RemoveMeshesWithTag

`?) **LOD 控制**——`SetNumLods

`/

`ClearMeshesForLod

`/

`ClearMeshesForLowerLods

`/

`GetLodMaskForMeshAtIndex

`/

`HasAnyLods

`/

`HasAnyGeneratedLods

`?) **材质与着?*——`SetMaterial

`/

`SetMaterialToSubMeshesWithTag

`/

`SetShaderToMaterial

`/

`AddMaterialShaderFlag

`/

`SetFactor1

`/

`SetFactor2

`/

`SetFactorColorToSubMeshesWithTag

`/

`SetGlossMultiplier

`?) **变换**——`Frame

`（get/set 

`MatrixFrame

`?

`Fit

`（计算缩放居中帧?

`RecomputeBoundingBox

`/

`GetBoundingBox

`?) **批量优化**——`BatchMultiMeshes

`/

`BatchMultiMeshesMultiple

`/

`MergeMultiMeshes

`（合?draw call）；6) **布料**——`HasClothData

`/

`AssignClothBodyFrom

`?) **渲染辅助**——`SetBillboarding

`/

`SetCullMode

`/

`SetLodBias

`/

`SetVisibilityMask

`/

`PreloadForRendering

`/

`PreloadShaders

`?) **轮廓**——`SetContourState

`/

`SetContourColor

`（选中高亮）?
## 心智模型

?

`MetaMesh

` 看作"一?Mesh + 共享变换的渲染单?。一?MetaMesh 可以含多?Mesh（如角色身体=??手脚+装备），每个 Mesh 有独立的材质?LOD 链。`Frame

` 属性是整体变换（位?旋转+缩放），所?Mesh 共享?
`Factor1

`/

`Factor2

` 是两?

`uint

` 颜色因子，传给着色器用于团队着色（team color）、染色等。`SetFactor1Linear

`/

`SetFactor2Linear

` 接受线性空间颜色，

`SetFactor1

`/

`SetFactor2

` 接受 sRGB。`SetFactorColorToSubMeshesWithTag

` 只影响带特定 tag 的子 Mesh（如只染护甲不染皮肤）?
`BatchMultiMeshes

` 把多?MetaMesh ?Mesh 合并到一?draw call，提升渲染性能（用于同类大量物体如树木、尸体）。`MergeMultiMeshes

` 更彻底地合并但不可逆。`BatchMultiMeshesMultiple

` 批量版本?
`Fit

` 计算一?

`MatrixFrame

`，让 MetaMesh 缩放?0.95 并居中——用?UI 中预览模型时自动适配视口。它遍历所?Mesh ?bounding box，取最?最大值计算中心与缩放?
`UseHeadBoneFaceGenScaling

` 配合 

`Skeleton

` 做头部骨骼的面容生成缩放（角色创建时调整头型）?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`IsValid

` \| 

`bool

` \| 指针是否有效（非零）?\|
\| 

`MeshCount

` \| 

`int

` \| ?Mesh 数量?\|
\| 

`Frame

` \| 

`MatrixFrame

` \| 整体变换矩阵（位?旋转+缩放）。get/set?\|
\| 

`VectorUserData

` \| 

`Vec3

` \| 用户自定义向量数据，传给着色器。get/set?\|

## 主要方法

### CreateMetaMesh / GetCopy / GetMorphedCopy / CreateCopy
`

`

`csharp
public static MetaMesh CreateMetaMesh(string name = null)
public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)
public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)
public MetaMesh CreateCopy()
`

`

`
创建实例。`CreateMetaMesh

` 按名创建（null 创建?MetaMesh）；

`GetCopy

` 按名创建副本；`GetMorphedCopy

` 创建?morph 变形的副本；

`CreateCopy

` 从已有实例创建副本?
### AddMesh / AddMetaMesh
`

`

`csharp
public void AddMesh(Mesh mesh)
public void AddMesh(Mesh mesh, uint lodLevel)
public void AddMetaMesh(MetaMesh metaMesh)
`

`

`
添加 Mesh 或整?MetaMesh。`lodLevel

` 指定 LOD 层级?
### GetMeshAtIndex / GetFirstMeshWithTag
`

`

`csharp
public Mesh GetMeshAtIndex(int meshIndex)
public Mesh GetFirstMeshWithTag(string tag)
`

`

`
获取 Mesh。`GetFirstMeshWithTag

` 遍历所?Mesh 返回第一个带指定 tag 的?
### RemoveMeshesWithTag / RemoveMeshesWithoutTag / GetMeshCountWithTag
`

`

`csharp
public int RemoveMeshesWithTag(string tag)
public int RemoveMeshesWithoutTag(string tag)
public int GetMeshCountWithTag(string tag)
`

`

`
?tag 删除/统计 Mesh?
### SetNumLods / ClearMeshesForLod / ClearMeshesForLowerLods / ClearMeshesForOtherLods / ClearMeshes
`

`

`csharp
public void SetNumLods(int lodToClear)
public void ClearMeshesForLod(int lodToClear)
public void ClearMeshesForLowerLods(int lodToClear)
public void ClearMeshesForOtherLods(int lodToKeep)
public void ClearMeshes()
`

`

`
LOD 管理。设?LOD 层数、清除指定层?低于指定层级/非保留层?全部 Mesh?
### SetMaterial / SetMaterialToSubMeshesWithTag / SetShaderToMaterial / AddMaterialShaderFlag
`

`

`csharp
public void SetMaterial(Material material)
public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)
public void SetShaderToMaterial(string shaderName)
public void AddMaterialShaderFlag(string materialShaderFlag)
`

`

`
材质操作。`SetMaterial

` 设整体材质；

`SetMaterialToSubMeshesWithTag

` 只设?tag 的子 Mesh；`AddMaterialShaderFlag

` 给所?Mesh 的材质副本添加着色器 flag?
### SetFactor1 / SetFactor2 / SetFactor1Linear / SetFactor2Linear / SetFactorColorToSubMeshesWithTag / GetFactor1 / GetFactor2
`

`

`csharp
public void SetFactor1(uint factorColor1)
public void SetFactor2(uint factorColor2)
public void SetFactor1Linear(uint linearFactorColor1)
public void SetFactor2Linear(uint linearFactorColor2)
public void SetFactorColorToSubMeshesWithTag(uint color, string tag)
public uint GetFactor1()
public uint GetFactor2()
`

`

`
颜色因子。sRGB ?

`SetFactor1/2

`，线性空间用 

`SetFactor1Linear/2Linear

`。`SetFactorColorToSubMeshesWithTag

` 只影响带 tag 的子 Mesh?
### BatchMultiMeshes / BatchMultiMeshesMultiple / MergeMultiMeshes
`

`

`csharp
public void BatchMultiMeshes(MetaMesh metaMesh)
public void BatchMultiMeshesMultiple(List&lt;MetaMesh&gt; metaMeshes)
public void MergeMultiMeshes(MetaMesh metaMesh)
`

`

`
批量合并。`BatchMultiMeshes

` 合并另一?MetaMesh ?Mesh；`BatchMultiMeshesMultiple

` 批量合并多个；`MergeMultiMeshes

` 彻底合并?
### Fit / GetBoundingBox / RecomputeBoundingBox
`

`

`csharp
public MatrixFrame Fit()
public BoundingBox GetBoundingBox()
public void RecomputeBoundingBox(bool recomputeMeshes)
`

`

`
包围盒。`Fit

` 计算缩放居中帧（0.95 缩放）；

`GetBoundingBox

` 获取包围盒；

`RecomputeBoundingBox

` 重算?
### SetBillboarding / SetCullMode / SetLodBias / SetVisibilityMask / SetContourState / SetContourColor
`

`

`csharp
public void SetBillboarding(BillboardType billboard)
public void SetCullMode(MBMeshCullingMode cullMode)
public void SetLodBias(int lodBias)
public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)
public void SetContourState(bool alwaysVisible)
public void SetContourColor(uint color)
`

`

`
渲染参数。广告牌类型、剔除模式、LOD 偏置、可见性掩码、轮廓（选中高亮）状态与颜色?
### UseHeadBoneFaceGenScaling / DrawTextWithDefaultFont
`

`

`csharp
public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)
public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)
`

`

`
特殊用途。头部骨骼面容缩放；?Mesh 上绘制默认字体文本?
### PreloadForRendering / PreloadShaders / CheckResources
`

`

`csharp
public void PreloadForRendering()
public void PreloadShaders(bool useTableau, bool useTeamColor)
public int CheckResources()
`

`

`
预加载。预加载渲染资源、预加载着色器、检查资源状态?
### GetMultiMesh / GetAllMultiMeshes / CheckMetaMeshExistence / GetName
`

`

`csharp
public static MetaMesh GetMultiMesh(string name)
public static void GetAllMultiMeshes(ref List&lt;MetaMesh&gt; multiMeshList)
public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)
public string GetName()
`

`

`
静态查询。按名获取全局 MultiMesh、获取所?MultiMesh、检查存在性、获取名称?
## 使用示例

### 示例: 为实体创建带团队颜色?MetaMesh

**场景**: Mod 在场景中生成旗帜实体，需要按氏族颜色染色并设置选中轮廓?
`

`

`csharp
public GameEntity CreateBannerEntity(Vec3 position, Clan clan)
{
    // 1. 创建实体
    var entity = GameEntity.CreateEmpty(Mission.Current.Scene);

    // 2. 创建 MetaMesh 副本（必须用 GetCopy 创建副本，不能直接改全局资源?    MetaMesh bannerMesh = MetaMesh.GetCopy("banner_pole_mesh");

    // 3. 设置团队颜色因子
    bannerMesh.SetFactor1Linear(clan.Color);
    bannerMesh.SetFactor2Linear(clan.Color2);

    // 4. 只给?"cloth" tag 的子 Mesh 设置氏族材质
    var clanMaterial = Material.CreateFrom("banner_clan_material");
    bannerMesh.SetMaterialToSubMeshesWithTag(clanMaterial, "cloth");

    // 5. 添加轮廓（选中高亮?    bannerMesh.SetContourState(true);
    bannerMesh.SetContourColor(0xFFFFFFFF);  // 白色轮廓

    // 6. 设置位置
    var frame = MatrixFrame.Identity;
    frame.origin = position;
    bannerMesh.Frame = frame;

    // 7. 挂载到实?    entity.AddMesh(bannerMesh);
    entity.SetVisibilityMask(VisibilityMaskFlags.Visible);

    return entity;
}

// 性能优化：批量合并同类旗?public void BatchBanners(List&lt;GameEntity&gt; bannerEntities)
{
    if (bannerEntities.Count &lt; 2) return;

    var firstMesh = bannerEntities[0].GetMetaMesh(0);
    for (int i = 1; i &lt; bannerEntities.Count; i++)
    {
        var mesh = bannerEntities[i].GetMetaMesh(0);
        firstMesh.BatchMultiMeshes(mesh);  // 合并 draw call
    }
}
`

`

`

**要点**: 修改全局 MetaMesh 资源会影响所有引用者——必须用 

`GetCopy

`/

`CreateCopy

` 创建副本再修改；

`SetFactor1Linear

` 用于团队着色，

`SetFactor1

` ?sRGB 版本；`BatchMultiMeshes

` 合并后原 MetaMesh 仍独立存在但渲染时合?draw call；`Fit

` 返回?Frame 用于 UI 预览自动适配，不影响实际渲染；`SetContourState(true)

` 让轮廓始终可见（选中高亮），false 则按默认规则?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
