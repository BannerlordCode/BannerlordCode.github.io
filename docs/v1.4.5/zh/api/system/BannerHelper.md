<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BannerHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/BannerHelper.cs`

## 概述

`BannerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BannerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomBannerItemForHero
`public static ItemObject GetRandomBannerItemForHero(Hero hero)`

**用途 / Purpose:** 获取 `random banner item for hero` 的当前值。

### AddBannerBonusForBanner
`public static void AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 向当前集合/状态中添加 `banner bonus for banner`。

## 使用示例

```csharp
BannerHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)