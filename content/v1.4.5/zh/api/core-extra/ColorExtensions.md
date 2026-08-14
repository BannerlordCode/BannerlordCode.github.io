---
title: "ColorExtensions"
description: "ColorExtensions 的自动生成类参考。"
---
# ColorExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ColorExtensions`
**Base:** 无
**File:** `TaleWorlds.Library/ColorExtensions.cs`

## 概述

`ColorExtensions` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddFactorInHSB
`public static Color AddFactorInHSB(this Color rgbColor, float hueDifference, float saturationDifference, float brighnessDifference)`

**用途 / Purpose:** 将 factor in h s b 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## 使用示例

```csharp
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## 参见

- [本区域目录](../)