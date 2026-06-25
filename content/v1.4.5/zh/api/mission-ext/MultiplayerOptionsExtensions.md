---
title: "MultiplayerOptionsExtensions"
description: "MultiplayerOptionsExtensions 的自动生成类参考。"
---
# MultiplayerOptionsExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerOptionsExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerOptionsExtensions.cs`

## 概述

`MultiplayerOptionsExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetValueText
`public static string GetValueText(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value text 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetBoolValue
`public static bool GetBoolValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bool value 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetBoolValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetIntValue
`public static int GetIntValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 int value 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetIntValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetStrValue
`public static string GetStrValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 str value 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetStrValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, bool value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.SetValue(optionType, false, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, int value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.SetValue(optionType, 0, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, string value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.SetValue(optionType, "example", multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetMinimumValue
`public static int GetMinimumValue(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 minimum value 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetMinimumValue(optionType);
```

### GetMaximumValue
`public static int GetMaximumValue(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum value 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetMaximumValue(optionType);
```

### GetOptionProperty
`public static MultiplayerOptionsProperty GetOptionProperty(this MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option property 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerOptionsExtensions.GetOptionProperty(optionType);
```

## 使用示例

```csharp
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

## 参见

- [本区域目录](../)