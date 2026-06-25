---
title: "ModuleExtensions"
description: "ModuleExtensions 的自动生成类参考。"
---
# ModuleExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/ModuleExtensions.cs`

## 概述

`ModuleExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetUsedMachines
`public static IEnumerable<UsableMachine> GetUsedMachines(this Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 used machines 的结果。

```csharp
// 静态调用，不需要实例
ModuleExtensions.GetUsedMachines(formation);
```

### StartUsingMachine
`public static void StartUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**用途 / Purpose:** **用途 / Purpose:** 启动using machine流程或状态机。

```csharp
// 静态调用，不需要实例
ModuleExtensions.StartUsingMachine(formation, usable, false);
```

### StopUsingMachine
`public static void StopUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**用途 / Purpose:** **用途 / Purpose:** 停止using machine流程或状态机。

```csharp
// 静态调用，不需要实例
ModuleExtensions.StopUsingMachine(formation, usable, false);
```

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 rawPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToWorldPosition 对应的操作。

```csharp
// 静态调用，不需要实例
ModuleExtensions.ToWorldPosition(rawPosition);
```

## 使用示例

```csharp
ModuleExtensions.GetUsedMachines(formation);
```

## 参见

- [本区域目录](../)