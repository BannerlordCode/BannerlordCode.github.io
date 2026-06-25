---
title: ManagedMeshEditOperations
description: ManagedMeshEditOperations - 引擎原生网格编辑操作类，提供顶点/?三角?矩形/网格的添加、变换、着色、法线计算和网格合并等底层网格操?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedMeshEditOperations`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations
**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** sealed class (继承 

`NativeObject

`, 

`[EngineClass("rglManaged_mesh_edit_operations")]

`)

## 概述

`ManagedMeshEditOperations

` ?Bannerlord 引擎原生?*网格编辑?*，通过 P/Invoke 封装 C++ 引擎?

`rglManaged_mesh_edit_operations

` 对象。它允许在运行时程序化构建和修改 

`Mesh

` 数据——添加顶点、面、三角形、矩形、线段、网格，执行顶点变换、着色、法线计算、网格合并和 2D 缩放平铺等操作。所有方法都是对 

`EngineApplicationInterface.IManagedMeshEditOperations

` 的薄封装，直接传递原生指针调?C++ 代码?
典型工作流：?通过 

`Create(Mesh)

` 从现?

`Mesh

` 创建编辑器实例（或从空网格开始）；② 调用 

`AddVertex

`/

`AddFaceCorner

`/

`AddFace

` 逐元素构建，或用 

`AddTriangle

`/

`AddRectangle3

`/

`AddRect

`/

`AddLine

`/

`GenerateGrid

` 等便捷方法批量添加；?通过 

`AddMesh

`/

`AddMeshWithColor

`/

`AddMeshToBone

` 等方法将其他 

`Mesh

` 合并进来；④ 调用 

`ComputeTangents

`/

`ComputeCornerNormals

` 计算法线和切线；?调用 

`FinalizeEditing

` 完成编辑，生成可用的 

`Mesh

`?
此类的使用场景包括：程序化生成地形网格、动态合并装饰物网格以减?draw call、运行时修改武器/盔甲外观、构建调试可视化（线段、矩形）等。引擎的 

`Scene

` 系统在加载时也使用类似接口构建复合网格?
## 心智模型

?

`ManagedMeshEditOperations

` 当作**C++ 网格编辑器的 .NET 代理**。`NativeObject

` 基类持有一?C++ 原生指针（`UIntPtr

`），所有方法通过 

`EngineApplicationInterface

` 将指针和参数传递给 C++ 侧执行。`Create

` 静态方法通过 

`EngineApplicationInterface.IManagedMeshEditOperations.Create(mesh.Pointer)

` 创建新的 C++ 对象并返回包装实例?
网格数据结构是顶点（Vertex）→ 面角（FaceCorner）→ 面（Face）三层：

`AddVertex

` 添加顶点位置返回索引；`AddFaceCorner

` 将顶点绑?UV、颜色、法线组成面角并返回索引；`AddFace

` 由三个面角索引组成三角形面。便捷方?

`AddTriangle

`/

`AddRectangle3

` 等自动完成这三步。`AddFaceCorner

` 有两个重载——单 UV 和双 UV（用于光照贴图等第二?UV）?
顶点变换方法分两组：

`ScaleVertices

`/

`MoveVerticesAlongNormal

`/

`TranslateVertices

` 是简单几何变换；

`TransformVerticesToParent

`/

`TransformVerticesToLocal

` 使用 

`MatrixFrame

` 做坐标空间转换。`SetVertexColor

`/

`SetVertexColorAlpha

` 批量设置颜色，`SetCornerVertexColor

`/

`SetCornerUV

` 精确设置单个面角属性。`ApplyCPUSkinning

` ?CPU 端应用骨骼蒙皮动画——用于需?GPU 蒙皮不可用或需要读取变换后顶点位置的场景?
`RescaleMesh2d

` 系列方法专门用于 2D 平面网格的缩放和平铺——将网格缩放到指定尺寸范围，可选地重复（RepeatX/Y）以填充区域，支持边框（frameThickness/frameSide）和瓦片比例（xyRatio）。`Weld

` 合并重叠顶点，`RemoveDuplicatedCorners

` 移除重复面角，`InvertFacesWindingOrder

` 翻转面朝向——这些是网格清理工具。`ReserveVertices

`/

`ReserveFaceCorners

`/

`ReserveFaces

` 预分配内存避免频繁扩容。`FinalizeEditing

` 在所有编辑完成后调用，执行内部优化和验证?
## 主要方法

### Create
`

