---
title: "MissionNameMarkerProvider"
description: "MissionNameMarkerProvider 的自动生成类参考。"
---
# MissionNameMarkerProvider

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerProvider`
**Base:** 无
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerProvider.cs`

## 概述

`MissionNameMarkerProvider` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMarkers
`public abstract void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**用途 / Purpose:** 构建一个新的 「markers」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerProvider 实例
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.CreateMarkers(markers);
```

### Initialize
`public void Initialize(Mission mission, Action onSetMarkersDirty)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerProvider 实例
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Initialize(mission, onSetMarkersDirty);
```

### Destroy
`public void Destroy(Mission mission)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerProvider 实例
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Destroy(mission);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerProvider 实例
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Tick(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionNameMarkerProvider instance = ...;
```

## 参见

- [本区域目录](../)