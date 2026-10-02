---
title: "ThumbnailCreatorView"
description: "ThumbnailCreatorView：TaleWorlds.Engine 的 public 类，继承 View；公开成员 11 个（方法 10、属性 0、字段 0）。源文件 TaleWorlds.Engine/ThumbnailCreatorView.cs。"
---
# ThumbnailCreatorView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ThumbnailCreatorView : View`
**File:** `TaleWorlds.Engine/ThumbnailCreatorView.cs`

## 概述

ThumbnailCreatorView 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ThumbnailCreatorView.cs。它是一个 public 类（sealed），实现/继承 View，继承链为 ThumbnailCreatorView → View → NativeObject。public/protected 成员共 11 个：10 方法、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ThumbnailCreatorView 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 ThumbnailCreatorView → View → NativeObject。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ThumbnailCreatorView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateThumbnailCreatorView` | `public static ThumbnailCreatorView CreateThumbnailCreatorView()` | 方法 |
| `RegisterScene` | `public void RegisterScene(Scene scene, bool usePostFx = true)` | 方法 |
| `RegisterCachedEntity` | `public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)` | 方法 |
| `UnregisterCachedEntity` | `public void UnregisterCachedEntity(string cacheId)` | 方法 |
| `RegisterRenderRequest` | `public void RegisterRenderRequest(ref ThumbnailRenderRequest request)` | 方法 |
| `ClearRequests` | `public void ClearRequests()` | 方法 |
| `CancelRequest` | `public void CancelRequest(string renderID)` | 方法 |
| `GetNumberOfPendingRequests` | `public int GetNumberOfPendingRequests()` | 方法 |
| `IsMemoryCleared` | `public bool IsMemoryCleared()` | 方法 |
| `OnThumbnailRenderCompleteDelegate` | `public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget);` | 方法 |
| `OnThumbnailRenderCompleteDelegate` | `public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 View](../View)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
