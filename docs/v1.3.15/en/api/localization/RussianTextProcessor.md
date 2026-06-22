<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RussianTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RussianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** class
**Area:** Localization

## Overview

> This is an auto-generated stub. `RussianTextProcessor` is a class in the `TaleWorlds.Localization.TextProcessor.LanguageProcessors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)