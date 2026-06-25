---
title: "ConstantDefinition"
description: "ConstantDefinition 的自动生成类参考。"
---
# ConstantDefinition

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ConstantDefinition`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 ConstantDefinition 实例
ConstantDefinition constantDefinition = ...;
var result = constantDefinition.GetValue(brushFactory, spriteData, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

### GetActualValueOf
`public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 读取并返回当前对象中 actual value of 的结果。

```csharp
// 静态调用，不需要实例
ConstantDefinition.GetActualValueOf("example", brushFactory, spriteData, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ConstantDefinition constantDefinition = ...;
constantDefinition.GetValue(brushFactory, spriteData, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## 参见

- [本区域目录](../)