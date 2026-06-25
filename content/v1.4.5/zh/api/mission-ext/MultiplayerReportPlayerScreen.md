---
title: "MultiplayerReportPlayerScreen"
description: "MultiplayerReportPlayerScreen 的自动生成类参考。"
---
# MultiplayerReportPlayerScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerScreen : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerReportPlayerScreen.cs`

## 概述

`MultiplayerReportPlayerScreen` 位于 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MultiplayerReportPlayerScreen Current { get; }` |

## 主要方法

### OnInitialize
`public static void OnInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 initialize 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MultiplayerReportPlayerScreen.OnInitialize();
```

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MultiplayerReportPlayerScreen.OnFinalize();
```

## 使用示例

```csharp
MultiplayerReportPlayerScreen.OnInitialize();
```

## 参见

- [本区域目录](../)