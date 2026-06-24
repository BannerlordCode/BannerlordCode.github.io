<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetTemplateGenerateContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetTemplateGenerateContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplateGenerateContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/WidgetTemplateGenerateContext.cs`

## Overview

`WidgetTemplateGenerateContext` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `UICodeGenerationContext` | `public UICodeGenerationContext UICodeGenerationContext { get; }` |
| `VariableCollection` | `public VariableCollection VariableCollection { get; }` |
| `PrefabName` | `public string PrefabName { get; }` |
| `VariantName` | `public string VariantName { get; }` |
| `ClassName` | `public string ClassName { get; }` |
| `Data` | `public Dictionary<string, object> Data { get; }` |
| `WidgetCodeGenerationInformations` | `public List<WidgetCodeGenerationInfo> WidgetCodeGenerationInformations { get; }` |
| `PrefabDependencyContext` | `public PrefabDependencyContext PrefabDependencyContext { get; }` |
| `ContextType` | `public WidgetTemplateGenerateContextType ContextType { get; }` |
| `GotLogicalChildrenLocation` | `public bool GotLogicalChildrenLocation { get; }` |

## Key Methods

### CreateAsRoot
`public static WidgetTemplateGenerateContext CreateAsRoot(UICodeGenerationContext uiCodeGenerationContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data)`

**Purpose:** Creates a new `as root` instance or object.

### CreateAsDependendPrefab
`public static WidgetTemplateGenerateContext CreateAsDependendPrefab(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data, Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**Purpose:** Creates a new `as dependend prefab` instance or object.

### CreateAsInheritedDependendPrefab
`public static WidgetTemplateGenerateContext CreateAsInheritedDependendPrefab(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data, Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**Purpose:** Creates a new `as inherited dependend prefab` instance or object.

### CreateAsCustomWidgetTemplate
`public static WidgetTemplateGenerateContext CreateAsCustomWidgetTemplate(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, WidgetTemplate widgetTemplate, string identifierName, VariableCollection variableCollection, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data)`

**Purpose:** Creates a new `as custom widget template` instance or object.

### GetWidgetTypeWithinPrefabRoots
`public Type GetWidgetTypeWithinPrefabRoots(string typeName)`

**Purpose:** Gets the current value of `widget type within prefab roots`.

### CheckIfInheritsAnotherPrefab
`public bool CheckIfInheritsAnotherPrefab()`

**Purpose:** Handles logic related to `check if inherits another prefab`.

### GenerateInto
`public void GenerateInto(NamespaceCode namespaceCode)`

**Purpose:** Handles logic related to `generate into`.

### GenerateCreatorMethod
`public MethodCode GenerateCreatorMethod()`

**Purpose:** Handles logic related to `generate creator method`.

### GetUseableName
`public static string GetUseableName(string name)`

**Purpose:** Gets the current value of `useable name`.

### IsBuiltinType
`public bool IsBuiltinType(WidgetTemplate widgetTemplate)`

**Purpose:** Handles logic related to `is builtin type`.

### GetCodeFileType
`public static string GetCodeFileType(Type type)`

**Purpose:** Gets the current value of `code file type`.

## Usage Example

```csharp
WidgetTemplateGenerateContext.CreateAsRoot(uiCodeGenerationContext, "example", "example", variantExtension, dictionary<string, data);
```

## See Also

- [Complete Class Catalog](../catalog)