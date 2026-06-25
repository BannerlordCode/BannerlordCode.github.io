---
title: "EquipmentHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class EquipmentHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`

## 概述

`EquipmentHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `EquipmentHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AssignHeroEquipmentFromEquipment
`public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)`

**用途 / Purpose:** 处理 `assign hero equipment from equipment` 相关逻辑。

## 使用示例

```csharp
EquipmentHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)