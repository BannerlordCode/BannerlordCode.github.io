---
title: "CraftingHelper"
description: "CraftingHelper 的自动生成类参考。"
---
# CraftingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CraftingHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`

## 概述

`CraftingHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CraftingHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAvailableHeroesForCrafting
`public static IEnumerable<Hero> GetAvailableHeroesForCrafting()`

**用途 / Purpose:** 读取并返回当前对象中 available heroes for crafting 的结果。

```csharp
// 静态调用，不需要实例
CraftingHelper.GetAvailableHeroesForCrafting();
```

### ChangeCurrentCraftingTemplate
`public static void ChangeCurrentCraftingTemplate(CraftingTemplate craftingTemplate)`

**用途 / Purpose:** 调用 ChangeCurrentCraftingTemplate 对应的操作。

```csharp
// 静态调用，不需要实例
CraftingHelper.ChangeCurrentCraftingTemplate(craftingTemplate);
```

### OpenCrafting
`public static void OpenCrafting(CraftingTemplate craftingTemplate, CraftingState oldState = null)`

**用途 / Purpose:** 打开crafting对应的资源或界面。

```csharp
// 静态调用，不需要实例
CraftingHelper.OpenCrafting(craftingTemplate, null);
```

## 使用示例

```csharp
CraftingHelper.Initialize();
```

## 参见

- [本区域目录](../)