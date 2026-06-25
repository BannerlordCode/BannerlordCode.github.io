---
title: "ConfigurationManager"
description: "ConfigurationManager 的自动生成类参考。"
---
# ConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ConfigurationManager`
**Base:** 无
**File:** `TaleWorlds.Library/ConfigurationManager.cs`

## 概述

`ConfigurationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConfigurationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetConfigurationManager
`public static void SetConfigurationManager(IConfigurationManager configurationManager)`

**用途 / Purpose:** 为 「configuration manager」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ConfigurationManager.SetConfigurationManager(configurationManager);
```

### GetAppSettings
`public static string GetAppSettings(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「app settings」 的结果。

```csharp
// 静态调用，不需要实例
ConfigurationManager.GetAppSettings("example");
```

## 使用示例

```csharp
var manager = ConfigurationManager.Current;
```

## 参见

- [本区域目录](../)