---
title: "ConstantDefinition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConstantDefinition`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConstantDefinition

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ConstantDefinition`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs`

## 概述

`ConstantDefinition` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Value` | `public string Value { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `BrushName` | `public string BrushName { get; set; }` |
| `LayerName` | `public string LayerName { get; set; }` |
| `Additive` | `public string Additive { get; set; }` |
| `Prefix` | `public string Prefix { get; set; }` |
| `Suffix` | `public string Suffix { get; set; }` |
| `MultiplyResult` | `public float MultiplyResult { get; set; }` |
| `OnTrueValue` | `public string OnTrueValue { get; set; }` |
| `OnFalseValue` | `public string OnFalseValue { get; set; }` |
| `Type` | `public ConstantDefinitionType Type { get; set; }` |

## 主要方法

### GetValue
`public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetActualValueOf
`public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 获取 `actual value of` 的当前值。

## 使用示例

```csharp
var value = new ConstantDefinition();
value.GetValue(brushFactory, spriteData, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## 参见

- [完整类目录](../catalog)