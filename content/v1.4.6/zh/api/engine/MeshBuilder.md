---
title: "MeshBuilder"
description: "MeshBuilder：TaleWorlds.Engine 的 public 类；公开成员 12 个（方法 7、属性 2、字段 0）。源文件 TaleWorlds.Engine/MeshBuilder.cs。"
---
# MeshBuilder

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class MeshBuilder`
**File:** `TaleWorlds.Engine/MeshBuilder.cs`

## 概述

MeshBuilder 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/MeshBuilder.cs。它是一个 public 类，继承链为 MeshBuilder。public/protected 成员共 12 个：7 方法、2 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MeshBuilder 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 MeshBuilder。成员构成以方法为主（方法 7/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/MeshBuilder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MeshBuilder` | `public MeshBuilder()` | 构造函数 |
| `AddFaceCorner` | `public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)` | 方法 |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `Finalize` | `public new Mesh Finalize()` | 方法 |
| `CreateUnitMesh` | `public static Mesh CreateUnitMesh()` | 方法 |
| `CreateTilingWindowMesh` | `public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)` | 方法 |
| `CreateTilingButtonMesh` | `public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)` | 方法 |
| `FaceCorner` | `public struct FaceCorner` | 属性 |
| `Face` | `public struct Face` | 属性 |
| `FaceCorner` | `public struct FaceCorner` | 嵌套类型 |
| `Face` | `public struct Face` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
