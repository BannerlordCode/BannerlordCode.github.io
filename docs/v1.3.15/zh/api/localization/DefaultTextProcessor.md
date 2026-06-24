<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor
**模块:** TaleWorlds.Localization
**类型:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**领域:** localization

## 概述

`DefaultTextProcessor` 位于 `TaleWorlds.Localization.TextProcessor`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |

## 主要方法

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**用途 / Purpose:** 处理 `process token` 相关逻辑。

### ClearTemporaryData
`public override void ClearTemporaryData()`

**用途 / Purpose:** 处理 `clear temporary data` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 DefaultTextProcessor 实例，再调用它的公开方法
var value = new DefaultTextProcessor();
value.ProcessToken("example", cursorPos, "example", "example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
