---
title: "Mesh"
description: "存放单个可渲染几何体（顶点、法线、UV、面与材质）的资源，是渲染层最底层的零件，可由程序化编辑。"
---
# Mesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**Source:** `TaleWorlds.Engine/Mesh.cs`

## 概述

`Mesh` 是存放单个可渲染几何体的资源：顶点、法线、UV、面索引以及它所用的 [Material](../Material/)。它既可以是编辑器/资源里以 `.brf` / `.mesh` 形式存在的静态数据（用 `GetFromResource` 加载），也能在运行时用 `CreateMesh` 建一份可编辑副本并在上面 `AddFace` / `AddFaceCorner` 手绘几何。与 [MetaMesh](../MetaMesh/) 不同，一个 `Mesh` 只对应一个 LOD、一种材质，是"被组装"的零件。

## 心智模型

`Mesh` 是引擎渲染层最底层的几何容器——你拿到一个 `Mesh`，要么是资源系统按名字加载（`GetFromResource`），要么是从材质新建可编辑网格（`CreateMeshWithMaterial`）或空白可编辑网格（`CreateMesh(true)`）。它持有自己的一份 [Material](../Material/)（`GetMaterial` / `SetMaterial`），但不负责骨骼动画；蒙皮由 [Skeleton](../Skeleton/) 在更高层驱动。关键陷阱：它同样是共享 [Resource](../Resource/)，直接改顶点前应先 `CreateCopy`；而且所有写顶点/面的方法（`AddFace`、`AddFaceCorner`、`ClearMesh`、`SetColor`）都要求先通过 `LockEditDataWrite` 拿到写锁，否则改动无效甚至崩溃——引擎内部多数写方法会先检查 `base.IsValid`（指针为空时直接返回 `-1` 或 `0` 而不报错）。何时用：程序化生成或修改几何（旗帜、描边、动态贴花）、读取面数/包围盒；何时不用：要管理多 LOD 或多部件装配时用 [MetaMesh](../MetaMesh/)。获取实例：实体上的网格来自 `MetaMesh.GetMeshAtIndex`，或从 [GameEntity](../GameEntity/) 取得其挂载网格。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GetFromResource(name)` / `CreateMesh(editable)` / `CreateMeshWithMaterial(material)` | 静态工厂：按资源名取、建空白可编辑网格、或带材质建网格 |
| `CreateCopy()` | 复制独立网格，避免改动共享资源影响其它引用 |
| `GetMaterial()` / `SetMaterial(Material)` / `SetMaterial(name)` | 读取 / 替换该网格使用的材质（按对象或按资源名） |
| `AddFaceCorner(pos, normal, uv, color, lock)` / `AddFace(a, b, c, lock)` | 在写锁保护下追加一个顶点与一个三角形，返回其索引 |
| `ComputeNormals()` / `ComputeTangents()` | 改完顶点后重算法线与切线，否则光照与法线贴图会出错 |
| `GetFaceCount()` / `GetFaceCornerCount()` | 读取面与顶点数量（无效网格返回 0 而非抛异常） |
| `SetLocalFrame(frame)` / `GetLocalFrame()` | 设置 / 读取网格在父节点下的局部变换 |
| `Color` / `Color2` / `SetColorAndStroke(...)` | 顶点着色与描边颜色（UI、旗帜常用）；无效网格设值仅在 Debug 下断言 |
| `LockEditDataWrite()` / `UnlockEditDataWrite(handle)` | 顶点写入前必须加锁 / 解锁，否则写操作被忽略 |

## 真实示例

```csharp
// 从资源复制一份独立网格，避免改动共享资源
Mesh mesh = Mesh.GetFromResource("my_icon").CreateCopy();

// 加写锁后依次追加三个顶点与一个三角形，再解锁
UIntPtr handle = mesh.LockEditDataWrite();
int c0 = mesh.AddFaceCorner(new Vec3(0f, 0f, 0f), Vec3.Up, new Vec2(0f, 0f), 0xFFFFFFFF, handle);
int c1 = mesh.AddFaceCorner(new Vec3(1f, 0f, 0f), Vec3.Up, new Vec2(1f, 0f), 0xFFFFFFFF, handle);
int c2 = mesh.AddFaceCorner(new Vec3(0f, 1f, 0f), Vec3.Up, new Vec2(0f, 1f), 0xFFFFFFFF, handle);
mesh.AddFace(c0, c1, c2, handle);
mesh.UnlockEditDataWrite(handle);

// 重算法线并换上自己的材质
mesh.ComputeNormals();
mesh.SetMaterial(Material.GetFromResource("my_icon_mat"));
```

## 风险与崩溃边界

- **顶点写入必须加锁。** `AddFace` / `AddFaceCorner` / `SetColor` / `ClearMesh` 等都需要在 `LockEditDataWrite` / `UnlockEditDataWrite` 之间调用；不加锁的写入会被忽略。
- **共享资源。** 直接改 `GetFromResource` 返回的网格会影响所有引用者，需独立修改先 `CreateCopy`。
- **无效句柄静默失败。** 多数写方法内部检查 `base.IsValid`，指针为空时返回 `-1` / `0` 而不抛异常，调试时容易误以为写入成功。
- **`Color` / `Color2` 设值会断言。** 在无效网格上设颜色仅在 Debug 构建触发 `Debug.FailedAssert`，Release 下被跳过。
- **`SetColorAndStroke` 依赖 `Color` / `Color2`。** 它会先写这两个属性再发起原生调用，需先设好颜色再调用。

## 依赖关系

- 上游：[Resource](../Resource/) 是网格与材质共享的缓存资源基类；[Material](../Material/) 由网格持有并决定其外观。
- 下游：网格被 [MetaMesh](../MetaMesh/) 收集为子部件；被 [Skeleton](../Skeleton/) 通过 `AddMesh` 挂到骨架随之运动。
- 相关：编辑锁与顶点缓冲由 [NativeObject](../NativeObject/) 的原生指针管理；运行时几何查询服务于 [Scene](../Scene/) 渲染。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管网格与原生 rgl 网格缓冲的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[Material](../Material/) · [MetaMesh](../MetaMesh/) · [Skeleton](../Skeleton/) · [ParticleSystem](../ParticleSystem/) · [Resource](../Resource/) · [Texture](../Texture/) · [Shader](../Shader/)
