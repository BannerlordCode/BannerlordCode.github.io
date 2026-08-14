---
title: "EquipmentHelper"
description: "EquipmentHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 AssignHeroEquipmentFromEquipment 对应的操作。

```csharp
// 静态调用，不需要实例
EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, equipment);
```

## 使用示例

```csharp
EquipmentHelper.Initialize();
```

## 参见

- [本区域目录](../)