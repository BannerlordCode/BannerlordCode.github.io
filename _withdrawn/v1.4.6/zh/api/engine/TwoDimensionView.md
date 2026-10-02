---
title: "TwoDimensionView"
description: "TwoDimensionView：TaleWorlds.Engine 的 public 类，继承 View；公开成员 8 个（方法 8、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/TwoDimensionView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoDimensionView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class TwoDimensionView : View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

TwoDimensionView 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/TwoDimensionView.cs。它是一个 public 类（sealed），实现/继承 View，继承链为 TwoDimensionView → View → NativeObject。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TwoDimensionView 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 TwoDimensionView → View → NativeObject。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/TwoDimensionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateTwoDimension` | `public static TwoDimensionView CreateTwoDimension(string viewName)` | 方法 |
| `BeginFrame` | `public void BeginFrame()` | 方法 |
| `EndFrame` | `public void EndFrame()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `CreateMeshFromDescription` | `public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)` | 方法 |
| `CreateTextMeshFromCache` | `public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)` | 方法 |
| `CreateTextMeshFromDescription` | `public void CreateTextMeshFromDescription(float[]vertices, float[]uvs, uint[]indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)` | 方法 |
| `GetOrCreateMaterial` | `public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 View](../View/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
