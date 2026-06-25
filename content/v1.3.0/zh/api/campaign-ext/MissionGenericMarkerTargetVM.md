---
title: "MissionGenericMarkerTargetVM"
description: "MissionGenericMarkerTargetVM 的自动生成类参考。"
---
# MissionGenericMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionGenericMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionGenericMarkerTargetVM.cs`

## 概述

`MissionGenericMarkerTargetVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker.Targets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker.Targets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MissionGenericMarkerTargetVM 实例
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
var result = missionGenericMarkerTargetVM.Equals(other);
```

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionGenericMarkerTargetVM 实例
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
missionGenericMarkerTargetVM.UpdatePosition(missionCamera);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
missionGenericMarkerTargetVM.Equals(other);
```

## 参见

- [本区域目录](../)