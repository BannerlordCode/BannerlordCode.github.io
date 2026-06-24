<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class TooltipHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## 概述

`TooltipHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TooltipHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSendTroopsPowerContextTooltipForMapEvent
`public static TextObject GetSendTroopsPowerContextTooltipForMapEvent()`

**用途 / Purpose:** 获取 `send troops power context tooltip for map event` 的当前值。

### GetSendTroopsPowerContextTooltipForSiege
`public static TextObject GetSendTroopsPowerContextTooltipForSiege()`

**用途 / Purpose:** 获取 `send troops power context tooltip for siege` 的当前值。

## 使用示例

```csharp
TooltipHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)