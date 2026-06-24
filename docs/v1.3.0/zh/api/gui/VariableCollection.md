<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VariableCollection`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VariableCollection

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VariableCollection`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.CodeGenerator/VariableCollection.cs`

## 概述

`VariableCollection` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `ConstantTypes` | `public Dictionary<string, ConstantGenerationContext> ConstantTypes { get; }` |
| `ParameterTypes` | `public Dictionary<string, ParameterGenerationContext> ParameterTypes { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; }` |

## 主要方法

### GetUseableName
`public static string GetUseableName(string name)`

**用途 / Purpose:** 获取 `useable name` 的当前值。

### SetGivenParameters
`public void SetGivenParameters(Dictionary<string, WidgetAttributeTemplate> givenParameters)`

**用途 / Purpose:** 设置 `given parameters` 的值或状态。

### FillFromPrefab
`public void FillFromPrefab(WidgetPrefab prefab)`

**用途 / Purpose:** 处理 `fill from prefab` 相关逻辑。

### FillVisualDefinitionCreators
`public void FillVisualDefinitionCreators(ClassCode classCode)`

**用途 / Purpose:** 处理 `fill visual definition creators` 相关逻辑。

### GetConstantValue
`public string GetConstantValue(string constantName)`

**用途 / Purpose:** 获取 `constant value` 的当前值。

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string parameterName)`

**用途 / Purpose:** 获取 `parameter default value` 的当前值。

### GetParameterValue
`public string GetParameterValue(string parameterName)`

**用途 / Purpose:** 获取 `parameter value` 的当前值。

### GetPropertyInfo
`public PropertyInfo GetPropertyInfo(WidgetTemplate widgetTemplate, string propertyName)`

**用途 / Purpose:** 获取 `property info` 的当前值。

### GetPropertyInfo
`public static PropertyInfo GetPropertyInfo(Type type, string name)`

**用途 / Purpose:** 获取 `property info` 的当前值。

## 使用示例

```csharp
VariableCollection.GetUseableName("example");
```

## 参见

- [完整类目录](../catalog)