---
title: "MissionNameMarkerVM"
description: "MissionNameMarkerVM 的自动生成类参考。"
---
# MissionNameMarkerVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionNameMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs`

## 概述

`MissionNameMarkerVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTargetsAdded` | `public bool IsTargetsAdded { get; }` |
| `Targets` | `public MBBindingList<MissionNameMarkerTargetBaseVM> Targets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerVM 实例
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerVM 实例
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerVM 实例
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.Tick(0);
```

### SetTargetsDirty
`public void SetTargetsDirty()`

**用途 / Purpose:** 为 「targets dirty」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerVM 实例
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.SetTargetsDirty();
```

### Compare
`public int Compare(MissionNameMarkerTargetBaseVM x, MissionNameMarkerTargetBaseVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerVM 实例
MissionNameMarkerVM missionNameMarkerVM = ...;
var result = missionNameMarkerVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.RefreshValues();
```

## 参见

- [本区域目录](../)