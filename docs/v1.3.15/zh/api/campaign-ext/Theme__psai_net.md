<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Theme`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Theme

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Theme`
**Base:** 无
**File:** `TaleWorlds.PSAI/net/Theme.cs`

## 概述

`Theme` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities
`public static bool ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(ThemeInterruptionBehavior interruptionBehavior)`

**用途 / Purpose:** 处理 `theme interruption behavior requires evaluation of segment compatibilities` 相关逻辑。

### ThemeTypeToString
`public static string ThemeTypeToString(ThemeType themeType)`

**用途 / Purpose:** 处理 `theme type to string` 相关逻辑。

### GetThemeInterruptionBehavior
`public static ThemeInterruptionBehavior GetThemeInterruptionBehavior(ThemeType sourceThemeType, ThemeType targetThemeType)`

**用途 / Purpose:** 获取 `theme interruption behavior` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

## 参见

- [完整类目录](../catalog)