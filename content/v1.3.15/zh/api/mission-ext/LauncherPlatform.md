---
title: "LauncherPlatform"
description: "LauncherPlatform 的自动生成类参考。"
---
# LauncherPlatform

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LauncherPlatform`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherPlatform.cs`

## 概述

`LauncherPlatform` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlatformType` | `public static LauncherPlatformType PlatformType { get; }` |

## 主要方法

### Initialize
`public static void Initialize(List<string> args)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
LauncherPlatform.Initialize(args);
```

### Destroy
`public static void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 静态调用，不需要实例
LauncherPlatform.Destroy();
```

### SetLauncherMode
`public static void SetLauncherMode(bool isLauncherModeActive)`

**用途 / Purpose:** 为 「launcher mode」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
LauncherPlatform.SetLauncherMode(false);
```

## 使用示例

```csharp
LauncherPlatform.Initialize(args);
```

## 参见

- [本区域目录](../)