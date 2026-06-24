<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetExtensions`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetExtensions

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetExtensions`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs`

## 概述

`WidgetExtensions` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetWidgetAttributeFromString
`public static void SetWidgetAttributeFromString(object target, string name, string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, XmlElement> customElements, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 设置 `widget attribute from string` 的值或状态。

### GetWidgetAttributeType
`public static Type GetWidgetAttributeType(object target, string name)`

**用途 / Purpose:** 获取 `widget attribute type` 的当前值。

### SetWidgetAttribute
`public static void SetWidgetAttribute(UIContext context, object target, string name, object value)`

**用途 / Purpose:** 设置 `widget attribute` 的值或状态。

## 使用示例

```csharp
WidgetExtensions.SetWidgetAttributeFromString(target, "example", "example", brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, customElements, dictionary<string, "example");
```

## 参见

- [完整类目录](../catalog)