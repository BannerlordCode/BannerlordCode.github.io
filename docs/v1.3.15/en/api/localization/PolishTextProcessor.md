<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PolishTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PolishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** class
**Area:** Localization

## Overview

> This is an auto-generated stub. `PolishTextProcessor` is a class in the `TaleWorlds.Localization.TextProcessor.LanguageProcessors` namespace.
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

### GetProcessedNouns

```csharp
public static string GetProcessedNouns(string str, string gender, string tokens = null)
```

### GetProcessedAdjectives

```csharp
public static string GetProcessedAdjectives(string str, string gender, string tokens = null)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)