`

`csharp
public static ManagedMeshEditOperations Create(Mesh meshToEdit)
`

`

`
静态工厂方法。从现有 

`Mesh

` 创建编辑器实例。传入的 

`Mesh

` 数据会被复制到新的编辑器对象中作为初始状态?
### 顶点操作
`

`

`csharp
public int AddVertex(Vec3 vertexPos)
public void SetPositionOfVertex(int vertexIndex, Vec3 position)
public Vec3 GetPositionOfVertex(int vertexIndex)
public void ScaleVertices(float newScale)
public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)
public void MoveVerticesAlongNormal(float moveAmount)
public void TranslateVertices(Vec3 newOrigin)
public void TransformVerticesToParent(MatrixFrame frame)
public void TransformVerticesToLocal(MatrixFrame frame)
public void EnsureTransformedVertices()
`

`

`
`AddVertex

` 添加顶点返回索引。`SetPositionOfVertex

`/

`GetPositionOfVertex

` 按索引读写顶点位置。`ScaleVertices

` 两个重载：标量均匀缩放和向量逐轴缩放（`keepUvX

` 保留 U 坐标，`maxUvSize

` 限制 UV 最大值）。`MoveVerticesAlongNormal

` 沿法线方向偏移。`TranslateVertices

` 平移所有顶点。`TransformVerticesToParent

`/

`TransformVerticesToLocal

` 在父/局部坐标空间间转换。`EnsureTransformedVertices

` 确保变换后的顶点数据已更新?
### 面角与面操作
`

`

`csharp
public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)
public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)
public int AddFace(int patchNode0, int patchNode1, int patchNode2)
public void RemoveFace(int faceIndex)
public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)
public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)
public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)
`

`

`
`AddFaceCorner

` 将顶点绑?UV/颜色/法线组成面角，返回面角索引。双 UV 重载用于光照贴图等。`AddFace

` 由三个面角索引组成三角形面。`SetCornerUV

` ?

`uvNumber

` 参数指定操作第几?UV?=?UV?=光照 UV）?
### 形状便捷方法
`

`

`csharp
public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)
public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)
public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)
public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)
public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)
public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)
public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)
public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)
`

`

`
`AddTriangle

` 两个重载：简单版（统一颜色）和完整版（逐顶点法线和颜色）。`AddRectangle3

` 在原点创建矩形。`AddRect

`/

`AddRectWithZUp

` 由起点终点定义矩形，后?Z 轴朝上。`AddLine

` 创建线段网格（`lineWidth

` 默认 0.004f）。`GenerateGrid

` 生成规则网格（`numEdges

` 指定边数，`edgeScale

` 指定边长）?
### 网格合并
`

`

`csharp
public void AddMesh(Mesh mesh, MatrixFrame frame)
public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)
public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)
public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)
public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)
public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)
public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)
public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)
`

`

`
将另一?

`Mesh

` 的数据合并到当前编辑器。`frame

` 指定变换。`AddMeshWithSkinData

`/

`AddMeshToBone

` 绑定骨骼。`AddMeshWithFixedNormals

` 保留原法线不重算。`AddMeshAux

` 是最灵活的版本，通过参数控制法线变换、高度渐变、蒙皮数据等。`useDoublePrecision

` 控制内部计算精度?
### 顶点颜色
`

`

`csharp
public void SetVertexColor(Vec3 color)
public Vec3 GetVertexColor(int faceCornerIndex)
public void SetVertexColorAlpha(float newAlpha)
public float GetVertexColorAlpha()
`

`

`
`SetVertexColor

` 批量设置所有顶点颜色。`GetVertexColor

` 按面角索引读取颜色。`SetVertexColorAlpha

`/

`GetVertexColorAlpha

` 批量操作透明度通道?
### 法线与切?

`

`

`csharp
public int ComputeTangents(bool checkFixedNormals)
public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)
public void ComputeCornerNormalsWithSmoothingData()
public void InvertFacesWindingOrder()
public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)
`

`

`
`ComputeTangents

` 计算切线，返回状态码。`ComputeCornerNormals

` 计算面角法线，`smoothCornerNormals

` 控制是否平滑。`InvertFacesWindingOrder

` 翻转所有面的顶点顺序（反转法线方向）。`UpdateOverlappedVertexNormals

` 将附加网格的重叠顶点法线与目标网格对齐（

`mergeRadiusSQ

