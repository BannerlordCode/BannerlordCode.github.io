---
title: "ManagedOptions"
description: "ManagedOptions 的自动生成类参考。"
---
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ManagedOptions.cs`

## 概述

`ManagedOptions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptionsType changedManagedOptionsType)`

**用途 / Purpose:** 在 managed option changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ManagedOptions 实例
ManagedOptions managedOptions = ...;
managedOptions.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

### GetConfig
`public static float GetConfig(ManagedOptionsType type)`

**用途 / Purpose:** 读取并返回当前对象中 config 的结果。

```csharp
// 静态调用，不需要实例
ManagedOptions.GetConfig(type);
```

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptionsType type)`

**用途 / Purpose:** 读取并返回当前对象中 default config 的结果。

```csharp
// 静态调用，不需要实例
ManagedOptions.GetDefaultConfig(type);
```

### SetConfig
`public static void SetConfig(ManagedOptionsType type, float value)`

**用途 / Purpose:** 为 config 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ManagedOptions.SetConfig(type, 0);
```

### SaveConfig
`public static SaveResult SaveConfig()`

**用途 / Purpose:** 将 config 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
ManagedOptions.SaveConfig();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ManagedOptions managedOptions = ...;
managedOptions.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

## 参见

- [本区域目录](../)