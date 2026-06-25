---
title: "DisguiseMissionUsePoint"
description: "DisguiseMissionUsePoint 的自动生成类参考。"
---
# DisguiseMissionUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/DisguiseMissionUsePoint.cs`

## 概述

`DisguiseMissionUsePoint` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
var result = disguiseMissionUsePoint.GetDescriptionText(gameEntity);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 use 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
disguiseMissionUsePoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 use stopped 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
disguiseMissionUsePoint.OnUseStopped(userAgent, false, 0);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 disabled for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
var result = disguiseMissionUsePoint.IsDisabledForAgent(agent);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 判断当前对象是否处于 usable by agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
var result = disguiseMissionUsePoint.IsUsableByAgent(userAgent);
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 user frame for agent 的结果。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionUsePoint 实例
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
var result = disguiseMissionUsePoint.GetUserFrameForAgent(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DisguiseMissionUsePoint disguiseMissionUsePoint = ...;
disguiseMissionUsePoint.GetDescriptionText(gameEntity);
```

## 参见

- [本区域目录](../)