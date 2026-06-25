---
title: "HealthDropData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HealthDropData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HealthDropData

**命名空间:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class HealthDropData`
**领域:** mission-ext

## 概述

`HealthDropData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HealthDropData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `MaxHealth` | `public int MaxHealth { get; set; }` |
| `HealthBar` | `public FillBarWidget HealthBar { get; set; }` |
| `HealthDropContainer` | `public Widget HealthDropContainer { get; set; }` |
| `HealthDropBrush` | `public Brush HealthDropBrush { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |

## 使用示例

```csharp
var value = new HealthDropData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
