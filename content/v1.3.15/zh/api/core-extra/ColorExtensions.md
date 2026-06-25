---
title: "ColorExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ColorExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ColorExtensions

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class ColorExtensions`
**领域:** core-extra

## 概述

`ColorExtensions` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddFactorInHSB
`public static Color AddFactorInHSB(this Color rgbColor, float hueDifference, float saturationDifference, float brighnessDifference)`

**用途 / Purpose:** 向当前集合/状态中添加 `factor in h s b`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
