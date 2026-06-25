---
title: "EngineController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EngineController`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** 无
**File:** `TaleWorlds.Engine/EngineController.cs`

## 概述

`EngineController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EngineController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetVersionStr
`public static string GetVersionStr()`

**用途 / Purpose:** 获取 `version str` 的当前值。

### GetApplicationPlatformName
`public static string GetApplicationPlatformName()`

**用途 / Purpose:** 获取 `application platform name` 的当前值。

### GetModulesVersionStr
`public static string GetModulesVersionStr()`

**用途 / Purpose:** 获取 `modules version str` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EngineController>();
```

## 参见

- [完整类目录](../catalog)