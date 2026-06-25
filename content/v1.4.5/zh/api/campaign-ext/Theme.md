---
title: "Theme"
description: "Theme 的自动生成类参考。"
---
# Theme

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Theme`
**Base:** 无
**File:** `bin/TaleWorlds.PSAI/psai.net/Theme.cs`

## 概述

`Theme` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities
`public static bool ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(ThemeInterruptionBehavior interruptionBehavior)`

**用途 / Purpose:** 处理与 「theme interruption behavior requires evaluation of segment compatibilities」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

### ThemeTypeToString
`public static string ThemeTypeToString(ThemeType themeType)`

**用途 / Purpose:** 处理与 「theme type to string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Theme.ThemeTypeToString(themeType);
```

### GetThemeInterruptionBehavior
`public static ThemeInterruptionBehavior GetThemeInterruptionBehavior(ThemeType sourceThemeType, ThemeType targetThemeType)`

**用途 / Purpose:** 读取并返回当前对象中 「theme interruption behavior」 的结果。

```csharp
// 静态调用，不需要实例
Theme.GetThemeInterruptionBehavior(sourceThemeType, targetThemeType);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.ToString();
```

## 使用示例

```csharp
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

## 参见

- [本区域目录](../)