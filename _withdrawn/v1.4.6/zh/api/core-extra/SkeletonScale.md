---
title: "SkeletonScale"
description: "SkeletonScale：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 9 个（方法 2、属性 6、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/SkeletonScale.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkeletonScale

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**File:** `TaleWorlds.Core/SkeletonScale.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

SkeletonScale 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/SkeletonScale.cs。它是一个 public 类（sealed），实现/继承 MBObjectBase，继承链为 SkeletonScale → MBObjectBase。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkeletonScale 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 SkeletonScale → MBObjectBase。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/SkeletonScale.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkeletonModel` | `public string SkeletonModel` | 属性 |
| `MountSitBoneScale` | `public Vec3 MountSitBoneScale` | 属性 |
| `MountRadiusAdder` | `public float MountRadiusAdder` | 属性 |
| `Vec3[]Scales` | `public Vec3[]Scales` | 属性 |
| `List` | `public List<string>BoneNames` | 属性 |
| `sbyte[]BoneIndices` | `public sbyte[]BoneIndices` | 属性 |
| `SkeletonScale` | `public SkeletonScale()` | 构造函数 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `SetBoneIndices` | `public void SetBoneIndices(sbyte[]boneIndices)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
