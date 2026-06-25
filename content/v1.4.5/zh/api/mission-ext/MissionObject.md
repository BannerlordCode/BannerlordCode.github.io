---
title: "MissionObject"
description: "MissionObject 的自动生成类参考。"
---
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs`

## 概述

`MissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |

## 主要方法

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** 为 「ability of faces」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.SetAbilityOfFaces(false);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
var result = missionObject.GetHashCode();
```

### AfterMissionStart
`public virtual void AfterMissionStart()`

**用途 / Purpose:** 在 「mission start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.AfterMissionStart();
```

### OnMissionEnded
`public virtual void OnMissionEnded()`

**用途 / Purpose:** 在 「mission ended」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.OnMissionEnded();
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.OnDeploymentFinished();
```

### SetEnabled
`public void SetEnabled(bool isParentObject = false)`

**用途 / Purpose:** 为 「enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.SetEnabled(false);
```

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)`

**用途 / Purpose:** 为 「enabled and make visible」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.SetEnabledAndMakeVisible(false, false);
```

### SetDisabled
`public void SetDisabled(bool isParentObject = false)`

**用途 / Purpose:** 为 「disabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.SetDisabled(false);
```

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)`

**用途 / Purpose:** 为 「disabled and make invisible」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.SetDisabledAndMakeInvisible(false, false);
```

### OnEndMission
`public virtual void OnEndMission()`

**用途 / Purpose:** 在 「end mission」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.OnEndMission();
```

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity)`

**用途 / Purpose:** 将 「stuck missile」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionObject 实例
MissionObject missionObject = ...;
missionObject.AddStuckMissile(missileEntity);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionObject instance = ...;
```

## 参见

- [本区域目录](../)