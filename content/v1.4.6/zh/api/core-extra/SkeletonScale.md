---
title: "SkeletonScale"
description: "骨骼缩放定义：按骨骼名给三维骨骼逐根缩放，供骑乘时贴合骑手体型与跨体型蒙皮调整，注册类型名是 Scale 而 XML 源是 SkeletonScales。"
---

# SkeletonScale

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/SkeletonScale.cs`

## 概述

116 行、七个属性、两个方法。它描述「一具骨骼的哪些骨头要缩放、缩放多少」——一个 `Vec3` 的 `MountSitBoneScale` 缩放骑手坐骨，一个 `Vec3[]` 的 `Scales` 数组配一个 `List<string>` 的 `BoneNames` 逐根缩放。

数据从 XML `<BoneScale bone_name="..." scale="x,y,z"/>` 子节点读进来，先存**骨骼名**（`BoneNames`），**骨骼索引要等游戏初始化完成后才补**——`MBGameManager.OnGameInitializationFinished` 遍历全部 `SkeletonScale`，对每个名字调 `Skeleton.GetBoneIndexFromName(skeletonScale.SkeletonModel, name)` 算出索引，调 `SetBoneIndices` 写进 骨骼索引数组 并把 `BoneNames` 置为 null。

## 心智模型

把它想成**一张「骨骼变形表」**，分两轮：

1. **XML 装载期（名字态）** —— `Deserialize` 读 `skeleton` 属性得到 `SkeletonModel`，逐个 `<BoneScale>` 子节点读 `bone_name` 与 `scale`。此时只有**名字**，骨骼索引数组 是 null。`SetBoneIndices` 甚至没被调用过。
2. **游戏初始化完成（索引态）** —— 引擎侧的 `Skeleton.GetBoneIndexFromName` 才能把名字翻译成索引。一次性调 `SetBoneIndices` 把索引写入数组并把 `BoneNames` 置 null。**从此这份定义只能按索引用。**

所以 `BoneNames` 与 骨骼索引数组 是**互斥的两个阶段状态**，不是两份冗余数据。

四条边界：

1. **注册类型名是 `Scale`，不是 `SkeletonScale`。** `Game.RegisterTypes` 里写的是 `objectManager.RegisterType<SkeletonScale>("Scale", "Scales", 3U, true, false);`——类型名 `"Scale"`、目录名 `"Scales"`。而加载用的是 `this.ObjectManager.LoadXML("SkeletonScales", false);`。**三处名字都不一样**（类型名 / 注册名 / XML 目录名）。

2. **`BoneNames` 会被置 null，不是清空。** `SetBoneIndices` 里 `this.BoneNames = null;`。在初始化完成之后访问 `BoneNames` 拿到的是 null，`.Count` 直接炸。**用 骨骼索引数组 判断是否就绪，别碰 `BoneNames`。**

3. **`Scales` 可能整个是 null。** `Deserialize` 里 `this.Scales = list.ToArray();` 只在遍历到名为 `BoneScales` 的子节点时才执行。一个 `<Scale>` 条目如果没写 `<BoneScales>` 子节点，`Scales` 就是 null，`BoneNames` 是空列表。

4. **默认值不对称。** `MountSitBoneScale` 缺省是 `Vec3(1f, 1f, 1f, -1f)`（第四分量为 -1，w 通道）；`MountRadiusAdder` 缺省是 0；`BoneNames` 在**构造函数**里就显式赋 null。`Scales` 与 骨骼索引数组 都没有初值。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SkeletonModel` | `public string SkeletonModel { get; private set; }` | 目标骨骼名（XML 属性 `skeleton`）。**索引换算的 key**——按骨骼名与骨架名查索引的引擎静态方法 两个参数之一。 |
| `MountSitBoneScale` | `public Vec3 MountSitBoneScale { get; private set; }` | 骑手坐骨缩放。XML 属性 `mount_sit_bone_scale`，逗号分隔三段。**缺省 `Vec3(1f, 1f, 1f, -1f)`，不是 0。** |
| `MountRadiusAdder` | `public float MountRadiusAdder { get; private set; }` | 骑乘碰撞半径附加量（XML 属性 `mount_radius_adder`）。用 `float.Parse`，**属性值格式不对直接抛**。 |
| `Scales` | `public Vec3[] Scales { get; private set; }` | 逐根骨骼的缩放向量。**只有存在 `<BoneScales>` 子节点时才被赋值，否则为 null。** |
| `BoneNames` | `public List<string> BoneNames { get; private set; }` | 装载期的骨骼名清单。**构造函数与 `SetBoneIndices` 都把它置 null。** |
| 骨骼索引数组 | `public sbyte[] BoneIndices { get; private set; }` | 初始化完成后的骨骼索引。**与 `Scales` 一一对应，同长度。** |
| `.ctor` | `public SkeletonScale()` | 无参构造，**唯一动作是 `this.BoneNames = null;`**。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize`，读 `skeleton` / `mount_sit_bone_scale` / `mount_radius_adder`，再遍历子节点找 `BoneScales` → `BoneScale` 逐条填 `BoneNames` 与 `Scales`。**`Initialize` 在本类没被重写。** |
| `SetBoneIndices` | `public void SetBoneIndices(sbyte[])`（形参是索引数组） | 写入 骨骼索引数组 并把 `BoneNames` 置 null。**不做长度校验**——传入长度与 `Scales` 不一致时后续按下标配对会越界。 |

## 真实示例

按 id 取一份骨骼缩放定义，先判断处在哪个阶段（**`BoneNames` 与 骨骼索引数组 二选一**）：

```csharp
SkeletonScale scale = MBObjectManager.Instance.GetObject<SkeletonScale>("human_scale_settlement");

