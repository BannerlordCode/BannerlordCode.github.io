---
title: "MultiplayerOptionsExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerOptionsExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerOptionsExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerOptionsExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerOptionsExtensions.cs`

## 概述

`MultiplayerOptionsExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetValueText
`public static string GetValueText(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `value text` 的当前值。

### GetBoolValue
`public static bool GetBoolValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `bool value` 的当前值。

### GetIntValue
`public static int GetIntValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `int value` 的当前值。

### GetStrValue
`public static string GetStrValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `str value` 的当前值。

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, bool value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, int value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, string value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### GetMinimumValue
`public static int GetMinimumValue(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `minimum value` 的当前值。

### GetMaximumValue
`public static int GetMaximumValue(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `maximum value` 的当前值。

### GetOptionProperty
`public static MultiplayerOptionsProperty GetOptionProperty(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `option property` 的当前值。

## 使用示例

```csharp
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

## 参见

- [完整类目录](../catalog)