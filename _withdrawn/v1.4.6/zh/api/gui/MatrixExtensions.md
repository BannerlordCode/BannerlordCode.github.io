---
title: "MatrixExtensions"
description: "MatrixExtensions：TaleWorlds.TwoDimension.Standalone 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatrixExtensions

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class MatrixExtensions`
**File:** `TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

MatrixExtensions 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs。它是一个 public 类，继承链为 MatrixExtensions。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MatrixExtensions 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 MatrixExtensions。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToMatrix4x4` | `public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)` | 方法 |
| `ToMatrixFrame` | `public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)` | 方法 |
| `AreAllComponentsValid` | `public static bool AreAllComponentsValid(this Matrix4x4 matrix)` | 方法 |
| `AreAllComponentsValid` | `public static bool AreAllComponentsValid(this MatrixFrame matrix)` | 方法 |
| `CreateOrthographicOffCenter` | `public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
