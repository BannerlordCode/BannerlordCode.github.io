<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletExtensions

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** `public static class GauntletExtensions`
**领域:** campaign-ext

## 概述

`GauntletExtensions` 位于 `TaleWorlds.GauntletUI`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetGlobalAlphaRecursively
`public static void SetGlobalAlphaRecursively(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 设置 `global alpha recursively` 的值或状态。

### SetAlpha
`public static void SetAlpha(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 设置 `alpha` 的值或状态。

### RegisterBrushStatesOfWidget
`public static void RegisterBrushStatesOfWidget(this Widget widget)`

**用途 / Purpose:** 处理 `register brush states of widget` 相关逻辑。

### GetFullIDPath
`public static string GetFullIDPath(this Widget widget)`

**用途 / Purpose:** 获取 `full i d path` 的当前值。

### ApplyActionForThisAndAllChildren
`public static void ApplyActionForThisAndAllChildren(this Widget widget, Action<Widget> action)`

**用途 / Purpose:** 将 `action for this and all children` 应用到当前对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
