---
title: "HyperlinkTexts"
description: "HyperlinkTexts 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「settlement hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

### GetKingdomHyperlinkText
`public static TextObject GetKingdomHyperlinkText(string link, TextObject kingdomName)`

**用途 / Purpose:** 读取并返回当前对象中 「kingdom hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetKingdomHyperlinkText("example", kingdomName);
```

### GetHeroHyperlinkText
`public static TextObject GetHeroHyperlinkText(string link, TextObject heroName)`

**用途 / Purpose:** 读取并返回当前对象中 「hero hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetHeroHyperlinkText("example", heroName);
```

### GetConceptHyperlinkText
`public static TextObject GetConceptHyperlinkText(string link, TextObject conceptName)`

**用途 / Purpose:** 读取并返回当前对象中 「concept hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetConceptHyperlinkText("example", conceptName);
```

### GetClanHyperlinkText
`public static TextObject GetClanHyperlinkText(string link, TextObject clanName)`

**用途 / Purpose:** 读取并返回当前对象中 「clan hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetClanHyperlinkText("example", clanName);
```

### GetShipHyperlinkText
`public static TextObject GetShipHyperlinkText(string link, TextObject shipHullName)`

**用途 / Purpose:** 读取并返回当前对象中 「ship hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetShipHyperlinkText("example", shipHullName);
```

### GetUnitHyperlinkText
`public static TextObject GetUnitHyperlinkText(string link, TextObject unitName)`

**用途 / Purpose:** 读取并返回当前对象中 「unit hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetUnitHyperlinkText("example", unitName);
```

### GetGenericHyperlinkText
`public static string GetGenericHyperlinkText(string link, string name)`

**用途 / Purpose:** 读取并返回当前对象中 「generic hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetGenericHyperlinkText("example", "example");
```

### GetGenericImageText
`public static string GetGenericImageText(string meshId, int extend = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「generic image text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetGenericImageText("example", 0);
```

### GetKeyHyperlinkText
`public static string GetKeyHyperlinkText(string keyID, float overrideExtendScale = 1f)`

**用途 / Purpose:** 读取并返回当前对象中 「key hyperlink text」 的结果。

```csharp
// 静态调用，不需要实例
HyperlinkTexts.GetKeyHyperlinkText("example", 0);
```

## 使用示例

```csharp
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

## 参见

- [本区域目录](../)