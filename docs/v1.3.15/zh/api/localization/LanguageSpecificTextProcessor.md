<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LanguageSpecificTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LanguageSpecificTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor
**模块:** TaleWorlds.Localization
**类型:** `public abstract class LanguageSpecificTextProcessor`
**领域:** localization

## 概述

`LanguageSpecificTextProcessor` 位于 `TaleWorlds.Localization.TextProcessor`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage { get; }` |

## 主要方法

### ProcessToken
`public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**用途 / Purpose:** 处理 `process token` 相关逻辑。

### ClearTemporaryData
`public abstract void ClearTemporaryData()`

**用途 / Purpose:** 处理 `clear temporary data` 相关逻辑。

### Process
`public string Process(string text)`

**用途 / Purpose:** 处理 `process` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomLanguageSpecificTextProcessor();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
