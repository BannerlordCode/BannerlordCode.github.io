---
title: "TableauView"
description: "TableauView：TaleWorlds.Engine 的 public 类，继承 SceneView；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/TableauView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TableauView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class TableauView : SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

TableauView 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/TableauView.cs。它是一个 public 类（sealed），实现/继承 SceneView，继承链为 TableauView → SceneView → View → NativeObject。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TableauView 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 TableauView → SceneView → View → NativeObject。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/TableauView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateTableauView` | `public static TableauView CreateTableauView(string viewName)` | 方法 |
| `SetSortingEnabled` | `public void SetSortingEnabled(bool value)` | 方法 |
| `SetContinuousRendering` | `public void SetContinuousRendering(bool value)` | 方法 |
| `SetDoNotRenderThisFrame` | `public void SetDoNotRenderThisFrame(bool value)` | 方法 |
| `SetDeleteAfterRendering` | `public void SetDeleteAfterRendering(bool value)` | 方法 |
| `AddTableau` | `public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SceneView](../SceneView/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
