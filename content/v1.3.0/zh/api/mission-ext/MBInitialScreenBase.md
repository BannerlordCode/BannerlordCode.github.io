---
title: "MBInitialScreenBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBInitialScreenBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `do exit button action` 相关逻辑。

### StartedRendering
`public bool StartedRendering()`

**用途 / Purpose:** 处理 `started rendering` 相关逻辑。

### OnEditModeEnterPress
`public static void OnEditModeEnterPress()`

**用途 / Purpose:** 当 `edit mode enter press` 事件触发时调用此方法。

### OnEditModeEnterRelease
`public static void OnEditModeEnterRelease()`

**用途 / Purpose:** 当 `edit mode enter release` 事件触发时调用此方法。

## 使用示例

```csharp
MBInitialScreenBase.DoExitButtonAction();
```

## 参见

- [完整类目录](../catalog)