` 是合并半径平方）?
### 2D 缩放平铺
`

`

`csharp
public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)
public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)
public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)
public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)
public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)
public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)
`

`

`
?2D 网格缩放?

`[scaleSizeMin, scaleSizeMax]

` 范围。`RepeatX

`/

`RepeatY

` 在指定方向重复网格以填充区域。`WithTiling

` 版本额外支持瓦片比例（`xyRatio

`）。`frameThickness

`/

`frameSide

` 添加边框。`WithoutChangingUV

` 保留原始 UV 不变?
### 内存与清?

`

`

`csharp
public void ReserveVertices(int count)
public void ReserveFaceCorners(int count)
public void ReserveFaces(int count)
public int RemoveDuplicatedCorners()
public void Weld()
public void ClearAll()
`

`

`
`ReserveXxx

` 预分配内存。`RemoveDuplicatedCorners

` 移除重复面角返回移除数量。`Weld

` 焊接重叠顶点。`ClearAll

` 清空所有数据重置编辑器?
### 骨骼蒙皮
`

`

`csharp
public void ApplyCPUSkinning(Skeleton skeleton)
`

`

`
?CPU 端应用骨骼蒙皮变换。用于需要读取变换后顶点位置的场景（如碰撞检测），或 GPU 蒙皮不可用的环境?
### FinalizeEditing
`

`

`csharp
public void FinalizeEditing()
`

`

`
完成编辑。执行内部优化、验证和缓冲区生成。必须在所有编辑操作完成后调用，编辑器内的数据才能被渲染管线正确使用?
## 使用示例

### 示例: 程序化构建一个带颜色的三角形网格

**场景**: Mod 需要在运行时创建一个简单的彩色三角形用于标记或调试可视化?
`

`

`csharp
public static Mesh CreateColoredTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 color)
{
    // 从空 Mesh 创建编辑器（传入一个已有的最?Mesh?    Mesh baseMesh = Mesh.GetFromResource("empty_mesh");
    var editor = ManagedMeshEditOperations.Create(baseMesh);

    // 添加简单三角形（统一颜色，自动法线）
    editor.AddTriangle(p1, p2, p3,
        new Vec2(0, 0), new Vec2(1, 0), new Vec2(0, 1),
        color);

    // 计算法线和切?    editor.ComputeCornerNormals();
    editor.ComputeTangents(false);

    // 完成编辑
    editor.FinalizeEditing();
    return baseMesh;
}
`

`

`

**要点**: 

`Create

` 需要一个基础 

`Mesh

` 作为编辑目标——编辑操作修改的是这?Mesh 的数据；

`AddTriangle

` 自动完成添加顶点、面角和面三步；

`ComputeCornerNormals

` 必须在添加完所有面后调用，否则法线不正确；

`FinalizeEditing

` 是必须的收尾步骤——不调用?Mesh 数据可能不完整?
### 示例: 合并多个装饰物网格减?draw call

**场景**: 场景中有大量小装饰物（石头、草丛），每个都是独?Mesh ?draw call。将它们合并为一?Mesh 提升性能?
`

`

`csharp
public static Mesh MergeDecorationMeshes(List&lt;(Mesh mesh, MatrixFrame frame)&gt; decorations)
{
    Mesh resultMesh = Mesh.GetFromResource("empty_mesh");
    var editor = ManagedMeshEditOperations.Create(resultMesh);

    // 预分配内存减少扩?    int totalVertices = decorations.Sum(d =&gt; d.mesh.VertexCount);
    editor.ReserveVertices(totalVertices);
    editor.ReserveFaces(decorations.Count * 100); // 估计?
    // 逐个合并
    foreach (var (mesh, frame) in decorations)
    {
        editor.AddMeshWithFixedNormals(mesh, frame);
    }

    // 清理重复顶点
    editor.RemoveDuplicatedCorners();

    // 完成编辑
    editor.FinalizeEditing();
    return resultMesh;
}
`

`

`

**要点**: 

`AddMeshWithFixedNormals

` 保留原始法线——装饰物通常已有正确法线，合并后不需要重算；

`ReserveVertices

`/

`ReserveFaces

` 预分配内存避免频繁扩容；

`RemoveDuplicatedCorners

` 清理重叠位置的重复面角，减少数据量；合并后的单个 Mesh 只需一?draw call，但失去个体剔除能力——适合小而密集的装饰物，不适合大型可单独剔除的对象?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
