---
title: "ManagedOptions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedOptions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/ManagedOptions.cs`

## 概述

`ManagedOptions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetConfig
`public static float GetConfig(ManagedOptions.ManagedOptionsType type)`

**用途 / Purpose:** 获取 `config` 的当前值。

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptions.ManagedOptionsType type)`

**用途 / Purpose:** 获取 `default config` 的当前值。

### SetConfig
`public static void SetConfig(ManagedOptions.ManagedOptionsType type, float value)`

**用途 / Purpose:** 设置 `config` 的值或状态。

### SaveConfig
`public static SaveResult SaveConfig()`

**用途 / Purpose:** 保存 `config` 数据。

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType)`

**用途 / Purpose:** 当 `managed option changed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
ManagedOptions.GetConfig(type);
```

## 参见

- [完整类目录](../catalog)