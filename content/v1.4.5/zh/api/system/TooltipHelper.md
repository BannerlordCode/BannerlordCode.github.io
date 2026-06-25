---
title: "TooltipHelper"
description: "TooltipHelper 的自动生成类参考。"
---
# TooltipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class TooltipHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## 概述

`TooltipHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TooltipHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSendTroopsPowerContextTooltipForMapEvent
`public static TextObject GetSendTroopsPowerContextTooltipForMapEvent()`

**用途 / Purpose:** 读取并返回当前对象中 「send troops power context tooltip for map event」 的结果。

```csharp
// 静态调用，不需要实例
TooltipHelper.GetSendTroopsPowerContextTooltipForMapEvent();
```

### GetSendTroopsPowerContextTooltipForSiege
`public static TextObject GetSendTroopsPowerContextTooltipForSiege()`

**用途 / Purpose:** 读取并返回当前对象中 「send troops power context tooltip for siege」 的结果。

```csharp
// 静态调用，不需要实例
TooltipHelper.GetSendTroopsPowerContextTooltipForSiege();
```

## 使用示例

```csharp
TooltipHelper.Initialize();
```

## 参见

- [本区域目录](../)