if (scale == null)
{
    Debug.Print("skeleton scale not loaded", 0);
    return;
}

Debug.Print("skeleton=" + scale.SkeletonModel, 0);
Debug.Print("mountSitBoneScale=" + scale.MountSitBoneScale + " radiusAdder=" + scale.MountRadiusAdder, 0);

if (scale.BoneIndices != null)
{
    Debug.Print("resolved, boneCount=" + scale.BoneIndices.Length, 0);
}
else
{
    Debug.Print("not resolved yet", 0);
}

if (scale.Scales != null)
{
    Debug.Print("scale count=" + scale.Scales.Length, 0);
}
```

逐根读缩放向量（只在索引态下按下标配对，`-1` 是无效骨）：

```csharp
SkeletonScale scale = MBObjectManager.Instance.GetObject<SkeletonScale>("human_scale_settlement");

if (scale.BoneIndices == null || scale.Scales == null)
{
    Debug.Print("not ready", 0);
    return;
}

for (int i = 0; i < scale.BoneIndices.Length && i < scale.Scales.Length; i++)
{
    if (scale.BoneIndices[i] < 0)
    {
        continue;
    }

    Vec3 vec = scale.Scales[i];
    Debug.Print("bone " + scale.BoneIndices[i] + " scale=" + vec, 0);
}
```

自己算索引（引擎侧初始化完成前做的同一件事）：

```csharp
using TaleWorlds.Engine;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public static class SkeletonScaleResolver
{
    public static bool TryResolve(SkeletonScale scale, out sbyte[] indices)
    {
        indices = null;
        if (scale.SkeletonModel == null || scale.BoneNames == null)
        {
            return false;
        }

        sbyte[] resolved = new sbyte[scale.BoneNames.Count];
        for (int i = 0; i < resolved.Length; i++)
        {
            resolved[i] = Skeleton.GetBoneIndexFromName(scale.SkeletonModel, scale.BoneNames[i]);
        }

        indices = resolved;
        return true;
    }
}

SkeletonScale scale = MBObjectManager.Instance.GetObject<SkeletonScale>("human_scale_settlement");
sbyte[] bones;
if (SkeletonScaleResolver.TryResolve(scale, out bones))
{
    Debug.Print("resolved " + bones.Length + " bones", 0);
}
else
{
    Debug.Print("cannot resolve without bone names", 0);
}
```

从马匹组件读它引用的那份骨骼缩放定义：

```csharp
ItemObject horse = MBObjectManager.Instance.GetObject<ItemObject>("horse_empire_1");

