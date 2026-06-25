---
title: "InputRestrictions"
description: "InputRestrictions 的自动生成类参考。"
---
# InputRestrictions

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class InputRestrictions`
**Base:** 无
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/InputRestrictions.cs`

## 概述

`InputRestrictions` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Order` | `public int Order { get; }` |
| `Id` | `public Guid Id { get; }` |
| `MouseVisibility` | `public bool MouseVisibility { get; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |

## 主要方法

### SetMouseVisibility
`public void SetMouseVisibility(bool isVisible)`

**用途 / Purpose:** 为 「mouse visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InputRestrictions 实例
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetMouseVisibility(false);
```

### SetInputRestrictions
`public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)`

**用途 / Purpose:** 为 「input restrictions」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InputRestrictions 实例
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetInputRestrictions(false, inputUsageMask.All);
```

### ResetInputRestrictions
`public void ResetInputRestrictions()`

**用途 / Purpose:** 将 「input restrictions」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 InputRestrictions 实例
InputRestrictions inputRestrictions = ...;
inputRestrictions.ResetInputRestrictions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InputRestrictions inputRestrictions = ...;
inputRestrictions.SetMouseVisibility(false);
```

## 参见

- [本区域目录](../)