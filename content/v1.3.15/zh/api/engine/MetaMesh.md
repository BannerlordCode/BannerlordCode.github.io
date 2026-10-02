---
title: "MetaMesh"
description: "继承 GameEntityComponent 的复合网格：把多个带 LOD 的 Mesh 组装成可整体摆放渲染的零件，并管理团队色因子。"
---
# MetaMesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**Source:** `TaleWorlds.Engine/MetaMesh.cs`

## 概述

`MetaMesh`（多网格）是 [GameEntityComponent](../GameEntityComponent/) 的一种，把多个 [Mesh](../Mesh/)（可分别带不同 LOD 层级）组装成一个可被 [GameEntity](../GameEntity/) 整体摆放与渲染的复合网格。角色、武器、载具等几乎都是 `MetaMesh`：它负责按 LOD 选网格、管理团队色因子（factor1 / factor2）与挂骨骼缩放等。

## 心智模型

`MetaMesh` 是"装配好的零件集合"——它继承自 [GameEntityComponent](../GameEntityComponent/)，本质是挂在某 [GameEntity](../GameEntity/) 上的渲染组件，内部通过 `AddMesh(mesh, lodLevel)` 收集若干 [Mesh](../Mesh/)（同一 mesh 可分别放进不同 LOD）。你不该 `new` 它，构造器 internal；用 `CreateMetaMesh` 造空白、或用 `GetCopy(name)` 从资源的 `.xml` 定义复制一份再改。关键陷阱：`AddMaterialShaderFlag` 会遍历每个子 Mesh、对其材质 `CreateCopy` 再改，开销不小，批量换材质应优先用 `SetMaterialToSubMeshesWithTag` 精准命中。何时用：需要多 LOD 模型、按 tag 选/删部件、团队上色；何时不用：单一不变几何体直接用 [Mesh](../Mesh/)。获取实例：从 [GameEntity](../GameEntity/) 上取已挂载的 `MetaMesh`，或场景 prefab 自带；程序里多用 `GetCopy` / `GetMultiMesh`。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `CreateMetaMesh(name)` / `GetCopy(name, showErrors, mayReturnNull)` | 工厂：建空白多网格，或按资源名复制一份可改的副本 |
| `AddMesh(Mesh, lodLevel)` / `AddMetaMesh(MetaMesh)` | 把子网格 / 子多网格加入，并指定其 LOD 层级 |
| `GetMeshAtIndex(i)` / `MeshCount` / `GetFirstMeshWithTag(tag)` | 遍历内部子网格（注意 `GetFirstMeshWithTag` 找不到时返回 `null`） |
| `RemoveMeshesWithTag(tag)` / `RemoveMeshesWithoutTag(tag)` | 按 tag 整体增删部件（返回受影响数量） |
| `SetNumLods(lod)` / `ClearMeshesForLod(lod)` | 管理 LOD：设置层级数或清空某层网格 |
| `SetMaterial(Material)` / `SetMaterialToSubMeshesWithTag(...)` / `AddMaterialShaderFlag(flag)` | 统一 / 按 tag 换材质或加着色器开关 |
| `SetFactor1(uint)` / `SetFactor2(uint)` / `SetGlossMultiplier(float)` | 团队色因子与光泽倍率（角色换装上色用） |
| `RecomputeBoundingBox(recomputeMeshes)` / `Fit()` | 改完网格后重算包围盒；`Fit` 返回把内容居中缩放的变换 |

## 真实示例

```csharp
// 从资源复制一份可改的 MetaMesh
MetaMesh metaMesh = MetaMesh.GetCopy("northern_armor", true, false);

// 删掉带 shield 标签的部件，并给 body 部件换上团队色材质
metaMesh.RemoveMeshesWithTag("shield");
metaMesh.SetMaterialToSubMeshesWithTag(Material.GetFromResource("team_color_mat"), "body");

// 设置团队色因子与 LOD 层级，重算包围盒后挂到实体
metaMesh.SetFactor1(0xFF0000FF);
metaMesh.SetNumLods(3);
metaMesh.RecomputeBoundingBox(true);
GameEntity entity = GameEntity.Instantiate(Mission.Current.Scene, "northern_armor", true);
entity.AddMultiMesh(metaMesh);
```

## 风险与崩溃边界

- **`GetCopy` 可能返回 null。** 资源缺失且 `mayReturnNull = false` 时会走错误提示流程；安全起见传 `mayReturnNull = true` 并自行判空，或依赖 `showErrors`。
- **`GetFirstMeshWithTag` 返回 null。** 找不到 tag 时返回 `null`，调用其方法前必须判空，否则空引用崩溃。
- **`AddMaterialShaderFlag` 开销大。** 它会为每个子 Mesh 复制材质再改，部件多时成本高；批量换材质用 `SetMaterialToSubMeshesWithTag` / `SetFactorColorToSubMeshesWithTag`。
- **生命周期由引擎管理。** `Release()` 是 private，不应手动释放；`ClearMeshes` / `SetNumLods` 等会直接改动内部结构，调用时机需配合渲染流程。
- **`AddMesh` 需要有效 Mesh。** 传入 `null` 或已释放的 [Mesh](../Mesh/) 指针会让底层原生调用崩溃。

## 依赖关系

- 上游：[GameEntityComponent](../GameEntityComponent/) 提供组件挂载机制；[GameEntity](../GameEntity/) 持有并管理 `MetaMesh` 的生命周期与变换。
- 下游：`MetaMesh` 收集多个 [Mesh](../Mesh/)，并通过 `SetMaterial` 间接依赖 [Material](../Material/)。
- 相关：挂到骨骼上由 [Skeleton](../Skeleton/) 驱动；[Resource](../Resource/) 负责底层资源的缓存与查找。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管组件与原生 rgl 多网格的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[GameEntity](../GameEntity/) · [Mesh](../Mesh/) · [Material](../Material/) · [Skeleton](../Skeleton/) · [ParticleSystem](../ParticleSystem/) · [GameEntityComponent](../GameEntityComponent/)
