---
title: "MBInitialScreenBase"
description: "MBInitialScreenBase 的自动生成类参考。"
---
# MBInitialScreenBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBInitialScreenBase : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade/MBInitialScreenBase.cs`

## 概述

`MBInitialScreenBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DoExitButtonAction
`public static void DoExitButtonAction()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoExitButtonAction 对应的操作。

```csharp
// 静态调用，不需要实例
MBInitialScreenBase.DoExitButtonAction();
```

### StartedRendering
`public bool StartedRendering()`

**用途 / Purpose:** **用途 / Purpose:** 启动ed rendering流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBInitialScreenBase 实例
MBInitialScreenBase mBInitialScreenBase = ...;
var result = mBInitialScreenBase.StartedRendering();
```

### OnEditModeEnterPress
`public static void OnEditModeEnterPress()`

**用途 / Purpose:** **用途 / Purpose:** 在 edit mode enter press 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MBInitialScreenBase.OnEditModeEnterPress();
```

### OnEditModeEnterRelease
`public static void OnEditModeEnterRelease()`

**用途 / Purpose:** **用途 / Purpose:** 在 edit mode enter release 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MBInitialScreenBase.OnEditModeEnterRelease();
```

## 使用示例

```csharp
MBInitialScreenBase.DoExitButtonAction();
```

## 参见

- [本区域目录](../)