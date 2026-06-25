---
title: "VolumeBox"
description: "VolumeBox 的自动生成类参考。"
---
# VolumeBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VolumeBox : MissionObject`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VolumeBox.cs`

## 概述

`VolumeBox` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### VolumeBoxDelegate
`public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)`

**用途 / Purpose:** 调用 VolumeBoxDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
volumeBox.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** 将 to check list 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
volumeBox.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 from check list。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
volumeBox.RemoveFromCheckList(agent);
```

### SetIsOccupiedDelegate
`public void SetIsOccupiedDelegate(VolumeBoxDelegate volumeBoxDelegate)`

**用途 / Purpose:** 为 is occupied delegate 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
volumeBox.SetIsOccupiedDelegate(volumeBoxDelegate);
```

### HasAgentsInAttackerSide
`public bool HasAgentsInAttackerSide()`

**用途 / Purpose:** 判断当前对象是否已经持有 agents in attacker side。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
var result = volumeBox.HasAgentsInAttackerSide();
```

### IsPointIn
`public bool IsPointIn(Vec3 point)`

**用途 / Purpose:** 判断当前对象是否处于 point in 状态或条件。

```csharp
// 先通过子系统 API 拿到 VolumeBox 实例
VolumeBox volumeBox = ...;
var result = volumeBox.IsPointIn(point);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VolumeBox volumeBox = ...;
volumeBox.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

## 参见

- [本区域目录](../)