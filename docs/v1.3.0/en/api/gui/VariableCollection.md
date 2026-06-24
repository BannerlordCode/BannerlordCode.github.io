<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VariableCollection`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VariableCollection

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VariableCollection`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/VariableCollection.cs`

## Overview

`VariableCollection` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `ConstantTypes` | `public Dictionary<string, ConstantGenerationContext> ConstantTypes { get; }` |
| `ParameterTypes` | `public Dictionary<string, ParameterGenerationContext> ParameterTypes { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; }` |

## Key Methods

### GetUseableName
`public static string GetUseableName(string name)`

**Purpose:** Gets the current value of `useable name`.

### SetGivenParameters
`public void SetGivenParameters(Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**Purpose:** Sets the value or state of `given parameters`.

### FillFromPrefab
`public void FillFromPrefab(WidgetPrefab prefab)`

**Purpose:** Handles logic related to `fill from prefab`.

### FillVisualDefinitionCreators
`public void FillVisualDefinitionCreators(ClassCode classCode)`

**Purpose:** Handles logic related to `fill visual definition creators`.

### GetConstantValue
`public string GetConstantValue(string constantName)`

**Purpose:** Gets the current value of `constant value`.

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string parameterName)`

**Purpose:** Gets the current value of `parameter default value`.

### GetParameterValue
`public string GetParameterValue(string parameterName)`

**Purpose:** Gets the current value of `parameter value`.

### GetPropertyInfo
`public PropertyInfo GetPropertyInfo(WidgetTemplate widgetTemplate, string propertyName)`

**Purpose:** Gets the current value of `property info`.

### GetPropertyInfo
`public static PropertyInfo GetPropertyInfo(Type type, string name)`

**Purpose:** Gets the current value of `property info`.

## Usage Example

```csharp
VariableCollection.GetUseableName("example");
```

## See Also

- [Complete Class Catalog](../catalog)