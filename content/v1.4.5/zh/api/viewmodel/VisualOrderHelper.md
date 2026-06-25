---
title: "VisualOrderHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualOrderHelper`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VisualOrderHelper

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderHelper.cs`

## 概述

`VisualOrderHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `VisualOrderHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesFormationHaveOrderType
`public static bool DoesFormationHaveOrderType(Formation formation, OrderType type)`

**用途 / Purpose:** 处理 `does formation have order type` 相关逻辑。

## 使用示例

```csharp
VisualOrderHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)