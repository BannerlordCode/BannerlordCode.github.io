---
title: "SandBoxGauntletGameNotification"
description: "SandBoxGauntletGameNotification 的自动生成类参考。"
---
# SandBoxGauntletGameNotification

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**Base:** `GauntletGameNotification`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/SandBoxGauntletGameNotification.cs`

## 概述

`SandBoxGauntletGameNotification` 位于 `SandBox.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
SandBoxGauntletGameNotification.Initialize();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletGameNotification 实例
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.OnFinalize();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletGameNotification 实例
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.RegisterEvents();
```

### UnregisterEvents
`public override void UnregisterEvents()`

**用途 / Purpose:** 从当前系统中注销events。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletGameNotification 实例
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.UnregisterEvents();
```

## 使用示例

```csharp
SandBoxGauntletGameNotification.Initialize();
```

## 参见

- [本区域目录](../)