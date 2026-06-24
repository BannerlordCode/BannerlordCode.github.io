<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HyperlinkTexts`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HyperlinkTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class HyperlinkTexts`
**Base:** 无
**File:** `TaleWorlds.Core/HyperlinkTexts.cs`

## 概述

`HyperlinkTexts` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSettlementHyperlinkText
`public static TextObject GetSettlementHyperlinkText(string link, TextObject settlementName)`

**用途 / Purpose:** 获取 `settlement hyperlink text` 的当前值。

### GetKingdomHyperlinkText
`public static TextObject GetKingdomHyperlinkText(string link, TextObject kingdomName)`

**用途 / Purpose:** 获取 `kingdom hyperlink text` 的当前值。

### GetHeroHyperlinkText
`public static TextObject GetHeroHyperlinkText(string link, TextObject heroName)`

**用途 / Purpose:** 获取 `hero hyperlink text` 的当前值。

### GetConceptHyperlinkText
`public static TextObject GetConceptHyperlinkText(string link, TextObject conceptName)`

**用途 / Purpose:** 获取 `concept hyperlink text` 的当前值。

### GetClanHyperlinkText
`public static TextObject GetClanHyperlinkText(string link, TextObject clanName)`

**用途 / Purpose:** 获取 `clan hyperlink text` 的当前值。

### GetUnitHyperlinkText
`public static TextObject GetUnitHyperlinkText(string link, TextObject unitName)`

**用途 / Purpose:** 获取 `unit hyperlink text` 的当前值。

### GetGenericHyperlinkText
`public static string GetGenericHyperlinkText(string link, string name)`

**用途 / Purpose:** 获取 `generic hyperlink text` 的当前值。

### GetGenericImageText
`public static string GetGenericImageText(string meshId, int extend = 0)`

**用途 / Purpose:** 获取 `generic image text` 的当前值。

### GetKeyHyperlinkText
`public static string GetKeyHyperlinkText(string keyID, float overrideExtendScale = 1f)`

**用途 / Purpose:** 获取 `key hyperlink text` 的当前值。

## 使用示例

```csharp
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

## 参见

- [完整类目录](../catalog)