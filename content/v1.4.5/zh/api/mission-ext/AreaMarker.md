---
title: "AreaMarker"
description: "AreaMarker 的自动生成类参考。"
---
# AreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/AreaMarker.cs`

## 概述

`AreaMarker` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsPositionInRange
`public bool IsPositionInRange(Vec3 position)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position in range 状态或条件。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.IsPositionInRange(position);
```

### GetUsableMachinesInRange
`public virtual List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 usable machines in range 的结果。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.GetUsableMachinesInRange("example");
```

### GetUsableMachinesWithTagInRange
`public virtual List<UsableMachine> GetUsableMachinesWithTagInRange(string tag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 usable machines with tag in range 的结果。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.GetUsableMachinesWithTagInRange("example");
```

### GetGameEntitiesWithTagInRange
`public virtual List<GameEntity> GetGameEntitiesWithTagInRange(string tag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 game entities with tag in range 的结果。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.GetGameEntitiesWithTagInRange("example");
```

### GetName
`public virtual TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.GetName();
```

### GetPosition
`public virtual Vec3 GetPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 AreaMarker 实例
AreaMarker areaMarker = ...;
var result = areaMarker.GetPosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AreaMarker areaMarker = ...;
areaMarker.IsPositionInRange(position);
```

## 参见

- [本区域目录](../)