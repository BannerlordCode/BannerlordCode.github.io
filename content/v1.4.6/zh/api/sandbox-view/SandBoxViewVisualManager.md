---
title: "SandBoxViewVisualManager"
description: "SandBoxViewVisualManager：SandBox.View 的 public 类；公开成员 14 个（方法 13、属性 0、字段 0）。源文件 SandBox.View/SandBoxViewVisualManager.cs。"
---
# SandBoxViewVisualManager

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class SandBoxViewVisualManager`
**File:** `SandBox.View/SandBoxViewVisualManager.cs`

## 概述

SandBoxViewVisualManager 位于 SandBox.View 模块，源文件 SandBox.View/SandBoxViewVisualManager.cs。它是一个 public 类，继承链为 SandBoxViewVisualManager。public/protected 成员共 14 个：13 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxViewVisualManager 是 SandBox.View 的顶层类型，命名空间与模块目录一致，继承链 SandBoxViewVisualManager。成员构成以方法为主（方法 13/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/SandBoxViewVisualManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxViewVisualManager` | `public SandBoxViewVisualManager()` | 构造函数 |
| `VisualTick` | `public static void VisualTick(MapScreen screen, float realDt, float dt)` | 方法 |
| `OnTick` | `public static void OnTick(float realDt, float dt)` | 方法 |
| `ClearVisualMemory` | `public static void ClearVisualMemory()` | 方法 |
| `OnFrameTick` | `public static void OnFrameTick(float dt)` | 方法 |
| `OnMouseClick` | `public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)` | 方法 |
| `OnGameLoadFinished` | `public static void OnGameLoadFinished()` | 方法 |
| `GetEntityComponent` | `public TComponent GetEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent` | 方法 |
| `AddEntityComponent` | `public TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent, new()` | 方法 |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent` | 方法 |
| `Finalize` | `public void Finalize<TComponent>(TComponent component) where TComponent : CampaignEntityVisualComponent` | 方法 |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>(TComponent component) where TComponent : CampaignEntityVisualComponent` | 方法 |
| `List` | `public List<TComponent>GetComponents<TComponent>() where TComponent : CampaignEntityVisualComponent` | 方法 |
| `MBList` | `public MBList<CampaignEntityVisualComponent>GetComponents()` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CampaignMusicHandler](../CampaignMusicHandler)
- [同命名空间 IChangeableScreen](../IChangeableScreen)
- [同命名空间 MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [同命名空间 PreloadScreen](../PreloadScreen)
