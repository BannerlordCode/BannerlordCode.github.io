---
title: "MBTextModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBTextModel`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBTextModel

**命名空间:** TaleWorlds.Localization.TextProcessor
**模块:** TaleWorlds.Localization
**类型:** `public class MBTextModel`
**领域:** localization

## 概述

`MBTextModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MBTextModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
Game.Current.ReplaceModel<MBTextModel>(new MyMBTextModel());
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
