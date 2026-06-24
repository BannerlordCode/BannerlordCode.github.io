<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ColorExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ColorExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ColorExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ColorExtensions.cs`

## 概述

`ColorExtensions` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddFactorInHSB
`public static Color AddFactorInHSB(this Color rgbColor, float hueDifference, float saturationDifference, float brighnessDifference)`

**用途 / Purpose:** 向当前集合/状态中添加 `factor in h s b`。

## 使用示例

```csharp
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)