---
title: "WindowsFramework"
description: "WindowsFramework 的自动生成类参考。"
---
# WindowsFramework

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsFramework`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs`

## 概述

`WindowsFramework` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ThreadConfig` | `public WindowsFrameworkThreadConfig ThreadConfig { get; set; }` |
| `ElapsedTicks` | `public long ElapsedTicks { get; }` |
| `TicksPerSecond` | `public long TicksPerSecond { get; }` |

## 主要方法

### Initialize
`public void Initialize(FrameworkDomain frameworkDomains)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.Initialize(frameworkDomains);
```

### RegisterMessageCommunicator
`public void RegisterMessageCommunicator(IMessageCommunicator communicator)`

**用途 / Purpose:** **用途 / Purpose:** 将message communicator注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.RegisterMessageCommunicator(communicator);
```

### UnRegisterMessageCommunicator
`public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnRegisterMessageCommunicator 对应的操作。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.UnRegisterMessageCommunicator(communicator);
```

### Stop
`public void Stop()`

**用途 / Purpose:** **用途 / Purpose:** 停止当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.Stop();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.OnFinalize();
```

### Start
`public void Start()`

**用途 / Purpose:** **用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 WindowsFramework 实例
WindowsFramework windowsFramework = ...;
windowsFramework.Start();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WindowsFramework windowsFramework = ...;
windowsFramework.Initialize(frameworkDomains);
```

## 参见

- [本区域目录](../)