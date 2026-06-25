---
title: "Controller"
description: "Controller 的自动生成类参考。"
---
# Controller

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Controller`
**Base:** 无
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/Controller.cs`

## 概述

`Controller` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

### LoadOnCurrentApplicationDomain
`public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)`

**用途 / Purpose:** 从持久化存储或流中读取 「on current application domain」。

```csharp
// 静态调用，不需要实例
Controller.LoadOnCurrentApplicationDomain(gameDllNameAsPointer, gameTypeNameAsPointer, 0, 0);
```

### SetEngineMethodsAsMono
`public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**用途 / Purpose:** 为 「engine methods as mono」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Controller.SetEngineMethodsAsMono(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

### SetEngineMethodsAsHostedDotNetCore
`public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**用途 / Purpose:** 为 「engine methods as hosted dot net core」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Controller.SetEngineMethodsAsHostedDotNetCore(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

### SetEngineMethodsAsDotNet
`public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)`

**用途 / Purpose:** 为 「engine methods as dot net」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Controller.SetEngineMethodsAsDotNet(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

## 使用示例

```csharp
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

## 参见

- [本区域目录](../)