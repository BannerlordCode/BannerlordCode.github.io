---
title: "CosmeticsManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CosmeticsManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Cosmetics/CosmeticsManager.cs`

## 概述

`CosmeticsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CosmeticsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCosmeticElement
`public static CosmeticElement GetCosmeticElement(string cosmeticId)`

**用途 / Purpose:** 获取 `cosmetic element` 的当前值。

### LoadFromXml
`public static void LoadFromXml(string path)`

**用途 / Purpose:** 加载 `from xml` 数据。

## 使用示例

```csharp
var manager = CosmeticsManager.Current;
```

## 参见

- [完整类目录](../catalog)