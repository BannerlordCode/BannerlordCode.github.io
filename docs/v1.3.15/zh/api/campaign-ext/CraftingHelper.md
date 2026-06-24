<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `available heroes for crafting` 的当前值。

### ChangeCurrentCraftingTemplate
`public static void ChangeCurrentCraftingTemplate(CraftingTemplate craftingTemplate)`

**用途 / Purpose:** 处理 `change current crafting template` 相关逻辑。

### OpenCrafting
`public static void OpenCrafting(CraftingTemplate craftingTemplate, CraftingState oldState = null)`

**用途 / Purpose:** 处理 `open crafting` 相关逻辑。

## 使用示例

```csharp
CraftingHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)