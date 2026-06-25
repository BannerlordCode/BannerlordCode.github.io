---
title: "MissionPeerMarkerTargetVM"
description: "MissionPeerMarkerTargetVM 的自动生成类参考。"
---
# MissionPeerMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeerMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionPeerMarkerTargetVM.cs`

## 概述

`MissionPeerMarkerTargetVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |

## 主要方法

### UpdateScreenPosition
`public override void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 screen position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionPeerMarkerTargetVM 实例
MissionPeerMarkerTargetVM missionPeerMarkerTargetVM = ...;
missionPeerMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionPeerMarkerTargetVM missionPeerMarkerTargetVM = ...;
missionPeerMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## 参见

- [本区域目录](../)