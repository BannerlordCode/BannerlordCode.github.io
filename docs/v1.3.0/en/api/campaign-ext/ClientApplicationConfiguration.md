<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientApplicationConfiguration`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClientApplicationConfiguration

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientApplicationConfiguration`
**Base:** none
**File:** `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs`

## Overview

`ClientApplicationConfiguration` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

## See Also

- [Complete Class Catalog](../catalog)