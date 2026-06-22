<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LanguageSpecificTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** class
**Area:** Localization

## Overview

> This is an auto-generated stub. `LanguageSpecificTextProcessor` is a class in the `TaleWorlds.Localization.TextProcessor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage { get; }` |


## Key Methods

### ProcessToken

```csharp
public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
```

### ClearTemporaryData

```csharp
public abstract void ClearTemporaryData()
```

### Process

```csharp
public string Process(string text)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)