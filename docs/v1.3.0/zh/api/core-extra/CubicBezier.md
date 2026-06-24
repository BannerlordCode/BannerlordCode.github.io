<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CubicBezier`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CubicBezier`
**Base:** 无
**File:** `TaleWorlds.Library/CubicBezier.cs`

## 概述

`CubicBezier` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateEase
`public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**用途 / Purpose:** 创建一个 `ease` 实例或对象。

### CreateYBeginToYEndWithRelativeControlDirs
`public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)`

**用途 / Purpose:** 创建一个 `y begin to y end with relative control dirs` 实例或对象。

### CreateYBeginToYEnd
`public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**用途 / Purpose:** 创建一个 `y begin to y end` 实例或对象。

### Sample
`public double Sample(double x)`

**用途 / Purpose:** 处理 `sample` 相关逻辑。

## 使用示例

```csharp
CubicBezier.CreateEase(0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)