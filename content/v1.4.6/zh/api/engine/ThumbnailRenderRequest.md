---
title: "ThumbnailRenderRequest"
description: "ThumbnailRenderRequest：TaleWorlds.Engine 的 public 结构体；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.Engine/ThumbnailRenderRequest.cs。"
---
# ThumbnailRenderRequest

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct ThumbnailRenderRequest`
**File:** `TaleWorlds.Engine/ThumbnailRenderRequest.cs`

## 概述

ThumbnailRenderRequest 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ThumbnailRenderRequest.cs。它是一个 public 结构体，继承链为 ThumbnailRenderRequest。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ThumbnailRenderRequest 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 ThumbnailRenderRequest。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ThumbnailRenderRequest.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateWithTexture` | `public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)` | 方法 |
| `CreateWithoutTexture` | `public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)` | 方法 |
| `CreateForCachedEntity` | `public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)` | 方法 |
| `CreateForCachedEntityWithoutTexture` | `public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
