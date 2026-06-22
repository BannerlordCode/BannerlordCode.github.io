<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RussianTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RussianTextProcessor

**命名空间:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**模块:** TaleWorlds.Localization
**类型:** 类 class class
**领域:** 本地化 Localization

## 概述

> 本页为自动生成的存根。`RussianTextProcessor` 是 `TaleWorlds.Localization.TextProcessor.LanguageProcessors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |


## 主要方法

### ClearTemporaryData

```csharp
public override void ClearTemporaryData()
```

### ProcessToken

```csharp
public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
```

### PrepareNounCheckString

```csharp
public string PrepareNounCheckString(string noun)
```

### PrepareAdjectiveCheckString

```csharp
public string PrepareAdjectiveCheckString(string adj)
```

### GetProcessedNouns

```csharp
public static string GetProcessedNouns(string str, string gender, string tokens = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)