if (horse == null || !horse.HasHorseComponent)
{
    Debug.Print("not a horse", 0);
    return;
}

SkeletonScale mounted = horse.HorseComponent.SkeletonScale;
Debug.Print("scale id=" + mounted.StringId + " model=" + mounted.SkeletonModel, 0);
Debug.Print("radiusAdder=" + mounted.MountRadiusAdder, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 所有属性 `private set`，运行时改不了。
- **三处名字不一致。** 注册类型名 `Scale`、注册目录 `Scales`、XML 加载名 `SkeletonScales`。按 `SkeletonScale` 当注册名去找会找不到。
- **`BoneNames` 在初始化完成后是 null。** `SetBoneIndices` 显式置 null。**在 `OnGameInitializationFinished` 之后访问 `.BoneNames.Count` 会抛空引用。**
- **骨骼索引数组 在初始化完成前是 null。** 早期阶段（模块加载、`OnSubModuleLoad`）拿到的是 null 数组。
- **`Scales` 可能是 null。** 没有 `<BoneScales>` 子节点时从未被赋值。
- **`SetBoneIndices` 不校验长度。** 传入长度与 `Scales` 不一致，按下标配对会越界。引擎侧的实现保证了 `new sbyte[skeletonScale.BoneNames.Count]`，自己调用时得自己保证。
- **`Skeleton.GetBoneIndexFromName` 返回 `-1` 表示找不到骨骼。** `SetBoneIndices` 不做校验，无效索引照样写进去，下游按下标取骨会出问题。
- **`MountSitBoneScale` 缺省不是 0。** 是 `Vec3(1f, 1f, 1f, -1f)`——**第四分量是 -1**。直接当四维向量用会拿到 -1。
- **`MountRadiusAdder` 用 `float.Parse` 而不是 `TryParse`。** XML 里写错格式直接抛 `FormatException`，加载中断。
- **索引只在同一个 `SkeletonModel` 内有效。** 换骨骼要重算，`SetBoneIndices` 不做任何失效检查。
- **依赖 `TaleWorlds.Engine` 的 `Skeleton` 静态类。** 只有引擎层能完成名字到索引的翻译，纯逻辑层拿不到。
- **挂载点有两处。** [HorseComponent](../HorseComponent) 的 `SkeletonScale` 属性（按字符串 id 从 `Game.Current.ObjectManager` 取），以及全局遍历那条路径（引擎初始化收尾时统一解析）。

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `MBObjectManager` 寻址
- 注册与加载：[Game](../Game) 的 `RegisterTypes` 用 `RegisterType<SkeletonScale>("Scale", "Scales", 3U, ...)`（**注册名是 `Scale`**），`LoadBasicFiles()` 调 `LoadXML("SkeletonScales", false)`
- 索引解析：`TaleWorlds.Engine.Skeleton.GetBoneIndexFromName(skeletonName, boneName)`，返回 `sbyte`，找不到为 -1
- 触发时机：`TaleWorlds.MountAndBlade.MBGameManager.OnGameInitializationFinished` 遍历 `Game.Current.ObjectManager.GetObjectTypeList<SkeletonScale>()` 逐个 `SetBoneIndices`
- 应用侧：`TaleWorlds.MountAndBlade.MBAgentVisuals.ApplySkeletonScale(MountSitBoneScale, MountRadiusAdder, BoneIndices, Scales)` 与 两个参数的形如「可视对象句柄 / 体型变形类型」，对应 `MBAgentVisuals` 上的同名方法
- 引用方：[HorseComponent](../HorseComponent) 的 `SkeletonScale` 属性（XML 里给马匹指定缩放定义）与它的 `SkeletonScale = null` 重置分支
- 索引入口：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<SkeletonScale>(stringId)` 与 `GetObjectTypeList<SkeletonScale>()`
- 数学类型：`TaleWorlds.Library.Vec3`（`MountSitBoneScale` / `Scales` 的元素类型）
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)