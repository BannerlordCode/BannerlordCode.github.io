---
title: "GameApplicationDomainController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameApplicationDomainController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameApplicationDomainController

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**Base:** `MarshalByRefObject`
**File:** `TaleWorlds.DotNet/GameApplicationDomainController.cs`

## 概述

`GameApplicationDomainController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `GameApplicationDomainController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### LoadAsHostedByNative
`public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**用途 / Purpose:** 加载 `as hosted by native` 数据。

### Load
`public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**用途 / Purpose:** 加载 `load` 数据。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<GameApplicationDomainController>();
```

## 参见

- [完整类目录](../catalog)