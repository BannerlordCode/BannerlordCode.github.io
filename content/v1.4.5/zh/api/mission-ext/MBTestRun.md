---
title: "MBTestRun"
description: "MBTestRun 的自动生成类参考。"
---
# MBTestRun

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBTestRun`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBTestRun.cs`

## 概述

`MBTestRun` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EnterEditMode
`public static bool EnterEditMode()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnterEditMode 对应的操作。

```csharp
// 静态调用，不需要实例
MBTestRun.EnterEditMode();
```

### NewScene
`public static bool NewScene()`

**用途 / Purpose:** **用途 / Purpose:** 调用 NewScene 对应的操作。

```csharp
// 静态调用，不需要实例
MBTestRun.NewScene();
```

### LeaveEditMode
`public static bool LeaveEditMode()`

**用途 / Purpose:** **用途 / Purpose:** 调用 LeaveEditMode 对应的操作。

```csharp
// 静态调用，不需要实例
MBTestRun.LeaveEditMode();
```

### OpenScene
`public static bool OpenScene(string sceneName)`

**用途 / Purpose:** **用途 / Purpose:** 打开scene对应的资源或界面。

```csharp
// 静态调用，不需要实例
MBTestRun.OpenScene("example");
```

### CloseScene
`public static bool CloseScene()`

**用途 / Purpose:** **用途 / Purpose:** 关闭scene对应的资源或界面。

```csharp
// 静态调用，不需要实例
MBTestRun.CloseScene();
```

### SaveScene
`public static bool SaveScene()`

**用途 / Purpose:** **用途 / Purpose:** 将 scene 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
MBTestRun.SaveScene();
```

### OpenDefaultScene
`public static bool OpenDefaultScene()`

**用途 / Purpose:** **用途 / Purpose:** 打开default scene对应的资源或界面。

```csharp
// 静态调用，不需要实例
MBTestRun.OpenDefaultScene();
```

### GetFPS
`public static int GetFPS()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 f p s 的结果。

```csharp
// 静态调用，不需要实例
MBTestRun.GetFPS();
```

### StartMission
`public static void StartMission()`

**用途 / Purpose:** **用途 / Purpose:** 启动mission流程或状态机。

```csharp
// 静态调用，不需要实例
MBTestRun.StartMission();
```

## 使用示例

```csharp
MBTestRun.EnterEditMode();
```

## 参见

- [本区域目录](../)