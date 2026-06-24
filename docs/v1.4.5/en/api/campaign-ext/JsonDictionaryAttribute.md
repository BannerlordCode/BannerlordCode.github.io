<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonDictionaryAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonDictionaryAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonDictionaryAttribute : JsonContainerAttribute`
**Base:** `JsonContainerAttribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonDictionaryAttribute.cs`

## Overview

`JsonDictionaryAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonDictionaryAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[JsonDictionaryAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)