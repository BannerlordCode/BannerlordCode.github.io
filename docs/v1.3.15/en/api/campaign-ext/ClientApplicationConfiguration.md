<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientApplicationConfiguration`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientApplicationConfiguration

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClientApplicationConfiguration` is a class in the `TaleWorlds.Diamond.ClientApplication` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `InheritFrom` | `public string InheritFrom { get; set; }` |
| `Clients` | `public string Clients { get; set; }` |
| `SessionProviderType` | `public SessionProviderType SessionProviderType { get; set; }` |
| `Parameters` | `public ParameterContainer Parameters { get; set; }` |


## Key Methods

### GetDefaultConfigurationFromFile

```csharp
public static string GetDefaultConfigurationFromFile()
```

### SetDefaultConfigurationCategory

```csharp
public static void SetDefaultConfigurationCategory(string category)
```

### FillFrom

```csharp
public void FillFrom(string configurationName)
```

### FillFrom

```csharp
public void FillFrom(string configurationCategory, string configurationName)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)