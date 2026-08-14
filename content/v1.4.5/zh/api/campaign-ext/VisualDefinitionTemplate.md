---
title: "VisualDefinitionTemplate"
description: "VisualDefinitionTemplate 的自动生成类参考。"
---
# VisualDefinitionTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualDefinitionTemplate`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs`

## 概述

`VisualDefinitionTemplate` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `TransitionDuration` | `public float TransitionDuration { get; set; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; set; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; set; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualStateTemplate> VisualStates { get; }` |

## 主要方法

### AddVisualState
`public void AddVisualState(VisualStateTemplate visualState)`

**用途 / Purpose:** 将 visual state 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VisualDefinitionTemplate 实例
VisualDefinitionTemplate visualDefinitionTemplate = ...;
visualDefinitionTemplate.AddVisualState(visualState);
```

### CreateVisualDefinition
`public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 构建一个新的 visual definition 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 VisualDefinitionTemplate 实例
VisualDefinitionTemplate visualDefinitionTemplate = ...;
var result = visualDefinitionTemplate.CreateVisualDefinition(brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualDefinitionTemplate visualDefinitionTemplate = ...;
visualDefinitionTemplate.AddVisualState(visualState);
```

## 参见

- [本区域目录](../)