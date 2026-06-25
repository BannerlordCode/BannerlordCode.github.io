---
title: "Program"
description: "Program 的自动生成类参考。"
---
# Program

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Program`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/Program.cs`

## 概述

`Program` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### NativeMain
`public static void NativeMain(string commandLine)`

**用途 / Purpose:** 处理与 「native main」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Program.NativeMain("example");
```

### Main
`public static void Main(string args)`

**用途 / Purpose:** 处理与 「main」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Program.Main("example");
```

### StartGame
`public static void StartGame()`

**用途 / Purpose:** 启动「game」流程或状态机。

```csharp
// 静态调用，不需要实例
Program.StartGame();
```

### StartDigitalCompanion
`public static void StartDigitalCompanion()`

**用途 / Purpose:** 启动「digital companion」流程或状态机。

```csharp
// 静态调用，不需要实例
Program.StartDigitalCompanion();
```

### IsDigitalCompanionAvailable
`public static bool IsDigitalCompanionAvailable()`

**用途 / Purpose:** 判断当前对象是否处于 「digital companion available」 状态或条件。

```csharp
// 静态调用，不需要实例
Program.IsDigitalCompanionAvailable();
```

## 使用示例

```csharp
Program.NativeMain("example");
```

## 参见

- [本区域目录](../)