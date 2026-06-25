---
title: "TeleportUsePoint"
description: "TeleportUsePoint 的自动生成类参考。"
---
# TeleportUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class TeleportUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/TeleportUsePoint.cs`

## 概述

`TeleportUsePoint` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasAIMovingTo` | `public override bool HasAIMovingTo { get; }` |

## 主要方法

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「a i moving to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsAIMovingTo(agent);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「usable by agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsUsableByAgent(userAgent);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsDisabledForAgent(agent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.OnUse(userAgent, 0);
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.Deactivate();
```

### Activate
`public void Activate()`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.Activate();
```

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 在 「focus gain」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeleportUsePoint 实例
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.OnFocusGain(userAgent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.IsAIMovingTo(agent);
```

## 参见

- [本区域目录](../)