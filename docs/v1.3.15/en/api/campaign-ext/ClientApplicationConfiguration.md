<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientApplicationConfiguration`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientApplicationConfiguration

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientApplicationConfiguration`
**Area:** campaign-ext

## Overview

`ClientApplicationConfiguration` lives in `TaleWorlds.Diamond.ClientApplication`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static string GetDefaultConfigurationFromFile()`

**Purpose:** Gets the current value of `default configuration from file`.

### SetDefaultConfigurationCategory
`public static void SetDefaultConfigurationCategory(string category)`

**Purpose:** Sets the value or state of `default configuration category`.

### FillFrom
`public void FillFrom(string configurationName)`

**Purpose:** Handles logic related to `fill from`.

### FillFrom
`public void FillFrom(string configurationCategory, string configurationName)`

**Purpose:** Handles logic related to `fill from`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
