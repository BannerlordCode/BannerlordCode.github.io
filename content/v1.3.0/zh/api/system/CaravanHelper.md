---
title: "CaravanHelper"
description: "CaravanHelper 的自动生成类参考。"
---
# CaravanHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CaravanHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## 概述

`CaravanHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CaravanHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomCaravanTemplate
`public static PartyTemplateObject GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)`

**用途 / Purpose:** 读取并返回当前对象中 「random caravan template」 的结果。

```csharp
// 静态调用，不需要实例
CaravanHelper.GetRandomCaravanTemplate(culture, false, false);
```

## 使用示例

```csharp
CaravanHelper.Initialize();
```

## 参见

- [本区域目录](../)