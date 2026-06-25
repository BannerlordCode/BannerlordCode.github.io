---
title: "VisualTestsScreen"
description: "VisualTestsScreen 的自动生成类参考。"
---
# VisualTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/VisualTestsScreen.cs`

## 概述

`VisualTestsScreen` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartedRendering
`public bool StartedRendering()`

**用途 / Purpose:** 启动ed rendering流程或状态机。

```csharp
// 先通过子系统 API 拿到 VisualTestsScreen 实例
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.StartedRendering();
```

### GetSubTestName
`public string GetSubTestName(CameraPointTestType type)`

**用途 / Purpose:** 读取并返回当前对象中 sub test name 的结果。

```csharp
// 先通过子系统 API 拿到 VisualTestsScreen 实例
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.GetSubTestName(type);
```

### GetRenderMode
`public EngineRenderDisplayMode GetRenderMode(CameraPointTestType type)`

**用途 / Purpose:** 读取并返回当前对象中 render mode 的结果。

```csharp
// 先通过子系统 API 拿到 VisualTestsScreen 实例
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.GetRenderMode(type);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 VisualTestsScreen 实例
VisualTestsScreen visualTestsScreen = ...;
visualTestsScreen.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualTestsScreen visualTestsScreen = ...;
visualTestsScreen.StartedRendering();
```

## 参见

- [本区域目录](../)