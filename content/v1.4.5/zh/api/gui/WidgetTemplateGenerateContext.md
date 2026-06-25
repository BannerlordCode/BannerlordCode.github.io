---
title: "WidgetTemplateGenerateContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetTemplateGenerateContext`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetTemplateGenerateContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplateGenerateContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/WidgetTemplateGenerateContext.cs`

## 概述

`WidgetTemplateGenerateContext` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### CreateAsRoot
`public static WidgetTemplateGenerateContext CreateAsRoot(UICodeGenerationContext uiCodeGenerationContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data)`

**用途 / Purpose:** 创建一个 `as root` 实例或对象。

### CreateAsDependendPrefab
`public static WidgetTemplateGenerateContext CreateAsDependendPrefab(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data, Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**用途 / Purpose:** 创建一个 `as dependend prefab` 实例或对象。

### CreateAsInheritedDependendPrefab
`public static WidgetTemplateGenerateContext CreateAsInheritedDependendPrefab(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data, Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**用途 / Purpose:** 创建一个 `as inherited dependend prefab` 实例或对象。

### CreateAsCustomWidgetTemplate
`public static WidgetTemplateGenerateContext CreateAsCustomWidgetTemplate(UICodeGenerationContext uiCodeGenerationContext, PrefabDependencyContext prefabDependencyContext, WidgetTemplate widgetTemplate, string identifierName, VariableCollection variableCollection, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data)`

**用途 / Purpose:** 创建一个 `as custom widget template` 实例或对象。

### GetWidgetTypeWithinPrefabRoots
`public Type GetWidgetTypeWithinPrefabRoots(string typeName)`

**用途 / Purpose:** 获取 `widget type within prefab roots` 的当前值。

### CheckIfInheritsAnotherPrefab
`public bool CheckIfInheritsAnotherPrefab()`

**用途 / Purpose:** 处理 `check if inherits another prefab` 相关逻辑。

### GenerateInto
`public void GenerateInto(NamespaceCode namespaceCode)`

**用途 / Purpose:** 处理 `generate into` 相关逻辑。

### GenerateCreatorMethod
`public MethodCode GenerateCreatorMethod()`

**用途 / Purpose:** 处理 `generate creator method` 相关逻辑。

### GetUseableName
`public static string GetUseableName(string name)`

**用途 / Purpose:** 获取 `useable name` 的当前值。

### IsBuiltinType
`public bool IsBuiltinType(WidgetTemplate widgetTemplate)`

**用途 / Purpose:** 处理 `is builtin type` 相关逻辑。

### GetCodeFileType
`public static string GetCodeFileType(Type type)`

**用途 / Purpose:** 获取 `code file type` 的当前值。

## 使用示例

```csharp
WidgetTemplateGenerateContext.CreateAsRoot(uiCodeGenerationContext, "example", "example", variantExtension, dictionary<string, data);
```

## 参见

- [完整类目录](../catalog)