---
title: "LauncherUI"
description: "LauncherUI 的自动生成类参考。"
---
# LauncherUI

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherUI`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`

## 概述

`LauncherUI` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LauncherUI 实例
LauncherUI launcherUI = ...;
launcherUI.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LauncherUI 实例
LauncherUI launcherUI = ...;
launcherUI.OnFinalize();
```

### Update
`public void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 LauncherUI 实例
LauncherUI launcherUI = ...;
launcherUI.Update();
```

### CheckMouseOverWindowDragArea
`public bool CheckMouseOverWindowDragArea()`

**用途 / Purpose:** **用途 / Purpose:** 检查mouse over window drag area在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 LauncherUI 实例
LauncherUI launcherUI = ...;
var result = launcherUI.CheckMouseOverWindowDragArea();
```

### HitTest
`public bool HitTest()`

**用途 / Purpose:** **用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 LauncherUI 实例
LauncherUI launcherUI = ...;
var result = launcherUI.HitTest();
```

### AddHintInformation
`public static void AddHintInformation(string message)`

**用途 / Purpose:** **用途 / Purpose:** 将 hint information 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
LauncherUI.AddHintInformation("example");
```

### HideHintInformation
`public static void HideHintInformation()`

**用途 / Purpose:** **用途 / Purpose:** 隐藏hint information对应的界面或元素。

```csharp
// 静态调用，不需要实例
LauncherUI.HideHintInformation();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LauncherUI launcherUI = ...;
launcherUI.Initialize();
```

## 参见

- [本区域目录](../)