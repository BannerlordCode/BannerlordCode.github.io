---
title: "MissionNameMarkerFactory"
description: "MissionNameMarkerFactory：SandBox.ViewModelCollection 的 public 类；公开成员 9 个（方法 5、属性 1、字段 1）。源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs。"
---
# MissionNameMarkerFactory

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public static class MissionNameMarkerFactory`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs`

## 概述

MissionNameMarkerFactory 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs。它是一个 public 类，继承链为 MissionNameMarkerFactory。public/protected 成员共 9 个：5 方法、1 属性、1 字段、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionNameMarkerFactory 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.NameMarker），继承链 MissionNameMarkerFactory。成员构成以方法为主（方法 5/9，属性 1/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnProvidersChanged;` | `public static event Action OnProvidersChanged;` | 事件 |
| `PushContext` | `public static MissionNameMarkerFactory.INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)` | 方法 |
| `PopContext` | `public static void PopContext(string contextId)` | 方法 |
| `PopContext` | `public static void PopContext(MissionNameMarkerFactory.INameMarkerProviderContext context)` | 方法 |
| `List` | `public static List<MissionNameMarkerProvider>CollectProviders()` | 方法 |
| `UpdateProviders` | `public static void UpdateProviders(MissionNameMarkerProvider[]existingProviders, out List<MissionNameMarkerProvider>addedProviders, out List<MissionNameMarkerProvider>removedProviders)` | 方法 |
| `DefaultContext` | `public static readonly MissionNameMarkerFactory.INameMarkerProviderContext DefaultContext` | 字段 |
| `INameMarkerProviderContext` | `public interface INameMarkerProviderContext` | 属性 |
| `INameMarkerProviderContext` | `public interface INameMarkerProviderContext` | 嵌套类型 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [同命名空间 MissionNameMarkerProvider](../MissionNameMarkerProvider)
- [同命名空间 MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
- [同命名空间 MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
