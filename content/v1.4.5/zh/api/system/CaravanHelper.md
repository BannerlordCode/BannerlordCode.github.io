---
title: "CaravanHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravanHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CaravanHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## 概述

`CaravanHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CaravanHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomCaravanTemplate
`public static PartyTemplateObject GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)`

**用途 / Purpose:** 获取 `random caravan template` 的当前值。

## 使用示例

```csharp
CaravanHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)