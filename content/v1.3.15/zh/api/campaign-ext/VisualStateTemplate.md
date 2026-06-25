---
title: "VisualStateTemplate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualStateTemplate`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualStateTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualStateTemplate`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs`

## 概述

`VisualStateTemplate` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public string State { get; set; }` |

## 主要方法

### SetAttribute
`public void SetAttribute(string name, string value)`

**用途 / Purpose:** 设置 `attribute` 的值或状态。

### GetAttributes
`public Dictionary<string, string> GetAttributes()`

**用途 / Purpose:** 获取 `attributes` 的当前值。

### ClearAttribute
`public void ClearAttribute(string name)`

**用途 / Purpose:** 处理 `clear attribute` 相关逻辑。

### CreateVisualState
`public VisualState CreateVisualState(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**用途 / Purpose:** 创建一个 `visual state` 实例或对象。

## 使用示例

```csharp
var value = new VisualStateTemplate();
value.SetAttribute("example", "example");
```

## 参见

- [完整类目录](../catalog)