---
title: "EventTriggeringUsableMachine"
description: "EventTriggeringUsableMachine 的自动生成类参考。"
---
# EventTriggeringUsableMachine

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EventTriggeringUsableMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Usables/EventTriggeringUsableMachine.cs`

## 概述

`EventTriggeringUsableMachine` 位于 `TaleWorlds.MountAndBlade.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 EventTriggeringUsableMachine 实例
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
var result = eventTriggeringUsableMachine.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 EventTriggeringUsableMachine 实例
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
var result = eventTriggeringUsableMachine.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
eventTriggeringUsableMachine.GetActionTextForStandingPoint(usableGameObject);
```

## 参见

- [本区域目录](../)