---
title: "EngineController"
description: "EngineController 的自动生成类参考。"
---
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/EngineController.cs`

## 概述

`EngineController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EngineController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetVersionStr
`public static string GetVersionStr()`

**用途 / Purpose:** 读取并返回当前对象中 「version str」 的结果。

```csharp
// 静态调用，不需要实例
EngineController.GetVersionStr();
```

### GetApplicationPlatformName
`public static string GetApplicationPlatformName()`

**用途 / Purpose:** 读取并返回当前对象中 「application platform name」 的结果。

```csharp
// 静态调用，不需要实例
EngineController.GetApplicationPlatformName();
```

### GetModulesVersionStr
`public static string GetModulesVersionStr()`

**用途 / Purpose:** 读取并返回当前对象中 「modules version str」 的结果。

```csharp
// 静态调用，不需要实例
EngineController.GetModulesVersionStr();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EngineController>();
```

## 参见

- [本区域目录](../)