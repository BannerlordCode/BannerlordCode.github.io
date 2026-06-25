---
title: "MBDotNet"
description: "MBDotNet 的自动生成类参考。"
---
# MBDotNet

**Namespace:** TaleWorlds.Starter.Library
**Module:** TaleWorlds.Starter
**Type:** `internal static class MBDotNet`
**Base:** 无
**File:** `bin/TaleWorlds.Starter.Library/TaleWorlds.Starter.Library/MBDotNet.cs`

## 概述

`MBDotNet` 位于 `TaleWorlds.Starter.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Starter.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### WotsMainDotNet
`public static extern int WotsMainDotNet(string args)`

**用途 / Purpose:** 调用 WotsMainDotNet 对应的操作。

```csharp
// 静态调用，不需要实例
MBDotNet.WotsMainDotNet("example");
```

### PassControllerMethods
`public static extern void PassControllerMethods(Delegate currentDomainInitializer)`

**用途 / Purpose:** 调用 PassControllerMethods 对应的操作。

```csharp
// 静态调用，不需要实例
MBDotNet.PassControllerMethods(currentDomainInitializer);
```

### PassManagedInitializeMethodPointerDotNet
`public static extern void PassManagedInitializeMethodPointerDotNet( Delegate initalizer)`

**用途 / Purpose:** 调用 PassManagedInitializeMethodPointerDotNet 对应的操作。

```csharp
// 静态调用，不需要实例
MBDotNet.PassManagedInitializeMethodPointerDotNet(initalizer);
```

### PassManagedEngineCallbackMethodPointersDotNet
`public static extern void PassManagedEngineCallbackMethodPointersDotNet( Delegate methodDelegate)`

**用途 / Purpose:** 调用 PassManagedEngineCallbackMethodPointersDotNet 对应的操作。

```csharp
// 静态调用，不需要实例
MBDotNet.PassManagedEngineCallbackMethodPointersDotNet(methodDelegate);
```

### SetCurrentDirectory
`public static extern int SetCurrentDirectory(string args)`

**用途 / Purpose:** 为 current directory 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBDotNet.SetCurrentDirectory("example");
```

## 使用示例

```csharp
MBDotNet.WotsMainDotNet("example");
```

## 参见

- [本区域目录](../)