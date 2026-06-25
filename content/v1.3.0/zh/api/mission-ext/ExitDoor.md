---
title: "ExitDoor"
description: "ExitDoor 的自动生成类参考。"
---
# ExitDoor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ExitDoor : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/ExitDoor.cs`

## 概述

`ExitDoor` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 ExitDoor 实例
ExitDoor exitDoor = ...;
var result = exitDoor.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 ExitDoor 实例
ExitDoor exitDoor = ...;
var result = exitDoor.GetDescriptionText(gameEntity);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 ExitDoor 实例
ExitDoor exitDoor = ...;
var result = exitDoor.GetTickRequirement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ExitDoor exitDoor = ...;
exitDoor.GetActionTextForStandingPoint(usableGameObject);
```

## 参见

- [本区域目录](../)