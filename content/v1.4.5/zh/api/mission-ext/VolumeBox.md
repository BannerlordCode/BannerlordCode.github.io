---
title: "VolumeBox"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VolumeBox`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VolumeBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VolumeBox : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VolumeBox.cs`

## 概述

`VolumeBox` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### VolumeBoxDelegate
`public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)`

**用途 / Purpose:** 处理 `volume box delegate` 相关逻辑。

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `to check list`。

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `from check list`。

### SetIsOccupiedDelegate
`public void SetIsOccupiedDelegate(VolumeBoxDelegate volumeBoxDelegate)`

**用途 / Purpose:** 设置 `is occupied delegate` 的值或状态。

### HasAgentsInAttackerSide
`public bool HasAgentsInAttackerSide()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `agents in attacker side`。

### IsPointIn
`public bool IsPointIn(Vec3 point)`

**用途 / Purpose:** 处理 `is point in` 相关逻辑。

## 使用示例

```csharp
var value = new VolumeBox();
value.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

## 参见

- [完整类目录](../catalog)