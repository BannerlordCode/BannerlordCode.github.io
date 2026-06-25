---
title: "GalaxyTypeAwareListenerConnectionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GalaxyTypeAwareListenerConnectionData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyTypeAwareListenerConnectionData

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class GalaxyTypeAwareListenerConnectionData : IGalaxyListener`
**Base:** `IGalaxyListener`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyTypeAwareListenerConnectionData.cs`

## 概述

`GalaxyTypeAwareListenerConnectionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `GalaxyTypeAwareListenerConnectionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Dispose
`public override void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetListenerType
`public static ListenerType GetListenerType()`

**用途 / Purpose:** 获取 `listener type` 的当前值。

## 使用示例

```csharp
var implementation = new CustomGalaxyTypeAwareListenerConnectionData();
```

## 参见

- [完整类目录](../catalog)