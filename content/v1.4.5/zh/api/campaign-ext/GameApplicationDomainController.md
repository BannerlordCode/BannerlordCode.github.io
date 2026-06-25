---
title: "GameApplicationDomainController"
description: "GameApplicationDomainController 的自动生成类参考。"
---
# GameApplicationDomainController

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**Base:** `MarshalByRefObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/GameApplicationDomainController.cs`

## 概述

`GameApplicationDomainController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `GameApplicationDomainController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### LoadAsHostedByNative
`public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**用途 / Purpose:** 从持久化存储或流中读取 「as hosted by native」。

```csharp
// 先通过子系统 API 拿到 GameApplicationDomainController 实例
GameApplicationDomainController gameApplicationDomainController = ...;
gameApplicationDomainController.LoadAsHostedByNative(passManagedInitializeMethodPointer, passManagedCallbackMethodPointer, "example", "example", currentPlatform);
```

### Load
`public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 GameApplicationDomainController 实例
GameApplicationDomainController gameApplicationDomainController = ...;
gameApplicationDomainController.Load(passManagedInitializeMethod, passManagedCallbackMethod, "example", "example", currentPlatform);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<GameApplicationDomainController>();
```

## 参见

- [本区域目录](../)